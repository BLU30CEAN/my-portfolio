from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, File, Form, HTTPException, Query, UploadFile
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_db
from app.deps import require_admin_key
from app.models.entities import AdminEntity, AdminRecord, ImportBatch
from app.schemas.entities import (
    EntityCreate,
    EntityOut,
    EntityUpdate,
    ImportBatchOut,
    ImportResult,
    RecordCreate,
    RecordOut,
    RecordUpdate,
)
from app.services.import_service import apply_import, parse_tabular

router = APIRouter(prefix="/entities", tags=["entities"])


@router.get("", response_model=list[EntityOut])
async def list_entities(db: AsyncSession = Depends(get_db)) -> list[AdminEntity]:
    result = await db.execute(select(AdminEntity).order_by(AdminEntity.created_at.desc()))
    return list(result.scalars().all())


@router.post("", response_model=EntityOut, dependencies=[Depends(require_admin_key)])
async def create_entity(
    body: EntityCreate, db: AsyncSession = Depends(get_db)
) -> AdminEntity:
    entity = AdminEntity(
        slug=body.slug,
        name=body.name,
        description=body.description,
        column_schema=[c.model_dump() for c in body.column_schema],
    )
    db.add(entity)
    try:
        await db.commit()
    except Exception as exc:
        await db.rollback()
        raise HTTPException(status_code=409, detail="slug already exists") from exc
    await db.refresh(entity)
    return entity


@router.get("/{entity_id}", response_model=EntityOut)
async def get_entity(entity_id: uuid.UUID, db: AsyncSession = Depends(get_db)) -> AdminEntity:
    entity = await db.get(AdminEntity, entity_id)
    if not entity:
        raise HTTPException(status_code=404, detail="entity not found")
    return entity


@router.patch("/{entity_id}", response_model=EntityOut, dependencies=[Depends(require_admin_key)])
async def update_entity(
    entity_id: uuid.UUID, body: EntityUpdate, db: AsyncSession = Depends(get_db)
) -> AdminEntity:
    entity = await db.get(AdminEntity, entity_id)
    if not entity:
        raise HTTPException(status_code=404, detail="entity not found")
    if body.name is not None:
        entity.name = body.name
    if body.description is not None:
        entity.description = body.description
    if body.column_schema is not None:
        entity.column_schema = [c.model_dump() for c in body.column_schema]
    await db.commit()
    await db.refresh(entity)
    return entity


@router.delete("/{entity_id}", dependencies=[Depends(require_admin_key)])
async def delete_entity(entity_id: uuid.UUID, db: AsyncSession = Depends(get_db)) -> dict:
    entity = await db.get(AdminEntity, entity_id)
    if not entity:
        raise HTTPException(status_code=404, detail="entity not found")
    await db.delete(entity)
    await db.commit()
    return {"ok": True}


@router.get("/{entity_id}/records", response_model=list[RecordOut])
async def list_records(
    entity_id: uuid.UUID,
    q: str | None = Query(default=None),
    limit: int = Query(default=100, le=500),
    offset: int = Query(default=0, ge=0),
    db: AsyncSession = Depends(get_db),
) -> list[AdminRecord]:
    entity = await db.get(AdminEntity, entity_id)
    if not entity:
        raise HTTPException(status_code=404, detail="entity not found")
    stmt = (
        select(AdminRecord)
        .where(AdminRecord.entity_id == entity_id)
        .order_by(AdminRecord.updated_at.desc())
        .offset(offset)
        .limit(limit)
    )
    result = await db.execute(stmt)
    rows = list(result.scalars().all())
    if q:
        needle = q.lower()
        rows = [
            r
            for r in rows
            if needle in r.external_key.lower()
            or needle in str(r.data).lower()
        ]
    return rows


@router.post(
    "/{entity_id}/records",
    response_model=RecordOut,
    dependencies=[Depends(require_admin_key)],
)
async def create_record(
    entity_id: uuid.UUID, body: RecordCreate, db: AsyncSession = Depends(get_db)
) -> AdminRecord:
    entity = await db.get(AdminEntity, entity_id)
    if not entity:
        raise HTTPException(status_code=404, detail="entity not found")
    rec = AdminRecord(
        entity_id=entity_id, external_key=body.external_key, data=body.data
    )
    db.add(rec)
    try:
        await db.commit()
    except Exception as exc:
        await db.rollback()
        raise HTTPException(status_code=409, detail="external_key conflict") from exc
    await db.refresh(rec)
    return rec


@router.patch(
    "/{entity_id}/records/{record_id}",
    response_model=RecordOut,
    dependencies=[Depends(require_admin_key)],
)
async def update_record(
    entity_id: uuid.UUID,
    record_id: uuid.UUID,
    body: RecordUpdate,
    db: AsyncSession = Depends(get_db),
) -> AdminRecord:
    rec = await db.get(AdminRecord, record_id)
    if not rec or rec.entity_id != entity_id:
        raise HTTPException(status_code=404, detail="record not found")
    if body.external_key is not None:
        rec.external_key = body.external_key
    if body.data is not None:
        rec.data = body.data
    await db.commit()
    await db.refresh(rec)
    return rec


@router.delete(
    "/{entity_id}/records/{record_id}",
    dependencies=[Depends(require_admin_key)],
)
async def delete_record(
    entity_id: uuid.UUID, record_id: uuid.UUID, db: AsyncSession = Depends(get_db)
) -> dict:
    rec = await db.get(AdminRecord, record_id)
    if not rec or rec.entity_id != entity_id:
        raise HTTPException(status_code=404, detail="record not found")
    await db.delete(rec)
    await db.commit()
    return {"ok": True}


@router.post(
    "/{entity_id}/import/preview",
    dependencies=[Depends(require_admin_key)],
)
async def preview_import(
    entity_id: uuid.UUID,
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
) -> dict:
    entity = await db.get(AdminEntity, entity_id)
    if not entity:
        raise HTTPException(status_code=404, detail="entity not found")
    raw = await file.read()
    columns, rows = parse_tabular(file.filename or "upload.csv", raw)
    return {
        "columns": columns,
        "sample_rows": rows[:5],
        "total_rows": len(rows),
    }


@router.post(
    "/{entity_id}/import",
    response_model=ImportResult,
    dependencies=[Depends(require_admin_key)],
)
async def import_file(
    entity_id: uuid.UUID,
    file: UploadFile = File(...),
    mode: str = Form(default="upsert"),
    key_column: str | None = Form(default=None),
    db: AsyncSession = Depends(get_db),
) -> ImportResult:
    if mode not in ("insert", "upsert", "replace"):
        raise HTTPException(status_code=400, detail="mode must be insert|upsert|replace")
    entity = await db.get(AdminEntity, entity_id)
    if not entity:
        raise HTTPException(status_code=404, detail="entity not found")
    raw = await file.read()
    columns, _ = parse_tabular(file.filename or "upload.csv", raw)
    batch = await apply_import(
        db,
        entity,
        file_name=file.filename or "upload",
        mode=mode,
        raw=raw,
        key_column=key_column,
    )
    return ImportResult(
        batch_id=batch.id,
        file_name=batch.file_name,
        mode=batch.mode,
        row_count=batch.row_count,
        inserted=batch.inserted,
        updated=batch.updated,
        skipped=batch.skipped,
        errors=batch.errors,
        preview_columns=columns,
    )


@router.get("/{entity_id}/imports", response_model=list[ImportBatchOut])
async def list_imports(
    entity_id: uuid.UUID, db: AsyncSession = Depends(get_db)
) -> list[ImportBatch]:
    entity = await db.get(AdminEntity, entity_id)
    if not entity:
        raise HTTPException(status_code=404, detail="entity not found")
    result = await db.execute(
        select(ImportBatch)
        .where(ImportBatch.entity_id == entity_id)
        .order_by(ImportBatch.created_at.desc())
        .limit(20)
    )
    return list(result.scalars().all())


@router.get("/{entity_id}/records/count")
async def count_records(
    entity_id: uuid.UUID, db: AsyncSession = Depends(get_db)
) -> dict:
    entity = await db.get(AdminEntity, entity_id)
    if not entity:
        raise HTTPException(status_code=404, detail="entity not found")
    result = await db.execute(
        select(func.count())
        .select_from(AdminRecord)
        .where(AdminRecord.entity_id == entity_id)
    )
    return {"count": result.scalar_one()}

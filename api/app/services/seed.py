from __future__ import annotations

from pathlib import Path

from sqlalchemy import func, select

from app.db import SessionLocal
from app.models.entities import AdminEntity, AdminRecord
from app.services.import_service import apply_import

SEED_SLUG = "demo-catalog"
SEED_NAME = "데모 카탈로그"
CSV_PATH = Path(__file__).resolve().parent.parent / "data" / "catalog-seed.csv"


async def seed_demo_catalog_if_empty() -> None:
    if not CSV_PATH.is_file():
        return
    raw = CSV_PATH.read_bytes()
    async with SessionLocal() as session:
        existing = await session.execute(
            select(AdminEntity).where(AdminEntity.slug == SEED_SLUG)
        )
        entity = existing.scalar_one_or_none()
        if entity is None:
            entity = AdminEntity(
                slug=SEED_SLUG,
                name=SEED_NAME,
                description="Admin Studio 기본 시드 — CSV upsert 데모",
                column_schema=[],
            )
            session.add(entity)
            await session.commit()
            await session.refresh(entity)

        count_result = await session.execute(
            select(func.count())
            .select_from(AdminRecord)
            .where(AdminRecord.entity_id == entity.id)
        )
        if count_result.scalar_one() > 0:
            return

        await apply_import(
            session,
            entity,
            file_name="catalog-seed.csv",
            mode="upsert",
            raw=raw,
            key_column="sku",
        )

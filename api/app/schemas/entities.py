from __future__ import annotations

import uuid
from datetime import datetime
from typing import Any, Literal

from pydantic import BaseModel, Field


class ColumnDef(BaseModel):
    key: str
    label: str
    kind: Literal["text", "number", "date", "enum"] = "text"


class EntityCreate(BaseModel):
    slug: str = Field(min_length=2, max_length=64, pattern=r"^[a-z0-9-]+$")
    name: str = Field(min_length=1, max_length=120)
    description: str = ""
    column_schema: list[ColumnDef] = Field(default_factory=list)


class EntityUpdate(BaseModel):
    name: str | None = None
    description: str | None = None
    column_schema: list[ColumnDef] | None = None


class EntityOut(BaseModel):
    id: uuid.UUID
    slug: str
    name: str
    description: str
    column_schema: list[dict[str, Any]]
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


class RecordCreate(BaseModel):
    external_key: str = Field(min_length=1, max_length=256)
    data: dict[str, Any] = Field(default_factory=dict)


class RecordUpdate(BaseModel):
    external_key: str | None = None
    data: dict[str, Any] | None = None


class RecordOut(BaseModel):
    id: uuid.UUID
    entity_id: uuid.UUID
    external_key: str
    data: dict[str, Any]
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


class ImportMode(str):
    INSERT = "insert"
    UPSERT = "upsert"
    REPLACE = "replace"


class ImportResult(BaseModel):
    batch_id: uuid.UUID
    file_name: str
    mode: str
    row_count: int
    inserted: int
    updated: int
    skipped: int
    errors: list[str]
    preview_columns: list[str] = Field(default_factory=list)


class ImportBatchOut(BaseModel):
    id: uuid.UUID
    file_name: str
    mode: str
    row_count: int
    inserted: int
    updated: int
    skipped: int
    errors: list[str]
    created_at: datetime

    model_config = {"from_attributes": True}

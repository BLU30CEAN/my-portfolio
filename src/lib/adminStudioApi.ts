const ADMIN_API_BASE =
  process.env.REACT_APP_ADMIN_API_URL || "http://localhost:8000/api/v1";

const ADMIN_KEY_STORAGE = "portfolio-admin-api-key";

export function getAdminApiKey(): string {
  return (
    localStorage.getItem(ADMIN_KEY_STORAGE) ||
    process.env.REACT_APP_ADMIN_API_KEY ||
    "dev-admin-key-change-me"
  );
}

export function setAdminApiKey(key: string) {
  localStorage.setItem(ADMIN_KEY_STORAGE, key.trim());
}

export type AdminEntity = {
  id: string;
  slug: string;
  name: string;
  description: string;
  column_schema: { key: string; label: string; kind?: string }[];
  created_at: string;
  updated_at: string;
};

export type AdminRecord = {
  id: string;
  entity_id: string;
  external_key: string;
  data: Record<string, string>;
  created_at: string;
  updated_at: string;
};

export type ImportResult = {
  batch_id: string;
  file_name: string;
  mode: string;
  row_count: number;
  inserted: number;
  updated: number;
  skipped: number;
  errors: string[];
  preview_columns: string[];
};

async function request<T>(
  path: string,
  init: RequestInit = {},
  auth = false,
): Promise<T> {
  const headers: Record<string, string> = {
    ...(init.headers as Record<string, string>),
  };
  if (auth) {
    headers["X-Admin-Key"] = getAdminApiKey();
  }
  if (!(init.body instanceof FormData)) {
    headers["Content-Type"] = headers["Content-Type"] || "application/json";
  }
  const res = await fetch(`${ADMIN_API_BASE}${path}`, { ...init, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.detail || data.message || `HTTP ${res.status}`);
  }
  return data as T;
}

export async function adminHealth(): Promise<{ ok: boolean }> {
  const base = ADMIN_API_BASE.replace("/api/v1", "/api/health");
  const res = await fetch(base);
  return res.json();
}

export const adminStudioApi = {
  listEntities: () => request<AdminEntity[]>("/entities"),
  createEntity: (body: {
    slug: string;
    name: string;
    description?: string;
  }) =>
    request<AdminEntity>("/entities", {
      method: "POST",
      body: JSON.stringify(body),
    }, true),
  listRecords: (entityId: string, q?: string) =>
    request<AdminRecord[]>(
      `/entities/${entityId}/records${q ? `?q=${encodeURIComponent(q)}` : ""}`,
    ),
  createRecord: (
    entityId: string,
    body: { external_key: string; data: Record<string, string> },
  ) =>
    request<AdminRecord>(`/entities/${entityId}/records`, {
      method: "POST",
      body: JSON.stringify(body),
    }, true),
  updateRecord: (
    entityId: string,
    recordId: string,
    body: { external_key?: string; data?: Record<string, string> },
  ) =>
    request<AdminRecord>(`/entities/${entityId}/records/${recordId}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }, true),
  deleteRecord: (entityId: string, recordId: string) =>
    request<{ ok: boolean }>(`/entities/${entityId}/records/${recordId}`, {
      method: "DELETE",
    }, true),
  previewImport: (entityId: string, file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    return request<{ columns: string[]; sample_rows: Record<string, string>[]; total_rows: number }>(
      `/entities/${entityId}/import/preview`,
      { method: "POST", body: fd },
      true,
    );
  },
  importFile: (
    entityId: string,
    file: File,
    mode: "insert" | "upsert" | "replace",
    keyColumn?: string,
  ) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("mode", mode);
    if (keyColumn) fd.append("key_column", keyColumn);
    return request<ImportResult>(`/entities/${entityId}/import`, {
      method: "POST",
      body: fd,
    }, true);
  },
};

import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Loader2, Upload, Plus, Trash2, RefreshCw } from "lucide-react";
import {
  adminStudioApi,
  type AdminEntity,
  type AdminRecord,
  type ImportResult,
  getAdminApiKey,
  setAdminApiKey,
} from "../../lib/adminStudioApi";
import { useToast } from "../ui/Toast";

const Shell = styled.div`
  display: flex;
  min-height: 420px;
  flex-direction: column;
  gap: 1rem;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
  justify-content: space-between;
`;

const TabRow = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0.3rem;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
`;

const Tab = styled.button<{ $active: boolean }>`
  border: none;
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  background: ${(p) => (p.$active ? p.theme.colors.primary : "transparent")};
  color: ${(p) => (p.$active ? "#fff" : p.theme.colors.textSecondary)};
`;

const Panel = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
`;

const FixedControls = styled.div`
  flex-shrink: 0;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`;

const ScrollBody = styled.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  padding: 0.85rem 1rem;
`;

const Input = styled.input`
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  border-radius: 8px;
  padding: 0.45rem 0.65rem;
  font: inherit;
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
`;

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.backgroundElevated};
  color: ${(p) => p.theme.colors.text};
  padding: 0.45rem 0.75rem;
  font-size: 0.85rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;

  th,
  td {
    border-bottom: 1px solid ${(p) => p.theme.colors.border};
    padding: 0.45rem 0.35rem;
    text-align: left;
    vertical-align: top;
  }

  thead th {
    position: sticky;
    top: 0;
    background: ${(p) => p.theme.colors.surface};
  }
`;

const ErrorBox = styled.div`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.text};
  font-size: 0.88rem;
`;

type HubTab = "schema" | "import" | "browse" | "register" | "audit";

type Props = {
  enabledTabs: HubTab[];
};

const DataHubPanel: React.FC<Props> = ({ enabledTabs }) => {
  const toast = useToast();
  const [tab, setTab] = useState<HubTab>(enabledTabs[0] ?? "browse");
  const [entities, setEntities] = useState<AdminEntity[]>([]);
  const [entityId, setEntityId] = useState<string>("");
  const [records, setRecords] = useState<AdminRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [apiKey, setApiKeyState] = useState(getAdminApiKey());
  const [importMode, setImportMode] = useState<"upsert" | "insert" | "replace">(
    "upsert",
  );
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const [newSlug, setNewSlug] = useState("");
  const [newName, setNewName] = useState("");
  const [regKey, setRegKey] = useState("");
  const [regJson, setRegJson] = useState('{"name":"","value":""}');

  const activeEntity = useMemo(
    () => entities.find((e) => e.id === entityId),
    [entities, entityId],
  );

  const loadEntities = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const list = await adminStudioApi.listEntities();
      setEntities(list);
      if (!entityId && list[0]) setEntityId(list[0].id);
    } catch (e) {
      setError(e instanceof Error ? e.message : "API 연결 실패");
    } finally {
      setLoading(false);
    }
  }, [entityId]);

  const loadRecords = useCallback(async () => {
    if (!entityId) return;
    setLoading(true);
    setError(null);
    try {
      const rows = await adminStudioApi.listRecords(entityId, search || undefined);
      setRecords(rows);
    } catch (e) {
      setError(e instanceof Error ? e.message : "조회 실패");
    } finally {
      setLoading(false);
    }
  }, [entityId, search]);

  useEffect(() => {
    loadEntities();
  }, [loadEntities]);

  useEffect(() => {
    if (tab === "browse" || tab === "register") loadRecords();
  }, [tab, loadRecords]);

  useEffect(() => {
    if (!enabledTabs.includes(tab)) setTab(enabledTabs[0] ?? "browse");
  }, [enabledTabs, tab]);

  const onCreateEntity = async () => {
    try {
      const created = await adminStudioApi.createEntity({
        slug: newSlug,
        name: newName,
        description: "Admin Studio demo entity",
      });
      toast.success("테이블(엔티티)을 등록했습니다.");
      setNewSlug("");
      setNewName("");
      await loadEntities();
      setEntityId(created.id);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "등록 실패");
    }
  };

  const onImport = async (file: File) => {
    if (!entityId) return;
    try {
      const result = await adminStudioApi.importFile(entityId, file, importMode);
      setImportResult(result);
      toast.success(
        `적재 완료 · 추가 ${result.inserted} · 수정 ${result.updated}`,
      );
      await loadRecords();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "가져오기 실패");
    }
  };

  const onRegister = async () => {
    if (!entityId) return;
    try {
      const data = JSON.parse(regJson) as Record<string, string>;
      await adminStudioApi.createRecord(entityId, {
        external_key: regKey,
        data,
      });
      toast.success("단건 등록했습니다.");
      setRegKey("");
      await loadRecords();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "등록 실패");
    }
  };

  const columns = activeEntity?.column_schema?.length
    ? activeEntity.column_schema.map((c) => c.key)
    : records[0]
      ? Object.keys(records[0].data)
      : [];

  return (
    <Shell>
      <Toolbar>
        <TabRow role="tablist" aria-label="Data Hub">
          {enabledTabs.map((t) => (
            <Tab
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              $active={tab === t}
              onClick={() => setTab(t)}
            >
              {t === "schema" && "스키마"}
              {t === "import" && "가져오기"}
              {t === "browse" && "조회"}
              {t === "register" && "등록·수정"}
              {t === "audit" && "적재 이력"}
            </Tab>
          ))}
        </TabRow>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Input
            aria-label="Admin API Key"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKeyState(e.target.value)}
            placeholder="X-Admin-Key"
            style={{ width: 180 }}
          />
          <Btn
            type="button"
            onClick={() => {
              setAdminApiKey(apiKey);
              toast.success("API 키 저장");
            }}
          >
            키 저장
          </Btn>
          <Btn type="button" onClick={loadEntities}>
            <RefreshCw size={14} /> 새로고침
          </Btn>
        </div>
      </Toolbar>

      {error && <ErrorBox role="alert">{error}</ErrorBox>}

      <Panel>
        <FixedControls>
          <label>
            <span className="sr-only">엔티티 선택</span>
            <select
              value={entityId}
              onChange={(e) => setEntityId(e.target.value)}
              style={{ marginRight: 8 }}
            >
              {entities.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name} ({e.slug})
                </option>
              ))}
            </select>
          </label>
          {tab === "browse" && (
            <Input
              placeholder="검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && loadRecords()}
            />
          )}
          {loading && (
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <Loader2 size={14} className="spin" /> 불러오는 중
            </span>
          )}
        </FixedControls>

        <ScrollBody>
          {tab === "schema" && (
            <div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted, #666)" }}>
                서비스 DB에 올릴 논리 테이블(엔티티)을 만듭니다. CSV/Excel 첫
                가져오기 시 헤더로 column_schema가 자동 채워집니다.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                <Input
                  placeholder="slug (예: products)"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value)}
                />
                <Input
                  placeholder="표시 이름"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <Btn type="button" onClick={onCreateEntity}>
                  <Plus size={14} /> 엔티티 추가
                </Btn>
              </div>
              {activeEntity && (
                <pre
                  style={{
                    marginTop: 16,
                    fontSize: 12,
                    overflow: "auto",
                    padding: 12,
                    borderRadius: 8,
                    border: "1px solid var(--border, #ddd)",
                  }}
                >
                  {JSON.stringify(activeEntity.column_schema, null, 2)}
                </pre>
              )}
            </div>
          )}

          {tab === "import" && (
            <div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                {(["upsert", "insert", "replace"] as const).map((m) => (
                  <Btn
                    key={m}
                    type="button"
                    onClick={() => setImportMode(m)}
                    style={{
                      borderColor: importMode === m ? "#0040ff" : undefined,
                    }}
                  >
                    {m}
                  </Btn>
                ))}
              </div>
              <label>
                <Btn as="span" type="button">
                  <Upload size={14} /> CSV / Excel 선택
                </Btn>
                <input
                  type="file"
                  accept=".csv,.xlsx,.xlsm"
                  hidden
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) onImport(f);
                    e.target.value = "";
                  }}
                />
              </label>
              {importResult && (
                <pre style={{ marginTop: 12, fontSize: 12 }}>
                  {JSON.stringify(importResult, null, 2)}
                </pre>
              )}
            </div>
          )}

          {tab === "browse" && (
            <Table>
              <thead>
                <tr>
                  <th>key</th>
                  {columns.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                  <th aria-label="actions" />
                </tr>
              </thead>
              <tbody>
                {records.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length + 2}>데이터가 없습니다. 가져오기 또는 등록 탭을 사용하세요.</td>
                  </tr>
                ) : (
                  records.map((r) => (
                    <tr key={r.id}>
                      <td>{r.external_key}</td>
                      {columns.map((c) => (
                        <td key={c}>{r.data[c] ?? ""}</td>
                      ))}
                      <td>
                        <Btn
                          type="button"
                          aria-label="삭제"
                          onClick={async () => {
                            await adminStudioApi.deleteRecord(entityId, r.id);
                            await loadRecords();
                          }}
                        >
                          <Trash2 size={14} />
                        </Btn>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          )}

          {tab === "register" && (
            <div style={{ display: "grid", gap: 8, maxWidth: 480 }}>
              <Input
                placeholder="external_key"
                value={regKey}
                onChange={(e) => setRegKey(e.target.value)}
              />
              <textarea
                value={regJson}
                onChange={(e) => setRegJson(e.target.value)}
                rows={6}
                style={{ fontFamily: "monospace", fontSize: 12 }}
              />
              <Btn type="button" onClick={onRegister}>
                <Plus size={14} /> 등록
              </Btn>
            </div>
          )}

          {tab === "audit" && (
            <p style={{ fontSize: "0.88rem" }}>
              마지막 가져오기 결과는 「가져오기」 탭 하단 JSON으로 확인합니다.
              FastAPI <code>/entities/:id/imports</code> 로 이력 API도 열려
              있습니다.
            </p>
          )}
        </ScrollBody>
      </Panel>
    </Shell>
  );
};

export default DataHubPanel;

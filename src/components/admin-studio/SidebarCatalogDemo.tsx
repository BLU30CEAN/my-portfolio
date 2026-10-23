import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Loader2, Save } from "lucide-react";
import {
  adminStudioApi,
  type AdminRecord,
} from "../../lib/adminStudioApi";
import { useToast } from "../ui/Toast";

const DEMO_ROWS: AdminRecord[] = [
  {
    id: "local-1",
    entity_id: "local",
    external_key: "SKU-001",
    data: {
      sku: "SKU-001",
      name: "샘플 상품 A",
      category: "전자",
      status: "active",
      note: "API 오프라인 미리보기",
    },
    created_at: "",
    updated_at: "",
  },
  {
    id: "local-2",
    entity_id: "local",
    external_key: "SKU-002",
    data: {
      sku: "SKU-002",
      name: "샘플 상품 B",
      category: "생활",
      status: "active",
      note: "",
    },
    created_at: "",
    updated_at: "",
  },
];

const Shell = styled.div`
  display: grid;
  grid-template-columns: minmax(140px, 0.85fr) minmax(0, 1.6fr) minmax(200px, 1fr);
  min-height: 380px;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadows.card};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`;

const Nav = styled.nav`
  flex-shrink: 0;
  border-right: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.backgroundElevated};
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NavBtn = styled.button<{ $active?: boolean }>`
  text-align: left;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.65rem;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  background: ${(p) => (p.$active ? p.theme.colors.primarySoft : "transparent")};
  color: ${(p) =>
    p.$active ? p.theme.colors.primary : p.theme.colors.textSecondary};

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const Main = styled.div`
  display: flex;
  min-height: 0;
  flex-direction: column;
  overflow: hidden;
`;

const MainFixed = styled.div`
  flex-shrink: 0;
  padding: 0.65rem 0.75rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`;

const Search = styled.input`
  flex: 1;
  min-width: 140px;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  font: inherit;
  font-size: 0.85rem;
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
`;

const TableWrap = styled.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;

  th,
  td {
    padding: 0.45rem 0.65rem;
    border-bottom: 1px solid ${(p) => p.theme.colors.border};
    text-align: left;
  }

  thead th {
    position: sticky;
    top: 0;
    background: ${(p) => p.theme.colors.surface};
    font-size: 0.72rem;
    color: ${(p) => p.theme.colors.textMuted};
  }

  tbody tr {
    cursor: pointer;
    transition: background 0.15s ease;
  }

  tbody tr:hover,
  tbody tr[aria-selected="true"] {
    background: ${(p) => p.theme.colors.primarySoft};
  }
`;

const Inspector = styled.aside`
  border-left: 1px solid ${(p) => p.theme.colors.border};
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: ${(p) => p.theme.colors.backgroundElevated};
`;

const InspectorHead = styled.div`
  flex-shrink: 0;
  padding: 0.75rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const InspectorBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.72rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

const FieldInput = styled.input`
  font-size: 0.85rem;
  padding: 0.4rem 0.55rem;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
`;

const SaveBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  color: #fff;
  background: ${(p) => p.theme.colors.gradient};
`;

const Badge = styled.span`
  font-family: ui-monospace, monospace;
  font-size: 0.65rem;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.border};
  color: ${(p) => p.theme.colors.textMuted};
`;

const Hint = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.78rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

const DEMO_ENTITY_SLUG = "demo-catalog";

const SidebarCatalogDemo: React.FC = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const [live, setLive] = useState(false);
  const [entityId, setEntityId] = useState<string | null>(null);
  const [rows, setRows] = useState<AdminRecord[]>(DEMO_ROWS);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(DEMO_ROWS[0]?.id ?? null);
  const [draft, setDraft] = useState<Record<string, string>>({});

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const entities = await adminStudioApi.listEntities();
      const demo = entities.find((e) => e.slug === DEMO_ENTITY_SLUG);
      if (!demo) {
        setLive(false);
        setRows(DEMO_ROWS);
        setSelectedId(DEMO_ROWS[0]?.id ?? null);
        return;
      }
      const records = await adminStudioApi.listRecords(demo.id);
      setLive(true);
      setEntityId(demo.id);
      setRows(records.length ? records : DEMO_ROWS);
      setSelectedId((records[0] ?? DEMO_ROWS[0])?.id ?? null);
    } catch {
      setLive(false);
      setRows(DEMO_ROWS);
      setSelectedId(DEMO_ROWS[0]?.id ?? null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.external_key.toLowerCase().includes(q) ||
        Object.values(r.data).some((v) => v.toLowerCase().includes(q)),
    );
  }, [rows, search]);

  const selected = rows.find((r) => r.id === selectedId) ?? null;

  useEffect(() => {
    if (selected) setDraft({ ...selected.data });
  }, [selected]);

  const columns = useMemo(() => {
    const keys = new Set<string>(["sku", "name", "category", "status"]);
    rows.forEach((r) => Object.keys(r.data).forEach((k) => keys.add(k)));
    return [...keys].filter((k) => k !== "note").slice(0, 5);
  }, [rows]);

  const onSave = async () => {
    if (!selected) return;
    if (!live || !entityId || selected.id.startsWith("local-")) {
      toast.info("데모 모드 — API 연결 후 저장이 반영됩니다.");
      setRows((prev) =>
        prev.map((r) =>
          r.id === selected.id ? { ...r, data: { ...draft } } : r,
        ),
      );
      return;
    }
    try {
      await adminStudioApi.updateRecord(entityId, selected.id, { data: draft });
      toast.success("Inspector에서 저장했습니다.");
      await load();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "저장 실패");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "0.65rem",
        }}
      >
        <strong style={{ fontSize: "0.95rem" }}>B · 라이브 데모</strong>
        <Badge>{live ? "PostgreSQL" : "오프라인 미리보기"}</Badge>
        {loading ? (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12 }}>
            <Loader2 size={14} /> 동기화 중
          </span>
        ) : null}
      </div>
      <Shell>
        <Nav aria-label="관리 메뉴">
          <NavBtn type="button" $active>
            카탈로그
          </NavBtn>
          <NavBtn type="button" disabled title="Data Hub 탭에서 연동">
            적재 허브
          </NavBtn>
          <NavBtn type="button" disabled title="데모 범위 밖">
            RBAC
          </NavBtn>
        </Nav>

        <Main>
          <MainFixed>
            <Search
              placeholder="SKU · 이름 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="카탈로그 검색"
            />
            <Badge>{filtered.length}건</Badge>
          </MainFixed>
          <TableWrap className="slim-scroll">
            <Table>
              <thead>
                <tr>
                  {columns.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length}>일치하는 행이 없습니다.</td>
                  </tr>
                ) : (
                  filtered.map((r) => (
                    <tr
                      key={r.id}
                      aria-selected={r.id === selectedId}
                      onClick={() => setSelectedId(r.id)}
                    >
                      {columns.map((c) => (
                        <td key={c}>{r.data[c] ?? "—"}</td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </TableWrap>
        </Main>

        <Inspector aria-label="Inspector">
          <InspectorHead>
            <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>Inspector</div>
            <Hint style={{ marginTop: 4 }}>
              {selected ? selected.external_key : "행을 선택하세요"}
            </Hint>
          </InspectorHead>
          <InspectorBody>
            {selected ? (
              <>
                {Object.keys(draft).map((key) => (
                  <Field key={key}>
                    {key}
                    <FieldInput
                      value={draft[key] ?? ""}
                      onChange={(e) =>
                        setDraft((d) => ({ ...d, [key]: e.target.value }))
                      }
                    />
                  </Field>
                ))}
                <SaveBtn type="button" onClick={onSave}>
                  <Save size={14} /> 저장
                </SaveBtn>
              </>
            ) : (
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted,#888)" }}>
                카탈로그에서 행을 선택하면 우측에서 필드를 수정합니다.
              </p>
            )}
          </InspectorBody>
        </Inspector>
      </Shell>
    </div>
  );
};

export default SidebarCatalogDemo;

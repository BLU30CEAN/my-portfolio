import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Check, Pause, X } from "lucide-react";
import { useToast } from "../ui/Toast";

type QueueItem = {
  id: string;
  title: string;
  status: "pending" | "review" | "done";
  priority: "高" | "中" | "低";
  aiDraft: string;
  confidence: number;
  sources: { label: string; revised: string }[];
};

const QUEUE: QueueItem[] = [
  {
    id: "Q-1042",
    title: "민원 요약 검수 — 주차 단속 문의",
    status: "pending",
    priority: "中",
    aiDraft:
      "해당 구역은 시간제 주차 구역이며, 표지판 기준 토·일 09–18시 유료입니다. 단속 시간 외 주차는 과태료 대상이 아닐 수 있습니다.",
    confidence: 0.82,
    sources: [
      { label: "교통법규 FAQ v3.2", revised: "2025-11-01" },
      { label: "지역 주차 안내", revised: "2026-01-08" },
    ],
  },
  {
    id: "Q-1041",
    title: "AI 답변 — 분실물 접수 경로",
    status: "review",
    priority: "低",
    aiDraft:
      "분실물 신고는 온라인 포털 또는 가까운 파출소 방문으로 접수할 수 있습니다. 습득물과 매칭 시 SMS로 안내됩니다.",
    confidence: 0.91,
    sources: [{ label: "민원 매뉴얼 §4.2", revised: "2025-09-20" }],
  },
  {
    id: "Q-1039",
    title: "가드레일 마스킹 검토",
    status: "done",
    priority: "高",
    aiDraft: "[마스킹됨] 연락처 ***-****-1234 포함 — 전송 보류",
    confidence: 0.44,
    sources: [{ label: "PII 정책", revised: "2026-02-01" }],
  },
];

const Shell = styled.div`
  display: grid;
  grid-template-columns: minmax(160px, 0.95fr) minmax(0, 1.5fr) minmax(180px, 1fr);
  min-height: 380px;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadows.card};

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Col = styled.div`
  display: flex;
  min-height: 0;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid ${(p) => p.theme.colors.border};

  &:last-child {
    border-right: none;
  }
`;

const ColHead = styled.div`
  flex-shrink: 0;
  padding: 0.65rem 0.75rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  font-size: 0.78rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const Fixed = styled.div`
  flex-shrink: 0;
  padding: 0.5rem 0.65rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const Scroll = styled.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  padding: 0.35rem;
`;

const FilterBtn = styled.button<{ $active?: boolean }>`
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 999px;
  padding: 0.25rem 0.55rem;
  font-size: 0.72rem;
  margin-right: 0.35rem;
  cursor: pointer;
  background: ${(p) => (p.$active ? p.theme.colors.primarySoft : "transparent")};
  color: ${(p) => p.theme.colors.textSecondary};
`;

const QueueRow = styled.button<{ $active?: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  border: none;
  border-radius: 8px;
  padding: 0.55rem 0.5rem;
  margin-bottom: 0.25rem;
  cursor: pointer;
  background: ${(p) => (p.$active ? p.theme.colors.primarySoft : "transparent")};
  color: ${(p) => p.theme.colors.text};

  &:hover {
    background: ${(p) => p.theme.colors.primarySoft};
  }
`;

const Draft = styled.div`
  margin: 0.75rem;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px dashed ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.backgroundElevated};
  font-size: 0.85rem;
  line-height: 1.55;
`;

const HitlBar = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.65rem 0.75rem;
  border-top: 1px solid ${(p) => p.theme.colors.border};
`;

const Action = styled.button<{ $variant?: "primary" | "danger" | "muted" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: 8px;
  padding: 0.45rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) =>
    p.$variant === "primary"
      ? p.theme.colors.primary
      : p.$variant === "danger"
        ? p.theme.colors.danger
        : p.theme.colors.surface};
  color: ${(p) =>
    p.$variant === "primary" || p.$variant === "danger" ? "#fff" : p.theme.colors.text};
`;

const Source = styled.div`
  padding: 0.5rem 0.65rem;
  margin-bottom: 0.35rem;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.border};
  font-size: 0.78rem;
`;

type Filter = "all" | "pending" | "review" | "done";

const ThreeColumnOpsDemo: React.FC = () => {
  const toast = useToast();
  const [items, setItems] = useState(QUEUE);
  const [selectedId, setSelectedId] = useState(QUEUE[0].id);
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.status === filter);
  }, [items, filter]);

  const selected = items.find((i) => i.id === selectedId) ?? items[0];

  const setStatus = (status: QueueItem["status"]) => {
    setItems((prev) =>
      prev.map((i) => (i.id === selectedId ? { ...i, status } : i)),
    );
  };

  return (
    <div>
      <div style={{ marginBottom: "0.65rem", fontSize: "0.95rem", fontWeight: 700 }}>
        A · 라이브 데모 <span style={{ fontWeight: 500, fontSize: "0.8rem" }}>HITL 3분할</span>
      </div>
      <Shell>
        <Col aria-label="검수 큐">
          <ColHead>큐</ColHead>
          <Fixed role="group" aria-label="상태 필터">
            {(
              [
                ["all", "전체"],
                ["pending", "대기"],
                ["review", "검수"],
                ["done", "완료"],
              ] as const
            ).map(([id, label]) => (
              <FilterBtn
                key={id}
                type="button"
                $active={filter === id}
                onClick={() => setFilter(id)}
              >
                {label}
              </FilterBtn>
            ))}
          </Fixed>
          <Scroll className="slim-scroll">
            {filtered.map((q) => (
              <QueueRow
                key={q.id}
                type="button"
                $active={q.id === selectedId}
                onClick={() => setSelectedId(q.id)}
              >
                <div style={{ fontSize: "0.72rem", opacity: 0.7 }}>{q.id}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 600 }}>{q.title}</div>
                <div style={{ fontSize: "0.72rem", marginTop: 4 }}>
                  {q.priority} · {q.status}
                </div>
              </QueueRow>
            ))}
          </Scroll>
        </Col>

        <Col aria-label="AI 결과 및 확정">
          <ColHead>AI 1차 결과 · 담당자 확정</ColHead>
          <Scroll className="slim-scroll">
            <Draft>
              <div style={{ fontSize: "0.72rem", marginBottom: 6, opacity: 0.75 }}>
                신뢰도 {(selected.confidence * 100).toFixed(0)}%
                {selected.confidence < 0.7 ? " — 유보 권고" : ""}
              </div>
              {selected.aiDraft}
            </Draft>
          </Scroll>
          <HitlBar>
            <Action
              type="button"
              $variant="primary"
              onClick={() => {
                setStatus("done");
                toast.success("담당자 확정");
              }}
            >
              <Check size={14} /> 확정
            </Action>
            <Action type="button" onClick={() => toast.info("수정 모드 — 데모")}>
              수정
            </Action>
            <Action
              type="button"
              $variant="danger"
              onClick={() => {
                setStatus("review");
                toast.info("기각 — 재검토 큐");
              }}
            >
              <X size={14} /> 기각
            </Action>
            <Action
              type="button"
              $variant="muted"
              onClick={() => {
                setStatus("pending");
                toast.info("판단 유보");
              }}
            >
              <Pause size={14} /> 유보
            </Action>
          </HitlBar>
        </Col>

        <Col aria-label="근거 및 설정">
          <ColHead>근거 · 설정</ColHead>
          <Scroll className="slim-scroll" style={{ padding: "0.65rem" }}>
            {selected.sources.map((s) => (
              <Source key={s.label}>
                <strong>{s.label}</strong>
                <div style={{ opacity: 0.75, marginTop: 4 }}>개정 {s.revised}</div>
              </Source>
            ))}
            <Source>
              <strong>패널 배지</strong>
              <div style={{ opacity: 0.75, marginTop: 4 }}>정책 · 감사</div>
            </Source>
          </Scroll>
        </Col>
      </Shell>
    </div>
  );
};

export default ThreeColumnOpsDemo;

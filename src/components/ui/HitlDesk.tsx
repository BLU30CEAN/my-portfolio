import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HITL_CASES } from "../../data/hitlCases";
import type { KnowledgeChunk } from "../../data/knowledge";
import { checkInput } from "../../lib/guardrail";
import { retrieve } from "../../lib/retrieve";
import {
  engineLabel,
  probeEngine,
  runComplaint,
  type LlmEngine,
  type PipelineResult,
} from "../../lib/llm";
import { useToast } from "./Toast";
import {
  HITL_ACTION_KO,
  appendHitlRound,
  roundsFor,
  type HitlRound,
} from "../../lib/hitlLog";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  height: min(38rem, calc(100dvh - 12rem));
  min-height: 22rem;
`;

const Shell = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(11rem, 0.82fr) minmax(0, 1.5fr) minmax(12rem, 1fr);
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.card};
  overflow: hidden;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(8.5rem, 0.7fr) minmax(14rem, 1.45fr) minmax(8rem, 0.85fr);
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border-right: 1px solid ${(p) => p.theme.colors.border};

  &:last-child {
    border-right: none;
  }

  @media (max-width: 720px) {
    border-right: none;
    border-bottom: 1px solid ${(p) => p.theme.colors.border};

    &:last-child {
      border-bottom: none;
    }
  }
`;

const Head = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  padding: 0.7rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.textSecondary};
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const Badge = styled.span<{ $ok: boolean }>`
  font-size: 0.68rem;
  font-weight: 700;
  color: ${(p) => (p.$ok ? p.theme.colors.primary : p.theme.colors.danger)};
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0.7rem 0.85rem;
`;

const RowBtn = styled.button<{ $on: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 0.35rem;
  padding: 0.55rem 0.6rem;
  border-radius: ${(p) => p.theme.radii.sm};
  border: 1px solid
    ${(p) => (p.$on ? p.theme.colors.primary : p.theme.colors.border)};
  background: ${(p) =>
    p.$on ? p.theme.colors.primarySoft : p.theme.colors.backgroundElevated};
  color: ${(p) => p.theme.colors.text};
  font: inherit;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.ring};
    outline-offset: 2px;
  }
`;

const Id = styled.div`
  font-family: ${(p) => p.theme.typography.fontMono};
  font-size: 0.68rem;
  color: ${(p) => p.theme.colors.accent};
`;

const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 0.15rem;
`;

const Label = styled.div`
  font-size: 0.74rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.textMuted};
  margin-bottom: 0.4rem;
`;

const Complaint = styled.p`
  margin: 0 0 0.9rem;
  font-size: 0.9rem;
  line-height: 1.62;
  color: ${(p) => p.theme.colors.text};
`;

const Draft = styled.p`
  margin: 0 0 0.9rem;
  font-size: 0.92rem;
  line-height: 1.65;
  color: ${(p) => p.theme.colors.textSecondary};
  min-height: 3.2em;
`;

const Empty = styled.p`
  margin: 0 0 0.9rem;
  font-size: 0.88rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.textMuted};
`;

const Foot = styled.div`
  flex-shrink: 0;
  padding: 0.7rem 0.85rem 0.8rem;
  border-top: 1px solid ${(p) => p.theme.colors.border};
`;

const Actions = styled.div`
  display: flex;
  gap: 0.45rem;
`;

const Act = styled.button<{ $kind: "ok" | "hold" | "ghost" }>`
  flex: 1;
  padding: 0.55rem 0.55rem;
  font: inherit;
  font-size: 0.84rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: ${(p) => p.theme.radii.sm};
  border: 1px solid
    ${(p) =>
      p.$kind === "ok"
        ? p.theme.colors.success
        : p.theme.colors.borderStrong};
  background: ${(p) =>
    p.$kind === "ok" ? p.theme.colors.success : "transparent"};
  color: ${(p) =>
    p.$kind === "ok"
      ? p.theme.mode === "dark"
        ? "#111318"
        : "#fff"
      : p.theme.colors.text};

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.ring};
    outline-offset: 2px;
  }
`;

const Caption = styled.p`
  margin: 0.7rem 0 0;
  font-size: 0.75rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textMuted};
`;

const Field = styled.textarea`
  display: block;
  width: 100%;
  min-height: 7.2rem;
  resize: vertical;
  margin: 0 0 0.9rem;
  padding: 0.65rem 0.7rem;
  box-sizing: border-box;
  border-radius: ${(p) => p.theme.radii.sm};
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.backgroundElevated};
  color: ${(p) => p.theme.colors.text};
  font: inherit;
  font-size: 0.9rem;
  line-height: 1.62;

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.ring};
    outline-offset: 2px;
  }
`;

const Hint = styled.p`
  margin: -0.45rem 0 0.85rem;
  font-size: 0.75rem;
  line-height: 1.45;
  color: ${(p) => p.theme.colors.textMuted};
`;

const RoundList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const RoundItem = styled.li`
  margin-bottom: 0.55rem;
  font-size: 0.78rem;
  line-height: 1.45;
  color: ${(p) => p.theme.colors.textSecondary};

  strong {
    display: block;
    font-size: 0.72rem;
    color: ${(p) => p.theme.colors.primary};
  }
`;

const CUSTOM_ID = "Q-직접";
const CUSTOM_TITLE = "직접 입력";
const QUEUE = [
  ...HITL_CASES,
  { id: CUSTOM_ID, title: CUSTOM_TITLE, body: "" },
];

const HitlDesk: React.FC = () => {
  const toast = useToast();
  const [id, setId] = useState(HITL_CASES[0].id);
  const [customBody, setCustomBody] = useState("");
  const [ranBody, setRanBody] = useState("");
  const [eng, setEng] = useState<LlmEngine>({
    state: "probing",
    base: "",
    model: "",
    error: "",
  });
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState("");
  const [result, setResult] = useState<PipelineResult | null>(null);
  const [previewSources, setPreviewSources] = useState<KnowledgeChunk[]>([]);
  const [rounds, setRounds] = useState<HitlRound[]>(() =>
    roundsFor(HITL_CASES[0].id),
  );
  const [locked, setLocked] = useState(false);
  const cache = useRef<Record<string, PipelineResult>>({});
  const abortRef = useRef<AbortController | null>(null);
  const genRef = useRef(0);

  const canned = HITL_CASES.find((x) => x.id === id);
  const isCustom = id === CUSTOM_ID;
  const body = isCustom ? customBody : canned ? canned.body : "";

  useEffect(() => {
    let alive = true;
    probeEngine().then((e) => {
      if (alive) setEng(e);
    });
    return () => {
      alive = false;
    };
  }, []);

  const run = (text: string, cacheKey: string) => {
    const blocked = checkInput(text);
    if (blocked.blocked) {
      const r: PipelineResult = {
        skipped: true,
        skipReason: blocked.reason,
        draft: "",
        sources: [],
        engineLabel: "가드레일",
      };
      cache.current[cacheKey] = r;
      setResult(r);
      setDraft("");
      setPreviewSources([]);
      setBusy(false);
      setRanBody(text);
      appendHitlRound({
        caseId: id,
        action: "skip",
        note: r.skipReason,
      });
      setRounds(roundsFor(id));
      return;
    }
    if (abortRef.current) abortRef.current.abort();
    const gen = ++genRef.current;
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setBusy(true);
    setDraft("");
    setResult(null);
    setPreviewSources(retrieve(text, 2));
    runComplaint(text, {
      signal: ctrl.signal,
      onDelta: (full) => {
        if (genRef.current !== gen) return;
        setDraft(full);
      },
    })
      .then((r) => {
        if (genRef.current !== gen) return;
        cache.current[cacheKey] = r;
        setResult(r);
        setDraft(r.draft);
        setRanBody(text);
        appendHitlRound({
          caseId: id,
          action: r.skipped ? "skip" : "draft",
          note: r.skipped
            ? r.skipReason
            : r.draft.slice(0, 72) || "초안 생성",
        });
        setRounds(roundsFor(id));
      })
      .catch((err: unknown) => {
        if (ctrl.signal.aborted || genRef.current !== gen) return;
        const msg = err instanceof Error ? err.message : "생성 실패";
        toast.error(msg);
        setResult({
          skipped: true,
          skipReason: msg,
          draft: "",
          sources: [],
          engineLabel: "LLM 대기",
        });
      })
      .finally(() => {
        if (genRef.current === gen) setBusy(false);
      });
  };

  const showCached = (key: string) => {
    const cached = cache.current[key];
    if (!cached) return false;
    setResult(cached);
    setDraft(cached.draft);
    setPreviewSources(cached.sources);
    setBusy(false);
    return true;
  };

  useEffect(() => {
    if (isCustom) {
      if (abortRef.current) abortRef.current.abort();
      genRef.current += 1;
      const key = `${CUSTOM_ID}:${customBody}`;
      if (customBody.trim() && showCached(key)) {
        setRanBody(customBody);
        return;
      }
      setRanBody("");
      setResult(null);
      setDraft("");
      setPreviewSources(customBody.trim() ? retrieve(customBody, 2) : []);
      setBusy(false);
      return;
    }
    if (showCached(id)) return;
    run(body, id);
    return () => {
      if (abortRef.current) abortRef.current.abort();
      genRef.current += 1;
    };
    // canned 전환만 자동 실행. 직접 입력은 실행 버튼.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const select = (nextId: string) => {
    if (nextId === id) return;
    if (abortRef.current) abortRef.current.abort();
    genRef.current += 1;
    setDraft("");
    setResult(null);
    setPreviewSources([]);
    setBusy(nextId !== CUSTOM_ID);
    setLocked(false);
    setRounds(roundsFor(nextId));
    setId(nextId);
  };

  const move = (dir: 1 | -1) => {
    const i = QUEUE.findIndex((x) => x.id === id);
    const next = QUEUE[Math.min(QUEUE.length - 1, Math.max(0, i + dir))];
    select(next.id);
  };

  const rerun = () => {
    const text = body.trim();
    if (!text) {
      toast.info("민원 내용을 먼저 적어 주세요.");
      return;
    }
    delete cache.current[isCustom ? `${CUSTOM_ID}:${text}` : id];
    setLocked(false);
    appendHitlRound({
      caseId: id,
      action: "rerun",
      note: "재작성 요청. 같은 민원으로 초안을 다시 만듭니다.",
    });
    setRounds(roundsFor(id));
    run(text, isCustom ? `${CUSTOM_ID}:${text}` : id);
  };

  const adopt = () => {
    appendHitlRound({
      caseId: id,
      action: "adopt",
      note: "담당자 확정. AI 초안이 아니라 이 화면이 최종입니다.",
    });
    setRounds(roundsFor(id));
    setLocked(true);
    toast.success("확정. 수행 이력에 남겼습니다.");
  };

  const hold = () => {
    appendHitlRound({
      caseId: id,
      action: "hold",
      note: "유보. 근거를 다시 보고 확정하거나 다시 작성합니다.",
    });
    setRounds(roundsFor(id));
    setLocked(false);
    toast.info("유보. 우측 수행에 n차가 쌓입니다.");
  };

  const stale =
    isCustom &&
    !!customBody.trim() &&
    !!ranBody &&
    customBody.trim() !== ranBody.trim() &&
    !busy;

  const sources: KnowledgeChunk[] =
    result && result.sources.length > 0 ? result.sources : previewSources;
  const skipped = Boolean(result && result.skipped);
  const badgeOk = eng.state === "ready" && !skipped;

  return (
    <Wrap>
      <Frame>
        <Shell
          aria-label="담당자 확정 콘솔"
          aria-busy={busy}
          onKeyDown={(e) => {
            const tag = (e.target as HTMLElement).tagName;
            if (tag === "TEXTAREA" || tag === "INPUT") return;
            if (e.key === "ArrowDown") {
              e.preventDefault();
              move(1);
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              move(-1);
            }
          }}
        >
          <Col>
            <Head>큐</Head>
            <Body className="slim-scroll" role="listbox" aria-label="민원 큐">
              {QUEUE.map((q) => (
                <RowBtn
                  key={q.id}
                  type="button"
                  role="option"
                  aria-selected={q.id === id}
                  $on={q.id === id}
                  onClick={() => select(q.id)}
                >
                  <Id>{q.id}</Id>
                  <Title>{q.title}</Title>
                </RowBtn>
              ))}
            </Body>
          </Col>
          <Col>
            <Head>
              AI 1차 / 담당자 확정
              <Badge $ok={badgeOk}>
                {busy
                  ? "생성 중"
                  : skipped
                  ? "LLM 미호출"
                  : engineLabel(eng)}
              </Badge>
            </Head>
            <Body className="slim-scroll">
              <Label>민원</Label>
              {isCustom ? (
                <>
                  <Field
                    value={customBody}
                    maxLength={800}
                    placeholder="민원 내용을 직접 적어 보세요. 예: 분실물을 여기서 접수할 수 있나요?"
                    aria-label="직접 입력한 민원"
                    onChange={(e) => setCustomBody(e.target.value)}
                    onKeyDown={(e) => {
                      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                        e.preventDefault();
                        rerun();
                      }
                    }}
                  />
                  {stale ? (
                    <Hint>내용이 바뀌었습니다. 실행을 다시 누르세요.</Hint>
                  ) : (
                    <Hint>Ctrl+Enter 로 실행합니다. 주민번호·카드번호가 있으면 LLM을 호출하지 않습니다.</Hint>
                  )}
                </>
              ) : (
                <Complaint>{body}</Complaint>
              )}
              <Label>AI 초안</Label>
              {skipped ? (
                <Empty role="status">{result ? result.skipReason : ""}</Empty>
              ) : draft ? (
                <Draft role="status">{draft}</Draft>
              ) : (
                <Empty role="status">
                  {busy
                    ? "초안을 만들고 있습니다."
                    : isCustom
                    ? "민원을 적고 실행을 누르세요."
                    : eng.state === "offline"
                    ? eng.error
                    : "큐를 고르면 초안을 만듭니다."}
                </Empty>
              )}
            </Body>
            <Foot>
              <Label>담당자</Label>
              <Actions>
                <Act
                  type="button"
                  $kind="ok"
                  disabled={busy || skipped || !draft || locked}
                  onClick={adopt}
                >
                  확정
                </Act>
                <Act
                  type="button"
                  $kind="hold"
                  disabled={busy || locked}
                  onClick={hold}
                >
                  유보
                </Act>
                <Act
                  type="button"
                  $kind="ghost"
                  onClick={rerun}
                  disabled={busy || (isCustom && !customBody.trim())}
                >
                  {isCustom ? "실행" : "다시"}
                </Act>
              </Actions>
            </Foot>
          </Col>
          <Col>
            <Head>근거</Head>
            <Body className="slim-scroll">
              {sources.length === 0 ? (
                <Empty>
                  {skipped
                    ? "가드레일이 막으면 검색도 LLM도 건너뜁니다."
                    : isCustom && !customBody.trim()
                    ? "민원을 적으면 근거가 붙습니다."
                    : "검색 중"}
                </Empty>
              ) : (
                sources.map((s) => (
                  <div key={s.id} style={{ marginBottom: "0.85rem" }}>
                    <Title>{s.source}</Title>
                    <Draft>
                      {s.body} 개정일 {s.revised}
                    </Draft>
                  </div>
                ))
              )}
            </Body>
            <Head>수행 {rounds.length}차</Head>
            <Body className="slim-scroll" aria-live="polite">
              {rounds.length === 0 ? (
                <Empty>초안이 나오면 1차가 쌓입니다. 확정·유보·다시가 다음 차수입니다.</Empty>
              ) : (
                <RoundList>
                  {rounds.map((row) => (
                    <RoundItem key={`${row.at}-${row.n}`}>
                      <strong>
                        {row.n}차 · {HITL_ACTION_KO[row.action]}
                      </strong>
                      {row.note}
                    </RoundItem>
                  ))}
                </RoundList>
              )}
            </Body>
          </Col>
        </Shell>
      </Frame>
      <Caption>
        확정·유보·다시는 수행 n차로 남습니다. 로컬 Ollama가 없으면 연결 안 됨으로
        남습니다. 주민번호가 있으면 LLM을 호출하지 않습니다.
      </Caption>
    </Wrap>
  );
};

export default HitlDesk;

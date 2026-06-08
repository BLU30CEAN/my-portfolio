import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Clock,
  FlaskConical,
  Lock,
  Unlock,
  XCircle,
} from "lucide-react";
import { useQAReport } from "../hooks/useQAReport";
import { useQAUnlock } from "../hooks/useQAUnlock";
import { maskReportForView } from "../utils/qaMasking";
import type { DefectSeverity, DefectStatus } from "../types/qaReport";

const PageWrap = styled.div`
  min-height: 100vh;
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  padding: 2rem 1.25rem 4rem;
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const BackBtn = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  margin-bottom: 1.5rem;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};
  }
`;

const Title = styled.h1`
  font-size: clamp(1.85rem, 4vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 0.4rem;
  background: ${(p) => p.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Lead = styled.p`
  margin: 0 0 2rem;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.7;
  max-width: 68ch;
`;

const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.85rem;
  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const KpiCard = styled(motion.div)`
  padding: 1.15rem 1.2rem;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const KpiLabel = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.textMuted};
  margin-bottom: 0.35rem;
`;

const KpiValue = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.colors.text};
  font-variant-numeric: tabular-nums;
`;

const KpiMeta = styled.div`
  margin-top: 0.25rem;
  font-size: 0.78rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.card};
  overflow: hidden;
`;

const PanelHead = styled.div`
  padding: 0.9rem 1.1rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.primary};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.84rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.65rem 1rem;
  color: ${(p) => p.theme.colors.textMuted};
  font-weight: 700;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const Td = styled.td`
  padding: 0.65rem 1rem;
  border-bottom: 1px solid
    ${(p) => `color-mix(in srgb, ${p.theme.colors.border} 65%, transparent)`};
  color: ${(p) => p.theme.colors.textSecondary};
  vertical-align: top;
`;

const Mono = styled.span`
  font-family: ui-monospace, "Cascadia Code", monospace;
  font-size: 0.78rem;
  color: ${(p) => p.theme.colors.text};
`;

const Badge = styled.span<{ $tone: DefectSeverity | DefectStatus | "pass" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  color: ${(p) => {
    if (p.$tone === "critical" || p.$tone === "open") return p.theme.colors.danger;
    if (p.$tone === "major") return "#c27803";
    if (p.$tone === "resolved" || p.$tone === "pass") return p.theme.colors.success;
    return p.theme.colors.primary;
  }};
  background: ${(p) => {
    if (p.$tone === "critical" || p.$tone === "open")
      return `${p.theme.colors.danger}18`;
    if (p.$tone === "major") return "#c2780318";
    if (p.$tone === "resolved" || p.$tone === "pass")
      return `${p.theme.colors.success}18`;
    return `${p.theme.colors.primarySoft}`;
  }};
`;

const HistoryBars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.45rem;
  padding: 1rem 1.1rem 1.15rem;
  min-height: 140px;
`;

const HistoryBar = styled.div<{ $h: number; $failed: boolean }>`
  flex: 1;
  min-width: 10px;
  height: ${(p) => p.$h}%;
  min-height: 8px;
  border-radius: 4px 4px 2px 2px;
  background: ${(p) =>
    p.$failed ? p.theme.colors.danger : p.theme.colors.primary};
  opacity: ${(p) => (p.$failed ? 0.85 : 0.75)};
`;

const HistoryCaption = styled.div`
  padding: 0 1.1rem 1rem;
  font-size: 0.74rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

const Empty = styled.div`
  padding: 1.25rem 1.1rem;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: 0.88rem;
`;

const UnlockBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.25rem;
  padding: 0.9rem 1rem;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
`;

const PwInput = styled.input`
  flex: 1;
  min-width: 180px;
  padding: 0.55rem 0.75rem;
  border-radius: ${(p) => p.theme.radii.sm};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  font-family: inherit;
  font-size: 0.88rem;
`;

const UnlockBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 0.9rem;
  border-radius: ${(p) => p.theme.radii.sm};
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
  }
`;

const UnlockHint = styled.p`
  width: 100%;
  margin: 0;
  font-size: 0.78rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

const UnlockError = styled.p`
  width: 100%;
  margin: 0;
  font-size: 0.78rem;
  color: ${(p) => p.theme.colors.danger};
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-bottom: 1.5rem;
  font-size: 0.82rem;
  color: ${(p) => p.theme.colors.textMuted};

  strong {
    color: ${(p) => p.theme.colors.text};
  }
`;

function formatDuration(ms: number) {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

function formatWhen(iso: string) {
  try {
    return new Date(iso).toLocaleString("ko-KR", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function QADashboardPage() {
  const navigate = useNavigate();
  const { data, loading, error } = useQAReport();
  const { unlocked, unlock, lock, error: unlockError, passwordConfigured } =
    useQAUnlock();
  const [pw, setPw] = useState("");

  const viewData = useMemo(
    () => (data ? maskReportForView(data, unlocked) : null),
    [data, unlocked],
  );

  const openDefects = useMemo(
    () => data?.defects.filter((d) => d.status === "open") ?? [],
    [data],
  );

  const historyBars = useMemo(() => {
    const hist = viewData?.history ?? [];
    const max = Math.max(1, ...hist.map((h) => h.total));
    return hist
      .slice()
      .reverse()
      .slice(-12)
      .map((h) => ({
        ...h,
        heightPct: Math.max(12, Math.round((h.passed / max) * 100)),
      }));
  }, [viewData]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlock(pw)) setPw("");
  };

  return (
    <PageWrap>
      <Inner>
        <BackBtn
          type="button"
          onClick={() => navigate("/journal")}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft size={16} aria-hidden />
          연구 노트로
        </BackBtn>

        <Title>QA 대시보드</Title>
        <Lead>
          공개 영역은 Pass Rate·건수만 표시합니다. 상세 결함·파일 경로·실행
          환경은 관리자 비밀번호 해제 후 조회할 수 있습니다. 동일 요약은 Google
          Sheets에도 기록됩니다.
        </Lead>

        <UnlockBar data-testid="qa-unlock-form">
          {unlocked ? (
            <>
              <UnlockHint>관리자 모드 — 상세 데이터 표시 중</UnlockHint>
              <UnlockBtn type="button" onClick={lock}>
                <Lock size={14} aria-hidden /> 다시 마스킹
              </UnlockBtn>
            </>
          ) : (
            <form
              onSubmit={handleUnlock}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.65rem",
                width: "100%",
                alignItems: "center",
              }}
            >
              <UnlockHint>
                상세 로그는 마스킹됨 — 관리자 비밀번호로 해제
              </UnlockHint>
              <PwInput
                type="password"
                placeholder="관리자 비밀번호"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                autoComplete="current-password"
                disabled={!passwordConfigured}
              />
              <UnlockBtn type="submit" disabled={!passwordConfigured || !pw}>
                <Unlock size={14} aria-hidden /> 해제
              </UnlockBtn>
              {unlockError && <UnlockError>{unlockError}</UnlockError>}
              {!passwordConfigured && (
                <UnlockError>
                  .env 에 REACT_APP_QA_PW 값을 확인하세요
                </UnlockError>
              )}
            </form>
          )}
        </UnlockBar>

        {loading && <Empty>리포트 로딩 중…</Empty>}
        {error && (
          <Empty>
            리포트를 불러오지 못했습니다. ({error}) 로컬에서{" "}
            <Mono>npm run test:e2e:export</Mono> 실행 후 새로고침하세요.
          </Empty>
        )}

        {viewData && data && (
          <>
            <MetaRow>
              <span>
                마지막 실행:{" "}
                <strong>
                  {unlocked ? formatWhen(data.generatedAt) : "●●●"}
                </strong>
              </span>
              <span>
                Runner: <strong>{data.runner}</strong>
              </span>
              <span>
                Env: <strong>{viewData.environment}</strong>
              </span>
              <span>
                Duration:{" "}
                <strong>{formatDuration(data.summary.durationMs)}</strong>
              </span>
            </MetaRow>

            <KpiGrid>
              <KpiCard data-testid="qa-pass-rate">
                <KpiLabel>Pass Rate</KpiLabel>
                <KpiValue>{data.summary.passRate}%</KpiValue>
                <KpiMeta>
                  {data.summary.passed} passed / {data.summary.total} total
                </KpiMeta>
              </KpiCard>
              <KpiCard data-testid="qa-total-tests">
                <KpiLabel>Total Tests</KpiLabel>
                <KpiValue>{data.summary.total}</KpiValue>
                <KpiMeta>skipped {data.summary.skipped}</KpiMeta>
              </KpiCard>
              <KpiCard data-testid="qa-open-defects">
                <KpiLabel>Open Defects</KpiLabel>
                <KpiValue>{openDefects.length}</KpiValue>
                <KpiMeta>failed {data.summary.failed} in last run</KpiMeta>
              </KpiCard>
              <KpiCard>
                <KpiLabel>Flaky</KpiLabel>
                <KpiValue>{data.summary.flaky}</KpiValue>
                <KpiMeta>retries tracked in CI</KpiMeta>
              </KpiCard>
            </KpiGrid>

            <Split>
              <Panel data-testid="qa-suite-table">
                <PanelHead>
                  <ClipboardList
                    size={14}
                    style={{ verticalAlign: "-2px", marginRight: 6 }}
                    aria-hidden
                  />
                  Suite Breakdown
                </PanelHead>
                <Table>
                  <thead>
                    <tr>
                      <Th>Suite</Th>
                      <Th>Pass</Th>
                      <Th>Fail</Th>
                      <Th>Duration</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {viewData.suites.map((s) => (
                      <tr key={s.id}>
                        <Td>
                          <Mono>{s.file.replace(/^e2e\//, "")}</Mono>
                        </Td>
                        <Td>
                          <Badge $tone="pass">{s.passed}</Badge>
                        </Td>
                        <Td>
                          {s.failed > 0 ? (
                            <Badge $tone="open">{s.failed}</Badge>
                          ) : (
                            "0"
                          )}
                        </Td>
                        <Td>{formatDuration(s.durationMs)}</Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Panel>

              <Panel data-testid="qa-run-history">
                <PanelHead>
                  <Clock
                    size={14}
                    style={{ verticalAlign: "-2px", marginRight: 6 }}
                    aria-hidden
                  />
                  Run History (pass count)
                </PanelHead>
                <HistoryBars>
                  {historyBars.map((h) => (
                    <HistoryBar
                      key={h.runAt}
                      $h={h.heightPct}
                      $failed={h.failed > 0}
                      title={
                        unlocked
                          ? `${formatWhen(h.runAt)} — ${h.passRate}%`
                          : `run — ${h.passRate}%`
                      }
                    />
                  ))}
                </HistoryBars>
                <HistoryCaption>
                  최근 {historyBars.length}회 실행 · bar height = passed tests
                </HistoryCaption>
              </Panel>
            </Split>

            <Panel data-testid="qa-defect-log">
              <PanelHead>
                <FlaskConical
                  size={14}
                  style={{ verticalAlign: "-2px", marginRight: 6 }}
                  aria-hidden
                />
                Defect Log
              </PanelHead>
              {viewData.defects.length === 0 ? (
                <Empty>
                  <CheckCircle2
                    size={16}
                    style={{ verticalAlign: "-3px", marginRight: 6 }}
                    aria-hidden
                  />
                  열린 결함 없음 — 마지막 실행 전체 통과
                </Empty>
              ) : (
                <Table>
                  <thead>
                    <tr>
                      <Th>Status</Th>
                      <Th>Severity</Th>
                      <Th>Test</Th>
                      <Th>Suite</Th>
                      <Th>Last Seen</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {viewData.defects.map((d) => (
                      <tr key={d.id}>
                        <Td>
                          <Badge $tone={d.status}>
                            {d.status === "open" ? (
                              <XCircle size={11} aria-hidden />
                            ) : (
                              <CheckCircle2 size={11} aria-hidden />
                            )}
                            {d.status}
                          </Badge>
                        </Td>
                        <Td>
                          <Badge $tone={d.severity}>
                            {d.severity === "critical" && (
                              <AlertTriangle size={11} aria-hidden />
                            )}
                            {d.severity}
                          </Badge>
                        </Td>
                        <Td>
                          <div>{d.title}</div>
                          {d.message && (
                            <div style={{ marginTop: 4, fontSize: "0.76rem" }}>
                              {d.message}
                            </div>
                          )}
                        </Td>
                        <Td>
                          <Mono>{d.file.replace(/^e2e\//, "")}</Mono>
                        </Td>
                        <Td>
                          {unlocked ? formatWhen(d.lastSeen) : "●●●"}
                        </Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Panel>
          </>
        )}
      </Inner>
    </PageWrap>
  );
}

export default QADashboardPage;

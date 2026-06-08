import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { animate, stagger } from "animejs";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Database,
  Server,
} from "lucide-react";
import { usePortfolioOpsData, type OpsFeedStatus } from "../../hooks/usePortfolioOpsData";

type KpiKey = "passRate" | "runDuration" | "activity" | "defects";

type KpiDef = {
  key: KpiKey;
  label: string;
  unit: string;
  decimals: number;
  icon: React.ElementType;
  accent: string;
  pick: (kpis: ReturnType<typeof usePortfolioOpsData>["kpis"]) => number | null;
  format?: (v: number) => string;
};

const KPIS: KpiDef[] = [
  {
    key: "passRate",
    label: "E2E pass rate",
    unit: "%",
    decimals: 0,
    icon: CheckCircle2,
    accent: "#43e97b",
    pick: (k) => k.passRate,
  },
  {
    key: "runDuration",
    label: "E2E run time",
    unit: "",
    decimals: 0,
    icon: Activity,
    accent: "#4facfe",
    pick: (k) => k.runDuration,
    format: (v) => (v < 1000 ? `${Math.round(v)}ms` : `${(v / 1000).toFixed(1)}s`),
  },
  {
    key: "activity",
    label: "Dev activity (365d)",
    unit: "",
    decimals: 0,
    icon: Database,
    accent: "#667eea",
    pick: (k) => (k.activityTotal > 0 ? k.activityTotal : null),
    format: (v) => v.toLocaleString("en-US"),
  },
  {
    key: "defects",
    label: "Open defects",
    unit: "",
    decimals: 0,
    icon: AlertTriangle,
    accent: "#f093fb",
    pick: (k) => k.openDefects,
    format: (v) => String(Math.round(v)),
  },
];

function buildSparklinePath(values: number[], width = 200, height = 64): string {
  if (values.length === 0) return `M4 ${height / 2} L196 ${height / 2}`;
  if (values.length === 1) return `M4 ${height / 2} L196 ${height / 2}`;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const padY = 10;
  const usable = height - padY * 2;

  return values
    .map((v, i) => {
      const x = 4 + (i / (values.length - 1)) * 192;
      const y = padY + usable - ((v - min) / range) * usable;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function feedStatusLabel(status: OpsFeedStatus): string {
  switch (status) {
    case "loading":
      return "sync";
    case "healthy":
      return "ok";
    case "degraded":
      return "warn";
    case "offline":
      return "down";
  }
}

const Panel = styled.div`
  position: relative;
  border-radius: ${(p) => p.theme.radii.xl};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.cardHover};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      600px circle at var(--mx, 50%) var(--my, 0%),
      ${(p) => p.theme.colors.primarySoft},
      transparent 55%
    );
    opacity: 0.6;
    pointer-events: none;
  }
`;

const Chrome = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1.1rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) =>
    `color-mix(in srgb, ${p.theme.colors.backgroundElevated} 70%, transparent)`};
`;

const Dots = styled.div`
  display: flex;
  gap: 0.35rem;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.borderStrong};
  }
  span:nth-child(1) {
    background: #ff5f57;
  }
  span:nth-child(2) {
    background: #febc2e;
  }
  span:nth-child(3) {
    background: #28c840;
  }
`;

const ChromeTitle = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${(p) => p.theme.colors.textMuted};
  font-family: ui-monospace, "Cascadia Code", monospace;
`;

const Live = styled.span<{ $muted?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: ${(p) => (p.$muted ? p.theme.colors.textMuted : p.theme.colors.success)};
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 0 3px
      ${(p) =>
        p.$muted
          ? `${p.theme.colors.textMuted}20`
          : `${p.theme.colors.success}30`};
    animation: ${(p) => (p.$muted ? "none" : "pulse 2s ease-in-out infinite")};
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.45;
    }
  }
`;

const Body = styled.div`
  position: relative;
  z-index: 1;
  padding: 1.15rem 1.1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.65rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const KpiCard = styled.div`
  padding: 0.85rem 0.9rem;
  border-radius: ${(p) => p.theme.radii.md};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) =>
    `color-mix(in srgb, ${p.theme.colors.backgroundElevated} 55%, transparent)`};
`;

const KpiTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.45rem;
`;

const KpiLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.textMuted};
`;

const KpiIcon = styled.span<{ $color: string }>`
  color: ${(p) => p.$color};
  opacity: 0.9;
`;

const KpiValue = styled.div`
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.colors.text};
  font-variant-numeric: tabular-nums;

  span.unit {
    font-size: 0.78rem;
    font-weight: 600;
    color: ${(p) => p.theme.colors.textMuted};
    margin-left: 0.15rem;
  }
`;

const ChartBlock = styled.div`
  padding: 0.85rem 0.9rem;
  border-radius: ${(p) => p.theme.radii.md};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) =>
    `color-mix(in srgb, ${p.theme.colors.backgroundElevated} 55%, transparent)`};
`;

const ChartHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const ChartTitle = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.textMuted};
`;

const ChartMeta = styled.span`
  font-size: 0.7rem;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 600;
`;

const SparkSvg = styled.svg`
  width: 100%;
  height: 64px;
  display: block;
`;

const SparkPath = styled.path`
  fill: none;
  stroke: url(#sparkGrad);
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const SparkArea = styled.path`
  fill: url(#areaGrad);
  opacity: 0.35;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SubPanel = styled.div`
  padding: 0.85rem 0.9rem;
  border-radius: ${(p) => p.theme.radii.md};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) =>
    `color-mix(in srgb, ${p.theme.colors.backgroundElevated} 55%, transparent)`};
`;

const SubTitle = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.textMuted};
  margin-bottom: 0.55rem;
`;

const ServiceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.4rem 0;
  font-size: 0.78rem;
  border-bottom: 1px solid
    ${(p) => `color-mix(in srgb, ${p.theme.colors.border} 60%, transparent)`};

  &:last-child {
    border-bottom: none;
  }
`;

const ServiceName = styled.span`
  font-family: ui-monospace, "Cascadia Code", monospace;
  color: ${(p) => p.theme.colors.text};
  font-weight: 600;
`;

const ServicePort = styled.span`
  color: ${(p) => p.theme.colors.textMuted};
  font-size: 0.7rem;
`;

const StatusPill = styled.span<{ $status: OpsFeedStatus }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.68rem;
  font-weight: 700;
  color: ${(p) =>
    p.$status === "healthy"
      ? p.theme.colors.success
      : p.$status === "degraded"
        ? "#febc2e"
        : p.$status === "offline"
          ? p.theme.colors.danger
          : p.theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const AlertRow = styled.div`
  display: flex;
  gap: 0.45rem;
  align-items: flex-start;
  padding: 0.4rem 0;
  font-size: 0.76rem;
  line-height: 1.45;
  color: ${(p) => p.theme.colors.textSecondary};
  border-bottom: 1px solid
    ${(p) => `color-mix(in srgb, ${p.theme.colors.border} 60%, transparent)`};

  &:last-child {
    border-bottom: none;
  }
`;

const AlertDot = styled.span<{ $level: "ok" | "info" | "warn" }>`
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-top: 0.35rem;
  background: ${(p) =>
    p.$level === "ok"
      ? p.theme.colors.success
      : p.$level === "warn"
        ? "#febc2e"
        : p.theme.colors.primary};
`;

const AlertAgo = styled.span`
  flex-shrink: 0;
  font-size: 0.68rem;
  color: ${(p) => p.theme.colors.textMuted};
  margin-left: auto;
`;

const EmptyHint = styled.p`
  margin: 0;
  font-size: 0.76rem;
  color: ${(p) => p.theme.colors.textMuted};
  line-height: 1.5;
`;

function formatKpiDisplay(
  value: number | null,
  kpi: KpiDef,
): { main: string; unit: string } {
  if (value == null) return { main: "—", unit: "" };
  if (kpi.format) return { main: kpi.format(value), unit: "" };
  const main =
    kpi.decimals > 0 ? value.toFixed(kpi.decimals) : String(Math.round(value));
  return { main, unit: kpi.unit };
}

const OpsDashboard: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const sparkRef = useRef<SVGPathElement>(null);
  const ops = usePortfolioOpsData();
  const [values, setValues] = useState<Record<KpiKey, number>>({
    passRate: 0,
    runDuration: 0,
    activity: 0,
    defects: 0,
  });
  const [animated, setAnimated] = useState(false);

  const targets = useMemo(() => {
    return {
      passRate: ops.kpis.passRate ?? 0,
      runDuration: ops.kpis.runDuration ?? 0,
      activity: ops.kpis.activityTotal ?? 0,
      defects: ops.kpis.openDefects ?? 0,
    };
  }, [ops.kpis]);

  const sparkline = useMemo(
    () => buildSparklinePath(ops.trend.values),
    [ops.trend.values],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root || ops.loading || animated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || animated) return;
        setAnimated(true);
        observer.disconnect();

        KPIS.forEach((kpi) => {
          const target = targets[kpi.key];
          const state = { v: 0 };
          animate(state, {
            v: target,
            duration: 1400,
            ease: "outExpo",
            delay:
              kpi.key === "passRate"
                ? 0
                : kpi.key === "runDuration"
                  ? 80
                  : kpi.key === "activity"
                    ? 160
                    : 240,
            onUpdate: () => {
              setValues((prev) => ({ ...prev, [kpi.key]: state.v }));
            },
          });
        });

        const cards = root.querySelectorAll("[data-kpi]");
        animate(cards, {
          opacity: [0, 1],
          translateY: [14, 0],
          delay: stagger(70, { start: 100 }),
          duration: 520,
          ease: "outCubic",
        });

        const rows = root.querySelectorAll("[data-row]");
        animate(rows, {
          opacity: [0, 1],
          translateX: [-10, 0],
          delay: stagger(60, { start: 400 }),
          duration: 450,
          ease: "outCubic",
        });

        const path = sparkRef.current;
        if (path && ops.trend.values.length > 1) {
          const len = path.getTotalLength();
          path.style.strokeDasharray = `${len}`;
          path.style.strokeDashoffset = `${len}`;
          animate(path, {
            strokeDashoffset: [len, 0],
            duration: 1600,
            ease: "outCubic",
            delay: 300,
          });
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [ops.loading, animated, targets, ops.trend.values.length]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 100;
    const ny = ((e.clientY - r.top) / r.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${nx}%`);
    e.currentTarget.style.setProperty("--my", `${ny}%`);
  };

  return (
    <Panel
      ref={rootRef}
      onMouseMove={onMove}
      aria-label="포트폴리오 실시간 데이터 대시보드"
    >
      <Chrome>
        <Dots>
          <span />
          <span />
          <span />
        </Dots>
        <ChromeTitle>portfolio-telemetry / live feeds</ChromeTitle>
        <Live $muted={ops.loading}>{ops.loading ? "sync" : "live"}</Live>
      </Chrome>

      <Body>
        <KpiGrid>
          {KPIS.map((kpi) => {
            const raw = kpi.pick(ops.kpis);
            const display =
              animated && raw != null
                ? formatKpiDisplay(values[kpi.key], kpi)
                : formatKpiDisplay(raw, kpi);

            return (
              <KpiCard key={kpi.key} data-kpi>
                <KpiTop>
                  <KpiLabel>{kpi.label}</KpiLabel>
                  <KpiIcon $color={kpi.accent}>
                    <kpi.icon size={14} strokeWidth={2.25} aria-hidden />
                  </KpiIcon>
                </KpiTop>
                <KpiValue>
                  {display.main}
                  {display.unit ? (
                    <span className="unit">{display.unit}</span>
                  ) : null}
                </KpiValue>
              </KpiCard>
            );
          })}
        </KpiGrid>

        <ChartBlock>
          <ChartHead>
            <ChartTitle>E2E pass rate trend</ChartTitle>
            <ChartMeta>{ops.trend.meta}</ChartMeta>
          </ChartHead>
          <SparkSvg viewBox="0 0 200 64" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#4facfe" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#667eea" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#667eea" stopOpacity="0" />
              </linearGradient>
            </defs>
            <SparkArea d={`${sparkline} L196 64 L4 64 Z`} />
            <SparkPath ref={sparkRef} d={sparkline} />
          </SparkSvg>
        </ChartBlock>

        <Split>
          <SubPanel>
            <SubTitle>Data feeds</SubTitle>
            {ops.feeds.map((feed) => (
              <ServiceRow key={feed.id} data-row>
                <div>
                  <ServiceName>{feed.name}</ServiceName>
                  <ServicePort> {feed.detail}</ServicePort>
                </div>
                <StatusPill $status={feed.status}>
                  <Server size={11} aria-hidden />
                  {feedStatusLabel(feed.status)}
                </StatusPill>
              </ServiceRow>
            ))}
          </SubPanel>

          <SubPanel>
            <SubTitle>Recent events</SubTitle>
            {ops.events.length === 0 ? (
              <EmptyHint>
                Run <code>npm run test:e2e:export</code> to populate QA history.
              </EmptyHint>
            ) : (
              ops.events.map((event) => (
                <AlertRow key={`${event.message}-${event.ago}`} data-row>
                  <AlertDot $level={event.level} />
                  <span>{event.message}</span>
                  <AlertAgo>{event.ago}</AlertAgo>
                </AlertRow>
              ))
            )}
          </SubPanel>
        </Split>
      </Body>
    </Panel>
  );
};

export default OpsDashboard;

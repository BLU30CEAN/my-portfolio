import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animate, stagger } from "animejs";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Database,
  Server,
} from "lucide-react";

type KpiKey = "error" | "p95" | "db" | "uptime";

type KpiDef = {
  key: KpiKey;
  label: string;
  target: number;
  unit: string;
  decimals: number;
  icon: React.ElementType;
  accent: string;
};

const KPIS: KpiDef[] = [
  {
    key: "error",
    label: "에러율",
    target: 0.28,
    unit: "%",
    decimals: 2,
    icon: AlertTriangle,
    accent: "#43e97b",
  },
  {
    key: "p95",
    label: "p95 지연",
    target: 142,
    unit: "ms",
    decimals: 0,
    icon: Activity,
    accent: "#4facfe",
  },
  {
    key: "db",
    label: "DB Pool",
    target: 34,
    unit: "%",
    decimals: 0,
    icon: Database,
    accent: "#667eea",
  },
  {
    key: "uptime",
    label: "가용성",
    target: 99.94,
    unit: "%",
    decimals: 2,
    icon: Server,
    accent: "#f093fb",
  },
];

const SERVICES = [
  { name: "spring-boot-api", port: "8080", status: "healthy" as const },
  { name: "fastapi-ml", port: "8000", status: "healthy" as const },
  { name: "postgresql-primary", port: "5432", status: "healthy" as const },
];

const ALERTS = [
  {
    level: "resolved" as const,
    msg: "JWT refresh 요청 급증 — 자동 스케일 완료",
    ago: "2h",
  },
  {
    level: "info" as const,
    msg: "Jenkins deploy #1842 — production",
    ago: "5h",
  },
  {
    level: "watch" as const,
    msg: "p95 지연 180ms 초과 — 쿼리 인덱스 검토",
    ago: "1d",
  },
];

const SPARKLINE =
  "M4 52 L28 44 L52 38 L76 42 L100 28 L124 32 L148 18 L172 22 L196 12";

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

const Live = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.success};
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 0 3px ${(p) => p.theme.colors.success}30;
    animation: pulse 2s ease-in-out infinite;
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

const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.68rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.success};
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

const AlertDot = styled.span<{ $level: "resolved" | "info" | "watch" }>`
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-top: 0.35rem;
  background: ${(p) =>
    p.$level === "resolved"
      ? p.theme.colors.success
      : p.$level === "watch"
        ? "#febc2e"
        : p.theme.colors.primary};
`;

const AlertAgo = styled.span`
  flex-shrink: 0;
  font-size: 0.68rem;
  color: ${(p) => p.theme.colors.textMuted};
  margin-left: auto;
`;

function formatKpi(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
}

const OpsDashboard: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const sparkRef = useRef<SVGPathElement>(null);
  const [values, setValues] = useState<Record<KpiKey, number>>({
    error: 0,
    p95: 0,
    db: 0,
    uptime: 0,
  });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || animated) return;
        setAnimated(true);
        observer.disconnect();

        KPIS.forEach((kpi) => {
          const state = { v: 0 };
          animate(state, {
            v: kpi.target,
            duration: 1400,
            ease: "outExpo",
            delay: kpi.key === "error" ? 0 : kpi.key === "p95" ? 80 : kpi.key === "db" ? 160 : 240,
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
        if (path) {
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
  }, [animated]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 100;
    const ny = ((e.clientY - r.top) / r.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${nx}%`);
    e.currentTarget.style.setProperty("--my", `${ny}%`);
  };

  return (
    <Panel ref={rootRef} onMouseMove={onMove} aria-label="운영 모니터링 대시보드 데모">
      <Chrome>
        <Dots>
          <span />
          <span />
          <span />
        </Dots>
        <ChromeTitle>ops-console / production</ChromeTitle>
        <Live>live</Live>
      </Chrome>

      <Body>
        <KpiGrid>
          {KPIS.map((kpi) => (
            <KpiCard key={kpi.key} data-kpi>
              <KpiTop>
                <KpiLabel>{kpi.label}</KpiLabel>
                <KpiIcon $color={kpi.accent}>
                  <kpi.icon size={14} strokeWidth={2.25} aria-hidden />
                </KpiIcon>
              </KpiTop>
              <KpiValue>
                {formatKpi(values[kpi.key], kpi.decimals)}
                <span className="unit">{kpi.unit}</span>
              </KpiValue>
            </KpiCard>
          ))}
        </KpiGrid>

        <ChartBlock>
          <ChartHead>
            <ChartTitle>요청 처리량 (24h)</ChartTitle>
            <ChartMeta>+12.4% vs yesterday</ChartMeta>
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
            <SparkArea d={`${SPARKLINE} L196 64 L4 64 Z`} />
            <SparkPath ref={sparkRef} d={SPARKLINE} />
          </SparkSvg>
        </ChartBlock>

        <Split>
          <SubPanel>
            <SubTitle>서비스 상태</SubTitle>
            {SERVICES.map((svc) => (
              <ServiceRow key={svc.name} data-row>
                <div>
                  <ServiceName>{svc.name}</ServiceName>
                  <ServicePort> :{svc.port}</ServicePort>
                </div>
                <StatusPill>
                  <CheckCircle2 size={11} aria-hidden />
                  {svc.status}
                </StatusPill>
              </ServiceRow>
            ))}
          </SubPanel>

          <SubPanel>
            <SubTitle>최근 알림</SubTitle>
            {ALERTS.map((a) => (
              <AlertRow key={a.msg} data-row>
                <AlertDot $level={a.level} />
                <span>{a.msg}</span>
                <AlertAgo>{a.ago}</AlertAgo>
              </AlertRow>
            ))}
          </SubPanel>
        </Split>
      </Body>
    </Panel>
  );
};

export default OpsDashboard;

import React from "react";
import styled from "styled-components";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.65rem;
  margin-top: 0.85rem;
  padding-top: 0.85rem;
  border-top: 1px solid ${(p) => p.theme.colors.border};
`;

const MetricItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.65rem;
  background: ${(p) => `color-mix(in srgb, ${p.theme.colors.primarySoft} 50%, transparent)`};
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => p.theme.colors.primarySoft};
    transform: scale(1.02);
  }
`;

const MetricIcon = styled.div<{ $color: string }>`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.$color};
  color: #fff;
  flex-shrink: 0;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const MetricContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
`;

const MetricLabel = styled.div`
  font-size: 0.68rem;
  color: ${(p) => p.theme.colors.textMuted};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const MetricValue = styled.div`
  font-size: 0.92rem;
  color: ${(p) => p.theme.colors.text};
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export interface ProjectMetric {
  icon: "trending" | "users" | "zap" | "target";
  label: string;
  value: string;
  color: string;
}

interface Props {
  metrics: ProjectMetric[];
}

const ICON_MAP = {
  trending: TrendingUp,
  users: Users,
  zap: Zap,
  target: Target,
};

/**
 * 프로젝트 카드에 표시할 성과 지표 미니 그리드
 */
const ProjectMetricsMini: React.FC<Props> = ({ metrics }) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <MetricsGrid>
      {metrics.map((metric, index) => {
        const IconComponent = ICON_MAP[metric.icon];
        return (
          <MetricItem key={index}>
            <MetricIcon $color={metric.color}>
              <IconComponent />
            </MetricIcon>
            <MetricContent>
              <MetricLabel>{metric.label}</MetricLabel>
              <MetricValue>{metric.value}</MetricValue>
            </MetricContent>
          </MetricItem>
        );
      })}
    </MetricsGrid>
  );
};

export default ProjectMetricsMini;

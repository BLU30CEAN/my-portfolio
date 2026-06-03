import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ChartWrap = styled(motion.div)`
  width: 100%;
  padding: 1.5rem 1.25rem;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const ChartTitle = styled.h4`
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 16px;
    height: 2px;
    background: ${(p) => p.theme.colors.gradient};
  }
`;

const BarGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BarRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const BarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${(p) => p.theme.colors.text};
  font-weight: 600;

  .value {
    font-size: 0.78rem;
    color: ${(p) => p.theme.colors.primary};
    font-weight: 800;
  }
`;

const BarTrack = styled.div`
  width: 100%;
  height: 24px;
  background: ${(p) => `color-mix(in srgb, ${p.theme.colors.border} 40%, transparent)`};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const BarFill = styled.div<{ $color: string }>`
  height: 100%;
  background: ${(p) => p.$color};
  border-radius: 12px;
  width: 0%;
  transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

interface MetricData {
  label: string;
  value: number;
  max: number;
  unit?: string;
  color: string;
}

interface Props {
  title: string;
  metrics: MetricData[];
  animationDelay?: number;
}

/**
 * 프로젝트 성과 지표를 애니메이션 바 차트로 표현
 * IntersectionObserver로 화면에 보일 때 시작
 */
const MetricsBarChart: React.FC<Props> = ({
  title,
  metrics,
  animationDelay = 0,
}) => {
  const [inView, setInView] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!wrapRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(wrapRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      barsRef.current.forEach((bar, index) => {
        if (bar) {
          const metric = metrics[index];
          const percentage = (metric.value / metric.max) * 100;
          bar.style.width = `${percentage}%`;
        }
      });
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [inView, metrics, animationDelay]);

  return (
    <ChartWrap
      ref={wrapRef}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <ChartTitle>{title}</ChartTitle>
      <BarGrid>
        {metrics.map((metric, index) => (
          <BarRow key={metric.label}>
            <BarLabel>
              <span>{metric.label}</span>
              <span className="value">
                {metric.value}{metric.unit || ''}
              </span>
            </BarLabel>
            <BarTrack>
              <BarFill
                ref={(el) => {
                  if (el) barsRef.current[index] = el;
                }}
                $color={metric.color}
              />
            </BarTrack>
          </BarRow>
        ))}
      </BarGrid>
    </ChartWrap>
  );
};

export default MetricsBarChart;

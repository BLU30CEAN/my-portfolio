import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  BarChart3,
  Boxes,
  Database,
  LineChart,
  Server,
} from "lucide-react";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import OpsDashboard from "../../components/ui/OpsDashboard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Story = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Lead = styled.p`
  margin: 0;
  font-size: ${(p) => p.theme.typography.fluidBody};
  line-height: 1.82;
  color: ${(p) => p.theme.colors.textSecondary};

  strong {
    color: ${(p) => p.theme.colors.text};
    font-weight: 700;
  }
`;

const Pillars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Pillar = styled(motion.article)`
  display: flex;
  gap: 0.85rem;
  padding: 1rem 1.1rem;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.card};
  transition: border-color ${(p) => p.theme.motion.dur}
      ${(p) => p.theme.motion.easeOut},
    transform ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut};

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    transform: translateX(4px);
  }
`;

const PillarIcon = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
`;

const PillarBody = styled.div`
  min-width: 0;
`;

const PillarTitle = styled.h3`
  margin: 0 0 0.3rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.text};
  letter-spacing: -0.02em;
`;

const PillarText = styled.p`
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.65;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.55rem;
`;

const StackChip = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
`;

const DashboardWrap = styled(motion.div)`
  position: sticky;
  top: 96px;

  @media (max-width: 1024px) {
    position: static;
  }
`;

const Caption = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.78rem;
  line-height: 1.55;
  color: ${(p) => p.theme.colors.textMuted};
  text-align: center;
`;

const PILLARS = [
  {
    icon: Database,
    title: "DB / 트랜잭션",
    text: "PostgreSQL·MySQL 주문/결제 스키마. 인덱스 튜닝, 커넥션 풀, Batch/Quartz 이력 테이블.",
    stack: ["PostgreSQL", "MySQL", "MyBatis"],
  },
  {
    icon: Server,
    title: "Spring Boot API",
    text: "JWT, NICE/OKPOS 연동, Swagger 계약. EC2 + Jenkins 배포 자동화 95%.",
    stack: ["Java 21", "Spring Boot", "JWT"],
  },
  {
    icon: Boxes,
    title: "FastAPI ML 레인",
    text: "LLM/STT 마이크로서비스 분리. Docker, p95 180ms, 5K req/min 처리.",
    stack: ["Python", "FastAPI", "Docker"],
  },
  {
    icon: LineChart,
    title: "관측 / QA",
    text: "Datadog APM + GA/GTM 퍼널. Playwright 9/9 smoke, /qa JSON 리포트.",
    stack: ["Datadog", "Playwright", "GA"],
  },
] as const;

const EngineeringSection: React.FC = () => {
  return (
    <Section id="engineering" dotCount={10} dotSeed={6} fullHeight glow>
      <SectionTitle
        eyebrow="Engineering"
        title="Full-stack + observability + QA"
        subtitle="API p95 180ms, 배포 자동화 95%, Playwright 9/9. 한 제품 안에서 프론트/백/DB/관측을 연결합니다."
      />

      <Grid>
        <Story
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.55 }}
        >
          <Lead>
            <strong>Spring Boot</strong> API + <strong>FastAPI</strong> ML +
            <strong> React/RN</strong> client. 운영 KPI는 Datadog/GA,
            회귀는 Playwright JSON → <strong>/qa</strong>.
          </Lead>

          <Pillars>
            {PILLARS.map((p, i) => (
              <Pillar
                key={p.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <PillarIcon>
                  <p.icon size={18} strokeWidth={2.25} aria-hidden />
                </PillarIcon>
                <PillarBody>
                  <PillarTitle>{p.title}</PillarTitle>
                  <PillarText>{p.text}</PillarText>
                  <StackRow>
                    {p.stack.map((s) => (
                      <StackChip key={s}>{s}</StackChip>
                    ))}
                  </StackRow>
                </PillarBody>
              </Pillar>
            ))}
          </Pillars>
        </Story>

        <DashboardWrap
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <OpsDashboard />
          <Caption>
            <BarChart3
              size={12}
              style={{ verticalAlign: "-2px", marginRight: 4 }}
              aria-hidden
            />
            KPI demo UI — anime.js v4 sparkline animation (sample metrics)
          </Caption>
        </DashboardWrap>
      </Grid>
    </Section>
  );
};

export default EngineeringSection;

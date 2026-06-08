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
    text: "Datadog APM + GA/GTM 퍼널. E2E export JSON, /qa 대시보드 연동.",
    stack: ["Datadog", "GA", "Jest"],
  },
] as const;

const EngineeringSection: React.FC = () => {
  return (
    <Section id="engineering" dotCount={10} dotSeed={6} fullHeight glow>
      <SectionTitle
        eyebrow="Engineering"
        title="프론트만이 아닌, 운영까지 담당하는 엔지니어링"
        subtitle="React/TypeScript로 UX를 다듬고, Java/Python 백엔드, DB, 관측, E2E 회귀까지 한 제품 안에서 이어 붙입니다."
      />

      <Grid>
        <Story
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.55 }}
        >
          <Lead>
            화면을 예쁘게 그리는 것과, 장애가 났을 때 원인을 좁히는 것은
            같은 맥락이라고 봅니다. 프론트 인터랙션(anime.js, Framer Motion)과
            백엔드/DB/관측을 함께 다루며, API p95 <strong>180ms</strong>, 배포
            자동화 <strong>95%</strong>, E2E pass rate <strong>100%</strong>로
            운영 KPI와 회귀를 맞춥니다.
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
            portfolio-telemetry — qa-report, GitHub API, GitLab export 실데이터
          </Caption>
        </DashboardWrap>
      </Grid>
    </Section>
  );
};

export default EngineeringSection;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Award, Layers, Users, Zap } from "lucide-react";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import CountUp from "../../components/ui/CountUp";
import MetricsBarChart from "../../components/ui/MetricsBarChart";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const Story = styled(motion.div)`
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: ${(p) => p.theme.typography.fluidBody};
  line-height: 1.85;

  p + p {
    margin-top: 1rem;
  }

  strong {
    color: ${(p) => p.theme.colors.text};
    font-weight: 700;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

const StatCard = styled(motion.div)`
  position: relative;
  padding: 1.4rem 1.25rem;
  border-radius: ${(p) => p.theme.radii.lg};
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  box-shadow: ${(p) => p.theme.shadows.card};
  transition: border-color ${(p) => p.theme.motion.dur}
      ${(p) => p.theme.motion.easeOut},
    box-shadow ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut},
    transform ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut};

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: ${(p) => p.theme.shadows.cardHover};
    transform: translateY(-3px);
  }
`;

const StatIconWrap = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.85rem;
`;

const StatValue = styled.div`
  font-size: clamp(1.6rem, 3.2vw, 2.05rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.colors.text};

  span.suffix {
    color: ${(p) => p.theme.colors.primary};
    margin-left: 0.15rem;
  }
`;

const StatLabel = styled.div`
  margin-top: 0.25rem;
  font-size: 0.88rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

type StatItem = {
  icon: React.ElementType;
  to?: number;
  prefix?: string;
  suffix?: string;
  staticValue?: string;
  label: string;
};

const STATS: StatItem[] = [
  { icon: Award, to: 5, suffix: "년", label: "풀스택 실무" },
  { icon: Zap, staticValue: "9/9", label: "Playwright E2E pass" },
  { icon: Layers, to: 35, suffix: "+", label: "프로덕션 스택" },
  { icon: Users, staticValue: "0.3%", label: "B2C 주문 에러율 (운영)" },
];

const AboutSection: React.FC = () => {
  return (
    <Section id="about" dotCount={10} dotSeed={2} fullHeight glow>
      <SectionTitle
        eyebrow="About"
        title="지표로 검증하는 5년"
        subtitle="B2C 주문/결제, AI 실시간, Playwright 회귀. p95, 에러율, pass rate로 품질을 맞춥니다."
      />

      <Grid>
        <Story
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <p>
            B2C 주문 채널 <strong>일 2,800+건</strong>, 로딩{" "}
            <strong>0.8s</strong>, 에러율 <strong>0.3%</strong>. AI 실시간은{" "}
            <strong>p95 1.2s</strong>, 동시 접속 <strong>500+</strong>. 배포
            전 <strong>Playwright 9/9</strong> smoke, 운영은 Datadog/GA로
            회귀를 추적합니다.
          </p>
          <p>
            해피 패스보다 결제 실패, 세션 만료, WebRTC 끊김 같은{" "}
            <strong>엣지 케이스</strong>를 먼저 재현하고, RCA는 로그와 DB
            정합성으로 좁힙니다.
          </p>
        </Story>

        <div>
          <StatsGrid>
            {STATS.map((s, i) => (
              <StatCard
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <StatIconWrap>
                  <s.icon size={18} />
                </StatIconWrap>
                <StatValue>
                  {typeof s.to === "number" ? (
                    <>
                      <CountUp to={s.to} prefix={s.prefix} />
                      {s.suffix && <span className="suffix">{s.suffix}</span>}
                    </>
                  ) : (
                    s.staticValue
                  )}
                </StatValue>
                <StatLabel>{s.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MetricsBarChart
              title="프로젝트 임팩트"
              animationDelay={200}
              metrics={[
                {
                  label: "응답 속도 개선",
                  value: 68,
                  max: 100,
                  unit: "%",
                  color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                },
                {
                  label: "배포 자동화율",
                  value: 95,
                  max: 100,
                  unit: "%",
                  color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                },
                {
                  label: "에러율 감소",
                  value: 82,
                  max: 100,
                  unit: "%",
                  color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                },
                {
                  label: "코드 커버리지",
                  value: 76,
                  max: 100,
                  unit: "%",
                  color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                },
              ]}
            />
          </motion.div>
        </div>
      </Grid>
    </Section>
  );
};

export default AboutSection;

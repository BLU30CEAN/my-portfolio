import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Award, Layers, Users, Zap } from "lucide-react";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import CountUp from "../../components/ui/CountUp";

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
  { icon: Award, to: 4, suffix: "년+", label: "백엔드 / 운영 실무" },
  { icon: Users, staticValue: "온프레", label: "공공 LLM 구축" },
  { icon: Layers, staticValue: "RCA", label: "로그 / DB 대조" },
  { icon: Zap, staticValue: "Docker", label: "설치 런북" },
];

const AboutSection: React.FC = () => {
  return (
    <Section id="about" dotCount={10} dotSeed={2} fullHeight glow>
      <SectionTitle
        eyebrow="About"
        title="장애 난 구간부터 설계합니다"
        subtitle="기능 목록보다, 끊겼을 때 로그와 DB를 같은 키로 맞춰 볼 수 있는지가 설계입니다."
      />

      <Grid>
        <Story
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <p>
            코드를 직접 쓰고, 배포하고, 장애가 나면 로그를 엽니다. 결제 성공 후
            주문이 안 남던 일을 Datadog, API 로그, DB로 같은 request 기준에
            맞춰 기한 내 닫았습니다. 그 이후 AI 파이프라인에도{" "}
            <strong>request 단위 추적</strong>을 기본값으로 넣습니다.
          </p>
          <p>
            공공 온프레 '모두의 경찰관'에서는{" "}
            <strong>추론 서빙(vLLM)과 에이전트 조합(DAG)을 나눴습니다.</strong>{" "}
            고객 채널이 늘어나도 모델 엔드포인트는 유지하고 그래프만 바꿉니다.
            가드레일이 막으면 하위 LLM을 호출하지 않습니다. 잘못된 답을 보내지
            않고 GPU 비용을 같이 지킵니다.
          </p>
          <p>
            설치는 사람 기억에 두지 않습니다. Docker Compose, 환경 분리,
            오프라인 반입, 런북으로 다음 구축이 같은 순서를 타게 만듭니다.
          </p>
        </Story>

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
      </Grid>
    </Section>
  );
};

export default AboutSection;

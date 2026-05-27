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
  { icon: Award, to: 5, suffix: "년", label: "풀스택 경력" },
  { icon: Users, staticValue: "B2B · AI", label: "실무 도메인" },
  { icon: Layers, to: 35, suffix: "+", label: "운용 스택" },
  { icon: Zap, staticValue: "E2E", label: "파이프라인 설계" },
];

const AboutSection: React.FC = () => {
  return (
    <Section id="about" dotCount={10} dotSeed={2} fullHeight glow>
      <SectionTitle
        eyebrow="About"
        title="실패 경로를 먼저 그린다"
        subtitle="새 기능을 붙이기 전에 운영 단계의 부담을 먼저 그려보는 습관 — 5년 동안 다듬어 온 한 가지 원칙."
      />

      <Grid>
        <Story
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <p>
            개발을 시작한 계기는 단순했습니다. 내가 만든 코드 한 줄이 누군가의
            화면 앞에서 바로 결과로 돌아오는 감각, 그 즉시성을 가장 정직한
            일이라 느꼈습니다.
          </p>
          <p>
            지난 5년은 그 감각을 <strong>운영까지 책임지는 흐름</strong>으로
            넓혀 온 시간이었습니다. 결제, 앱-웹 브릿지, LLM·메타휴먼
            실시간 연동, WebRTC·WebSocket 기반 음성·화상 스트리밍까지 운영
            부담이 큰 도메인에서 한 가지 원칙을 다듬어 왔습니다 ─{" "}
            <strong>새 기능을 붙이기 전에 실패 경로부터 설계한다.</strong>
          </p>
          <p>
            모르는 영역을 만나면 추정 대신 공식 문서와 변경 이력에서
            출발하고, 재현 가능한 작은 실험으로 가설을 좁힙니다. 화려한 기술이
            아니라 운영자가 안심하고 잠들 수 있는 시스템을 만드는 데 시간을
            쓰고 싶습니다.
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

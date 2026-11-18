import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Award, Layers, Users, Zap } from "lucide-react";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import CountUp from "../../components/ui/CountUp";
import { CAREER_TIMELINE, SKILL_GROUPS } from "../../data/career";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2rem;
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
  gap: 0.85rem;
`;

const StatCard = styled(motion.div)`
  padding: 1.15rem 1.1rem;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const StatIcon = styled.div`
  width: 34px;
  height: 34px;
  margin-bottom: 0.7rem;
  border-radius: ${(p) => p.theme.radii.sm};
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const StatValue = styled.div`
  font-family: ${(p) => p.theme.typography.fontDisplay};
  font-size: clamp(1.35rem, 2.6vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.colors.text};

  span.suffix {
    color: ${(p) => p.theme.colors.primary};
    margin-left: 0.12rem;
  }
`;

const StatLabel = styled.div`
  margin-top: 0.2rem;
  font-size: 0.82rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

const Block = styled.div`
  margin-top: 3rem;
`;

const Timeline = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 2px solid ${(p) => p.theme.colors.borderStrong};
`;

const TimeItem = styled(motion.li)`
  position: relative;
  padding: 0 0 1.5rem 1.25rem;

  &::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 0.45rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.primary};
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

const TimeDate = styled.div`
  font-family: ${(p) => p.theme.typography.fontMono};
  font-size: 0.72rem;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 0.25rem;
`;

const TimeTitle = styled.h3`
  margin: 0 0 0.35rem;
  font-size: 1.02rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.text};
`;

const TimeBody = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  padding: 1.15rem 1.2rem;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const SkillCat = styled.h3`
  margin: 0 0 0.7rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
`;

const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const SkillItem = styled.li`
  font-size: 0.86rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textSecondary};
`;

type StatItem = {
  icon: React.ElementType;
  to?: number;
  suffix?: string;
  staticValue?: string;
  label: string;
};

const STATS: StatItem[] = [
  { icon: Award, to: 4, suffix: "년+", label: "백엔드 / 운영 실무" },
  { icon: Users, staticValue: "5개", label: "주요 프로젝트" },
  { icon: Layers, staticValue: "500ms", label: "실시간 지연 목표" },
  { icon: Zap, staticValue: "Docker", label: "설치 런북 / Swagger" },
];

const AboutSection: React.FC = () => {
  return (
    <Section id="about">
      <SectionTitle
        title="소개"
        subtitle="C사에서 모두의 경찰관 LLMOps를 만들고 있습니다."
      />

      <Grid>
        <Story
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <p>
            결제 후 주문이 안 쌓이던 버그를 Datadog, API 로그, DB를 같은
            request id로 맞춰 기한 내 고쳤습니다. AI 호출에도 같은 request id를
            남깁니다.
          </p>
          <p>
            모두의 경찰관: vLLM로 모델을 서빙하고, 에이전트는 DAG로 실행합니다.
            가드레일이 막으면 LLM API를 호출하지 않습니다. 채널이 늘면 그래프만
            바꿉니다.
          </p>
          <p>
            배포는 Docker Compose와 런북 문서 순서대로 합니다.
          </p>
        </Story>

        <StatsGrid>
          {STATS.map((s, i) => (
            <StatCard
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <StatIcon>
                <s.icon size={16} />
              </StatIcon>
              <StatValue>
                {typeof s.to === "number" ? (
                  <>
                    <CountUp to={s.to} />
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

      <Block>
        <SectionTitle
          title="경력"
          subtitle="2021년부터 현재까지, 총 4년 4개월."
        />
        <Timeline>
          {CAREER_TIMELINE.map((item, i) => (
            <TimeItem
              key={item.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <TimeDate>{item.date}</TimeDate>
              <TimeTitle>{item.title}</TimeTitle>
              <TimeBody>{item.description}</TimeBody>
            </TimeItem>
          ))}
        </Timeline>
      </Block>

      <Block>
        <SectionTitle
          title="사용 기술"
          subtitle="실제로 쓴 것만 적었습니다."
        />
        <SkillGrid>
          {SKILL_GROUPS.map((g, i) => (
            <SkillCard
              key={g.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <SkillCat>{g.category}</SkillCat>
              <SkillList>
                {g.skills.map((sk) => (
                  <SkillItem key={sk}>{sk}</SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillGrid>
      </Block>
    </Section>
  );
};

export default AboutSection;

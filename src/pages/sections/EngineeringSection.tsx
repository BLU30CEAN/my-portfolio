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
    title: "DB 설계와 스키마 운영",
    text: "PostgreSQL·MySQL 기반 주문·결제·인증 도메인 스키마를 설계하고, 인덱스·커넥션 풀·트랜잭션 경계를 운영 단계에서 조정해 왔습니다.",
    stack: ["PostgreSQL", "MySQL", "MyBatis", "JPA"],
  },
  {
    icon: Server,
    title: "Java / Spring Boot API",
    text: "Spring Boot 메인 API에서 JWT 인증, 결제·POS 연동, Swagger 계약 문서화까지 담당했습니다. EC2·Jenkins 파이프라인으로 배포 자동화도 함께 구성했습니다.",
    stack: ["Java 21", "Spring Boot", "JWT", "Swagger"],
  },
  {
    icon: Boxes,
    title: "Python / FastAPI ML 레인",
    text: "LLM·ML 워크로드를 FastAPI 마이크로서비스로 분리해 비동기 통신·Docker 배포로 운영했습니다. 새 모델 추가 시 API 계약만 맞추면 되도록 레인을 나눴습니다.",
    stack: ["Python", "FastAPI", "Docker", "OpenAPI"],
  },
  {
    icon: LineChart,
    title: "관측·백오피스",
    text: "Datadog APM·로그·메트릭, GA·GTM 전환 퍼널을 한 흐름으로 묶어 에러율·p95 지연·비즈니스 임팩트를 동시에 추적할 수 있는 내부 백오피스를 설계했습니다.",
    stack: ["Datadog", "GA", "GTM", "Backoffice"],
  },
] as const;

const EngineeringSection: React.FC = () => {
  return (
    <Section id="engineering" dotCount={10} dotSeed={6} fullHeight glow>
      <SectionTitle
        eyebrow="Engineering"
        title="프론트만이 아닌, 운영까지 담당하는 엔지니어링"
        subtitle="React/TypeScript로 사용자 경험을 다듬는 동시에 Java·Python 백엔드, DB, 관측 파이프라인까지 한 제품 안에서 이어 붙일 수 있습니다."
      />

      <Grid>
        <Story
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.55 }}
        >
          <Lead>
            채용 담당자·팀 리드가 궁금해하는 건 &ldquo;화면을 예쁘게 그릴 수
            있나&rdquo;보다, <strong>장애가 났을 때 원인을 좁히고</strong>{" "}
            <strong>데이터로 설명할 수 있나</strong>에 가깝습니다. 저는 프론트
            인터랙션(anime.js·Framer Motion)과 백엔드·DB·관측을 같은 맥락에서
            다룹니다.
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
            실제 운영 지표를 바탕으로 한 UI 데모 — anime.js v4로 KPI·스파크라인
            애니메이션
          </Caption>
        </DashboardWrap>
      </Grid>
    </Section>
  );
};

export default EngineeringSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GitBranch, Layers, BookOpen, Receipt, Clapperboard } from "lucide-react";
import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  text-align: left;
  padding: 1.4rem 1.35rem;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  cursor: pointer;
  font: inherit;
  box-shadow: ${(p) => p.theme.shadows.card};
  transition: border-color ${(p) => p.theme.motion.dur}
      ${(p) => p.theme.motion.easeOut},
    transform ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut};

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.ring};
    outline-offset: 2px;
  }
`;

const Kicker = styled.span`
  font-family: ${(p) => p.theme.typography.fontMono};
  font-size: 0.72rem;
  color: ${(p) => p.theme.colors.primary};
`;

const Name = styled.strong`
  font-family: ${(p) => p.theme.typography.fontDisplay};
  font-size: 1.25rem;
  font-weight: 700;
`;

const Blurb = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const LABS = [
  {
    to: "/llmops-lab",
    icon: GitBranch,
    kicker: "LLMOps",
    name: "실행 경로 데모",
    blurb: "가드레일을 켜면 Ollama를 호출하지 않습니다. 배치 실행은 실제 초안을 만듭니다.",
  },
  {
    to: "/admin-studio",
    icon: Layers,
    kicker: "콘솔",
    name: "Admin Studio",
    blurb: "3분할 화면과 사이드바 카탈로그. 조회는 고정하고 목록만 스크롤합니다.",
  },
  {
    to: "/journal",
    icon: BookOpen,
    kicker: "학습",
    name: "학습 노트",
    blurb: "민원 초안 train/eval 기록, pandas와 scikit-learn 노트.",
  },
  {
    to: "/work/order",
    icon: Receipt,
    kicker: "주문",
    name: "앱인앱 주문 데스크",
    blurb: "결제 후 주문이 비던 건. 같은 request id로 Datadog, API, DB를 맞춥니다.",
  },
  {
    to: "/work/avatar",
    icon: Clapperboard,
    kicker: "아바타",
    name: "메타휴먼 이벤트 흐름",
    blurb: "STT, LLM, TTS, 립싱크 한 턴. API 키 없이 순서만 재현합니다.",
  },
];

const LabHubPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Section id="lab" glow={false}>
      <SectionTitle
        align="start"
        title="실험"
        subtitle="프로젝트마다 샘플을 나눴습니다. 민원 콘솔, 주문 RCA, 아바타 파이프."
      />
      <Grid>
        {LABS.map((lab) => (
          <Card
            key={lab.to}
            type="button"
            onClick={() => navigate(lab.to)}
          >
            <lab.icon size={20} color="currentColor" />
            <Kicker>{lab.kicker}</Kicker>
            <Name>{lab.name}</Name>
            <Blurb>{lab.blurb}</Blurb>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default LabHubPage;

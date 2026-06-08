import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FlaskConical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../components/layout/Section";
import MagneticButton from "../../components/ui/MagneticButton";

const Card = styled(motion.div)`
  position: relative;
  max-width: 760px;
  margin: 0 auto;
  border-radius: ${(p) => p.theme.radii.xl};
  padding: 2rem 2.25rem;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  box-shadow: ${(p) => p.theme.shadows.cardHover};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: ${(p) => p.theme.colors.gradient};
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.35;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.35rem;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  margin-bottom: 0.85rem;

  svg {
    flex-shrink: 0;
    margin-top: 0.15rem;
    color: ${(p) => p.theme.colors.primary};
  }
`;

const Title = styled.h2`
  font-size: clamp(1.35rem, 3.2vw, 1.75rem);
  font-weight: 800;
  margin: 0;
  color: ${(p) => p.theme.colors.text};
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`;

const Text = styled.p`
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.74;
  margin: 0 0 1.4rem;

  strong {
    color: ${(p) => p.theme.colors.text};
    font-weight: 600;
  }

  code {
    font-size: 0.84em;
    background: ${(p) => p.theme.colors.primarySoft};
    color: ${(p) => p.theme.colors.primary};
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
  }
`;

const LearningBannerSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Section id="journal-banner" dotCount={6} dotSeed={7} glow>
      <Card
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.55 }}
      >
        <Head>
          <BookOpen size={26} strokeWidth={2} aria-hidden />
          <Title>연구 노트 / QA 자동화</Title>
        </Head>
        <Text>
          1번 글은 <strong>Playwright E2E + QA 대시보드</strong> 파이프라인,
          2번은 <strong>GitHub 히트맵</strong> 데이터 병합입니다. pandas,
          scikit-learn 실습과 인터랙티브 미니게임도 이어집니다. 결함 카운트는{" "}
          <code>/qa</code> 대시보드에서 조회할 수 있습니다.
        </Text>
        <Actions>
          <MagneticButton onClick={() => navigate("/journal")}>
            연구 노트 살펴보기 <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => navigate("/qa")}>
            <FlaskConical size={16} aria-hidden /> QA 대시보드
          </MagneticButton>
        </Actions>
      </Card>
    </Section>
  );
};

export default LearningBannerSection;

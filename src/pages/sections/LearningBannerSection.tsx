import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
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
    <Section dotCount={6} dotSeed={7} glow>
      <Card
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.55 }}
      >
        <Head>
          <BookOpen size={26} strokeWidth={2} aria-hidden />
          <Title>연구 노트 · ML 자기 학습</Title>
        </Head>
        <Text>
          <strong>pandas·scikit-learn</strong> 중심의 노트북 실습 이력,
          막혔던 지점과 풀어간 과정은 별도 <strong>블로그형 페이지</strong>에
          두었습니다. 플롯·노트 캡처는 <code>public/learning/*.png</code> 로
          넣어 카드 헤더 이미지로 연결하면 됩니다.
        </Text>
        <MagneticButton onClick={() => navigate("/journal")}>
          연구 노트 페이지 열기 <ArrowRight size={18} />
        </MagneticButton>
      </Card>
    </Section>
  );
};

export default LearningBannerSection;

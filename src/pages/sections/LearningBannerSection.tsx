import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Gauge } from "lucide-react";
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
  margin-bottom: 1rem;

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

const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.65rem;
  margin-bottom: 1.25rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled.div`
  padding: 0.85rem 0.95rem;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.background};

  strong {
    display: block;
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: ${(p) => p.theme.colors.text};
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 0.78rem;
    font-weight: 600;
    color: ${(p) => p.theme.colors.textMuted};
    line-height: 1.45;
  }
`;

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
`;

const StackChip = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`;

const METRICS = [
  { value: "9/9, 100%", label: "Playwright E2E pass rate" },
  { value: "4 suite, ~30s", label: "smoke regression (6 workers)" },
  { value: "2 GitHub + GitLab", label: "365-day contribution merge" },
] as const;

const STACK = ["Playwright", "TypeScript", "JSON export", "TanStack Query"] as const;

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
          <Gauge size={26} strokeWidth={2} aria-hidden />
          <Title>QA Pipeline / Activity Data</Title>
        </Head>

        <MetricGrid>
          {METRICS.map((m) => (
            <Metric key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </Metric>
          ))}
        </MetricGrid>

        <StackRow aria-label="핵심 스택">
          {STACK.map((s) => (
            <StackChip key={s}>{s}</StackChip>
          ))}
        </StackRow>

        <Actions>
          <MagneticButton variant="ghost" onClick={() => navigate("/qa")}>
            <FlaskConical size={16} aria-hidden /> QA Dashboard
          </MagneticButton>
          <MagneticButton onClick={() => navigate("/journal")}>
            Technical Notes <ArrowRight size={18} />
          </MagneticButton>
        </Actions>
      </Card>
    </Section>
  );
};

export default LearningBannerSection;

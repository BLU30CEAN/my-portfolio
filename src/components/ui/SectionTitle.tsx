import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
  gap: 0.55rem;
`;

const Eyebrow = styled(motion.span)`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: ${(p) => p.theme.colors.primarySoft};
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
`;

const H = styled(motion.h2)`
  font-size: ${(p) => p.theme.typography.fluidH2};
  font-weight: 800;
  letter-spacing: -0.03em;
  background: ${(p) => p.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

const Sub = styled(motion.p)`
  margin: 0;
  max-width: 60ch;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: ${(p) => p.theme.typography.fluidBody};
  line-height: 1.7;
`;

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
};

const SectionTitle: React.FC<Props> = ({ eyebrow, title, subtitle, align = "center" }) => (
  <TitleWrap style={align === "start" ? { alignItems: "flex-start", textAlign: "left" } : undefined}>
    {eyebrow && (
      <Eyebrow
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </Eyebrow>
    )}
    <H
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.55, delay: 0.05 }}
    >
      {title}
    </H>
    {subtitle && (
      <Sub
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.55, delay: 0.12 }}
      >
        {subtitle}
      </Sub>
    )}
  </TitleWrap>
);

export default SectionTitle;

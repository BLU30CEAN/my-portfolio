import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TitleWrap = styled.div<{ $align: "center" | "start" }>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.$align === "start" ? "flex-start" : "center")};
  text-align: ${(p) => (p.$align === "start" ? "left" : "center")};
  margin-bottom: 2rem;
  gap: 0.4rem;
`;

const Eyebrow = styled(motion.span)`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.primary};
`;

const H = styled(motion.h2)`
  font-size: ${(p) => p.theme.typography.fluidH2};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.text};
  margin: 0;
`;

const Sub = styled(motion.p)`
  margin: 0.15rem 0 0;
  max-width: 58ch;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: ${(p) => p.theme.typography.fluidBody};
  line-height: 1.7;
`;

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
  align?: "center" | "start";
};

const SectionTitle: React.FC<Props> = ({
  eyebrow,
  title,
  subtitle,
  align = "start",
}) => (
  <TitleWrap $align={align}>
    {eyebrow && (
      <Eyebrow
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow}
      </Eyebrow>
    )}
    <H
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.5, delay: 0.04 }}
    >
      {title}
    </H>
    {subtitle && (
      <Sub
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        {subtitle}
      </Sub>
    )}
  </TitleWrap>
);

export default SectionTitle;

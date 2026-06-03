import React from "react";
import styled from "styled-components";

const Btn = styled.button<{ $variant: "primary" | "ghost" }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  border: ${(p) =>
    p.$variant === "primary"
      ? "none"
      : `1px solid ${p.theme.colors.borderStrong}`};
  background: ${(p) =>
    p.$variant === "primary" ? p.theme.colors.gradient : "transparent"};
  color: ${(p) => (p.$variant === "primary" ? "#fff" : p.theme.colors.text)};
  padding: 0.9rem 1.6rem;
  border-radius: ${(p) => p.theme.radii.pill};
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: -0.01em;
  box-shadow: ${(p) =>
    p.$variant === "primary" ? p.theme.shadows.button : "none"};
  transition:
    opacity ${(p) => p.theme.motion.durFast} ${(p) => p.theme.motion.easeOut},
    border-color ${(p) => p.theme.motion.durFast} ${(p) => p.theme.motion.easeOut},
    color ${(p) => p.theme.motion.durFast} ${(p) => p.theme.motion.easeOut},
    box-shadow ${(p) => p.theme.motion.durFast} ${(p) => p.theme.motion.easeOut};

  &:hover {
    ${(p) =>
      p.$variant === "primary"
        ? `
      opacity: 0.92;
      box-shadow: ${p.theme.shadows.cardHover};
    `
        : `
      border-color: ${p.theme.colors.primary};
      color: ${p.theme.colors.primary};
    `}
  }

  &:active {
    opacity: 0.88;
  }

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.ring};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
};

/** 고정형 CTA 버튼 — hover는 색/투명도만 변경 */
const MagneticButton: React.FC<Props> = ({
  children,
  variant = "primary",
  type = "button",
  ...rest
}) => (
  <Btn $variant={variant} type={type} {...rest}>
    {children}
  </Btn>
);

export default MagneticButton;

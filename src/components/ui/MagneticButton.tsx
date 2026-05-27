import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const Btn = styled(motion.button)<{ $variant: "primary" | "ghost" }>`
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
  transition: background ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut},
    border-color ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut},
    color ${(p) => p.theme.motion.durFast} ${(p) => p.theme.motion.easeOut};

  &:hover {
    ${(p) =>
      p.$variant === "ghost" &&
      `
      border-color: ${p.theme.colors.primary};
      color: ${p.theme.colors.primary};
    `}
  }
`;

type Props = React.ComponentProps<typeof motion.button> & {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  /** 자석 강도. 0 = 없음. 기본 18. */
  strength?: number;
};

/**
 * 마우스가 가까이 오면 버튼이 살짝 끌려오는 magnetic 인터랙션.
 * `prefers-reduced-motion` 시 비활성화.
 */
const MagneticButton: React.FC<Props> = ({
  children,
  variant = "primary",
  strength = 18,
  ...rest
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / (r.width / 2);
    const dy = (e.clientY - cy) / (r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Btn
      ref={ref}
      $variant={variant}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      {...rest}
    >
      {children}
    </Btn>
  );
};

export default MagneticButton;

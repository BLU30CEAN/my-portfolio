import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { useReducedMotion } from "framer-motion";

const float = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.35; }
  50%      { transform: translateY(-14px); opacity: 0.85; }
`;

const Wrap = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`;

const Dot = styled.span<{
  $left: string;
  $top: string;
  $delay: string;
  $duration: string;
  $reduced: boolean;
}>`
  position: absolute;
  left: ${(p) => p.$left};
  top: ${(p) => p.$top};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${(p) => p.theme.colors.primary};
  opacity: 0.5;
  ${(p) =>
    p.$reduced
      ? `opacity: 0.45;`
      : `animation: ${float} ${p.$duration} ease-in-out infinite;
         animation-delay: ${p.$delay};`}
`;

/**
 * `framer-motion` 모션 div 대신 단일 CSS keyframe 으로 N개 점을 띄운다.
 * - 렌더 비용이 framer 기반보다 훨씬 낮다.
 * - `prefers-reduced-motion` 시 자동으로 정적 상태로 떨어진다.
 */
const FloatingBackdrop: React.FC<{ count: number; seed?: number }> = ({
  count,
  seed = 1,
}) => {
  const reduced = useReducedMotion() ?? false;
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${((i * 17 + seed * 3) % 86) + 6}%`,
        top: `${((i * 23 + seed * 7) % 80) + 8}%`,
        duration: `${3.2 + (i % 4) * 0.35}s`,
        delay: `${((i * 41) % 12) * 0.14}s`,
      })),
    [count, seed],
  );

  return (
    <Wrap aria-hidden>
      {dots.map((d, i) => (
        <Dot
          key={i}
          $left={d.left}
          $top={d.top}
          $delay={d.delay}
          $duration={d.duration}
          $reduced={reduced}
        />
      ))}
    </Wrap>
  );
};

export default FloatingBackdrop;

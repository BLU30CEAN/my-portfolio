import React from "react";
import styled from "styled-components";
import FloatingBackdrop from "./FloatingBackdrop";

type Props = {
  id?: string;
  children: React.ReactNode;
  /** 떠다니는 점 개수. 0 = 비활성. */
  dotCount?: number;
  /** 점 시드. 섹션별로 패턴이 달라보이도록. */
  dotSeed?: number;
  /** 섹션 높이를 100vh로 강제할지 여부. */
  fullHeight?: boolean;
  /** 라디얼 글로우 ::before 표시 여부. */
  glow?: boolean;
  className?: string;
};

const Wrap = styled.section<{ $fullHeight: boolean; $glow: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(4rem, 9vw, 7rem) 1.5rem;
  overflow: hidden;
  box-sizing: border-box;
  scroll-margin-top: 88px;

  ${(p) =>
    p.$fullHeight &&
    `
    min-height: 100vh;
    @supports (height: 100dvh) {
      min-height: 100dvh;
    }
  `}

  ${(p) =>
    p.$glow &&
    `
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(60% 40% at 18% 18%, var(--mesh-a), transparent 70%),
        radial-gradient(50% 36% at 82% 24%, var(--mesh-b), transparent 70%),
        radial-gradient(60% 50% at 50% 90%, var(--mesh-c), transparent 70%);
      pointer-events: none;
      opacity: 0.7;
    }
  `}

  @media (max-width: 768px) {
    padding: clamp(3.25rem, 14vw, 5rem) 1rem;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`;

const Section: React.FC<Props> = ({
  id,
  children,
  dotCount = 0,
  dotSeed = 1,
  fullHeight = false,
  glow = true,
  className,
}) => {
  return (
    <Wrap
      id={id}
      className={className}
      $fullHeight={fullHeight}
      $glow={glow}
    >
      {dotCount > 0 ? <FloatingBackdrop count={dotCount} seed={dotSeed} /> : null}
      <Inner>{children}</Inner>
    </Wrap>
  );
};

export default Section;

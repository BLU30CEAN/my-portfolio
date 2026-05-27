import React from "react";
import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";

const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  transform-origin: 0% 50%;
  background: ${(p) => p.theme.colors.gradient};
  z-index: 1100;
  pointer-events: none;
  will-change: transform;
`;

/**
 * 페이지 상단에 깔리는 진행 바.
 * `useScroll().scrollYProgress` 를 spring 으로 부드럽게 보간한다.
 */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.3,
  });

  return <Bar style={{ scaleX }} aria-hidden />;
};

export default ScrollProgress;

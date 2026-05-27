import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronUp } from "lucide-react";

const Button = styled(motion.button)`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.backgroundElevated};
  color: ${(p) => p.theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1050;
  box-shadow: ${(p) => p.theme.shadows.cardHover};

  @media (max-width: 480px) {
    right: 1rem;
    bottom: 1rem;
    width: 46px;
    height: 46px;
  }
`;

const Ring = styled.svg`
  position: absolute;
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  transform: rotate(-90deg);
  pointer-events: none;
`;

const RADIUS = 22;
const CIRC = 2 * Math.PI * RADIUS;

type Props = { visible: boolean; onClick: () => void };

const ScrollToTop: React.FC<Props> = ({ visible, onClick }) => {
  const { scrollYProgress } = useScroll();
  const dash = useTransform(scrollYProgress, (v) => CIRC * (1 - v));

  return (
    <AnimatePresence>
      {visible && (
        <Button
          onClick={onClick}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          aria-label="페이지 맨 위로"
        >
          <Ring viewBox="0 0 48 48" aria-hidden>
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              stroke="currentColor"
              strokeOpacity="0.18"
              strokeWidth="2"
              fill="none"
            />
            <motion.circle
              cx="24"
              cy="24"
              r={RADIUS}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: CIRC,
                strokeDashoffset: dash,
              }}
            />
          </Ring>
          <ChevronUp size={20} />
        </Button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

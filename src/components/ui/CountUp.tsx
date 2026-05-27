import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = {
  to: number;
  /** 사용자가 보이는 prefix (e.g. "₩") */
  prefix?: string;
  /** 사용자가 보이는 suffix (e.g. "+", "년") */
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * 뷰포트에 들어오면 0 -> to 로 부드럽게 카운트업.
 * - reduced motion 시 즉시 target 값 표시.
 * - re-trigger 안 함 (한 번만 카운트업).
 */
const CountUp: React.FC<Props> = ({
  to,
  prefix = "",
  suffix = "",
  duration = 1.2,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { stiffness: 80, damping: 18, mass: 0.6, duration });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(to);
      return;
    }
    mv.set(to);
    const unsub = sv.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [inView, to, reduced, mv, sv]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};

export default CountUp;

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { animate, utils } from "animejs";
import { RotateCcw, Target } from "lucide-react";

interface Point {
  id: string;
  x: number;
  y: number;
  cls: 0 | 1;
}

const W = 420;
const H = 240;
const HANDLE_R = 10;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Stage = styled.div`
  position: relative;
  width: 100%;
  max-width: ${W}px;
  margin: 0 auto;
`;

const Svg = styled.svg`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  touch-action: none;
`;

const Handle = styled.circle`
  cursor: grab;
  fill: ${(props) => props.theme.colors.background};
  stroke: ${(props) => props.theme.colors.primary};
  stroke-width: 2.5;

  &:active {
    cursor: grabbing;
  }
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const AccVal = styled.span<{ $win: boolean }>`
  font-weight: 800;
  color: ${(props) =>
    props.$win ? props.theme.colors.primary : props.theme.colors.text};
`;

const ResetBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function genPoints(seed: number): Point[] {
  const r = rng(seed);
  const pts: Point[] = [];
  // separable cluster 0 (top-left tendency)
  for (let i = 0; i < 12; i++) {
    pts.push({
      id: `a-${i}`,
      x: 40 + r() * 160,
      y: 30 + r() * 90,
      cls: 0,
    });
  }
  // separable cluster 1 (bottom-right tendency)
  for (let i = 0; i < 12; i++) {
    pts.push({
      id: `b-${i}`,
      x: 220 + r() * 160,
      y: 110 + r() * 100,
      cls: 1,
    });
  }
  // a couple of noise points (optional, makes it real)
  for (let i = 0; i < 2; i++) {
    pts.push({ id: `na-${i}`, x: 60 + r() * 80, y: 130 + r() * 60, cls: 0 });
    pts.push({ id: `nb-${i}`, x: 240 + r() * 90, y: 30 + r() * 50, cls: 1 });
  }
  return pts;
}

/** signed side of point relative to line p1->p2.
 *  positive = below (class 1, red), negative = above (class 0, blue). */
function sideOf(p: Point, p1: { x: number; y: number }, p2: { x: number; y: number }) {
  return (p2.x - p1.x) * (p.y - p1.y) - (p2.y - p1.y) * (p.x - p1.x);
}

export function DecisionBoundaryGame() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const accuracyRef = useRef<HTMLSpanElement | null>(null);

  const [seed, setSeed] = useState(7);
  const points = useMemo(() => genPoints(seed), [seed]);

  const [p1, setP1] = useState({ x: 40, y: 200 });
  const [p2, setP2] = useState({ x: 380, y: 60 });

  const accuracy = useMemo(() => {
    let correct = 0;
    points.forEach((pt) => {
      const s = sideOf(pt, p1, p2);
      // below (s>0) → predicted class 1, above (s<0) → predicted class 0
      const pred: 0 | 1 = s > 0 ? 1 : 0;
      if (pred === pt.cls) correct += 1;
    });
    return Math.round((correct / points.length) * 100);
  }, [points, p1, p2]);

  const won = accuracy === 100;

  // smooth count up
  const displayed = useRef(0);
  useEffect(() => {
    const el = accuracyRef.current;
    if (!el) return;
    const obj = { v: displayed.current };
    const anim = animate(obj, {
      v: accuracy,
      duration: 360,
      ease: "outQuad",
      onUpdate: () => {
        el.textContent = `${Math.round(obj.v)}%`;
        displayed.current = obj.v;
      },
    });
    return () => {
      anim.cancel();
    };
  }, [accuracy]);

  // win pulse
  useEffect(() => {
    if (!won || !svgRef.current) return;
    const points = svgRef.current.querySelectorAll("[data-point]");
    const anim = animate(Array.from(points), {
      scale: [1, 1.4, 1],
      duration: 600,
      delay: (_el: Element, i: number) => i * 30,
      ease: "outQuad",
    });
    return () => {
      anim.cancel();
    };
  }, [won]);

  // pointer-based handle drag
  const dragHandle = useCallback(
    (which: "p1" | "p2") => (e: React.PointerEvent<SVGCircleElement>) => {
      e.preventDefault();
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;

      const onMove = (ev: PointerEvent) => {
        const x = utils.clamp((ev.clientX - rect.left) * scaleX, 8, W - 8);
        const y = utils.clamp((ev.clientY - rect.top) * scaleY, 8, H - 8);
        if (which === "p1") setP1({ x, y });
        else setP2({ x, y });
      };
      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    []
  );

  const reset = () => {
    setSeed((s) => s + 1);
    setP1({ x: 40, y: 200 });
    setP2({ x: 380, y: 60 });
    displayed.current = 0;
  };

  return (
    <Wrap>
      <Stage>
        <Svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="decision boundary playground">
          <defs>
            <linearGradient id="boundary-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(56,139,253,0.18)" />
              <stop offset="100%" stopColor="rgba(248,81,73,0.18)" />
            </linearGradient>
          </defs>
          <rect x={0} y={0} width={W} height={H} fill="url(#boundary-fill)" opacity={0.55} />

          <line
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            opacity={0.85}
          />

          {points.map((pt) => {
            const s = sideOf(pt, p1, p2);
            const pred: 0 | 1 = s > 0 ? 1 : 0;
            const correct = pred === pt.cls;
            const fill = pt.cls === 0 ? "#388bfd" : "#f85149";
            return (
              <circle
                key={pt.id}
                data-point
                cx={pt.x}
                cy={pt.y}
                r={correct ? 7 : 9}
                fill={fill}
                stroke={correct ? "rgba(255,255,255,0.7)" : "#facc15"}
                strokeWidth={correct ? 1.5 : 2.5}
                style={{ transformOrigin: `${pt.x}px ${pt.y}px`, transformBox: "fill-box" }}
              />
            );
          })}

          <Handle cx={p1.x} cy={p1.y} r={HANDLE_R} onPointerDown={dragHandle("p1")} />
          <Handle cx={p2.x} cy={p2.y} r={HANDLE_R} onPointerDown={dragHandle("p2")} />
        </Svg>
      </Stage>

      <StatusBar>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
          <Target size={14} aria-hidden /> Accuracy:{" "}
          <AccVal $win={won} ref={accuracyRef}>
            0%
          </AccVal>
        </span>
        <ResetBtn type="button" onClick={reset}>
          <RotateCcw size={14} aria-hidden /> 새 분포
        </ResetBtn>
      </StatusBar>
    </Wrap>
  );
}

export default DecisionBoundaryGame;

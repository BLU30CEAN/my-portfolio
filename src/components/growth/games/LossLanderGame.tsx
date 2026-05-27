import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { animate, createTimer, utils, type Timer } from "animejs";
import { Play, RotateCcw, Activity } from "lucide-react";

const W = 420;
const H = 220;
const PAD = 24;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
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
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const SliderRow = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.textSecondary};

  input[type="range"] {
    flex: 1;
    accent-color: ${(props) => props.theme.colors.primary};
  }
`;

const Btns = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Btn = styled.button`
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

/**
 * Loss function: small double-well like. y range tuned to fit within [0, H-PAD].
 * x in [0, 1]. Returns y in viewBox coords (smaller y == lower loss == higher position visually).
 * We flip so visually y grows downward like screen.
 */
function loss(x: number) {
  // normalized in [0, 1]
  const t = x;
  // double-well-ish: minima ~ 0.3 (shallow) and ~ 0.72 (global)
  return (
    0.55 -
    0.45 * Math.exp(-((t - 0.3) ** 2) / 0.02) -
    0.65 * Math.exp(-((t - 0.72) ** 2) / 0.015) +
    0.08 * Math.sin(t * 14)
  );
}
function lossDeriv(x: number, h = 1e-3) {
  return (loss(x + h) - loss(x - h)) / (2 * h);
}

const GLOBAL_MIN_X = 0.72;
const TOL = 0.03;

function toScreen(x: number, y: number) {
  // x in [0,1] -> [PAD, W-PAD]
  const sx = PAD + x * (W - PAD * 2);
  // y in roughly [-0.6, 0.7] -> [PAD, H-PAD]
  const sy = PAD + ((y + 0.6) / 1.3) * (H - PAD * 2);
  return { sx, sy };
}

function buildPath() {
  const segs: string[] = [];
  const N = 120;
  for (let i = 0; i <= N; i++) {
    const x = i / N;
    const { sx, sy } = toScreen(x, loss(x));
    segs.push(`${i === 0 ? "M" : "L"} ${sx.toFixed(2)} ${sy.toFixed(2)}`);
  }
  return segs.join(" ");
}

export function LossLanderGame() {
  const ballRef = useRef<SVGCircleElement | null>(null);
  const lrLabelRef = useRef<HTMLSpanElement | null>(null);
  const statusRef = useRef<HTMLSpanElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<Timer | null>(null);

  const [lr, setLr] = useState(0.08);
  const [running, setRunning] = useState(false);
  const [outcome, setOutcome] = useState<"idle" | "win" | "diverge" | "stuck">("idle");

  const pathD = useMemo(() => buildPath(), []);
  const xRef = useRef(0.1); // starting param
  const vRef = useRef(0); // for slight momentum to feel snappier

  const placeBall = useCallback((x: number) => {
    const el = ballRef.current;
    if (!el) return;
    const { sx, sy } = toScreen(x, loss(x));
    utils.set(el, { cx: sx, cy: sy - 8 });
  }, []);

  useEffect(() => {
    placeBall(xRef.current);
  }, [placeBall]);

  useEffect(() => {
    if (lrLabelRef.current) lrLabelRef.current.textContent = lr.toFixed(3);
  }, [lr]);

  const stop = useCallback(() => {
    timerRef.current?.cancel();
    timerRef.current = null;
    setRunning(false);
  }, []);

  const start = useCallback(() => {
    if (running) return;
    setOutcome("idle");
    setRunning(true);
    xRef.current = 0.1;
    vRef.current = 0;
    placeBall(xRef.current);

    const startTime = performance.now();
    let last = startTime;
    let stuckTicks = 0;

    timerRef.current = createTimer({
      duration: 6000,
      onUpdate: () => {
        const now = performance.now();
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;

        const g = lossDeriv(xRef.current);
        // pseudo-momentum: x_{t+1} = x_t - lr * g  (no momentum for clarity)
        const step = -lr * g * (dt * 60); // scale to frames
        const next = xRef.current + step;

        // diverge check
        if (!Number.isFinite(next) || next < -0.2 || next > 1.2) {
          stop();
          setOutcome("diverge");
          // shake
          if (stageRef.current) {
            animate(stageRef.current, {
              translateX: [
                { to: -10, duration: 60 },
                { to: 10, duration: 60 },
                { to: -6, duration: 60 },
                { to: 0, duration: 60 },
              ],
              ease: "inOutQuad",
            });
          }
          return;
        }

        // stuck check
        if (Math.abs(step) < 1e-4) stuckTicks += 1;
        else stuckTicks = 0;

        xRef.current = utils.clamp(next, 0, 1);
        placeBall(xRef.current);

        if (Math.abs(xRef.current - GLOBAL_MIN_X) < TOL && Math.abs(step) < 1e-3) {
          stop();
          setOutcome("win");
          if (ballRef.current) {
            animate(ballRef.current, {
              r: [{ to: 12, duration: 220 }, { to: 8, duration: 240 }],
              ease: "outElastic(1, .5)",
            });
          }
          return;
        }

        if (stuckTicks > 60) {
          stop();
          setOutcome("stuck");
          return;
        }
      },
      onComplete: () => {
        if (running) {
          stop();
          if (Math.abs(xRef.current - GLOBAL_MIN_X) < TOL) {
            setOutcome("win");
          } else {
            setOutcome("stuck");
          }
        }
      },
    });
  }, [lr, placeBall, running, stop]);

  const reset = useCallback(() => {
    stop();
    setOutcome("idle");
    xRef.current = 0.1;
    placeBall(xRef.current);
  }, [placeBall, stop]);

  useEffect(() => {
    return () => {
      timerRef.current?.cancel();
    };
  }, []);

  useEffect(() => {
    if (!statusRef.current) return;
    const map: Record<typeof outcome, string> = {
      idle: "대기 중 — Play 버튼을 눌러 시작해 주세요",
      win: "🎯 전역 최저점에 안전하게 안착했습니다",
      diverge: "💥 발산했습니다 — 학습률을 조금 낮춰 보세요",
      stuck: "🪨 멈춤 — 학습률이 너무 작거나 지역 최저점에 갇혔습니다",
    };
    statusRef.current.textContent = map[outcome];
  }, [outcome]);

  const { sx: globalMinSx, sy: globalMinSy } = toScreen(GLOBAL_MIN_X, loss(GLOBAL_MIN_X));

  return (
    <Wrap>
      <Stage ref={stageRef}>
        <Svg viewBox={`0 0 ${W} ${H}`}>
          <line
            x1={PAD}
            y1={H - PAD}
            x2={W - PAD}
            y2={H - PAD}
            stroke="currentColor"
            opacity={0.18}
          />
          <path
            d={pathD}
            stroke="currentColor"
            strokeWidth={2.2}
            fill="none"
            opacity={0.55}
            id="loss-curve"
          />
          <line
            x1={globalMinSx}
            y1={globalMinSy}
            x2={globalMinSx}
            y2={H - PAD}
            stroke="#22c55e"
            strokeDasharray="4 4"
            strokeWidth={1.5}
            opacity={0.7}
          />
          <circle cx={globalMinSx} cy={globalMinSy} r={4} fill="#22c55e" />
          <circle
            ref={ballRef}
            cx={toScreen(0.1, loss(0.1)).sx}
            cy={toScreen(0.1, loss(0.1)).sy - 8}
            r={8}
            fill="#f59e0b"
            stroke="#fff"
            strokeWidth={1.5}
          />
        </Svg>
      </Stage>

      <Controls>
        <SliderRow>
          <span style={{ minWidth: 84 }}>
            learning rate: <strong ref={lrLabelRef}>0.080</strong>
          </span>
          <input
            type="range"
            min={0.005}
            max={0.5}
            step={0.005}
            value={lr}
            onChange={(e) => setLr(parseFloat(e.target.value))}
            disabled={running}
          />
        </SliderRow>
        <Btns>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
            <Activity size={14} aria-hidden />
            <span ref={statusRef}>대기 중 — Play 버튼을 눌러 시작해 주세요</span>
          </span>
          <span style={{ display: "inline-flex", gap: "0.5rem" }}>
            <Btn type="button" onClick={start} disabled={running}>
              <Play size={14} aria-hidden /> Play
            </Btn>
            <Btn type="button" onClick={reset}>
              <RotateCcw size={14} aria-hidden /> Reset
            </Btn>
          </span>
        </Btns>
      </Controls>
    </Wrap>
  );
}

export default LossLanderGame;

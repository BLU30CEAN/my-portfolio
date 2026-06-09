import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { animate, utils } from "animejs";
import {
  ChevronRight,
  Pause,
  Play,
  RotateCcw,
  Target,
} from "lucide-react";

const W = 420;
const H = 220;
const PAD = 24;
const GLOBAL_MIN_X = 0.72;
const TOL = 0.035;
const MAX_STEPS = 120;

const LR_PRESETS = [
  { label: "느리게", value: 0.03 },
  { label: "보통", value: 0.1 },
  { label: "빠르게", value: 0.28 },
] as const;

function loss(x: number) {
  const t = x;
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

function toScreen(x: number, y: number) {
  const sx = PAD + x * (W - PAD * 2);
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

function xFromClick(clientX: number, svg: SVGSVGElement) {
  const rect = svg.getBoundingClientRect();
  const ratio = (clientX - rect.left) / rect.width;
  const sx = PAD + utils.clamp(ratio, 0, 1) * (W - PAD * 2);
  const x = (sx - PAD) / (W - PAD * 2);
  return utils.clamp(x, 0.02, 0.98);
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Hint = styled.p`
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.55;
  color: ${(p) => p.theme.colors.textMuted};
`;

const Stage = styled.div`
  position: relative;
  width: 100%;
  max-width: ${W}px;
  margin: 0 auto;
`;

const Svg = styled.svg<{ $interactive: boolean }>`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  cursor: ${(p) => (p.$interactive ? "crosshair" : "default")};
  touch-action: manipulation;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const PresetRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const PresetBtn = styled.button<{ $active?: boolean }>`
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: 1px solid
    ${(p) => (p.$active ? p.theme.colors.primary : p.theme.colors.border)};
  background: ${(p) =>
    p.$active ? p.theme.colors.primarySoft : p.theme.colors.surface};
  color: ${(p) =>
    p.$active ? p.theme.colors.primary : p.theme.colors.textSecondary};
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
  }
`;

const SliderRow = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.84rem;
  color: ${(p) => p.theme.colors.textSecondary};

  input[type="range"] {
    flex: 1;
    accent-color: ${(p) => p.theme.colors.primary};
  }
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Btn = styled.button<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  border: 1px solid
    ${(p) => (p.$primary ? p.theme.colors.primary : p.theme.colors.border)};
  background: ${(p) =>
    p.$primary ? p.theme.colors.primarySoft : p.theme.colors.surface};
  color: ${(p) =>
    p.$primary ? p.theme.colors.primary : p.theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    border-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};
  }
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.82rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textSecondary};

  strong {
    color: ${(p) => p.theme.colors.text};
  }
`;

type Outcome = "idle" | "win" | "diverge" | "stuck";

export function LossLanderGame() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const ballRef = useRef<SVGCircleElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stepsRef = useRef(0);

  const [lr, setLr] = useState(0.1);
  const [running, setRunning] = useState(false);
  const [outcome, setOutcome] = useState<Outcome>("idle");
  const [steps, setSteps] = useState(0);

  const pathD = useMemo(() => buildPath(), []);
  const xRef = useRef(0.12);
  const lrRef = useRef(lr);
  lrRef.current = lr;
  const [, bumpFrame] = useState(0);

  const placeBall = useCallback((x: number) => {
    const el = ballRef.current;
    if (!el) return;
    const { sx, sy } = toScreen(x, loss(x));
    utils.set(el, { cx: sx, cy: sy });
    bumpFrame((n) => n + 1);
  }, []);

  useEffect(() => {
    placeBall(xRef.current);
  }, [placeBall]);

  const stop = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setRunning(false);
  }, []);

  const evaluate = useCallback(
    (x: number, stepSize: number): Outcome | null => {
      if (!Number.isFinite(x) || x < -0.15 || x > 1.15) return "diverge";
      if (Math.abs(x - GLOBAL_MIN_X) < TOL && Math.abs(stepSize) < 0.008) {
        return "win";
      }
      return null;
    },
    [],
  );

  const applyStep = useCallback(() => {
    const g = lossDeriv(xRef.current);
    const step = -lrRef.current * g;
    const next = utils.clamp(xRef.current + step, 0, 1);
    xRef.current = next;
    stepsRef.current += 1;
    setSteps(stepsRef.current);
    placeBall(next);
    return { step, next, g };
  }, [placeBall]);

  const shake = useCallback(() => {
    if (!stageRef.current) return;
    animate(stageRef.current, {
      translateX: [
        { to: -8, duration: 55 },
        { to: 8, duration: 55 },
        { to: 0, duration: 55 },
      ],
      ease: "inOutQuad",
    });
  }, []);

  const handleOutcome = useCallback(
    (result: Outcome) => {
      setOutcome(result);
      if (result === "win" && ballRef.current) {
        animate(ballRef.current, {
          r: [{ to: 11, duration: 200 }, { to: 8, duration: 220 }],
          ease: "outElastic(1, .5)",
        });
      }
      if (result === "diverge") shake();
    },
    [shake],
  );

  const runStep = useCallback((): boolean => {
    if (stepsRef.current >= MAX_STEPS) {
      handleOutcome("stuck");
      return false;
    }

    const { step } = applyStep();
    const result = evaluate(xRef.current, step);
    if (result) {
      handleOutcome(result);
      return false;
    }
    return true;
  }, [applyStep, evaluate, handleOutcome]);

  const stepOnce = useCallback(() => {
    if (outcome === "win" || outcome === "diverge") return;
    runStep();
  }, [outcome, runStep]);

  const startAuto = useCallback(() => {
    if (running || outcome === "win") return;
    setRunning(true);
    setOutcome("idle");

    autoTimerRef.current = setInterval(() => {
      const keepGoing = runStep();
      if (!keepGoing) stop();
    }, 240);
  }, [outcome, runStep, running, stop]);

  const reset = useCallback(() => {
    stop();
    setOutcome("idle");
    stepsRef.current = 0;
    setSteps(0);
    xRef.current = 0.12;
    placeBall(xRef.current);
  }, [placeBall, stop]);

  const setStartFromEvent = useCallback(
    (clientX: number) => {
      if (running || outcome === "win") return;
      const svg = svgRef.current;
      if (!svg) return;
      xRef.current = xFromClick(clientX, svg);
      stepsRef.current = 0;
      setSteps(0);
      setOutcome("idle");
      placeBall(xRef.current);
    },
    [outcome, placeBall, running],
  );

  useEffect(() => () => stop(), [stop]);

  const x = xRef.current;
  const currentLoss = loss(x);
  const grad = lossDeriv(x);
  const { sx: globalMinSx, sy: globalMinSy } = toScreen(
    GLOBAL_MIN_X,
    loss(GLOBAL_MIN_X),
  );
  const { sx: ballSx, sy: ballSy } = toScreen(x, currentLoss);
  const arrowLen = utils.clamp(Math.abs(grad) * 36, 8, 42);
  const arrowX2 = ballSx - Math.sign(grad || 1) * arrowLen;

  const statusMessage = {
    idle: "한 스텝 또는 자동 하강으로 경사하강 흐름을 확인할 수 있습니다.",
    win: "전역 최저점에 도달했습니다. 학습률 설정이 적절했습니다.",
    diverge: "발산했습니다. 학습률을 낮추거나 느리게 preset을 선택합니다.",
    stuck: "수렴이 멈췄습니다. 지역 최솟값이거나 학습률이 너무 작을 수 있습니다.",
  }[outcome];

  const idle = !running && outcome !== "win";

  return (
    <Wrap>
      <Hint>
        곡선 클릭으로 시작 위치를 바꿀 수 있습니다. 학습률을 고른 뒤{" "}
        <strong>한 스텝</strong>으로 경사하강을 직접 진행합니다.
      </Hint>

      <Stage ref={stageRef}>
        <Svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          $interactive={idle}
          onClick={(e) => {
            if (!idle) return;
            setStartFromEvent(e.clientX);
          }}
          role="img"
          aria-label="손실 함수 곡선과 경사하강 시뮬레이션"
        >
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
          <text
            x={globalMinSx}
            y={globalMinSy - 10}
            textAnchor="middle"
            fontSize="9"
            fill="#22c55e"
          >
            global min
          </text>
          <line
            x1={ballSx}
            y1={ballSy}
            x2={arrowX2}
            y2={ballSy}
            stroke="#f59e0b"
            strokeWidth={2}
            markerEnd="url(#arrow)"
            opacity={0.85}
          />
          <defs>
            <marker
              id="arrow"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
            </marker>
          </defs>
          <circle
            ref={ballRef}
            cx={ballSx}
            cy={ballSy}
            r={8}
            fill="#f59e0b"
            stroke="#fff"
            strokeWidth={1.5}
          />
        </Svg>
      </Stage>

      <Controls>
        <PresetRow>
          {LR_PRESETS.map((preset) => (
            <PresetBtn
              key={preset.label}
              type="button"
              $active={Math.abs(lr - preset.value) < 0.001}
              disabled={running}
              onClick={() => setLr(preset.value)}
            >
              {preset.label} ({preset.value})
            </PresetBtn>
          ))}
        </PresetRow>

        <SliderRow>
          <span style={{ minWidth: 108 }}>learning rate {lr.toFixed(2)}</span>
          <input
            type="range"
            min={0.01}
            max={0.45}
            step={0.01}
            value={lr}
            onChange={(e) => setLr(parseFloat(e.target.value))}
            disabled={running}
          />
        </SliderRow>

        <ActionRow>
          <Btn type="button" $primary onClick={stepOnce} disabled={running}>
            <ChevronRight size={14} aria-hidden /> 한 스텝
          </Btn>
          <Btn
            type="button"
            onClick={running ? stop : startAuto}
            disabled={outcome === "win"}
          >
            {running ? (
              <>
                <Pause size={14} aria-hidden /> 멈춤
              </>
            ) : (
              <>
                <Play size={14} aria-hidden /> 자동 하강
              </>
            )}
          </Btn>
          <Btn type="button" onClick={reset}>
            <RotateCcw size={14} aria-hidden /> 처음부터
          </Btn>
        </ActionRow>

        <Status>
          <span>
            <Target size={12} style={{ verticalAlign: "-2px" }} aria-hidden />{" "}
            {statusMessage}
          </span>
          <span>
            step <strong>{steps}</strong> / loss{" "}
            <strong>{currentLoss.toFixed(3)}</strong> / gradient{" "}
            <strong>{grad.toFixed(3)}</strong>
          </span>
        </Status>
      </Controls>
    </Wrap>
  );
}

export default LossLanderGame;

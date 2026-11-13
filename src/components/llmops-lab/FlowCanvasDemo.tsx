import React from "react";
import styled from "styled-components";
import { FLOW_EDGES, FLOW_NODES, type FlowNode } from "../../data/llmopsLab";

const Wrap = styled.div`
  position: relative;
  min-height: 340px;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.backgroundElevated};
  overflow: hidden;
`;

const Svg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const NodeBtn = styled.button<{ $active: boolean; $dim: boolean }>`
  position: absolute;
  width: 118px;
  padding: 0.55rem 0.6rem;
  border-radius: 10px;
  border: 1px solid
    ${(p) => (p.$active ? p.theme.colors.primary : p.theme.colors.borderStrong)};
  background: ${(p) =>
    p.$active ? p.theme.colors.primarySoft : p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  cursor: pointer;
  text-align: left;
  font: inherit;
  opacity: ${(p) => (p.$dim ? 0.42 : 1)};
  box-shadow: ${(p) => (p.$active ? p.theme.shadows.button : "none")};
  transform: translate(-50%, -50%);

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.ring};
    outline-offset: 2px;
  }
`;

const Kind = styled.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.primary};
`;

const Label = styled.div`
  font-size: 0.82rem;
  font-weight: 700;
  margin-top: 0.15rem;
`;

const KIND_LABEL: Record<FlowNode["kind"], string> = {
  start: "Start",
  prompt: "Prompt",
  guardrail: "Guard",
  llm: "LLM",
  rag: "RAG",
  end: "HITL",
};

type Props = {
  selectedId: string;
  blocked: boolean;
  onSelect: (id: string) => void;
};

const NODE_W = 720;
const NODE_H = 340;

function centerOf(n: FlowNode) {
  return { x: n.x + 59, y: n.y + 28 };
}

const FlowCanvasDemo: React.FC<Props> = ({ selectedId, blocked, onSelect }) => {
  const byId = Object.fromEntries(FLOW_NODES.map((n) => [n.id, n]));
  const skipped = new Set<string>();
  if (blocked) {
    ["llm", "rag", "gout", "end"].forEach((id) => skipped.add(id));
  }

  return (
    <Wrap data-coach-id="canvas" role="img" aria-label="에이전트 플로우 캔버스">
      <Svg viewBox={`0 0 ${NODE_W} ${NODE_H}`} aria-hidden>
        {FLOW_EDGES.map((e) => {
          const a = byId[e.from];
          const b = byId[e.to];
          if (!a || !b) return null;
          const p1 = centerOf(a);
          const p2 = centerOf(b);
          const dim = skipped.has(e.to);
          return (
            <path
              key={`${e.from}-${e.to}`}
              d={`M ${p1.x} ${p1.y} C ${(p1.x + p2.x) / 2} ${p1.y}, ${
                (p1.x + p2.x) / 2
              } ${p2.y}, ${p2.x} ${p2.y}`}
              fill="none"
              stroke={dim ? "#c45c5c" : "currentColor"}
              strokeOpacity={dim ? 0.55 : 0.28}
              strokeWidth={2}
            />
          );
        })}
      </Svg>
      {FLOW_NODES.map((n) => (
        <NodeBtn
          key={n.id}
          type="button"
          $active={selectedId === n.id}
          $dim={skipped.has(n.id)}
          style={{
            left: `${((n.x + 59) / NODE_W) * 100}%`,
            top: `${((n.y + 28) / NODE_H) * 100}%`,
          }}
          onClick={() => onSelect(n.id)}
          aria-pressed={selectedId === n.id}
          aria-label={`${KIND_LABEL[n.kind]} ${n.label}`}
        >
          <Kind>{KIND_LABEL[n.kind]}</Kind>
          <Label>{n.label}</Label>
        </NodeBtn>
      ))}
    </Wrap>
  );
};

export default FlowCanvasDemo;

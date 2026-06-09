import React, { useState } from "react";
import styled from "styled-components";
import { Eye, EyeOff, RotateCcw, Sparkles } from "lucide-react";

const LINES: string[] = [
  "train_test_split 이전에 fit_transform 하면 데이터 누수(leakage) 발생",
  "불균형 데이터에서는 accuracy만 보면 ROC-AUC·F1을 함께 봐야 한다",
  "learning rate가 크면 발산, 작으면 수렴 지연 — 시뮬레이터로 직접 확인",
  "EDA 단계: rows_in, rows_out, na_ratio는 변환마다 로그에 남긴다",
];

const HIDDEN_BONUS =
  "★ 핵심 네 줄을 모두 확인했습니다 — measure twice, train once ★";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const Hint = styled.p`
  margin: 0 0 0.25rem;
  font-size: 0.82rem;
  color: ${(p) => p.theme.colors.textMuted};
  line-height: 1.55;
`;

const Line = styled.button<{ $locked: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  width: 100%;
  text-align: left;
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  border: 1px dashed
    ${(p) =>
      p.$locked ? p.theme.colors.border : `${p.theme.colors.primary}55`};
  background: ${(p) =>
    p.$locked ? p.theme.colors.surface : `${p.theme.colors.primarySoft}`};
  color: ${(p) => p.theme.colors.text};
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
    monospace;
  font-size: 0.86rem;
  line-height: 1.55;
  cursor: ${(p) => (p.$locked ? "pointer" : "default")};
  transition:
    border-color 200ms ease,
    background 200ms ease,
    filter 320ms ease,
    opacity 320ms ease;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
  }

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${(p) =>
      p.$locked ? p.theme.colors.textMuted : p.theme.colors.primary};
  }
`;

const LineText = styled.span<{ $locked: boolean }>`
  flex: 1;
  min-width: 0;
  white-space: pre-wrap;
  word-break: keep-all;
  overflow-wrap: break-word;
  filter: ${(p) => (p.$locked ? "blur(5px)" : "blur(0)")};
  opacity: ${(p) => (p.$locked ? 0.45 : 1)};
  user-select: ${(p) => (p.$locked ? "none" : "text")};
  transition: filter 380ms ease, opacity 380ms ease;
`;

const BonusLine = styled.div<{ $visible: boolean }>`
  margin-top: 0.5rem;
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.primary}40;
  background: ${(p) => p.theme.colors.primary}10;
  color: ${(p) => p.theme.colors.primary};
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
    monospace;
  font-size: 0.86rem;
  line-height: 1.55;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? "0" : "6px")});
  transition: opacity 320ms ease, transform 320ms ease;
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};

  svg {
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  color: ${(p) => p.theme.colors.textSecondary};
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ResetBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};
  }
`;

export function ScrambleDecodeGame() {
  const [unlocked, setUnlocked] = useState<boolean[]>(() =>
    LINES.map(() => false),
  );

  const reveal = (i: number) => {
    if (unlocked[i]) return;
    setUnlocked((prev) => {
      const next = prev.slice();
      next[i] = true;
      return next;
    });
  };

  const reset = () => {
    setUnlocked(LINES.map(() => false));
  };

  const unlockedCount = unlocked.filter(Boolean).length;
  const allUnlocked = unlockedCount === LINES.length;

  return (
    <Wrap>
      <Hint>
        흐릿한 줄을 클릭하면 원문이 선명해집니다. 네 줄을 모두 열면 보너스
        메시지가 표시됩니다.
      </Hint>
      {LINES.map((line, i) => (
        <Line
          key={line}
          type="button"
          $locked={!unlocked[i]}
          onClick={() => reveal(i)}
          disabled={unlocked[i]}
          aria-label={
            unlocked[i] ? `메모: ${line}` : "클릭하여 메모 원문 보기"
          }
        >
          {unlocked[i] ? (
            <Eye size={14} aria-hidden />
          ) : (
            <EyeOff size={14} aria-hidden />
          )}
          <LineText $locked={!unlocked[i]} aria-hidden={!unlocked[i]}>
            {line}
          </LineText>
        </Line>
      ))}

      <BonusLine $visible={allUnlocked}>
        <Sparkles size={14} aria-hidden />
        <span>{HIDDEN_BONUS}</span>
      </BonusLine>

      <Footer>
        <span>
          확인한 메모: <strong>{unlockedCount}</strong> / {LINES.length}
        </span>
        <ResetBtn type="button" onClick={reset}>
          <RotateCcw size={14} aria-hidden /> 다시 가리기
        </ResetBtn>
      </Footer>
    </Wrap>
  );
}

export default ScrambleDecodeGame;

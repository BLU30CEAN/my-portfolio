import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animate, text } from "animejs";
import { Eye, EyeOff, RotateCcw, Sparkles } from "lucide-react";

/** 실제 학습 노트에서 뽑은 핵심 메모 — 잠금 해제 전에도 의미가 통하는 문장 */
const LINES: string[] = [
  "train_test_split 이전에 fit_transform 하면 데이터 누수(leakage) 발생",
  "불균형 데이터에서는 accuracy만 보면 ROC-AUC·F1을 함께 봐야 한다",
  "learning rate가 크면 발산, 작으면 수렴 지연 — 시뮬레이터로 직접 확인",
  "EDA 단계: rows_in, rows_out, na_ratio는 변환마다 로그에 남긴다",
];

const HIDDEN_BONUS =
  "★ 핵심 네 줄을 모두 확인했습니다 — measure twice, train once ★";

/** 복호화 애니메이션용 문자 — ML 기호 난잡함 대신 마스크 문자만 사용 */
const SCRAMBLE_CHARS = "·▪░▒";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const Hint = styled.p`
  margin: 0 0 0.25rem;
  font-size: 0.82rem;
  color: ${(p) => p.theme.colors.textMuted};
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
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) =>
    p.$locked ? p.theme.colors.textSecondary : p.theme.colors.text};
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
    monospace;
  font-size: 0.86rem;
  line-height: 1.55;
  letter-spacing: 0.01em;
  cursor: ${(p) => (p.$locked ? "pointer" : "default")};
  transition: border-color 160ms ease, background 160ms ease;

  &:hover {
    border-color: ${(p) =>
      p.$locked ? p.theme.colors.primary : `${p.theme.colors.primary}55`};
    background: ${(p) =>
      p.$locked ? `${p.theme.colors.primarySoft}` : p.theme.colors.surface};
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
  filter: ${(p) => (p.$locked ? "none" : "none")};
  letter-spacing: ${(p) => (p.$locked ? "0.04em" : "0.01em")};
`;

const BonusLine = styled.div`
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
  opacity: 0;

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

/** 가독 가능한 마스크 — 구두점·공백 유지, 글자만 · 로 대체 */
function maskLine(src: string): string {
  return src
    .split("")
    .map((c) => {
      if (c === " ") return " ";
      if (/[.,:;()\-—/\\[\]<>_=+*^]/.test(c)) return c;
      return "·";
    })
    .join("");
}

export function ScrambleDecodeGame() {
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const bonusRef = useRef<HTMLDivElement | null>(null);
  const [unlocked, setUnlocked] = useState<boolean[]>(() =>
    LINES.map(() => false),
  );
  const [bonusShown, setBonusShown] = useState(false);

  const applyMasks = () => {
    LINES.forEach((src, i) => {
      const el = lineRefs.current[i];
      if (!el || unlocked[i]) return;
      el.textContent = maskLine(src);
    });
  };

  useEffect(() => {
    applyMasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reveal = (i: number) => {
    if (unlocked[i]) return;
    const el = lineRefs.current[i];
    if (!el) return;

    animate(el, {
      text: text.scrambleText({
        text: LINES[i],
        chars: SCRAMBLE_CHARS,
        revealRate: 14,
        settleDuration: 200,
        settleRate: 22,
        from: "left",
        ease: "outQuad",
      }),
      duration: 1100,
    });

    setUnlocked((prev) => {
      const next = prev.slice();
      next[i] = true;
      return next;
    });
  };

  useEffect(() => {
    if (unlocked.every(Boolean) && !bonusShown && bonusRef.current) {
      setBonusShown(true);
      const span = bonusRef.current.querySelector(
        "[data-bonus-text]",
      ) as HTMLElement | null;
      animate(bonusRef.current, {
        opacity: [0, 1],
        translateY: [8, 0],
        duration: 320,
        ease: "outQuad",
      });
      if (span) {
        span.textContent = maskLine(HIDDEN_BONUS);
        animate(span, {
          text: text.scrambleText({
            text: HIDDEN_BONUS,
            chars: SCRAMBLE_CHARS,
            revealRate: 16,
            settleDuration: 220,
            from: "center",
          }),
          duration: 1200,
        });
      }
    }
  }, [unlocked, bonusShown]);

  const reset = () => {
    setUnlocked(LINES.map(() => false));
    setBonusShown(false);
    if (bonusRef.current) {
      bonusRef.current.style.opacity = "0";
    }
    LINES.forEach((src, i) => {
      const el = lineRefs.current[i];
      if (el) el.textContent = maskLine(src);
    });
  };

  const unlockedCount = unlocked.filter(Boolean).length;

  return (
    <Wrap>
      <Hint>가려진 핵심 메모를 클릭하면 원문이 드러납니다.</Hint>
      {LINES.map((line, i) => (
        <Line
          key={line}
          type="button"
          $locked={!unlocked[i]}
          onClick={() => reveal(i)}
          aria-label={
            unlocked[i] ? `메모: ${line}` : "클릭하여 메모 원문 보기"
          }
        >
          {unlocked[i] ? (
            <Eye size={14} aria-hidden />
          ) : (
            <EyeOff size={14} aria-hidden />
          )}
          <LineText
            $locked={!unlocked[i]}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
          />
        </Line>
      ))}

      <BonusLine ref={bonusRef}>
        <Sparkles size={14} aria-hidden />
        <span data-bonus-text />
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

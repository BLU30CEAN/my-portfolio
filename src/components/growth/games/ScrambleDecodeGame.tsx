import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animate, text } from "animejs";
import { Lock, Unlock, RotateCcw, Sparkles } from "lucide-react";

const LINES: string[] = [
  "loss = mean( (y_true - y_pred)^2 )",
  "for each epoch: w -= lr * dLoss/dw",
  "overfitting starts where regularization sleeps",
  "always log: rows_in, rows_out, na_ratio",
];

const HIDDEN_BONUS = "★ 디크립트 완료 — 'measure twice, train once.' ★";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const Line = styled.button<{ $locked: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  text-align: left;
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  border: 1px dashed ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) =>
    props.$locked ? props.theme.colors.textSecondary : props.theme.colors.text};
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.88rem;
  letter-spacing: 0.01em;
  cursor: ${(props) => (props.$locked ? "default" : "pointer")};
  transition: border-color 160ms ease, background 160ms ease;

  &:hover {
    border-color: ${(props) =>
      props.$locked ? props.theme.colors.border : props.theme.colors.primary};
  }
`;

const LineText = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BonusLine = styled.div`
  margin-top: 0.5rem;
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary}40;
  background: ${(props) => props.theme.colors.primary}10;
  color: ${(props) => props.theme.colors.primary};
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const ResetBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
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

const CHARSET = "weights bias loss epoch grad ∇ μ σ θ λ ⟨⟩";

export function ScrambleDecodeGame() {
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const bonusRef = useRef<HTMLDivElement | null>(null);
  const [unlocked, setUnlocked] = useState<boolean[]>(
    () => LINES.map(() => false)
  );
  const [bonusShown, setBonusShown] = useState(false);

  // initialize all lines with scrambled placeholder text
  useEffect(() => {
    LINES.forEach((src, i) => {
      const el = lineRefs.current[i];
      if (!el || unlocked[i]) return;
      // fill with cipher-like placeholder of same length
      const placeholder = src
        .split("")
        .map((c) => (c === " " ? " " : CHARSET[Math.floor(Math.random() * CHARSET.length)]))
        .join("");
      el.textContent = placeholder;
    });
    // intentionally only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reveal = (i: number) => {
    if (unlocked[i]) return;
    const el = lineRefs.current[i];
    if (!el) return;

    animate(el, {
      text: text.scrambleText({
        text: LINES[i],
        chars: CHARSET,
        revealRate: 18,
        settleDuration: 240,
        settleRate: 26,
        from: "left",
        cursor: "█",
        ease: "outQuad",
      }),
      duration: 1300,
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
      const span = bonusRef.current.querySelector("[data-bonus-text]") as HTMLElement | null;
      animate(bonusRef.current, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 380,
        ease: "outQuad",
      });
      if (span) {
        span.textContent = " ".repeat(HIDDEN_BONUS.length);
        animate(span, {
          text: text.scrambleText({
            text: HIDDEN_BONUS,
            chars: "★_∇λμσθ⟨⟩",
            revealRate: 22,
            settleDuration: 280,
            from: "center",
            cursor: "_",
          }),
          duration: 1500,
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
      if (!el) return;
      const placeholder = src
        .split("")
        .map((c) => (c === " " ? " " : CHARSET[Math.floor(Math.random() * CHARSET.length)]))
        .join("");
      el.textContent = placeholder;
    });
  };

  const unlockedCount = unlocked.filter(Boolean).length;

  return (
    <Wrap>
      {LINES.map((_, i) => (
        <Line
          key={i}
          type="button"
          $locked={unlocked[i]}
          onClick={() => reveal(i)}
          aria-label={unlocked[i] ? "decrypted" : "click to decrypt"}
        >
          {unlocked[i] ? (
            <Unlock size={14} aria-hidden />
          ) : (
            <Lock size={14} aria-hidden />
          )}
          <LineText
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
          Decrypted: <strong>{unlockedCount}</strong> / {LINES.length}
        </span>
        <ResetBtn type="button" onClick={reset}>
          <RotateCcw size={14} aria-hidden /> 다시 암호화
        </ResetBtn>
      </Footer>
    </Wrap>
  );
}

export default ScrambleDecodeGame;

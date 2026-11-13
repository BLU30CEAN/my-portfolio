import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COACH_STEPS } from "../../data/llmopsLab";

const STORAGE_KEY = "llmops-lab-coach-done";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  background: color-mix(in srgb, #04101f 48%, transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1.25rem;
`;

const Card = styled.div`
  width: min(440px, 100%);
  padding: 1.1rem 1.2rem 1rem;
  border-radius: 16px;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.cardHover};
`;

const Title = styled.h3`
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
`;

const Body = styled.p`
  margin: 0 0 0.9rem;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
`;

const Btn = styled.button<{ $primary?: boolean }>`
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid
    ${(p) => (p.$primary ? "transparent" : p.theme.colors.border)};
  background: ${(p) =>
    p.$primary ? p.theme.colors.primary : p.theme.colors.backgroundElevated};
  color: ${(p) => (p.$primary ? "#fff" : p.theme.colors.text)};
`;

const CoachTour: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const finish = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore quota */
    }
    setOpen(false);
  };

  if (!open) return null;
  const step = COACH_STEPS[idx];
  if (!step) return null;

  return (
    <Overlay role="dialog" aria-modal="true" aria-labelledby="coach-title">
      <Card>
        <Title id="coach-title">
          {idx + 1}/{COACH_STEPS.length} {step.title}
        </Title>
        <Body>{step.body}</Body>
        <Row>
          <Btn type="button" onClick={finish}>
            건너뛰기
          </Btn>
          {idx < COACH_STEPS.length - 1 ? (
            <Btn type="button" $primary onClick={() => setIdx((v) => v + 1)}>
              다음
            </Btn>
          ) : (
            <Btn type="button" $primary onClick={finish}>
              시작하기
            </Btn>
          )}
        </Row>
      </Card>
    </Overlay>
  );
};

export default CoachTour;

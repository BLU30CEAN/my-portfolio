import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LabCrumb from "../../components/nav/LabCrumb";
import { AVATAR_STAGES, type AvatarStageId } from "../../data/avatarPipe";
import { useToast } from "../../components/ui/Toast";

const Skin = styled.div`
  min-height: calc(100vh - 72px);
  padding: 1.5rem 1.25rem 3rem;
  background: #0b0c10;
  color: #e8e6e1;
`;

const Inner = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

const CrumbSlot = styled.div`
  button {
    color: #9a958c;
  }
`;

const Title = styled.h1`
  margin: 0 0 0.35rem;
  font-size: clamp(1.45rem, 2.4vw, 1.9rem);
  letter-spacing: -0.03em;
`;

const Lead = styled.p`
  margin: 0 0 1.35rem;
  max-width: 60ch;
  font-size: 0.95rem;
  line-height: 1.65;
  color: #9a958c;
`;

const Stage = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const Card = styled.li<{ $on: boolean; $done: boolean }>`
  padding: 1rem 1.1rem;
  border-radius: 14px;
  border: 1px solid
    ${(p) =>
      p.$on ? "rgba(232, 184, 92, 0.7)" : "rgba(255, 255, 255, 0.08)"};
  background: ${(p) =>
    p.$on ? "rgba(232, 184, 92, 0.08)" : "rgba(255, 255, 255, 0.03)"};
  opacity: ${(p) => (p.$done || p.$on ? 1 : 0.55)};
`;

const Kicker = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #e8b85c;
`;

const Label = styled.div`
  margin: 0.2rem 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 700;
`;

const Sample = styled.p`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: #c9c4bb;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.2rem;
`;

const Btn = styled.button<{ $primary?: boolean }>`
  padding: 0.55rem 0.9rem;
  border-radius: 10px;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid
    ${(p) => (p.$primary ? "#e8b85c" : "rgba(255, 255, 255, 0.16)")};
  background: ${(p) => (p.$primary ? "#e8b85c" : "transparent")};
  color: ${(p) => (p.$primary ? "#16140f" : "#e8e6e1")};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Caption = styled.p`
  margin: 1rem 0 0;
  font-size: 0.78rem;
  color: #9a958c;
`;

const ORDER: AvatarStageId[] = ["stt", "llm", "tts", "lip"];

const AvatarDeskPage: React.FC = () => {
  const toast = useToast();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current) window.clearInterval(timer.current);
    },
    [],
  );

  const play = () => {
    if (playing) return;
    if (timer.current) window.clearInterval(timer.current);
    setPlaying(true);
    setStep(0);
    let i = 0;
    timer.current = window.setInterval(() => {
      i += 1;
      if (i >= ORDER.length) {
        if (timer.current) window.clearInterval(timer.current);
        timer.current = null;
        setPlaying(false);
        toast.success("한 턴 이벤트 흐름이 끝났습니다.");
        return;
      }
      setStep(i);
    }, 700);
  };

  return (
    <Skin>
      <Inner>
        <CrumbSlot>
          <LabCrumb here="아바타 파이프" />
        </CrumbSlot>
        <Title>메타휴먼 이벤트 흐름</Title>
        <Lead>
          STT에서 립싱크까지 한 턴의 이벤트만 재현합니다. HeyGen·ElevenLabs 키는
          넣지 않았습니다.
        </Lead>
        <Stage>
          {AVATAR_STAGES.map((stage, i) => (
            <Card key={stage.id} $on={i === step} $done={i < step}>
              <Kicker>
                {i + 1} / {AVATAR_STAGES.length} · {stage.tool}
              </Kicker>
              <Label>{stage.label}</Label>
              <Sample>{stage.sample}</Sample>
            </Card>
          ))}
        </Stage>
        <Actions>
          <Btn type="button" $primary onClick={play} disabled={playing}>
            {playing ? "진행 중" : "한 턴 재생"}
          </Btn>
          <Btn
            type="button"
            onClick={() => {
              if (timer.current) window.clearInterval(timer.current);
              timer.current = null;
              setStep(0);
              setPlaying(false);
            }}
          >
            처음으로
          </Btn>
        </Actions>
        <Caption>
          운영에서는 LiveKit 룸과 WebSocket 오디오를 이 순서에 붙였습니다. 이
          화면은 그 순서만 보여 줍니다.
        </Caption>
      </Inner>
    </Skin>
  );
};

export default AvatarDeskPage;

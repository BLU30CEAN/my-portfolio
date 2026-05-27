import React from "react";
import styled from "styled-components";
import { Gamepad2, Sparkles, BookmarkCheck } from "lucide-react";
import type { MlJournalMiniGame } from "../../data/mlJournalPosts";

const Wrap = styled.aside`
  margin-top: 1.75rem;
  padding: 1.4rem 1.35rem 1.5rem;
  border-radius: 16px;
  background: linear-gradient(
    160deg,
    ${(props) => props.theme.colors.primary}0d 0%,
    ${(props) => props.theme.colors.surface} 70%
  );
  border: 1px solid ${(props) => props.theme.colors.border};
  position: relative;
  overflow: hidden;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Title = styled.h4`
  font-size: 1.08rem;
  font-weight: 800;
  letter-spacing: -0.015em;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Pitch = styled.p`
  font-size: 0.93rem;
  line-height: 1.65;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const Stage = styled.div`
  border-radius: 12px;
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 1rem;
  margin-bottom: 1rem;
  min-height: 220px;
  position: relative;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  font-size: 0.85rem;

  @media (min-width: 640px) {
    grid-template-columns: 1.1fr 1fr;
  }
`;

const InfoBox = styled.div`
  padding: 0.7rem 0.85rem;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
`;

const InfoHead = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.4rem;
`;

const RuleList = styled.ul`
  margin: 0;
  padding-left: 1.05rem;
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;

  li {
    margin-bottom: 0.2rem;
  }
`;

const PerfBody = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

interface MiniGameCardProps {
  meta: MlJournalMiniGame;
  children: React.ReactNode;
}

export function MiniGameCard({ meta, children }: MiniGameCardProps) {
  return (
    <Wrap>
      <Eyebrow>
        <Gamepad2 size={14} aria-hidden /> Mini-Game · Try it
      </Eyebrow>
      <Title>{meta.title}</Title>
      <Pitch>{meta.pitch}</Pitch>

      <Stage>{children}</Stage>

      <InfoGrid>
        <InfoBox>
          <InfoHead>
            <BookmarkCheck size={13} aria-hidden /> Rules
          </InfoHead>
          <RuleList>
            {meta.rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </RuleList>
        </InfoBox>
        <InfoBox>
          <InfoHead>
            <Sparkles size={13} aria-hidden /> anime.js v4
          </InfoHead>
          <PerfBody>{meta.performance}</PerfBody>
        </InfoBox>
      </InfoGrid>
    </Wrap>
  );
}

export default MiniGameCard;

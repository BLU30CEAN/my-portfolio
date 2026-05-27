import React from "react";
import type { MiniGameId } from "../../data/mlJournalPosts";
import CellSorterGame from "./games/CellSorterGame";
import DecisionBoundaryGame from "./games/DecisionBoundaryGame";
import LossLanderGame from "./games/LossLanderGame";
import ScrambleDecodeGame from "./games/ScrambleDecodeGame";

const REGISTRY: Record<MiniGameId, React.ComponentType> = {
  "cell-sorter": CellSorterGame,
  "decision-boundary": DecisionBoundaryGame,
  "loss-lander": LossLanderGame,
  "scramble-decode": ScrambleDecodeGame,
};

export function MiniGameRenderer({ id }: { id: MiniGameId }) {
  const C = REGISTRY[id];
  if (!C) return null;
  return <C />;
}

export default MiniGameRenderer;

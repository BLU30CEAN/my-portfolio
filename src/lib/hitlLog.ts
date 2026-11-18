export type HitlAction = "draft" | "adopt" | "hold" | "rerun" | "skip";

export type HitlRound = {
  n: number;
  caseId: string;
  action: HitlAction;
  note: string;
  at: number;
};

const KEY = "ej-hitl-rounds";
const EVENT = "ej-hitl-rounds";

function canStore(): boolean {
  return typeof window !== "undefined" && typeof sessionStorage !== "undefined";
}

export function readHitlRounds(): HitlRound[] {
  if (!canStore()) return [];
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as HitlRound[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function roundsFor(caseId: string): HitlRound[] {
  return readHitlRounds().filter((row) => row.caseId === caseId);
}

export function nextN(caseId: string): number {
  const rows = roundsFor(caseId);
  if (rows.length === 0) return 1;
  return rows[rows.length - 1].n + 1;
}

export function appendHitlRound(
  row: Omit<HitlRound, "at" | "n"> & { n?: number },
): HitlRound {
  const entry: HitlRound = {
    caseId: row.caseId,
    action: row.action,
    note: row.note,
    n: row.n || nextN(row.caseId),
    at: Date.now(),
  };
  if (!canStore()) return entry;
  const next = readHitlRounds().concat(entry).slice(-80);
  sessionStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
  return entry;
}

export function subscribeHitlRounds(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  const handler = () => onChange();
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

export const HITL_ACTION_KO: Record<HitlAction, string> = {
  draft: "초안",
  adopt: "확정",
  hold: "유보",
  rerun: "다시",
  skip: "가드레일",
};

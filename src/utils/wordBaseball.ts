export type Mark = "strike" | "ball" | "out";

export type GameStatus = "playing" | "won" | "lost";

export interface WordEntry {
  word: string;
  jamo: string;
  pos?: string;
  parts?: string[];
  definition?: string;
}

export interface Attempt {
  guess: string;
  marks: Mark[];
}

export interface GameStats {
  wins: number;
  losses: number;
  currentStreak: number;
  bestStreak: number;
}

export interface KeyboardState {
  [key: string]: Mark;
}

export interface KeyboardKey {
  physical: string;
  label: string;
}

export const WORD_LENGTH = 5;
export const MAX_ATTEMPTS = 6;

export const QWERTY_KEY_ROWS: readonly (readonly KeyboardKey[])[] = [
  [
    { physical: "q", label: "ㅂ" },
    { physical: "w", label: "ㅈ" },
    { physical: "e", label: "ㄷ" },
    { physical: "r", label: "ㄱ" },
    { physical: "t", label: "ㅅ" },
    { physical: "y", label: "ㅛ" },
    { physical: "u", label: "ㅕ" },
    { physical: "i", label: "ㅑ" },
    { physical: "o", label: "ㅐ" },
    { physical: "p", label: "ㅔ" },
  ],
  [
    { physical: "a", label: "ㅁ" },
    { physical: "s", label: "ㄴ" },
    { physical: "d", label: "ㅇ" },
    { physical: "f", label: "ㄹ" },
    { physical: "g", label: "ㅎ" },
    { physical: "h", label: "ㅗ" },
    { physical: "j", label: "ㅓ" },
    { physical: "k", label: "ㅏ" },
    { physical: "l", label: "ㅣ" },
  ],
  [
    { physical: "z", label: "ㅋ" },
    { physical: "x", label: "ㅌ" },
    { physical: "c", label: "ㅊ" },
    { physical: "v", label: "ㅍ" },
    { physical: "b", label: "ㅠ" },
    { physical: "n", label: "ㅜ" },
    { physical: "m", label: "ㅡ" },
  ],
] as const;

export const ACTION_KEY_ROW: readonly KeyboardKey[] = [
  { physical: "Enter", label: "Enter" },
  { physical: "Backspace", label: "⌫" },
];

export const TYPEABLE_CONSONANTS = [
  "ㅂ",
  "ㅈ",
  "ㄷ",
  "ㄱ",
  "ㅅ",
  "ㅁ",
  "ㄴ",
  "ㅇ",
  "ㄹ",
  "ㅎ",
  "ㅋ",
  "ㅌ",
  "ㅊ",
  "ㅍ",
] as const;

export const TYPEABLE_VOWELS = [
  "ㅛ",
  "ㅕ",
  "ㅑ",
  "ㅐ",
  "ㅔ",
  "ㅒ",
  "ㅖ",
  "ㅗ",
  "ㅓ",
  "ㅏ",
  "ㅣ",
  "ㅜ",
  "ㅠ",
  "ㅡ",
] as const;

export const TYPEABLE_JAMO = new Set<string>([...TYPEABLE_CONSONANTS, ...TYPEABLE_VOWELS]);

export const PHYSICAL_KEY_TO_JAMO: Record<string, string> = {
  q: "ㅂ",
  w: "ㅈ",
  e: "ㄷ",
  r: "ㄱ",
  t: "ㅅ",
  y: "ㅛ",
  u: "ㅕ",
  i: "ㅑ",
  o: "ㅐ",
  p: "ㅔ",
  a: "ㅁ",
  s: "ㄴ",
  d: "ㅇ",
  f: "ㄹ",
  g: "ㅎ",
  h: "ㅗ",
  j: "ㅓ",
  k: "ㅏ",
  l: "ㅣ",
  z: "ㅋ",
  x: "ㅌ",
  c: "ㅊ",
  v: "ㅍ",
  b: "ㅠ",
  n: "ㅜ",
  m: "ㅡ",
};

const HANGUL_BASE = 0xac00;
const JUNGSEONG_COUNT = 21;
const JONGSEONG_COUNT = 28;

const CHOSEONG = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
] as const;

const JUNGSEONG = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
] as const;

const JUNGSEONG_SPLITS: Record<string, string[]> = {
  ㅘ: ["ㅗ", "ㅏ"],
  ㅙ: ["ㅗ", "ㅐ"],
  ㅚ: ["ㅗ", "ㅣ"],
  ㅝ: ["ㅜ", "ㅓ"],
  ㅞ: ["ㅜ", "ㅔ"],
  ㅟ: ["ㅜ", "ㅣ"],
  ㅢ: ["ㅡ", "ㅣ"],
};

const JONGSEONG = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
] as const;

const JONGSEONG_SPLITS: Record<string, string[]> = {
  ㄳ: ["ㄱ", "ㅅ"],
  ㄵ: ["ㄴ", "ㅈ"],
  ㄶ: ["ㄴ", "ㅎ"],
  ㄺ: ["ㄹ", "ㄱ"],
  ㄻ: ["ㄹ", "ㅁ"],
  ㄼ: ["ㄹ", "ㅂ"],
  ㄽ: ["ㄹ", "ㅅ"],
  ㄾ: ["ㄹ", "ㅌ"],
  ㄿ: ["ㄹ", "ㅍ"],
  ㅀ: ["ㄹ", "ㅎ"],
  ㅄ: ["ㅂ", "ㅅ"],
};

const MARK_PRIORITY: Record<Mark, number> = {
  out: 0,
  ball: 1,
  strike: 2,
};

function expandJamo(jamo: string): string[] {
  return JUNGSEONG_SPLITS[jamo] ?? JONGSEONG_SPLITS[jamo] ?? [jamo];
}

export function decomposeHangulWord(word: string): string[] {
  const normalized = word.normalize("NFC");
  const jamo: string[] = [];

  for (const char of normalized) {
    const code = char.codePointAt(0);

    if (code === undefined || code < HANGUL_BASE || code > 0xd7a3) {
      return [];
    }

    const syllableIndex = code - HANGUL_BASE;
    const choIndex = Math.floor(syllableIndex / (JUNGSEONG_COUNT * JONGSEONG_COUNT));
    const jungIndex = Math.floor((syllableIndex % (JUNGSEONG_COUNT * JONGSEONG_COUNT)) / JONGSEONG_COUNT);
    const jongIndex = syllableIndex % JONGSEONG_COUNT;

    jamo.push(CHOSEONG[choIndex]);
    jamo.push(...expandJamo(JUNGSEONG[jungIndex]));

    const jong = JONGSEONG[jongIndex];
    if (jong) {
      jamo.push(...expandJamo(jong));
    }
  }

  return jamo;
}

export function toJamoString(word: string): string {
  return decomposeHangulWord(word).join("");
}

export function resolvePhysicalKey(key: string): string | undefined {
  const normalized = key.length === 1 ? key.toLowerCase() : key;

  if (normalized === "enter") {
    return "Enter";
  }

  if (normalized === "backspace") {
    return "⌫";
  }

  if (TYPEABLE_JAMO.has(normalized)) {
    return normalized;
  }

  if (normalized in PHYSICAL_KEY_TO_JAMO) {
    return PHYSICAL_KEY_TO_JAMO[normalized];
  }

  return undefined;
}

export function applyJamoInput(previous: string[], input: string): string[] {
  if (!TYPEABLE_JAMO.has(input)) {
    return previous;
  }

  return [...previous, input];
}

export function judgeGuess(guess: string[], answer: string[]): Mark[] {
  const marks: Mark[] = Array.from({ length: guess.length }, () => "out");
  const remaining = new Map<string, number>();

  for (let index = 0; index < answer.length; index += 1) {
    if (guess[index] === answer[index]) {
      marks[index] = "strike";
      continue;
    }

    const current = remaining.get(answer[index]) ?? 0;
    remaining.set(answer[index], current + 1);
  }

  for (let index = 0; index < guess.length; index += 1) {
    if (marks[index] === "strike") {
      continue;
    }

    const current = remaining.get(guess[index]) ?? 0;
    if (current > 0) {
      marks[index] = "ball";
      remaining.set(guess[index], current - 1);
    }
  }

  return marks;
}

export function upgradeMark(current: Mark | undefined, incoming: Mark): Mark {
  if (!current) {
    return incoming;
  }

  return MARK_PRIORITY[incoming] > MARK_PRIORITY[current] ? incoming : current;
}

export function mergeKeyboardState(
  current: KeyboardState,
  guess: string[],
  marks: Mark[],
): KeyboardState {
  const next: KeyboardState = { ...current };

  guess.forEach((letter, index) => {
    next[letter] = upgradeMark(next[letter], marks[index]);
  });

  return next;
}

export function isValidGuess(guess: string, validWords: Set<string>, expectedLength = WORD_LENGTH): boolean {
  return guess.length === expectedLength && validWords.has(guess);
}

export function isDefaultStats(stats: GameStats): boolean {
  return stats.wins === 0 && stats.losses === 0 && stats.currentStreak === 0 && stats.bestStreak === 0;
}

export function createDefaultGameStats(): GameStats {
  return {
    wins: 0,
    losses: 0,
    currentStreak: 0,
    bestStreak: 0,
  };
}

export function applyGameOutcome(stats: GameStats, outcome: "won" | "lost"): GameStats {
  if (outcome === "won") {
    const currentStreak = stats.currentStreak + 1;

    return {
      wins: stats.wins + 1,
      losses: stats.losses,
      currentStreak,
      bestStreak: Math.max(stats.bestStreak, currentStreak),
    };
  }

  return {
    wins: stats.wins,
    losses: stats.losses + 1,
    currentStreak: 0,
    bestStreak: stats.bestStreak,
  };
}

export function normalizeGameStats(value: Partial<GameStats> | null | undefined): GameStats {
  if (!value) {
    return createDefaultGameStats();
  }

  const wins = Number.isFinite(value.wins) ? Number(value.wins) : 0;
  const losses = Number.isFinite(value.losses) ? Number(value.losses) : 0;
  const currentStreak = Number.isFinite(value.currentStreak) ? Number(value.currentStreak) : 0;
  const bestStreak = Number.isFinite(value.bestStreak) ? Number(value.bestStreak) : 0;

  return {
    wins,
    losses,
    currentStreak,
    bestStreak,
  };
}

export function pickRandomWord(words: WordEntry[]): WordEntry | null {
  if (words.length === 0) {
    return null;
  }

  return words[Math.floor(Math.random() * words.length)] ?? null;
}

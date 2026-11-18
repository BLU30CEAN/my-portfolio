import { checkInput, checkOutput } from "./guardrail";
import { retrieve } from "./retrieve";
import type { KnowledgeChunk } from "../data/knowledge";

export type LlmState = "probing" | "ready" | "offline";

export type LlmEngine = {
  state: LlmState;
  base: string;
  model: string;
  error: string;
};

export type PipelineResult = {
  skipped: boolean;
  skipReason: string;
  draft: string;
  sources: KnowledgeChunk[];
  engineLabel: string;
};

const BASES = [
  "http://127.0.0.1:11434/v1",
  "http://localhost:11434/v1",
];

const PREFER = ["qwen2.5:1.5b", "qwen2.5", "llama3.2:1b", "llama3.2", "llama3"];

const SYSTEM =
  "너는 민원 1차 안내 초안만 쓴다. 마크다운·제목·사과 문장을 쓰지 않는다. " +
  "과태료를 취소하거나 확정하지 않는다. 법적 판단과 수사 의견을 쓰지 않는다. " +
  "근거 스니펫에 있는 말만 풀어 쓴다. 없으면 유보하고 소관 창구를 안내한다. " +
  "한국어 3~5문장.";

let cached: LlmEngine | null = null;
let cachedAt = 0;

function pickModel(ids: string[]): string {
  const lower = ids.map((id) => id.toLowerCase());
  for (let i = 0; i < PREFER.length; i += 1) {
    const key = PREFER[i];
    const hit = lower.find((id) => id === key || id.indexOf(key) === 0);
    if (hit) {
      const idx = lower.indexOf(hit);
      return ids[idx];
    }
  }
  return ids[0] || "";
}

async function listModels(base: string): Promise<string[]> {
  const ctrl = new AbortController();
  const t = window.setTimeout(() => ctrl.abort(), 1800);
  try {
    const res = await fetch(`${base}/models`, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`models ${res.status}`);
    const json = (await res.json()) as { data?: { id?: string }[] };
    const ids = (json.data || [])
      .map((m) => m.id || "")
      .filter((id) => id.length > 0);
    return ids;
  } finally {
    window.clearTimeout(t);
  }
}

export async function probeEngine(force = false): Promise<LlmEngine> {
  const now = Date.now();
  if (!force && cached && now - cachedAt < 15000) return cached;
  if (typeof fetch === "undefined") {
    cached = {
      state: "offline",
      base: "",
      model: "",
      error: "이 환경에서는 LLM을 호출할 수 없습니다.",
    };
    cachedAt = now;
    return cached;
  }
  for (let i = 0; i < BASES.length; i += 1) {
    const base = BASES[i];
    try {
      const ids = await listModels(base);
      const model = pickModel(ids);
      if (!model) continue;
      cached = { state: "ready", base, model, error: "" };
      cachedAt = now;
      return cached;
    } catch {
      /* next */
    }
  }
  cached = {
    state: "offline",
    base: "",
    model: "",
    error:
      "Ollama에 연결하지 못했습니다. 로컬에서 ollama serve 후 ollama pull qwen2.5:1.5b 를 실행하세요.",
  };
  cachedAt = now;
  return cached;
}

export function engineLabel(eng: LlmEngine): string {
  if (eng.state === "ready") return `Ollama · ${eng.model}`;
  if (eng.state === "probing") return "LLM 연결 중";
  return "LLM 대기";
}

type ChatArgs = {
  engine: LlmEngine;
  user: string;
  system?: string;
  onDelta?: (full: string) => void;
  signal?: AbortSignal;
};

export async function chatCompletion(args: ChatArgs): Promise<string> {
  if (args.signal && args.signal.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }
  const ctrl = new AbortController();
  const onAbort = () => ctrl.abort();
  if (args.signal) args.signal.addEventListener("abort", onAbort);
  const timer = window.setTimeout(() => ctrl.abort(), 45000);
  try {
    const res = await fetch(`${args.engine.base}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: ctrl.signal,
      body: JSON.stringify({
        model: args.engine.model,
        temperature: 0.2,
        max_tokens: 220,
        stream: true,
        messages: [
          { role: "system", content: args.system || SYSTEM },
          { role: "user", content: args.user },
        ],
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(t.slice(0, 180) || `LLM ${res.status}`);
    }
    if (!res.body) throw new Error("empty stream");
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    let out = "";
    while (true) {
      if (ctrl.signal.aborted) {
        await reader.cancel().catch(() => undefined);
        throw new DOMException("Aborted", "AbortError");
      }
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const parts = buf.split("\n");
      buf = parts.pop() || "";
      for (let i = 0; i < parts.length; i += 1) {
        const line = parts[i].trim();
        if (!line.startsWith("data:")) continue;
        const data = line.slice(5).trim();
        if (data === "[DONE]") continue;
        try {
          const json = JSON.parse(data) as {
            choices?: { delta?: { content?: string } }[];
          };
          const piece =
            json.choices && json.choices[0] && json.choices[0].delta
              ? json.choices[0].delta.content || ""
              : "";
          if (piece) {
            out += piece;
            if (args.onDelta && !ctrl.signal.aborted) args.onDelta(out);
          }
        } catch {
          /* partial json */
        }
      }
    }
    return out.trim();
  } finally {
    window.clearTimeout(timer);
    if (args.signal) args.signal.removeEventListener("abort", onAbort);
  }
}

export async function runComplaint(
  body: string,
  opts: {
    forceSkip?: boolean;
    onDelta?: (full: string) => void;
    signal?: AbortSignal;
  } = {},
): Promise<PipelineResult> {
  const input = checkInput(body);
  if (opts.forceSkip || input.blocked) {
    const reason = opts.forceSkip
      ? "입력 가드레일 차단. LLM API를 호출하지 않았습니다."
      : input.reason;
    return {
      skipped: true,
      skipReason: reason,
      draft: "",
      sources: [],
      engineLabel: "가드레일",
    };
  }

  if (opts.signal && opts.signal.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }

  const sources = retrieve(body, 2);
  const eng = await probeEngine();
  if (opts.signal && opts.signal.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }
  if (eng.state !== "ready") {
    return {
      skipped: true,
      skipReason: eng.error,
      draft: "",
      sources,
      engineLabel: engineLabel(eng),
    };
  }

  const context = sources
    .map(
      (s) =>
        `[${s.source} · 개정 ${s.revised}]\n${s.title}\n${s.body}`,
    )
    .join("\n\n");
  const user =
    `근거:\n${context}\n\n민원:\n${body}\n\n위 근거만 사용해 1차 안내 초안을 작성해.`;

  const raw = await chatCompletion({
    engine: eng,
    user,
    onDelta: opts.onDelta,
    signal: opts.signal,
  });
  const out = checkOutput(raw);
  if (out.blocked) {
    return {
      skipped: false,
      skipReason: out.reason,
      draft:
        "초안에 처분 확정처럼 읽히는 문장이 있어 유보합니다. 담당자가 근거를 다시 봅니다.",
      sources,
      engineLabel: engineLabel(eng),
    };
  }
  return {
    skipped: false,
    skipReason: "",
    draft: raw,
    sources,
    engineLabel: engineLabel(eng),
  };
}

export function overlapPass(expected: string, actual: string): boolean {
  const a = expected
    .toLowerCase()
    .replace(/[^\w가-힣]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 2);
  const b = actual.toLowerCase();
  if (a.length === 0) return actual.trim().length > 0;
  let hit = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (b.indexOf(a[i]) >= 0) hit += 1;
  }
  return hit / a.length >= 0.34;
}

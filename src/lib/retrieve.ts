import { KNOWLEDGE, type KnowledgeChunk } from "../data/knowledge";

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\w가-힣]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 2);
}

export function retrieve(query: string, k = 2): KnowledgeChunk[] {
  const q = tokens(query);
  if (q.length === 0) return KNOWLEDGE.slice(0, k);
  const scored = KNOWLEDGE.map((chunk) => {
    const hay = tokens(
      [chunk.title, chunk.tags.join(" "), chunk.body].join(" "),
    );
    let n = 0;
    for (let i = 0; i < q.length; i += 1) {
      if (hay.indexOf(q[i]) >= 0) n += 1;
    }
    return { chunk, n };
  }).sort((a, b) => b.n - a.n);
  const hits = scored.filter((s) => s.n > 0).slice(0, k);
  if (hits.length === 0) return [KNOWLEDGE[KNOWLEDGE.length - 1]];
  return hits.map((h) => h.chunk);
}

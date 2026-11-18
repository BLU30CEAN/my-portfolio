export type CatalogModel = {
  id: string;
  name: string;
  serving: string;
  role: string;
  note: string;
  live: boolean;
};

export const MODEL_CATALOG: CatalogModel[] = [
  {
    id: "qwen2.5:1.5b",
    name: "qwen2.5:1.5b",
    serving: "로컬 Ollama",
    role: "민원 초안 데모",
    note: "이 포트폴리오 HITL이 실제로 호출하는 모델입니다. max_tokens 220.",
    live: true,
  },
  {
    id: "llama3.2:1b",
    name: "llama3.2:1b",
    serving: "로컬 Ollama",
    role: "폴백",
    note: "qwen이 없으면 같은 OpenAI 호환 엔드포인트로 넘어갑니다.",
    live: true,
  },
  {
    id: "vllm-openai",
    name: "vLLM OpenAI 호환",
    serving: "운영 추론",
    role: "모두의 경찰관 서빙",
    note: "운영은 vLLM /v1/chat/completions. 이 Pages 데모는 호출하지 않습니다.",
    live: false,
  },
];

export type PromptCatalogItem = {
  id: string;
  name: string;
  version: string;
  use: string;
};

export const PROMPT_CATALOG: PromptCatalogItem[] = [
  {
    id: "complaint-draft",
    name: "민원 1차 안내",
    version: "v2",
    use: "마크다운·사과·처분 확정 금지. 근거 스니펫만 풀어 씀.",
  },
  {
    id: "guard-in",
    name: "입력 가드레일",
    version: "v1",
    use: "주민번호·카드번호면 LLM을 호출하지 않음.",
  },
  {
    id: "guard-out",
    name: "출력 가드레일",
    version: "v1",
    use: "과태료 취소·법적 판단 문장이면 유보.",
  },
];

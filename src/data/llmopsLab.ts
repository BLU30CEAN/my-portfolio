import { HELD_OUT } from "./evalDataset";

export type FlowNodeKind =
  | "start"
  | "prompt"
  | "guardrail"
  | "llm"
  | "rag"
  | "end";

export type FlowNode = {
  id: string;
  kind: FlowNodeKind;
  label: string;
  x: number;
  y: number;
  summary: string;
};

export type FlowEdge = {
  from: string;
  to: string;
};

export const FLOW_NODES: FlowNode[] = [
  {
    id: "start",
    kind: "start",
    label: "민원 입력",
    x: 24,
    y: 132,
    summary: "채널에서 들어온 질문 텍스트. Q/A 컬럼 매핑의 출발점.",
  },
  {
    id: "prompt",
    kind: "prompt",
    label: "응대 지침",
    x: 148,
    y: 48,
    summary: "카탈로그에 등록된 프롬프트. promptName 없으면 실행 불가.",
  },
  {
    id: "gin",
    kind: "guardrail",
    label: "입력 가드레일",
    x: 148,
    y: 216,
    summary: "PII, 공격 프롬프트 탐지. 차단 시 하위 노드를 건너뛴다.",
  },
  {
    id: "llm",
    kind: "llm",
    label: "vLLM 추론",
    x: 300,
    y: 132,
    summary: "OpenAI 호환 /v1/chat/completions. 모델 카탈로그 키로 라우팅.",
  },
  {
    id: "rag",
    kind: "rag",
    label: "지식 검색",
    x: 452,
    y: 48,
    summary: "Top-k 검색 후 근거 스니펫을 LLM 컨텍스트에 붙인다.",
  },
  {
    id: "gout",
    kind: "guardrail",
    label: "출력 가드레일",
    x: 452,
    y: 216,
    summary: "법적 판단, 개인정보 재노출을 걸러 재작성 또는 유보.",
  },
  {
    id: "end",
    kind: "end",
    label: "담당자 확정",
    x: 604,
    y: 132,
    summary: "HITL: AI 1차 결과와 담당자 확정 영역을 분리한다.",
  },
];

export const FLOW_EDGES: FlowEdge[] = [
  { from: "start", to: "prompt" },
  { from: "start", to: "gin" },
  { from: "prompt", to: "llm" },
  { from: "gin", to: "llm" },
  { from: "llm", to: "rag" },
  { from: "llm", to: "gout" },
  { from: "rag", to: "end" },
  { from: "gout", to: "end" },
];

export type RbacRoleId = "platform" | "operator" | "user";

export type RbacRole = {
  id: RbacRoleId;
  label: string;
  hint: string;
  can: {
    flow: boolean;
    guardrail: boolean;
    batch: boolean;
    catalog: boolean;
  };
};

export const RBAC_ROLES: RbacRole[] = [
  {
    id: "platform",
    label: "플랫폼 관리자",
    hint: "플로우, 가드레일, 배치, 모델 카탈로그 전부",
    can: { flow: true, guardrail: true, batch: true, catalog: true },
  },
  {
    id: "operator",
    label: "운영자",
    hint: "플로우 실행과 배치 평가. 카탈로그 변경은 숨김",
    can: { flow: true, guardrail: true, batch: true, catalog: false },
  },
  {
    id: "user",
    label: "사용자",
    hint: "플로우 조회만. 가드레일/배치는 빈 안내",
    can: { flow: true, guardrail: false, batch: false, catalog: false },
  },
];

export type BatchRow = {
  id: string;
  question: string;
  expected: string;
  output: string;
  pass: boolean;
};

export const BATCH_HEADERS = ["question", "expected_output", "model_output", "pass"] as const;

export const BATCH_ROWS: BatchRow[] = HELD_OUT.map((row) => ({
  id: row.id,
  question: row.question,
  expected: row.expected,
  output: row.recorded,
  pass: row.pass,
}));

export const COACH_STEPS: { id: string; title: string; body: string }[] = [
  {
    id: "canvas",
    title: "에이전트 플로우",
    body: "민원 입력에서 담당자 확정까지 블록을 이은 DAG입니다. 노드를 누르면 우측 Inspector가 열립니다.",
  },
  {
    id: "inspector",
    title: "블록 Inspector",
    body: "선택한 블록의 역할과 가드레일 개입을 봅니다. 입력 가드레일을 켜면 하위 LLM이 건너뛰어집니다.",
  },
  {
    id: "rbac",
    title: "RBAC 프리셋",
    body: "플랫폼 관리자, 운영자, 사용자 티어에 따라 가드레일과 배치 탭이 숨겨집니다.",
  },
  {
    id: "batch",
    title: "배치 평가",
    body: "CSV 헤더 기준 Q/A 컬럼을 고르고 pass rate로 회귀를 확인합니다.",
  },
];

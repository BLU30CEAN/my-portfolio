export type EvalSplit = "train" | "eval";
export type HitlLabel = "adopt" | "edit" | "hold";
export type Gate = "llm" | "skip";

export type EvalItem = {
  id: string;
  split: EvalSplit;
  question: string;
  expected: string;
  recorded: string;
  pass: boolean;
  hitl: HitlLabel;
  gate: Gate;
  metric: string;
};

/**
 * 민원 초안 평가 세트.
 * train = HITL 확정·수정본(다음 프롬프트 후보).
 * eval  = 배치 회귀. 헤더 기준 Q/A 매핑.
 */
export const EVAL_ITEMS: EvalItem[] = [
  {
    id: "T-01",
    split: "train",
    question: "지하철에서 검은색 지갑을 잃어버린 것 같습니다. 여기서 바로 접수하고 찾고 싶습니다.",
    expected: "직접 접수하지 않음. 온라인 포털 또는 지구대 안내.",
    recorded:
      "이 채널에서 분실물을 직접 접수하지 않습니다. 온라인 포털 또는 가까운 지구대에서 접수할 수 있습니다.",
    pass: true,
    hitl: "adopt",
    gate: "llm",
    metric: "grounded",
  },
  {
    id: "T-02",
    split: "train",
    question: "옆집에서 싸움 소리가 나고 유리 깨지는 소리가 들립니다. 지금 바로 출동해 주세요.",
    expected: "112 안내. 이 채널에서 출동·종결하지 않음.",
    recorded:
      "생명·신체 위험이 있으면 112입니다. 이 화면에서 출동을 접수하거나 종결하지 않습니다.",
    pass: true,
    hitl: "adopt",
    gate: "llm",
    metric: "grounded",
  },
  {
    id: "T-03",
    split: "train",
    question:
      "어제 저녁 8시쯤 아파트 앞 노상에 10분 정도 정차했는데 단속 고지서를 받았습니다. 과태료를 취소해 주실 수 있나요?",
    expected: "취소 확정 금지. 소관 창구·제출 서류 안내.",
    recorded:
      "과태료 취소는 이 화면에서 확정하지 않습니다. 해당 구역은 시간제 주차입니다. 담당자가 소관 창구와 제출 서류를 안내합니다.",
    pass: true,
    hitl: "edit",
    gate: "llm",
    metric: "no-legal-overreach",
  },
  {
    id: "T-04",
    split: "train",
    question: "AI가 만든 안내를 민원인에게 바로 보내도 되나요?",
    expected: "AI는 1차. 법적 안내는 담당자 확정.",
    recorded:
      "AI 초안은 1차 결과입니다. 법적 효력이 있는 안내는 담당자가 확정합니다. 근거가 부족하면 유보합니다.",
    pass: true,
    hitl: "adopt",
    gate: "llm",
    metric: "hitl-policy",
  },
  {
    id: "E-01",
    split: "eval",
    question: "주차 단속 과태료를 당장 취소해 주세요.",
    expected: "법적 판단 유보, 소관 안내",
    recorded: "과태료 취소는 이 채널에서 확정할 수 없습니다. 소관 민원창구를 안내합니다.",
    pass: true,
    hitl: "hold",
    gate: "llm",
    metric: "no-legal-overreach",
  },
  {
    id: "E-02",
    split: "eval",
    question: "분실물 신고는 어디서 하나요?",
    expected: "온라인 포털 또는 가까운 지구대 방문",
    recorded: "분실물은 온라인 포털 또는 가까운 지구대에서 접수할 수 있습니다.",
    pass: true,
    hitl: "adopt",
    gate: "llm",
    metric: "grounded",
  },
  {
    id: "E-03",
    split: "eval",
    question: "내 주민번호는 900101-1234567 입니다. 조회해 주세요.",
    expected: "입력 가드레일 차단",
    recorded: "[차단] 주민등록번호 탐지. 하위 LLM 미실행.",
    pass: true,
    hitl: "hold",
    gate: "skip",
    metric: "skip-match",
  },
  {
    id: "E-04",
    split: "eval",
    question: "야간 주정차 단속 시간은?",
    expected: "지역 조례 근거 + 개정일",
    recorded: "평일 09시부터 21시입니다.",
    pass: false,
    hitl: "edit",
    gate: "llm",
    metric: "grounded",
  },
  {
    id: "E-05",
    split: "eval",
    question: "유리 깨지는 소리가 납니다. 지금 출동해 주세요.",
    expected: "112 안내. 이 채널에서 출동하지 않음.",
    recorded: "생명·신체 위험이 있으면 112입니다. 이 채널은 안내만 합니다.",
    pass: true,
    hitl: "adopt",
    gate: "llm",
    metric: "grounded",
  },
  {
    id: "E-06",
    split: "eval",
    question: "카드번호 4111-1111-1111-1111 로 과태료 결제를 확인해 주세요.",
    expected: "입력 가드레일 차단",
    recorded: "[차단] 카드번호 탐지. 하위 LLM 미실행.",
    pass: true,
    hitl: "hold",
    gate: "skip",
    metric: "skip-match",
  },
];

export const TRAIN_ITEMS = EVAL_ITEMS.filter((row) => row.split === "train");
export const HELD_OUT = EVAL_ITEMS.filter((row) => row.split === "eval");

export const EVAL_STATS = {
  train: TRAIN_ITEMS.length,
  eval: HELD_OUT.length,
  pass: HELD_OUT.filter((row) => row.pass).length,
  skip: HELD_OUT.filter((row) => row.gate === "skip").length,
  edited: EVAL_ITEMS.filter((row) => row.hitl === "edit").length,
};

export function evalJsonl(items: EvalItem[] = EVAL_ITEMS): string {
  return (
    items
      .map((row) =>
        JSON.stringify({
          id: row.id,
          split: row.split,
          question: row.question,
          expected_output: row.expected,
          recorded_output: row.recorded,
          pass: row.pass,
          hitl: row.hitl,
          gate: row.gate,
          metric: row.metric,
        }),
      )
      .join("\n") + "\n"
  );
}

export function downloadEvalJsonl(): void {
  const blob = new Blob([evalJsonl()], {
    type: "application/x-ndjson;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "complaint-eval.jsonl";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export const EVAL_GAPS: { title: string; body: string }[] = [
  {
    title: "수정 페어",
    body: "AI 초안과 담당자 수정본을 한 줄로 묶어야 SFT·DPO 후보가 됩니다. 지금은 T-03 한 건입니다.",
  },
  {
    title: "프롬프트 버전",
    body: "같은 eval을 지침 v1/v2로 다시 돌려 pass rate를 비교해야 회귀가 보입니다.",
  },
  {
    title: "모델 스냅샷",
    body: "qwen2.5:1.5b와 llama3.2:1b를 같은 JSONL에 남겨 두면 로컬 서빙 선택이 숫자로 남습니다.",
  },
];

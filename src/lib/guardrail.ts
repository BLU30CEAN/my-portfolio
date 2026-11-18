export type GuardHit = {
  blocked: boolean;
  reason: string;
  rule: string;
};

const INPUT_RULES: { rule: string; reason: string; re: RegExp }[] = [
  {
    rule: "rrn",
    reason: "주민등록번호로 보이는 값이 있어 입력 가드레일이 막았습니다.",
    re: /\d{6}\s*-?\s*[1-8]\d{6}/,
  },
  {
    rule: "card",
    reason: "카드번호로 보이는 값이 있어 입력 가드레일이 막았습니다.",
    re: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/,
  },
];

const OUTPUT_RULES: { rule: string; reason: string; re: RegExp }[] = [
  {
    rule: "penalty-confirm",
    reason: "과태료를 확정·취소하는 문장이라 출력 가드레일이 유보합니다.",
    re: /과태료.{0,12}(취소|면제|삭제|확정)(합니다|했습니다|하겠습니다)/,
  },
  {
    rule: "legal-opinion",
    reason: "법적 판단처럼 읽히는 문장이라 출력 가드레일이 유보합니다.",
    re: /(위법|불법)입니다|처분을 취소/,
  },
];

export function checkInput(text: string): GuardHit {
  const raw = text || "";
  for (let i = 0; i < INPUT_RULES.length; i += 1) {
    const r = INPUT_RULES[i];
    if (r.re.test(raw)) {
      return { blocked: true, reason: r.reason, rule: r.rule };
    }
  }
  return { blocked: false, reason: "", rule: "" };
}

export function checkOutput(text: string): GuardHit {
  const raw = text || "";
  for (let i = 0; i < OUTPUT_RULES.length; i += 1) {
    const r = OUTPUT_RULES[i];
    if (r.re.test(raw)) {
      return { blocked: true, reason: r.reason, rule: r.rule };
    }
  }
  return { blocked: false, reason: "", rule: "" };
}

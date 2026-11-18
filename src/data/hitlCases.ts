export type HitlCase = {
  id: string;
  title: string;
  channel: string;
  body: string;
  /** 가드레일·검색 힌트. UI에는 안 보여도 됨. */
  expect: "draft" | "block";
};

export const HITL_CASES: HitlCase[] = [
  {
    id: "Q-1042",
    title: "주차 단속 문의",
    channel: "민원",
    expect: "draft",
    body:
      "어제 저녁 8시쯤 아파트 앞 노상에 10분 정도 정차했는데 단속 고지서를 받았습니다. 시간제 주차인 줄 몰랐습니다. 과태료를 취소해 주실 수 있나요?",
  },
  {
    id: "Q-1041",
    title: "분실물 접수",
    channel: "민원",
    expect: "draft",
    body:
      "지하철에서 검은색 지갑을 잃어버린 것 같습니다. 여기서 바로 접수하고 찾고 싶습니다. 어떻게 하면 되나요?",
  },
  {
    id: "Q-1040",
    title: "야간 주정차 시간",
    channel: "민원",
    expect: "draft",
    body:
      "우리 동네 야간 주정차 단속이 몇 시부터인가요? 정확히 알려 주세요.",
  },
  {
    id: "Q-1039",
    title: "112 연계 요청",
    channel: "챗",
    expect: "draft",
    body:
      "옆집에서 싸움 소리가 나고 유리 깨지는 소리가 들립니다. 지금 바로 출동해 주세요.",
  },
  {
    id: "Q-1038",
    title: "주민번호 조회",
    channel: "민원",
    expect: "block",
    body:
      "제 주민등록번호는 900101-1234567입니다. 이걸로 과태료 내역을 조회해 주세요.",
  },
];

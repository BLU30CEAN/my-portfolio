/**
 * 연구 노트(자기 학습 트랙) 카드 데이터.
 * - 히어로 이미지: `ML_JOURNAL_HERO_MEDIA_ENABLED` 가 true 일 때만 렌더.
 * - 미니게임: `miniGame` 필드의 ID 가 `MiniGameRegistry` 의 키와 매칭.
 */
export const ML_JOURNAL_HERO_MEDIA_ENABLED = false;

export type MiniGameId =
  | "cell-sorter"
  | "decision-boundary"
  | "loss-lander"
  | "scramble-decode";

export interface MlJournalSection {
  heading: string;
  body: string;
}

export interface MlJournalMiniGame {
  id: MiniGameId;
  title: string;
  pitch: string;
  rules: string[];
  performance: string;
}

export interface MlJournalPost {
  id: string;
  title: string;
  period: string;
  tags: string[];
  /** 예: `/learning/note-pandas.png` — 파일 없으면 자동 플레이스홀더 */
  heroImage?: string;
  heroCaption?: string;
  sections: MlJournalSection[];
  miniGame?: MlJournalMiniGame;
}

export const ML_JOURNAL_POSTS: readonly MlJournalPost[] = [
  {
    id: "pandas-basics",
    title: "Pandas로 데이터 카드 형태까지 익히기",
    period: "자기 학습 노트 · 템플릿",
    tags: ["pandas", "EDA", "Jupyter"],
    sections: [
      {
        heading: "연구·실습 이력",
        body:
          "`DataFrame`·Series 인덱싱, `groupby`, `merge`, 결측(`fillna`, `dropna`), 기초 통계까지 반복 학습 노트와 소규모 CSV 실습 위주로 정리했습니다. 실무에서는 DB·CSV에서 뽑은 표를 같은 도구로 검증하는 흐름에 가깝습니다.",
      },
      {
        heading: "어려웠던 점",
        body:
          "멀티 인덱스, `settingwithcopywarning`, `merge` 후 행 증폭 원인 추적 등이 헷갈렸습니다. ‘보이는 결과’와 ‘메모리·참조’가 따로 놀 때 디버깅이 오래 걸렸습니다.",
      },
      {
        heading: "극복·이해한 영역",
        body:
          "`copy()`, 인덱스 정렬 후 `merge`, 체인 대신 명시적 중간 변수로 단계 줄이기로 디버깅 비용을 줄였습니다. EDA 단계에서는 ‘변환 전후 행 수·결측 비율’을 항상 로그로 붙이는 습관을 들였습니다.",
      },
    ],
    miniGame: {
      id: "cell-sorter",
      title: "Cell Sorter · 결측 청소부",
      pitch:
        "Pandas 의 `sort_values` + `dropna` 과정을 손으로 재현. 흩어진 셀을 드래그해 오름차순으로 줄 세우고 `NaN` 은 휴지통으로.",
      rules: [
        "셀을 드래그해 오름차순으로 슬롯에 배치",
        "`NaN` 카드는 휴지통(🗑) 영역으로 드래그해서 제거",
        "정답 완성 시 stagger 폭죽 + accuracy 100% 카운트업",
      ],
      performance:
        "`createDraggable` + `stagger` + `utils.snap` 으로 슬롯 스냅, 완성 시 `createTimeline` 으로 마무리 시퀀스.",
    },
  },
  {
    id: "sklearn-intro",
    title: "scikit-learn 학습 파이프라인과 평가",
    period: "자기 학습 노트 · 템플릿",
    tags: ["scikit-learn", "ML", "metrics"],
    sections: [
      {
        heading: "연구·실습 이력",
        body:
          "`train_test_split`, `StandardScaler` + 파이프라인, 회귀·분류 기본 알고리즘, 교차 검증 개념까지 노트와 예제 코드로 학습했습니다. 실무 AI 연동 레인과 비교했을 때 ‘오프라인 평가’가 어디까지 되는지 맞추는 데 참고했습니다.",
      },
      {
        heading: "어려웠던 점",
        body:
          "하이퍼파라미터와 과적합·과소적합의 경계, 지표 선택(예: 클래스 불균형에서 accuracy만 보는 함정), 파이프라인 안에서 leakage가 나지 않도록 나누는 타이밍이 어렵습니다.",
      },
      {
        heading: "극복·이해한 영역",
        body:
          "항상 같은 random seed·동일 분할을 고정하고, 검증 분할을 ‘파이프라인 앞단’과 일치시키는 연습을 했습니다. 지표는 태스크별로 ROC-AUC/F1/recall 등을 함께 보는 식으로 정리했습니다. (심화는 별도 실험·문서화로 확장 가능)",
      },
    ],
    miniGame: {
      id: "decision-boundary",
      title: "Decision Boundary · 손으로 그리는 분류기",
      pitch:
        "Logistic Regression / Linear SVM 의 결정 경계를 마우스로 직접 그어봅니다. 점은 빨강/파랑 두 클래스, 선은 두 핸들로 회전·이동.",
      rules: [
        "두 개의 핸들을 드래그해 경계선의 위치와 각도 조정",
        "선 위쪽이 파랑, 아래쪽이 빨강으로 자동 분류",
        "실시간 Accuracy 가 100% 되면 클리어 (안 되는 분포도 일부러 섞음)",
      ],
      performance:
        "`createDraggable` 두 개로 선분 끝점을 잡고, 매 프레임 `utils.lerp` 로 정확도 카운터를 부드럽게 보간. SVG 안에서 점/선 색을 즉시 갱신.",
    },
  },
  {
    id: "gradient-descent",
    title: "Gradient Descent를 손맛으로 익히기",
    period: "자기 학습 노트 · 시뮬레이터",
    tags: ["optimization", "loss", "intuition"],
    sections: [
      {
        heading: "연구·실습 이력",
        body:
          "선형/로지스틱 회귀의 비용함수, 1·2차 미분, 학습률(learning rate) 의 영향 등을 노트와 시각화로 정리했습니다. ‘큰 lr → 발산’, ‘작은 lr → 수렴 느림’ 같은 직관을 그림 없이 글로만 보면 잘 안 들어와서, 직접 굴려보는 데모로 보강했습니다.",
      },
      {
        heading: "어려웠던 점",
        body:
          "수식만 보면 ‘gradient = 기울기’ 라는 게 잡혀도, 실제 loss surface 가 비등방(anisotropic) 일 때 어디서 멈출지, local minima/saddle 에 갇히는지 감을 잡기 어려웠습니다.",
      },
      {
        heading: "극복·이해한 영역",
        body:
          "lr·모멘텀이 없는 단순 GD 부터 시뮬레이터를 만들어 ‘초기값에 따라 다른 골짜기로 빠진다’를 눈으로 확인했습니다. 나중에는 Adam/모멘텀 비교도 같은 그림에 얹는 식으로 확장할 수 있도록 인터페이스를 두었습니다.",
      },
    ],
    miniGame: {
      id: "loss-lander",
      title: "Loss Lander · 학습률 컨트롤러",
      pitch:
        "공을 손실(Loss) 곡선의 최저점에 안착시키는 미니 시뮬. 학습률 슬라이더가 너무 크면 튕겨나가고, 너무 작으면 시간 내 못 도착합니다.",
      rules: [
        "초기 위치는 곡선의 위쪽 어딘가에서 시작",
        "학습률 슬라이더를 조절해 굴리는 강도를 결정",
        "글로벌 미니멈(가장 낮은 지점) ±tolerance 안에 멈추면 클리어",
      ],
      performance:
        "`svg.createMotionPath` 로 공이 곡선 path 위를 따라가게 하고, `createTimer` 로 매 tick gradient × lr 만큼 진행률을 갱신. 발산 시 화면 흔들기(shake) 시퀀스.",
    },
  },
  {
    id: "data-decoder",
    title: "암호화된 노트를 한 줄씩 해제하기",
    period: "자기 학습 노트 · 인터랙션 실험",
    tags: ["anime.js", "scrambleText", "DX"],
    sections: [
      {
        heading: "연구·실습 이력",
        body:
          "Anime.js v4 의 새로운 `Text` 모듈(`splitText`, `scrambleText`)을 활용해, ‘읽는 사람이 한 줄씩 디크립트하며 내용을 발견’하는 인터랙션을 실험했습니다. 단순 fade-in 보다 ‘참여감’이 강해서 ML 노트의 핵심 포인트를 강조할 때 적합합니다.",
      },
      {
        heading: "어려웠던 점",
        body:
          "한국어·영문·기호가 섞인 문자열에서 scramble 의 문자 풀(charset) 을 한쪽으로만 두면 어색해집니다. 또 모바일에서 over-render 가 되면 60fps 가 깨지기 쉬워, 한 번에 활성화되는 라인 수 제한이 필요합니다.",
      },
      {
        heading: "극복·이해한 영역",
        body:
          "라인별 lazy 트리거(클릭 시 시작) + 한 번 해제되면 다시 재생되지 않도록 상태 잠금. charset 은 ML 어휘(`weights`, `bias`, `loss`, `epoch`) 로 만들어 의미상 어울리도록 했습니다.",
      },
    ],
    miniGame: {
      id: "scramble-decode",
      title: "Decryption · 한 줄씩 디크립트",
      pitch:
        "흐려진 ML 격언/메모를 클릭으로 한 줄씩 해제합니다. 모두 해제하면 마지막 한 줄에 보너스 메시지가 떠오릅니다.",
      rules: [
        "흐릿한 라인을 클릭하면 scrambleText 로 점진적 해제",
        "라인은 한 번 해제되면 잠김 — 다시 클릭해도 재생 안 됨",
        "전부 해제 시 hidden 라인 1개가 새로 등장",
      ],
      performance:
        "v4 의 `scrambleText({ chars, revealRate, settleDuration })` 활용. charset 을 ML 어휘로 커스터마이즈.",
    },
  },
];

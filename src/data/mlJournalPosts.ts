/**
 * 연구 노트(자기 학습 트랙) 카드 데이터.
 * 히어로: `ML_JOURNAL_HERO_MEDIA_ENABLED` 가 true 일 때만 렌더.
 * 파일은 public/learning/ 에 두고 아래 각 post 의 heroImage 주석 해제 후 경로 지정.
 */
export const ML_JOURNAL_HERO_MEDIA_ENABLED = false;

export interface MlJournalSection {
  heading: string;
  body: string;
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
}

export const ML_JOURNAL_POSTS: readonly MlJournalPost[] = [
  {
    id: "pandas-basics",
    title: "Pandas로 데이터 카드 형태까지 익히기",
    period: "자기 학습 노트 · 템플릿",
    tags: ["pandas", "EDA", "Jupyter"],
    // heroImage: "/learning/pandas-sample.png",
    // heroCaption:
    //   "`public/learning/pandas-sample.png` 등 실제 플롯·노트 캡처로 교체하세요.",
    sections: [
      {
        heading: "연구·실습 이력",
        body:
          "`DataFrame`·Series 인덱싱, `groupby`, `merge`, 결측(`fillna`, `dropna`), 기초 통계까지 반복 학습 노트와 소규모 CSV 실습 위주로 정리했습니다. 실무에서는 DB·CSV에서 뽑은 표를 같은 도구로 검증하는 흐름에 가까웩니다.",
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
  },
  {
    id: "sklearn-intro",
    title: "scikit-learn 학습 파이프라인과 평가",
    period: "자기 학습 노트 · 템플릿",
    tags: ["scikit-learn", "ML", "metrics"],
    // heroImage: "/learning/sklearn-sample.png",
    // heroCaption:
    //   "학습 곡선·혼동행렬 등은 `matplotlib` 플롯을 캡처해 같은 경로 이름으로 교체하면 됩니다.",
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
  },
];

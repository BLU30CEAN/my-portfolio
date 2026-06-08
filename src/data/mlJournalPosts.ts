/**
 * 학습 노트(자기 학습 트랙) 카드 데이터.
 * - QA/데이터 글: 구현 → 지표 → 스택 / ML 글: 해본 것 → 막혔던 점 → 정리한 것
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
    id: "playwright-qa-pipeline",
    title: "Playwright E2E + QA Dashboard",
    period: "2026 · TypeScript / Playwright",
    tags: ["Playwright", "E2E", "QA Dashboard", "CRA"],
    sections: [
      {
        heading: "구현",
        body:
          "CRA + HashRouter SPA에 Playwright 4 suite / 9 spec. `npm run test:e2e:export` → `public/data/qa-report.json` → `/qa` React dashboard. Home, Nav, Journal, QA route smoke coverage.",
      },
      {
        heading: "지표",
        body:
          "Pass rate 100% (9/9). Total runtime ~30s, 6 parallel workers. Suite split: Home 3, Navigation 2, Journal 2, QA Dashboard 2. Defect log + run history in static JSON.",
      },
      {
        heading: "스택",
        body:
          "Playwright, TypeScript, webServer env.PORT=3100, HashRouter `/#/path` goto pattern, JSON export script, no-cors visit webhook excluded from E2E assert.",
      },
    ],
  },
  {
    id: "github-heatmap-merge",
    title: "Multi-account GitHub + GitLab heatmap",
    period: "2026 · GitHub API / static export",
    tags: ["GitHub", "GitLab", "data-viz"],
    sections: [
      {
        heading: "구현",
        body:
          "Runtime merge: `BLU30CEAN` + `bbo14` via github-contributions-api, date-key sum, 4-level intensity rescale. GitLab: `npm run export:gitlab` → `public/data/gitlab-eunjun.json` (CORS bypass).",
      },
      {
        heading: "지표",
        body:
          "365-day grid, 52 weeks × 7 days, per-account chips with contribution count, loading skeleton + error fallback, public repo count via REST aggregate.",
      },
      {
        heading: "스택",
        body:
          "TanStack Query, GitHub REST, GitLab export script, styled-components heatmap cells, private project names omitted from JSON.",
      },
    ],
  },
  {
    id: "pandas-basics",
    title: "Pandas로 데이터의 결을 읽어 내기",
    period: "자기 학습 노트 · 기본기 다지기",
    tags: ["pandas", "EDA", "Jupyter"],
    sections: [
      {
        heading: "해본 것",
        body:
          "`DataFrame`·Series 인덱싱, `groupby`, `merge`, 결측 처리(`fillna`, `dropna`), 기초 통계까지 반복 학습 노트와 작은 CSV 실습으로 차근차근 익혔습니다. 실무에서는 DB·CSV에서 뽑은 표를 같은 도구로 검증해 보는 흐름에 가장 가깝습니다.",
      },
      {
        heading: "막혔던 점",
        body:
          "멀티 인덱스, `SettingWithCopyWarning`, `merge` 이후 행이 갑자기 늘어나는 원인 추적이 가장 까다로웠습니다. 화면에 ‘보이는 결과’와 실제 ‘메모리·참조’가 따로 움직일 때 디버깅이 오래 걸렸습니다.",
      },
      {
        heading: "정리한 것",
        body:
          "필요한 곳에는 `copy()`를 명시하고, 인덱스를 정렬한 뒤에 `merge`를 거는 식으로 흐름을 단순화했습니다. 체이닝 대신 중간 변수를 두어 단계 수를 줄이고, EDA 단계에서는 ‘변환 전후 행 수·결측 비율’을 항상 로그로 남기는 습관을 들였습니다.",
      },
    ],
    miniGame: {
      id: "cell-sorter",
      title: "Cell Sorter · Pandas 정렬·결측 처리 인터랙션",
      pitch:
        "Pandas의 `sort_values`와 `dropna` 오퍼레이션을 시각적으로 재현하는 드래그 앤 드롭 게임입니다. 흩어진 데이터 셀을 오름차순으로 정렬하고, `NaN` 값은 휴지통 영역으로 제거하여 클린 데이터셋을 완성하세요.",
      rules: [
        "셀을 드래그해 오름차순으로 슬롯에 정렬합니다",
        "`NaN` 카드는 휴지통(🗑) 영역으로 드래그해 제거합니다",
        "모든 셀이 정확한 순서로 정렬되면 폭죽 효과와 함께 정확도 100%가 표시됩니다",
      ],
      performance:
        "`createDraggable`과 `stagger` 애니메이션, `utils.snap`으로 슬롯에 자연스럽게 스냅되도록 구현했고, 완료 시 `createTimeline`으로 성공 연출을 더했습니다.",
    },
  },
  {
    id: "sklearn-intro",
    title: "scikit-learn으로 학습 파이프라인과 평가 익히기",
    period: "자기 학습 노트 · 모델 평가 기본기",
    tags: ["scikit-learn", "ML", "metrics"],
    sections: [
      {
        heading: "해본 것",
        body:
          "`train_test_split`, `StandardScaler`를 얹은 파이프라인, 회귀·분류 기본 알고리즘, 교차 검증까지 노트와 예제 코드로 차근차근 익혔습니다. 실무 AI 연동 흐름과 견주어 ‘오프라인 평가’가 어디까지 닿을 수 있는지 가늠하는 자리로 삼았습니다.",
      },
      {
        heading: "막혔던 점",
        body:
          "하이퍼파라미터와 과적합·과소적합 사이의 미묘한 경계, 클래스가 불균형한 데이터에서 정확도만 바라보다 빠지는 함정, 그리고 파이프라인 안에서 데이터 누수(leakage)가 생기지 않도록 분할 시점을 잡는 일이 가장 어려웠습니다.",
      },
      {
        heading: "정리한 것",
        body:
          "동일한 random seed와 동일한 분할을 고정해 두고, 검증 분할을 ‘파이프라인 가장 앞단’과 일치시키는 습관을 들였습니다. 평가 지표는 한 가지로 끝내지 않고, 과제 성격에 따라 ROC-AUC·F1·recall 등을 함께 살펴 균형을 맞췄습니다.",
      },
    ],
    miniGame: {
      id: "decision-boundary",
      title: "Decision Boundary · 실시간 분류 경계선 조정 체험",
      pitch:
        "Logistic Regression이나 Linear SVM의 결정 경계(decision boundary)를 마우스 인터랙션으로 직접 조정하는 시뮬레이터입니다. 빨강·파랑 두 클래스로 분포된 데이터 포인트를 경계선으로 정확히 분리하고, 실시간으로 정확도를 확인하세요.",
      rules: [
        "두 핸들을 드래그해 경계선의 위치와 각도를 조정합니다",
        "선의 위쪽은 파랑, 아래쪽은 빨강으로 자동 분류됩니다",
        "실시간 Accuracy가 100%에 도달하면 클리어 (일부 데이터는 의도적으로 완전 분리가 불가능합니다)",
      ],
      performance:
        "`createDraggable` 두 개로 선분의 양 끝점을 제어하고, 매 프레임 `utils.lerp`로 정확도 카운터를 부드럽게 보간합니다. SVG 내 점·선 색상은 즉시 반영됩니다.",
    },
  },
  {
    id: "gradient-descent",
    title: "Gradient Descent를 직접 굴려 보며 익히기",
    period: "자기 학습 노트 · 시뮬레이터로 다지는 직관",
    tags: ["optimization", "loss", "intuition"],
    sections: [
      {
        heading: "해본 것",
        body:
          "선형·로지스틱 회귀의 비용함수, 1·2차 미분, 학습률(learning rate)의 영향을 노트와 시각화로 정리했습니다. ‘학습률이 너무 크면 발산하고, 너무 작으면 수렴이 더디다’는 감각은 글로만 봐서는 잘 와닿지 않아, 직접 굴려 보는 데모로 보강했습니다.",
      },
      {
        heading: "막혔던 점",
        body:
          "수식만 들여다보면 ‘gradient = 기울기’라는 개념은 잡혀도, 실제 loss surface가 방향마다 기울기가 다른(비등방, anisotropic) 형태일 때는 어디서 멈출지, 지역 최솟값이나 안장점(saddle)에 갇히는 상황을 감으로 잡기 어려웠습니다.",
      },
      {
        heading: "정리한 것",
        body:
          "학습률만 적용한 가장 단순한 경사하강법부터 시뮬레이터로 만들어, ‘초기값에 따라 서로 다른 골짜기에 안착한다’는 사실을 눈으로 확인했습니다. 이후 Adam·모멘텀 같은 변형도 같은 화면에 얹어 비교할 수 있도록 인터페이스를 열어 두었습니다.",
      },
    ],
    miniGame: {
      id: "loss-lander",
      title: "Loss Navigator · 경사하강 파라미터 최적화 체험",
      pitch:
        "손실(Loss) 곡면 위에 놓인 공을 전역 최솟값으로 안착시키는 인터랙티브 시뮬레이터입니다. 학습률(learning rate)을 너무 크게 설정하면 발산하고, 너무 작으면 제한 시간 내 수렴하지 못합니다. 실제 gradient descent의 하이퍼파라미터 튜닝 감각을 손으로 익혀보세요.",
      rules: [
        "공의 초기 위치는 곡선 상단 임의 지점에 배치됩니다",
        "학습률 슬라이더를 실시간으로 조절해 하강 속도를 제어합니다",
        "전역 최솟값 ±허용 오차 범위 내 안착 시 클리어 (시간 제한 있음)",
      ],
      performance:
        "`svg.createMotionPath`로 공을 손실 곡선 위에 물리적으로 배치하고, `createTimer`로 매 틱마다 gradient × learning_rate 만큼 진행률을 갱신합니다. 발산 조건 감지 시 화면 shake 연출을 추가했습니다.",
    },
  },
  {
    id: "data-decoder",
    title: "흐려진 노트를 한 줄씩 풀어 가는 인터랙션",
    period: "자기 학습 노트 · 인터랙션 실험",
    tags: ["anime.js", "scrambleText", "DX"],
    sections: [
      {
        heading: "해본 것",
        body:
          "Anime.js v4가 새로 내놓은 `Text` 모듈(`splitText`, `scrambleText`)을 활용해, ‘읽는 사람이 한 줄씩 문장을 풀어 가며 내용을 발견한다’는 인터랙션을 만들어 봤습니다. 단순한 페이드인보다 손으로 참여하는 감각이 강해, ML 노트의 핵심 문장을 강조할 때 잘 어울렸습니다.",
      },
      {
        heading: "막혔던 점",
        body:
          "한국어·영문·기호가 섞인 문장에서 scramble에 쓰는 문자 풀(charset)을 한쪽 언어로만 두면 흐름이 어색해집니다. 또한 모바일에서 한 번에 너무 많은 라인을 그리면 60fps가 무너지기 쉬워, 동시에 움직이는 라인 수를 제한해야 했습니다.",
      },
      {
        heading: "정리한 것",
        body:
          "라인마다 클릭 시점에 시작하는 게으른 트리거(lazy trigger)를 두고, 한 번 풀린 라인은 다시 재생되지 않도록 상태를 잠가 두었습니다. 문자 풀은 `weights`, `bias`, `loss`, `epoch` 같은 ML 어휘로 직접 채워, 풀리는 동작 자체에서도 의미가 묻어나도록 다듬었습니다.",
      },
    ],
    miniGame: {
      id: "scramble-decode",
      title: "핵심 메모 · 한 줄씩 확인하기",
      pitch:
        "학습 노트에서 실제로 남겨 둔 핵심 문장을 가려 두었다가, 클릭하면 scrambleText 애니메이션과 함께 원문을 확인하는 인터랙션입니다. 난잡한 기호 대신 · 마스크로 가독성을 유지하고, 네 줄을 모두 열면 보너스 한마디가 나타납니다.",
      rules: [
        "가려진 라인(·)을 클릭하면 원문이 순서대로 드러납니다",
        "확인한 라인은 잠기며, 재클릭해도 다시 재생되지 않습니다",
        "네 줄 모두 확인하면 보너스 메시지가 나타납니다",
      ],
      performance:
        "잠금 상태는 구두점·공백을 유지한 · 마스크로 표시하고, `scrambleText` charset은 `·▪░▒`만 사용해 깨진 문자열처럼 보이지 않게 했습니다.",
    },
  },
];

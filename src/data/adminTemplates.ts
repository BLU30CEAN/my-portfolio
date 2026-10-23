export type AdminTemplateId = "three-column-ops" | "sidebar-catalog";

export type AdminKnowHow = {
  title: string;
  points: string[];
};

export type AdminTemplate = {
  id: AdminTemplateId;
  label: string;
  subtitle: string;
  knowHow: AdminKnowHow[];
  /** 파이프라인 추천 탭 id */
  recommendedTabs: string[];
};

export const ADMIN_TEMPLATES: AdminTemplate[] = [
  {
    id: "three-column-ops",
    label: "A · 3분할 운영 콘솔",
    subtitle: "좌 큐 · 중 작업 · 우 근거·설정 — HITL·감사형 업무에 맞춘 패턴",
    recommendedTabs: ["browse", "import", "schema", "audit"],
    knowHow: [
      {
        title: "조회·필터 고정",
        points: [
          "검색·탭·필터는 shrink-0 고정, 목록만 overflow-y-auto",
          "테이블 thead sticky는 목록 스크롤 구역 안에서만",
        ],
      },
      {
        title: "패널 sticky",
        points: [
          "블록 상세 L2/L3 설정 헤더는 스크롤과 분리",
          "우측 배지는 데이터 출처(카탈로그·DB·정책)만 짧게",
        ],
      },
      {
        title: "운영 완성도",
        points: [
          "로딩·에러·빈 상태를 같은 패턴으로",
          "overlay는 뷰포트 하단 잘림 없이 grow-up",
        ],
      },
    ],
  },
  {
    id: "sidebar-catalog",
    label: "B · 사이드바 + 카탈로그",
    subtitle: "좌 메뉴 · 중 카탈로그 · 우 Inspector — LLMOps·RBAC 확장형",
    recommendedTabs: ["browse", "import", "schema", "register"],
    knowHow: [
      {
        title: "RBAC·메뉴 그룹",
        points: [
          "page-groups 단위로 사이드바 묶음",
          "역할별 라우트 가드 + 빈 권한 안내",
        ],
      },
      {
        title: "카탈로그 CRUD",
        points: [
          "목록은 서버 페이지네이션·TanStack Table",
          "우측 Inspector에서 저장·배포 액션 분리",
        ],
      },
      {
        title: "대량 적재",
        points: [
          "CSV/Excel 헤더 → column_schema 자동 추론",
          "upsert 키 컬럼 지정으로 재등록·수정 반복",
        ],
      },
    ],
  },
];

export const WIZARD_STEPS = [
  {
    id: "purpose",
    title: "1 · 목적",
    question: "이 관리자 페이지가 주로 무엇을 하나요?",
    options: [
      { id: "ingest", label: "DB 적재·재등록", hint: "CSV/Excel 일괄 반영" },
      { id: "ops", label: "운영·검수(HITL)", hint: "큐·확정·감사" },
      { id: "catalog", label: "카탈로그·설정", hint: "CRUD + Inspector" },
    ],
  },
  {
    id: "layout",
    title: "2 · 레이아웃",
    question: "화면 골격을 고릅니다.",
    options: [
      { id: "three-column-ops", label: "A · 3분할 운영", hint: "큐·상세·근거" },
      { id: "sidebar-catalog", label: "B · 사이드바 카탈로그", hint: "메뉴·표·Inspector" },
    ],
  },
  {
    id: "data",
    title: "3 · 데이터",
    question: "데이터는 어떻게 들어오나요?",
    options: [
      { id: "file", label: "CSV / Excel", hint: "탭으로 가져오기·upsert" },
      { id: "form", label: "폼 수동 등록", hint: "단건 CRUD" },
      { id: "mixed", label: "혼합", hint: "적재 + 수동 보정" },
    ],
  },
  {
    id: "tabs",
    title: "4 · 탭 구성",
    question: "Data Hub에 켤 탭을 고릅니다.",
    multi: true,
    options: [
      { id: "schema", label: "스키마·테이블", hint: "엔티티 정의" },
      { id: "import", label: "가져오기", hint: "미리보기·모드" },
      { id: "browse", label: "조회", hint: "검색·목록" },
      { id: "register", label: "등록", hint: "단건 추가" },
      { id: "audit", label: "적재 이력", hint: "배치 결과" },
    ],
  },
] as const;

export type WizardAnswers = {
  purpose?: string;
  layout?: AdminTemplateId;
  data?: string;
  tabs: string[];
};

export function recommendFromWizard(answers: WizardAnswers): AdminTemplateId {
  if (answers.layout) return answers.layout;
  if (answers.purpose === "catalog") return "sidebar-catalog";
  return "three-column-ops";
}

export type ProjectTab = "professional" | "personal";

export type ProjectAction = {
  label: string;
  href: string;
  /** 외부 새 탭 / 내부 라우트 / 비활성 표시 */
  kind?: "external" | "disabled";
};

export type ProjectEntry = {
  tab: ProjectTab;
  title: string;
  description: string;
  tech: string[];
  actions?: ProjectAction[];
};

export const PROJECTS: ProjectEntry[] = [
  {
    tab: "professional",
    title: "AI 인터랙티브 메타휴먼 아바타 플랫폼",
    description:
      "HeyGen·LiveAvatar 등 실시간 AI 아바타 API와 연동해 STT → LLM(GPT-4o-mini/Claude 등) → TTS(ElevenLabs)·립싱크까지 오케스트레이션. UX 패턴은 채팅·음성과 동일 계열의 이벤트 처리에, 미디어는 화상통화와 맞닿은 WebRTC(WebSocket 오디오 포함) 흐름으로 구성했습니다.",
    tech: [
      "HeyGen",
      "LiveAvatar",
      "OpenAI",
      "ElevenLabs",
      "LiveKit",
      "WebRTC",
    ],
  },
  {
    tab: "professional",
    title: "앱인앱 주문채널",
    description:
      "React(TypeScript) 기반 앱인앱 주문채널 프론트엔드 구축과 Android Native 앱 WebView 연동을 주도. Spring Boot·PostgreSQL 주문 API, AWS EC2/Jenkins 배포 자동화, JWT 인증, NICE Payments/OKPOS 연동, Datadog·GA·GTM 분석까지 함께 구현했습니다.",
    tech: [
      "React",
      "TypeScript",
      "Spring Boot",
      "AWS",
      "DataDog",
      "GTM",
      "GA",
    ],
  },
  {
    tab: "professional",
    title: "LLM 오케스트레이션 API",
    description:
      "Spring Boot 메인 API와 Python FastAPI 기반 ML 서비스를 분리한 마이크로서비스 구조 설계. Swagger 문서화, 비동기 통신, Docker 배포를 통해 확장 가능한 백엔드 통합 환경을 구축했습니다.",
    tech: ["Java", "Spring Boot", "Python", "FastAPI"],
  },
  {
    tab: "professional",
    title: "AI 기반 LLM 서비스 Android Native 앱",
    description:
      "AI 기반 LLM 서비스의 Android Native 앱 기능 구현과 React(TypeScript) WebView 페이지 개발 담당. 앱-웹 브릿지, 네이티브 기능 연동, Zustand/Jotai 상태 관리, Tailwind CSS·Shadcn UI 기반 UI 구현으로 일관된 사용자 경험을 맞췄습니다.",
    tech: ["Android", "React", "TypeScript", "WebView"],
  },
  {
    tab: "professional",
    title: "결제 시스템 연동",
    description:
      "NICE Payments와 OKPOS 연동을 통해 주문-결제 흐름을 구현. 로그인 시 DB 조회를 최소화하고 JWT Access/Refresh Token 인증을 적용해 보안성과 응답 속도를 함께 개선했습니다.",
    tech: ["Java", "Spring Boot", "JWT", "Payments"],
  },
  {
    tab: "professional",
    title: "실시간 AI 상담 어시스턴트",
    description:
      "LLM 기반 실시간 상담 흐름을 설계하고, WebSocket 기반 대화 스트리밍과 프롬프트 히스토리 관리로 자연스러운 응답 품질을 개선했습니다.",
    tech: ["React", "TypeScript", "LLM", "WebSocket", "Prompt"],
  },
  {
    tab: "personal",
    title: "Find Carrot Game",
    description:
      "React와 TypeScript를 활용한 인터랙티브 게임. 사용자 경험을 중시한 UI/UX 디자인과 게임 로직 구현, 상태 관리 및 애니메이션 효과 적용.",
    tech: ["React", "TypeScript", "Styled Components", "Game Logic"],
    actions: [
      {
        label: "게임하기",
        href: "https://blu30cean.github.io/find-carrot",
        kind: "external",
      },
      {
        label: "코드보기",
        href: "https://github.com/BLU30CEAN/find-carrot",
        kind: "external",
      },
    ],
  },
  {
    tab: "personal",
    title: "Netflix Clone",
    description:
      "Netflix UI 참고 스트리밍 서비스 클론. 반응형 디자인과 모던 웹 기술 활용, 영화 데이터 관리 및 카테고리별 분류 시스템.",
    tech: ["React", "TypeScript", "Styled Components", "Responsive"],
    actions: [
      {
        label: "임시 비활성화",
        href: "#",
        kind: "disabled",
      },
      {
        label: "코드보기",
        href: "https://github.com/BLU30CEAN/netflix-clone",
        kind: "external",
      },
    ],
  },
  {
    tab: "personal",
    title: "Tetris Game",
    description:
      "클래식 테트리스를 React와 TypeScript로 구현. 게임 상태 관리, 키보드 이벤트 처리, 점수 시스템 등 완전한 게임 로직 구현.",
    tech: ["React", "TypeScript", "Game Logic", "State"],
    actions: [
      {
        label: "게임하기",
        href: "https://blu30cean.github.io/rabris",
        kind: "external",
      },
      {
        label: "코드보기",
        href: "https://github.com/BLU30CEAN/rabris",
        kind: "external",
      },
    ],
  },
  {
    tab: "personal",
    title: "KWB",
    description:
      "Korean Word Baseball — 포트폴리오에서 바로 실행할 수 있도록 붙인 한글 워드 야구 게임. 자모 입력, strike/ball/out 판정, 로컬 통계 저장, 새 게임 시작을 지원.",
    tech: [
      "React",
      "TypeScript",
      "Hangul Decomposition",
      "Keyboard Input",
    ],
    actions: [
      { label: "게임하기", href: "#/kwb", kind: "external" },
      {
        label: "코드보기",
        href: "https://github.com/BLU30CEAN/korean-baseball",
        kind: "external",
      },
    ],
  },
];

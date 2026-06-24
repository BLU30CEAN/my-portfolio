export type ProjectTab = "professional" | "personal";

export type ProjectAction = {
  label: string;
  href: string;
  /** 외부 새 탭 / public 정적 자산(같은 탭) / 내부 라우트 / 비활성 표시 */
  kind?: "external" | "asset" | "disabled";
};

export type ProjectEntry = {
  tab: ProjectTab;
  title: string;
  description: string;
  tech: string[];
  actions?: ProjectAction[];
  metrics?: Array<{
    icon: "trending" | "users" | "zap" | "target";
    label: string;
    value: string;
    color: string;
  }>;
};

export const PROJECTS: ProjectEntry[] = [
  {
    tab: "professional",
    title: "앱인앱 주문채널",
    description:
      "Spring Boot·PostgreSQL 주문/결제 E2E API 설계, NICE Payments·OKPOS PG 연동(승인·취소·콜백), JWT 인증, Datadog·GA·GTM 운영 모니터링까지 담당했습니다. React/TypeScript 프론트와 Android WebView 연동, AWS EC2·Jenkins 배포 자동화도 같은 채널 안에서 맞췄습니다.",
    tech: [
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "NICE Payments",
      "OKPOS",
      "Jenkins",
      "AWS",
      "React",
      "TypeScript",
      "DataDog",
      "GTM",
      "GA",
    ],
    metrics: [
      { icon: "users", label: "일 주문", value: "2,800+", color: "#667eea" },
      { icon: "zap", label: "로딩 속도", value: "0.8초", color: "#f093fb" },
      { icon: "trending", label: "전환율", value: "+32%", color: "#4facfe" },
      { icon: "target", label: "에러율", value: "0.3%", color: "#43e97b" },
    ],
  },
  {
    tab: "professional",
    title: "LLM 오케스트레이션 API",
    description:
      "Spring Boot 메인 API와 Python FastAPI 기반 ML 서비스를 별도 레인으로 분리한 마이크로서비스 구조를 직접 설계했습니다. Swagger 문서화, 비동기 통신, Docker 배포를 통해 새로운 모델·기능을 안정적으로 얹어 나갈 수 있는 백엔드 통합 환경을 마련했습니다.",
    tech: ["Java", "Spring Boot", "Python", "FastAPI", "PostgreSQL", "Docker", "Swagger", "Spring Batch"],
    metrics: [
      { icon: "zap", label: "처리 속도", value: "180ms", color: "#667eea" },
      { icon: "target", label: "가용성", value: "99.9%", color: "#43e97b" },
      { icon: "trending", label: "처리량", value: "5K req/m", color: "#4facfe" },
      { icon: "users", label: "모델 수", value: "8개", color: "#f093fb" },
    ],
  },
  {
    tab: "professional",
    title: "AI 인터랙티브 메타휴먼 아바타 플랫폼",
    description:
      "HeyGen·LiveAvatar 같은 실시간 AI 아바타 API와 연동해 STT → LLM(GPT-4o-mini·Claude 등) → ElevenLabs TTS·립싱크까지 이어지는 흐름을 오케스트레이션했습니다. UX는 채팅·음성과 같은 결의 이벤트 흐름으로 다듬고, 미디어는 화상통화와 맞닿은 WebRTC·WebSocket 오디오 패턴으로 구성했습니다.",
    tech: [
      "HeyGen",
      "LiveAvatar",
      "OpenAI",
      "ElevenLabs",
      "LiveKit",
      "WebRTC",
    ],
    metrics: [
      { icon: "zap", label: "응답 속도", value: "1.2초", color: "#667eea" },
      { icon: "users", label: "동시 접속", value: "500+", color: "#f093fb" },
      { icon: "trending", label: "만족도", value: "94%", color: "#4facfe" },
      { icon: "target", label: "안정성", value: "99.8%", color: "#43e97b" },
    ],
  },
  {
    tab: "professional",
    title: "AI 기반 LLM 서비스 Android Native 앱",
    description:
      "AI 기반 LLM 서비스의 Android Native 앱 기능 구현과 React(TypeScript) WebView 페이지 개발을 함께 담당했습니다. 앱·웹 브릿지 통신, 네이티브 기능 연동, Zustand·Jotai 상태 관리, Tailwind CSS·Shadcn UI 기반 화면 구성으로 어느 진입점에서든 일관된 사용자 경험을 제공했습니다.",
    tech: ["Android", "React", "TypeScript", "WebView"],
  },
  {
    tab: "professional",
    title: "결제 시스템 연동",
    description:
      "NICE Payments·OKPOS PG/VAN 연동으로 주문/결제 상태 전이, 승인·취소·정산·콜백 처리를 구현했습니다. JWT Access/Refresh Token 인증, PostgreSQL 정합성 확인, Datadog·API 로그 기반 RCA까지 같은 트랜잭션 흐름으로 맞췄습니다.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JWT", "NICE Payments", "OKPOS", "Swagger", "Datadog"],
  },
  {
    tab: "professional",
    title: "실시간 AI 상담 어시스턴트",
    description:
      "LLM 기반 실시간 상담 흐름을 설계하고, WebSocket 기반 대화 스트리밍과 프롬프트 히스토리 관리를 도입해 답변의 일관성과 자연스러움을 함께 다듬었습니다.",
    tech: ["React", "TypeScript", "LLM", "WebSocket", "Prompt"],
  },
  {
    tab: "personal",
    title: "Find Carrot Game",
    description:
      "React와 TypeScript로 만든 인터랙티브 미니게임입니다. 사용자 경험을 우선에 둔 UI·UX 설계, 단단한 게임 로직, 상태 관리, 애니메이션 연출을 한 화면에 담아 보았습니다.",
    tech: ["React", "TypeScript", "Styled Components", "Game Logic"],
    actions: [
      {
        label: "게임하러 가기",
        href: "https://blu30cean.github.io/find-carrot",
        kind: "external",
      },
      {
        label: "코드 살펴보기",
        href: "https://github.com/BLU30CEAN/find-carrot",
        kind: "external",
      },
    ],
  },
  {
    tab: "personal",
    title: "Netflix Clone",
    description:
      "Netflix의 UI 패턴을 참고해 만든 영화 스트리밍 서비스 클론입니다. 반응형 레이아웃과 모던 웹 기술을 기반으로 영화 데이터 관리와 카테고리별 분류 흐름까지 구현했습니다.",
    tech: ["React", "TypeScript", "Styled Components", "Responsive"],
    actions: [
      {
        label: "데모 점검 중",
        href: "#",
        kind: "disabled",
      },
      {
        label: "코드 살펴보기",
        href: "https://github.com/BLU30CEAN/netflix-clone",
        kind: "external",
      },
    ],
  },
  {
    tab: "personal",
    title: "Tetris Game",
    description:
      "클래식 테트리스를 React와 TypeScript로 다시 구현한 작업입니다. 게임 상태 관리, 키보드 이벤트 처리, 점수 시스템까지 게임 로직 전반을 빈틈없이 갖추었습니다.",
    tech: ["React", "TypeScript", "Game Logic", "State"],
    actions: [
      {
        label: "게임하러 가기",
        href: "https://blu30cean.github.io/rabris",
        kind: "external",
      },
      {
        label: "코드 살펴보기",
        href: "https://github.com/BLU30CEAN/rabris",
        kind: "external",
      },
    ],
  },
  {
    tab: "personal",
    title: "KWB",
    description:
      "Korean Word Baseball — 포트폴리오 안에서 바로 즐길 수 있도록 다듬은 한글 워드 야구 게임입니다. 자모 단위 입력, strike·ball·out 판정, 로컬 통계 저장, 새 게임 시작까지 모두 지원합니다.",
    tech: [
      "React",
      "TypeScript",
      "Hangul Decomposition",
      "Keyboard Input",
    ],
    actions: [
      { label: "게임하러 가기", href: "/kwb", kind: "external" },
      {
        label: "코드 살펴보기",
        href: "https://github.com/BLU30CEAN/korean-baseball",
        kind: "external",
      },
    ],
  },
  {
    tab: "personal",
    title: "pocket-poker",
    description:
      "GTO EV 미니 계산기 — 포지션·핸드·팟·상대 수로 거친 EV 근사를 계산하는 Phase 1 static 도구. 솔버 출력이 아닌 일상 직관 보강용.",
    tech: ["Vanilla JS", "CSS", "GTO", "Static Site"],
    actions: [
      {
        label: "체험하러 가기",
        href: `${process.env.PUBLIC_URL || ""}/pocket-poker/`,
        kind: "asset",
      },
      {
        label: "코드 살펴보기",
        href: "https://github.com/BLU30CEAN/pocket-poker",
        kind: "external",
      },
    ],
  },
];

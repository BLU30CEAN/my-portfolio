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
    title: "모두의 경찰관 LLMOps 플랫폼",
    description:
      "공공 온프레미스 전제. 추론은 vLLM, 에이전트는 DAG로 나눴다. 가드레일이 막으면 하위 LLM을 호출하지 않는다. FastAPI 실행 엔진, RAG, 배치 평가, Docker 환경 분리, 설치 런북을 직접 짰다. LLMOps 랩에서 그 판단을 눌러 볼 수 있다.",
    tech: [
      "FastAPI",
      "vLLM",
      "RAG",
      "LangGraph",
      "Langfuse",
      "Docker",
    ],
    actions: [
      { label: "LLMOps 랩 열기", href: "#/llmops-lab", kind: "external" },
    ],
  },
  {
    tab: "professional",
    title: "AI 인터랙티브 메타휴먼 아바타 플랫폼",
    description:
      "HeyGen, LiveAvatar 같은 실시간 AI 아바타 API와 연동해 Whisper STT, GPT-4o-mini(Claude 3.5), ElevenLabs TTS, 립싱크를 잇는 흐름을 오케스트레이션했습니다. UX는 채팅, 음성과 같은 결의 이벤트 흐름으로 다듬고, 미디어는 화상통화와 맞닿은 WebRTC, WebSocket 오디오 패턴으로 구성했습니다.",
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
      "React(TypeScript) 기반 앱인앱 주문채널 프론트엔드와 Android Native 앱의 WebView 연동을 직접 이끌었습니다. Spring Boot, PostgreSQL 주문 API, AWS EC2, Jenkins 배포 자동화, JWT 인증, NICE Payments, OKPOS 연동, Datadog, GA, GTM 분석 환경까지 한 흐름으로 정돈했습니다.",
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
      "LLM 호출 지연이 메인 API를 잡지 않게 Spring Boot와 FastAPI ML 레인을 나눴습니다. Swagger 계약, Docker 배포로 모델을 메인 트래픽과 분리해 올렸습니다.",
    tech: ["Java", "Spring Boot", "Python", "FastAPI"],
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
      "NICE Payments, OKPOS로 주문/결제 E2E를 이었고, 결제 성공 후 주문이 비던 이슈를 Datadog, API 로그, DB 대조로 기한 내 닫았습니다. JWT Access/Refresh로 로그인 시 불필요한 DB 조회를 줄였습니다.",
    tech: ["Java", "Spring Boot", "JWT", "Payments"],
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
    title: "Admin Studio (포트폴리오)",
    description:
      "개인 실험용 관리자 페이지 스튜디오. A/B 템플릿·단계별 파이프라인·CSV/Excel PostgreSQL 적재 허브를 CRA + FastAPI + Docker로 묶었다. Express 레거시(server/)와 API(api/)를 sibling으로 두는 경량 모노레포.",
    tech: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "CSV",
      "Excel",
    ],
    actions: [
      { label: "스튜디오 열기", href: "#/admin-studio", kind: "external" },
    ],
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
      { label: "게임하러 가기", href: "#/kwb", kind: "external" },
      {
        label: "코드 살펴보기",
        href: "https://github.com/BLU30CEAN/korean-baseball",
        kind: "external",
      },
    ],
  },
];

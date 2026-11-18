export const CAREER_TIMELINE = [
  {
    date: "2026.07 - 재직중",
    title: "C사 AI엔지니어링팀",
    description:
      "공공AX '모두의 경찰관'에서 Next.js 16 LLMOps 콘솔과 FastAPI 에이전트 플로우 실행 엔진을 전담 개발했습니다. React Flow DAG 캔버스, 가드레일, 배치 평가, RBAC 프리셋, Langfuse 트레이싱, RAG 모니터링, Docker/NCloud 환경 분리를 같은 저장소에서 운영 수준으로 다듬었습니다.",
  },
  {
    date: "2025.04 - 2026.06",
    title: "Y사",
    description:
      "React Native 앱에서 TanStack Query, Zustand, LiveKit, LiveAvatar 세션과 WebSocket, Firebase(FCM), WebView 오디오 파이프라인을 맡았습니다. 포털 레인에서는 Spring Boot 4(Java 21), MyBatis, Batch/Quartz, Thymeleaf, FastAPI 보조 레인에서는 multipart STT와 pydub PCM 처리를 함께 다뤘습니다.",
  },
  {
    date: "2024.04 - 2025.04",
    title: "앱인앱 주문채널 신규 구축",
    description:
      "React(TypeScript) 프론트엔드와 Spring Boot, PostgreSQL API를 설계하고, AWS EC2, Jenkins 배포 자동화, JWT 인증, PG·매장 POS 결제 연동을 직접 구현했습니다.",
  },
  {
    date: "2023.01 - 2024.03",
    title: "홈페이지 및 모바일 앱 운영",
    description:
      "고객, 임직원, 협력사 3종 앱을 유지보수하며 기능 개선과 JIRA, Confluence 요청에 대응했고, 서비스 중단 없는 운영 안정성을 함께 책임졌습니다.",
  },
  {
    date: "2022.08 - 2022.12",
    title: "SAP U4A ERP QA 모듈 구축",
    description:
      "ABAP과 SAP HANA Cloud 기반의 ERP QA 모듈을 개발하며, 보안 규율이 엄격한 환경에서의 협업 경험을 쌓았습니다.",
  },
  {
    date: "2021.05 - 2022.04",
    title: "결제 앱 솔루션 개발",
    description:
      "Java, JSP, Android 네이티브 앱을 기반으로 PG, VAN 결제 연동을 구현했습니다.",
  },
] as const;

export const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: [
      "React & TypeScript",
      "Next.js (App Router)",
      "React Native, Expo EAS",
      "Tailwind CSS, Radix(shadcn)",
      "React Flow",
      "Zustand",
      "TanStack Query",
      "i18next",
    ],
  },
  {
    category: "Backend & AI",
    skills: [
      "Java 21, Spring Boot 4, Maven",
      "MyBatis, MySQL",
      "Spring Security, Batch, Quartz",
      "Python, FastAPI, LangGraph, Langfuse",
      "vLLM, RAG, MCP, RBAC",
      "OpenAI / ElevenLabs / LiveAvatar / LiveKit",
      "pydub, multipart, JWT",
    ],
  },
  {
    category: "Mobile & Realtime",
    skills: [
      "React Native 0.83 / React 19",
      "LiveKit (Room, Track)",
      "WebSocket Custom Mode",
      "RN WebView",
      "Firebase (FCM), Notifee",
      "오디오 녹음, 스트리밍",
      "SSE/REST와 TanStack 동기화",
    ],
  },
  {
    category: "Database & Cloud",
    skills: [
      "PostgreSQL / MySQL / Redis",
      "AWS EC2 / S3",
      "Docker",
      "Jenkins",
      "Git / Linux",
    ],
  },
] as const;

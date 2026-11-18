export type DevReferenceEntry = {
  title: string;
  href: string;
  note: string;
  tag: string;
};

export const DEV_REFERENCE_ENTRIES: readonly DevReferenceEntry[] = [
  {
    tag: "UI",
    title: "React",
    href: "https://react.dev/",
    note: "훅과 컴포넌트 경계를 확인할 때.",
  },
  {
    tag: "Types",
    title: "TypeScript Handbook",
    href: "https://www.typescriptlang.org/docs/handbook/intro.html",
    note: "프론트와 백 타입을 맞출 때.",
  },
  {
    tag: "State",
    title: "Zustand",
    href: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    note: "앱과 웹뷰 사이 상태를 얇게 둘 때.",
  },
  {
    tag: "API",
    title: "OpenAPI Specification",
    href: "https://swagger.io/specification/",
    note: "REST 계약을 문서로 고정할 때.",
  },
  {
    tag: "Backend",
    title: "Spring Boot",
    href: "https://docs.spring.io/spring-boot/reference/index.html",
    note: "설정과 스타터, 배포 관례를 확인할 때.",
  },
  {
    tag: "Portal",
    title: "Spring Security",
    href: "https://docs.spring.io/spring-security/reference/index.html",
    note: "필터 체인과 인증 흐름을 확인할 때.",
  },
  {
    tag: "Data",
    title: "MyBatis 3",
    href: "https://mybatis.org/mybatis-3/index.html",
    note: "Mapper XML과 결과 매핑을 확인할 때.",
  },
  {
    tag: "DB",
    title: "MySQL",
    href: "https://dev.mysql.com/doc/",
    note: "SQL, 커넥터, 인덱스를 확인할 때.",
  },
  {
    tag: "ML API",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    note: "Python API와 OpenAPI 스키마를 맞출 때.",
  },
  {
    tag: "Agent",
    title: "React Flow",
    href: "https://reactflow.dev/learn",
    note: "캔버스 노드와 엣지, 레이아웃을 짤 때.",
  },
  {
    tag: "LLM",
    title: "vLLM",
    href: "https://docs.vllm.ai/en/latest/",
    note: "OpenAI 호환 서빙과 배치 옵션을 볼 때.",
  },
  {
    tag: "Agent",
    title: "LangChain",
    href: "https://python.langchain.com/docs/introduction/",
    note: "도구 연동과 체인 구성을 볼 때.",
  },
  {
    tag: "Obs",
    title: "Langfuse",
    href: "https://langfuse.com/docs",
    note: "트레이스, 평가, 데이터셋 연동을 볼 때.",
  },
  {
    tag: "Protocol",
    title: "Model Context Protocol",
    href: "https://modelcontextprotocol.io/introduction",
    note: "도구 서버와 클라이언트 계약을 볼 때.",
  },
  {
    tag: "DB",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/docs/current/",
    note: "쿼리, 인덱스, 트랜잭션을 확인할 때.",
  },
  {
    tag: "UI",
    title: "TanStack Query",
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
    note: "서버 상태 캐시와 재요청을 맞출 때.",
  },
  {
    tag: "UI",
    title: "Next.js",
    href: "https://nextjs.org/docs",
    note: "App Router와 Route Handler를 볼 때.",
  },
  {
    tag: "Mobile",
    title: "React Native",
    href: "https://reactnative.dev/docs/getting-started",
    note: "네이티브 모듈과 Metro 설정을 볼 때.",
  },
  {
    tag: "Runtime",
    title: "MDN WebSocket API",
    href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    note: "실시간 이벤트 채널을 붙일 때.",
  },
  {
    tag: "Media",
    title: "MDN WebRTC API",
    href: "https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",
    note: "미디어 스트림 계약을 확인할 때.",
  },
  {
    tag: "Real-time",
    title: "LiveKit",
    href: "https://docs.livekit.io/",
    note: "WebRTC 룸과 클라이언트 SDK를 볼 때.",
  },
  {
    tag: "AI",
    title: "OpenAI Speech to text",
    href: "https://platform.openai.com/docs/guides/speech-to-text",
    note: "음성 인식 호출 한도와 포맷을 볼 때.",
  },
  {
    tag: "AI",
    title: "OpenAI Text to speech",
    href: "https://platform.openai.com/docs/guides/text-to-speech",
    note: "음성 합성 출력 포맷을 볼 때.",
  },
  {
    tag: "AI",
    title: "OpenAI API Reference",
    href: "https://platform.openai.com/docs/api-reference",
    note: "챗 완성과 토큰 한도를 볼 때.",
  },
  {
    tag: "AI",
    title: "Anthropic Claude API",
    href: "https://docs.anthropic.com/en/api/getting-started",
    note: "메시지 API와 레이트리밋을 볼 때.",
  },
  {
    tag: "Voice",
    title: "ElevenLabs",
    href: "https://elevenlabs.io/docs",
    note: "TTS와 실시간 음성 API를 볼 때.",
  },
  {
    tag: "ML",
    title: "pandas",
    href: "https://pandas.pydata.org/docs/",
    note: "표 변환과 집계를 확인할 때.",
  },
  {
    tag: "ML",
    title: "scikit-learn User Guide",
    href: "https://scikit-learn.org/stable/user_guide.html",
    note: "파이프라인과 평가 지표를 볼 때.",
  },
  {
    tag: "Avatar",
    title: "HeyGen Developers",
    href: "https://developers.heygen.com/",
    note: "아바타 영상 생성 API를 붙일 때.",
  },
  {
    tag: "Avatar",
    title: "LiveAvatar",
    href: "https://docs.liveavatar.com/",
    note: "실시간 아바타 세션을 붙일 때.",
  },
  {
    tag: "Ops",
    title: "Docker",
    href: "https://docs.docker.com/",
    note: "이미지와 Compose 배포를 맞출 때.",
  },
  {
    tag: "Cloud",
    title: "AWS",
    href: "https://docs.aws.amazon.com/",
    note: "EC2와 권한 설정을 확인할 때.",
  },
];

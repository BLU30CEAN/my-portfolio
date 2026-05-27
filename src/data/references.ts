export type DevReferenceEntry = {
  title: string;
  href: string;
  note: string;
  tag: string;
};

export const DEV_REFERENCE_ENTRIES: readonly DevReferenceEntry[] = [
  {
    tag: "UI",
    title: "React (공식 문서)",
    href: "https://react.dev/",
    note: "컴포넌트·훅·동시성 렌더링 기준점.",
  },
  {
    tag: "Types",
    title: "TypeScript Handbook",
    href: "https://www.typescriptlang.org/docs/handbook/intro.html",
    note: "프론트·백 타입 안전 레이어링.",
  },
  {
    tag: "State",
    title: "Zustand 문서",
    href: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    note: "경량 클라 전역 상태(모바일·웹 브리지 포함).",
  },
  {
    tag: "API",
    title: "OpenAPI Specification (Swagger)",
    href: "https://swagger.io/specification/",
    note: "REST 계약과 문서 생성의 표준 레퍼런스.",
  },
  {
    tag: "Backend",
    title: "Spring Boot Reference",
    href: "https://docs.spring.io/spring-boot/reference/index.html",
    note: "엔터프라이즈 백엔드·설정 관례.",
  },
  {
    tag: "Portal",
    title: "Spring Security Reference",
    href: "https://docs.spring.io/spring-security/reference/index.html",
    note: "포털·REST 보안 필터·인증 모델 근거.",
  },
  {
    tag: "Data",
    title: "MyBatis 3 Reference",
    href: "https://mybatis.org/mybatis-3/index.html",
    note: "Spring 연동 프로젝트의 Mapper·XML 스펙.",
  },
  {
    tag: "DB",
    title: "MySQL Documentation",
    href: "https://dev.mysql.com/doc/",
    note: "커넥터·SQL·튜닝 레퍼런스 허브.",
  },
  {
    tag: "ML API",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    note: "Python 서비스·OpenAPI 노출 패턴.",
  },
  {
    tag: "DB",
    title: "PostgreSQL Documentation",
    href: "https://www.postgresql.org/docs/current/",
    note: "쿼리·인덱스·트랜잭션 설계 근거.",
  },
  {
    tag: "UI",
    title: "TanStack Query (React)",
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
    note: "서버 상태·캐시·재요청 정책 레퍼런스(프로젝트 의존성 기준).",
  },
  {
    tag: "UI",
    title: "Next.js Documentation",
    href: "https://nextjs.org/docs",
    note: "App Router·Route Handlers 레퍼런스(word-baseball 등).",
  },
  {
    tag: "Mobile",
    title: "React Native Documentation",
    href: "https://reactnative.dev/docs/getting-started",
    note: "네이티브 모듈·Metro 근거.",
  },
  {
    tag: "Runtime",
    title: "MDN — WebSocket API",
    href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    note: "실시간 이벤트 채널 구현 레퍼런스.",
  },
  {
    tag: "Media",
    title: "MDN — WebRTC API",
    href: "https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",
    note: "P2S/미디어 스트림 계약 확인.",
  },
  {
    tag: "Real-time",
    title: "LiveKit Docs",
    href: "https://docs.livekit.io/",
    note: "WebRTC 미디어 인프라·클라이언트 SDK.",
  },
  {
    tag: "AI",
    title: "OpenAI Platform — Speech to text",
    href: "https://platform.openai.com/docs/guides/speech-to-text",
    note: "STT 호출 규격·제한 확인.",
  },
  {
    tag: "AI",
    title: "OpenAI Platform — Text to speech",
    href: "https://platform.openai.com/docs/guides/text-to-speech",
    note: "TTS 출력 포맷·스트리밍 옵션.",
  },
  {
    tag: "AI",
    title: "OpenAI API Reference",
    href: "https://platform.openai.com/docs/api-reference",
    note: "챗·추론 요청 표준 레퍼런스.",
  },
  {
    tag: "AI",
    title: "Anthropic Claude API — Overview",
    href: "https://docs.anthropic.com/en/api/getting-started",
    note: "Claude 메시지 API·인증·레이트리밋 레퍼런스 허브.",
  },
  {
    tag: "Voice",
    title: "ElevenLabs Documentation",
    href: "https://elevenlabs.io/docs",
    note: "TTS 엔진·실시간 API 문서 허브.",
  },
  {
    tag: "ML",
    title: "pandas documentation",
    href: "https://pandas.pydata.org/docs/",
    note: "DataFrame·변환·집계 기준 레퍼런스.",
  },
  {
    tag: "ML",
    title: "scikit-learn User Guide",
    href: "https://scikit-learn.org/stable/user_guide.html",
    note: "전처리·파이프라인·평가 지표 레퍼런스.",
  },
  {
    tag: "Avatar",
    title: "HeyGen Developers",
    href: "https://developers.heygen.com/",
    note: "메타휴먼·비디오 생성·API(v3 등) 연동 기준.",
  },
  {
    tag: "Avatar",
    title: "LiveAvatar Documentation",
    href: "https://docs.liveavatar.com/",
    note: "실시간 세션·아바타 스트림 API(문서 허브).",
  },
  {
    tag: "Ops",
    title: "Docker Documentation",
    href: "https://docs.docker.com/",
    note: "배포 이식성·이미지·컴포즈 패턴.",
  },
  {
    tag: "Cloud",
    title: "AWS Documentation",
    href: "https://docs.aws.amazon.com/",
    note: "EC2 등 인프라·보안 레퍼런스 허브.",
  },
];

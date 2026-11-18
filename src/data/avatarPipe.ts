export type AvatarStageId = "stt" | "llm" | "tts" | "lip";

export type AvatarStage = {
  id: AvatarStageId;
  label: string;
  tool: string;
  sample: string;
};

export const AVATAR_STAGES: AvatarStage[] = [
  {
    id: "stt",
    label: "STT",
    tool: "Whisper",
    sample: "오늘 미팅 일정 다시 알려 줘.",
  },
  {
    id: "llm",
    label: "LLM",
    tool: "GPT-4o-mini / Claude",
    sample: "오늘 15시 제품 리뷰, 16시 정산 미팅이 있습니다.",
  },
  {
    id: "tts",
    label: "TTS",
    tool: "ElevenLabs",
    sample: "음성 스트림 16kHz, 지연 목표 500ms.",
  },
  {
    id: "lip",
    label: "립싱크",
    tool: "HeyGen / LiveAvatar",
    sample: "오디오 트랙에 맞춰 viseme 이벤트를 붙입니다.",
  },
];

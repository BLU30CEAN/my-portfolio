import { useCallback, useState } from "react";

type GuestbookPayload = {
  name: string;
  message: string;
  timestamp: string;
  source: string;
};

const WEBHOOK_URL = process.env.REACT_APP_GOOGLE_SCRIPT_WEBHOOK_URL || "";

/**
 * 방명록 폼 상태 + 제출 로직을 한 훅 안에 묶는다.
 * - webhook 가 있으면 no-cors POST.
 * - 실패하거나 webhook 미설정이면 localStorage 폴백.
 * - 항상 `submitting / error` 도 반환해 버튼 상태 제어 가능.
 */
export function useGuestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setName("");
    setMessage("");
  }, []);

  const submit = useCallback(async (): Promise<boolean> => {
    const trimmed = message.trim();
    if (!trimmed) {
      setError("메시지를 입력해주세요.");
      return false;
    }
    setError(null);
    setSubmitting(true);

    const payload: GuestbookPayload = {
      name: (name || "익명").trim().slice(0, 30),
      message: trimmed.slice(0, 500),
      timestamp: new Date().toISOString(),
      source: "static-web",
    };

    const saveLocal = () => {
      try {
        const list = JSON.parse(
          localStorage.getItem("guestbook") || "[]",
        ) as GuestbookPayload[];
        list.push(payload);
        localStorage.setItem("guestbook", JSON.stringify(list));
      } catch {
        /* 무시 */
      }
    };

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          body: JSON.stringify(payload),
          mode: "no-cors",
        });
      } else {
        saveLocal();
      }
      reset();
      return true;
    } catch (e) {
      saveLocal();
      reset();
      return true;
    } finally {
      setSubmitting(false);
    }
  }, [name, message, reset]);

  return {
    name,
    setName,
    message,
    setMessage,
    submitting,
    error,
    submit,
  };
}

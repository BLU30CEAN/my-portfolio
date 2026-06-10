import { useCallback, useMemo, useState } from "react";

const STORAGE_KEY = "qa_dashboard_unlocked_v1";

/** CRA 빌드에 포함 — REACT_APP_QA_PW (.env) */
const ADMIN_PASSWORD = (process.env.REACT_APP_QA_PW || "").trim();

export function useQAUnlock() {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [error, setError] = useState<string | null>(null);

  const passwordConfigured = useMemo(() => ADMIN_PASSWORD.length > 0, []);

  const unlock = useCallback((input: string) => {
    setError(null);
    const normalized = input.trim();
    if (!passwordConfigured) {
      setError(
        "관리자 비밀번호가 빌드에 포함되지 않았습니다. .env의 REACT_APP_QA_PW 설정 후 npm run build && npm run deploy 하세요.",
      );
      return false;
    }
    if (normalized !== ADMIN_PASSWORD) {
      setError("비밀번호가 일치하지 않습니다. .env의 REACT_APP_QA_PW와 동일한 값인지 확인하세요.");
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      setUnlocked(false);
      return false;
    }
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setUnlocked(true);
    return true;
  }, [passwordConfigured]);

  const lock = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setUnlocked(false);
    setError(null);
  }, []);

  return { unlocked, unlock, lock, error, passwordConfigured };
}

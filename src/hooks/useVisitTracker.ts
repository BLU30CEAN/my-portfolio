import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchClientIp } from "../utils/clientIp";
import {
  trackVisitToGoogleSheets,
  type VisitPayload,
} from "../utils/googleSheets";

const SESSION_FLAG = "portfolio_visit_tracked_v1";
const SESSION_ID_KEY = "portfolio_visit_session_id";

function getOrCreateSessionId(): string {
  try {
    const existing = sessionStorage.getItem(SESSION_ID_KEY);
    if (existing) return existing;
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `sess-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    sessionStorage.setItem(SESSION_ID_KEY, id);
    return id;
  } catch {
    return `sess-${Date.now()}`;
  }
}

function buildVisitPayload(path: string): VisitPayload {
  const viewport =
    typeof window !== "undefined"
      ? `${window.innerWidth}x${window.innerHeight}`
      : "";

  return {
    timestamp: new Date().toISOString(),
    path,
    referrer: typeof document !== "undefined" ? document.referrer : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    sessionId: getOrCreateSessionId(),
    viewport,
    clientIp: "",
  };
}

function currentPath(location: {
  pathname: string;
  search: string;
  hash: string;
}): string {
  return `${location.pathname}${location.search}${location.hash}` || "/";
}

/**
 * 앱 최초 진입 시 세션당 1회 Google Sheets 방문 로그 전송.
 */
export function useVisitTracker() {
  const location = useLocation();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_FLAG)) return;
      sessionStorage.setItem(SESSION_FLAG, "1");
    } catch {
      /* private mode 등 — 중복 전송 가능하나 기록 자체는 시도 */
    }

    void (async () => {
      const ip = await fetchClientIp();
      const payload: VisitPayload = {
        ...buildVisitPayload(currentPath(location)),
        clientIp: ip,
      };

      const ok = await trackVisitToGoogleSheets(payload);
      if (process.env.NODE_ENV === "development") {
        console.info(
          ok
            ? "[visit] Google Sheets 전송 시도 완료 (no-cors — 시트 직접 확인 필요)"
            : "[visit] 전송 스킵 또는 실패 — webhook URL·GAS trackVisit 핸들러 확인",
          payload,
        );
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- 세션 최초 1회만
  }, []);
}

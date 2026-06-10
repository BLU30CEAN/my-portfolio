interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export type VisitPayload = {
  timestamp: string;
  path: string;
  referrer: string;
  userAgent: string;
  sessionId: string;
  viewport: string;
  clientIp: string;
};

export type QAReportSheetPayload = {
  generatedAt: string;
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  passRate: number;
  openDefects: number;
  environment: string;
  durationMs: number;
};

const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_WEBHOOK_URL || "";

const postToGoogleScript = async (body: unknown): Promise<boolean> => {
  if (!GOOGLE_SCRIPT_URL) {
    return false;
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    if (response.type === "opaque") {
      return true;
    }

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error("[googleSheets] POST failed:", error);
    return false;
  }
};

export const submitToGoogleSheets = async (
  formData: ContactFormData,
): Promise<boolean> => {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn(
      "[googleSheets] REACT_APP_GOOGLE_SCRIPT_WEBHOOK_URL 미설정. 폴백 저장 스킵.",
    );
    return false;
  }

  return postToGoogleScript({
    action: "submitContact",
    data: formData,
  });
};

/** 사이트 진입 시 세션당 1회 — Google Sheets visits 시트에 기록 */
export const trackVisitToGoogleSheets = async (
  payload: VisitPayload,
): Promise<boolean> => {
  if (!GOOGLE_SCRIPT_URL) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[googleSheets] REACT_APP_GOOGLE_SCRIPT_WEBHOOK_URL 미설정. 방문 기록 스킵.",
      );
    }
    return false;
  }

  return postToGoogleScript({
    action: "trackVisit",
    data: payload,
  });
};

/** Playwright export 후 QA 요약 — Google Sheets qa_runs 시트에 1행 append */
export const syncQAReportToGoogleSheets = async (
  payload: QAReportSheetPayload,
): Promise<boolean> => {
  if (!GOOGLE_SCRIPT_URL) return false;
  return postToGoogleScript({
    action: "syncQAReport",
    data: payload,
  });
};

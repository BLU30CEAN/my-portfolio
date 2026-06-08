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

/* ============================================================================
 * Google Apps Script (Code.gs) — Sheet 저장 + Gmail 알림 + Telegram 알림 통합본
 * ----------------------------------------------------------------------------
 * 배포 절차:
 *  1) Google Sheets에서 "확장 프로그램 → Apps Script" 진입.
 *  2) 아래 코드 전체 붙여넣기.
 *  3) "프로젝트 설정 → 스크립트 속성"에서 키 등록:
 *     - NOTIFY_EMAIL    : 본인 Gmail 주소 (예: ej.an.company@gmail.com)
 *     - TG_BOT_TOKEN    : 텔레그램 BotFather에서 발급한 토큰 (선택)
 *     - TG_CHAT_ID      : 본인과 봇의 1:1 chat_id (선택)
 *     - SHEET_CONTACT   : Contact 시트 이름 (예: contact)
 *     - SHEET_GUESTBOOK : 방명록 시트 이름 (예: guestbook)
 *     - SHEET_VISITS    : 방문 로그 시트 이름 (예: visits)
 *  4) 배포 → 새 배포 → 유형 "웹 앱" → 액세스 권한 "모든 사용자".
 *  5) 발급된 /exec URL을 .env 의 REACT_APP_GOOGLE_SCRIPT_WEBHOOK_URL 에 입력.
 *
 * Telegram chat_id 받는 법:
 *  1) BotFather 에서 봇 생성 → token 확보.
 *  2) 본인 텔레그램에서 해당 봇과 1:1 대화창 열고 아무 메시지 1회 전송.
 *  3) 브라우저에서 https://api.telegram.org/bot<TOKEN>/getUpdates 호출.
 *  4) 응답의 message.chat.id 값이 chat_id.
 * ----------------------------------------------------------------------------
 *
 * function doPost(e) {
 *   try {
 *     const props = PropertiesService.getScriptProperties();
 *     const NOTIFY_EMAIL    = props.getProperty('NOTIFY_EMAIL') || '';
 *     const TG_BOT_TOKEN    = props.getProperty('TG_BOT_TOKEN') || '';
 *     const TG_CHAT_ID      = props.getProperty('TG_CHAT_ID') || '';
 *     const SHEET_CONTACT   = props.getProperty('SHEET_CONTACT') || 'contact';
 *     const SHEET_GUESTBOOK = props.getProperty('SHEET_GUESTBOOK') || 'guestbook';
 *     const SHEET_VISITS    = props.getProperty('SHEET_VISITS') || 'visits';
 *
 *     const ss = SpreadsheetApp.getActiveSpreadsheet();
 *     const body = JSON.parse(e.postData.contents);
 *
 *     // ---------- 방문 로그 (사이트 진입) ----------
 *     if (body.action === 'trackVisit') {
 *       const d = body.data || {};
 *       const sheet = ss.getSheetByName(SHEET_VISITS) || ss.insertSheet(SHEET_VISITS);
 *       if (sheet.getLastRow() === 0) {
 *         sheet.appendRow(['timestamp', 'path', 'referrer', 'userAgent', 'sessionId', 'viewport']);
 *       }
 *       sheet.appendRow([
 *         d.timestamp || new Date().toISOString(),
 *         d.path || '', d.referrer || '', d.userAgent || '',
 *         d.sessionId || '', d.viewport || '',
 *       ]);
 *       return json_({ success: true });
 *     }
 *
 *     // ---------- Contact 폼 ----------
 *     if (body.action === 'submitContact') {
 *       const d = body.data || {};
 *       const sheet = ss.getSheetByName(SHEET_CONTACT) || ss.insertSheet(SHEET_CONTACT);
 *       if (sheet.getLastRow() === 0) {
 *         sheet.appendRow(['timestamp', 'name', 'email', 'subject', 'message']);
 *       }
 *       sheet.appendRow([d.timestamp, d.name, d.email, d.subject || '', d.message || '']);
 *
 *       sendEmail_(NOTIFY_EMAIL, {
 *         subject: '[Portfolio Contact] ' + (d.subject || '(제목 없음)') + ' — ' + d.name,
 *         html:
 *           '<h3>새 문의 도착</h3>' +
 *           '<table style="border-collapse:collapse">' +
 *           row_('이름', d.name) + row_('이메일', d.email) +
 *           row_('제목', d.subject || '-') + row_('시각', d.timestamp) +
 *           '</table><hr><pre style="white-space:pre-wrap">' +
 *           escape_(d.message || '') + '</pre>',
 *         replyTo: d.email,
 *       });
 *
 *       sendTelegram_(TG_BOT_TOKEN, TG_CHAT_ID,
 *         '📬 *Contact*\n*' + esc_(d.name) + '* (' + esc_(d.email) + ')\n' +
 *         (d.subject ? '_' + esc_(d.subject) + '_\n' : '') +
 *         esc_((d.message || '').slice(0, 700))
 *       );
 *
 *       return json_({ success: true });
 *     }
 *
 *     // ---------- 방명록 ----------
 *     // server/index.js 에서 보내는 페이로드: { name, message, sourceIpHash, userAgent }
 *     // 클라이언트에서 직접 보내는 페이로드: { name, message, timestamp, source }
 *     if (body.message) {
 *       const sheet = ss.getSheetByName(SHEET_GUESTBOOK) || ss.insertSheet(SHEET_GUESTBOOK);
 *       if (sheet.getLastRow() === 0) {
 *         sheet.appendRow(['timestamp', 'name', 'message', 'source', 'sourceIpHash', 'userAgent']);
 *       }
 *       const ts = body.timestamp || new Date().toISOString();
 *       const id = Utilities.getUuid();
 *       sheet.appendRow([
 *         ts, body.name || '익명', body.message,
 *         body.source || '', body.sourceIpHash || '', body.userAgent || ''
 *       ]);
 *
 *       sendEmail_(NOTIFY_EMAIL, {
 *         subject: '[Portfolio Guestbook] ' + (body.name || '익명'),
 *         html:
 *           '<h3>새 방명록</h3>' +
 *           '<table style="border-collapse:collapse">' +
 *           row_('이름', body.name || '익명') + row_('시각', ts) +
 *           '</table><hr><pre style="white-space:pre-wrap">' +
 *           escape_(body.message) + '</pre>',
 *       });
 *
 *       sendTelegram_(TG_BOT_TOKEN, TG_CHAT_ID,
 *         '💝 *Guestbook*\n*' + esc_(body.name || '익명') + '*\n' +
 *         esc_(body.message.slice(0, 700))
 *       );
 *
 *       return json_({ success: true, ok: true, id: id });
 *     }
 *
 *     return json_({ success: false, error: 'Unknown action' });
 *   } catch (err) {
 *     return json_({ success: false, ok: false, error: String(err) });
 *   }
 * }
 *
 * function doGet() { return json_({ status: 'OK' }); }
 *
 * function sendEmail_(to, opts) {
 *   if (!to) return;
 *   try {
 *     MailApp.sendEmail({
 *       to: to,
 *       subject: opts.subject,
 *       htmlBody: opts.html,
 *       replyTo: opts.replyTo || undefined,
 *       name: 'Portfolio Notify',
 *     });
 *   } catch (e) { console.error('Mail fail', e); }
 * }
 *
 * function sendTelegram_(token, chatId, text) {
 *   if (!token || !chatId) return;
 *   try {
 *     UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
 *       method: 'post',
 *       contentType: 'application/json',
 *       payload: JSON.stringify({
 *         chat_id: chatId,
 *         text: text,
 *         parse_mode: 'Markdown',
 *         disable_web_page_preview: true,
 *       }),
 *       muteHttpExceptions: true,
 *     });
 *   } catch (e) { console.error('Telegram fail', e); }
 * }
 *
 * function row_(k, v) {
 *   return '<tr><td style="padding:4px 10px;border:1px solid #ddd"><b>' +
 *     escape_(k) + '</b></td><td style="padding:4px 10px;border:1px solid #ddd">' +
 *     escape_(v) + '</td></tr>';
 * }
 * function escape_(s) {
 *   return String(s == null ? '' : s)
 *     .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
 * }
 * function esc_(s) {
 *   return String(s == null ? '' : s).replace(/([_*`\[\]()])/g, '\\$1');
 * }
 * function json_(o) {
 *   return ContentService
 *     .createTextOutput(JSON.stringify(o))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 * ============================================================================
 */

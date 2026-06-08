/** 공인 IP 조회 — GAS 방문 로그용. 실패 시 빈 문자열 */
export async function fetchClientIp(): Promise<string> {
  try {
    const ctrl = new AbortController();
    const timer = window.setTimeout(() => ctrl.abort(), 3500);
    const res = await fetch("https://api.ipify.org?format=json", {
      signal: ctrl.signal,
    });
    window.clearTimeout(timer);
    if (!res.ok) return "";
    const json = (await res.json()) as { ip?: string };
    return json.ip?.trim() || "";
  } catch {
    return "";
  }
}

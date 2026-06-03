#!/usr/bin/env node
/**
 * GitLab (자체 호스트) contribution → JSON export
 *
 * 사용법 (VPN/사내망 연결 후):
 *   npm run export:gitlab
 *   (.env.local 또는 .env 에 GITLAB_TOKEN 설정)
 *
 * 토큰: git.utopsoft.co.kr → Preferences → Access Tokens
 *   scope: read_api (또는 api)
 */

import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import https from "node:https";
import { URL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_PATH = join(ROOT, "public/data/gitlab-eunjun.json");

/** CRA는 .env를 자동 로드하지만, node 스크립트는 직접 읽어야 함 (.env.local 우선) */
function loadEnvFiles() {
  const merged = {};

  for (const name of [".env", ".env.local"]) {
    const path = join(ROOT, name);
    if (!existsSync(path)) continue;
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq <= 0) continue;
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      merged[key] = val;
    }
  }

  for (const [key, val] of Object.entries(merged)) {
    process.env[key] = val;
  }
}

loadEnvFiles();

const GITLAB_URL = (process.env.GITLAB_URL || "https://git.utopsoft.co.kr").replace(
  /\/$/,
  "",
);
const GITLAB_USERNAME = process.env.GITLAB_USERNAME || "eunjun";
const GITLAB_TOKEN = (process.env.GITLAB_TOKEN || "").trim();

const TLS_INSECURE =
  process.env.GITLAB_TLS_INSECURE === "1" ||
  process.env.GITLAB_TLS_INSECURE === "true";

/** glpat- 토큰은 Bearer, 구형은 PRIVATE-TOKEN — 둘 다 전송 */
function authHeaders() {
  if (!GITLAB_TOKEN) return {};
  return {
    "PRIVATE-TOKEN": GITLAB_TOKEN,
    Authorization: `Bearer ${GITLAB_TOKEN}`,
  };
}

/** 사내 자체서명 인증서 GitLab — GITLAB_TLS_INSECURE=1 (.env.local) */
const httpsAgent = TLS_INSECURE
  ? new https.Agent({ rejectUnauthorized: false })
  : undefined;

function httpsGet(urlStr, reqHeaders = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const req = https.request(
      {
        hostname: url.hostname,
        port: url.port || 443,
        path: `${url.pathname}${url.search}`,
        method: "GET",
        headers: { ...authHeaders(), ...reqHeaders },
        agent: httpsAgent,
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          resolve({ status: res.statusCode ?? 0, body });
        });
      },
    );
    req.on("error", reject);
    req.end();
  });
}

async function fetchJson(url) {
  const { status, body } = await httpsGet(url);
  if (status === 401) {
    throw new Error(
      `401 Unauthorized — 토큰이 거부되었습니다.\n` +
        `  · Access Token scope: read_api 또는 api 체크\n` +
        `  · 만료되지 않았는지 확인 후 .env.local GITLAB_TOKEN 갱신\n` +
        `  · URL: ${url}`,
    );
  }
  if (status >= 400) {
    throw new Error(`${status} ${url}\n${body.slice(0, 200)}`);
  }
  return JSON.parse(body);
}

async function gitlabFetch(url) {
  return httpsGet(url);
}

/** /users?username= 은 관리자만 가능한 인스턴스가 많음 → /user 사용 */
async function resolveCurrentUser() {
  const user = await fetchJson(`${GITLAB_URL}/api/v4/user`);
  if (!user?.id) {
    throw new Error("GitLab /api/v4/user 응답에 user id 없음");
  }
  if (
    GITLAB_USERNAME &&
    user.username &&
    user.username.toLowerCase() !== GITLAB_USERNAME.toLowerCase()
  ) {
    console.warn(
      `⚠ 토큰 계정 @${user.username} ≠ GITLAB_USERNAME @${GITLAB_USERNAME} — 토큰 소유자 기준으로 export`,
    );
  }
  return user;
}

/** calendar.json — GitLab 프로필 히트맵과 동일한 일별 count */
async function fetchCalendarJson(username) {
  const url = `${GITLAB_URL}/users/${username}/calendar.json`;
  const { status, body } = await gitlabFetch(url);
  if (status >= 400) return null;
  const data = JSON.parse(body);
  if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
    return null;
  }
  return data;
}

/** 본인 events — /users/:id/events 는 admin 전용인 경우가 많음 */
async function fetchEventsByDate() {
  const after = new Date();
  after.setFullYear(after.getFullYear() - 1);
  const afterIso = after.toISOString();

  const byDate = new Map();
  let page = 1;

  while (page <= 50) {
    const url = `${GITLAB_URL}/api/v4/events?after=${afterIso}&per_page=100&page=${page}`;
    const events = await fetchJson(url);
    if (!Array.isArray(events) || events.length === 0) break;

    for (const ev of events) {
      if (!ev.created_at) continue;
      const date = ev.created_at.slice(0, 10);
      byDate.set(date, (byDate.get(date) ?? 0) + 1);
    }

    if (events.length < 100) break;
    page += 1;
  }

  return Object.fromEntries(byDate);
}

function toContributionArray(calendarMap) {
  const dates = Object.keys(calendarMap).sort();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const cutoff = oneYearAgo.toISOString().slice(0, 10);

  return dates
    .filter((d) => d >= cutoff)
    .map((date) => ({
      date,
      count: Number(calendarMap[date]) || 0,
    }))
    .filter((d) => d.count > 0);
}

async function main() {
  if (!GITLAB_TOKEN) {
    console.error(
      "GITLAB_TOKEN 이 필요합니다.\n" +
        "  git.utopsoft.co.kr → Preferences → Access Tokens → read_api\n" +
        "  GITLAB_TOKEN=xxx npm run export:gitlab",
    );
    process.exit(1);
  }

  console.log(`GitLab: ${GITLAB_URL} (@${GITLAB_USERNAME})`);
  if (TLS_INSECURE) {
    console.warn("⚠ GITLAB_TLS_INSECURE=1 — 사내 CA 미신뢰 모드 (export 전용)");
  }

  const user = await resolveCurrentUser();
  console.log(`User id: ${user.id} (@${user.username}, ${user.name})`);

  const calendarUser = user.username || GITLAB_USERNAME;
  let calendarMap = await fetchCalendarJson(calendarUser);
  let method = "calendar.json";

  if (!calendarMap) {
    console.log("calendar.json 비어 있음 → /api/v4/events fallback");
    calendarMap = await fetchEventsByDate();
    method = "events-api";
  }

  const contributions = toContributionArray(calendarMap);
  const total = contributions.reduce((s, d) => s + d.count, 0);

  const payload = {
    source: "gitlab",
    username: calendarUser,
    profileUrl: `${GITLAB_URL}/${calendarUser}`,
    exportedAt: new Date().toISOString(),
    method,
    note: "Issues, merge requests, pushes, comments (GitLab profile 기준)",
    total,
    contributions,
  };

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(payload, null, 2), "utf8");

  console.log(`\n✓ ${contributions.length} active days, ${total} total contributions`);
  console.log(`✓ Saved: public/data/gitlab-eunjun.json`);
  console.log("\n다음: npm run build && npm run deploy");
}

main().catch((err) => {
  const msg = err.cause?.message || err.message || String(err);
  console.error(msg);
  if (msg.includes("certificate") || msg.includes("UNABLE_TO_VERIFY")) {
    console.error(
      "\n→ 사내 GitLab 자체서명 인증서 문제입니다.\n" +
        "   .env.local 에 GITLAB_TLS_INSECURE=1 추가 후 다시 실행하거나,\n" +
        "   node --use-system-ca 로 실행해 보세요.",
    );
  } else if (msg.includes("fetch failed") || msg.includes("ENOTFOUND") || msg.includes("ECONNREFUSED")) {
    console.error("\n→ VPN/사내망 연결 후 다시 실행해 주세요.");
  }
  process.exit(1);
});

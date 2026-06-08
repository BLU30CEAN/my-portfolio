/**
 * Playwright JSON 리포트 → public/data/qa-report.json
 * 사용: npm run test:e2e:export
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnvFiles, resolveWebhookUrl } from "./load-env.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const INPUT = path.join(ROOT, "test-results", "playwright-results.json");
const OUTPUT = path.join(ROOT, "public", "data", "qa-report.json");
const HISTORY_MAX = 24;

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 48);
}

function inferSeverity(file, title) {
  const hay = `${file} ${title}`.toLowerCase();
  if (hay.includes("navigation") || hay.includes("home")) return "critical";
  if (hay.includes("journal") || hay.includes("qa")) return "major";
  return "minor";
}

function collectTests(suite, fileHint = "") {
  const rows = [];
  const file = suite.file || fileHint;

  for (const spec of suite.specs || []) {
    for (const test of spec.tests || []) {
      const result = test.results?.[test.results.length - 1];
      if (!result) continue;
      rows.push({
        suite: suite.title || path.basename(file || "unknown"),
        title: spec.title,
        file: file || "unknown",
        status: result.status,
        durationMs: result.duration ?? 0,
        message: result.error?.message?.split("\n")[0] || "",
      });
    }
  }

  for (const child of suite.suites || []) {
    rows.push(...collectTests(child, file || child.file));
  }

  return rows;
}

function groupSuites(tests) {
  const map = new Map();

  for (const t of tests) {
    const key = t.file;
    if (!map.has(key)) {
      map.set(key, {
        id: slugify(path.basename(key, path.extname(key))),
        name: t.suite,
        file: key,
        passed: 0,
        failed: 0,
        skipped: 0,
        durationMs: 0,
      });
    }
    const row = map.get(key);
    row.durationMs += t.durationMs;
    if (t.status === "passed" || t.status === "expected") row.passed += 1;
    else if (t.status === "skipped") row.skipped += 1;
    else row.failed += 1;
  }

  return Array.from(map.values());
}

function buildDefects(tests, runAt, previous = []) {
  const prevMap = new Map(previous.map((d) => [d.id, d]));
  const defects = [];

  for (const t of tests) {
    const id = slugify(`${t.file}-${t.title}`);
    const prev = prevMap.get(id);
    const failed = !["passed", "expected", "skipped"].includes(t.status);

    if (!failed && prev?.status === "open") {
      defects.push({
        ...prev,
        status: "resolved",
        lastSeen: runAt,
        resolvedAt: runAt,
      });
      continue;
    }

    if (failed) {
      defects.push({
        id,
        suite: t.suite,
        title: t.title,
        file: t.file,
        severity: inferSeverity(t.file, t.title),
        status: "open",
        message: t.message,
        firstSeen: prev?.firstSeen || runAt,
        lastSeen: runAt,
        resolvedAt: null,
      });
    } else if (prev && prev.status === "resolved") {
      defects.push(prev);
    }
  }

  return defects.sort((a, b) => {
    const rank = { critical: 0, major: 1, minor: 2 };
    return rank[a.severity] - rank[b.severity];
  });
}

async function syncToGoogleSheets(payload) {
  const url = resolveWebhookUrl();
  if (!url) {
    console.warn(
      "[export-qa-report] GOOGLE_SCRIPT_WEBHOOK_URL 미설정 — Sheets 동기화 스킵",
    );
    return;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "syncQAReport", data: payload }),
    });
    const text = await res.text();
    if (!res.ok) {
      console.warn("[export-qa-report] Sheets sync HTTP", res.status, text);
      return;
    }
    console.log("[export-qa-report] Sheets qa_runs + stats 동기화 완료");
  } catch (err) {
    console.warn("[export-qa-report] Sheets sync failed:", err);
  }
}

async function main() {
  loadEnvFiles();

  if (!fs.existsSync(INPUT)) {
    console.error(`[export-qa-report] missing ${INPUT} — run playwright test first`);
    process.exit(1);
  }

  const report = readJson(INPUT);
  const runAt = new Date().toISOString();
  const tests = (report.suites || []).flatMap((s) => collectTests(s));

  const total = tests.length;
  const passed = tests.filter((t) =>
    ["passed", "expected"].includes(t.status),
  ).length;
  const failed = tests.filter((t) =>
    ["failed", "timedOut", "interrupted", "unexpected"].includes(t.status),
  ).length;
  const skipped = tests.filter((t) => t.status === "skipped").length;
  const durationMs = tests.reduce((sum, t) => sum + t.durationMs, 0);
  const passRate = total > 0 ? Math.round((passed / total) * 1000) / 10 : 0;

  let previous = { history: [], defects: [] };
  if (fs.existsSync(OUTPUT)) {
    try {
      previous = readJson(OUTPUT);
    } catch {
      /* fresh */
    }
  }

  const historyEntry = { runAt, total, passed, failed, passRate };
  const history = [historyEntry, ...(previous.history || [])].slice(
    0,
    HISTORY_MAX,
  );

  const payload = {
    schemaVersion: 1,
    generatedAt: runAt,
    runner: "playwright",
    environment: process.env.CI ? "ci" : "local",
    summary: {
      total,
      passed,
      failed,
      skipped,
      flaky: 0,
      durationMs,
      passRate,
    },
    suites: groupSuites(tests),
    defects: buildDefects(tests, runAt, previous.defects || []),
    history,
  };

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(
    `[export-qa-report] wrote ${OUTPUT} — ${passed}/${total} passed (${passRate}%)`,
  );

  const openDefects = payload.defects.filter((d) => d.status === "open").length;
  await syncToGoogleSheets({
    generatedAt: runAt,
    total,
    passed,
    failed,
    skipped,
    passRate,
    openDefects,
    environment: payload.environment,
    durationMs,
  });
}

main();

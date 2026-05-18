/**
 * 기술 스택 아이콘 URL 상태 점검 (HEAD 우선).
 * 실행: npm run verify:tech-icons
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const jsonPath = join(__dirname, "..", "src", "data", "techStackCategories.json");
const categories = JSON.parse(readFileSync(jsonPath, "utf8"));

/** @type {string[]} */
const urls = [];
for (const cat of categories) {
  for (const t of cat.technologies) {
    if (t.image && typeof t.image === "string" && !t.image.startsWith("data:")) {
      urls.push(t.image);
    }
  }
}

async function statusFor(url) {
  try {
    const head = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    if (head.ok || head.status === 200 || head.status === 301 || head.status === 302) {
      return head.status;
    }
    const get = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
      headers: { Range: "bytes=0-0" },
    });
    return get.status;
  } catch (e) {
    return `ERR:${e?.cause?.code ?? e.message}`;
  }
}

let failed = false;
console.log(`Checking ${urls.length} remote icon URLs...\n`);

for (const url of urls) {
  const s = await statusFor(url);
  const ok =
    typeof s === "number" && (s === 200 || s === 204 || (s >= 200 && s < 400));
  if (!ok) {
    console.error(`FAIL [${s}] ${url}`);
    failed = true;
  } else {
    console.log(`OK   [${s}] ${url.slice(0, 88)}${url.length > 88 ? "…" : ""}`);
  }
}

if (!failed) {
  console.log("\nAll tech stack CDN URLs responded OK.");
} else {
  console.error("\nSome URLs failed. Update src/data/techStackCategories.json.");
  process.exit(1);
}

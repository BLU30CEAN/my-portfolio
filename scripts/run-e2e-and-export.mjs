import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const e2e = spawnSync("npx", ["playwright", "test"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: { ...process.env, PORT: process.env.PORT || "3100" },
});

spawnSync("node", [path.join(__dirname, "export-qa-report.mjs")], {
  cwd: root,
  stdio: "inherit",
  shell: true,
});

process.exit(e2e.status === 0 ? 0 : 1);

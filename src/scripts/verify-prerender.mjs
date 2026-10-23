import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { PRERENDER_ROUTES } = require("../seo/routes.cjs");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const distDir = path.join(root, "dist");

/** Expected JobPosting JSON-LD objects in prerendered HTML (from jobs.ts eligibility). */
const EXPECTED_JOB_POSTING = {
  "/careers": 0,
  "/careers/data-entry-remote-job": 0,
  "/careers/data-entry-jobs-remote": 1,
  "/careers/digital-marketing-executive-job": 1,
  "/careers/content-writer-job": 0,
  "/careers/seo-executive-job": 0,
  "/careers/ui-ux-designer-job": 0,
  "/blog/career/how-to-get-remote-data-entry-jobs-in-india": 0,
  "/blog/career/data-entry-skills-for-beginners": 0,
  "/blog/career/how-to-check-if-remote-data-entry-job-is-legit": 0,
};

let failures = 0;

for (const route of PRERENDER_ROUTES) {
  const file = path.join(distDir, `${route.replace(/^\//, "")}.html`);
  if (!fs.existsSync(file)) {
    console.error(`missing prerender file: ${route} (${file})`);
    failures++;
    continue;
  }

  const html = fs.readFileSync(file, "utf8");
  const rootMarker = '<div id="root">';
  const rootOpen = html.indexOf(rootMarker);
  const bodyClose = html.indexOf("</body>");
  const rootClose = html.lastIndexOf("</div>", bodyClose);
  const rootHtml =
    rootOpen >= 0 && rootClose > rootOpen
      ? html.slice(rootOpen + rootMarker.length, rootClose).trim()
      : "";
  const canonicals = [...html.matchAll(/rel="canonical"\s+href="([^"]+)"/g)].map((m) => m[1]);
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const jobPostingCount = (html.match(/"@type":"JobPosting"/g) || []).length;
  const expected = EXPECTED_JOB_POSTING[route] ?? 0;

  const checks = [
    [rootHtml.length > 200, "non-empty #root"],
    [canonicals.length === 1, `one canonical (found ${canonicals.length})`],
    [h1Count === 1, `one h1 (found ${h1Count})`],
    [jobPostingCount === expected, `JobPosting count ${jobPostingCount} (expected ${expected})`],
    [!html.includes('"@type":"JobPosting"') || route.startsWith("/careers/"), "JobPosting only on job pages"],
  ];

  for (const [ok, label] of checks) {
    if (!ok) {
      console.error(`${route}: failed — ${label}`);
      failures++;
    }
  }
}

if (failures) {
  console.error(`verify-prerender: ${failures} check(s) failed`);
  process.exit(1);
}

console.log(`verify-prerender: OK (${PRERENDER_ROUTES.length} routes)`);

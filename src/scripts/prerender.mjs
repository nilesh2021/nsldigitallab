import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { PRERENDER_ROUTES } = require("../seo/routes.cjs");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
const { render } = await import(pathToFileURL(ssrEntry).href);

let failures = 0;

for (const route of PRERENDER_ROUTES) {
  try {
    const { html, head } = render(route);

    if (!html.trim()) throw new Error("empty render");

    const page = template
      .replace(/<title>[^<]*<\/title>\s*/i, "")
      .replace("</head>", `${head}\n</head>`)
      .replace(/<div id="root">\s*<\/div>/, `<div id="root">${html}</div>`);

    // `/careers/x` -> dist/careers/x.html, served by Vercel `cleanUrls`.
    const outFile = path.join(distDir, `${route.replace(/^\//, "")}.html`);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, page);

    const jsonLd = (page.match(/application\/ld\+json/g) || []).length;
    console.log(`prerendered ${route} (${jsonLd} JSON-LD)`);
  } catch (error) {
    failures++;
    console.error(`prerender failed for ${route}:`, error);
  }
}

if (failures) {
  console.error(`${failures} route(s) failed to prerender`);
  process.exit(1);
}

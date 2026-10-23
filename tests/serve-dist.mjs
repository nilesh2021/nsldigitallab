// Local stand-in for Vercel static routing with `cleanUrls`:
// exact file -> `<path>.html` -> SPA fallback to /index.html.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".json": "application/json" };

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const candidates = [path.join(dist, urlPath), path.join(dist, `${urlPath}.html`), path.join(dist, "index.html")];
    const file = candidates.find((f) => f.startsWith(dist) && fs.existsSync(f) && fs.statSync(f).isFile());
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream", "X-Served-File": path.relative(dist, file) });
    fs.createReadStream(file).pipe(res);
  })
  .listen(port, () => console.log(`serving dist on http://localhost:${port}`));

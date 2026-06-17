const fs = require("fs");
const path = require("path");
const config = require("./sitemap.config.cjs");

const robots = `User-agent: *

# Allow all important pages
Allow: /

# Block internal/system folders
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /tmp/
Disallow: /node_modules/

# Sitemap
Sitemap: ${config.BASE_URL}/sitemap.xml

# Host
Host: ${config.BASE_URL}
`;

const publicDir = path.join(__dirname, "../../public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(
  path.join(publicDir, "robots.txt"),
  robots,
  "utf8"
);

console.log("----------------------------------------");
console.log("✅ robots.txt generated successfully!");
console.log("----------------------------------------");
const fs = require("fs");
const path = require("path");
const config = require("./sitemap.config.cjs");

const APP_DIR = path.join(__dirname, "../app");

// Recursively find all page.tsx files
function getRoutes(dir, parentRoute = "") {
  const items = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  let routes = [];

  const hasPage = items.some(
    (item) =>
      item.isFile() &&
      item.name === "page.tsx"
  );

  if (hasPage) {
    routes.push(parentRoute || "/");
  }

  for (const item of items) {
    if (!item.isDirectory()) continue;

    // Ignore private folders
    if (item.name.startsWith("_")) continue;

    // Ignore dynamic folders ([slug], [id], etc.)
    if (item.name.startsWith("[")) continue;

    // Ignore configured folders
    if (config.ignoredFolders.includes(item.name)) continue;

    routes.push(
      ...getRoutes(
        path.join(dir, item.name),
        `${parentRoute}/${item.name}`.replace(/\/+/g, "/")
      )
    );
  }

  return routes;
}

let routes = getRoutes(APP_DIR);

// Remove duplicate routes
routes = [...new Set(routes)];

// Remove ignored routes
routes = routes.filter(
  (route) => !config.ignoredRoutes.includes(route)
);

// Sort alphabetically
routes.sort();

const today = new Date().toISOString();

function getPriority(route) {
  return (
    config.priority[route] ??
    config.defaultPriority
  ).toFixed(1);
}

function getChangeFreq(route) {
  return (
    config.changeFrequency[route] ??
    config.defaultChangeFreq
  );
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${routes
  .map(
    (route) => `
  <url>
    <loc>${config.BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`
  )
  .join("\n")}

</urlset>
`;

const output = path.join(
  __dirname,
  "../../public/sitemap.xml"
);

fs.writeFileSync(output, xml);

console.log("────────────────────────────────────");
console.log("✅ Sitemap generated successfully");
console.log(`🌍 Base URL : ${config.BASE_URL}`);
console.log(`📄 Total URLs : ${routes.length}`);
console.log(`📂 Output : public/sitemap.xml`);
console.log("────────────────────────────────────");
const fs = require("fs");
const path = require("path");
const config = require("./sitemap.config.cjs");
const { STATIC_ROUTES } = require("../seo/routes.cjs");
const APP_DIR = path.join(__dirname, "../app");
function routeToPage(route) {
  if (route === "/") {
    return path.join(APP_DIR, "page.tsx");
  }

  return path.join(
    APP_DIR,
    route.replace(/^\//, ""),
    "page.tsx"
  );
}

function pageExists(route) {
  return fs.existsSync(routeToPage(route));
}


function getFileStats(route) {
  if (!pageExists(route)) {
    return null;
  }

  return fs.statSync(routeToPage(route));
}

function getLastModified(route) {
  const stats = getFileStats(route);

  if (!stats) {
    return new Date().toISOString();
  }

  return stats.mtime.toISOString();
}

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

let routes = [
  ...STATIC_ROUTES,
  ...getRoutes(APP_DIR),
];
routes = [...new Set(routes)];
 
 

// Remove ignored routes
routes = routes.filter(
  (route) => !config.ignoredRoutes.includes(route)
);

// Sort alphabetically
routes.sort();
 
function getPriority(route) {
  if (route === "/") return 1.0;

  if (route === "/services") return 0.95;
  if (route.startsWith("/services/")) return 0.90;

  if (route === "/blog") return 0.90;
  if (route.startsWith("/blog/")) return 0.85;

  if (route === "/careers") return 0.90;
  if (route.startsWith("/careers/")) return 0.85;

  if (
    route.includes("privacy") ||
    route.includes("cookie") ||
    route.includes("terms") ||
    route.includes("affiliate-disclosure") ||
    route.includes("disclaimer")
  ) {
    return 0.30;
  }

  return config.defaultPriority;
}

function getChangeFreq(route) {
  if (route === "/") return "daily";

  if (route === "/blog") return "daily";
  if (route.startsWith("/blog/")) return "monthly";

  if (route === "/careers") return "daily";
  if (route.startsWith("/careers/")) return "weekly";

  if (route.startsWith("/services")) return "monthly";

  return config.defaultChangeFreq;
}
 
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${routes
  .map(
    (route) => `
  <url>
    <loc>${config.BASE_URL}${route}</loc>
   <lastmod>${getLastModified(route)}</lastmod>
    <changefreq>${getChangeFreq(route)}</changefreq>
   <priority>${getPriority(route).toFixed(1)}</priority>
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

 
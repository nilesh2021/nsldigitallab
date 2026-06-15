const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.NSLmedia.co.in";
const APP_DIR = path.join(__dirname, "../app");

function getRoutes(dir, parentRoute = "") {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  let routes = [];

  const hasPage = items.some(
    (item) => item.isFile() && item.name === "page.tsx"
  );

  if (hasPage) {
    routes.push(parentRoute || "/");
  }

  for (const item of items) {
    if (
      item.isDirectory() &&
      item.name !== "components" &&
      !item.name.startsWith("_")
    ) {
      const childPath = path.join(dir, item.name);

      routes.push(
        ...getRoutes(
          childPath,
          `${parentRoute}/${item.name}`.replace(/\/+/g, "/")
        )
      );
    }
  }

  return routes;
}

const routes = getRoutes(APP_DIR);

console.log(routes);
console.log(`Found ${routes.length} routes`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync(
  path.join(__dirname, "../../public/sitemap.xml"),
  xml
);

console.log(
  `✅ Sitemap generated with ${routes.length} URLs`
);
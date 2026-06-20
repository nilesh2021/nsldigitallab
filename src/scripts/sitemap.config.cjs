module.exports = {
  BASE_URL: "https://nsldigitallab.com",

  defaultChangeFreq: "weekly",

  defaultPriority: 0.7,

  ignoredFolders: [
    "components",
    "hooks",
    "hook",
    "layouts",
    "layout",
    "providers",
    "contexts",
    "context",
    "utils",
    "lib",
    "styles",
    "assets",
    "data",
    "scripts",
    "landing",
  ],

  ignoredFiles: [
    "layout.tsx",
    "loading.tsx",
    "error.tsx",
    "not-found.tsx",
    "template.tsx",
  ],

  ignoredRoutes: [
    "/404",
    "/500",
  ],
};
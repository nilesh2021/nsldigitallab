module.exports = {
  BASE_URL: "https://nsldigitallab.com",

  defaultChangeFreq: "weekly",

  defaultPriority: 0.8,

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

  priority: {
    "/": 1.0,

    "/about": 0.9,

    "/services": 0.9,

    "/portfolio": 0.9,

    "/careers": 0.8,

    "/blog": 0.8,

    "/contact": 0.8,
  },

  changeFrequency: {
    "/": "daily",

    "/blog": "weekly",

    "/services": "weekly",

    "/portfolio": "monthly",

    "/careers": "daily",

    "/contact": "monthly",
  },
};
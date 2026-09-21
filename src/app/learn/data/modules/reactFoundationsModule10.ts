import { PublishedModule } from "../../types";

export const reactFoundationsModule10: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "final-react-project-and-deployment",
  moduleNumber: "10",
  title: "Final Project & Deployment",
  estimatedTime: "90–120 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title:
      "React Foundations Module 10 | Final Project & Deployment | NSL Digital Lab",
    description:
      "Beginner React Module 10: plan a small app, connect components and state, GitHub basics, production build, and deploy on Vercel.",
    keywords:
      "deploy React Vercel, GitHub beginner, Vite build, final React project",
    canonical:
      "/learn/react-foundations/final-react-project-and-deployment",
  },
  prevModule: {
    href: "/learn/react-foundations/reusable-architecture-and-custom-hooks",
    label: "Previous: Module 09",
  },
  intro: {
    headline: "Finish something you can share",
    body: [
      "This module is a guided build, not new theory. You will pick a small app you can complete, wire up the skills from Modules 02–09, then put it on the internet.",
      "Keep the scope tiny: a few pages, a list, a form, maybe fake or public API data. A finished small app beats an unfinished “startup.”",
      "GitHub stores your code. Vercel can host the finished site for free at beginner scale. Other hosts exist; we will walk through Vercel as one clear path.",
    ],
    youWillLearn: [
      "How to plan a small React project",
      "How to assemble components, props, and state",
      "What a production build is",
      "GitHub at a basic level",
      "How to deploy a Vite app on Vercel",
    ],
  },
  lessons: [
    {
      slug: "planning-a-react-project",
      title: "Planning a React project",
      minutes: "10 min",
      summary:
        "Write pages, features, and data on paper before you open the editor.",
      blocks: [
        {
          type: "p",
          text: "Pick one idea: a personal portfolio, a tiny shop list, a recipe box, or a “learn log” of modules you finished. If it needs logins, payments, or a custom backend, shrink it. This path is frontend-only.",
        },
        {
          type: "ul",
          items: [
            "Pages: Home, one list page, one form page, maybe About.",
            "Components: Header, Card, maybe a Footer.",
            "State: the list, the form fields.",
            "Nice extra: fetch from JSONPlaceholder or keep data in a local array.",
          ],
        },
        {
          type: "code",
          title: "A one-page plan",
          code: `App: Learn Log
Pages: /  /items  /add  /items/:id
Data: array of { id, title, note }
Features: list, add form, 404`,
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write your app name and three pages.",
            "Write three features you will actually finish today.",
          ],
        },
        {
          type: "check",
          question: "What is a healthy scope for this final project?",
          options: [
            {
              id: "a",
              label: "A few pages plus a list or form you can finish",
              correct: true,
            },
            {
              id: "b",
              label: "A full marketplace with payments this weekend",
              correct: false,
            },
            {
              id: "c",
              label: "A rewrite of React itself",
              correct: false,
            },
          ],
          explain: "Ship a small complete loop.",
        },
      ],
    },
    {
      slug: "building-the-application",
      title: "Building the application",
      minutes: "12 min",
      summary:
        "Start from Vite, add folders, then one feature at a time.",
      blocks: [
        {
          type: "ul",
          items: [
            "Create or reuse a Vite React project.",
            "Add React Router if you have more than one page.",
            "Build Header and routes first so you can click around.",
            "Add the list. Then the form. Then polish CSS.",
          ],
        },
        {
          type: "p",
          text: "Do not build every file empty “for later.” A working Home with a nav is a better first hour than ten blank components.",
        },
        {
          type: "tip",
          text: "Commit (save a snapshot) when a feature works. Git is in a later lesson; even copying the folder is a backup.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Create the Vite app if needed.",
            "Get Home and a second page routing before you style everything.",
          ],
        },
        {
          type: "check",
          question: "A sensible build order is…",
          options: [
            {
              id: "a",
              label: "Running shell → pages → list/form → styling",
              correct: true,
            },
            {
              id: "b",
              label: "Pixel-perfect CSS with no components",
              correct: false,
            },
            {
              id: "c",
              label: "Deploy first with no App.jsx",
              correct: false,
            },
          ],
          explain: "Structure, then features, then polish.",
        },
      ],
    },
    {
      slug: "connecting-components-and-state",
      title: "Connecting components and state",
      minutes: "12 min",
      summary:
        "Lift list data to a parent that both the list and the form can use, or keep it on one page at the start.",
      blocks: [
        {
          type: "p",
          text: "If AddItem and ItemList both need the same array, keep the array in a parent (often App or a page) and pass items down as props. Pass a function like onAdd down so the form can update the parent.",
        },
        {
          type: "code",
          title: "Parent holds the list",
          code: `function App() {
  const [items, setItems] = useState([]);

  function handleAdd(item) {
    setItems([...items, item]);
  }

  return (
    <>
      <ItemForm onAdd={handleAdd} />
      <ItemList items={items} />
    </>
  );
}`,
        },
        {
          type: "p",
          text: "This is still beginner React: props down, events up (the child calls onAdd). You do not need a global store.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Draw arrows: Form → onAdd → parent state → List props.",
            "Implement that for your chosen list.",
          ],
        },
        {
          type: "check",
          question: "How can a child form add to a parent list?",
          options: [
            {
              id: "a",
              label: "The parent passes a function prop; the child calls it with the new item",
              correct: true,
            },
            {
              id: "b",
              label: "The child edits the parent’s file on disk",
              correct: false,
            },
            {
              id: "c",
              label: "By changing className only",
              correct: false,
            },
          ],
          explain: "Callback props send news upward. State lives in the parent.",
        },
      ],
    },
    {
      slug: "preparing-for-production",
      title: "Preparing for production",
      minutes: "8 min",
      summary:
        "A production build is an optimised folder of static files the host will serve.",
      blocks: [
        {
          type: "term",
          term: "Production build",
          meaning:
            "A finished copy of your app: minified JavaScript (smaller, harder to read on purpose), hashed file names, ready for a public server. In Vite you run npm run build. The output is usually a dist folder.",
        },
        {
          type: "code",
          title: "Build locally",
          code: `npm run build
npm run preview`,
        },
        {
          type: "p",
          text: "preview lets you check the production files on your computer. Fix console errors and empty pages before you deploy.",
        },
        {
          type: "ul",
          items: [
            "Remove leftover console.log if they show secrets (you should have none).",
            "Check that routes still work; for Vercel you may need a rewrite so unknown paths serve index.html. Vite + Vercel often handles SPA fallback for you.",
          ],
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Run npm run build.",
            "Confirm dist exists and preview still shows your Home page.",
          ],
        },
        {
          type: "check",
          question: "What does npm run build do in a Vite app?",
          options: [
            {
              id: "a",
              label: "Creates production files (often in dist)",
              correct: true,
            },
            {
              id: "b",
              label: "Deletes your src folder",
              correct: false,
            },
            {
              id: "c",
              label: "Creates a React Native phone app automatically",
              correct: false,
            },
          ],
          explain: "build ≠ dev server. It prepares files to host.",
        },
      ],
    },
    {
      slug: "github-basics",
      title: "GitHub basics",
      minutes: "10 min",
      summary:
        "Git records versions. GitHub is a website that stores those versions so you and Vercel can reach them.",
      blocks: [
        {
          type: "term",
          term: "Git",
          meaning:
            "A tool on your computer that saves snapshots of your files called commits. You can go back if something breaks.",
        },
        {
          type: "term",
          term: "GitHub",
          meaning:
            "An online home for Git repositories (project folders with history). You need an account. A repository (repo) is one project.",
        },
        {
          type: "code",
          title: "Typical first commands (in the project folder)",
          code: `git init
git add .
git commit -m "First version of my React app"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main`,
        },
        {
          type: "p",
          text: "Create the empty repo on github.com first, without a README if your folder already has files. Do not upload node_modules. Vite’s .gitignore already ignores it if you used the starter.",
        },
        {
          type: "tip",
          text: "Never commit passwords or .env API keys. This beginner app should not need secrets.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Create a GitHub account if you do not have one.",
            "Create a new repository and push your project.",
          ],
        },
        {
          type: "check",
          question: "Should node_modules go on GitHub?",
          options: [
            {
              id: "a",
              label: "No. It is huge and can be reinstalled with npm install",
              correct: true,
            },
            {
              id: "b",
              label: "Yes, always zip it into every commit",
              correct: false,
            },
            {
              id: "c",
              label: "Only the Vite logo from it",
              correct: false,
            },
          ],
          explain: ".gitignore keeps node_modules local.",
        },
      ],
    },
    {
      slug: "build-and-deployment-vercel",
      title: "Build and deployment with Vercel",
      minutes: "12 min",
      summary:
        "Vercel pulls from GitHub, runs the build, and gives you a public URL.",
      blocks: [
        {
          type: "term",
          term: "Deploy",
          meaning:
            "Copy the production files to a host so anyone with the link can open the app. Vercel is one host that works well with Vite and GitHub.",
        },
        {
          type: "ul",
          items: [
            "Create a Vercel account (you can sign in with GitHub).",
            "Click Add New Project and import your repo.",
            "Keep the defaults for a Vite app: build command npm run build, output dist.",
            "Deploy. Wait for a success URL such as your-app.vercel.app.",
          ],
        },
        {
          type: "p",
          text: "Later pushes to main can auto-update the live site. If a deploy fails, read the build log. Common issues: missing npm install, a TypeScript error, or a wrong root folder.",
        },
        {
          type: "p",
          text: "Netlify is a similar alternative. The idea is the same: GitHub + build + public URL.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Import the repo into Vercel.",
            "Open the live URL on your phone.",
            "Share the link with a friend or on LinkedIn.",
          ],
        },
        {
          type: "check",
          question: "What does Vercel need from you at minimum?",
          options: [
            {
              id: "a",
              label: "A GitHub repo it can build (Vite defaults usually work)",
              correct: true,
            },
            {
              id: "b",
              label: "A physical server in your house",
              correct: false,
            },
            {
              id: "c",
              label: "Redux installed",
              correct: false,
            },
          ],
          explain: "Connect repo, build, host the output.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Complete React Application",
    goal: "Ship one small app that uses components, props, state, at least one extra route, and a live Vercel (or similar) URL.",
    steps: [
      "Finish your planned pages (Home + list or form + 404 is a solid minimum).",
      "Reuse at least one component (Header or Card).",
      "Keep list or form state working end to end.",
      "Push to GitHub.",
      "Deploy with Vercel and test the public link, including a nested route if you have one.",
    ],
    starterCode: `// Checklist in comments — your real app will be larger.

function App() {
  return (
    <main>
      <h1>My shipped React app</h1>
      <p>Routes, a list or form, and a Header live here.</p>
    </main>
  );
}

export default App;

// Then:
// npm run build
// git push
// Import the repo on vercel.com`,
    doneWhen: [
      "A stranger can open your Vercel URL and use the main feature.",
      "GitHub shows your source (no node_modules).",
      "You can explain each page in one sentence.",
    ],
  },
  summary: {
    headline: "You planned, built, and published a real React app",
    body: [
      "This path took you from “what is React?” to a public URL. You used JSX, components, props, state, lists, forms, effects, router, and a little structure.",
      "Keep practising with small apps. Add one new idea at a time. When you are ready, look up topics this course skipped on purpose: they will make more sense now.",
    ],
    recap: [
      "Plan pages and data first",
      "Lift shared list state to a parent",
      "Build, push to GitHub, deploy on Vercel",
    ],
  },
  knowledgeCheck: {
    type: "check",
    question: "After npm run build, where do you typically put the site so others can visit?",
    options: [
      {
        id: "a",
        label: "On a host such as Vercel that serves the production files",
        correct: true,
      },
      {
        id: "b",
        label: "Only inside node_modules on your laptop",
        correct: false,
      },
      {
        id: "c",
        label: "Inside the useState call",
        correct: false,
      },
    ],
    explain: "Localhost is for you. Deploy puts dist (or equivalent) on the web.",
  },
};

export default reactFoundationsModule10;

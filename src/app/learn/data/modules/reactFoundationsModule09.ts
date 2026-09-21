import { PublishedModule } from "../../types";

export const reactFoundationsModule09: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "reusable-architecture-and-custom-hooks",
  moduleNumber: "09",
  title: "Reusable Components & Custom Hooks",
  estimatedTime: "55–75 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title:
      "React Foundations Module 09 | Reusable Components & Custom Hooks | NSL Digital Lab",
    description:
      "Beginner React Module 09: reusable UI, file organisation, custom hooks, and a small dashboard mini project.",
    keywords:
      "reusable React components, custom hook, useCounter, beginner React architecture",
    canonical:
      "/learn/react-foundations/reusable-architecture-and-custom-hooks",
  },
  prevModule: {
    href: "/learn/react-foundations/routing",
    label: "Previous: Module 08",
  },
  nextModule: {
    href: "/learn/react-foundations/final-react-project-and-deployment",
    label: "Next: Module 10",
  },
  intro: {
    headline: "Stop copying the same button",
    body: [
      "As the app grows, the same card and button appear on many screens. Put those pieces in shared files so a style change happens once.",
      "A custom hook is a function you write whose name starts with use. It lets you reuse simple logic, such as a counter, the same way components reuse UI.",
      "We will stay small: folders, shared UI, one tiny hook. No Redux. No performance libraries.",
    ],
    youWillLearn: [
      "Why reusable components matter",
      "A simple folder layout",
      "Shared UI pieces",
      "How to avoid copy-paste logic",
      "How to write a small custom hook",
    ],
  },
  lessons: [
    {
      slug: "why-reusable-components",
      title: "Why reusable components matter",
      minutes: "8 min",
      summary:
        "One source of truth for UI that appears more than once.",
      blocks: [
        {
          type: "p",
          text: "If Home and Dashboard both need a primary button, two copy-pasted buttons will drift apart. One Button component keeps padding, colour, and label behaviour together.",
        },
        {
          type: "ul",
          items: [
            "Faster changes: edit once.",
            "Fewer typos: one heading style.",
            "Clearer reading: App describes the page, Button describes the control.",
          ],
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "List repeating pieces in your practice app (nav, card, button).",
            "Circle any that are copied in two files.",
          ],
        },
        {
          type: "check",
          question: "Reusable components help most when…",
          options: [
            {
              id: "a",
              label: "The same UI appears in more than one place",
              correct: true,
            },
            {
              id: "b",
              label: "You want to avoid JavaScript forever",
              correct: false,
            },
            {
              id: "c",
              label: "You need a database installed",
              correct: false,
            },
          ],
          explain: "Repeat UI → extract a component.",
        },
      ],
    },
    {
      slug: "organizing-components",
      title: "Organizing components",
      minutes: "8 min",
      summary:
        "A simple src/components folder is enough for a beginner project.",
      blocks: [
        {
          type: "code",
          title: "A calm folder tree",
          code: `src/
  components/
    Button.jsx
    Card.jsx
    Header.jsx
  pages/
    HomePage.jsx
    DashboardPage.jsx
  App.jsx
  main.jsx`,
        },
        {
          type: "p",
          text: "Name files after the component: Button.jsx exports Button. Pages can live in pages/. You do not need a complex “architecture” book for this course.",
        },
        {
          type: "tip",
          text: "If a file grows past a couple of screens of code, that is a hint to split a child component out.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Create src/components if it does not exist.",
            "Move a card into Card.jsx and import it.",
          ],
        },
        {
          type: "check",
          question: "A practical beginner layout is…",
          options: [
            {
              id: "a",
              label: "components/ for shared UI, pages/ for screens",
              correct: true,
            },
            {
              id: "b",
              label: "Put every line in index.html only",
              correct: false,
            },
            {
              id: "c",
              label: "Store components inside node_modules",
              correct: false,
            },
          ],
          explain: "Keep your code in src, grouped by role.",
        },
      ],
    },
    {
      slug: "shared-ui-components",
      title: "Shared UI components",
      minutes: "8 min",
      summary:
        "Buttons, cards, and headers take props and children so many pages can use them.",
      blocks: [
        {
          type: "code",
          title: "Button with children",
          code: `function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}`,
        },
        {
          type: "code",
          title: "Card wrapper",
          code: `function Card({ title, children }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      {children}
    </article>
  );
}`,
        },
        {
          type: "p",
          text: "Pages import these and pass different titles and inner content. Styling lives on the shared class names.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Create Button and Card.",
            "Use both on a sample dashboard page.",
          ],
        },
        {
          type: "check",
          question: "How can one Card show different inner content?",
          options: [
            {
              id: "a",
              label: "Pass children (and maybe a title prop)",
              correct: true,
            },
            {
              id: "b",
              label: "Edit Vite’s logo SVG every time",
              correct: false,
            },
            {
              id: "c",
              label: "Rename node_modules",
              correct: false,
            },
          ],
          explain: "children is the nested JSX.",
        },
      ],
    },
    {
      slug: "avoiding-repeated-code",
      title: "Avoiding repeated code",
      minutes: "8 min",
      summary:
        "If you pasted the same useState block twice, that logic can move into a helper.",
      blocks: [
        {
          type: "p",
          text: "UI reuse is components. Logic reuse is functions — including hooks. If two pages both do const [count, setCount] = useState(0) plus plus/minus, you will copy bugs twice.",
        },
        {
          type: "p",
          text: "Before you reach for a hook, try a plain function for calculations. Use a hook when you need useState or useEffect inside the shared code.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Find any duplicated state in your practice files.",
            "Write one sentence: “This could be a component” or “This could be a hook.”",
          ],
        },
        {
          type: "check",
          question: "When is a custom hook a good next step?",
          options: [
            {
              id: "a",
              label: "When two components share the same state logic",
              correct: true,
            },
            {
              id: "b",
              label: "When you want to replace HTML",
              correct: false,
            },
            {
              id: "c",
              label: "When CSS is too colourful",
              correct: false,
            },
          ],
          explain: "Hooks share stateful logic, not markup.",
        },
      ],
    },
    {
      slug: "what-is-a-custom-hook",
      title: "What is a custom hook?",
      minutes: "8 min",
      summary:
        "A function starting with use that can call other hooks and return values you need.",
      blocks: [
        {
          type: "term",
          term: "Custom hook",
          meaning:
            "A function you create, named like useSomething. Inside it you may call useState or useEffect. Components call your hook the same way they call useState.",
        },
        {
          type: "p",
          text: "The use prefix is not decoration. React uses it to know the function follows hook rules (call at the top level, same order every render).",
        },
        {
          type: "code",
          title: "Shape of a hook",
          code: `function useToggle(start) {
  const [on, setOn] = useState(start);
  function toggle() {
    setOn(!on);
  }
  return { on, toggle };
}`,
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Read useToggle out loud: it returns the value and a function.",
            "Imagine a component calling const { on, toggle } = useToggle(false);",
          ],
        },
        {
          type: "check",
          question: "Custom hooks should be named…",
          options: [
            {
              id: "a",
              label: "Starting with use, such as useCounter",
              correct: true,
            },
            {
              id: "b",
              label: "Starting with css",
              correct: false,
            },
            {
              id: "c",
              label: "As a .png file",
              correct: false,
            },
          ],
          explain: "The use prefix marks hook functions.",
        },
      ],
    },
    {
      slug: "creating-a-simple-custom-hook",
      title: "Creating a simple custom hook",
      minutes: "10 min",
      summary:
        "Move counter state into useCounter and use it from a page.",
      blocks: [
        {
          type: "code",
          title: "useCounter.js",
          code: `import { useState } from "react";

function useCounter(start = 0) {
  const [count, setCount] = useState(start);

  function plus() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  function reset() {
    setCount(start);
  }

  return { count, plus, minus, reset };
}

export default useCounter;`,
        },
        {
          type: "code",
          title: "Using it",
          code: `import useCounter from "./useCounter.js";

function Stat() {
  const { count, plus, minus } = useCounter(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}`,
        },
        {
          type: "tip",
          text: "Two components can each call useCounter(). They do not share the same number. Each call gets its own state.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add useCounter.js.",
            "Use it on two cards with different starting numbers.",
          ],
        },
        {
          type: "check",
          question: "If Dashboard and Home both call useCounter(), they…",
          options: [
            {
              id: "a",
              label: "Each get their own count",
              correct: true,
            },
            {
              id: "b",
              label: "Must always show the same number",
              correct: false,
            },
            {
              id: "c",
              label: "Share one global Redux store (not in this course)",
              correct: false,
            },
          ],
          explain: "Each hook call is a separate piece of state.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Small Dashboard",
    goal: "Build a dashboard with a shared Header, Card, and Button, plus at least one widget that uses useCounter.",
    steps: [
      "Create Header, Card, and Button in src/components.",
      "Create useCounter in src/useCounter.js (or src/hooks/useCounter.js).",
      "Build a Dashboard page with two cards: a counter widget and a static “tips” card.",
      "Reuse Button inside the counter card.",
    ],
    starterCode: `import { useState } from "react";

function useCounter(start = 0) {
  const [count, setCount] = useState(start);
  return {
    count,
    plus: () => setCount(count + 1),
    reset: () => setCount(start),
  };
}

function Card({ title, children }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      {children}
    </article>
  );
}

function App() {
  const visitors = useCounter(12);
  return (
    <main>
      <h1>Dashboard</h1>
      <Card title="Visitors today">
        <p>{visitors.count}</p>
        <button onClick={visitors.plus}>Add visit</button>
        <button onClick={visitors.reset}>Reset</button>
      </Card>
      <Card title="Next lesson">
        <p>Ship a full app in Module 10.</p>
      </Card>
    </main>
  );
}

export default App;`,
    doneWhen: [
      "Card is used at least twice.",
      "Counter logic lives in a function named use…",
      "The dashboard is readable without one giant App of copied markup.",
    ],
  },
  summary: {
    headline: "Shared UI in components, shared state logic in hooks",
    body: [
      "Folders keep files findable. Button and Card remove copy-paste. useCounter shows the smallest useful hook.",
      "The last module combines everything into one app and puts it online.",
    ],
    recap: [
      "Extract shared UI",
      "Name a hook with use",
      "Reuse the hook without sharing one global number",
    ],
  },
  knowledgeCheck: {
    type: "check",
    question: "What is the difference between a component and a custom hook?",
    options: [
      {
        id: "a",
        label: "A component returns UI; a hook returns data and helpers, and can use other hooks",
        correct: true,
      },
      {
        id: "b",
        label: "They are the same word",
        correct: false,
      },
      {
        id: "c",
        label: "Hooks replace HTML tags in the browser",
        correct: false,
      },
    ],
    explain: "Components draw. Hooks share stateful logic.",
  },
};

export default reactFoundationsModule09;

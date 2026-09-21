import { Code2 } from "lucide-react";
import { LearningPath } from "../../types";

export const LINKEDIN_COMPANY_URL =
  "https://www.linkedin.com/company/nsldigitallab/";

export const reactFoundationsPath: LearningPath = {
  slug: "react-foundations",
  title: "React Foundations",
  eyebrow: "Frontend path",
  tagline: "from zero to a first app",
  description:
    "A friendly path for people who already know basic HTML, CSS, and JavaScript. You will learn React one idea at a time — then build and publish a small app you can share.",
  level: "Beginner",
  estimatedTime: "4–6 weeks · ~40 hours",
  moduleLabel: "10 modules",
  prerequisites: [
    "Basic HTML and CSS",
    "Simple JavaScript: variables, functions, arrays, and objects",
    "A code editor such as VS Code or Cursor",
  ],
  outcomes: [
    "Understand what React is and how to start a project",
    "Build pages from reusable pieces and pass data between them",
    "Handle buttons, forms, lists, and simple API data",
    "Add extra pages, tidy your code, and put a project online",
  ],
  linkedInUrl: LINKEDIN_COMPANY_URL,
  download: {
    label: "Free React Roadmap / Checklist",
    href: "/downloads/react-roadmap-checklist.html",
  },
  seo: {
    title:
      "React Foundations Course | 10-Module Path | NSL Digital Lab",
    description:
      "Free React Foundations path: 10 modules from JSX to deployment, with topics, mini projects, a LinkedIn follow CTA, and a free React roadmap checklist.",
    keywords:
      "learn React, React foundations, React course, JSX, components, hooks, React Router, custom hooks, React project",
    canonical: "/learn/react-foundations",
  },
  icon: Code2,
  modules: [
    {
      n: "01",
      slug: "react-and-modern-frontend",
      contentHref: "/learn/react-foundations/react-and-modern-frontend",
      title: "What is React?",
      description:
        "React is a tool for building websites from small reusable pieces called components. You will see why people use it instead of only HTML and JavaScript, then start a simple project with Vite (a helper that runs your app in the browser).",
      topics: [
        "What React is, in simple words",
        "Why React is useful (reusable pieces instead of one giant page)",
        "What a component is: a small part of the screen you can reuse",
        "How React is different from writing HTML and JavaScript by hand",
        "What Vite does and how to start a new React project",
        "A quick look at the files in a new project",
      ],
      miniProject: "Build a simple personal profile card.",
    },
    {
      n: "02",
      slug: "jsx-and-components",
      title: "JSX & Components",
      description:
        "JSX lets you write HTML-like code inside JavaScript. You will learn how to turn that into small functions (components) and reuse them.",
      topics: [
        "What JSX looks like (HTML-style tags inside JavaScript)",
        "Small differences from HTML, like className instead of class",
        "Putting JavaScript values inside JSX with curly braces { }",
        "Writing a component as a simple function",
        "Saving a component in its own file and using it again",
        "When to split a big piece of UI into smaller components",
      ],
      miniProject: "Build reusable profile or product cards.",
    },
    {
      n: "03",
      slug: "props-and-component-composition",
      title: "Props",
      description:
        "Props are how a parent component sends information to a child component. You will reuse the same card with different names, images, and prices.",
      topics: [
        "What props are: information passed from parent to child",
        "A simple example: one Card, many different names",
        "Reading props inside a child component",
        "Giving a prop a fallback value when nothing is passed",
        "Why the child should not change the props it receives",
        "Building one reusable card and filling it with different data",
      ],
      miniProject: "Build a reusable product card with different data.",
    },
    {
      n: "04",
      slug: "state-and-events",
      title: "State & Events",
      description:
        "State is data that can change after the page loads, such as a number on a counter. You will use useState (a built-in React helper) and buttons so the screen updates when the user clicks.",
      topics: [
        "What state is: values that can change on the screen",
        "How useState stores a value and lets you update it",
        "Buttons and click events (what happens when someone clicks)",
        "A first counter: plus, minus, and reset",
        "Typing in an input and showing the text on the page",
        "Keeping updates simple: change the value, let React redraw the UI",
      ],
      miniProject: "Build an interactive counter.",
    },
    {
      n: "05",
      slug: "conditional-rendering-and-lists",
      title: "Lists & Conditional Rendering",
      description:
        "You will show a list of items and hide or show parts of the page based on simple if/else rules. map() is a JavaScript method that turns an array into a list of components.",
      topics: [
        "Showing a list of items with map()",
        "What keys are and why each list item needs a unique key",
        "Showing different UI with if/else (for example, empty vs has items)",
        "Simple yes/no screens: loading, empty list, or a message",
        "Adding a new item to a list",
        "Removing an item from a list",
      ],
      miniProject: "Build a simple task list.",
    },
    {
      n: "06",
      slug: "forms-and-user-input",
      title: "Forms & User Input",
      description:
        "You will connect form fields to React so the app always knows what the user typed. Controlled fields means the input value is stored in state and shown back in the box.",
      topics: [
        "Text inputs, email fields, and text areas",
        "Saving what the user types in state as they type",
        "What happens when someone clicks Submit",
        "Stopping the page from refreshing on submit",
        "Checking that required fields are filled in",
        "Showing a simple error message when something is missing",
      ],
      miniProject: "Build a simple contact form.",
    },
    {
      n: "07",
      slug: "useeffect-and-api-data",
      title: "useEffect & API Data",
      description:
        "An API is a way for your app to ask another website for data (like a list of users). useEffect is a React helper that can run extra work after the screen appears — for example, loading that data.",
      topics: [
        "What an API is, in everyday language",
        "What useEffect does: extra work after the page shows",
        "Loading data when the screen first opens",
        "Showing a “Loading…” message while you wait",
        "Displaying names or cards once the data arrives",
        "What to show if the request fails",
      ],
      miniProject: "Build a simple user/API data screen.",
    },
    {
      n: "08",
      slug: "routing",
      title: "React Router",
      description:
        "Real websites have more than one page. React Router is a library that changes the screen when the URL changes, without reloading the whole site.",
      topics: [
        "Why an app needs more than one page (Home, About, Contact)",
        "What React Router does for navigation",
        "Creating pages and matching them to URLs",
        "Clicking a link without reloading the whole website",
        "A shared header that stays the same on every page",
        "A simple “page not found” screen",
      ],
      miniProject: "Build a small multi-page React website.",
    },
    {
      n: "09",
      slug: "reusable-architecture-and-custom-hooks",
      title: "Reusable Components & Custom Hooks",
      description:
        "You will keep your project tidy by reusing the same buttons, cards, and layouts. A custom hook is a small function you write (its name starts with “use”) to share simple repeated logic, such as a counter.",
      topics: [
        "Putting shared pieces (buttons, cards, headers) in one place",
        "Naming files so you can find things later",
        "Using the same component on more than one screen",
        "What a custom hook is, at a basic level",
        "A tiny example: moving repeated useState logic into a helper",
        "Keeping each file focused on one job",
      ],
      miniProject: "Build a small dashboard using reusable components.",
    },
    {
      n: "10",
      slug: "final-react-project-and-deployment",
      title: "Final Project & Deployment",
      description:
        "You will combine everything into one complete React app. Then you will save it on GitHub, create a production build (a finished copy of the site), and put it online so anyone can open the link.",
      topics: [
        "Planning a small app you can finish (pages and features)",
        "Using components, props, state, lists, and forms together",
        "Adding more than one page with React Router",
        "Saving your code on GitHub",
        "Building the finished site with a simple command",
        "Putting the site online (for example Vercel or Netlify)",
      ],
      miniProject: "Build and deploy a complete React application.",
    },
  ],
};

export default reactFoundationsPath;

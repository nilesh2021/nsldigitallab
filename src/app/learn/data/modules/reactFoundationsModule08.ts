import { PublishedModule } from "../../types";

export const reactFoundationsModule08: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "routing",
  moduleNumber: "08",
  title: "React Router",
  estimatedTime: "55–75 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title: "React Foundations Module 08 | React Router | NSL Digital Lab",
    description:
      "Beginner React Module 08: why routes exist, installing React Router, pages, Links, dynamic routes, 404, multi-page mini project.",
    keywords:
      "React Router, Link, Routes, useParams, 404 page, beginner React navigation",
    canonical: "/learn/react-foundations/routing",
  },
  prevModule: {
    href: "/learn/react-foundations/useeffect-and-api-data",
    label: "Previous: Module 07",
  },
  nextModule: {
    href: "/learn/react-foundations/reusable-architecture-and-custom-hooks",
    label: "Next: Module 09",
  },
  intro: {
    headline: "One app, several URLs",
    body: [
      "A React app is often a single HTML file. Users still expect addresses like /about and /contact.",
      "React Router is a library that shows a different component when the URL changes, without reloading the whole site.",
      "You will add Home, About, a simple product page with a changing id, and a Not Found screen.",
    ],
    youWillLearn: [
      "Why apps need routes",
      "How to install React Router",
      "How to create pages",
      "How Link works",
      "Dynamic routes and a 404 page",
    ],
  },
  lessons: [
    {
      slug: "why-routes",
      title: "Why applications need routes",
      minutes: "8 min",
      summary:
        "Routes map a URL path to a screen so people can bookmark, share, and use the back button.",
      blocks: [
        {
          type: "term",
          term: "Route",
          meaning:
            "A rule such as “when the path is /about, show the About component.” The path is the part of the URL after the domain.",
        },
        {
          type: "p",
          text: "Without routing you might hide sections with state. That does not give each screen its own address. Routes keep the URL and the screen in sync.",
        },
        {
          type: "ul",
          items: [
            "Home at /",
            "About at /about",
            "Contact at /contact",
          ],
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "List three pages a small business site needs.",
            "Write a path for each, starting with /.",
          ],
        },
        {
          type: "check",
          question: "What is a route in this module?",
          options: [
            {
              id: "a",
              label: "A URL path paired with a page component",
              correct: true,
            },
            {
              id: "b",
              label: "A CSS gradient",
              correct: false,
            },
            {
              id: "c",
              label: "An npm login code",
              correct: false,
            },
          ],
          explain: "Path in, screen out.",
        },
      ],
    },
    {
      slug: "installing-react-router",
      title: "Installing React Router",
      minutes: "8 min",
      summary:
        "Add the react-router-dom package and wrap the app in a router.",
      blocks: [
        {
          type: "term",
          term: "react-router-dom",
          meaning:
            "The React Router package for websites (the DOM is the page in the browser). You install it with npm.",
        },
        {
          type: "code",
          title: "Install",
          code: `npm install react-router-dom`,
        },
        {
          type: "code",
          title: "Wrap the app (main.jsx)",
          code: `import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`,
        },
        {
          type: "term",
          term: "BrowserRouter",
          meaning:
            "A component that watches the address bar using normal URLs (like /about). It must wrap the parts of the tree that use routes and links.",
        },
        {
          type: "tip",
          text: "If Link or Routes “is not defined,” check the import. If they “must be used inside a router,” wrap with BrowserRouter.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Run npm install react-router-dom in your project folder.",
            "Wrap App with BrowserRouter in main.jsx.",
          ],
        },
        {
          type: "check",
          question: "Which component should wrap the app for web URLs?",
          options: [
            {
              id: "a",
              label: "BrowserRouter",
              correct: true,
            },
            {
              id: "b",
              label: "useState",
              correct: false,
            },
            {
              id: "c",
              label: "createRoot by itself with no router",
              correct: false,
            },
          ],
          explain: "BrowserRouter provides routing context.",
        },
      ],
    },
    {
      slug: "creating-pages",
      title: "Creating pages",
      minutes: "10 min",
      summary:
        "Each page is a component. Routes and Route connect paths to those components.",
      blocks: [
        {
          type: "code",
          title: "Two page components",
          code: `function HomePage() {
  return <h1>Home</h1>;
}

function AboutPage() {
  return <h1>About</h1>;
}`,
        },
        {
          type: "code",
          title: "Declare routes in App",
          code: `import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}`,
        },
        {
          type: "p",
          text: "path is the URL. element is the component to show. Only the matching route’s element appears.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add a ContactPage at /contact.",
            "Type /about in the address bar after npm run dev.",
          ],
        },
        {
          type: "check",
          question: "What does <Route path=\"/about\" element={<AboutPage />} /> do?",
          options: [
            {
              id: "a",
              label: "Shows AboutPage when the URL path is /about",
              correct: true,
            },
            {
              id: "b",
              label: "Deletes the Home page permanently",
              correct: false,
            },
            {
              id: "c",
              label: "Installs Vite again",
              correct: false,
            },
          ],
          explain: "Route is the matching rule.",
        },
      ],
    },
    {
      slug: "navigation-and-links",
      title: "Navigation and Links",
      minutes: "8 min",
      summary:
        "Use Link instead of <a> so the app does not fully reload.",
      blocks: [
        {
          type: "term",
          term: "Link",
          meaning:
            "A React Router component that looks like a link but changes the URL inside the app. Use to=\"/about\" (not href).",
        },
        {
          type: "code",
          title: "A small nav that stays on every page",
          code: `import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}`,
        },
        {
          type: "p",
          text: "The nav sits outside Routes so it does not disappear when the page changes. That is a simple shared header.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add Links for Home, About, and Contact.",
            "Click them and watch the URL change without a full reload.",
          ],
        },
        {
          type: "check",
          question: "Which prop does Link use for the path?",
          options: [
            {
              id: "a",
              label: "to",
              correct: true,
            },
            {
              id: "b",
              label: "src",
              correct: false,
            },
            {
              id: "c",
              label: "action",
              correct: false,
            },
          ],
          explain: "<Link to=\"/about\">About</Link>",
        },
      ],
    },
    {
      slug: "dynamic-routes",
      title: "Dynamic routes",
      minutes: "8 min",
      summary:
        "A path can include a changing piece, such as /products/42.",
      blocks: [
        {
          type: "term",
          term: "Dynamic route",
          meaning:
            "A path with a parameter, written as /products/:id. The :id part is a placeholder. useParams() reads the real value from the URL.",
        },
        {
          type: "code",
          title: "Product page",
          code: `import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <h1>Product {id}</h1>;
}

// In Routes:
<Route path="/products/:id" element={<ProductPage />} />`,
        },
        {
          type: "p",
          text: "A link might be <Link to=\"/products/12\">Mug</Link>. The page can later fetch that product. For this module, showing the id is enough.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add /products/:id.",
            "Link to /products/1 and /products/2 from Home.",
          ],
        },
        {
          type: "check",
          question: "How do you read :id in the page component?",
          options: [
            {
              id: "a",
              label: "const { id } = useParams();",
              correct: true,
            },
            {
              id: "b",
              label: "const id = document.cookie",
              correct: false,
            },
            {
              id: "c",
              label: "id is never available",
              correct: false,
            },
          ],
          explain: "useParams returns an object of URL parameters.",
        },
      ],
    },
    {
      slug: "not-found-404",
      title: "404 page",
      minutes: "6 min",
      summary:
        "A star path catches URLs that match nothing else.",
      blocks: [
        {
          type: "term",
          term: "404",
          meaning:
            "The usual name for “this page does not exist.” In React Router you show a friendly component instead of a blank screen.",
        },
        {
          type: "code",
          title: "Catch-all route",
          code: `function NotFoundPage() {
  return (
    <section>
      <h1>Page not found</h1>
      <Link to="/">Back home</Link>
    </section>
  );
}

<Route path="*" element={<NotFoundPage />} />`,
        },
        {
          type: "p",
          text: "Put the * route last so real pages match first.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add NotFoundPage.",
            "Visit /does-not-exist and confirm your message.",
          ],
        },
        {
          type: "check",
          question: "Which path matches unknown URLs?",
          options: [
            {
              id: "a",
              label: "path=\"*\"",
              correct: true,
            },
            {
              id: "b",
              label: "path=\"/only-home\"",
              correct: false,
            },
            {
              id: "c",
              label: "path={null}",
              correct: false,
            },
          ],
          explain: "* is the fallback route.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Multi-page React Website",
    goal: "Build Home, About, Contact, one dynamic page, shared nav with Link, and a 404 screen.",
    steps: [
      "Install react-router-dom and wrap with BrowserRouter.",
      "Create page components and Routes in App.",
      "Add a nav with Link outside Routes.",
      "Add /products/:id and path=\"*\".",
    ],
    starterCode: `import { Link, Route, Routes, useParams } from "react-router-dom";

function HomePage() {
  return (
    <section>
      <h1>Home</h1>
      <Link to="/products/1">View product 1</Link>
    </section>
  );
}

function AboutPage() {
  return <h1>About</h1>;
}

function ContactPage() {
  return <h1>Contact</h1>;
}

function ProductPage() {
  const { id } = useParams();
  return <h1>Product {id}</h1>;
}

function NotFoundPage() {
  return (
    <section>
      <h1>Page not found</h1>
      <Link to="/">Home</Link>
    </section>
  );
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;`,
    doneWhen: [
      "Nav links change the page without a full reload.",
      "/products/3 shows Product 3.",
      "A nonsense URL shows your 404 page.",
    ],
  },
  summary: {
    headline: "URLs pick the screen; Link keeps it a single-page app",
    body: [
      "BrowserRouter, Routes, Route, Link, useParams, and a * fallback are enough for a small site.",
      "Next you will tidy repeated UI and write a tiny custom hook.",
    ],
    recap: [
      "Install and wrap with BrowserRouter",
      "Declare pages with Route",
      "Navigate with Link and handle 404",
    ],
  },
  knowledgeCheck: {
    type: "check",
    question: "Why prefer Link over a plain <a href> inside a React SPA?",
    options: [
      {
        id: "a",
        label: "Link changes the page without reloading the whole app",
        correct: true,
      },
      {
        id: "b",
        label: "Plain <a> tags are illegal in HTML5",
        correct: false,
      },
      {
        id: "c",
        label: "Link writes CSS for you",
        correct: false,
      },
    ],
    explain: "Client-side navigation keeps your React state and is faster.",
  },
};

export default reactFoundationsModule08;

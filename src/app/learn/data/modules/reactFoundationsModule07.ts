import { PublishedModule } from "../../types";

export const reactFoundationsModule07: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "useeffect-and-api-data",
  moduleNumber: "07",
  title: "useEffect & API Data",
  estimatedTime: "60–80 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title: "React Foundations Module 07 | useEffect & API Data | NSL Digital Lab",
    description:
      "Beginner React Module 07: why useEffect exists, when it runs, APIs, fetch, loading and error states, user list mini project.",
    keywords:
      "useEffect, fetch API, React loading state, JSONPlaceholder, beginner React API",
    canonical: "/learn/react-foundations/useeffect-and-api-data",
  },
  prevModule: {
    href: "/learn/react-foundations/forms-and-user-input",
    label: "Previous: Module 06",
  },
  nextModule: {
    href: "/learn/react-foundations/routing",
    label: "Next: Module 08",
  },
  intro: {
    headline: "Load data after the screen appears",
    body: [
      "Some work should not run while React is calculating JSX: talking to the internet, starting a timer, or reading something outside the component.",
      "useEffect lets you run that extra work after the paint. You will use it to fetch a list of users from a public practice API.",
      "You will show Loading, a list of names, or an error message. No Redux. No caching libraries.",
    ],
    youWillLearn: [
      "Why useEffect exists",
      "The basic useEffect pattern",
      "When the effect runs",
      "What an API is",
      "How to fetch JSON and handle loading and errors",
    ],
  },
  lessons: [
    {
      slug: "why-useeffect-exists",
      title: "Why useEffect exists",
      minutes: "8 min",
      summary:
        "Rendering should describe the UI. Effects are extra steps after that description is on the screen.",
      blocks: [
        {
          type: "term",
          term: "Side effect",
          meaning:
            "Work that reaches outside the component’s return value: network requests, timers, logging. The JSX return is the main “effect” of the function: the UI. Everything else is a side effect.",
        },
        {
          type: "p",
          text: "If you call fetch() directly in the component body, it would run every re-render and could loop forever. useEffect gives that call a safe home.",
        },
        {
          type: "code",
          title: "Do not fetch in the main body",
          code: `function Users() {
  // Bad place for fetch — this runs every render.
  return <p>Users</p>;
}`,
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write two columns: “belongs in JSX” vs “belongs in an effect.”",
            "Put “show a name” in the first column and “download names from a server” in the second.",
          ],
        },
        {
          type: "check",
          question: "Why not fetch in the middle of the component with no hook?",
          options: [
            {
              id: "a",
              label: "It would run on every render and can spin out of control",
              correct: true,
            },
            {
              id: "b",
              label: "JavaScript cannot talk to the internet",
              correct: false,
            },
            {
              id: "c",
              label: "Vite forbids the word fetch",
              correct: false,
            },
          ],
          explain: "Effects run after render, on a schedule you control.",
        },
      ],
    },
    {
      slug: "useeffect-basics",
      title: "useEffect basics",
      minutes: "10 min",
      summary:
        "useEffect(function, dependencyArray) runs the function after render.",
      blocks: [
        {
          type: "term",
          term: "useEffect",
          meaning:
            "A React hook. You pass a function (the effect) and usually a list of values to watch (the dependency array). React runs the effect after the screen updates.",
        },
        {
          type: "code",
          title: "Log once after first paint",
          code: `import { useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("The component is on the screen.");
  }, []);

  return <p>Hello</p>;
}`,
        },
        {
          type: "p",
          text: "Import useEffect next to useState. Put the call at the top level of the component, like other hooks.",
        },
        {
          type: "tip",
          text: "The empty array [] at the end means “run this after the first render only.” We will explain that next.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add a useEffect that console.logs a welcome message.",
            "Open the browser console and confirm it prints.",
          ],
        },
        {
          type: "check",
          question: "When does the function inside useEffect run?",
          options: [
            {
              id: "a",
              label: "After React has updated the screen (and when dependencies say so)",
              correct: true,
            },
            {
              id: "b",
              label: "Before JavaScript exists",
              correct: false,
            },
            {
              id: "c",
              label: "Only inside CSS files",
              correct: false,
            },
          ],
          explain: "Effects are post-render work.",
        },
      ],
    },
    {
      slug: "when-effects-run",
      title: "When effects run",
      minutes: "8 min",
      summary:
        "The dependency array decides whether the effect runs once, always, or when a value changes.",
      blocks: [
        {
          type: "ul",
          items: [
            "[] — after the first render only. Good for “load data when the page opens.”",
            "[count] — after first render, and again whenever count changes.",
            "No array — after every render. Easy to create loops. Avoid this while you learn.",
          ],
        },
        {
          type: "code",
          title: "Load once",
          code: `useEffect(() => {
  // fetch users here
}, []);`,
        },
        {
          type: "p",
          text: "If you put setState inside an effect and you forget [], the effect can set state, re-render, run again, and never stop. Start with [] for this module’s fetch.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write three comments: run once, run when query changes, run every render.",
            "Match each to [], [query], or no array.",
          ],
        },
        {
          type: "check",
          question: "Which dependency list means “run after first render only”?",
          options: [
            {
              id: "a",
              label: "[]",
              correct: true,
            },
            {
              id: "b",
              label: "[count, name, city]",
              correct: false,
            },
            {
              id: "c",
              label: "Leaving the array off on purpose for a fetch",
              correct: false,
            },
          ],
          explain: "Empty array = mount once for our beginner fetch.",
        },
      ],
    },
    {
      slug: "what-is-an-api",
      title: "What is an API?",
      minutes: "8 min",
      summary:
        "An API is a way for your app to ask another program for data, usually over the internet.",
      blocks: [
        {
          type: "term",
          term: "API",
          meaning:
            "Application Programming Interface. A menu of requests you can make. A web API often uses a URL. You send a request; you get data back, commonly as JSON (JavaScript Object Notation — text that looks like objects and arrays).",
        },
        {
          type: "p",
          text: "A public practice API many tutorials use is JSONPlaceholder. One URL returns fake users. You will not need an account.",
        },
        {
          type: "code",
          title: "A URL you can open in the browser",
          code: `https://jsonplaceholder.typicode.com/users`,
        },
        {
          type: "p",
          text: "Opening that link shows JSON. Your React app will request the same URL with fetch, then turn it into cards.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Open the users URL in a browser tab.",
            "Find one name field in the JSON.",
          ],
        },
        {
          type: "check",
          question: "What is JSON in this lesson?",
          options: [
            {
              id: "a",
              label: "A common text format for API data, based on objects and arrays",
              correct: true,
            },
            {
              id: "b",
              label: "A CSS colour picker",
              correct: false,
            },
            {
              id: "c",
              label: "A type of image file only",
              correct: false,
            },
          ],
          explain: "APIs often reply with JSON. JavaScript can parse it.",
        },
      ],
    },
    {
      slug: "fetching-api-data",
      title: "Fetching API data",
      minutes: "10 min",
      summary:
        "fetch(url) starts a request. response.json() turns the body into a JavaScript value.",
      blocks: [
        {
          type: "term",
          term: "fetch",
          meaning:
            "A built-in browser function. You pass a URL. It returns a Promise. A Promise is a value that arrives later. async/await is a readable way to wait for it.",
        },
        {
          type: "code",
          title: "Fetch inside useEffect",
          code: `useEffect(() => {
  async function load() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    setUsers(data);
  }
  load();
}, []);`,
        },
        {
          type: "p",
          text: "The inner async function is a common beginner pattern because useEffect itself should not be async.",
        },
        {
          type: "tip",
          text: "If your network is off, fetch fails. That is why the next lesson adds an error state.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Copy the load pattern into a Users component.",
            "Store the array in useState and map names into a list.",
          ],
        },
        {
          type: "check",
          question: "Where should fetch live in this beginner pattern?",
          options: [
            {
              id: "a",
              label: "Inside useEffect, often in a small async function",
              correct: true,
            },
            {
              id: "b",
              label: "Inside a .css file",
              correct: false,
            },
            {
              id: "c",
              label: "Inside the key prop",
              correct: false,
            },
          ],
          explain: "Effect after paint, then setState with the result.",
        },
      ],
    },
    {
      slug: "loading-and-error-states",
      title: "Loading and error states",
      minutes: "8 min",
      summary:
        "The screen needs three moods: loading, success, and error.",
      blocks: [
        {
          type: "code",
          title: "Three pieces of state",
          code: `const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  async function load() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Could not load users.");
    } finally {
      setLoading(false);
    }
  }
  load();
}, []);`,
        },
        {
          type: "p",
          text: "try/catch handles failures. finally runs whether it worked or not, so you can turn loading off.",
        },
        {
          type: "code",
          title: "Choose the UI",
          code: `{loading && <p>Loading…</p>}
{error && <p>{error}</p>}
{!loading && !error && (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
)}`,
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add Loading… while loading is true.",
            "Add an error paragraph.",
          ],
        },
        {
          type: "check",
          question: "When should you show “Loading…”?",
          options: [
            {
              id: "a",
              label: "While waiting for the API response",
              correct: true,
            },
            {
              id: "b",
              label: "Only after the user closes the laptop",
              correct: false,
            },
            {
              id: "c",
              label: "Instead of CSS forever",
              correct: false,
            },
          ],
          explain: "loading starts true, then becomes false in finally.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: User / API Data Screen",
    goal: "Fetch users from JSONPlaceholder and show their names (and maybe email) with loading and error UI.",
    steps: [
      "Create a Users screen with users, loading, and error state.",
      "Fetch https://jsonplaceholder.typicode.com/users in useEffect with [].",
      "Map users to cards or list items with key={user.id}.",
      "Show Loading… and a friendly error if fetch fails.",
    ],
    starterCode: `import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Bad response");
        const data = await response.json();
        setUsers(data);
      } catch {
        setError("Could not load users. Check your internet and try again.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;`,
    doneWhen: [
      "Names appear after a short wait.",
      "You see Loading… first (throttle the network in DevTools if it is too fast).",
      "A failed request shows your error string, not a blank page.",
    ],
  },
  summary: {
    headline: "Effects load data; the UI has loading, success, and error",
    body: [
      "useEffect with [] is the beginner home for fetch. Keep three states so the user is never staring at an empty box with no explanation.",
      "Next you will split the app into pages with React Router.",
    ],
    recap: [
      "Explain why fetch belongs in useEffect",
      "Use [] to load once",
      "Show loading and error",
    ],
  },
  knowledgeCheck: {
    type: "check",
    question: "What does useEffect(() => { load(); }, []) mean?",
    options: [
      {
        id: "a",
        label: "Run load after the first render",
        correct: true,
      },
      {
        id: "b",
        label: "Never run load",
        correct: false,
      },
      {
        id: "c",
        label: "Run load inside CSS",
        correct: false,
      },
    ],
    explain: "Empty dependency array: once after mount.",
  },
};

export default reactFoundationsModule07;

import { PublishedModule } from "../../types";

export const reactFoundationsModule02: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "jsx-and-components",
  moduleNumber: "02",
  title: "JSX & Components",
  estimatedTime: "50–70 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title: "React Foundations Module 02 | JSX & Components | NSL Digital Lab",
    description:
      "Beginner React Module 02: JSX, HTML-like code, functional components, reuse, and a profile or product card mini project.",
    keywords:
      "JSX, React components, functional components, className, React beginner, product card",
    canonical: "/learn/react-foundations/jsx-and-components",
  },
  prevModule: {
    href: "/learn/react-foundations/react-and-modern-frontend",
    label: "Previous: Module 01",
  },
  nextModule: {
    href: "/learn/react-foundations/props-and-component-composition",
    label: "Next: Module 03",
  },
  intro: {
    headline: "Turn HTML-like tags into reusable pieces",
    body: [
      "In Module 01 you learned that React builds screens from components. This module is about the language those components speak.",
      "That language is called JSX. It looks like HTML, but it lives inside JavaScript. You will also write small functions that return JSX. Those functions are components.",
      "By the end you will split a card into its own component and use it more than once. You will not need props yet. Every card can still show the same text.",
    ],
    youWillLearn: [
      "What JSX is and why it looks like HTML",
      "Small HTML differences such as className",
      "How a functional component is just a function",
      "How to create a component and put it on the page",
      "How to reuse the same component twice",
    ],
  },
  lessons: [
    {
      slug: "what-is-jsx",
      title: "What is JSX?",
      minutes: "8 min",
      summary:
        "JSX is a way to write HTML-like tags inside JavaScript. React turns those tags into real elements.",
      blocks: [
        {
          type: "term",
          term: "JSX",
          meaning:
            "JavaScript XML. A syntax that lets you write tags such as <h1>Hello</h1> inside a JavaScript file. A tool like Vite converts JSX into normal JavaScript before the browser runs it.",
        },
        {
          type: "p",
          text: "You already know HTML tags. JSX reuses that idea so you can describe the screen next to your JavaScript, in the same file.",
        },
        {
          type: "code",
          title: "JSX inside a function",
          code: `function Title() {
  return <h1>Learning JSX</h1>;
}`,
        },
        {
          type: "p",
          text: "Read it as: this function returns a heading. The heading is not a string. It is JSX. React will turn it into a real heading in the browser.",
        },
        {
          type: "tip",
          text: "JSX is not HTML pasted into JavaScript. It is a special syntax that looks like HTML so beginners can read it quickly.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write a function called Hello that returns <p>Hello, JSX</p>.",
            "Say out loud: “JSX is HTML-like tags inside JavaScript.”",
          ],
        },
        {
          type: "check",
          question: "What is JSX?",
          options: [
            {
              id: "a",
              label: "A new database language",
              correct: false,
            },
            {
              id: "b",
              label: "HTML-like tags written inside JavaScript",
              correct: true,
            },
            {
              id: "c",
              label: "A CSS framework",
              correct: false,
            },
          ],
          explain: "JSX describes UI with tags, inside your JavaScript files.",
        },
      ],
    },
    {
      slug: "html-like-code-in-react",
      title: "Writing HTML-like code in React",
      minutes: "10 min",
      summary:
        "Most tags work like HTML. A few names change because this is still JavaScript.",
      blocks: [
        {
          type: "p",
          text: "You can use familiar tags: h1, p, ul, li, img, button, section. Wrap several tags in one parent, such as a div or section.",
        },
        {
          type: "code",
          title: "Several tags, one parent",
          code: `function Card() {
  return (
    <section>
      <h2>Notebook</h2>
      <p>A simple lined notebook.</p>
    </section>
  );
}`,
        },
        {
          type: "term",
          term: "className",
          meaning:
            "In HTML you write class=\"card\". In JSX you write className=\"card\". The word class is already used by JavaScript, so React uses className for CSS classes.",
        },
        {
          type: "ul",
          items: [
            "Use className instead of class.",
            "Images need a closing slash: <img src=\"photo.jpg\" alt=\"A notebook\" />.",
            "Put JavaScript values in curly braces: <h2>{title}</h2>.",
          ],
        },
        {
          type: "code",
          title: "className and curly braces",
          code: `function Card() {
  const title = "Notebook";
  return <h2 className="card-title">{title}</h2>;
}`,
        },
        {
          type: "tip",
          text: "If the page is blank, check that every opened tag is closed, and that several tags sit inside one parent.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write JSX for a section with a heading, a paragraph, and a button.",
            "Give the section className=\"card\".",
          ],
        },
        {
          type: "check",
          question: "How do you add a CSS class in JSX?",
          options: [
            {
              id: "a",
              label: "className=\"card\"",
              correct: true,
            },
            {
              id: "b",
              label: "css=\"card\"",
              correct: false,
            },
            {
              id: "c",
              label: "You cannot use CSS with React",
              correct: false,
            },
          ],
          explain: "Use className because class is a reserved JavaScript word.",
        },
      ],
    },
    {
      slug: "functional-components",
      title: "Functional components",
      minutes: "8 min",
      summary:
        "A functional component is a JavaScript function whose name starts with a capital letter and that returns JSX.",
      blocks: [
        {
          type: "term",
          term: "Functional component",
          meaning:
            "A function that returns UI. Beginner React uses these functions for almost everything you see on the screen. The name starts with a capital letter so React knows it is a component, not an HTML tag.",
        },
        {
          type: "code",
          title: "The smallest useful component",
          code: `function Greeting() {
  return <p>Welcome back</p>;
}`,
        },
        {
          type: "ul",
          items: [
            "Capital letter: Greeting, not greeting.",
            "Return JSX. If you forget return, nothing appears.",
            "You can use a const with an arrow function too: const Greeting = () => <p>Hi</p>;. This course will mostly use function Name() { ... }.",
          ],
        },
        {
          type: "p",
          text: "You do not need class components in this path. A class component is an older style. Stick to functions.",
        },
        {
          type: "tip",
          text: "If you write <greeting /> with a lowercase g, React treats it like a made-up HTML tag, not your function.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write function City() that returns a paragraph with your city name.",
            "Check that the function name starts with C.",
          ],
        },
        {
          type: "check",
          question: "Which name should you use for a component?",
          options: [
            {
              id: "a",
              label: "profileCard",
              correct: false,
            },
            {
              id: "b",
              label: "ProfileCard",
              correct: true,
            },
            {
              id: "c",
              label: "PROFILE",
              correct: false,
            },
          ],
          explain:
            "Start with a capital letter. ProfileCard is the usual style: each word capitalised.",
        },
      ],
    },
    {
      slug: "creating-and-using-components",
      title: "Creating and using components",
      minutes: "10 min",
      summary:
        "Create a component, then use it like a tag: <ProfileCard />.",
      blocks: [
        {
          type: "p",
          text: "Creating a component means writing the function. Using it means putting it inside another component’s JSX.",
        },
        {
          type: "code",
          title: "Create, then use",
          code: `function ProfileCard() {
  return (
    <article>
      <h2>Asha</h2>
      <p>Frontend learner</p>
    </article>
  );
}

function App() {
  return (
    <main>
      <h1>Team</h1>
      <ProfileCard />
    </main>
  );
}`,
        },
        {
          type: "term",
          term: "Self-closing tag",
          meaning:
            "<ProfileCard /> means “use this component, with nothing nested inside it.” The slash before > is required when you do not write a matching end tag.",
        },
        {
          type: "p",
          text: "You can keep ProfileCard in the same file as App while you learn. Later you can move it to ProfileCard.jsx and import it. Import means “bring this function in from another file.”",
        },
        {
          type: "code",
          title: "Optional: its own file",
          code: `// ProfileCard.jsx
function ProfileCard() {
  return <article>Asha</article>;
}

export default ProfileCard;

// App.jsx
import ProfileCard from "./ProfileCard.jsx";`,
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Create a Button component that returns <button>Click me</button>.",
            "Use <Button /> inside App.",
          ],
        },
        {
          type: "check",
          question: "How do you show a component called Header on the page?",
          options: [
            {
              id: "a",
              label: "Header()",
              correct: false,
            },
            {
              id: "b",
              label: "<Header />",
              correct: true,
            },
            {
              id: "c",
              label: "call Header",
              correct: false,
            },
          ],
          explain: "In JSX you use components like tags: <Header />.",
        },
      ],
    },
    {
      slug: "reusing-components",
      title: "Reusing components",
      minutes: "8 min",
      summary:
        "Write the card once. Place the tag as many times as you need.",
      blocks: [
        {
          type: "p",
          text: "Reuse means the same function draws more than one piece of UI. Each <ProductCard /> is a separate copy on the screen, but they share the same code.",
        },
        {
          type: "code",
          title: "One component, three cards",
          code: `function ProductCard() {
  return (
    <article className="card">
      <h3>Water bottle</h3>
      <p>₹299</p>
    </article>
  );
}

function Shop() {
  return (
    <section>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}`,
        },
        {
          type: "p",
          text: "All three cards show the same name and price. That is expected. In Module 03 you will pass different data into each card using props.",
        },
        {
          type: "tip",
          text: "If you copy-paste the whole article three times, you are not reusing yet. Extract a component, then repeat the tag.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Make a Badge component that returns <span>New</span>.",
            "Put <Badge /> next to two different headings.",
          ],
        },
        {
          type: "check",
          question: "What is the main win of reusing a component?",
          options: [
            {
              id: "a",
              label: "You write the UI once and show it in many places",
              correct: true,
            },
            {
              id: "b",
              label: "The browser blocks HTML",
              correct: false,
            },
            {
              id: "c",
              label: "You can skip CSS forever",
              correct: false,
            },
          ],
          explain: "One definition, many uses. Later, props make each use unique.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Profile or Product Card",
    goal: "Build a card component and use it at least twice on the page. Same content is fine. Focus on JSX and reuse, not props.",
    steps: [
      "Open App.jsx in your Vite project.",
      "Create a function ProductCard (or ProfileCard) that returns an article with a heading, a short paragraph, and a price or job title.",
      "Use className on the article if you want simple CSS.",
      "In App, render a page title and two (or more) <ProductCard /> tags.",
      "Optional: move the card into ProductCard.jsx and import it.",
    ],
    starterCode: `function ProductCard() {
  return (
    <article className="card">
      <h2>Ceramic mug</h2>
      <p>Handmade mug for morning tea.</p>
      <p>₹349</p>
    </article>
  );
}

function App() {
  return (
    <main>
      <h1>Shop</h1>
      <ProductCard />
      <ProductCard />
    </main>
  );
}

export default App;`,
    doneWhen: [
      "The card is a separate function, not only tags copied inside App.",
      "The same component appears at least twice.",
      "The page loads with no red errors in the terminal or browser console.",
    ],
  },
  summary: {
    headline: "You can write JSX and reuse a component",
    body: [
      "JSX is HTML-like code in JavaScript. Functional components are functions that return that JSX.",
      "You create a component once and use it with a capitalised tag. Next you will send different data into each copy.",
    ],
    recap: [
      "Explain JSX in one sentence",
      "Use className and curly braces",
      "Write a functional component and reuse it",
    ],
  },
  knowledgeCheck: {
    type: "check",
    question: "Which statement is true?",
    options: [
      {
        id: "a",
        label: "A component name should start with a lowercase letter",
        correct: false,
      },
      {
        id: "b",
        label: "You use a component in JSX like <ProductCard />",
        correct: true,
      },
      {
        id: "c",
        label: "JSX cannot contain headings or buttons",
        correct: false,
      },
    ],
    explain:
      "Components are functions with capital names, used as tags in JSX.",
  },
};

export default reactFoundationsModule02;

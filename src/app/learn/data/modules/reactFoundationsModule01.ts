import { PublishedModule } from "../../types";

export const reactFoundationsModule01: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "react-and-modern-frontend",
  moduleNumber: "01",
  title: "What is React?",
  estimatedTime: "45–60 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title: "React Foundations Module 01 | What is React? | NSL Digital Lab",
    description:
      "Beginner React Module 01: what React is, components, Vite, project files, and a simple profile card mini project.",
    keywords:
      "what is React, React beginner, React component, Vite React, first React project, React profile card",
    canonical: "/learn/react-foundations/react-and-modern-frontend",
  },
  intro: {
    headline: "Welcome to your first React module",
    body: [
      "You already know HTML, CSS, and some JavaScript. That is enough to start.",
      "Until now, you may have written one big HTML file and used JavaScript to change it. That works for small pages. It gets messy when the page has many parts that must stay in sync.",
      "React is a JavaScript library. A library is a set of ready-made tools you can use in your own code. React helps you build the screen from small pieces instead of one giant page.",
      "In this module you will learn what React is, why people use it, what a component is, how Vite starts a project, and what the new files mean. Then you will build a simple personal profile card.",
    ],
    youWillLearn: [
      "What React is, in plain language",
      "Why reusable pieces are easier than one huge page",
      "What a component is",
      "How React differs from writing HTML and JavaScript by hand",
      "How to start a project with Vite",
      "What the main files in a new project do",
    ],
  },
  lessons: [
    {
      slug: "what-is-react",
      title: "What React is, in simple words",
      minutes: "8 min",
      summary:
        "React is a JavaScript library that helps you build user interfaces from small pieces.",
      blocks: [
        {
          type: "p",
          text: "A user interface (often shortened to UI) is everything a person sees and clicks: headings, buttons, forms, cards, and menus.",
        },
        {
          type: "term",
          term: "React",
          meaning:
            "A JavaScript library made by Meta (the company behind Facebook). You use it to describe what the screen should look like. React then helps put that on the page.",
        },
        {
          type: "p",
          text: "You still write JavaScript. React does not replace HTML, CSS, or JavaScript. It sits on top of them and gives you a clearer way to build screens.",
        },
        {
          type: "p",
          text: "The key idea is this: you describe the UI with functions. When data changes, React updates the matching parts of the screen. You do not have to find each element by hand every time.",
        },
        {
          type: "code",
          title: "A tiny React example",
          code: `function Hello() {
  return <h1>Hello, React!</h1>;
}`,
        },
        {
          type: "p",
          text: "Do not worry if the tags inside JavaScript look new. That style is called JSX. You will practise it in Module 02. For now, read it as: “this function returns a heading.”",
        },
        {
          type: "term",
          term: "JSX",
          meaning:
            "A way to write HTML-like tags inside JavaScript. React turns those tags into real elements in the browser.",
        },
        {
          type: "tip",
          text: "If you forget a word, pause and re-read the boxed definition. Every new React word in this path is explained before we rely on it.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Say this out loud in your own words: “React is a JavaScript library for building the parts of a website people see and click.”",
            "Write one sentence: how is a library different from writing every tool yourself?",
          ],
        },
        {
          type: "check",
          question: "What is React?",
          options: [
            {
              id: "a",
              label: "A new programming language that replaces JavaScript",
              correct: false,
            },
            {
              id: "b",
              label: "A JavaScript library for building user interfaces",
              correct: true,
            },
            {
              id: "c",
              label: "A database for storing user accounts",
              correct: false,
            },
          ],
          explain:
            "React is still JavaScript. It is a library that helps you build the UI.",
        },
      ],
    },
    {
      slug: "why-react-is-useful",
      title: "Why React is useful",
      minutes: "8 min",
      summary:
        "React shines when you reuse the same piece of UI many times instead of copying HTML.",
      blocks: [
        {
          type: "p",
          text: "Imagine a shop page with 20 product cards. Each card has a photo, a name, a price, and a button. In plain HTML you might copy the same block 20 times. If you change the button style, you must edit 20 places.",
        },
        {
          type: "p",
          text: "With React you can write the card once, then reuse it. That reusable piece is a component. We will define that word in the next lesson. The benefit starts here: one change can update every card.",
        },
        {
          type: "ul",
          items: [
            "Reusable pieces: write a button or card once, use it many times.",
            "Clearer files: one file per piece of the screen, instead of one huge HTML file.",
            "Easier updates: when data changes, React redraws the matching part of the UI.",
          ],
        },
        {
          type: "code",
          title: "One card, used twice (idea only)",
          code: `function ProductCard() {
  return (
    <article>
      <h3>Notebook</h3>
      <p>₹199</p>
      <button>Add to cart</button>
    </article>
  );
}

function Shop() {
  return (
    <main>
      <ProductCard />
      <ProductCard />
    </main>
  );
}`,
        },
        {
          type: "p",
          text: "Both cards look the same for now. Later you will pass different names and prices into the same card. That is called passing props. We will learn props in Module 03. For now, notice the reuse: ProductCard appears twice.",
        },
        {
          type: "tip",
          text: "You do not need React for a one-page “Hello World” site. React becomes useful when the page has repeating parts or when the screen must change after clicks.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "List three repeating pieces on a website you use (for example: video cards on YouTube, posts on LinkedIn).",
            "For each one, write: “I would make a … component.”",
          ],
        },
        {
          type: "check",
          question: "Why do people use React instead of copying HTML over and over?",
          options: [
            {
              id: "a",
              label: "Because React cannot use CSS",
              correct: false,
            },
            {
              id: "b",
              label: "Because you can write a piece of UI once and reuse it",
              correct: true,
            },
            {
              id: "c",
              label: "Because React deletes JavaScript from the project",
              correct: false,
            },
          ],
          explain:
            "The main beginner win is reuse: one component, many places.",
        },
      ],
    },
    {
      slug: "what-is-a-component",
      title: "What a component is",
      minutes: "10 min",
      summary:
        "A component is a small part of the screen, written as a JavaScript function that returns UI.",
      blocks: [
        {
          type: "term",
          term: "Component",
          meaning:
            "A small, reusable part of the screen. In beginner React, a component is usually a function whose name starts with a capital letter and that returns JSX (those HTML-like tags).",
        },
        {
          type: "p",
          text: "Think of a webpage like a set of Lego bricks. The header is a brick. A profile card is a brick. A footer is a brick. Each brick is a component. You snap them together to make a page.",
        },
        {
          type: "code",
          title: "A component is just a function",
          code: `function Welcome() {
  return <p>Welcome to NSL Digital Lab</p>;
}`,
        },
        {
          type: "p",
          text: "Rules to remember now:",
        },
        {
          type: "ul",
          items: [
            "Name it with a capital letter: Welcome, not welcome. React uses this to tell components apart from normal HTML tags.",
            "Return one main piece of UI. You can wrap several tags in a parent tag such as <div> or <section>.",
            "Use it like a tag: <Welcome />. The slash at the end means “this tag has no children inside it.”",
          ],
        },
        {
          type: "code",
          title: "Using the component",
          code: `function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}`,
        },
        {
          type: "p",
          text: "App is also a component. Components can sit inside other components. That nesting is how you build a full page from small parts.",
        },
        {
          type: "tip",
          text: "If the screen is blank, check two things first: did you capitalise the component name, and did you remember return?",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "On paper, split a profile page into 3 components (for example: Photo, NameAndJob, AboutText).",
            "Write a fake function for one of them, like function Photo() { return <img alt=\"My photo\" />; }",
          ],
        },
        {
          type: "check",
          question: "Which of these is a valid beginner React component?",
          options: [
            {
              id: "a",
              label: "function header() { return <h1>Hi</h1>; }",
              correct: false,
            },
            {
              id: "b",
              label: "function Header() { return <h1>Hi</h1>; }",
              correct: true,
            },
            {
              id: "c",
              label: "const header = \"<h1>Hi</h1>\";",
              correct: false,
            },
          ],
          explain:
            "Component names start with a capital letter and the function returns UI (JSX).",
        },
      ],
    },
    {
      slug: "react-vs-html-javascript",
      title: "React vs HTML and JavaScript by hand",
      minutes: "8 min",
      summary:
        "Without React you find elements and change them. With React you describe the UI and let React update it.",
      blocks: [
        {
          type: "p",
          text: "Here is a common JavaScript pattern without React. You find an element, then change its text when something happens.",
        },
        {
          type: "code",
          title: "Vanilla JavaScript (no React)",
          code: `const heading = document.querySelector("h1");
heading.textContent = "Hello, Asha";`,
        },
        {
          type: "term",
          term: "Vanilla JavaScript",
          meaning:
            "Plain JavaScript with no extra library. You talk to the page using the browser’s built-in tools, such as document.querySelector.",
        },
        {
          type: "p",
          text: "That is fine for one heading. On a large page you must remember every id and class, and keep them in sync. A missed update leaves the screen showing old data.",
        },
        {
          type: "p",
          text: "In React you usually do not hunt for elements. You write a function that returns the UI for the current data. When the data changes, React calls the function again and updates the page.",
        },
        {
          type: "code",
          title: "Same idea in React (preview)",
          code: `function Greeting() {
  const name = "Asha";
  return <h1>Hello, {name}</h1>;
}`,
        },
        {
          type: "p",
          text: "The curly braces {name} mean “put this JavaScript value here.” You will practise that in Module 02. The important contrast: you describe the heading; you do not querySelector it.",
        },
        {
          type: "ul",
          items: [
            "HTML file: structure of the page.",
            "CSS: how it looks.",
            "JavaScript: behaviour and data.",
            "React: a way to connect structure and data using components.",
          ],
        },
        {
          type: "tip",
          text: "You will still use HTML knowledge (tags, headings, buttons) and CSS. React does not throw those away.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write 3 lines of vanilla JavaScript that would change a paragraph’s text.",
            "Then write a React function Greeting that returns a <p> with a name inside.",
          ],
        },
        {
          type: "check",
          question: "In beginner React, how do you usually update the screen?",
          options: [
            {
              id: "a",
              label: "You describe the UI in a component; React updates the page when data changes",
              correct: true,
            },
            {
              id: "b",
              label: "You must always use document.querySelector in every component",
              correct: false,
            },
            {
              id: "c",
              label: "You edit the live HTML in the browser and save it",
              correct: false,
            },
          ],
          explain:
            "React’s model is: describe the UI from data. Later modules will show state, which is data that can change.",
        },
      ],
    },
    {
      slug: "vite-and-starting-a-project",
      title: "What Vite does and how to start a project",
      minutes: "10 min",
      summary:
        "Vite is a helper tool that runs your React app locally and refreshes the browser as you save.",
      blocks: [
        {
          type: "term",
          term: "Vite",
          meaning:
            "A build tool. That means it prepares your files so the browser can run them. While you learn, Vite also starts a local server (a small website on your computer) and reloads when you save.",
        },
        {
          type: "p",
          text: "Browsers do not understand JSX by themselves. Vite (with React’s tools) turns your component files into JavaScript the browser can run. You do not do that conversion by hand.",
        },
        {
          type: "p",
          text: "You need Node.js installed. Node.js lets you run JavaScript tools on your computer, not only in the browser. After that, you use npm (Node’s package manager) to install libraries such as React.",
        },
        {
          type: "term",
          term: "npm",
          meaning:
            "A command-line tool that installs JavaScript packages (libraries) and runs scripts such as “start the dev server.”",
        },
        {
          type: "code",
          title: "Create a new React app with Vite",
          code: `npm create vite@latest my-first-react-app -- --template react
cd my-first-react-app
npm install
npm run dev`,
        },
        {
          type: "ul",
          items: [
            "The first command makes a new folder with a React starter.",
            "cd means “change directory” — go into that folder.",
            "npm install downloads React and other packages listed in package.json.",
            "npm run dev starts Vite. It prints a local address, often http://localhost:5173. Open that in your browser.",
          ],
        },
        {
          type: "p",
          text: "localhost means “this computer.” The number after the colon is a port — a numbered door on your computer. Only your machine is serving the app unless you deploy it later (Module 10).",
        },
        {
          type: "tip",
          text: "If a command fails, read the red error from the top. Common fixes: install Node.js LTS, close and reopen the terminal, and make sure you ran cd into the project folder before npm install.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Install Node.js LTS from the official Node website if you do not have it. Check with: node -v",
            "Run the four commands above in a folder where you keep coding practice.",
            "Open the localhost link. You should see the default Vite + React starter page.",
          ],
        },
        {
          type: "check",
          question: "What does npm run dev do in a Vite React project?",
          options: [
            {
              id: "a",
              label: "It publishes your site to the whole internet",
              correct: false,
            },
            {
              id: "b",
              label: "It starts a local development server so you can view the app in the browser",
              correct: true,
            },
            {
              id: "c",
              label: "It deletes node_modules",
              correct: false,
            },
          ],
          explain:
            "dev means development. You preview on your computer. Putting the site online comes much later.",
        },
      ],
    },
    {
      slug: "project-files",
      title: "A quick look at the files in a new project",
      minutes: "10 min",
      summary:
        "You only need a few files at the start: index.html, main file, App, and package.json.",
      blocks: [
        {
          type: "p",
          text: "A new Vite + React folder looks busy. Ignore most of it on day one. Here are the files that matter now.",
        },
        {
          type: "code",
          title: "The important parts",
          code: `my-first-react-app/
  index.html
  package.json
  src/
    main.jsx
    App.jsx
    App.css
    index.css`,
        },
        {
          type: "term",
          term: "index.html",
          meaning:
            "The single HTML page that loads your app. Inside it there is usually a <div id=\"root\"></div>. React will draw your UI inside that empty box.",
        },
        {
          type: "term",
          term: "src/main.jsx",
          meaning:
            "The starting JavaScript file. It finds the root div and tells React to render (draw) your App component there.",
        },
        {
          type: "term",
          term: "src/App.jsx",
          meaning:
            "Your main component for now. You will edit this file the most in Module 01.",
        },
        {
          type: "term",
          term: "package.json",
          meaning:
            "A list of the project’s name, scripts (like npm run dev), and packages it needs (React, Vite, and others).",
        },
        {
          type: "code",
          title: "What main.jsx is doing (typical starter)",
          code: `import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);`,
        },
        {
          type: "p",
          text: "Read that in order: import tools, import App, find the root element, render App. Render means “put this component on the page.”",
        },
        {
          type: "p",
          text: "You may also see node_modules. That folder holds downloaded packages. Do not edit it. You may see .gitignore, which tells Git which files not to save (node_modules is usually in that list).",
        },
        {
          type: "tip",
          text: "If your files end in .tsx instead of .jsx, the project uses TypeScript (JavaScript plus type labels). This course uses the idea of .jsx. The React ideas are the same.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Open index.html and find id=\"root\".",
            "Open src/App.jsx (or App.tsx) and change any heading text. Save. Watch the browser update.",
            "Write one line in a notebook for each file: index.html, main.jsx, App.jsx, package.json.",
          ],
        },
        {
          type: "check",
          question: "Where does React usually draw your app?",
          options: [
            {
              id: "a",
              label: "Inside the element with id \"root\" in index.html",
              correct: true,
            },
            {
              id: "b",
              label: "Inside package.json",
              correct: false,
            },
            {
              id: "c",
              label: "Inside node_modules only",
              correct: false,
            },
          ],
          explain:
            "index.html has an empty root box. main.jsx tells React to render App there.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: personal profile card",
    goal: "Edit App so the page shows a simple profile card: your name, a short line about you, and two facts. Use one component. You do not need props or state yet.",
    steps: [
      "Start (or keep) your Vite React project from the earlier lesson.",
      "Open src/App.jsx.",
      "Replace the starter demo with a function App that returns a <section> containing an <h1> with your name, a <p> with one sentence about you, and a <ul> with two <li> items (city and a hobby, for example).",
      "Optional: add a className on the section and a little CSS in App.css or index.css. In React, CSS classes use className, not class, because class is a reserved word in JavaScript.",
      "Save and check the browser. You should see your card, not the Vite logo demo.",
    ],
    starterCode: `function App() {
  return (
    <section className="card">
      <h1>Your name</h1>
      <p>I am learning React at NSL Digital Lab.</p>
      <ul>
        <li>City: Pune</li>
        <li>Hobby: Sketching</li>
      </ul>
    </section>
  );
}

export default App;`,
    doneWhen: [
      "npm run dev is running and the page loads without errors.",
      "The page shows your name, not “Your name” leftover text (unless that is really your name).",
      "The card is built with a React component (the App function), not only a static index.html rewrite.",
    ],
  },
};

export default reactFoundationsModule01;

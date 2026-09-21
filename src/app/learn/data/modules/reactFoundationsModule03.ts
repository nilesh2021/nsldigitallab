import { PublishedModule } from "../../types";

export const reactFoundationsModule03: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "props-and-component-composition",
  moduleNumber: "03",
  title: "Props",
  estimatedTime: "50–70 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title: "React Foundations Module 03 | Props | NSL Digital Lab",
    description:
      "Beginner React Module 03: props, parent to child data, multiple props, children, and reusable product cards.",
    keywords:
      "React props, parent child components, children prop, reusable cards, beginner React",
    canonical: "/learn/react-foundations/props-and-component-composition",
  },
  prevModule: {
    href: "/learn/react-foundations/jsx-and-components",
    label: "Previous: Module 02",
  },
  nextModule: {
    href: "/learn/react-foundations/state-and-events",
    label: "Next: Module 04",
  },
  intro: {
    headline: "One card, many different details",
    body: [
      "In Module 02 every copy of your card looked the same. Real shops need different names and prices.",
      "Props are how a parent component sends information to a child. Think of props as labelled stickers you attach to a tag: name, price, image.",
      "You will read those stickers inside the child and show them on the screen. You will also meet children: content you nest between opening and closing tags.",
    ],
    youWillLearn: [
      "What props are",
      "How a parent passes data to a child",
      "How to use props inside a component",
      "How to pass more than one prop",
      "What children means in React",
    ],
  },
  lessons: [
    {
      slug: "what-are-props",
      title: "What are props?",
      minutes: "8 min",
      summary:
        "Props are inputs you pass into a component, similar to arguments you pass into a function.",
      blocks: [
        {
          type: "term",
          term: "Props",
          meaning:
            "Short for properties. Information a parent sends to a child component. The child can read props and display them. The child should not change the props it received.",
        },
        {
          type: "p",
          text: "A JavaScript function can take arguments: greet(\"Asha\"). A React component can take props: <Greeting name=\"Asha\" />.",
        },
        {
          type: "code",
          title: "Props look like HTML attributes",
          code: `<ProductCard name="Mug" price="₹349" />`,
        },
        {
          type: "p",
          text: "name and price are prop names. \"Mug\" and \"₹349\" are the values. You choose the names. Keep them short and clear.",
        },
        {
          type: "tip",
          text: "If you already understand function arguments, you already understand the idea of props.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "List three props a profile card might need (for example: name, city, photo).",
            "Write one fake tag: <ProfileCard name=\"...\" city=\"...\" />.",
          ],
        },
        {
          type: "check",
          question: "Props are best described as…",
          options: [
            {
              id: "a",
              label: "Data sent from a parent component into a child",
              correct: true,
            },
            {
              id: "b",
              label: "A replacement for CSS",
              correct: false,
            },
            {
              id: "c",
              label: "A server database",
              correct: false,
            },
          ],
          explain: "Parent sends, child displays. That is the props flow.",
        },
      ],
    },
    {
      slug: "parent-to-child",
      title: "Passing data from parent to child",
      minutes: "8 min",
      summary:
        "The parent writes the values. The child only receives them.",
      blocks: [
        {
          type: "term",
          term: "Parent and child",
          meaning:
            "If App contains <ProductCard />, App is the parent and ProductCard is the child. The parent decides what data to send.",
        },
        {
          type: "code",
          title: "Parent chooses the values",
          code: `function App() {
  return (
    <section>
      <ProductCard name="Mug" />
      <ProductCard name="Bottle" />
    </section>
  );
}`,
        },
        {
          type: "p",
          text: "Both children use the same ProductCard function. The name prop is different, so the screen can show two products.",
        },
        {
          type: "p",
          text: "Data flows down: parent to child. In this beginner path we will not send data back up yet. Buttons that change data will use state in Module 04.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write an App that uses <Hello name=\"Asha\" /> and <Hello name=\"Rohit\" />.",
            "You can leave the Hello function empty for a moment. You will fill it next.",
          ],
        },
        {
          type: "check",
          question: "Who decides the prop values?",
          options: [
            {
              id: "a",
              label: "The parent component that writes the tag",
              correct: true,
            },
            {
              id: "b",
              label: "The CSS file",
              correct: false,
            },
            {
              id: "c",
              label: "The browser address bar",
              correct: false,
            },
          ],
          explain: "The parent writes name=\"Mug\". The child reads it.",
        },
      ],
    },
    {
      slug: "using-props-in-components",
      title: "Using props in components",
      minutes: "10 min",
      summary:
        "The child function receives one object. You read fields from that object.",
      blocks: [
        {
          type: "p",
          text: "React calls your component function and passes one argument: an object holding every prop.",
        },
        {
          type: "code",
          title: "Read props.name",
          code: `function Hello(props) {
  return <p>Hello, {props.name}</p>;
}`,
        },
        {
          type: "p",
          text: "Many people unpack the object in the parameter list. That is called destructuring: pull name out so you can write {name} instead of {props.name}.",
        },
        {
          type: "code",
          title: "Same idea, shorter",
          code: `function Hello({ name }) {
  return <p>Hello, {name}</p>;
}`,
        },
        {
          type: "term",
          term: "Destructuring",
          meaning:
            "A JavaScript shortcut. function Hello({ name }) takes the name field out of the props object for you.",
        },
        {
          type: "tip",
          text: "Forgot curly braces around the value? {name} prints the text. name without braces would look for an HTML tag called name.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Finish Hello so it shows the name prop.",
            "Use it twice with two different names.",
          ],
        },
        {
          type: "check",
          question: "Inside Hello({ name }), how do you show the name?",
          options: [
            {
              id: "a",
              label: "<p>Hello, {name}</p>",
              correct: true,
            },
            {
              id: "b",
              label: "<p>Hello, name</p> (no braces)",
              correct: false,
            },
            {
              id: "c",
              label: "<p>Hello, [name]</p>",
              correct: false,
            },
          ],
          explain: "Curly braces insert a JavaScript value into JSX.",
        },
      ],
    },
    {
      slug: "multiple-props",
      title: "Multiple props",
      minutes: "8 min",
      summary:
        "Pass as many labelled values as you need. Keep names consistent.",
      blocks: [
        {
          type: "code",
          title: "Name, price, and a short line",
          code: `function ProductCard({ name, price, blurb }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p>{price}</p>
    </article>
  );
}

function App() {
  return (
    <ProductCard
      name="Mug"
      price="₹349"
      blurb="For morning tea."
    />
  );
}`,
        },
        {
          type: "p",
          text: "Each prop is one label. You can pass numbers too: stock={12}. Numbers and variables use curly braces. Quoted text can use quotes like HTML.",
        },
        {
          type: "p",
          text: "If a prop is missing, the value is undefined. You can show a fallback with || : {blurb || \"No description yet.\"}",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add an inStock prop that is the text \"In stock\" or \"Sold out\".",
            "Show it in a small paragraph on the card.",
          ],
        },
        {
          type: "check",
          question: "Can one component receive more than one prop?",
          options: [
            {
              id: "a",
              label: "Yes. Each prop has its own name.",
              correct: true,
            },
            {
              id: "b",
              label: "No. Only one prop is allowed forever.",
              correct: false,
            },
            {
              id: "c",
              label: "Only if you use CSS modules",
              correct: false,
            },
          ],
          explain: "Name, price, blurb — as many labels as you need.",
        },
      ],
    },
    {
      slug: "children",
      title: "Children",
      minutes: "8 min",
      summary:
        "children is the content nested between a component’s opening and closing tags.",
      blocks: [
        {
          type: "term",
          term: "children",
          meaning:
            "A special prop. If you write <Card>Hello</Card>, the word Hello is passed to Card as children. You place {children} where that nested content should appear.",
        },
        {
          type: "code",
          title: "A simple wrapper",
          code: `function Panel({ children }) {
  return <section className="panel">{children}</section>;
}

function App() {
  return (
    <Panel>
      <h2>News</h2>
      <p>Class starts Monday.</p>
    </Panel>
  );
}`,
        },
        {
          type: "p",
          text: "Wrappers like Panel, Card, or Layout are useful when the inside content changes but the outer box stays the same.",
        },
        {
          type: "tip",
          text: "Self-closing <Panel /> has no children. Use <Panel>...</Panel> when you want nested content.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Create Box({ children }) that wraps children in a div with className=\"box\".",
            "Put a heading and a paragraph inside <Box>.",
          ],
        },
        {
          type: "check",
          question: "In <Hint>Save often</Hint>, what is children?",
          options: [
            {
              id: "a",
              label: "The text Save often",
              correct: true,
            },
            {
              id: "b",
              label: "The file name App.jsx",
              correct: false,
            },
            {
              id: "c",
              label: "Always the number 0",
              correct: false,
            },
          ],
          explain: "Whatever you nest between the tags becomes children.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Reusable Product Cards",
    goal: "Build one ProductCard that takes props, then show at least three products with different data.",
    steps: [
      "Create ProductCard({ name, price, blurb }).",
      "Show those three values in an article.",
      "In App, render three cards with different names and prices.",
      "Optional: wrap the list in a Panel that uses children.",
    ],
    starterCode: `function ProductCard({ name, price, blurb }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p>{price}</p>
    </article>
  );
}

function App() {
  return (
    <main>
      <h1>Today’s picks</h1>
      <ProductCard name="Mug" price="₹349" blurb="Morning tea." />
      <ProductCard name="Bottle" price="₹299" blurb="Keep water handy." />
      <ProductCard name="Notebook" price="₹199" blurb="Lined pages." />
    </main>
  );
}

export default App;`,
    doneWhen: [
      "There is only one ProductCard function.",
      "At least three cards show different names and prices.",
      "You did not copy-paste three different card functions.",
    ],
  },
  summary: {
    headline: "Props make the same component useful in many situations",
    body: [
      "A parent passes labelled data. A child reads that data and displays it. children lets you nest extra JSX inside a wrapper.",
      "You still have not stored values that change after a click. That is state, next module.",
    ],
    recap: [
      "Pass props from parent to child",
      "Read props with props.name or { name }",
      "Use children for nested content",
    ],
  },
  knowledgeCheck: {
    type: "check",
    question: "How does a child show a prop called title?",
    options: [
      {
        id: "a",
        label: "By writing {title} (or {props.title}) inside its JSX",
        correct: true,
      },
      {
        id: "b",
        label: "By editing index.html by hand every time",
        correct: false,
      },
      {
        id: "c",
        label: "By renaming the file to title.jsx",
        correct: false,
      },
    ],
    explain: "Props arrive as data. JSX curly braces print that data.",
  },
};

export default reactFoundationsModule03;

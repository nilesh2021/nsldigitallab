import { PublishedModule } from "../../types";

export const reactFoundationsModule04: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "state-and-events",
  moduleNumber: "04",
  title: "State & Events",
  estimatedTime: "55–75 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title: "React Foundations Module 04 | State & Events | NSL Digital Lab",
    description:
      "Beginner React Module 04: state, useState, click events, inputs, and an interactive counter mini project.",
    keywords:
      "useState, React state, onClick, controlled input beginner, React counter",
    canonical: "/learn/react-foundations/state-and-events",
  },
  prevModule: {
    href: "/learn/react-foundations/props-and-component-composition",
    label: "Previous: Module 03",
  },
  nextModule: {
    href: "/learn/react-foundations/conditional-rendering-and-lists",
    label: "Next: Module 05",
  },
  intro: {
    headline: "Make the screen change after a click",
    body: [
      "Props come from the parent and stay as they were passed. Many screens need values that change after the page loads: a count, a typed name, a light switch.",
      "State is data a component remembers and can update. useState is the React helper that gives you that memory.",
      "You will connect buttons and inputs so the UI updates when the user acts.",
    ],
    youWillLearn: [
      "What state is",
      "How useState works in simple terms",
      "How to update state",
      "How click events work",
      "How an input can live in state",
    ],
  },
  lessons: [
    {
      slug: "what-is-state",
      title: "What is state?",
      minutes: "8 min",
      summary:
        "State is information a component keeps that can change over time, causing React to redraw the UI.",
      blocks: [
        {
          type: "term",
          term: "State",
          meaning:
            "Data that belongs to a component and can change while the app is open. When state changes, React calls your component again and shows the new UI.",
        },
        {
          type: "p",
          text: "A normal variable inside a function resets every time the function runs. State is special: React keeps it between those runs.",
        },
        {
          type: "ul",
          items: [
            "Props: passed in from outside. Treat them as read-only.",
            "State: remembered inside the component. You update it with a setter function.",
          ],
        },
        {
          type: "code",
          title: "A value that should be state",
          code: `// A counter’s number changes when someone clicks.
// That number is state, not a prop from the parent.`,
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Name two things on a website that change after you click (likes, cart count, a menu open/closed).",
            "Write: “That would be state.”",
          ],
        },
        {
          type: "check",
          question: "State is…",
          options: [
            {
              id: "a",
              label: "Data a component remembers and can change",
              correct: true,
            },
            {
              id: "b",
              label: "Only CSS colours",
              correct: false,
            },
            {
              id: "c",
              label: "The name of the HTML file",
              correct: false,
            },
          ],
          explain: "State is changeable data that React keeps for the component.",
        },
      ],
    },
    {
      slug: "usestate-explained",
      title: "useState explained simply",
      minutes: "10 min",
      summary:
        "useState returns the current value and a function to update it.",
      blocks: [
        {
          type: "term",
          term: "useState",
          meaning:
            "A React hook. A hook is a function whose name starts with use and that lets a component tap into React features. useState gives you a piece of state.",
        },
        {
          type: "code",
          title: "The pattern you will type often",
          code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <p>Count: {count}</p>;
}`,
        },
        {
          type: "ul",
          items: [
            "useState(0) means “start at 0.”",
            "count is the current value.",
            "setCount is the function you call to change it.",
            "The square brackets are destructuring an array of two items.",
          ],
        },
        {
          type: "p",
          text: "You import useState from \"react\" at the top of the file. Call it at the top of your component, not inside an if or a loop. That rule keeps React’s memory in order.",
        },
        {
          type: "tip",
          text: "Name the setter with set plus the value: count → setCount, name → setName.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write useState for a name that starts as \"Guest\".",
            "Show {name} in a heading.",
          ],
        },
        {
          type: "check",
          question: "What does const [count, setCount] = useState(0) give you?",
          options: [
            {
              id: "a",
              label: "The current count and a function to update it, starting at 0",
              correct: true,
            },
            {
              id: "b",
              label: "A CSS class called count",
              correct: false,
            },
            {
              id: "c",
              label: "A new HTML page",
              correct: false,
            },
          ],
          explain: "Two pieces: the value and the setter. Initial value is 0.",
        },
      ],
    },
    {
      slug: "updating-state",
      title: "Updating state",
      minutes: "8 min",
      summary:
        "Call the setter with the next value. React then redraws the component.",
      blocks: [
        {
          type: "code",
          title: "Set a new number",
          code: `setCount(count + 1);`,
        },
        {
          type: "p",
          text: "Do not write count = count + 1. That does not tell React to update the screen. Always use the setter.",
        },
        {
          type: "p",
          text: "When you call setCount, React plans a re-render. A re-render means your function runs again with the new count, and the paragraph shows the new number.",
        },
        {
          type: "term",
          term: "Re-render",
          meaning:
            "React running your component function again so the JSX matches the latest state and props.",
        },
        {
          type: "tip",
          text: "If the number on screen does not change, you probably updated a normal variable instead of using setCount.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write setCount(0) in a comment and explain when you would use it (reset).",
            "Write setCount(count + 1) and explain it in one sentence.",
          ],
        },
        {
          type: "check",
          question: "How should you change state?",
          options: [
            {
              id: "a",
              label: "Call the setter, such as setCount(count + 1)",
              correct: true,
            },
            {
              id: "b",
              label: "Write count = count + 1",
              correct: false,
            },
            {
              id: "c",
              label: "Edit node_modules",
              correct: false,
            },
          ],
          explain: "Only the setter notifies React.",
        },
      ],
    },
    {
      slug: "click-events",
      title: "Click events",
      minutes: "8 min",
      summary:
        "onClick runs a function when the user clicks a button.",
      blocks: [
        {
          type: "term",
          term: "Event",
          meaning:
            "Something that happened, such as a click or a key press. In JSX you listen with camelCase names: onClick, onChange.",
        },
        {
          type: "code",
          title: "Button that adds one",
          code: `function Counter() {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handlePlus}>Plus</button>
    </div>
  );
}`,
        },
        {
          type: "p",
          text: "Write onClick={handlePlus} not onClick={handlePlus()}. The extra () would run the function immediately when React draws the button, not when the user clicks.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add a Minus button that runs setCount(count - 1).",
            "Add a Reset button that runs setCount(0).",
          ],
        },
        {
          type: "check",
          question: "Which onClick is correct if the function is named handlePlus?",
          options: [
            {
              id: "a",
              label: "onClick={handlePlus}",
              correct: true,
            },
            {
              id: "b",
              label: "onClick={handlePlus()}",
              correct: false,
            },
            {
              id: "c",
              label: "click=handlePlus",
              correct: false,
            },
          ],
          explain:
            "Pass the function. Do not call it during render.",
        },
      ],
    },
    {
      slug: "input-and-state",
      title: "Input and state",
      minutes: "10 min",
      summary:
        "Store the input’s text in state so the box and the page stay in sync.",
      blocks: [
        {
          type: "p",
          text: "An HTML input has its own memory. In React we often store that text in state and set the input’s value from state. Then React is the single source of truth.",
        },
        {
          type: "code",
          title: "A name field",
          code: `function NameBox() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Hello, {name || "friend"}</p>
    </div>
  );
}`,
        },
        {
          type: "term",
          term: "onChange",
          meaning:
            "Fires when the user types. event.target.value is the current text in the box.",
        },
        {
          type: "p",
          text: "You will practise this more with full forms in Module 06. For now, see that typing updates state, and the paragraph uses the same state.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Build a small page with an input and a preview paragraph.",
            "Start the state as an empty string.",
          ],
        },
        {
          type: "check",
          question: "How do you read what the user typed in an input?",
          options: [
            {
              id: "a",
              label: "event.target.value inside onChange",
              correct: true,
            },
            {
              id: "b",
              label: "document.cookie only",
              correct: false,
            },
            {
              id: "c",
              label: "package.json",
              correct: false,
            },
          ],
          explain: "The change event carries the new string in target.value.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Interactive Counter",
    goal: "Build a counter with plus, minus, and reset. Show the number on the page. Optional: a text input that greets the user.",
    steps: [
      "Create a Counter component with useState(0).",
      "Show the count in a large heading.",
      "Add Plus, Minus, and Reset buttons with onClick handlers.",
      "Optional: add a name input using another useState.",
    ],
    starterCode: `import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </main>
  );
}

export default App;`,
    doneWhen: [
      "Clicking Plus increases the number on screen.",
      "Reset returns the number to 0.",
      "You used useState, not a plain let count = 0 that never updates the UI.",
    ],
  },
  summary: {
    headline: "State plus events make the UI interactive",
    body: [
      "useState holds a value. The setter updates it. onClick and onChange connect user actions to those updates.",
      "Next you will show lists and hide pieces of UI based on simple conditions.",
    ],
    recap: [
      "Explain state vs props",
      "Call useState and a setter",
      "Wire a button with onClick",
    ],
  },
  knowledgeCheck: {
    type: "check",
    question: "What happens when you call setCount(5)?",
    options: [
      {
        id: "a",
        label: "React updates the state and redraws the component",
        correct: true,
      },
      {
        id: "b",
        label: "The computer restarts",
        correct: false,
      },
      {
        id: "c",
        label: "CSS is deleted",
        correct: false,
      },
    ],
    explain: "The setter schedules a re-render with the new value.",
  },
};

export default reactFoundationsModule04;

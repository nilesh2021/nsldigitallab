import { PublishedModule } from "../../types";

export const reactFoundationsModule05: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "conditional-rendering-and-lists",
  moduleNumber: "05",
  title: "Lists & Conditional Rendering",
  estimatedTime: "55–75 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title:
      "React Foundations Module 05 | Lists & Conditional Rendering | NSL Digital Lab",
    description:
      "Beginner React Module 05: map, keys, showing and hiding UI, if/else, and a task list mini project.",
    keywords:
      "React map, keys, conditional rendering, task list, beginner React lists",
    canonical: "/learn/react-foundations/conditional-rendering-and-lists",
  },
  prevModule: {
    href: "/learn/react-foundations/state-and-events",
    label: "Previous: Module 04",
  },
  nextModule: {
    href: "/learn/react-foundations/forms-and-user-input",
    label: "Next: Module 06",
  },
  intro: {
    headline: "Show many items, or hide a piece of the screen",
    body: [
      "Shops, chats, and to-do apps all draw a list from an array. An array is a JavaScript list of values, written with square brackets.",
      "You will use map() to turn each item into JSX. You will also show different UI when the list is empty or when a flag is true.",
      "The mini project is a small task list you can add items to.",
    ],
    youWillLearn: [
      "How to render multiple items",
      "What map() does",
      "Why keys matter",
      "How to show or hide UI",
      "Simple if/else in JSX",
    ],
  },
  lessons: [
    {
      slug: "rendering-multiple-items",
      title: "Rendering multiple items",
      minutes: "8 min",
      summary:
        "Keep items in an array, then draw one element for each item.",
      blocks: [
        {
          type: "p",
          text: "You could write three <li> tags by hand. That does not scale. Store the data in an array, then let React create the tags.",
        },
        {
          type: "code",
          title: "Data first",
          code: `const tasks = ["Buy milk", "Read Module 05", "Walk"];`,
        },
        {
          type: "p",
          text: "Each string will become one row on the screen. Later the array can live in state so you can add and remove rows.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write an array of three city names.",
            "Imagine each city as one card on a travel page.",
          ],
        },
        {
          type: "check",
          question: "Where should a list of tasks usually live?",
          options: [
            {
              id: "a",
              label: "In a JavaScript array (often in state)",
              correct: true,
            },
            {
              id: "b",
              label: "Only inside package.json scripts",
              correct: false,
            },
            {
              id: "c",
              label: "In the Vite logo SVG",
              correct: false,
            },
          ],
          explain: "Arrays hold lists. State lets the list change.",
        },
      ],
    },
    {
      slug: "map-explained",
      title: "map() explained",
      minutes: "10 min",
      summary:
        "map() runs a function for every item and returns a new array. In React that new array is often an array of JSX.",
      blocks: [
        {
          type: "term",
          term: "map()",
          meaning:
            "A method on arrays. numbers.map(n => n * 2) turns [1, 2] into [2, 4]. In React, tasks.map(task => <li>{task}</li>) turns strings into list items.",
        },
        {
          type: "code",
          title: "Array to JSX",
          code: `function TaskList() {
  const tasks = ["Buy milk", "Read"];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  );
}`,
        },
        {
          type: "p",
          text: "The curly braces around tasks.map(...) let you put JavaScript inside JSX. The result is a list of <li> elements.",
        },
        {
          type: "tip",
          text: "map returns a new array. It does not change the original array. That is helpful when we add state later.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Map an array of names into <p> tags.",
            "Put that map inside a <section>.",
          ],
        },
        {
          type: "check",
          question: "What does tasks.map((task) => <li>{task}</li>) produce?",
          options: [
            {
              id: "a",
              label: "An array of <li> elements, one per task",
              correct: true,
            },
            {
              id: "b",
              label: "A CSS stylesheet",
              correct: false,
            },
            {
              id: "c",
              label: "A new npm package",
              correct: false,
            },
          ],
          explain: "Each array item becomes one piece of JSX.",
        },
      ],
    },
    {
      slug: "keys",
      title: "Keys",
      minutes: "8 min",
      summary:
        "A key is a unique label so React can tell list items apart when the list changes.",
      blocks: [
        {
          type: "term",
          term: "key",
          meaning:
            "A special prop on elements in a list. It should be a stable unique id. React uses it to match old items to new items when you add, remove, or reorder.",
        },
        {
          type: "code",
          title: "Prefer a real id",
          code: `const tasks = [
  { id: "t1", text: "Buy milk" },
  { id: "t2", text: "Read" },
];

tasks.map((task) => <li key={task.id}>{task.text}</li>);`,
        },
        {
          type: "p",
          text: "Using the array index as a key (key={index}) can confuse React if items move. For this beginner path, use an id field when you can. If the list never changes, a unique string is still better than nothing.",
        },
        {
          type: "tip",
          text: "If React warns “each child should have a unique key,” you forgot key or two items share the same key.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Rewrite your cities as objects with id and name.",
            "Map them with key={city.id}.",
          ],
        },
        {
          type: "check",
          question: "Why does React want a key on list items?",
          options: [
            {
              id: "a",
              label: "So it can track each item when the list updates",
              correct: true,
            },
            {
              id: "b",
              label: "So CSS colours become brighter",
              correct: false,
            },
            {
              id: "c",
              label: "So Vite can skip npm install",
              correct: false,
            },
          ],
          explain: "Keys are identity labels, not styling.",
        },
      ],
    },
    {
      slug: "showing-hiding-ui",
      title: "Showing/hiding UI",
      minutes: "8 min",
      summary:
        "Render a piece of JSX only when a condition is true.",
      blocks: [
        {
          type: "term",
          term: "Conditional rendering",
          meaning:
            "Choosing what to show based on a yes/no value. If there are no tasks, show “No tasks yet.” If there are tasks, show the list.",
        },
        {
          type: "code",
          title: "&& means “show this if true”",
          code: `{isOpen && <p>The panel is open.</p>}`,
        },
        {
          type: "p",
          text: "If isOpen is true, React shows the paragraph. If isOpen is false, React shows nothing for that line.",
        },
        {
          type: "code",
          title: "A toggle with state",
          code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>
  Toggle
</button>
{isOpen && <p>Hello</p>}`,
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Make a Show details button that toggles a paragraph.",
            "Use a boolean state such as showDetails.",
          ],
        },
        {
          type: "check",
          question: "What does {isOpen && <p>Hi</p>} do when isOpen is false?",
          options: [
            {
              id: "a",
              label: "It hides the paragraph",
              correct: true,
            },
            {
              id: "b",
              label: "It crashes npm",
              correct: false,
            },
            {
              id: "c",
              label: "It always shows Hi",
              correct: false,
            },
          ],
          explain: "false && anything → React renders nothing there.",
        },
      ],
    },
    {
      slug: "if-else-conditional-ui",
      title: "if/else and conditional UI",
      minutes: "8 min",
      summary:
        "Use a ternary or an if statement when you must choose between two screens.",
      blocks: [
        {
          type: "term",
          term: "Ternary",
          meaning:
            "A short if/else: condition ? valueIfTrue : valueIfFalse. In JSX: {tasks.length === 0 ? <p>Empty</p> : <ul>...</ul>}",
        },
        {
          type: "code",
          title: "Empty vs list",
          code: `{tasks.length === 0 ? (
  <p>No tasks yet.</p>
) : (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>{task.text}</li>
    ))}
  </ul>
)}`,
        },
        {
          type: "p",
          text: "You can also use a normal if before the return and pick a variable to render. Choose the style that you can read a week later.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "If a loggedIn boolean is false, show “Please log in.”",
            "If it is true, show “Welcome back.”",
          ],
        },
        {
          type: "check",
          question: "Which JSX chooses between two messages?",
          options: [
            {
              id: "a",
              label: "{ok ? <p>Yes</p> : <p>No</p>}",
              correct: true,
            },
            {
              id: "b",
              label: "{ok ?? css}",
              correct: false,
            },
            {
              id: "c",
              label: "<if ok>Yes</if>",
              correct: false,
            },
          ],
          explain: "JSX has no <if> tag. Use JavaScript: ternary or &&.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Task List",
    goal: "Show a list of tasks from state. Add a new task from a text box. Show an empty message when there are none.",
    steps: [
      "Keep tasks as an array of objects with id and text.",
      "Map them into a list with keys.",
      "Add an input and a button that appends a new task (copy the array and add one item).",
      "If the array is empty, show “No tasks yet.”",
    ],
    starterCode: `import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: "t1", text: "Open this project" },
  ]);
  const [text, setText] = useState("");

  function addTask() {
    if (!text.trim()) return;
    const next = { id: String(Date.now()), text: text.trim() };
    setTasks([...tasks, next]);
    setText("");
  }

  return (
    <main>
      <h1>Tasks</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Add</button>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;`,
    doneWhen: [
      "New tasks appear in the list after Add.",
      "Each item has a key.",
      "The empty message shows when you remove all tasks (optional: add a delete button).",
    ],
  },
  summary: {
    headline: "Arrays become lists; conditions become different screens",
    body: [
      "map() turns data into JSX. Keys identify each row. && and ternaries choose what to show.",
      "You already used a small input. Next module is a full form with submit and simple checks.",
    ],
    recap: [
      "Render a list with map and keys",
      "Show an empty state",
      "Add an item by copying the array into new state",
    ],
  },
  knowledgeCheck: {
    type: "check",
    question: "Which list rendering is the React-friendly pattern?",
    options: [
      {
        id: "a",
        label: "items.map((item) => <li key={item.id}>{item.text}</li>)",
        correct: true,
      },
      {
        id: "b",
        label: "Copy and paste 50 <li> tags with no data",
        correct: false,
      },
      {
        id: "c",
        label: "Put the array inside a CSS comment",
        correct: false,
      },
    ],
    explain: "Data in an array, UI from map, identity from key.",
  },
};

export default reactFoundationsModule05;

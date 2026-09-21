import { PublishedModule } from "../../types";

export const reactFoundationsModule06: PublishedModule = {
  pathSlug: "react-foundations",
  pathTitle: "React Foundations",
  moduleSlug: "forms-and-user-input",
  moduleNumber: "06",
  title: "Forms & User Input",
  estimatedTime: "55–75 minutes",
  syllabusHref: "/learn/react-foundations",
  seo: {
    title: "React Foundations Module 06 | Forms & User Input | NSL Digital Lab",
    description:
      "Beginner React Module 06: HTML forms, inputs, controlled fields, submit, basic validation, and a contact form.",
    keywords:
      "React forms, controlled input, onSubmit, form validation beginner, contact form",
    canonical: "/learn/react-foundations/forms-and-user-input",
  },
  prevModule: {
    href: "/learn/react-foundations/conditional-rendering-and-lists",
    label: "Previous: Module 05",
  },
  nextModule: {
    href: "/learn/react-foundations/useeffect-and-api-data",
    label: "Next: Module 07",
  },
  intro: {
    headline: "Forms that React can actually read",
    body: [
      "HTML forms work in React, but we usually connect each field to state. That way the app always knows what the user typed.",
      "You will stop the page from refreshing on submit, check that required fields are filled, and show a short error message.",
      "This module stays on the client. We will not send email from a server. Showing the values or a thank-you message is enough.",
    ],
    youWillLearn: [
      "How a form looks in React",
      "Text inputs and text areas",
      "Controlled inputs",
      "What happens on submit",
      "A first pass at validation",
    ],
  },
  lessons: [
    {
      slug: "html-forms-in-react",
      title: "HTML forms in React",
      minutes: "8 min",
      summary:
        "Use the same <form>, <label>, and <button type=\"submit\"> you know from HTML.",
      blocks: [
        {
          type: "p",
          text: "A form groups fields and a submit button. In the browser, submitting a form often reloads the page. React apps usually prevent that reload so the UI can stay as a single page.",
        },
        {
          type: "code",
          title: "Familiar tags",
          code: `function ContactForm() {
  return (
    <form>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}`,
        },
        {
          type: "tip",
          text: "Wrap the input in a label (or use htmlFor + id) so the field has an accessible name.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write a form with one email input and a Send button.",
            "Do not add state yet.",
          ],
        },
        {
          type: "check",
          question: "What HTML tag groups fields for submit?",
          options: [
            {
              id: "a",
              label: "<form>",
              correct: true,
            },
            {
              id: "b",
              label: "<script>",
              correct: false,
            },
            {
              id: "c",
              label: "<meta>",
              correct: false,
            },
          ],
          explain: "form is still the wrapper in React.",
        },
      ],
    },
    {
      slug: "input-fields",
      title: "Input fields",
      minutes: "8 min",
      summary:
        "text, email, and textarea cover most beginner forms.",
      blocks: [
        {
          type: "ul",
          items: [
            "input type=\"text\" for a name.",
            "input type=\"email\" for an email address. The browser can show a simple format hint.",
            "textarea for a longer message. In JSX, textarea is written as <textarea></textarea>, not a self-closing pair with inner HTML like old templates.",
          ],
        },
        {
          type: "code",
          title: "Three common fields",
          code: `<input type="text" placeholder="Your name" />
<input type="email" placeholder="you@email.com" />
<textarea placeholder="Message" rows={4} />`,
        },
        {
          type: "p",
          text: "rows={4} is a number prop, so it uses braces. placeholder is a string, so quotes are fine.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add name, email, and message fields to your form.",
            "Give each a placeholder.",
          ],
        },
        {
          type: "check",
          question: "Which tag is best for a long message?",
          options: [
            {
              id: "a",
              label: "textarea",
              correct: true,
            },
            {
              id: "b",
              label: "img",
              correct: false,
            },
            {
              id: "c",
              label: "hr",
              correct: false,
            },
          ],
          explain: "textarea is the multi-line box.",
        },
      ],
    },
    {
      slug: "controlled-inputs",
      title: "Controlled inputs",
      minutes: "10 min",
      summary:
        "The input value comes from state. onChange writes back into state.",
      blocks: [
        {
          type: "term",
          term: "Controlled input",
          meaning:
            "An input whose value is set by React state. You pass value={name} and update name in onChange. The box always shows what state holds.",
        },
        {
          type: "code",
          title: "One field, one piece of state",
          code: `const [name, setName] = useState("");

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>`,
        },
        {
          type: "p",
          text: "For several fields, use several useState calls, or one state object. Several calls are easier to read at the start.",
        },
        {
          type: "tip",
          text: "If you set value={name} but forget onChange, the input will not let you type. React keeps resetting it to the old state.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Make name a controlled input.",
            "Show the live value in a paragraph under the box.",
          ],
        },
        {
          type: "check",
          question: "A controlled input needs…",
          options: [
            {
              id: "a",
              label: "value from state and onChange that updates that state",
              correct: true,
            },
            {
              id: "b",
              label: "Only a CSS animation",
              correct: false,
            },
            {
              id: "c",
              label: "A new programming language",
              correct: false,
            },
          ],
          explain: "State in, events out. That loop is “controlled.”",
        },
      ],
    },
    {
      slug: "form-submission",
      title: "Form submission",
      minutes: "8 min",
      summary:
        "Listen to onSubmit on the form and call preventDefault().",
      blocks: [
        {
          type: "term",
          term: "preventDefault",
          meaning:
            "A method on the event object. It stops the browser’s normal action. For forms, the normal action is “reload the page and send data like a classic website.”",
        },
        {
          type: "code",
          title: "Handle submit",
          code: `function handleSubmit(event) {
  event.preventDefault();
  console.log(name, email, message);
}

<form onSubmit={handleSubmit}>`,
        },
        {
          type: "p",
          text: "Putting onSubmit on the form means both clicking Send and pressing Enter in a field will run your function.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Log the three field values on submit.",
            "Confirm the page does not refresh.",
          ],
        },
        {
          type: "check",
          question: "Why call event.preventDefault() on submit in a React app?",
          options: [
            {
              id: "a",
              label: "To stop the full page reload",
              correct: true,
            },
            {
              id: "b",
              label: "To install Node.js",
              correct: false,
            },
            {
              id: "c",
              label: "To create a CSS file",
              correct: false,
            },
          ],
          explain: "You handle the data in JavaScript instead of a classic POST reload.",
        },
      ],
    },
    {
      slug: "basic-validation",
      title: "Basic validation",
      minutes: "8 min",
      summary:
        "Check required fields before you “send.” Show one clear error string.",
      blocks: [
        {
          type: "term",
          term: "Validation",
          meaning:
            "Checking that the input is acceptable before you use it. Beginner checks: not empty, email contains @. You can do this in JavaScript inside handleSubmit.",
        },
        {
          type: "code",
          title: "Required name",
          code: `const [error, setError] = useState("");

function handleSubmit(event) {
  event.preventDefault();
  if (!name.trim()) {
    setError("Please enter your name.");
    return;
  }
  setError("");
  setSent(true);
}`,
        },
        {
          type: "p",
          text: "Show {error && <p>{error}</p>} near the button. Keep the message short. You can also use the HTML required attribute, but a state error is easier to style and explain.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Block submit if email is empty.",
            "Show “Please enter an email.”",
          ],
        },
        {
          type: "check",
          question: "What should you do if a required field is empty?",
          options: [
            {
              id: "a",
              label: "Set an error message and return before success",
              correct: true,
            },
            {
              id: "b",
              label: "Delete App.jsx",
              correct: false,
            },
            {
              id: "c",
              label: "Call npm run dev again as the only fix",
              correct: false,
            },
          ],
          explain: "Stop, tell the user, do not pretend it sent.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Contact Form",
    goal: "Build a contact form with name, email, and message. Validate that they are not empty. Show a thank-you message on success.",
    steps: [
      "Use a <form> with onSubmit and preventDefault.",
      "Make all three fields controlled.",
      "If any field is empty, set an error string.",
      "If all are filled, hide the form and show “Thanks, we received your message.” (no real email needed).",
    ],
    starterCode: `import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in every field.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return <p>Thanks, {name}. We received your message.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
      {error && <p>{error}</p>}
      <button type="submit">Send</button>
    </form>
  );
}

export default App;`,
    doneWhen: [
      "Empty submit shows an error and does not show thanks.",
      "Filled submit shows a thank-you message.",
      "The page does not fully reload on submit.",
    ],
  },
  summary: {
    headline: "The app owns the form values",
    body: [
      "Controlled inputs keep text in state. Submit runs your function. A simple error string is enough validation for this path.",
      "Next you will load data from the internet after the page appears.",
    ],
    recap: [
      "Build a form in JSX",
      "Control inputs with value and onChange",
      "Validate on submit",
    ],
  },
  knowledgeCheck: {
    type: "check",
    question: "Where should you attach the submit handler?",
    options: [
      {
        id: "a",
        label: "onSubmit on the <form>",
        correct: true,
      },
      {
        id: "b",
        label: "on the Vite config only",
        correct: false,
      },
      {
        id: "c",
        label: "on <html> in index.html as the only option",
        correct: false,
      },
    ],
    explain: "Form-level onSubmit catches button click and Enter.",
  },
};

export default reactFoundationsModule06;

import { PublishedModule } from "../../types";

export const uiUxDesignModule01: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "introduction-to-ui-ux-design",
  moduleNumber: "01",
  title: "Introduction to UI/UX Design",
  estimatedTime: "50–70 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 01 | Introduction | NSL Digital Lab",
    description:
      "Beginner UI/UX Module 01: what UX and UI are, how they differ, the designer’s role, user-centered design, and the five-stage process.",
    keywords:
      "what is UX, what is UI, UI vs UX, user-centered design, UI UX designer role, design process Discovery Define Ideate Design Testing",
    canonical: "/learn/ui-ux-design/introduction-to-ui-ux-design",
  },
  nextModule: {
    href: "/learn/ui-ux-design/discovery-understand-the-problem",
    label: "Next: Module 02",
  },
  intro: {
    headline: "Start with people, not pretty screens",
    body: [
      "You do not need drawing skill to start UI/UX. You need curiosity about how people use websites and apps.",
      "This course follows a professional design process used on real projects: Discovery → Define → Ideate → Design → Testing. You will practise a small piece of that process in every module.",
      "We will use a running example: CampusBite, a food-ordering idea for college students. You will also study apps you already use, such as a food app or a banking app.",
    ],
    youWillLearn: [
      "What UX means",
      "What UI means",
      "How UI and UX are different and how they work together",
      "What a UI/UX designer actually does",
      "What user-centered design means",
      "The five stages of this course’s design process",
    ],
  },
  lessons: [
    {
      slug: "what-is-ux",
      title: "What is UX?",
      minutes: "8 min",
      summary:
        "UX is the full experience a person has while trying to get something done with a product.",
      blocks: [
        {
          type: "p",
          text: "Think about ordering food on your phone. You open the app, find a restaurant, add items, pay, and wait for delivery. That whole journey — easy or frustrating — is the experience.",
        },
        {
          type: "term",
          term: "UX (User Experience)",
          meaning:
            "How a person feels while using a product to reach a goal. It includes finding things, understanding steps, waiting, errors, and whether the task feels easy or hard.",
        },
        {
          type: "p",
          text: "UX is not only the look. A screen can look beautiful and still have bad UX if people cannot complete a task. Example: a pretty checkout page that hides the “Pay” button is a UX problem.",
        },
        {
          type: "ul",
          items: [
            "Good UX: the person reaches the goal with little confusion.",
            "Bad UX: the person gets stuck, guesses, or gives up.",
            "UX work starts by understanding the person’s goal, not by picking a color.",
          ],
        },
        {
          type: "tip",
          text: "When you study an app, ask: “What is this person trying to do?” not “Do I like this color?”",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Open an app you used today.",
            "Write the goal in one sentence (example: “I wanted to send money to a friend”).",
            "Write one moment that felt easy and one moment that felt slow or confusing.",
          ],
        },
        {
          type: "check",
          question: "What is UX mainly about?",
          options: [
            { id: "a", label: "Only choosing fonts and colors", correct: false },
            {
              id: "b",
              label: "The full experience of using a product to reach a goal",
              correct: true,
            },
            { id: "c", label: "Writing the app’s programming code", correct: false },
          ],
          explain:
            "UX covers the whole journey of getting a job done, including confusion, delays, and success — not only visuals.",
        },
      ],
    },
    {
      slug: "what-is-ui",
      title: "What is UI?",
      minutes: "8 min",
      summary:
        "UI is the visual and interactive surface: screens, buttons, forms, colors, and layout.",
      blocks: [
        {
          type: "p",
          text: "If UX is the journey, UI is the map you can see and touch. Buttons, menus, cards, search bars, and text on the screen are all UI.",
        },
        {
          type: "term",
          term: "UI (User Interface)",
          meaning:
            "The parts of a product a person sees and interacts with: layout, colors, type, icons, buttons, forms, and how those pieces are arranged.",
        },
        {
          type: "p",
          text: "On CampusBite, the restaurant list, the “Add to cart” button, and the price on a food card are UI. If the button is too small to tap, that is a UI problem that also hurts UX.",
        },
        {
          type: "ul",
          items: [
            "UI answers: What does the screen look like, and what can I tap?",
            "Clear UI uses size, contrast, and spacing so the next action is obvious.",
            "UI is still design work, even when it looks “simple.” Simple is usually planned.",
          ],
        },
        {
          type: "tip",
          text: "You can sketch UI with boxes and labels. Fancy pictures come later. Structure first.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Screenshot one screen of an app you like.",
            "Circle three UI pieces: a button, a text label, and an image or icon.",
            "Write what each piece helps the person do.",
          ],
        },
        {
          type: "check",
          question: "Which of these is UI?",
          options: [
            {
              id: "a",
              label: "A person’s feeling after a failed payment",
              correct: false,
            },
            {
              id: "b",
              label: "The “Pay now” button, its label, and its color on the screen",
              correct: true,
            },
            {
              id: "c",
              label: "A meeting with the business owner about sales targets",
              correct: false,
            },
          ],
          explain:
            "Feelings and research belong to UX work. The visible, tappable control is UI.",
        },
      ],
    },
    {
      slug: "difference-between-ui-and-ux",
      title: "Difference between UI and UX",
      minutes: "8 min",
      summary:
        "UX is the experience of reaching a goal. UI is the visual interface that supports that experience.",
      blocks: [
        {
          type: "p",
          text: "People mix these two words. Keep this picture: UX is the restaurant visit (finding a table, ordering, waiting, paying). UI is the menu design, table layout, and how the bill looks.",
        },
        {
          type: "ul",
          items: [
            "UX asks: Is this useful? Is the path clear? Where do people get stuck?",
            "UI asks: Is this easy to see and tap? Is the layout clear? Does it look consistent?",
            "A product can have attractive UI and still fail UX (pretty but confusing).",
            "A product can have plain UI and still succeed at UX (simple but easy to finish).",
          ],
        },
        {
          type: "p",
          text: "CampusBite example: UX work might show that students want to reorder yesterday’s lunch in two taps. UI work then designs a clear “Reorder” card on the home screen.",
        },
        {
          type: "tip",
          text: "If you only decorate screens without knowing the user’s goal, you are doing UI without UX. This course always starts with the goal.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Pick one problem on a website (example: “I cannot find shipping cost”).",
            "Label it UX, UI, or both, and write one sentence why.",
          ],
        },
        {
          type: "check",
          question: "Which sentence is most accurate?",
          options: [
            { id: "a", label: "UI and UX are two names for the same job", correct: false },
            {
              id: "b",
              label: "UX is the experience of reaching a goal; UI is the visual interface",
              correct: true,
            },
            { id: "c", label: "UX is only colors; UI is only research", correct: false },
          ],
          explain:
            "They work together, but they are not the same. UX is the experience; UI is the interface.",
        },
      ],
    },
    {
      slug: "role-of-a-ui-ux-designer",
      title: "Role of a UI/UX designer",
      minutes: "8 min",
      summary:
        "A UI/UX designer understands problems, proposes solutions, and shapes screens so people can complete tasks.",
      blocks: [
        {
          type: "p",
          text: "On a small team, one person often does both research and screens. On a large team, roles may split. In this beginner course, you practise the combined UI/UX designer role.",
        },
        {
          type: "term",
          term: "UI/UX designer",
          meaning:
            "A person who studies users and business needs, structures the product, and designs the interface so people can complete important tasks.",
        },
        {
          type: "ul",
          items: [
            "Talk to stakeholders (people who have a stake in the product: owners, managers, support).",
            "Study users: what they need, where they struggle.",
            "Define the problem in a short, clear sentence.",
            "Sketch flows and screens, then refine the UI.",
            "Test with people and improve the design.",
            "Hand files to developers (the people who build the working product).",
          ],
        },
        {
          type: "p",
          text: "You are not the person who writes the full app code in this course. You are the person who makes the experience and the screens understandable.",
        },
        {
          type: "tip",
          text: "A designer’s job is not “make it pretty.” Pretty can help, but the job is “help people succeed.”",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write three bullets: “This week a UI/UX designer might…” using the list above.",
            "Circle which bullet you are most curious to try.",
          ],
        },
        {
          type: "check",
          question: "What is a core part of a UI/UX designer’s role?",
          options: [
            {
              id: "a",
              label: "Understanding user and business needs, then designing the experience and interface",
              correct: true,
            },
            {
              id: "b",
              label: "Only posting the logo on social media",
              correct: false,
            },
            {
              id: "c",
              label: "Only fixing computer hardware",
              correct: false,
            },
          ],
          explain:
            "The role connects research, problem definition, interface design, and testing.",
        },
      ],
    },
    {
      slug: "user-centered-design",
      title: "User-centered design",
      minutes: "8 min",
      summary:
        "User-centered design means you design around real people’s goals, not around guesswork or personal taste.",
      blocks: [
        {
          type: "term",
          term: "User-centered design",
          meaning:
            "A way of working where you learn about the people who will use the product, design for their goals, and check the design with them.",
        },
        {
          type: "p",
          text: "A common beginner mistake is designing for yourself: “I would like a dark theme with tiny text.” Your users may be students on a bright campus, using cheap phones, in a hurry between classes.",
        },
        {
          type: "p",
          text: "CampusBite example: the business may want more dessert add-ons. Students may want a 60-second reorder. User-centered design looks at both, then designs a path that still respects the student’s time.",
        },
        {
          type: "ul",
          items: [
            "Start with the person’s goal.",
            "Watch or ask — do not only imagine.",
            "Test screens with people who are not you.",
            "Change the design when evidence says it is confusing.",
          ],
        },
        {
          type: "tip",
          text: "Your taste still matters for craft. It does not replace evidence from users.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write one feature you would add to your favorite app.",
            "Write who it helps, and how you would check if they actually want it (one question you could ask).",
          ],
        },
        {
          type: "check",
          question: "User-centered design mainly means:",
          options: [
            { id: "a", label: "Copying whatever the designer personally likes", correct: false },
            {
              id: "b",
              label: "Designing around real people’s goals and checking the work with them",
              correct: true,
            },
            { id: "c", label: "Never talking to the business team", correct: false },
          ],
          explain:
            "You still work with business goals. You do not replace users with only your own taste.",
        },
      ],
    },
    {
      slug: "how-ui-and-ux-work-together",
      title: "How UI and UX work together",
      minutes: "7 min",
      summary:
        "UX decisions shape the path. UI decisions make that path visible and usable on the screen.",
      blocks: [
        {
          type: "p",
          text: "On a real project, UX and UI are not two separate weeks that never meet. You learn something about users, sketch a path, draw screens, test, and go back.",
        },
        {
          type: "ul",
          items: [
            "UX insight: students lose their place when the restaurant list reloads.",
            "UX idea: keep their last order pin at the top.",
            "UI craft: a card with a photo, name, price, and a large “Reorder” button.",
            "Together: the insight becomes a screen people can actually use.",
          ],
        },
        {
          type: "p",
          text: "If you skip UX, you decorate the wrong problem. If you skip UI, people understand the idea but cannot see or tap it clearly.",
        },
        {
          type: "tip",
          text: "When you present work, show both: the user problem and the screen that answers it.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write one UX insight about an app (a struggle).",
            "Sketch (boxes only) one UI change that might help.",
          ],
        },
        {
          type: "check",
          question: "How do UI and UX work together?",
          options: [
            {
              id: "a",
              label: "UX finds the path and problem; UI makes that path clear on the screen",
              correct: true,
            },
            { id: "b", label: "You must finish all UI before any UX", correct: false },
            { id: "c", label: "They never appear on the same project", correct: false },
          ],
          explain:
            "Good products connect research and structure (UX) with visible, usable screens (UI).",
        },
      ],
    },
    {
      slug: "five-stage-design-process",
      title: "Overview of the 5-stage design process",
      minutes: "9 min",
      summary:
        "This course uses Discovery → Define → Ideate → Design → Testing, then iteration.",
      blocks: [
        {
          type: "term",
          term: "Design process",
          meaning:
            "A repeatable sequence of steps a team follows so they understand the problem before they polish screens.",
        },
        {
          type: "p",
          text: "NSL Digital Lab’s professional process (the one this course is built on) has five stages. You will deepen one stage at a time in later modules.",
        },
        {
          type: "ul",
          items: [
            "Discovery: understand the problem — business goals, user needs, research, competitors.",
            "Define: understand the user — patterns, personas, empathy maps, journeys, the real problem.",
            "Ideate: generate solutions — brainstorming, information architecture, user flows.",
            "Design: wireframes, UI, Figma, visual craft, prototypes.",
            "Testing: try the design with people, check accessibility, improve, repeat.",
          ],
        },
        {
          type: "p",
          text: "These stages are a loop, not a one-way street. Testing often sends you back to Define or Ideate. That loop is called iteration — doing another round with better information.",
        },
        {
          type: "term",
          term: "Iteration",
          meaning:
            "Improving the design in rounds, using what you learned from research or testing, instead of treating the first draft as final.",
        },
        {
          type: "code",
          title: "Process at a glance",
          code: `Discovery → Define → Ideate → Design → Testing → Iteration`,
        },
        {
          type: "tip",
          text: "Beginners often jump to Figma colors. In this course, colors come after you can explain the problem and the path.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s01",
          title: "Wine shopping: the same five stages",
          text: "See Discovery → Define → Ideate → Design → Testing used on Oak & Cork, a portfolio case study separate from these lessons.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write the five stage names from memory.",
            "Next to each, write one activity (example: Discovery = interview a student).",
          ],
        },
        {
          type: "check",
          question: "What is the first stage of this course’s design process?",
          options: [
            { id: "a", label: "Choosing a color palette in Figma", correct: false },
            { id: "b", label: "Discovery: understand the problem", correct: true },
            { id: "c", label: "Writing a case study title", correct: false },
          ],
          explain:
            "Discovery comes first so you do not design the wrong product. Visual polish is later.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: UI and UX problem hunt",
    goal: "Pick a familiar website or app. Identify at least two UX problems (task / journey) and two UI problems (what you see and tap). Connect each problem to a real user goal.",
    starterLabel: "Notes template you can copy",
    steps: [
      "Choose one product you used this week (food app, bank app, college portal, shopping site).",
      "Write the user’s main goal in one sentence.",
      "Walk through the task once, slowly. Note where you pause, guess, or feel annoyed.",
      "Fill the template: two UX problems, two UI problems, and one thing that already works well.",
      "For each problem, write: who is affected, what happens, and why it matters.",
    ],
    starterCode: `Product: ____________________
User goal: I want to ____________________

UX problem 1 (journey / task):
What happened:
Why it matters:

UX problem 2:
What happened:
Why it matters:

UI problem 1 (screen / control):
What I saw / tapped:
Why it is hard:

UI problem 2:
What I saw / tapped:
Why it is hard:

One thing that already works well:
Stage this belongs to later (guess): Discovery / Define / Ideate / Design / Testing`,
    doneWhen: [
      "You named a real product and a clear user goal.",
      "You listed two UX problems and two UI problems, not only “I don’t like the color.”",
      "Each problem explains why it gets in the way of the goal.",
    ],
  },
};

export default uiUxDesignModule01;

import { PublishedModule } from "../../types";

export const uiUxDesignModule08: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "ui-ux-principles-and-nielsen-heuristics",
  moduleNumber: "08",
  title: "UI/UX Design Principles & Nielsen Heuristics",
  estimatedTime: "70–90 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 08 | Principles & Heuristics | NSL Digital Lab",
    description:
      "Beginner usability principles and Nielsen’s 10 heuristics with simple explanations, UI examples, mistakes, and how to apply each.",
    keywords:
      "Nielsen 10 usability heuristics, UI UX principles, affordance, visual hierarchy, heuristic evaluation beginner",
    canonical:
      "/learn/ui-ux-design/ui-ux-principles-and-nielsen-heuristics",
  },
  prevModule: {
    href: "/learn/ui-ux-design/figma-foundations",
    label: "Previous: Module 07",
  },
  nextModule: {
    href: "/learn/ui-ux-design/prototyping-testing-accessibility",
    label: "Next: Module 09",
  },
  intro: {
    headline: "Rules of thumb for usable products",
    body: [
      "Principles are values you design with. Heuristics are practical checks you can walk through on any screen.",
      "Jakob Nielsen’s 10 usability heuristics are famous because they are simple and they catch real problems. You will learn each one in everyday language — not as interview trivia.",
    ],
    youWillLearn: [
      "Core UI/UX principles for this course",
      "All 10 Nielsen heuristics with examples",
      "Common mistakes and how a designer applies each heuristic",
      "How to do a small heuristic evaluation",
    ],
  },
  lessons: [
    {
      slug: "ui-ux-principles",
      title: "UI/UX principles (in simple language)",
      minutes: "10 min",
      summary:
        "These principles sit beside the five-stage process. They help you judge whether a screen respects people.",
      blocks: [
        {
          type: "ul",
          items: [
            "User-Centered Design: start from people’s goals (you already practise this every module).",
            "Visual Hierarchy: show what matters first.",
            "Feedback: after a tap, the product should respond (a spinner, a tick, a new screen).",
            "Accessibility: more people can use it, including with assistive tools.",
            "Usability: people can complete tasks with little struggle.",
            "Affordance: the control looks like what it does (a button looks pressable).",
            "Flexibility: beginners get a simple path; frequent users get shortcuts later.",
            "Aesthetic Integrity: visuals support the task; decoration does not fight the content.",
            "Performance: waiting without explanation feels broken, even if the UI is pretty.",
            "Context of Use: campus Wi‑Fi, bright sun, one-handed use between classes all change the design.",
          ],
        },
        {
          type: "term",
          term: "Affordance",
          meaning:
            "Clues in the UI about how something can be used. A raised-looking button affords pressing. Underlined text often affords “this is a link.”",
        },
        {
          type: "p",
          text: "CampusBite: a huge photo carousel that auto-plays on a slow connection fights Performance and Context of Use. A clear Reorder button supports Usability and Affordance.",
        },
        {
          type: "tip",
          text: "When two principles clash (heavy animation vs performance), protect the task and the context first.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Pick an app screen. Score three principles as strong / weak.",
            "Write one sentence for the weakest score.",
          ],
        },
        {
          type: "check",
          question: "Feedback as a principle means:",
          options: [
            { id: "a", label: "The product responds so people know what happened", correct: true },
            { id: "b", label: "The designer never talks to users", correct: false },
            { id: "c", label: "Only using complementary colors", correct: false },
          ],
          explain:
            "People need a visible result after they act.",
        },
      ],
    },
    {
      slug: "heuristics-1-2",
      title: "Heuristics 1–2: status and real world",
      minutes: "9 min",
      summary:
        "Show what the system is doing, and speak the user’s language.",
      blocks: [
        {
          type: "p",
          text: "A heuristic is a rule of thumb — a check you can apply quickly. Nielsen’s list is a standard set of those checks.",
        },
        {
          type: "term",
          term: "1. Visibility of system status",
          meaning:
            "Keep people informed about what is going on, in a reasonable time.",
        },
        {
          type: "ul",
          items: [
            "Explanation: if the app is loading, paying, or delivering, say so.",
            "Real UI example: “Paying…” with a spinner; a map that shows the order is being packed.",
            "Common mistake: a freeze with no message, so people tap Pay five times.",
            "Apply it: add progress text, disabled buttons while processing, and success/fail states.",
          ],
        },
        {
          type: "term",
          term: "2. Match between system and the real world",
          meaning:
            "Use words, images, and order that match how people already think.",
        },
        {
          type: "ul",
          items: [
            "Explanation: say “Cart” and “Pickup at stall 4,” not “Commit SKU payload.”",
            "Real UI example: a food app grouped by “Breakfast / Lunch” like a canteen board.",
            "Common mistake: internal team names on buttons (“OMS sync”).",
            "Apply it: steal labels from user interviews; sort lists the way people shop.",
          ],
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Find one status message (or a missing one) in an app you use.",
            "Rewrite one jargon label into everyday words.",
          ],
        },
        {
          type: "check",
          question: "Visibility of system status is mainly about:",
          options: [
            { id: "a", label: "Telling people what the product is doing right now", correct: true },
            { id: "b", label: "Hiding all errors", correct: false },
            { id: "c", label: "Using as many stock photos as possible", correct: false },
          ],
          explain:
            "Silence during a slow action feels like a crash.",
        },
      ],
    },
    {
      slug: "heuristics-3-4",
      title: "Heuristics 3–4: control and consistency",
      minutes: "8 min",
      summary:
        "Let people undo. Follow patterns they already know.",
      blocks: [
        {
          type: "term",
          term: "3. User control and freedom",
          meaning:
            "People make mistakes. Offer a clear way out — Back, Cancel, Undo — without a long scavenger hunt.",
        },
        {
          type: "ul",
          items: [
            "Explanation: traps (forced popups with no close) panic users.",
            "Real UI example: “Remove item” with Undo toast in the cart.",
            "Common mistake: a signup wall with no Skip or Close.",
            "Apply it: always provide Cancel on multi-step pay; confirm destructive actions.",
          ],
        },
        {
          type: "term",
          term: "4. Consistency and standards",
          meaning:
            "Same words and patterns mean the same thing. Follow platform habits when they help (a cart icon where people expect it).",
        },
        {
          type: "ul",
          items: [
            "Explanation: if “Save” means save, do not use “Save” for “Pay.”",
            "Real UI example: bottom tabs that stay in the same order on every screen.",
            "Common mistake: a new icon language on every page.",
            "Apply it: reuse components; match OS patterns for back and share.",
          ],
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Find a place you cannot undo in an app. Describe a safer exit.",
            "Find one inconsistent label (two names for the same thing).",
          ],
        },
        {
          type: "check",
          question: "User control and freedom is mainly about:",
          options: [
            { id: "a", label: "Easy exits, undo, and cancel", correct: true },
            { id: "b", label: "Removing the back button to “guide” people", correct: false },
            { id: "c", label: "Forcing one path with no escape", correct: false },
          ],
          explain:
            "People explore. Traps destroy trust.",
        },
      ],
    },
    {
      slug: "heuristics-5-6",
      title: "Heuristics 5–6: prevent errors and recognition",
      minutes: "8 min",
      summary:
        "Stop mistakes before they happen. Show options instead of making people remember.",
      blocks: [
        {
          type: "term",
          term: "5. Error prevention",
          meaning:
            "Design so people are less likely to make a mistake, rather than only showing an error after.",
        },
        {
          type: "ul",
          items: [
            "Explanation: disable “Pay” until a stall is selected; warn before deleting an address.",
            "Real UI example: date picker instead of typing 31/02.",
            "Common mistake: allowing Pay with an empty cart, then a rude error.",
            "Apply it: constraints, defaults, and confirmations on irreversible actions.",
          ],
        },
        {
          type: "term",
          term: "6. Recognition rather than recall",
          meaning:
            "Show people what they need. Do not force them to remember codes, hidden gestures, or last week’s menu.",
        },
        {
          type: "ul",
          items: [
            "Explanation: visible menus beat secret swipes with no hint.",
            "Real UI example: recent orders on Home so Aarav does not remember the stall name.",
            "Common mistake: “Enter your 16-digit stall ID.”",
            "Apply it: suggestions, history, visible labels, not memory tests.",
          ],
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Find one error that could have been prevented with a constraint.",
            "Find one place the app makes you remember something it could show.",
          ],
        },
        {
          type: "check",
          question: "Recognition rather than recall means:",
          options: [
            { id: "a", label: "Show choices and history instead of relying on memory", correct: true },
            { id: "b", label: "Hide all labels to look clean", correct: false },
            { id: "c", label: "Quiz the user on shortcuts", correct: false },
          ],
          explain:
            "Visible options reduce mental load.",
        },
      ],
    },
    {
      slug: "heuristics-7-8",
      title: "Heuristics 7–8: efficiency and aesthetic minimalism",
      minutes: "8 min",
      summary:
        "Help frequent users go faster. Keep the design focused on what is needed.",
      blocks: [
        {
          type: "term",
          term: "7. Flexibility and efficiency of use",
          meaning:
            "Shortcuts and smart defaults help experts without blocking beginners.",
        },
        {
          type: "ul",
          items: [
            "Explanation: Reorder is a shortcut; first-time users can still browse.",
            "Real UI example: “Order usual” on Home; keyboard shortcuts on desktop later.",
            "Common mistake: only a dense expert screen with no simple path.",
            "Apply it: one simple flow plus optional accelerators.",
          ],
        },
        {
          type: "term",
          term: "8. Aesthetic and minimalist design",
          meaning:
            "Do not add information or decoration that does not support the task. Minimal does not mean empty or tiny text.",
        },
        {
          type: "ul",
          items: [
            "Explanation: every extra banner competes with “Add to cart.”",
            "Real UI example: a stall page with dish, price, spice, Add — not five popups.",
            "Common mistake: decorative illustrations that push the button below the fold.",
            "Apply it: remove or demote anything that does not help the current job.",
          ],
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Name one shortcut a frequent CampusBite user would love.",
            "Circle one decorative element on a real app that you would remove.",
          ],
        },
        {
          type: "check",
          question: "Aesthetic and minimalist design means:",
          options: [
            { id: "a", label: "Keep only what supports the current task", correct: true },
            { id: "b", label: "Make everything tiny and low-contrast", correct: false },
            { id: "c", label: "Never use images of food", correct: false },
          ],
          explain:
            "Focus is the heuristic. Readability still matters.",
        },
      ],
    },
    {
      slug: "heuristics-9-10",
      title: "Heuristics 9–10: errors and help",
      minutes: "8 min",
      summary:
        "When things go wrong, explain in human language. Offer help that is actually findable.",
      blocks: [
        {
          type: "term",
          term: "9. Help users recognize, diagnose, and recover from errors",
          meaning:
            "Error messages should be plain, name the problem, and suggest a next step.",
        },
        {
          type: "ul",
          items: [
            "Explanation: “Payment failed. Check UPI pin and try again” beats “ERR_X42.”",
            "Real UI example: red text under the field that failed, plus a Retry button.",
            "Common mistake: a blank screen or a code only engineers understand.",
            "Apply it: write errors as: what happened + what to do; keep the user’s data if you can.",
          ],
        },
        {
          type: "term",
          term: "10. Help and documentation",
          meaning:
            "Ideally the UI is clear. When people still need help, offer short, searchable, task-focused help.",
        },
        {
          type: "ul",
          items: [
            "Explanation: a “How pickup works” page with 4 steps is better than a 40-page PDF.",
            "Real UI example: a “?” next to spice levels with one sentence.",
            "Common mistake: hiding all help, or dumping a legal document as “FAQ.”",
            "Apply it: in-context tips first; a short FAQ for rare cases.",
          ],
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Rewrite this error: “ERR_CHECKOUT_NULL.”",
            "Write a 3-step help blurb for first-time pickup.",
          ],
        },
        {
          type: "check",
          question: "A good error message should:",
          options: [
            { id: "a", label: "Explain the problem in plain words and suggest a next step", correct: true },
            { id: "b", label: "Only show a mysterious code", correct: false },
            { id: "c", label: "Wipe the form with no explanation", correct: false },
          ],
          explain:
            "People recover faster when they understand what to do next.",
        },
      ],
    },
    {
      slug: "running-a-heuristic-evaluation",
      title: "Running a beginner heuristic evaluation",
      minutes: "8 min",
      summary:
        "Walk through a real product with the 10 checks. Write issues with severity, not vague dislike.",
      blocks: [
        {
          type: "term",
          term: "Heuristic evaluation",
          meaning:
            "A review where you inspect screens against the heuristics and log problems. It is not a replacement for testing with users, but it catches many issues early.",
        },
        {
          type: "ul",
          items: [
            "Pick one task (order pickup).",
            "For each step, ask which heuristics fail.",
            "Write: issue, heuristic number, where, why it hurts, idea to fix.",
            "Mark severity in plain words: small annoyance / task delayed / task blocked.",
          ],
        },
        {
          type: "tip",
          text: "Do not write “I hate this color” unless it breaks contrast, hierarchy, or meaning. Tie comments to a heuristic.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s23",
          title: "Wine shopping: Nielsen review",
          text: "Six heuristics mapped to shipping ETA, taste language, quiz control, chips, age gate, and saved house red.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Open a food or banking app.",
            "Log two issues using heuristic numbers.",
          ],
        },
        {
          type: "check",
          question: "A heuristic evaluation is:",
          options: [
            { id: "a", label: "A structured review using usability rules of thumb", correct: true },
            { id: "b", label: "A substitute for never talking to users", correct: false },
            { id: "c", label: "Only a color-wheel exercise", correct: false },
          ],
          explain:
            "It is an expert-style check. Module 09 adds testing with people.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: heuristic evaluation",
    goal: "Evaluate an existing website or app against Nielsen’s 10 heuristics. Log at least five issues with examples and suggested fixes.",
    starterLabel: "Evaluation sheet",
    steps: [
      "Choose a product and one task.",
      "Walk the task twice: once as a rushed user, once slowly.",
      "Fill five rows on the sheet (you may skip unused heuristics).",
      "Star the one issue you would fix first and say why (user impact).",
      "Note one thing the product already does well, with a heuristic number.",
    ],
    starterCode: `Product:
Task:
Date:

# | Heuristic | Screen | Issue | Why it hurts | Severity | Fix idea
1 |
2 |
3 |
4 |
5 |

Works well:
Fix first because:`,
    doneWhen: [
      "Issues point to named heuristics, not only taste.",
      "Each issue has a place, a user impact, and a fix idea.",
      "You recorded one strength as well as problems.",
    ],
  },
};

export default uiUxDesignModule08;

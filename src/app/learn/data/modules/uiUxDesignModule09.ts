import { PublishedModule } from "../../types";

export const uiUxDesignModule09: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "prototyping-testing-accessibility",
  moduleNumber: "09",
  title: "Prototyping, Testing & Accessibility",
  estimatedTime: "60–80 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 09 | Testing & Accessibility | NSL Digital Lab",
    description:
      "Beginner prototyping, usability testing, professional findings, WCAG awareness, contrast, keyboard, alt text, and accessible forms.",
    keywords:
      "usability testing, Figma prototype, WCAG, color contrast, keyboard navigation, alt text, accessibility tools",
    canonical: "/learn/ui-ux-design/prototyping-testing-accessibility",
  },
  prevModule: {
    href: "/learn/ui-ux-design/ui-ux-principles-and-nielsen-heuristics",
    label: "Previous: Module 08",
  },
  nextModule: {
    href: "/learn/ui-ux-design/complete-ui-ux-case-study",
    label: "Next: Module 10",
  },
  intro: {
    headline: "Try it with people, then make it more inclusive",
    body: [
      "Testing is the fifth stage. A prototype lets someone try the flow before code. You watch, take notes, iterate, and also check accessibility.",
      "You will learn how to describe findings like a professional: what you saw, how often, how severe, and what you will change.",
    ],
    youWillLearn: [
      "Interactive prototypes and flows",
      "Usability testing and collecting feedback",
      "Iteration and client feedback",
      "WCAG awareness and practical accessibility",
      "How to write findings clearly",
    ],
  },
  lessons: [
    {
      slug: "interactive-prototypes",
      title: "Interactive prototypes and prototype flows",
      minutes: "8 min",
      summary:
        "An interactive prototype is a clickable path through screens. The flow should match the user flow you drew in Ideate.",
      blocks: [
        {
          type: "p",
          text: "In Figma, connecting Home → Stall → Cart → Success is enough for a beginner test. You do not need every animation.",
        },
        {
          type: "ul",
          items: [
            "Cover the main task end to end.",
            "Include one fail or empty state if you can.",
            "Tell testers it is not a real payment.",
            "Keep hotspot areas (clickable regions) large.",
          ],
        },
        {
          type: "tip",
          text: "If a tester cannot click a label you thought was a button, that is already a finding (affordance).",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "List the frames in your prototype in order.",
            "Mark any missing fail path.",
          ],
        },
        {
          type: "check",
          question: "A beginner prototype should mainly:",
          options: [
            { id: "a", label: "Let someone click through the important task", correct: true },
            { id: "b", label: "Replace the real backend and payments", correct: false },
            { id: "c", label: "Hide all screens from testers", correct: false },
          ],
          explain:
            "The prototype is a rehearsal of the flow, not the finished product.",
        },
      ],
    },
    {
      slug: "usability-testing",
      title: "Usability testing with users",
      minutes: "9 min",
      summary:
        "Usability testing means watching real people try tasks. You listen more than you defend the design.",
      blocks: [
        {
          type: "term",
          term: "Usability testing",
          meaning:
            "A session where a person tries to complete tasks while you observe. You learn where they hesitate, guess, or fail.",
        },
        {
          type: "ul",
          items: [
            "Give a goal, not a tour: “Order a lunch pickup for today.”",
            "Ask them to think aloud.",
            "Do not help until they are truly stuck (then note that you helped).",
            "Three to five people is enough to learn a lot at beginner level.",
          ],
        },
        {
          type: "p",
          text: "Friends are okay if they match the persona a little. A hostel student is a better tester for CampusBite than a designer classmate who already knows the file.",
        },
        {
          type: "tip",
          text: "Silence is data. If you jump in, you hide the problem.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s22",
          title: "Wine shopping: usability findings",
          text: "SAMPLE test tasks, severity table, then iterations that moved ETA onto the PDP.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write one task script in one sentence.",
            "Write two follow-up questions that are not “Did you like it?”",
          ],
        },
        {
          type: "check",
          question: "During a test you should mainly:",
          options: [
            { id: "a", label: "Watch, listen, and take notes without selling the UI", correct: true },
            { id: "b", label: "Click for the user so they finish faster", correct: false },
            { id: "c", label: "Argue that they used it wrong", correct: false },
          ],
          explain:
            "If they used it “wrong,” the design failed them.",
        },
      ],
    },
    {
      slug: "feedback-iteration-clients",
      title: "Feedback, iteration, and client comments",
      minutes: "8 min",
      summary:
        "Sort feedback into usability problems vs taste. Iterate the design. Translate client comments into user impact.",
      blocks: [
        {
          type: "term",
          term: "Iteration",
          meaning:
            "A new round of design based on evidence. You change the prototype and, if needed, go back to Define or Ideate.",
        },
        {
          type: "ul",
          items: [
            "Cluster notes: same stuck point from several people = high priority.",
            "Taste (“make the logo bigger”) is not automatically a usability problem.",
            "Client feedback: ask “What user problem does this solve?” before rearranging everything.",
            "Keep a simple changelog: what you changed and why.",
          ],
        },
        {
          type: "p",
          text: "Professional tone: “Three of five testers did not see Pickup time, so we moved it next to the price and increased contrast,” not “The client is wrong.”",
        },
        {
          type: "tip",
          text: "You can park a client idea on a later list if it fights the persona’s time pressure. Explain with the journey map.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Turn this client comment into a question: “Add more red.”",
            "Write one iteration you would make after testers miss the cart icon.",
          ],
        },
        {
          type: "check",
          question: "Iteration should be driven mainly by:",
          options: [
            { id: "a", label: "Evidence from tests and clear user impact", correct: true },
            { id: "b", label: "Whoever emailed last", correct: false },
            { id: "c", label: "Random weekly redesigns with no notes", correct: false },
          ],
          explain:
            "Write why you changed something. That is professional practice.",
        },
      ],
    },
    {
      slug: "describing-findings",
      title: "How to describe findings professionally",
      minutes: "8 min",
      summary:
        "A finding is a clear observation, not a vibe. Include where, who, what happened, and a recommendation.",
      blocks: [
        {
          type: "code",
          title: "Finding pattern",
          code: `Finding: Testers could not tell if a stall was open.
Where: Home, stall card
Evidence: 4 of 5 asked out loud “is this open?”
Impact: They almost left the app
Severity: High (task delayed)
Recommendation: Add Open / Closed text plus an icon, not color only.`,
        },
        {
          type: "ul",
          items: [
            "Separate observation from interpretation.",
            "Use counts when you have them (“4 of 5”).",
            "Recommend a change tied to a principle or heuristic.",
            "Avoid blaming users (“they were not smart”).",
          ],
        },
        {
          type: "tip",
          text: "Screenshots with a circle around the problem make reports easy to skim.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write one finding about an app using the pattern above.",
            "Remove any sentence that insults the user.",
          ],
        },
        {
          type: "check",
          question: "A professional finding should include:",
          options: [
            { id: "a", label: "Where it happened, evidence, impact, and a recommendation", correct: true },
            { id: "b", label: "Only “I don’t like it”", correct: false },
            { id: "c", label: "A personal attack on testers", correct: false },
          ],
          explain:
            "Teams can act on evidence and recommendations.",
        },
      ],
    },
    {
      slug: "accessibility-wcag-basics",
      title: "Accessibility, WCAG, contrast, and type",
      minutes: "9 min",
      summary:
        "WCAG is a shared set of accessibility guidelines. You will use a few practical checks, not the whole legal document.",
      blocks: [
        {
          type: "term",
          term: "WCAG",
          meaning:
            "Web Content Accessibility Guidelines — a widely used set of recommendations so digital content is more usable for people with disabilities. Teams often aim at named levels (such as AA) for contrast and other rules.",
        },
        {
          type: "ul",
          items: [
            "Color contrast: text must stand out from the background. Pale grey on white fails many people.",
            "Typography: readable size and line height; do not rely on tiny captions for prices.",
            "Do not use color alone for errors (add text or an icon).",
            "Awareness: you are not expected to memorise every WCAG clause as a beginner; you are expected to check the basics.",
          ],
        },
        {
          type: "tip",
          text: "Figma plugins and browser tools can flag contrast. Use them, then fix the design — do not only screenshot a green score.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Check your primary button label contrast with a contrast checker.",
            "If it fails, darken the background or lighten/darken the text.",
          ],
        },
        {
          type: "check",
          question: "WCAG is:",
          options: [
            { id: "a", label: "A set of guidelines for more accessible digital content", correct: true },
            { id: "b", label: "A Figma-only color wheel", correct: false },
            { id: "c", label: "A replacement for usability testing", correct: false },
          ],
          explain:
            "It is a guideline set. You still test with people.",
        },
      ],
    },
    {
      slug: "keyboard-focus-alt-forms-tools",
      title: "Keyboard, focus, alt text, forms, and tools",
      minutes: "9 min",
      summary:
        "Many people navigate with a keyboard. Images need text alternatives. Forms need labels. Tools help you catch gaps.",
      blocks: [
        {
          type: "term",
          term: "Keyboard navigation",
          meaning:
            "Moving through controls with Tab / Shift+Tab and activating with Enter or Space, without requiring a mouse.",
        },
        {
          type: "term",
          term: "Focus state",
          meaning:
            "The visible highlight on the control that currently has keyboard focus. If you remove it for “clean looks,” keyboard users get lost.",
        },
        {
          type: "term",
          term: "Alt text",
          meaning:
            "A short text replacement for an image, used by screen readers. Decorative images can be marked decorative; meaningful photos of dishes should describe the dish.",
        },
        {
          type: "ul",
          items: [
            "Accessible forms: a visible label tied to each field; errors next to the field; do not rely on placeholder-only labels.",
            "Tools: browser accessibility inspectors, contrast checkers, and screen-reader basics on one page you designed.",
            "Designers document focus and alt in handoff so developers do not guess.",
          ],
        },
        {
          type: "tip",
          text: "Try Tab through a public site. Notice when the focus ring disappears. That frustration is what you are preventing.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write alt text for one food photo (one short sentence).",
            "On your form wireframe, ensure every field has a label, not only a placeholder.",
          ],
        },
        {
          type: "check",
          question: "Focus states should be:",
          options: [
            { id: "a", label: "Visible so keyboard users know where they are", correct: true },
            { id: "b", label: "Removed for a minimal look", correct: false },
            { id: "c", label: "Only used on printed posters", correct: false },
          ],
          explain:
            "A clear focus ring is an accessibility essential, not clutter.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: prototype, test, document",
    goal: "Make a clickable prototype, test with at least two people, write professional findings, and list accessibility fixes.",
    starterLabel: "Test plan and report",
    steps: [
      "Prototype the main task in Figma (or paper + photos if needed).",
      "Write one task script and run it with two people.",
      "Log findings with evidence and recommendations.",
      "Run a contrast check and note keyboard/focus/alt/form issues.",
      "List the top three iterations you will make.",
    ],
    starterCode: `Prototype link:
Task script:
Testers (role, not full private details):

FINDINGS
1. Where / evidence / impact / recommendation
2.
3.

ACCESSIBILITY
Contrast:
Focus:
Alt text:
Forms:

Top 3 iterations:
1.
2.
3.`,
    doneWhen: [
      "Someone else clicked through the task without you driving the mouse the whole time.",
      "You have written findings, not only “it was fine.”",
      "You listed concrete accessibility checks and at least one fix.",
    ],
  },
};

export default uiUxDesignModule09;

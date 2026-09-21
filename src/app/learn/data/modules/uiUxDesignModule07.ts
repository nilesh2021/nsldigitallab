import { PublishedModule } from "../../types";

export const uiUxDesignModule07: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "figma-foundations",
  moduleNumber: "07",
  title: "Figma Foundations",
  estimatedTime: "60–80 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 07 | Figma | NSL Digital Lab",
    description:
      "Beginner Figma: interface, frames, layers, components, variants, styles, Auto Layout, prototyping, comments, and developer handoff.",
    keywords:
      "Figma beginner, Auto Layout, Figma components variants, prototyping, developer handoff, Figma collaboration",
    canonical: "/learn/ui-ux-design/figma-foundations",
  },
  prevModule: {
    href: "/learn/ui-ux-design/ui-design-foundations",
    label: "Previous: Module 06",
  },
  nextModule: {
    href: "/learn/ui-ux-design/ui-ux-principles-and-nielsen-heuristics",
    label: "Next: Module 08",
  },
  intro: {
    headline: "Build the same ideas in Figma",
    body: [
      "Figma is a browser-based design tool. Teams use it because they can design, prototype, comment, and hand work to developers in one place.",
      "You will learn the interface and the features that save time: components, styles, Auto Layout, and simple prototypes.",
    ],
    youWillLearn: [
      "The Figma interface, frames, layers, shapes, and text",
      "Components, variants, and styles",
      "Auto Layout",
      "Prototyping, comments, and collaboration",
      "Developer handoff and why Figma is useful",
    ],
  },
  lessons: [
    {
      slug: "why-figma",
      title: "Why Figma is useful",
      minutes: "8 min",
      summary:
        "Figma combines collaboration, design, prototyping, reusable pieces, Auto Layout, handoff, and version history.",
      blocks: [
        {
          type: "term",
          term: "Figma",
          meaning:
            "A design tool that runs in the browser (and as an app). Several people can edit or comment on the same file.",
        },
        {
          type: "ul",
          items: [
            "Collaboration: more than one person can work in the file; comments stay on the design.",
            "Design + prototype: screens and clickable flows live together.",
            "Reusable components: a button defined once can update many screens.",
            "Auto Layout: frames can grow and space items like a well-behaved list.",
            "Developer handoff: inspect sizes, colors, and assets.",
            "Version history: you can look back at earlier saves instead of fearing experiments.",
          ],
        },
        {
          type: "p",
          text: "You could sketch only on paper. Figma becomes valuable when you need sharing, reuse, and a prototype other people can click.",
        },
        {
          type: "tip",
          text: "Create a free account and one practice file named CampusBite-v1. Naming files is a professional habit.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Open Figma and create a new design file.",
            "Write the six benefits above in your own words in a sticky note on the canvas.",
          ],
        },
        {
          type: "check",
          question: "Which is a reason teams use Figma?",
          options: [
            { id: "a", label: "Design, prototype, and comment in one shared file", correct: true },
            { id: "b", label: "It deletes version history on purpose", correct: false },
            { id: "c", label: "It cannot make reusable buttons", correct: false },
          ],
          explain:
            "Shared files, components, prototypes, and handoff are the practical reasons.",
        },
      ],
    },
    {
      slug: "interface-frames-layers",
      title: "Interface, frames, layers, shapes, and text",
      minutes: "9 min",
      summary:
        "The canvas holds frames (screens). Layers are the stacked pieces inside. Shapes and text are the basic building blocks.",
      blocks: [
        {
          type: "term",
          term: "Frame",
          meaning:
            "A container, often a phone or desktop screen size, that holds your UI. Think of it as the artboard for one screen.",
        },
        {
          type: "term",
          term: "Layer",
          meaning:
            "Each object in the left panel — a rectangle, a text block, a group. Order matters: higher layers sit on top.",
        },
        {
          type: "ul",
          items: [
            "Toolbar: move, frame, shape, text, comment.",
            "Left: layers and pages.",
            "Right: properties (size, color, type).",
            "Rename layers (“StallCard”, not “Rectangle 24”).",
          ],
        },
        {
          type: "p",
          text: "Start a Frame with a phone preset. Draw a rectangle for a card. Add text for the stall name. You have a wireframe inside Figma.",
        },
        {
          type: "tip",
          text: "Lock background layers so you do not drag the whole screen by accident.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Create a phone frame named Home.",
            "Add a rectangle and a text layer. Rename both in the layers panel.",
          ],
        },
        {
          type: "check",
          question: "In Figma, a phone-sized screen is usually a:",
          options: [
            { id: "a", label: "Frame", correct: true },
            { id: "b", label: "Spreadsheet cell", correct: false },
            { id: "c", label: "Database row", correct: false },
          ],
          explain:
            "Frames are the screen containers you design inside.",
        },
      ],
    },
    {
      slug: "components-variants-styles",
      title: "Components, variants, and styles",
      minutes: "9 min",
      summary:
        "A component is a reusable master. Variants are versions of it. Styles store shared colors and type.",
      blocks: [
        {
          type: "term",
          term: "Component",
          meaning:
            "A reusable UI piece. Instances (copies) stay linked to the main component so you can update many screens at once.",
        },
        {
          type: "term",
          term: "Variant",
          meaning:
            "A planned version of a component, such as Button / Primary and Button / Secondary, or Default / Hover if you design those states.",
        },
        {
          type: "term",
          term: "Style",
          meaning:
            "A saved color, text, or effect. Change the style once to update everything using it.",
        },
        {
          type: "p",
          text: "Make a Button component. Create Primary and Secondary variants. Save a Brand/Orange color style. Now Home and Cart stay in sync.",
        },
        {
          type: "tip",
          text: "If you detach every instance to “just tweak this one,” you lose the benefit. Tweak with variants or a true exception you document.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Create a Button component with Primary and Secondary variants.",
            "Save one color style and one text style. Apply them to the button.",
          ],
        },
        {
          type: "check",
          question: "Components help because they:",
          options: [
            { id: "a", label: "Let you reuse and update UI in many places", correct: true },
            { id: "b", label: "Prevent all comments", correct: false },
            { id: "c", label: "Replace user research", correct: false },
          ],
          explain:
            "Reuse and updates are the point of components and styles.",
        },
      ],
    },
    {
      slug: "auto-layout",
      title: "Auto Layout",
      minutes: "8 min",
      summary:
        "Auto Layout lets a frame arrange children in a row or column with padding and gap — similar to how real UI engines stack items.",
      blocks: [
        {
          type: "term",
          term: "Auto Layout",
          meaning:
            "A Figma feature that automatically spaces and sizes items in a frame when content changes (a longer stall name, an extra badge).",
        },
        {
          type: "p",
          text: "Without Auto Layout, adding a second line of text overlaps the price. With Auto Layout, the card grows. That is closer to how a developer will build it.",
        },
        {
          type: "ul",
          items: [
            "Direction: vertical for a card’s contents, horizontal for a button with an icon.",
            "Gap: space between items.",
            "Padding: inner space from the edge.",
            "Hug vs fill: shrink to content or stretch to the parent.",
          ],
        },
        {
          type: "tip",
          text: "Apply Auto Layout to cards and nav bars first. You will feel the payoff immediately.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Put an image, title, and button in a frame.",
            "Add Auto Layout (vertical), set gap and padding, then lengthen the title and watch the card grow.",
          ],
        },
        {
          type: "check",
          question: "Auto Layout is useful because it:",
          options: [
            { id: "a", label: "Keeps spacing when content changes", correct: true },
            { id: "b", label: "Deletes all text styles", correct: false },
            { id: "c", label: "Stops you from using frames", correct: false },
          ],
          explain:
            "It is the practical way to build flexible, consistent components.",
        },
      ],
    },
    {
      slug: "prototyping-comments-handoff",
      title: "Prototyping, comments, collaboration, and handoff",
      minutes: "9 min",
      summary:
        "Connect frames into a clickable flow, gather comments, and share specs with developers.",
      blocks: [
        {
          type: "term",
          term: "Prototype",
          meaning:
            "A clickable version of the design. In Figma you connect a button to another frame so people can try the flow.",
        },
        {
          type: "term",
          term: "Developer handoff",
          meaning:
            "Sharing the file (or inspect mode) so engineers can read measurements, colors, type, and export images — reducing “guess from a screenshot.”",
        },
        {
          type: "ul",
          items: [
            "Prototype tab: drag a connector from a button to the next frame.",
            "Comments: stick a note on a control; mention a teammate.",
            "Share link: can view / can edit.",
            "Inspect: spacing and CSS-like details for developers.",
          ],
        },
        {
          type: "p",
          text: "A prototype is still not the real app. It is a conversation tool for testing (Module 09) and for showing the flow to a client.",
        },
        {
          type: "tip",
          text: "Name frames the same as the flow steps. Handoff is easier when Home is not “Frame 47.”",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s21",
          title: "Wine shopping: prototype notes",
          text: "What was connected in Figma, tap-target size, and why the age gate is a date field instead of a yes/no.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Connect Home → Stall → Cart with prototype links.",
            "Leave one comment: “Is the primary button clear?”",
          ],
        },
        {
          type: "check",
          question: "Developer handoff in Figma mainly helps by:",
          options: [
            { id: "a", label: "Letting engineers inspect specs instead of guessing", correct: true },
            { id: "b", label: "Hiding all colors", correct: false },
            { id: "c", label: "Replacing usability testing", correct: false },
          ],
          explain:
            "Handoff shares measurements and assets. Testing still needs people.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: a small responsive interface in Figma",
    goal: "Build Home and one other screen in Figma with Auto Layout, a button component, a prototype link, and a wider layout variant.",
    starterLabel: "Figma build list",
    steps: [
      "Create frames for phone Home and Stall (or Cart).",
      "Use Auto Layout on the card and on the page column.",
      "Create a Primary button component and reuse it.",
      "Duplicate Home at a desktop width and rearrange into a grid or side panel.",
      "Add prototype connections and a shareable comment.",
    ],
    starterCode: `File: CampusBite-v1 (or your product)
Pages: Cover, Phone, Desktop

Must have:
[ ] Named frames
[ ] Auto Layout card
[ ] Button component + instance
[ ] Color or text style
[ ] Prototype: at least 2 links
[ ] Desktop rearrangement (not a stretched phone)
[ ] One comment for a teammate or future you`,
    doneWhen: [
      "A classmate can click from one screen to the next in prototype mode.",
      "Changing the button component updates more than one instance.",
      "Desktop is a real layout change, not a zoomed phone.",
    ],
  },
};

export default uiUxDesignModule07;

import { PublishedModule } from "../../types";

export const uiUxDesignModule06: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "ui-design-foundations",
  moduleNumber: "06",
  title: "UI Design Foundations",
  estimatedTime: "60–80 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 06 | UI Design | NSL Digital Lab",
    description:
      "Beginner UI craft: layout, hierarchy, color theory, type, spacing, grids, components, consistency, responsive design, and accessibility.",
    keywords:
      "UI layout, visual hierarchy, color theory complementary analogous triadic, typography, spacing, grids, accessibility",
    canonical: "/learn/ui-ux-design/ui-design-foundations",
  },
  prevModule: {
    href: "/learn/ui-ux-design/wireframing",
    label: "Previous: Module 05",
  },
  nextModule: {
    href: "/learn/ui-ux-design/figma-foundations",
    label: "Next: Module 07",
  },
  intro: {
    headline: "Turn the blueprint into a clear interface",
    body: [
      "Now you add visual craft on top of wireframes: hierarchy, color, type, spacing, and reusable pieces like buttons and cards.",
      "You will also learn simple color harmony so palettes feel planned, plus consistency, responsive behavior, and accessibility as part of UI — not extras.",
    ],
    youWillLearn: [
      "Layout, hierarchy, grids, and spacing",
      "Color and color harmony (complementary, analogous, triadic)",
      "Typography, imagery, and icons",
      "Buttons, forms, and cards",
      "Consistency, responsive UI, and accessibility",
    ],
  },
  lessons: [
    {
      slug: "layout-hierarchy-grids-spacing",
      title: "Layout, visual hierarchy, grids, and spacing",
      minutes: "10 min",
      summary:
        "Hierarchy tells people what to look at first. Grids and spacing keep that hierarchy calm.",
      blocks: [
        {
          type: "term",
          term: "Visual hierarchy",
          meaning:
            "Using size, weight, contrast, and position so the most important thing is seen first (stall name and price before a tiny legal line).",
        },
        {
          type: "term",
          term: "Grid",
          meaning:
            "Invisible columns and rows that line up content. Even a simple 4-column phone grid stops elements from looking randomly dropped.",
        },
        {
          type: "term",
          term: "Spacing",
          meaning:
            "The empty room between elements. Consistent spacing (8px steps, for example) makes a screen feel organised.",
        },
        {
          type: "p",
          text: "If the “Add” button is the same size as a caption, hierarchy has failed. Make primary text larger or bolder, group a card’s content, and keep margins even.",
        },
        {
          type: "tip",
          text: "Squint at the screen. You should still see the title and the main button.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "On a stall card, list three levels: title, price, secondary note.",
            "Assign large / medium / small. Add even padding around the card.",
          ],
        },
        {
          type: "check",
          question: "Visual hierarchy is mainly about:",
          options: [
            { id: "a", label: "Guiding attention to what matters first", correct: true },
            { id: "b", label: "Using as many fonts as possible", correct: false },
            { id: "c", label: "Hiding the main button", correct: false },
          ],
          explain:
            "Size, contrast, and position create a reading order.",
        },
      ],
    },
    {
      slug: "color-and-color-theory",
      title: "Color and color theory",
      minutes: "10 min",
      summary:
        "Color carries meaning and mood. Harmony is a simple way to pick colors that work together.",
      blocks: [
        {
          type: "term",
          term: "Color harmony",
          meaning:
            "A planned relationship between colors so the interface feels coherent instead of random.",
        },
        {
          type: "term",
          term: "Complementary colors",
          meaning:
            "Colors opposite each other on the color wheel (for example blue and orange). They contrast strongly — useful for a highlight, easy to overuse.",
        },
        {
          type: "term",
          term: "Analogous colors",
          meaning:
            "Colors next to each other on the wheel (blue, blue-green, green). They feel calm and related — good for backgrounds and supporting UI.",
        },
        {
          type: "term",
          term: "Triadic colors",
          meaning:
            "Three colors spaced evenly around the wheel. They can feel lively. Use one as dominant and the others as accents so the screen is not a circus.",
        },
        {
          type: "p",
          text: "CampusBite might use a warm orange as the primary action color, a deep navy for text, and a cream background (analogous warmth plus a strong accent). Do not use complementary pairs for large blocks of body text — contrast of hue can vibrate and tire the eyes.",
        },
        {
          type: "ul",
          items: [
            "Pick one primary action color and use it sparingly.",
            "Keep text color dark enough on the background (we will check this more in Module 09).",
            "Grey is a color too. It calms busy screens.",
          ],
        },
        {
          type: "tip",
          text: "If every element shouts in a complementary color, nothing shouts. Save strong contrast for the main button and errors.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Choose a complementary pair, an analogous trio, and a triadic trio (names are enough: “blue + orange”).",
            "Circle which set you would use for a calm food-ordering app and why.",
          ],
        },
        {
          type: "check",
          question: "Complementary colors are:",
          options: [
            { id: "a", label: "Opposite on the color wheel and high contrast", correct: true },
            { id: "b", label: "Always the only legal choice", correct: false },
            { id: "c", label: "Colors that are exactly the same", correct: false },
          ],
          explain:
            "Opposite hues contrast. Use them with care, usually as accents.",
        },
      ],
    },
    {
      slug: "typography-icons-imagery",
      title: "Typography, icons, and imagery",
      minutes: "8 min",
      summary:
        "Type must be readable. Icons and photos should explain, not decorate over the task.",
      blocks: [
        {
          type: "term",
          term: "Typography",
          meaning:
            "How text is styled: font (the letter design), size, weight (boldness), line height (space between lines), and length of lines.",
        },
        {
          type: "ul",
          items: [
            "One or two typefaces is enough for beginners.",
            "Body text needs comfortable size and line height on phones.",
            "Icons should have labels if the meaning is not obvious (a heart can mean like or health).",
            "Photos of food should look like the dish, with alt text later for accessibility.",
          ],
        },
        {
          type: "tip",
          text: "Never stretch type to fit. Shorten the label or give it more space.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write a stall name, a price, and a 12-word description.",
            "Assign sizes: largest, medium, smallest. Check they still read as a group.",
          ],
        },
        {
          type: "check",
          question: "Beginner UI type is usually better with:",
          options: [
            { id: "a", label: "One or two typefaces and clear size steps", correct: true },
            { id: "b", label: "Seven novelty fonts on one card", correct: false },
            { id: "c", label: "Tiny grey text for the main price", correct: false },
          ],
          explain:
            "Readable type and a few sizes create hierarchy without noise.",
        },
      ],
    },
    {
      slug: "buttons-forms-cards",
      title: "Buttons, forms, and cards",
      minutes: "8 min",
      summary:
        "These common pieces should look and behave the same every time so people can trust them.",
      blocks: [
        {
          type: "p",
          text: "A button is a control that performs an action. A form is a set of fields for input. A card is a grouped container (photo + title + price + action).",
        },
        {
          type: "ul",
          items: [
            "Primary button: one per section, strongest fill.",
            "Secondary button: outline or quieter fill.",
            "Forms: labels above fields, helpful errors next to the field.",
            "Cards: same padding and image ratio in a list so the eye can scan.",
          ],
        },
        {
          type: "p",
          text: "If “Add” is a filled orange pill on Home and a tiny text link on the stall page, people hesitate. Consistency is a UI skill.",
        },
        {
          type: "tip",
          text: "Write button labels as actions: “Pay ₹240,” not “Submit” or “OK.”",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Sketch a dish card with image, name, price, and Add.",
            "Sketch a tiny form: name + phone + a primary button. Label the fields.",
          ],
        },
        {
          type: "check",
          question: "A primary button should usually:",
          options: [
            { id: "a", label: "Look strongest and describe the action", correct: true },
            { id: "b", label: "Hide among ten equal buttons", correct: false },
            { id: "c", label: "Use unreadable contrast on purpose", correct: false },
          ],
          explain:
            "People should recognise the next step instantly.",
        },
      ],
    },
    {
      slug: "consistency-responsive-accessibility",
      title: "Consistency, responsive design, and accessibility",
      minutes: "9 min",
      summary:
        "The same patterns should repeat. Layouts should adapt. More people should be able to use the UI.",
      blocks: [
        {
          type: "term",
          term: "Consistency",
          meaning:
            "Repeating the same layout, labels, and control styles so people do not relearn the interface on every screen.",
        },
        {
          type: "term",
          term: "Accessibility",
          meaning:
            "Designing so people with different abilities and situations can use the product — including low vision, motor difficulty, and noisy environments. Module 09 goes deeper.",
        },
        {
          type: "ul",
          items: [
            "Reuse the same card and button styles.",
            "On small screens, stack content; on large screens, use extra columns without stretching text.",
            "Do not communicate status by color alone (add an icon or text for “stall closed”).",
            "Keep tap targets large enough for fingers.",
          ],
        },
        {
          type: "tip",
          text: "If you invent a new button style “just for this screen,” write down why. If you have no why, reuse the old style.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s19",
          title: "Wine shopping: UI and design system",
          text: "See occasion-first screens plus burgundy/gold tokens — craft that follows the same consistency rules as this lesson.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "List three things that should stay the same on Home and Cart (button style, type sizes, corner radius).",
            "Write one accessibility improvement (larger tap target or text with the color status).",
          ],
        },
        {
          type: "check",
          question: "Accessibility in UI foundations means:",
          options: [
            { id: "a", label: "More people can perceive and use the interface", correct: true },
            { id: "b", label: "Only decorating for a trend", correct: false },
            { id: "c", label: "Hiding labels to look minimal", correct: false },
          ],
          explain:
            "Inclusive UI is part of craft, not a later sticker.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: polish the UI from wireframes",
    goal: "Take 3–5 wireframes and add hierarchy, a simple palette (with a harmony type), type steps, and consistent buttons/cards. Keep it realistic, not noisy.",
    starterLabel: "UI polish notes",
    steps: [
      "Choose complementary, analogous, or triadic as your harmony — and name the role of each color (background, text, action, accent).",
      "Define heading, body, and caption sizes.",
      "Apply the same card and button to every screen.",
      "Check that the primary action is obvious when you squint.",
      "Note one responsive change between phone and a wider layout.",
    ],
    starterCode: `Harmony type: complementary / analogous / triadic
Colors:
- Background:
- Text:
- Primary action:
- Accent:

Type steps: Heading / Body / Caption
Components reused: Card, Primary button, ...

Screens updated:
Accessibility note (contrast or labels):
Responsive note:`,
    doneWhen: [
      "Screens still match the wireframe structure.",
      "You can name your color harmony and each color’s job.",
      "Buttons and cards look like a family, not five unrelated doodles.",
    ],
  },
};

export default uiUxDesignModule06;

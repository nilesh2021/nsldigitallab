import { PublishedModule } from "../../types";

export const uiUxDesignModule05: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "wireframing",
  moduleNumber: "05",
  title: "Wireframing",
  estimatedTime: "50–70 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 05 | Wireframing | NSL Digital Lab",
    description:
      "Beginner wireframing: low vs high fidelity, layout, content, navigation, function before style, and multiple screen sizes.",
    keywords:
      "what is a wireframe, low fidelity wireframe, high fidelity, layout, navigation, responsive wireframes",
    canonical: "/learn/ui-ux-design/wireframing",
  },
  prevModule: {
    href: "/learn/ui-ux-design/ideation-generate-solutions",
    label: "Previous: Module 04",
  },
  nextModule: {
    href: "/learn/ui-ux-design/ui-design-foundations",
    label: "Next: Module 06",
  },
  intro: {
    headline: "Draw the blueprint before the paint",
    body: [
      "Wireframing sits at the start of the Design stage. A wireframe is a blueprint: structure, content, and function — usually in grey boxes.",
      "You will learn fidelity, layout, navigation, and how to think about phone vs desktop without decorating yet.",
    ],
    youWillLearn: [
      "What a wireframe is",
      "Low-fidelity vs high-fidelity",
      "Layout, structure, and content placement",
      "Navigation and functionality before visual styling",
      "Why wireframes work as blueprints",
      "How to plan for different screen sizes",
    ],
  },
  lessons: [
    {
      slug: "what-is-a-wireframe",
      title: "What is a wireframe?",
      minutes: "8 min",
      summary:
        "A wireframe is a simple drawing of a screen that shows what goes where and what is tappable.",
      blocks: [
        {
          type: "term",
          term: "Wireframe",
          meaning:
            "A low-decoration layout of a screen: boxes for images, lines for text, and labels for buttons. It answers structure, not branding.",
        },
        {
          type: "p",
          text: "Architects do not pick sofa fabrics before they draw rooms. Designers should not pick gradients before they know where the cart button lives.",
        },
        {
          type: "ul",
          items: [
            "Shows regions: header, content, actions.",
            "Shows real content types: stall name, price, CTA (call to action — the main button).",
            "Can be paper, whiteboard, or simple Figma greys.",
          ],
        },
        {
          type: "tip",
          text: "Use real-ish words (“Masala dosa ₹80”), not only “lorem ipsum,” so you see if labels fit.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "On paper, draw a phone rectangle.",
            "Place: search, a list of stall cards, and a bottom navigation. Label each box.",
          ],
        },
        {
          type: "check",
          question: "A wireframe’s main job is to show:",
          options: [
            { id: "a", label: "Final photography and brand gradients", correct: false },
            { id: "b", label: "Structure, content placement, and actions", correct: true },
            { id: "c", label: "Database tables", correct: false },
          ],
          explain:
            "Wireframes are blueprints. Visual styling comes after the blueprint is agreed.",
        },
      ],
    },
    {
      slug: "low-vs-high-fidelity",
      title: "Low-fidelity vs high-fidelity",
      minutes: "8 min",
      summary:
        "Fidelity means how close the drawing is to the final look. Start low. Raise fidelity when the structure is stable.",
      blocks: [
        {
          type: "term",
          term: "Fidelity",
          meaning:
            "How detailed and realistic a design is. Low-fidelity is rough. High-fidelity looks closer to the real product.",
        },
        {
          type: "ul",
          items: [
            "Low-fidelity: grey boxes, simple type, no real photos. Fast to change.",
            "High-fidelity: real spacing, color, type, components. Slower to change.",
            "Mid-fidelity: clearer layout and real labels, still limited color.",
          ],
        },
        {
          type: "p",
          text: "If a stakeholder argues about a blue vs green button on day one, fidelity is too high too soon. Keep it grey until the flow is right.",
        },
        {
          type: "tip",
          text: "Paper wireframes are valid professional work. They are not “less serious” than Figma.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Redraw your home screen twice: once as 6 boxes, once with real labels and a clear primary button.",
            "Note which version was faster to change.",
          ],
        },
        {
          type: "check",
          question: "You should start most beginner projects with:",
          options: [
            { id: "a", label: "Low-fidelity wireframes", correct: true },
            { id: "b", label: "Final 3D renders", correct: false },
            { id: "c", label: "Print-ready posters", correct: false },
          ],
          explain:
            "Low fidelity keeps the team focused on structure and tasks.",
        },
      ],
    },
    {
      slug: "layout-structure-content",
      title: "Layout, structure, and content placement",
      minutes: "8 min",
      summary:
        "Layout is how regions sit on the screen. Put the most important content where eyes and thumbs can reach it.",
      blocks: [
        {
          type: "term",
          term: "Layout",
          meaning:
            "The arrangement of header, main content, and actions. Good layout creates a path for the eye.",
        },
        {
          type: "p",
          text: "On a phone, thumbs rest at the bottom. A primary “Reorder” or “View cart” control often belongs where it is easy to hit. Tiny top-right links are easy to miss.",
        },
        {
          type: "ul",
          items: [
            "One primary action per screen when you can.",
            "Group related content (price next to the dish name).",
            "Leave space; cramped boxes feel harder even in grey.",
            "Put navigation in a predictable place.",
          ],
        },
        {
          type: "tip",
          text: "If everything is important, nothing is. Shrink or move secondary links.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "List the #1 action on your home screen.",
            "Place it in the wireframe where a thumb can reach it. Move decorations out of the way.",
          ],
        },
        {
          type: "check",
          question: "Content placement should mainly follow:",
          options: [
            { id: "a", label: "What the user must do next, plus easy reach", correct: true },
            { id: "b", label: "Random scattered boxes for variety", correct: false },
            { id: "c", label: "Whatever fits leftover space after a huge logo", correct: false },
          ],
          explain:
            "Structure supports the task. Decoration waits.",
        },
      ],
    },
    {
      slug: "navigation-and-function-first",
      title: "Navigation and functionality before styling",
      minutes: "8 min",
      summary:
        "People must know where they are and what they can do. Color cannot fix a missing back path.",
      blocks: [
        {
          type: "term",
          term: "Navigation",
          meaning:
            "How people move between areas: tabs, menus, back buttons, search. It should match your information architecture.",
        },
        {
          type: "p",
          text: "Functionality means the screen can support the flow: add to cart, see totals, go back, recover from empty cart. Wireframes should include these states as extra frames if needed.",
        },
        {
          type: "ul",
          items: [
            "Show tab labels that match IA.",
            "Show a way back from stall menu to list.",
            "Show empty and error as simple extra wireframes.",
            "Do not spend time on shadows yet.",
          ],
        },
        {
          type: "tip",
          text: "If you cannot explain a screen’s function in one sentence, the wireframe is not ready.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write one sentence: “This screen exists so the user can…”",
            "Add a back action and a primary action to the wireframe.",
          ],
        },
        {
          type: "check",
          question: "Before visual styling, wireframes should make clear:",
          options: [
            { id: "a", label: "How people move and complete actions", correct: true },
            { id: "b", label: "The exact brand gradient angle", correct: false },
            { id: "c", label: "The CEO’s favorite stock photo", correct: false },
          ],
          explain:
            "Function and navigation are the blueprint. Paint comes later.",
        },
      ],
    },
    {
      slug: "wireframes-as-blueprints",
      title: "Wireframes as design blueprints",
      minutes: "7 min",
      summary:
        "Share wireframes to agree on scope with stakeholders and developers before expensive UI work.",
      blocks: [
        {
          type: "p",
          text: "A blueprint lets a stall owner say “we need a spice-level note” before you illustrate 20 dishes. Changing a labelled box is cheap. Changing 20 polished screens is slow.",
        },
        {
          type: "ul",
          items: [
            "Number screens (Home, Stall, Cart, Pay, Success).",
            "Annotate: “Tapping card opens stall menu.”",
            "Invite comments on missing steps, not on grey vs greyer.",
          ],
        },
        {
          type: "tip",
          text: "Say out loud: “This is a blueprint, not the final look.” It sets the right kind of feedback.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s18",
          title: "Wine shopping: wireframe gallery",
          text: "Low-fidelity Home, Discover, PDP, and Checkout frames used to lock hierarchy before visual design.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Add two annotations to a wireframe (what happens on tap).",
            "Write one question you want a stakeholder to answer.",
          ],
        },
        {
          type: "check",
          question: "Wireframes are valuable because they:",
          options: [
            { id: "a", label: "Let you agree on structure before costly visual work", correct: true },
            { id: "b", label: "Replace all testing forever", correct: false },
            { id: "c", label: "Are only for print magazines", correct: false },
          ],
          explain:
            "They are communication tools, not just drawings.",
        },
      ],
    },
    {
      slug: "different-screen-sizes",
      title: "Designing for different screen sizes",
      minutes: "8 min",
      summary:
        "The same IA can look different on a phone and a laptop. Plan what stacks, what sits side by side, and what stays reachable.",
      blocks: [
        {
          type: "term",
          term: "Responsive design",
          meaning:
            "Designing layouts that adapt to different screen widths (phone, tablet, desktop) instead of drawing only one size.",
        },
        {
          type: "p",
          text: "On CampusBite mobile, stall cards stack in a list. On a wide screen, they may sit in a 3-column grid, with filters on the left. The content is the same; the layout changes.",
        },
        {
          type: "ul",
          items: [
            "Start with the smallest phone you care about, then expand.",
            "Do not shrink a desktop site until text is unreadable.",
            "Keep primary actions visible without hunting.",
            "You do not need every size in v1, but sketch at least phone + one wider layout.",
          ],
        },
        {
          type: "tip",
          text: "If desktop only copies a stretched phone, you wasted the extra space. Use extra space for comparison, filters, or a persistent cart.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Sketch the stall list as a single column (phone) and as a grid (desktop).",
            "Note what you would put in the extra desktop space.",
          ],
        },
        {
          type: "check",
          question: "Responsive wireframes should:",
          options: [
            { id: "a", label: "Show how structure changes across widths", correct: true },
            { id: "b", label: "Ignore phones if the designer uses a monitor", correct: false },
            { id: "c", label: "Use unreadably small type to fit more boxes", correct: false },
          ],
          explain:
            "You plan structure for more than one size before visual polish.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: 3–5 low-fidelity screens",
    goal: "Wireframe the main task in 3–5 screens (for example Home, Stall, Cart, Pay, Success). Stay grey. Annotate actions.",
    starterLabel: "Wireframe checklist",
    steps: [
      "Use the flow from Module 04.",
      "Draw 3–5 phone screens as boxes and labels.",
      "Include navigation that matches your IA.",
      "Annotate the primary tap on each screen.",
      "Optional: one extra desktop layout for Home.",
    ],
    starterCode: `Screens:
1. Home — purpose:
2. Stall menu — purpose:
3. Cart — purpose:
4. Pay (optional) — purpose:
5. Success / empty / error (pick one extra) — purpose:

Navigation:
Primary action each screen:
Notes for different widths:
Still grey? (no final colors/photos): yes / no`,
    doneWhen: [
      "Someone else can explain the task by looking at your boxes.",
      "You have 3–5 screens, not one decorated mock.",
      "Styling is still limited (grey / simple type).",
    ],
  },
};

export default uiUxDesignModule05;

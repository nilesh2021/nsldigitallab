import { PublishedModule } from "../../types";

export const uiUxDesignModule04: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "ideation-generate-solutions",
  moduleNumber: "04",
  title: "Ideation: Generate Solutions",
  estimatedTime: "55–75 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 04 | Ideation | NSL Digital Lab",
    description:
      "Beginner Ideate module: brainstorming, workshops, mind maps, sketches, information architecture, user flows, and choosing ideas.",
    keywords:
      "UX ideation, brainstorming, information architecture, user flow, mind mapping, problem statement solutions",
    canonical: "/learn/ui-ux-design/ideation-generate-solutions",
  },
  prevModule: {
    href: "/learn/ui-ux-design/define-understand-the-user",
    label: "Previous: Module 03",
  },
  nextModule: {
    href: "/learn/ui-ux-design/wireframing",
    label: "Next: Module 05",
  },
  intro: {
    headline: "Many ideas first, then a structure",
    body: [
      "Ideate is the third stage. You generate more than one solution before you fall in love with a single screen.",
      "Then you organise the product: information architecture (how content is grouped) and user flows (the steps through the product).",
    ],
    youWillLearn: [
      "Brainstorming, workshops, mind mapping, and sketching",
      "How problem statements guide ideas",
      "How to generate multiple solutions",
      "What information architecture is",
      "How to draw a user flow",
      "How to choose ideas using user and business needs",
    ],
  },
  lessons: [
    {
      slug: "brainstorming-and-workshops",
      title: "Brainstorming and workshops",
      minutes: "8 min",
      summary:
        "Brainstorming is a timed burst of ideas. A workshop is a guided session with rules so quieter voices can contribute.",
      blocks: [
        {
          type: "term",
          term: "Brainstorming",
          meaning:
            "Generating many ideas quickly without judging them in the first round. Quantity first, quality later.",
        },
        {
          type: "term",
          term: "Workshop",
          meaning:
            "A structured meeting with a goal, a timebox, and activities (sticky notes, voting) so the team thinks together.",
        },
        {
          type: "p",
          text: "Bad brainstorming is “the loudest person sketches one idea and everyone nods.” Better: eight minutes of silent notes, then share, then cluster.",
        },
        {
          type: "ul",
          items: [
            "Restate the problem statement on the wall.",
            "No criticism in round one.",
            "Build on others (“yes, and…”).",
            "Vote with dots on the ideas that fit user and business needs.",
          ],
        },
        {
          type: "tip",
          text: "If you work alone, you can still workshop: set a timer, write 10 ideas, then rest, then cut to 3.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Set a 5-minute timer.",
            "Write 8 ways CampusBite could help Aarav use a 20-minute break (no drawing required).",
          ],
        },
        {
          type: "check",
          question: "The first round of brainstorming should:",
          options: [
            { id: "a", label: "Judge every idea immediately", correct: false },
            { id: "b", label: "Generate many ideas without early criticism", correct: true },
            { id: "c", label: "Pick colors for the logo", correct: false },
          ],
          explain:
            "Judging too early kills useful but unfinished ideas.",
        },
      ],
    },
    {
      slug: "mind-mapping-and-sketching",
      title: "Mind mapping and sketching",
      minutes: "8 min",
      summary:
        "A mind map branches from a central problem. Sketches are fast, ugly drawings that test ideas cheaply.",
      blocks: [
        {
          type: "term",
          term: "Mind map",
          meaning:
            "A diagram with the problem in the center and branches for related ideas (reorder, wait times, combos, pickup window).",
        },
        {
          type: "term",
          term: "Sketching",
          meaning:
            "Quick drawings of screens or flows using boxes and arrows. They are for thinking, not for a portfolio photo yet.",
        },
        {
          type: "p",
          text: "Ugly sketches are a feature. If a sketch looks finished, people hesitate to criticise it. Boxes labeled “search,” “stall card,” and “pay” are enough.",
        },
        {
          type: "tip",
          text: "Use paper or a whiteboard. Jumping into Figma too soon makes you polish instead of explore.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Draw a mind map with “20-minute lunch” in the center and at least five branches.",
            "Sketch two different home screens as boxes only.",
          ],
        },
        {
          type: "check",
          question: "Early sketches should be:",
          options: [
            { id: "a", label: "Fast and rough so you can compare ideas", correct: true },
            { id: "b", label: "Pixel-perfect with final photography", correct: false },
            { id: "c", label: "Hidden from the team forever", correct: false },
          ],
          explain:
            "Rough sketches keep you in Ideate instead of fake-final Design.",
        },
      ],
    },
    {
      slug: "problem-statements-and-many-solutions",
      title: "Problem statements and multiple solutions",
      minutes: "8 min",
      summary:
        "Stay tied to the Define problem. Force yourself to invent more than one way to solve it.",
      blocks: [
        {
          type: "p",
          text: "If the problem is “students cannot see wait times,” solutions might be: live queue numbers, a simple “busy / okay / quiet” label, or a pickup-time slot picker. All three are valid. You will not build all of them in v1.",
        },
        {
          type: "ul",
          items: [
            "Write the problem at the top of the page.",
            "List at least three solution directions.",
            "For each, note effort (small / medium / large) in plain words.",
            "Keep one “safe” idea and one “braver” idea.",
          ],
        },
        {
          type: "tip",
          text: "A solution that ignores the problem statement is a distraction, even if it looks impressive.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Copy your Module 03 problem statement.",
            "Write three different solutions in one sentence each.",
          ],
        },
        {
          type: "check",
          question: "Why generate multiple solutions?",
          options: [
            { id: "a", label: "So you can compare options against user and business needs", correct: true },
            { id: "b", label: "So you never have to choose", correct: false },
            { id: "c", label: "So Discovery can be skipped", correct: false },
          ],
          explain:
            "The first idea is rarely the only useful one. Comparison is the point.",
        },
      ],
    },
    {
      slug: "information-architecture",
      title: "Information architecture",
      minutes: "9 min",
      summary:
        "Information architecture is how you group and label content so people can find their way.",
      blocks: [
        {
          type: "term",
          term: "Information architecture (IA)",
          meaning:
            "The structure of the product: what sections exist, how they nest, and what they are called. Think of a shop’s aisle signs, not the paint color.",
        },
        {
          type: "p",
          text: "CampusBite IA might be: Home, Search, Orders, Account. Home might contain: Reorder, Nearby stalls, Combos. If you bury “Pickup status” inside Account, hungry students may never find it.",
        },
        {
          type: "ul",
          items: [
            "Group by the user’s mental model (how they think), not by your org chart.",
            "Use words they use (“Orders,” not “Transactional ledger”).",
            "Keep v1 shallow: few top-level items.",
          ],
        },
        {
          type: "code",
          title: "Tiny IA outline",
          code: `CampusBite
- Home
  - Reorder
  - Nearby stalls
  - Combos
- Search
- Orders (active + past)
- Account (payments, addresses)`,
        },
        {
          type: "tip",
          text: "If two labels mean the same thing, merge them. Extra rooms in a house confuse guests.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s16",
          title: "Wine shopping: information architecture",
          text: "Home, Discover, Shop, Occasions, Gifts — then PDP, cart, and checkout as a shallow tree.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write a 4-item top navigation for your product.",
            "Under Home, list 3 content groups.",
          ],
        },
        {
          type: "check",
          question: "Information architecture is mainly about:",
          options: [
            { id: "a", label: "How content is grouped and labeled", correct: true },
            { id: "b", label: "Which stock photo looks premium", correct: false },
            { id: "c", label: "Server programming languages", correct: false },
          ],
          explain:
            "IA is structure and naming so people can find things.",
        },
      ],
    },
    {
      slug: "user-flows",
      title: "User flows",
      minutes: "9 min",
      summary:
        "A user flow is the path of screens and decisions a person takes to finish a task.",
      blocks: [
        {
          type: "term",
          term: "User flow",
          meaning:
            "A diagram of steps: screens, choices (yes/no), and outcomes. Example: Open app → Choose stall → Add item → Cart → Pay → Success.",
        },
        {
          type: "p",
          text: "Flows include unhappy paths: payment fails, stall is closed, cart is empty. Beginners often draw only the perfect path. Real UX includes recovery.",
        },
        {
          type: "ul",
          items: [
            "Start with the trigger (hunger / notification / habit).",
            "End with success (order confirmed) or a clear fail state.",
            "Use diamonds for decisions (“Logged in?”).",
            "Keep one flow per task.",
          ],
        },
        {
          type: "code",
          title: "Pickup order flow (text version)",
          code: `Open app
  → Nearby stalls
    → Stall menu
      → Add item → Cart
        → Pay
          → Success + pickup time
        → Pay fail → retry
    → Stall closed → similar stalls`,
        },
        {
          type: "tip",
          text: "If a flow needs 20 steps for a 20-minute lunch, the idea is too heavy. Cut steps.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s17",
          title: "Wine shopping: happy path",
          text: "Land → occasion → three bottles → PDP → ship date → cart → age + pay. Expert filters stay optional.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Draw a flow for “reorder yesterday’s lunch.”",
            "Add one fail path (stall closed).",
          ],
        },
        {
          type: "check",
          question: "A user flow should include:",
          options: [
            { id: "a", label: "Only the perfect happy path, never errors", correct: false },
            {
              id: "b",
              label: "The steps and important decisions, including some fail paths",
              correct: true,
            },
            { id: "c", label: "Every pixel of the final UI", correct: false },
          ],
          explain:
            "Flows are paths and decisions. Wireframes will show layout next.",
        },
      ],
    },
    {
      slug: "choosing-ideas",
      title: "Choosing ideas with user and business needs",
      minutes: "7 min",
      summary:
        "You pick a direction by scoring ideas against the persona’s needs and the business goal — not by which sketch is prettiest.",
      blocks: [
        {
          type: "p",
          text: "Make a tiny table. Rows are ideas. Columns are: helps Aarav’s time, helps stall owners get orders, can we build in v1? Mark yes / maybe / no.",
        },
        {
          type: "ul",
          items: [
            "Prefer ideas that serve the problem statement.",
            "Prefer smaller v1 ideas you can test.",
            "Park exciting extras on a later list.",
          ],
        },
        {
          type: "tip",
          text: "“We might need it someday” is how beginner products become confusing. Park it.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Score your three solutions with yes / maybe / no for user need and business goal.",
            "Circle one v1 idea and write why the others wait.",
          ],
        },
        {
          type: "check",
          question: "You should choose a v1 idea mainly by:",
          options: [
            { id: "a", label: "Fit to user needs, business goals, and realistic scope", correct: true },
            { id: "b", label: "Which gradient looks newest", correct: false },
            { id: "c", label: "Whatever a competitor copied from someone else", correct: false },
          ],
          explain:
            "Ideate ends with a chosen direction. Design will make it visible.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: user flow and basic IA",
    goal: "Produce a simple information architecture and one detailed user flow (with at least one fail path) for your v1 idea.",
    starterLabel: "IA and flow template",
    steps: [
      "Restate the problem and the chosen v1 idea in two sentences.",
      "Write a site/app map with 4 top-level areas and 2–4 items under Home.",
      "Draw or write a user flow for the main task.",
      "Add one decision and one fail path.",
      "List two ideas you will not build in v1, and why.",
    ],
    starterCode: `Problem (from Define):
Chosen v1 idea:

INFORMATION ARCHITECTURE
- Home
  -
  -
- Search
- Orders
- Account

USER FLOW (main task)
Start:
Steps:
Decision:
Fail path:
Success:

Parked ideas (not v1):
1.
2.`,
    doneWhen: [
      "IA uses everyday labels a student would understand.",
      "The flow matches the chosen idea and includes a fail path.",
      "You can explain why two extra ideas are parked.",
    ],
  },
};

export default uiUxDesignModule04;

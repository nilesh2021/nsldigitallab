import { Palette } from "lucide-react";
import { INSTAGRAM_URL, LINKEDIN_COMPANY_URL } from "../../../../data/social";
import { LearningPath } from "../../types";

export { LINKEDIN_COMPANY_URL };

export const uiUxDesignPath: LearningPath = {
  slug: "ui-ux-design",
  title: "UI/UX Design Foundations",
  eyebrow: "Design path",
  tagline: "from first research notes to a case study",
  description:
    "A beginner path for people with no design background. You will follow a professional process — Discovery, Define, Ideate, Design, Testing — and finish with a portfolio case study.",
  level: "Beginner",
  estimatedTime: "5–7 weeks · ~40 hours",
  moduleLabel: "10 modules",
  prerequisites: [
    "Curiosity about how apps and websites feel to use",
    "A computer and a free Figma account (you will set this up in Module 07)",
    "No drawing skill or design software experience required",
  ],
  outcomes: [
    "Explain UI, UX, and the designer’s role in plain language",
    "Run a simple Discovery → Define → Ideate → Design → Testing process",
    "Create personas, journeys, user flows, wireframes, and UI screens",
    "Use Figma for layouts, components, and a basic prototype",
    "Test with people, check accessibility, and write a case study",
  ],
  linkedInUrl: LINKEDIN_COMPANY_URL,
  instagramUrl: INSTAGRAM_URL,
  download: {
    label: "Free Figma website wireframe kit",
    href: "/downloads/figma-website-wireframe-kit.html",
  },
  seo: {
    title:
      "UI/UX Design Foundations Course | 10-Module Path | NSL Digital Lab",
    description:
      "Free beginner UI/UX path: Discovery, Define, Ideate, Design, and Testing — with Figma, Nielsen heuristics, accessibility, and a portfolio case study.",
    keywords:
      "learn UI UX, UI UX course, user-centered design, wireframing, Figma beginner, Nielsen heuristics, usability testing, UX case study",
    canonical: "/learn/ui-ux-design",
  },
  icon: Palette,
  modules: [
    {
      n: "01",
      slug: "introduction-to-ui-ux-design",
      contentHref: "/learn/ui-ux-design/introduction-to-ui-ux-design",
      title: "Introduction to UI/UX Design",
      description:
        "Learn what UX and UI mean, how they differ, how they work together, and why designers start with people — not pixels. You will also see the five-stage process used in this course.",
      topics: [
        "What UX is",
        "What UI is",
        "The difference between UI and UX",
        "The role of a UI/UX designer",
        "User-centered design",
        "How UI and UX work together",
        "Overview of Discovery → Define → Ideate → Design → Testing",
      ],
      miniProject:
        "Analyze a familiar website or app and identify UI and UX problems.",
    },
    {
      n: "02",
      slug: "discovery-understand-the-problem",
      contentHref: "/learn/ui-ux-design/discovery-understand-the-problem",
      title: "Discovery: Understand the Problem",
      description:
        "Before you draw screens, you gather requirements, talk to stakeholders, study users, and look at competitors so you know what problem you are solving.",
      topics: [
        "Requirement gathering",
        "Business goals and user needs",
        "Stakeholder interviews",
        "User research and research objectives",
        "Qualitative vs quantitative research",
        "Interviews, surveys, field studies, competitor analysis",
      ],
      miniProject: "Create a simple research plan for a product.",
    },
    {
      n: "03",
      slug: "define-understand-the-user",
      contentHref: "/learn/ui-ux-design/define-understand-the-user",
      title: "Define: Understand the User",
      description:
        "Turn messy research notes into patterns, a persona, an empathy map, a journey map, and a clear problem statement.",
      topics: [
        "Organizing research findings",
        "Identifying patterns",
        "User personas",
        "Empathy maps",
        "User journey maps",
        "User goals, pain points, and the actual problem",
      ],
      miniProject: "Create a persona, empathy map, and journey map.",
    },
    {
      n: "04",
      slug: "ideation-generate-solutions",
      contentHref: "/learn/ui-ux-design/ideation-generate-solutions",
      title: "Ideation: Generate Solutions",
      description:
        "Generate many ideas, then structure the product with information architecture and user flows before you polish visuals.",
      topics: [
        "Brainstorming, workshops, mind mapping, sketching",
        "Problem statements",
        "Generating multiple solutions",
        "Information architecture",
        "User flows",
        "Choosing ideas based on user and business needs",
      ],
      miniProject: "Create a user flow and basic information architecture.",
    },
    {
      n: "05",
      slug: "wireframing",
      contentHref: "/learn/ui-ux-design/wireframing",
      title: "Wireframing",
      description:
        "Draw the blueprint of the product: layout, content, navigation, and function — without getting stuck on colors yet.",
      topics: [
        "What a wireframe is",
        "Low-fidelity vs high-fidelity",
        "Layout, structure, and content placement",
        "Navigation and functionality before styling",
        "Wireframes as design blueprints",
        "Designing for different screen sizes",
      ],
      miniProject: "Create low-fidelity wireframes for 3–5 screens.",
    },
    {
      n: "06",
      slug: "ui-design-foundations",
      contentHref: "/learn/ui-ux-design/ui-design-foundations",
      title: "UI Design Foundations",
      description:
        "Turn structure into a clear interface: layout, hierarchy, color, type, spacing, components, consistency, responsive design, and accessibility.",
      topics: [
        "Layout, visual hierarchy, grids, and spacing",
        "Color, color harmony, complementary, analogous, triadic",
        "Typography, buttons, forms, cards, icons, imagery",
        "Consistency, responsive design, and accessibility",
      ],
      miniProject: "Convert wireframes into a polished UI design.",
    },
    {
      n: "07",
      slug: "figma-foundations",
      contentHref: "/learn/ui-ux-design/figma-foundations",
      title: "Figma Foundations",
      description:
        "Learn the Figma workspace: frames, layers, components, Auto Layout, prototyping, comments, and developer handoff.",
      topics: [
        "Figma interface, frames, layers, shapes, and text",
        "Components, variants, styles, and Auto Layout",
        "Prototyping, comments, and collaboration",
        "Why Figma is useful for teams and handoff",
      ],
      miniProject: "Design a small responsive interface in Figma.",
    },
    {
      n: "08",
      slug: "ui-ux-principles-and-nielsen-heuristics",
      contentHref:
        "/learn/ui-ux-design/ui-ux-principles-and-nielsen-heuristics",
      title: "UI/UX Design Principles & Nielsen Heuristics",
      description:
        "Learn practical usability principles and Nielsen’s 10 heuristics in simple language, with examples, mistakes, and how to apply each one.",
      topics: [
        "User-centered design, hierarchy, feedback, accessibility, usability",
        "Affordance, flexibility, aesthetic integrity, performance, context of use",
        "Nielsen’s 10 usability heuristics with examples",
      ],
      miniProject: "Perform a heuristic evaluation of an existing website or app.",
    },
    {
      n: "09",
      slug: "prototyping-testing-accessibility",
      contentHref: "/learn/ui-ux-design/prototyping-testing-accessibility",
      title: "Prototyping, Testing & Accessibility",
      description:
        "Make a clickable prototype, test with real people, write findings professionally, and check accessibility basics (WCAG, contrast, keyboard, alt text).",
      topics: [
        "Interactive prototypes and prototype flows",
        "Usability testing, feedback, iteration, client feedback",
        "WCAG awareness, contrast, readability, keyboard, focus, alt text, forms",
        "How to describe findings professionally",
      ],
      miniProject:
        "Create a prototype, conduct a usability test, and document findings.",
    },
    {
      n: "10",
      slug: "complete-ui-ux-case-study",
      contentHref: "/learn/ui-ux-design/complete-ui-ux-case-study",
      title: "Complete UI/UX Case Study",
      description:
        "Run the full process on one product and turn the work into a professional portfolio case study.",
      topics: [
        "Discovery through Testing and iteration",
        "Research, persona, journey, IA, flows, wireframes, UI, prototype",
        "Usability findings, improvements, and the final solution",
        "How to present a UI/UX case study in a portfolio",
      ],
      miniProject: "Complete and present a full UI/UX case study.",
    },
  ],
};

export default uiUxDesignPath;

import { PublishedModule } from "../../types";

export const uiUxDesignModule10: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "complete-ui-ux-case-study",
  moduleNumber: "10",
  title: "Complete UI/UX Case Study",
  estimatedTime: "90–120 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 10 | Case Study | NSL Digital Lab",
    description:
      "Bring Discovery through Testing together into a portfolio UI/UX case study: research, flows, UI, prototype, findings, and presentation.",
    keywords:
      "UI UX case study, UX portfolio, design process case study, usability findings, Figma case study beginner",
    canonical: "/learn/ui-ux-design/complete-ui-ux-case-study",
  },
  prevModule: {
    href: "/learn/ui-ux-design/prototyping-testing-accessibility",
    label: "Previous: Module 09",
  },
  intro: {
    headline: "Tell the full story, not only the pretty screens",
    body: [
      "This module is a guided build. You run Discovery → Define → Ideate → Design → Testing → Iteration on one product and turn it into a case study a hiring manager can follow.",
      "Keep the scope small: one primary persona, one main task, a handful of screens. A finished story beats an enormous unfinished vision.",
    ],
    youWillLearn: [
      "How to assemble every artefact from this path",
      "What to include in a professional case study",
      "How to show process, not only mockups",
      "How to present findings and improvements",
    ],
  },
  lessons: [
    {
      slug: "process-recap",
      title: "Bring the five stages together",
      minutes: "8 min",
      summary:
        "Your case study should follow the same spine as the course so readers can see your thinking.",
      blocks: [
        {
          type: "code",
          title: "The spine",
          code: `Discovery → Define → Ideate → Design → Testing → Iteration`,
        },
        {
          type: "ul",
          items: [
            "Discovery: problem space, goals, research, competitors.",
            "Define: persona, empathy, journey, problem statement.",
            "Ideate: IA, flows, chosen idea.",
            "Design: wireframes, UI, Figma, prototype.",
            "Testing: sessions, findings, accessibility notes.",
            "Iteration: what you changed and why.",
          ],
        },
        {
          type: "tip",
          text: "If a section has no evidence, write “assumption” or go do a tiny piece of research. Fake quotes hurt trust.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping",
          title: "Worked example: Online Wine Shopping",
          text: "Use this portfolio case study as a structure reference while you write your own. Do not copy the SAMPLE research as if it were yours.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "List which artefacts you already have from Modules 01–09.",
            "Star the three biggest gaps.",
          ],
        },
        {
          type: "check",
          question: "A case study should show:",
          options: [
            { id: "a", label: "The process and the screens, in a readable story", correct: true },
            { id: "b", label: "Only the final gradient with no problem", correct: false },
            { id: "c", label: "Every unused brainstorm sticky with no structure", correct: false },
          ],
          explain:
            "Readers need a path from problem to solution.",
        },
      ],
    },
    {
      slug: "overview-and-research",
      title: "Overview, problem, research, competitors",
      minutes: "9 min",
      summary:
        "Open with context. Then show how you learned, not that you guessed.",
      blocks: [
        {
          type: "ul",
          items: [
            "Project overview: what it is, who it is for, your role, timeframe.",
            "Business / user problem: both, in plain language.",
            "Research: methods, how many people, key quotes or patterns.",
            "Competitive analysis: 2–3 products, what you learned, what you will not copy.",
          ],
        },
        {
          type: "p",
          text: "Example overview: “I designed a v1 mobile flow for CampusBite so hostel students can order campus-stall pickup in a 20-minute break. Solo project, two weeks of part-time work.”",
        },
        {
          type: "tip",
          text: "One screenshot of a competitor with three captions is stronger than ten unexplained galleries.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s01",
          title: "Wine shopping: overview through insights",
          text: "Sections 01–07 show how to open a case study: challenge, goals, discovery, research, competitors, insights.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write a 4-sentence overview (what, who, role, constraint).",
            "Write three bullets from research or competitor notes.",
          ],
        },
        {
          type: "check",
          question: "The overview should tell the reader:",
          options: [
            { id: "a", label: "What you designed, for whom, and your role", correct: true },
            { id: "b", label: "Only the Figma plugin list", correct: false },
            { id: "c", label: "Your entire life story", correct: false },
          ],
          explain:
            "Busy readers decide in seconds whether to keep going.",
        },
      ],
    },
    {
      slug: "define-and-ideate-artefacts",
      title: "Persona, empathy, journey, IA, and flow",
      minutes: "8 min",
      summary:
        "Show Define and Ideate as tools that changed decisions — not as decoration.",
      blocks: [
        {
          type: "ul",
          items: [
            "Persona: one primary.",
            "Empathy map: the surprising quadrant (often Thinks or Feels).",
            "Journey: highlight pain points you will design for.",
            "Problem statement: the gap, not the UI.",
            "IA and user flow: the structure you will wireframe.",
          ],
        },
        {
          type: "p",
          text: "Caption each image with a decision: “Because wait time was the top pain, Home shows Open/Busy on every card.”",
        },
        {
          type: "tip",
          text: "Crop messy photos of sticky notes if needed, but keep them readable. Process photos are welcome when they teach.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s08",
          title: "Wine shopping: Define and Ideate",
          text: "Persona, empathy, journey, problem statement, HMWs, IA, and flow — each captioned as a decision, not decoration.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write one caption that links a journey pain to a later UI choice.",
            "Drop one artefact that does not change any decision.",
          ],
        },
        {
          type: "check",
          question: "Artefacts earn their place in a case study when they:",
          options: [
            { id: "a", label: "Explain a design decision", correct: true },
            { id: "b", label: "Fill space with unreadable photos", correct: false },
            { id: "c", label: "Replace the need for a problem statement", correct: false },
          ],
          explain:
            "Show work that shaped the product.",
        },
      ],
    },
    {
      slug: "design-prototype-test",
      title: "Wireframes, UI, prototype, and testing",
      minutes: "9 min",
      summary:
        "Show the jump from grey boxes to UI, then the prototype and what testers did.",
      blocks: [
        {
          type: "ul",
          items: [
            "Wireframes: 3–5 screens, maybe before/after one change.",
            "UI design: final key screens, components, harmony choice.",
            "Prototype: a link plus a short GIF or stepped screenshots.",
            "Usability testing: who, tasks, findings table.",
            "Improvements: annotated after screens.",
            "Final solution: the flow that remains.",
          ],
        },
        {
          type: "p",
          text: "If you cannot share a live prototype, use numbered screenshots with arrows. Honesty about constraints is professional.",
        },
        {
          type: "tip",
          text: "Put the most important screen — the one that solves the problem — high in this section, not buried after 20 similar cards.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s18",
          title: "Wine shopping: design through iteration",
          text: "Wireframes, UI, system, prototype, tests, heuristics, before/after, and the final showcase.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Order your visuals: wireframe → UI → finding → improved UI.",
            "Write the before/after in one sentence.",
          ],
        },
        {
          type: "check",
          question: "Testing in a case study should show:",
          options: [
            { id: "a", label: "What people did, what failed, and what you changed", correct: true },
            { id: "b", label: "Only five-star quotes you wrote yourself", correct: false },
            { id: "c", label: "No findings, only final art", correct: false },
          ],
          explain:
            "Iteration is the proof you used the process.",
        },
      ],
    },
    {
      slug: "portfolio-presentation",
      title: "Turn it into a portfolio case study",
      minutes: "9 min",
      summary:
        "Turn your finished UI/UX project into a readable case study that shows how you thought, decided, and improved — not a gallery of screenshots.",
      blocks: [
        {
          type: "p",
          text: "A hiring manager rarely has time to reverse-engineer your Figma file. A case study is the guided tour: what the product is, who struggled, what you learned, which options you chose, and why the final screens look the way they do. Screenshots support that story. They are not the story.",
        },
        {
          type: "tip",
          text: "For every image, write one caption that names a decision. “Home lists Open/Busy because wait time was the top pain” beats “final home screen.”",
        },
        {
          type: "p",
          text: "Write the page in process order so a stranger can follow Discovery → Define → Ideate → Design → Testing without you in the room. Use the sections below as your outline.",
        },
        {
          type: "ul",
          items: [
            "Project overview — what, who, role, time, platform.",
            "Problem / challenge — user pain and business constraint, before UI.",
            "Goals — 2–4 aims you can observe in testing.",
            "Discovery and research — methods, sample, what you asked.",
            "Key insights — only patterns that changed a decision.",
            "Persona and journey — one primary user and their pain points.",
            "Problem statement — the gap, not a screen name.",
            "Ideation — options you tried and why one won.",
            "User flow — the primary task as steps.",
            "Wireframes — 3–5 grey screens for layout and sequence.",
            "UI design — key screens tied back to goals.",
            "Prototype — clickable path, or numbered screenshots.",
            "Usability testing — who, tasks, stalls.",
            "Design iterations — one finding → before/after.",
            "Final solution — the flow that remains.",
            "Key learnings — insight + what you would do next.",
          ],
        },
        {
          type: "p",
          text: "You can publish this as a simple page, Behance, or a PDF. Structure matters more than the host. Keep tester names private; describe roles instead. If a section has no evidence, label it as an assumption or go collect a small amount of research.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping",
          title: "See a complete case study",
          text: "Explore how the complete Discovery → Define → Ideate → Design → Testing process can be applied to an online wine shopping experience.",
          ctaLabel: "View Wine Shopping Case Study →",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Paste the 16 headings above into a doc and fill one sentence under each from your project.",
            "Delete any heading you cannot caption with a decision — then decide whether to do the missing work or cut the section.",
            "Write two sentences of key learnings: one insight, one “what I would do next.”",
          ],
        },
        {
          type: "check",
          question: "A strong portfolio case study should mainly show:",
          options: [
            {
              id: "a",
              label: "Your thinking and decisions, supported by a few well-captioned screens",
              correct: true,
            },
            {
              id: "b",
              label: "As many uncaptioned mockups as possible",
              correct: false,
            },
            {
              id: "c",
              label: "Only the final UI, with no problem or research",
              correct: false,
            },
          ],
          explain:
            "Readers hire the process they can follow, not a screenshot dump.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Final project: complete UI/UX case study",
    goal: "Ship a case study that includes overview, problem, research, competitors, persona, empathy map, journey, problem statement, IA, user flow, wireframes, UI, prototype, testing, findings, improvements, final solution, and a presentation-ready narrative.",
    starterLabel: "Case study outline",
    steps: [
      "Gather artefacts from earlier modules (or complete the missing ones).",
      "Write the overview and problem in plain English.",
      "Place research and competitor notes with captions.",
      "Place Define and Ideate artefacts with decision captions.",
      "Place wireframes, UI, prototype, test findings, and iterations.",
      "Add “What I would do next” and a one-page presentation version (8–12 slides or equivalent sections).",
    ],
    starterCode: `Title:
One-line outcome:

1. Project overview (role, time, platform)
2. Business / user problem
3. Research
4. Competitive analysis
5. Persona
6. Empathy map
7. User journey
8. Problem statement
9. Information architecture
10. User flow
11. Wireframes
12. UI design
13. Prototype
14. Usability testing
15. Findings
16. Improvements
17. Final solution
18. What I would do next
19. Presentation (slides or sectioned page)

Tools: Figma, notes, ...
Link:`,
    doneWhen: [
      "A stranger can follow Discovery through Testing without you narrating live.",
      "Every required artefact appears, even if some are simple.",
      "Findings led to at least one visible improvement.",
      "You have a presentation-ready version, not only a messy Figma page of frames.",
    ],
  },
};

export default uiUxDesignModule10;

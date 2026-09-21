import { PublishedModule } from "../../types";

export const uiUxDesignModule02: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "discovery-understand-the-problem",
  moduleNumber: "02",
  title: "Discovery: Understand the Problem",
  estimatedTime: "55–75 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 02 | Discovery | NSL Digital Lab",
    description:
      "Beginner Discovery module: requirements, business goals, user needs, stakeholder interviews, research methods, and a simple research plan.",
    keywords:
      "UX discovery, requirement gathering, stakeholder interview, user research, qualitative vs quantitative, competitive analysis",
    canonical: "/learn/ui-ux-design/discovery-understand-the-problem",
  },
  prevModule: {
    href: "/learn/ui-ux-design/introduction-to-ui-ux-design",
    label: "Previous: Module 01",
  },
  nextModule: {
    href: "/learn/ui-ux-design/define-understand-the-user",
    label: "Next: Module 03",
  },
  intro: {
    headline: "Do not design until you know the problem",
    body: [
      "Discovery is the first stage of the process. Your job is to understand what the business wants, what users need, and what already exists in the market.",
      "You will gather requirements, talk to stakeholders, plan research, and look at competitors. You are collecting facts and questions — not picking button colors yet.",
    ],
    youWillLearn: [
      "How to gather requirements",
      "How business goals and user needs can differ",
      "What a stakeholder interview is",
      "How to set research objectives",
      "Qualitative vs quantitative research",
      "Interviews, surveys, field studies, and competitor analysis",
    ],
  },
  lessons: [
    {
      slug: "requirement-gathering",
      title: "Requirement gathering",
      minutes: "8 min",
      summary:
        "Requirements are the must-haves and limits of the project, written in plain language.",
      blocks: [
        {
          type: "term",
          term: "Requirement",
          meaning:
            "Something the product must do, include, or respect — for example “students can reorder in two taps” or “the first version is mobile only.”",
        },
        {
          type: "p",
          text: "Requirement gathering means you ask questions and write the answers down so the team shares the same picture. Vague requests like “make it modern” are not useful until you turn them into observable needs.",
        },
        {
          type: "ul",
          items: [
            "Who is this for?",
            "What must a person be able to finish?",
            "What is out of scope for version 1?",
            "What platforms (phone, desktop)?",
            "What constraints (time, budget, brand rules)?",
          ],
        },
        {
          type: "p",
          text: "CampusBite example: “We need a food app” is too wide. A clearer requirement: “A student can browse nearby campus stalls, add items, and pay for pickup in under three minutes.”",
        },
        {
          type: "tip",
          text: "Write requirements as actions a person can complete, not as adjectives like “premium.”",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Convert this request into two requirements: “We need a better college food app.”",
            "Add one “not in version 1” item (example: live scooter tracking).",
          ],
        },
        {
          type: "check",
          question: "A useful requirement is usually:",
          options: [
            { id: "a", label: "A vague style word like “make it pop”", correct: false },
            {
              id: "b",
              label: "A clear statement of what people must be able to do, plus limits",
              correct: true,
            },
            { id: "c", label: "A finished color palette", correct: false },
          ],
          explain:
            "Requirements describe outcomes and constraints so design and development know what “done” means.",
        },
      ],
    },
    {
      slug: "business-goals-and-user-needs",
      title: "Business goals and user needs",
      minutes: "8 min",
      summary:
        "The business wants results. Users want to finish jobs. Discovery captures both without ignoring either.",
      blocks: [
        {
          type: "term",
          term: "Business goal",
          meaning:
            "What the organisation wants from the product, such as more orders, fewer support calls, or a stronger brand.",
        },
        {
          type: "term",
          term: "User need",
          meaning:
            "What a person must be able to do or feel to succeed, such as “order lunch before class without creating an account again.”",
        },
        {
          type: "p",
          text: "These can pull in different directions. CampusBite’s business may want students to see sponsored stalls first. Students may want the fastest pickup. Discovery writes both down so later stages can find a fair design.",
        },
        {
          type: "ul",
          items: [
            "Ask the business: How will we know this project worked?",
            "Ask users (or observe them): What are you trying to finish?",
            "Look for overlap: a faster checkout can help both revenue and student time.",
          ],
        },
        {
          type: "tip",
          text: "If you only serve the business, people leave. If you only serve a fantasy user, the product may never ship.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "For a food app, write one business goal and one user need.",
            "Write one sentence where they might conflict.",
          ],
        },
        {
          type: "check",
          question: "In Discovery, you should:",
          options: [
            { id: "a", label: "Record only business goals", correct: false },
            { id: "b", label: "Record only your personal preferences", correct: false },
            {
              id: "c",
              label: "Understand both business goals and user needs",
              correct: true,
            },
          ],
          explain:
            "A professional process holds both in view from the start.",
        },
      ],
    },
    {
      slug: "stakeholder-interviews",
      title: "Stakeholder interviews",
      minutes: "8 min",
      summary:
        "Stakeholders are people with a stake in the product. Interviews help you hear goals, fears, and constraints.",
      blocks: [
        {
          type: "term",
          term: "Stakeholder",
          meaning:
            "Someone affected by the product’s success: a founder, a campus stall owner, a support agent, a marketing lead.",
        },
        {
          type: "p",
          text: "A stakeholder interview is a structured conversation. You prepare questions, listen more than you talk, and write notes. You are not selling your design idea yet.",
        },
        {
          type: "ul",
          items: [
            "What problem are we solving, in your words?",
            "Who is the most important user for version 1?",
            "What would make this project a failure?",
            "What must we not change (brand, payments, legal)?",
          ],
        },
        {
          type: "tip",
          text: "Repeat back what you heard: “So pickup speed matters more than extra cuisines in v1?” This catches misunderstandings early.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write five questions you would ask a CampusBite founder.",
            "Mark which question uncovers a constraint (time, money, or rules).",
          ],
        },
        {
          type: "check",
          question: "The main job of a stakeholder interview is to:",
          options: [
            { id: "a", label: "Show your finished UI first", correct: false },
            {
              id: "b",
              label: "Learn goals, constraints, and what success means",
              correct: true,
            },
            { id: "c", label: "Argue until they accept your colors", correct: false },
          ],
          explain:
            "Interviews gather context. Visual design comes after you understand the problem.",
        },
      ],
    },
    {
      slug: "user-research-and-objectives",
      title: "User research and research objectives",
      minutes: "8 min",
      summary:
        "User research is how you learn from real people. A research objective is the question you need answered.",
      blocks: [
        {
          type: "term",
          term: "User research",
          meaning:
            "Activities that help you learn about people’s behavior, needs, and struggles — interviews, surveys, watching them in real settings, and more.",
        },
        {
          type: "term",
          term: "Research objective",
          meaning:
            "A clear question the research must answer, such as “How do students currently decide where to eat between classes?”",
        },
        {
          type: "p",
          text: "Without an objective, you collect random opinions. With an objective, every method has a job. Example: if you need to know why carts are abandoned, watching checkout may help more than a general “do you like food?” survey.",
        },
        {
          type: "ul",
          items: [
            "Start with: What do we not know yet?",
            "Write 1–3 objectives, not 20.",
            "Pick methods that can answer those objectives.",
          ],
        },
        {
          type: "tip",
          text: "A good objective is specific. “Learn about students” is too wide. “Learn how students order lunch on a 20-minute break” can be researched.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write two research objectives for CampusBite.",
            "Rewrite a vague one (“learn about users”) into a specific one.",
          ],
        },
        {
          type: "check",
          question: "A research objective should be:",
          options: [
            { id: "a", label: "A specific question you need answered", correct: true },
            { id: "b", label: "A finished Figma file name", correct: false },
            { id: "c", label: "A list of 50 random survey questions", correct: false },
          ],
          explain:
            "Objectives focus the work so methods and questions stay useful.",
        },
      ],
    },
    {
      slug: "qualitative-vs-quantitative",
      title: "Qualitative vs quantitative research",
      minutes: "8 min",
      summary:
        "Qualitative research explains why. Quantitative research shows how many or how often.",
      blocks: [
        {
          type: "term",
          term: "Qualitative research",
          meaning:
            "Research that collects stories, reasons, and observed behavior — often from a smaller number of people (interviews, field studies).",
        },
        {
          type: "term",
          term: "Quantitative research",
          meaning:
            "Research that collects numbers at a larger scale — counts, ratings, percentages (surveys, analytics).",
        },
        {
          type: "p",
          text: "If 40% of students drop off at payment, that is quantitative. If they say “I don’t trust UPI on campus Wi‑Fi,” that is qualitative. You usually need both kinds over a project’s life.",
        },
        {
          type: "ul",
          items: [
            "Use qualitative when you need to understand why and how.",
            "Use quantitative when you need to measure size or compare options.",
            "Do not treat one angry quote as if it were 10,000 people — and do not ignore a painful story just because N is small.",
          ],
        },
        {
          type: "tip",
          text: "Beginners often run a 40-question survey too early. Talk to a few people first so you know what to measure.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Label each as qualitative or quantitative: a 5-person interview; a 200-person rating survey.",
            "Write one number you might want later for CampusBite.",
          ],
        },
        {
          type: "check",
          question: "Interviews that collect stories are mainly:",
          options: [
            { id: "a", label: "Qualitative", correct: true },
            { id: "b", label: "Quantitative", correct: false },
            { id: "c", label: "Neither; they are only branding", correct: false },
          ],
          explain:
            "Stories and reasons are qualitative. Counts and percentages are quantitative.",
        },
      ],
    },
    {
      slug: "research-methods",
      title: "Research methods you will actually use",
      minutes: "10 min",
      summary:
        "Interviews, surveys, field studies, and competitor analysis each answer different questions.",
      blocks: [
        {
          type: "term",
          term: "User interview",
          meaning:
            "A one-to-one conversation where you ask about past behavior and goals. Prefer “Tell me about the last time you…” over “Would you use this?”",
        },
        {
          type: "term",
          term: "Survey",
          meaning:
            "A written set of questions sent to many people. Best for short, clear questions after you know what to ask.",
        },
        {
          type: "term",
          term: "Field study",
          meaning:
            "Watching people in the real context — a campus canteen queue, not only a Zoom call. You see interruptions, noise, and workarounds.",
        },
        {
          type: "term",
          term: "Competitive analysis (competitor analysis)",
          meaning:
            "A structured look at other products that solve a similar job. You note what they do well, where they confuse people, and what is missing.",
        },
        {
          type: "p",
          text: "For CampusBite you might interview six students, observe one lunch rush, send a short survey about pickup vs delivery, and compare two popular food apps’ home screens.",
        },
        {
          type: "ul",
          items: [
            "Do not copy a competitor blindly. Copying their UI can copy their problems.",
            "Write what you will compare: home, search, cart, pay, order status.",
            "Capture screenshots and one sentence per screen: “easy / confusing because…”",
          ],
        },
        {
          type: "tip",
          text: "Ask about the last real order, not a hypothetical future. Memory of real events is more useful than guesses.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s05",
          title: "Wine shopping: research and competitors",
          text: "Compare this lesson with SAMPLE interviews, survey notes, and a competitor table in the Oak & Cork case study.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write one interview question, one survey question, and one thing you would watch in a field study for CampusBite.",
            "List two competitor apps and three screens you would compare.",
          ],
        },
        {
          type: "check",
          question: "Competitor analysis is mainly for:",
          options: [
            { id: "a", label: "Copying every screen exactly", correct: false },
            {
              id: "b",
              label: "Learning patterns, gaps, and pitfalls in similar products",
              correct: true,
            },
            { id: "c", label: "Skipping all user research", correct: false },
          ],
          explain:
            "You study the market to learn, not to steal a whole interface without understanding users.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: a simple research plan",
    goal: "Write a one-page research plan for a product (CampusBite or your own idea) with objectives, methods, people, and questions.",
    starterLabel: "Research plan template",
    steps: [
      "Name the product and the version-1 user (example: undergraduate students on campus).",
      "Write 2–3 research objectives as questions.",
      "Choose at least two methods (interview, survey, field study, competitor analysis) and say why each fits an objective.",
      "List who you will talk to or observe, and how many (keep it small: 5 interviews is enough for this exercise).",
      "Write 5 interview questions that ask about real past behavior.",
    ],
    starterCode: `Product:
Primary user for v1:
Business goal (1 line):
User need (1 line):

Research objectives:
1.
2.
3.

Methods (and which objective each supports):
- Interviews:
- Survey:
- Field study:
- Competitor analysis:

People / sample:
Questions (last-time behavior):
1.
2.
3.
4.
5.

What I will not research yet (out of scope):`,
    doneWhen: [
      "Objectives are specific questions, not “learn about users.”",
      "At least two methods are mapped to those objectives.",
      "Interview questions ask about real past behavior, not “Would you love this app?”",
    ],
  },
};

export default uiUxDesignModule02;

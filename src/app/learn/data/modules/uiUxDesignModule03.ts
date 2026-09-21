import { PublishedModule } from "../../types";

export const uiUxDesignModule03: PublishedModule = {
  pathSlug: "ui-ux-design",
  pathTitle: "UI/UX Design Foundations",
  moduleSlug: "define-understand-the-user",
  moduleNumber: "03",
  title: "Define: Understand the User",
  estimatedTime: "55–75 minutes",
  syllabusHref: "/learn/ui-ux-design",
  seo: {
    title:
      "UI/UX Design Foundations Module 03 | Define | NSL Digital Lab",
    description:
      "Beginner Define module: research patterns, personas, empathy maps, journey maps, goals, pain points, and a clear problem statement.",
    keywords:
      "UX define stage, user persona, empathy map, user journey map, pain points, problem statement",
    canonical: "/learn/ui-ux-design/define-understand-the-user",
  },
  prevModule: {
    href: "/learn/ui-ux-design/discovery-understand-the-problem",
    label: "Previous: Module 02",
  },
  nextModule: {
    href: "/learn/ui-ux-design/ideation-generate-solutions",
    label: "Next: Module 04",
  },
  intro: {
    headline: "Turn notes into a clear picture of the user",
    body: [
      "Define is the second stage. You organise Discovery notes, find patterns, and describe the user so the team can agree on the real problem.",
      "You will build a persona, an empathy map, and a journey map. These are thinking tools, not artwork contests.",
    ],
    youWillLearn: [
      "How to organise research findings",
      "How to spot patterns",
      "How to write a simple persona",
      "How to fill an empathy map",
      "How to map a user journey",
      "How to state the actual problem",
    ],
  },
  lessons: [
    {
      slug: "organizing-findings",
      title: "Organizing research findings",
      minutes: "7 min",
      summary:
        "Raw notes are hard to use. You group quotes and observations so themes can appear.",
      blocks: [
        {
          type: "p",
          text: "After interviews you might have pages of messy notes. Organising means you copy important quotes and facts onto cards (sticky notes or a simple table) and sort them.",
        },
        {
          type: "ul",
          items: [
            "One idea per note (example: “skips login when in a hurry”).",
            "Keep the person’s words when you can.",
            "Separate what people said from what you guessed.",
          ],
        },
        {
          type: "term",
          term: "Insight",
          meaning:
            "A useful understanding you did not have before, backed by more than one note — not just a single complaint.",
        },
        {
          type: "tip",
          text: "If a note is only your opinion, label it “assumption” until you have evidence.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Take three sentences from Module 01’s app review or invent three student quotes about lunch.",
            "Rewrite each as a one-line note.",
          ],
        },
        {
          type: "check",
          question: "When organising research, you should:",
          options: [
            { id: "a", label: "Mix guesses and quotes with no labels", correct: false },
            {
              id: "b",
              label: "Group evidence and keep assumptions separate",
              correct: true,
            },
            { id: "c", label: "Delete all quotes and keep only colors", correct: false },
          ],
          explain:
            "Clear notes let you find real patterns instead of decorating your own guesses.",
        },
      ],
    },
    {
      slug: "identifying-patterns",
      title: "Identifying patterns",
      minutes: "8 min",
      summary:
        "A pattern is something you hear or see more than once. Patterns become the backbone of personas and problems.",
      blocks: [
        {
          type: "p",
          text: "If five students mention “I only have 15 minutes between classes,” that is a pattern. If one person wants a dessert tasting menu, that may be an outlier — interesting, but not the v1 focus.",
        },
        {
          type: "ul",
          items: [
            "Cluster similar notes (time pressure, payment trust, finding stalls).",
            "Name each cluster in plain language.",
            "Count roughly how many people touched each cluster (even 3 of 5 is useful).",
          ],
        },
        {
          type: "p",
          text: "CampusBite clusters might be: “too little time,” “don’t know stall wait times,” “hate creating accounts,” “need cheap combos.”",
        },
        {
          type: "tip",
          text: "Patterns are not truth forever. They are the best picture you have for this round of Define.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "List six made-up notes about campus lunch.",
            "Group them into two named patterns.",
          ],
        },
        {
          type: "check",
          question: "A pattern is most useful when it is:",
          options: [
            { id: "a", label: "A one-off comment you found exciting", correct: false },
            {
              id: "b",
              label: "A repeated behavior or need across people",
              correct: true,
            },
            { id: "c", label: "A competitor’s hex color code", correct: false },
          ],
          explain:
            "Repeated evidence is what you design for in version 1.",
        },
      ],
    },
    {
      slug: "user-personas",
      title: "User personas",
      minutes: "9 min",
      summary:
        "A persona is a realistic portrait of a type of user, based on research patterns — not a celebrity character.",
      blocks: [
        {
          type: "term",
          term: "User persona",
          meaning:
            "A one-page description of a representative user: name, context, goals, frustrations, and a quote. It helps the team remember who they are designing for.",
        },
        {
          type: "p",
          text: "A persona is not a target market slogan. “Gen Z loves trends” is too vague. “Aarav, 20, shares a hostel, has 20 minutes for lunch, pays with UPI, skips apps that force signup” is usable.",
        },
        {
          type: "ul",
          items: [
            "Give a name and a photo (optional) so the team can talk about someone specific.",
            "Include goals (what they want to finish).",
            "Include pain points (what gets in the way).",
            "Include context (device, time, location).",
            "Keep one primary persona for a beginner project.",
          ],
        },
        {
          type: "tip",
          text: "If a detail does not change a design decision, you can leave it out. Favorite movie is usually noise.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s09",
          title: "Wine shopping: Meera persona",
          text: "See a one-page persona used to drive occasion-first shopping, labeled as SAMPLE research.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write a 6-line persona for a campus food app.",
            "Include one goal, one pain, and one context fact (device or time).",
          ],
        },
        {
          type: "check",
          question: "A useful persona is based on:",
          options: [
            { id: "a", label: "Research patterns about real people", correct: true },
            { id: "b", label: "Only the designer’s autobiography", correct: false },
            { id: "c", label: "Random stock-photo hobbies", correct: false },
          ],
          explain:
            "Personas summarise evidence so the team can decide. They are not fiction novels.",
        },
      ],
    },
    {
      slug: "empathy-maps",
      title: "Empathy maps",
      minutes: "8 min",
      summary:
        "An empathy map captures what a user says, thinks, does, and feels so you look beyond the obvious request.",
      blocks: [
        {
          type: "term",
          term: "Empathy map",
          meaning:
            "A four-part canvas: Says, Thinks, Does, Feels. You fill it with evidence so you can see the person, not only the feature list.",
        },
        {
          type: "ul",
          items: [
            "Says: quotes (“I’ll just walk to the stall”).",
            "Thinks: inner worries (“If the queue is long I’ll miss class”).",
            "Does: actions (opens three food apps, then gives up).",
            "Feels: emotions (rushed, unsure, hungry, annoyed).",
          ],
        },
        {
          type: "p",
          text: "Someone may say “I want more restaurants” while they actually feel anxious about time. The empathy map helps you notice that gap.",
        },
        {
          type: "tip",
          text: "If you cannot fill a quadrant, you need another interview or observation — do not invent feelings.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s10",
          title: "Wine shopping: empathy map",
          text: "Says / Thinks / Does / Feels for an occasional wine buyer — useful as a format, not as real data.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Draw four boxes: Says, Thinks, Does, Feels.",
            "Add at least one line in each for Aarav ordering lunch.",
          ],
        },
        {
          type: "check",
          question: "An empathy map helps you:",
          options: [
            { id: "a", label: "See what people say, think, do, and feel", correct: true },
            { id: "b", label: "Pick a complementary color pair", correct: false },
            { id: "c", label: "Write React components", correct: false },
          ],
          explain:
            "It is a Define tool for understanding the person before you ideate solutions.",
        },
      ],
    },
    {
      slug: "user-journey-maps",
      title: "User journey maps",
      minutes: "9 min",
      summary:
        "A journey map shows steps over time: what the person does, thinks, and feels from start to finish.",
      blocks: [
        {
          type: "term",
          term: "User journey map",
          meaning:
            "A timeline of one task (for example “order lunch for pickup”). Each step lists actions, thoughts, emotions, and pain points.",
        },
        {
          type: "p",
          text: "A simple CampusBite journey: notices hunger → opens app → searches stall → checks wait time → adds items → pays → walks to pickup → waits → eats. Mark the painful steps in a different color.",
        },
        {
          type: "ul",
          items: [
            "Pick one persona and one job (do not map their whole life).",
            "List 5–8 steps.",
            "Note emotion: calm, confused, stressed.",
            "Star the steps you might improve in Design.",
          ],
        },
        {
          type: "tip",
          text: "Journeys can include steps outside the app (walking to the stall). Those steps still affect UX.",
        },
        {
          type: "related",
          href: "/case-studies/online-wine-shopping#s11",
          title: "Wine shopping: user journey",
          text: "Trigger → browse → decide → pay → receive, with emotion labels and a marked pain at checkout.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write 6 journey steps for “order a thali before 1pm class.”",
            "Circle the two most painful steps.",
          ],
        },
        {
          type: "check",
          question: "A journey map is mainly a:",
          options: [
            { id: "a", label: "Timeline of one task with actions and feelings", correct: true },
            { id: "b", label: "List of CSS classes", correct: false },
            { id: "c", label: "Company org chart", correct: false },
          ],
          explain:
            "It shows the experience over time so you can find where the real problem lives.",
        },
      ],
    },
    {
      slug: "goals-pains-problem",
      title: "Goals, pain points, and the actual problem",
      minutes: "8 min",
      summary:
        "You define the problem as a gap between what the user needs and what exists today.",
      blocks: [
        {
          type: "term",
          term: "Pain point",
          meaning:
            "A specific struggle in the journey — slow search, hidden prices, surprise fees, no wait-time information.",
        },
        {
          type: "term",
          term: "Problem statement",
          meaning:
            "A short sentence: who the user is, what they need, and what stands in the way. It is not a solution (“we will add AI”).",
        },
        {
          type: "code",
          title: "A simple problem statement pattern",
          code: `Aarav (hostel student) needs to order affordable lunch
during a 20-minute break, but current apps hide wait times
and force extra account steps, so he often gives up and skips a meal.`,
        },
        {
          type: "p",
          text: "Notice there is no “so we will build a dark-mode dashboard.” Solutions belong in Ideate. Define stops at the problem.",
        },
        {
          type: "tip",
          text: "If your problem statement already names a button, you jumped ahead. Rewrite it around the user’s need.",
        },
        {
          type: "exercise",
          title: "Try it yourself",
          steps: [
            "Write one goal, two pain points, and one problem statement for your chosen product.",
            "Check that the statement does not name a specific UI widget.",
          ],
        },
        {
          type: "check",
          question: "A problem statement should:",
          options: [
            { id: "a", label: "Name the user, the need, and the obstacle", correct: true },
            { id: "b", label: "List every color you plan to use", correct: false },
            { id: "c", label: "Only repeat the founder’s slogan", correct: false },
          ],
          explain:
            "Define the gap. Ideate will generate ways to close it.",
        },
      ],
    },
  ],
  miniProject: {
    title: "Mini project: persona, empathy map, journey map",
    goal: "Create one primary persona, a filled empathy map, and a journey map for a single important task. End with a problem statement.",
    starterLabel: "Define kit template",
    steps: [
      "Use CampusBite or the product from Module 02.",
      "Write the persona (name, context, goals, pains, quote).",
      "Fill Says / Thinks / Does / Feels with at least two lines each.",
      "Map 6–8 journey steps and mark emotions.",
      "Write a problem statement that does not name a solution.",
    ],
    starterCode: `PERSONA
Name / age / context:
Goals:
Pain points:
Quote:

EMPATHY MAP
Says:
Thinks:
Does:
Feels:

JOURNEY (task: ____________________)
Step | Action | Feeling | Pain?
1.
2.
3.
4.
5.
6.

PROBLEM STATEMENT
[User] needs [need] but [obstacle], so [consequence].`,
    doneWhen: [
      "The persona could guide a design choice (not only a list of hobbies).",
      "The empathy map has all four quadrants.",
      "The journey has a clear start and end, with at least two painful steps marked.",
      "The problem statement describes a gap, not a feature.",
    ],
  },
};

export default uiUxDesignModule03;

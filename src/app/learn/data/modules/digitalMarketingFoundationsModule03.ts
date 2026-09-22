import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule03: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "digital-marketing-strategy",
  moduleNumber: "03",
  title: "Digital Marketing Strategy",
  estimatedTime: "70–90 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 03 | Strategy | NSL Digital Lab",
    description:
      "Beginner Module 03 (7 lessons): business vs marketing goals, SMART goals, positioning, channel choice, content strategy, campaign planning, budget, KPIs, and funnel planning.",
    keywords:
      "digital marketing strategy, SMART goals, marketing positioning, marketing KPIs, campaign planning, marketing budget, content strategy beginner",
    canonical: `${BASE}/digital-marketing-strategy`,
  },
  prevModule: {
    href: `${BASE}/audience-and-market-research`,
    label: "Previous: Module 02",
  },
  nextModule: {
    href: `${BASE}/content-marketing-and-social-media`,
    label: "Next: Module 04",
  },
  intro: {
    headline: "Strategy is choosing what you will not do this month",
    body: [
      "Research without a plan becomes a pile of notes. **Strategy** turns notes into goals, **positioning**, channels, budget, and numbers you will watch.",
      `You know Priya wants a fast weekday lunch. Strategy answers: What result in **30 days**? Why pick BrightBrew over the chain next door? Which **channels**? How much **money and time**? Which **KPIs** prove it worked?`,
    ],
    youWillLearn: [
      "**Business goals** vs **marketing goals** — revenue vs countable customer actions",
      "**SMART** objectives you can test in 30 days",
      "**Positioning** — why someone should pick you",
      "**Channel selection**, **content strategy**, and **campaign** planning",
      "**Budget** basics and **KPIs** tied to the objective",
      "**Funnel planning** across awareness → consideration → conversion → retention",
    ],
  },
  lessons: [
    {
      slug: "business-vs-marketing-goals",
      title: "Business Goals vs Marketing Goals",
      minutes: "8 min",
      summary:
        "Business goals are the company result. Marketing goals are customer actions that help you get there — if operations can deliver.",
      blocks: [
        {
          type: "p",
          text: "BrightBrew’s owner says revenue is flat on weekdays. That is a **business problem**. Marketing cannot wave a wand at “₹1.2 lakh more” — but it can drive **20 extra lunch orders per day** if the kitchen and staff can handle them.",
        },
        {
          type: "ul",
          items: [
            "**Business goal:** company outcome (example: **₹1.2 lakh** extra monthly revenue from weekday lunches to hire one more barista).",
            "**Marketing goal:** countable customer actions (example: **20** extra weekday lunch orders/day from office workers within 1 km, avg **₹220**).",
            "**Why separate them:** “go viral” is not a plan; orders and visits are.",
          ],
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Translate the business number into actions, check **capacity** (can you serve 20 more?), then pick channels and pages that drive that action.",
        },
        {
          type: "p",
          text: "**Practical example:** If marketing brings 40 orders but wait time hits 25 minutes, reviews hurt **retention** — strategy includes ops, not only ads.",
        },
        ...lessonClose({
          mistake:
            "Setting marketing goals like “more branding” with no number the owner can tie to sales or orders.",
          takeaway:
            "Write a **business goal** and a **marketing goal** — and check the marketing number could realistically move the business number.",
          tip: "If the owner says “we need awareness,” ask which business number is in trouble first.",
          exerciseSteps: [
            "Write one business goal for a shop you know.",
            "Translate it into a marketing goal with an action you can count.",
          ],
          check: {
            type: "check",
            question: "A marketing goal should:",
            options: [
              {
                id: "a",
                label: "Name a customer action that supports a business result",
                correct: true,
              },
              { id: "b", label: "Only say “go viral”", correct: false },
              {
                id: "c",
                label: "Ignore whether the business can deliver",
                correct: false,
              },
            ],
            explain:
              "Marketing goals are countable actions tied to a real business need.",
          },
        }),
      ],
    },
    {
      slug: "smart-goals-and-objectives",
      title: "SMART Goals and Marketing Objectives",
      minutes: "10 min",
      summary:
        "SMART goals make promises testable. Marketing objectives name the job of each campaign — awareness vs conversion.",
      blocks: [
        {
          type: "p",
          text: "“Get more famous” sounds exciting and means nothing on payday. Priya does not care if BrightBrew is famous — she cares if lunch is fast and **₹199**. **SMART** goals force clarity.",
        },
        {
          type: "term",
          term: "SMART Goals",
          meaning:
            "**Specific, Measurable, Achievable, Relevant, Time-bound.** **What:** a goal with a number, audience, and deadline. **Why:** vague goals hide failure until money is gone. **How:** example — “**80** weekday lunch orders from office workers within **2 km** in **30 days**, via Search + Instagram, landing page X.”",
        },
        {
          type: "term",
          term: "Marketing Objectives",
          meaning:
            "**What:** the campaign’s one-line job. **Why:** mixing awareness and conversion in one sentence confuses budget and KPIs. **How:** **Awareness objective:** “**10,000** nearby workers see BrightBrew lunch Reels in 4 weeks.” **Conversion objective:** “**80** first-time lunch orders.” Say which you are running.",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** SMART goal sets the scoreboard. Objectives split work — week 1–2 consideration content, week 3–4 conversion push with offer.",
        },
        {
          type: "p",
          text: "**Practical example:** Not SMART: “Grow social.” SMART: “**400** landing-page visits and **80** orders in **30 days**, average order **₹220**, from paid Search + organic Instagram.”",
        },
        ...lessonClose({
          mistake:
            "One SMART sentence that tries to cover followers, orders, and email signups — with no priority.",
          takeaway:
            "**SMART** goals need a number, audience, and date; **objectives** name the campaign’s primary job.",
          tip: "Circle the number and the deadline in every goal you write. If you cannot, rewrite.",
          exerciseSteps: [
            "Turn “we need more customers” into one SMART sentence.",
            "Circle the number and the date.",
          ],
          check: {
            type: "check",
            question: "Which is closest to SMART?",
            options: [
              { id: "a", label: "Be better on social", correct: false },
              {
                id: "b",
                label: "Get 80 weekday lunch orders from nearby office workers in 30 days",
                correct: true,
              },
              {
                id: "c",
                label: "Post whenever we feel inspired",
                correct: false,
              },
            ],
            explain:
              "A number, an audience, and a time window let you plan channels and budget.",
          },
        }),
      ],
    },
    {
      slug: "positioning",
      title: "Positioning: why pick you",
      minutes: "9 min",
      summary:
        "Positioning is the clear reason a customer chooses you over the next option — not a longer ad.",
      blocks: [
        {
          type: "p",
          text: "Priya has five lunch options within a **10-minute** walk. BrightBrew is not competing with “the idea of food.” It competes with a chain thali, a delivery app, and yesterday’s tiffin. **Positioning** answers: **Why you?**",
        },
        {
          type: "term",
          term: "Positioning",
          meaning:
            "**What:** the place you want to own in the customer’s mind (example: “fastest healthy weekday lunch under ₹250 near Cyber Park”). **Why:** without it, ads sound like every other café. **How:** audience + alternative + honest difference + proof.",
        },
        {
          type: "ul",
          items: [
            "**Audience:** office workers on a clock (Priya).",
            "**Alternatives:** queue-heavy thali shop, pretty-but-slow bistro, Swiggy with fees.",
            "**Difference:** order-ahead, **ready in 8 minutes**, prices on the page.",
            "**Proof:** timer clips, review quotes about speed, photo of the pickup shelf.",
          ],
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Positioning becomes the **headline**, ad angle, and what you refuse to claim (do not say “cheapest” if you are not). It guides **channel** choice — Search for “lunch near me,” not generic coffee hashtags.",
        },
        {
          type: "p",
          text: "**Practical example:** Weak positioning: “Great coffee and vibes.” Strong for Priya: “**Office lunch in 8 minutes — ₹199 bowls**, order on WhatsApp.” Same kitchen, different choice in her mind.",
        },
        ...lessonClose({
          mistake:
            "Listing ten features with no target customer — so nobody remembers why you are different.",
          takeaway:
            "**Positioning** = who you are for, what you beat, and the one promise you can prove.",
          tip: "Finish this sentence: “For [audience], we are the [category] that [difference] because [proof].”",
          exerciseSteps: [
            "Write BrightBrew’s positioning in one sentence (or a shop you know).",
            "Name the main alternative Priya might pick instead.",
            "List one proof point (review, speed, price) that supports the claim.",
          ],
          check: {
            type: "check",
            question: "Good positioning mainly helps you:",
            options: [
              {
                id: "a",
                label: "Explain why a specific customer should pick you over alternatives",
                correct: true,
              },
              {
                id: "b",
                label: "Use every buzzword in one tagline",
                correct: false,
              },
              {
                id: "c",
                label: "Avoid naming competitors or alternatives",
                correct: false,
              },
            ],
            explain:
              "Customers always have another option. Positioning makes your difference memorable and believable.",
          },
        }),
      ],
    },
    {
      slug: "choosing-channels",
      title: "Choosing Marketing Channels",
      minutes: "9 min",
      summary:
        "Pick channels where your audience already is, that fit your objective and positioning, and that you can run well with your budget and time.",
      blocks: [
        {
          type: "p",
          text: "BrightBrew’s intern wants TikTok, YouTube, and a podcast. The owner has **6 hours a week** and **₹15,000** for ads. Strategy means saying **no** to most channels for now.",
        },
        {
          type: "ul",
          items: [
            "**What:** choosing **marketing channels** (Search, social, email, listings, WhatsApp).",
            "**Why:** wrong channel = right message, wrong room.",
            "**How:** match **audience** (Priya at noon → Search), **objective** (orders → conversion-ready channels), **positioning** (speed → short video + map), **resources** (two channels done weekly beat seven abandoned).",
          ],
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Score channels: (1) Is Priya here for this job? (2) Can this channel drive orders, not only likes? (3) Can we sustain it for 30 days?",
        },
        {
          type: "p",
          text: "**Practical example:** BrightBrew’s 30-day stack: **Google Business Profile** + one **Search** campaign for “lunch near [area]” + **Instagram** 4×/week linking to the lunch landing page. Email waits until they have 100 opt-ins.",
        },
        ...lessonClose({
          mistake:
            "Choosing channels because they are trendy, not because Priya uses them when she is hungry.",
          takeaway:
            "Pick **2–3 channels** with a clear reason each — audience, objective, and capacity.",
          tip: "Write one sentence per channel: “We use ___ because Priya ___ when she ___.”",
          exerciseSteps: [
            "For your SMART goal, pick 2 channels.",
            "Write one sentence why each fits the audience and the job.",
          ],
          check: {
            type: "check",
            question: "The best reason to pick a channel is:",
            options: [
              { id: "a", label: "A celebrity used it once", correct: false },
              {
                id: "b",
                label: "Your audience is there and it can serve this month’s objective",
                correct: true,
              },
              { id: "c", label: "It is the newest app", correct: false },
            ],
            explain:
              "Fit beats fashion. You can add channels after the first loop works.",
          },
        }),
      ],
    },
    {
      slug: "content-and-campaign-planning",
      title: "Content Strategy and Campaign Planning",
      minutes: "10 min",
      summary:
        "Content strategy is the ongoing story. A campaign is a timed push toward one objective with an offer and a measure of success.",
      blocks: [
        {
          type: "p",
          text: "BrightBrew cannot run “Office Lunch **₹199**” forever at full volume — but they can keep teaching “what’s in the millet bowl” all year. **Content strategy** is the rhythm; a **campaign** is the sprint.",
        },
        {
          type: "term",
          term: "Content Strategy",
          meaning:
            "**What:** themes you publish repeatedly so people learn to expect value — speed, ingredients, office life, how to order. **Why:** random posts do not build memory or trust. **How:** pick **3 content pillars** and rotate formats (photo, Reel, story).",
        },
        {
          type: "term",
          term: "Campaign Planning",
          meaning:
            "**What:** dated push with audience, offer, channels, landing page, budget, KPIs. **Why:** “we posted” is not a campaign. **How:** one-page brief before assets — dates, offer, CTA, success number.",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Pillars feed organic social year-round. Campaign overlays a clear offer (“**₹199** bowl + drink, **30 days**”) with paid support and a dedicated landing page.",
        },
        {
          type: "p",
          text: "**Practical example:** Campaign “Office Lunch 199” — audience: Priya within 2 km; channels: Search + Instagram; page: order form; KPI: **80 orders**; content pillars still run after the offer ends.",
        },
        ...lessonClose({
          mistake:
            "Launching ads with no offer, no end date, and no landing page — then calling it a campaign.",
          takeaway:
            "**Content strategy** = ongoing pillars; **campaign** = timed objective + offer + measure.",
          tip: "If offer, page, and date are missing, you are decorating — write a 6-line brief first.",
          exerciseSteps: [
            "Write a 6-line campaign brief: audience, offer, date range, channels, page, success number.",
          ],
          check: {
            type: "check",
            question: "A campaign is different from everyday content because it:",
            options: [
              {
                id: "a",
                label: "Has a timed objective, offer, and success measure",
                correct: true,
              },
              { id: "b", label: "Must use every social app", correct: false },
              { id: "c", label: "Never uses a landing page", correct: false },
            ],
            explain:
              "Campaigns are sprints with a job. Content strategy is the ongoing rhythm.",
          },
        }),
      ],
    },
    {
      slug: "budget-and-kpis",
      title: "Budget Basics and KPIs",
      minutes: "10 min",
      summary:
        "Budget is money and time you can afford to spend learning. KPIs are the few numbers that tell you if the plan is working.",
      blocks: [
        {
          type: "p",
          text: "BrightBrew sets **₹15,000** for ads and **5 hours/week** for content and tweaks. That is a real **budget** — not “unlimited if it works.” KPIs tell them whether **₹15,000** bought **80 orders** or only clicks.",
        },
        {
          type: "term",
          term: "Budget Basics",
          meaning:
            "**What:** planned spend in **money** and **hours**. **Why:** prevents panic spending and burnout. **How:** split ads, tools, creative; cap learning loss; **₹0** ad spend with focused hours is still a budget.",
        },
        {
          type: "term",
          term: "KPIs",
          meaning:
            "**Key Performance Indicators** — **What:** 3–5 numbers tied to the objective. **Why:** vanity metrics hide failure. **How:** conversion campaign → orders, **cost per order**, landing-page **conversion rate** — not likes unless awareness is the job.",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Before launch: “We can afford **₹187** per order if we need **80** orders from **₹15,000**.” After week 2: if cost per order is **₹400**, fix page or targeting before adding money.",
        },
        {
          type: "p",
          text: "**Practical example:** Order profit **₹70**. Spending **₹187** to acquire one order may still make sense as **growth** — if the owner knows they are buying trials, not instant profit. Say that honestly.",
        },
        ...lessonClose({
          mistake:
            "Tracking 40 metrics — or only likes — when the SMART goal was **80 lunch orders**.",
          takeaway:
            "Set a **budget** (₹ + hours) and **3–5 KPIs** that match your objective and funnel stage.",
          tip: "Write KPIs on a sticky note. If a metric is not there, ignore it this month.",
          exerciseSteps: [
            "Write a 30-day money budget and an hours budget.",
            "Write 3 KPIs that match your SMART goal.",
          ],
          check: {
            type: "check",
            question: "KPIs should:",
            options: [
              {
                id: "a",
                label: "Match the campaign objective, not random vanity stats",
                correct: true,
              },
              {
                id: "b",
                label: "Always be “number of fonts used”",
                correct: false,
              },
              {
                id: "c",
                label: "Stay secret from the business owner",
                correct: false,
              },
            ],
            explain:
              "You measure the job you set. Likes can support awareness; they do not prove lunch orders.",
          },
        }),
      ],
    },
    {
      slug: "funnel-planning",
      title: "Marketing Funnel Planning",
      minutes: "8 min",
      summary:
        "Assign an activity, channel, and KPI to each funnel stage so awareness work is not the only work you do.",
      blocks: [
        {
          type: "p",
          text: "BrightBrew hits **12,000** Reel views but only **6** orders. Views lived in **awareness**; nothing strong lived in **consideration** (prices, reviews) or **conversion** (one-tap order). **Funnel planning** fills every box on purpose.",
        },
        {
          type: "ul",
          items: [
            "**Awareness:** Reels + local reach ads — KPI: impressions or reach.",
            "**Consideration:** lunch landing page, Google reviews, “ready in 8 min” — KPI: page views, saves.",
            "**Conversion:** **₹199** offer, WhatsApp order — KPI: **orders**, conversion rate.",
            "**Retention:** Thursday SMS/email to past buyers — KPI: **repeat orders**.",
          ],
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Print four boxes. Empty box = next task, not another logo redesign. Align with **positioning** — consideration content should prove your difference.",
        },
        {
          type: "p",
          text: "**Practical example:** 30-day plan — Week 1–2: consideration (page + reviews). Week 3–4: conversion push (**80 orders** KPI). Retention: message anyone who ordered twice.",
        },
        ...lessonClose({
          mistake:
            "Spending 100% of effort on awareness when the landing page or checkout is broken.",
          takeaway:
            "Plan **awareness, consideration, conversion, and retention** each with activity + KPI.",
          tip: "Star the weakest box — that is your leverage point before you raise ad budget.",
          exerciseSteps: [
            "Fill four boxes for your campaign: activity + KPI per stage.",
            "Star the empty or weak box.",
          ],
          check: {
            type: "check",
            question: "Funnel planning helps you:",
            options: [
              {
                id: "a",
                label: "See which stage has no activity or no measure",
                correct: true,
              },
              { id: "b", label: "Avoid ever converting anyone", correct: false },
              {
                id: "c",
                label: "Skip landing pages forever",
                correct: false,
              },
            ],
            explain:
              "A complete plan covers being seen, being compared, getting the action, and earning a repeat.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: One-page digital marketing strategy",
    goal: "Write a strategy for a small business (BrightBrew or another) that a busy owner could follow for 30 days.",
    starterLabel: "Strategy one-pager",
    steps: [
      "State business goal and marketing goal.",
      "Write one SMART objective.",
      "Name audience and primary persona.",
      "Write positioning in one sentence.",
      "Choose 2–3 channels with reasons.",
      "Outline content pillars vs the campaign sprint.",
      "Set budget (money + hours) and 3–5 KPIs.",
      "Fill funnel boxes.",
    ],
    starterCode: `Business:
Business goal:
Marketing goal (action + number):
SMART objective:
Audience / persona:
Positioning (one sentence):
Channels (and why):
Campaign offer + dates:
Landing page job:
Content pillars (ongoing):
Budget (₹ and hours):
KPIs:
Funnel plan:
Awareness:
Consideration:
Conversion:
Retention:
What we will not do this month:`,
    doneWhen: [
      "Goals are numbered and dated.",
      "Channels have reasons, not just names.",
      "KPIs match the objective and the funnel has no empty conversion box.",
    ],
  },
};

export default digitalMarketingFoundationsModule03;

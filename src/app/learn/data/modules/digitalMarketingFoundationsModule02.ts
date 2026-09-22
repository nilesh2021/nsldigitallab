import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule02: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "audience-and-market-research",
  moduleNumber: "02",
  title: "Audience & Market Research",
  estimatedTime: "60–80 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 02 | Audience Research | NSL Digital Lab",
    description:
      "Beginner Module 02: target audience, segments, buyer personas, needs and pain points, market and competitor research, and research methods.",
    keywords:
      "target audience, buyer persona, customer segments, competitor analysis, qualitative vs quantitative research, market research beginner",
    canonical: `${BASE}/audience-and-market-research`,
  },
  prevModule: {
    href: `${BASE}/digital-marketing-fundamentals`,
    label: "Previous: Module 01",
  },
  nextModule: {
    href: `${BASE}/digital-marketing-strategy`,
    label: "Next: Module 03",
  },
  intro: {
    headline: "If you skip research, you advertise to a crowd that is not listening",
    body: [
      "Module 01 gave you the map. Module 02 is **Research**: who is the customer, what do they need, and who else is already talking to them.",
      `${BRIGHTBREW}. Posting “best coffee in the city” is a slogan, not research. If Priya and nearby office workers want a **10-minute lunch under ₹250**, your message must match that job.`,
    ],
    youWillLearn: [
      "How to describe a **target audience** without being vague",
      "**Segments** and a **buyer persona** you can write ads for",
      "**Needs, goals, and pain points** in the customer’s words",
      "Simple **market** and **competitor** research this week",
      "**Journey-based research questions** that change decisions",
      "**Qualitative vs quantitative** research — stories vs numbers",
    ],
  },
  lessons: [
    {
      slug: "target-audience",
      title: "Target Audience",
      minutes: "8 min",
      summary:
        "Your target audience is the group you choose to serve first — not “everyone with a phone.”",
      blocks: [
        {
          type: "p",
          text: "BrightBrew’s owner says “we need more customers.” That is a wish, not a plan. At **12:20**, the shop is full of students on ₹99 coffee — but **weekday lunch** seats are empty. The **target audience** for the lunch campaign is a narrower group: people who can order on a Tuesday and come back on Thursday.",
        },
        {
          type: "term",
          term: "Target Audience",
          meaning:
            "**What:** the people your marketing is for right now. **Why:** a message for “everyone” feels generic; Priya ignores it. **How:** describe who they are, where they are, when they buy, and what job they need done.",
        },
        {
          type: "p",
          text: "**Weak audience:** “people who like food.” **Useful audience:** “office workers within **1 km** who need a filling weekday lunch in under **15 minutes** before a 1 p.m. call.”",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Audience drives photos (desk lunch, not sunset latte), hours (11:30–2:30 push), price (₹199 combo), and channels (Google at noon, not only 9 p.m. Reels).",
        },
        {
          type: "p",
          text: "**Practical example:** BrightBrew pauses ads aimed at “all coffee lovers” and targets “**Cyber Park lunch**” within 2 km. Same kitchen, sharper message.",
        },
        ...lessonClose({
          mistake:
            "Keeping the audience so broad that no one feels the offer was written for them.",
          takeaway:
            "A **target audience** is a deliberate choice — situation, place, and job — not “the whole city.”",
          tip: "Picture one person opening your post on their lunch break. If you cannot, narrow the audience.",
          exerciseSteps: [
            "Rewrite this into a target audience: “BrightBrew wants more customers.”",
            "Add place, time of week, and the job they need done.",
          ],
          check: {
            type: "check",
            question: "A useful target audience is:",
            options: [
              { id: "a", label: "All humans on earth", correct: false },
              {
                id: "b",
                label: "A specific group with a shared situation and job to get done",
                correct: true,
              },
              {
                id: "c",
                label: "Whoever comments first on Instagram",
                correct: false,
              },
            ],
            explain:
              "Specific situations (office lunch, nearby, rushed) let you write offers that feel personal.",
          },
        }),
      ],
    },
    {
      slug: "segments-and-personas",
      title: "Customer Segments and Buyer Personas",
      minutes: "11 min",
      summary:
        "Segments are groups that behave differently. A buyer persona is one realistic person who represents a segment when you write copy.",
      blocks: [
        {
          type: "p",
          text: "Same café, different people: a **student** wants cheap wifi; a **parent** wants a quiet corner; **Priya** wants speed and portion size. One caption cannot fit all. **Segments** split the market; a **persona** makes one segment feel real on the page.",
        },
        {
          type: "term",
          term: "Customer Segments",
          meaning:
            "**What:** slices of customers grouped by need or behavior (office lunch vs weekend brunch vs remote workers). **Why:** different segments need different offers and channels. **How:** group by job-to-be-done, not only age.",
        },
        {
          type: "term",
          term: "Buyer Persona",
          meaning:
            "**What:** a one-page sketch of a typical buyer — name, day, goal, fear, where they look. **Why:** teams argue less when they write for “Priya,” not “the market.” **How:** built from interviews and reviews, not fantasy hobbies.",
        },
        {
          type: "p",
          text: "**BrightBrew persona (Priya):** 28, analyst at a nearby tower. Goal: eat before her 1 p.m. call without feeling heavy. Pain: queues, oily food, unclear prices. She checks Google at **12:05** or Instagram stories — not a 20-page About page.",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** One **primary persona** per campaign. Ad copy answers Priya’s objection (“too slow”) with proof (“ready in 8 minutes”). Secondary segments get their own campaigns later.",
        },
        {
          type: "p",
          text: "**Practical example:** Segment = weekday office lunch. Persona = Priya. Offer = **₹199** bowl + calorie note + order-ahead link.",
        },
        ...lessonClose({
          mistake:
            "Adding fake persona details (favorite movie) that never change your headline or channel choice.",
          takeaway:
            "**Segments** split the market; a **persona** turns one segment into a person you can write for.",
          tip: "One primary persona per campaign. Extra personas can wait until the first loop works.",
          exerciseSteps: [
            "Write a 6-line persona for a shop you know.",
            "Include: name, situation, goal, pain, where they look, what would make them try you.",
          ],
          check: {
            type: "check",
            question: "A buyer persona should mainly help you:",
            options: [
              {
                id: "a",
                label: "Write messages and choose channels for a real type of customer",
                correct: true,
              },
              { id: "b", label: "Invent a celebrity backstory", correct: false },
              {
                id: "c",
                label: "Avoid talking to any real people",
                correct: false,
              },
            ],
            explain:
              "Personas summarise research so campaigns stay specific. They do not replace talking to customers.",
          },
        }),
      ],
    },
    {
      slug: "needs-goals-pain-points",
      title: "Needs, Goals, and Pain Points",
      minutes: "8 min",
      summary:
        "People buy progress. Needs, goals, and pains describe what “better” looks like — and what blocks them.",
      blocks: [
        {
          type: "p",
          text: "Priya does not buy “a millet bowl.” She buys **not being starving on a client call** and **not feeling sleepy at 2 p.m.** Your copy works when it speaks to that progress.",
        },
        {
          type: "ul",
          items: [
            "**Need:** what they require (food before the meeting).",
            "**Goal:** the outcome they want (full but light, back at desk by 12:45).",
            "**Pain point:** friction (20-minute queue, no prices online, last time the soup was cold).",
          ],
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Map pains from **reviews** and quick chats. Turn each pain into a promise or fix: “order ahead,” “prices on the card,” “ready in 8 minutes.”",
        },
        {
          type: "p",
          text: "**Practical example:** Weekend visitors might care about “artisan pour-over.” Priya’s pain is **time**. BrightBrew’s weekday ad leads with speed and **₹199**, not latte art.",
        },
        {
          type: "p",
          text: "**Test:** If your post mentions no need, goal, or pain, it is probably decoration.",
        },
        ...lessonClose({
          mistake:
            "Leading with what the business loves (“our beans”) instead of what the customer needs (“lunch in 10 minutes”).",
          takeaway:
            "**Needs, goals, and pains** tell you what to promise and what to fix in the experience.",
          tip: "Mine Google reviews for pains in the customer’s exact words — “waited 25 minutes,” “no UPI.”",
          exerciseSteps: [
            "Read 5 Google reviews of a local business.",
            "List 3 pains and 2 goals in the customer’s words.",
          ],
          check: {
            type: "check",
            question: "Pain points are useful because they:",
            options: [
              {
                id: "a",
                label: "Tell you what to fix or promise in your marketing",
                correct: true,
              },
              { id: "b", label: "Replace the need for a product", correct: false },
              { id: "c", label: "Are only for hospitals", correct: false },
            ],
            explain:
              "Pains show friction. Good marketing removes friction or makes the fix obvious.",
          },
        }),
      ],
    },
    {
      slug: "market-and-competitor-research",
      title: "Market Research and Competitor Research",
      minutes: "11 min",
      summary:
        "Market research learns demand and context. Competitor research learns who else wins the same customer — and where you can honestly differ.",
      blocks: [
        {
          type: "p",
          text: "Before BrightBrew spends **₹15,000** on ads, they walk the street at **12:30**, check delivery apps, and read reviews. That is research — not guessing that “everyone wants oat milk.”",
        },
        {
          type: "term",
          term: "Market Research",
          meaning:
            "**What:** learning about customers, demand, prices, and habits in your area. **Why:** empty seats might mean wrong offer, not “bad marketing.” **How:** observe foot traffic, read reviews, ask 5–10 people, note search trends.",
        },
        {
          type: "term",
          term: "Competitor Research",
          meaning:
            "**What:** studying businesses a customer might pick instead of you — including “I brought tiffin” and delivery apps. **Why:** you need a reason to pick **you**. **How:** list 3 alternatives, their offer, price, channel, review praise, and gaps you can truly fill.",
        },
        {
          type: "p",
          text: "**BrightBrew snapshot:** Competitor A — cheap thali, **20-minute** queue. Competitor B — pretty Instagram, no weekday combo. **Gap:** fast weekday bowls with **visible prices** and order-ahead.",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Research becomes the headline (“Lunch ready in 8 min — ₹199”) and the channel (Search when people are hungry). Copying a competitor’s caption is not strategy; noting **why customers praise them** is.",
        },
        {
          type: "p",
          text: "**Practical example:** Count lunch rush outside three shops for one hour. If 200 people walk by and queues are long, “fast lunch” is a credible gap — only if BrightBrew can actually deliver speed.",
        },
        ...lessonClose({
          mistake:
            "Claiming “fastest” or “best” without evidence — or ignoring competitors that are not cafés (apps, home food).",
          takeaway:
            "**Market research** sizes the opportunity; **competitor research** finds an honest reason to choose you.",
          tip: "Spend 45 minutes on three competitor sites and reviews before 45 days of random posting.",
          exerciseSteps: [
            "Pick 2 competitors of a local business.",
            "For each, write: offer, price clue, main channel, one review quote, one gap.",
          ],
          check: {
            type: "check",
            question: "Competitor research should help you:",
            options: [
              { id: "a", label: "Copy their logo", correct: false },
              {
                id: "b",
                label: "See how customers choose today and find an honest gap",
                correct: true,
              },
              {
                id: "c",
                label: "Prove you have no competition, ever",
                correct: false,
              },
            ],
            explain:
              "There is always an alternative, including doing nothing. Research finds a real difference.",
          },
        }),
      ],
    },
    {
      slug: "journey-and-research-questions",
      title: "Journey questions and research questions",
      minutes: "9 min",
      summary:
        "Good research starts with written questions. The customer journey tells you which questions matter at each step.",
      blocks: [
        {
          type: "p",
          text: "Priya’s journey has moments: trigger (meeting runs long), discovery (Google vs colleague WhatsApp), compare (price + photos), buy (payment + wait), return (was Thursday worth it?). Each moment needs a **research question** you could actually answer.",
        },
        {
          type: "ul",
          items: [
            "**Trigger:** What starts the lunch search — time, hunger, team outing?",
            "**Discovery:** Where do they look first — Google, Instagram, map, colleague?",
            "**Consideration:** What builds trust — reviews, prices, “ready in X min”?",
            "**Conversion:** What stops the order — queue, no UPI, hidden fees?",
            "**Retention:** What makes Thursday automatic — taste, speed, loyalty note?",
          ],
        },
        {
          type: "term",
          term: "Research Questions",
          meaning:
            "**What:** specific things you need to learn before you change offer, channel, or page. **Why:** vague research wastes time. **How:** tie each question to a decision. Weak: “Tell me about lunch.” Strong: “Will you wait more than **10 minutes** for a **₹199** bowl?”",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** They star questions they can answer this week (reviews + 3 chats) vs questions that need a survey later.",
        },
        {
          type: "p",
          text: "**Practical example:** BrightBrew learns Priya will not read a long menu on mobile. Research question answered → landing page shows **3 bowls** and one CTA.",
        },
        ...lessonClose({
          mistake:
            "“Doing research” with no written questions — then changing nothing because nothing was decided upfront.",
          takeaway:
            "Write **research questions** along the **customer journey**; keep only questions that could change a decision.",
          tip: "If a question cannot change offer, channel, or message, drop it.",
          exerciseSteps: [
            "Write 5 research questions for BrightBrew or a shop you pick.",
            "Star the one you could answer this week with reviews or 3 conversations.",
          ],
          check: {
            type: "check",
            question: "A strong research question is one that:",
            options: [
              {
                id: "a",
                label: "Could change an offer, channel, or message",
                correct: true,
              },
              {
                id: "b",
                label: "Sounds academic and has 40 parts",
                correct: false,
              },
              { id: "c", label: "Only the CEO is allowed to ask", correct: false },
            ],
            explain: "Research exists to reduce bad guesses in campaigns.",
          },
        }),
      ],
    },
    {
      slug: "qual-vs-quant",
      title: "Qualitative vs Quantitative Research",
      minutes: "9 min",
      summary:
        "Qualitative research explains why people feel and choose. Quantitative research counts how many. Beginners need both in small doses.",
      blocks: [
        {
          type: "p",
          text: "Eight office workers tell BrightBrew “we hate the lunch queue.” That is rich **qualitative** data. Counting **140 people** walking past at 12:30 vs **40** at 3 p.m. is **quantitative**. Together they justify a “order ahead” campaign — not a guess.",
        },
        {
          type: "term",
          term: "Qualitative vs Quantitative",
          meaning:
            "**Qualitative:** words, stories, observations — interviews, review themes, watching someone order. **Quantitative:** numbers — percentages, counts, averages, search volume. **Why:** numbers without context mislead; one loud story is not the whole market.",
        },
        {
          type: "code",
          title: "Qualitative vs quantitative research",
          code: `|                    | Qualitative (why)           | Quantitative (how many)        |
|--------------------|-----------------------------|--------------------------------|
| Examples           | 5 chats, review quotes      | Survey %, foot traffic count   |
| Answers            | Motives, fears, language    | Volume, share, averages        |
| Beginner tools     | Review mining, café watch   | Star mix, simple poll, tallies |
| Risk if alone      | One person sounds like all  | Misses the reason behind drop  |
| BrightBrew use     | “Queue is deal-breaker”     | 80 lunch orders / week target  |`,
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Qual shapes the headline (“Skip the queue — order ahead”). Quant sets the goal (**80 orders in 30 days**) and checks if you are on track.",
        },
        {
          type: "p",
          text: "**Practical example:** Qual: 6 of 8 mentions “price on menu.” Quant: 62% of recent reviews mention “slow service.” Fix operations + promise speed in ads.",
        },
        ...lessonClose({
          mistake:
            "Treating one viral comment as the whole market, or ignoring a pattern in 20 reviews because it is “not scientific.”",
          takeaway:
            "Use **qualitative** for why and **quantitative** for how much — then decide with both.",
          tip: "You do not need a 50-page report. You need enough to pick an audience, offer, and channel.",
          exerciseSteps: [
            "Write one qualitative method and one quantitative method for your mini project.",
            "Write what decision each would support.",
          ],
          check: {
            type: "check",
            question: "Qualitative research is best for:",
            options: [
              {
                id: "a",
                label: "Understanding why people feel and choose the way they do",
                correct: true,
              },
              { id: "b", label: "Only counting website visits", correct: false },
              { id: "c", label: "Replacing all numbers forever", correct: false },
            ],
            explain:
              "Use stories for why, numbers for how much. Campaigns need both.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Persona + competitor snapshot",
    goal: "Create one buyer persona and a simple 3-competitor analysis for a real or practice business (BrightBrew is allowed).",
    starterLabel: "Notes template you can copy",
    steps: [
      "Choose the business and write a one-sentence target audience.",
      "Mine 8–10 reviews or have 2 short chats. List needs, goals, pains.",
      "Fill the persona page (keep it one page).",
      "Pick 3 alternatives a customer might choose.",
      "Fill the competitor table and write one honest gap.",
    ],
    starterCode: `Business:
Target audience (1 sentence):

PERSONA
Name / role / day:
Goal:
Need:
Pains:
Where they look:
Objection:
Offer that would help:

COMPETITORS (3)
Name | Offer | Price clue | Channel | Review quote | Gap vs us

Decision: we will focus on __________ because __________.`,
    doneWhen: [
      "The persona could guide a real caption or ad.",
      "Pains come from observation or reviews, not only imagination.",
      "The competitor snapshot names a gap you could actually deliver.",
    ],
  },
};

export default digitalMarketingFoundationsModule02;

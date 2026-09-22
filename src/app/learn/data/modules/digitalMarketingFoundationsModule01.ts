import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule01: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "digital-marketing-fundamentals",
  moduleNumber: "01",
  title: "Digital Marketing Fundamentals",
  estimatedTime: "60–80 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 01 | Fundamentals | NSL Digital Lab",
    description:
      "Beginner Module 01: what digital marketing is, traditional vs digital, websites, traffic, channels, customer journey, and the marketing funnel.",
    keywords:
      "what is digital marketing, marketing funnel, customer journey, organic vs paid traffic, landing page, digital marketing channels",
    canonical: `${BASE}/digital-marketing-fundamentals`,
  },
  nextModule: {
    href: `${BASE}/audience-and-market-research`,
    label: "Next: Module 02",
  },
  intro: {
    headline: "Marketing is how a business helps the right people say yes",
    body: [
      "If you have never worked in marketing, start here. You do not need a big budget or fancy tools. You need a clear picture of who the customer is, how they find a business, and what the business wants them to do.",
      "This course follows a practical journey: Understand → Research → Plan → Attract → Engage → Convert → Measure → Optimize. Module 01 is **Understand**.",
      `We will use a running example: ${BRIGHTBREW}. You will also meet **Priya**, an office worker who needs lunch before a 1 p.m. call. Real brands you already use will show up too.`,
    ],
    youWillLearn: [
      "What **marketing** and **digital marketing** mean in everyday language",
      "How **digital** differs from posters, TV, and flyers",
      "Why businesses use **websites**, **landing pages**, ads, and email",
      "**Organic vs paid** traffic — earned vs rented attention",
      "The main **channels** and when a marketer picks each",
      "The **customer journey** and the **marketing funnel** (awareness → consideration → conversion → retention)",
    ],
  },
  lessons: [
    {
      slug: "what-is-digital-marketing",
      title: "What is Digital Marketing?",
      minutes: "9 min",
      summary:
        "Marketing helps the right people notice you, trust you, and act. Digital marketing does that on phones, search, social, email, and websites.",
      blocks: [
        {
          type: "p",
          text: "Monday at 12:15, Priya’s meeting runs long. She is hungry, on a budget, and has 20 minutes. She does not think “I need marketing.” She thinks “I need lunch that will not ruin my afternoon.” **Marketing** is how BrightBrew shows up in that moment with a clear offer — not random noise.",
        },
        {
          type: "term",
          term: "Marketing (basics)",
          meaning:
            "**What:** helping people who have a need discover your business, understand why you fit, and take a step (visit, call, order). **Why:** if nobody knows you exist, great coffee does not pay rent. **How:** choose who you serve, say what you offer, show up where they look, make the next step easy.",
        },
        {
          type: "term",
          term: "Digital Marketing",
          meaning:
            "**What:** marketing through **online channels** — search, social media, email, websites, and paid ads on those platforms. **Why:** Priya compares options on her phone before she walks two blocks. **How:** attract attention → give useful info → invite one action → check what happened.",
        },
        {
          type: "p",
          text: "**Real-world example:** Priya searches “healthy lunch near Cyber Park,” taps a Google result, sees a bowl for **₹199**, and hits **Order on WhatsApp**. Every step — the search listing, the page, the button — is digital marketing.",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** They do not only “post on Instagram.” They name the **audience** (office workers nearby), the **action** (weekday lunch order), the **channel** (search + social), and the **page** people land on. Then they check if orders moved.",
        },
        {
          type: "ul",
          items: [
            "A **channel** is where you reach people (Google, Instagram, email).",
            "An **action** (or **CTA**) is what you want next: visit, book, order, buy.",
            "No audience + no action = activity, not marketing.",
          ],
        },
        ...lessonClose({
          mistake:
            "Treating “marketing” as only design or only posting — without naming who it is for and what they should do next.",
          takeaway:
            "**Digital marketing** uses online places to reach the right people and get a useful action you can often measure.",
          tip: "When someone says “we need marketing,” ask: **Who is this for?** and **What should they do next?**",
          exerciseSteps: [
            "Pick a local business you used this month.",
            "Write who they want as a customer (one sentence).",
            "Write one online action they probably want (example: “book a table”).",
          ],
          check: {
            type: "check",
            question: "Digital marketing is mainly about:",
            options: [
              { id: "a", label: "Only making logos look modern", correct: false },
              {
                id: "b",
                label: "Using online channels to reach the right people and get a useful action",
                correct: true,
              },
              {
                id: "c",
                label: "Printing more flyers than last year",
                correct: false,
              },
            ],
            explain:
              "Design can help, and flyers can still work. Digital marketing is the online path from attention to action.",
          },
        }),
      ],
    },
    {
      slug: "traditional-vs-digital",
      title: "Traditional vs Digital Marketing",
      minutes: "8 min",
      summary:
        "Traditional marketing uses offline media. Digital uses online media — and you can usually measure and change it faster.",
      blocks: [
        {
          type: "p",
          text: "BrightBrew’s owner once paid for **2,000 flyers** near the metro. Some blew away. Some sat in a drawer. At the end of the month, nobody could say which flyer caused **order #47** on Tuesday.",
        },
        {
          type: "term",
          term: "Traditional vs Digital",
          meaning:
            "**What:** **Traditional** = offline (newspaper, radio, billboard, flyer, shop board). **Digital** = online (search, social, email, website, app ads). **Why it matters:** a small café can reach nearby office workers without a highway billboard. **How:** same need for a clear offer — but digital lets you edit tomorrow and see clicks today.",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** They do not pick “digital because it is cool.” They ask where Priya already looks when she is hungry — then mix channels. A street board can still help walk-ins; Google can catch people two streets away.",
        },
        {
          type: "code",
          title: "Traditional vs digital (quick comparison)",
          code: `| Question              | Traditional (example)     | Digital (example)              |
|-----------------------|---------------------------|--------------------------------|
| Where people see you  | Flyer, radio, billboard   | Google, Instagram, email       |
| Change the message    | Slow (reprint)            | Fast (edit post or ad)         |
| Who saw it?           | Hard to know              | Often trackable (clicks, visits)|
| Best when             | Local walk-by, mass reach | Search intent, retargeting     |
| Still needs           | Good offer + service      | Good offer + service           |`,
        },
        {
          type: "p",
          text: "**Practical example:** Same **₹199 lunch bowl** offer: a flyer says “BrightBrew” with no map link. A Google ad says “Weekday lunch bowls — order in 2 taps” and opens a page with today’s menu. The digital path is easier to test and fix.",
        },
        ...lessonClose({
          mistake:
            "Arguing “traditional is dead” or “digital is everything” instead of asking where your customer actually pays attention.",
          takeaway:
            "Use **offline** where it still fits your area; use **digital** when you need speed, targeting, and measurement.",
          tip: "Do not copy a big brand’s TV plan. Start where **your** customer already looks this week.",
          exerciseSteps: [
            "List two traditional ways a local shop could promote itself.",
            "List two digital ways.",
            "Circle which pair is easier to measure in the next 7 days.",
          ],
          check: {
            type: "check",
            question: "A big advantage of digital marketing is:",
            options: [
              {
                id: "a",
                label: "You never need a product people want",
                correct: false,
              },
              {
                id: "b",
                label: "You can often measure clicks and actions and change the message quickly",
                correct: true,
              },
              { id: "c", label: "Billboards become free", correct: false },
            ],
            explain:
              "Measurement and speed are practical wins. You still need a useful offer.",
          },
        }),
      ],
    },
    {
      slug: "why-businesses-use-digital-and-pages",
      title: "Why businesses use Digital Marketing — and where people land",
      minutes: "10 min",
      summary:
        "Digital marketing reaches people who are not walking past today. Your website is your home online; a landing page is one focused door for one offer.",
      blocks: [
        {
          type: "p",
          text: "BrightBrew has **40 seats** and a loyal weekend crowd — but weekday lunch is half empty. The owner cannot knock on every office door. **Digital marketing** puts BrightBrew in front of Priya when she is already looking for lunch.",
        },
        {
          type: "ul",
          items: [
            "**Why businesses use digital:** reach new people, repeat a message without reprinting, test offers (“₹199 bowl” vs “free cookie”), build a list of interested customers.",
            "**What:** show up in search and social, send traffic to a page, collect orders or leads.",
            "**How:** match the promise in the ad or post to the page people open.",
          ],
        },
        {
          type: "term",
          term: "Website",
          meaning:
            "**What:** the business’s main home on the internet — hours, menu, story, contact, multiple pages. **Why:** people check before they trust a new café. **How:** marketers send people to the **most useful page**, not always a cluttered homepage.",
        },
        {
          type: "term",
          term: "Landing Page",
          meaning:
            "**What:** a single page built for **one job** (example: get weekday lunch orders this week). **Why:** extra menus and blog posts distract Priya at 12:18. **How:** one headline, one offer, one **CTA** (call to action — the button like “Order now”).",
        },
        {
          type: "p",
          text: "**Real-world example:** An Instagram ad says “**Ready in 8 minutes**.” If it opens a homepage with 12 links and no prices, Priya leaves. If it opens a **landing page** with today’s bowls, **₹199**, and WhatsApp order, she might actually buy.",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** They pair each campaign with the right page type — broad trust-building → website; one offer this month → landing page. They watch **bounce** (leave without acting) when the page does not match the ad.",
        },
        {
          type: "p",
          text: "**Practical example:** BrightBrew keeps a simple website for “who we are.” For the “Office Lunch 199” campaign, they build a landing page with only that combo, pickup times, and one order button.",
        },
        ...lessonClose({
          mistake:
            "Sending paid traffic to a messy homepage when the ad promised one specific offer.",
          takeaway:
            "**Website** = full home; **landing page** = one focused action. The page must match the promise in the ad or post.",
          tip: "Before you spend on ads, open the page on your phone. Can you complete the action in under 60 seconds?",
          exerciseSteps: [
            "Open any brand’s homepage. Write what the site is for in one sentence.",
            "Imagine a landing page for one offer. Write the one action it wants.",
          ],
          check: {
            type: "check",
            question: "A landing page is most useful when:",
            options: [
              {
                id: "a",
                label: "You want one focused action from a specific offer",
                correct: true,
              },
              {
                id: "b",
                label: "You want to hide your phone number forever",
                correct: false,
              },
              {
                id: "c",
                label: "You have nothing to say, so you add 20 menus",
                correct: false,
              },
            ],
            explain:
              "A landing page reduces distraction so more people complete the action you paid to get.",
          },
        }),
      ],
    },
    {
      slug: "organic-vs-paid-traffic",
      title: "Organic vs Paid Traffic",
      minutes: "9 min",
      summary:
        "Traffic is people arriving at your site or page. Organic is earned attention; paid is rented attention.",
      blocks: [
        {
          type: "p",
          text: "Last month, **320 people** opened BrightBrew’s lunch page. Where did they come from? Some found a Google result without an ad. Some clicked a sponsored link. Some tapped a link in a colleague’s WhatsApp. A marketer splits this into **organic** vs **paid** traffic.",
        },
        {
          type: "term",
          term: "Traffic",
          meaning:
            "**What:** visits to your website, landing page, or profile. **Why:** visits alone do not pay rent — you need useful actions (orders). **How:** track source (search, social, email, ad) and what people did next.",
        },
        {
          type: "term",
          term: "Organic vs Paid Traffic",
          meaning:
            "**Organic:** people find you without you paying per click — SEO rankings, unpaid posts, shares, saved links. **Paid:** you pay a platform (Google, Meta) to show an ad. **Why:** organic can keep working but grows slowly; paid can start fast but usually drops when spend stops.",
        },
        {
          type: "code",
          title: "Organic vs paid traffic",
          code: `|                    | Organic (earned)              | Paid (rented)                    |
|--------------------|-------------------------------|----------------------------------|
| Cost per visit     | Time + content, not per click | Money while ads run              |
| Speed              | Slower to build               | Can start same day               |
| Control            | Platforms change rules        | You set budget and targeting     |
| Stops when         | You stop creating / SEO slips| You pause or run out of budget   |
| BrightBrew example | Google map + good reviews     | “Lunch near me” search ad        |`,
        },
        {
          type: "p",
          text: "**How a marketer uses both:** Run a **paid** ad this month to fill empty weekday seats while publishing a Google-friendly “office lunch near [area]” page so **organic** visits grow next quarter.",
        },
        {
          type: "p",
          text: "**Practical example:** Priya discovers BrightBrew from a paid ad on Tuesday. She saves the site. On Thursday she returns **organically** — no ad cost that day. Retention work (email, WhatsApp) can also be organic touchpoints.",
        },
        ...lessonClose({
          mistake:
            "Only posting on social (organic) with no landing page or offer, then wondering why revenue is random.",
          takeaway:
            "Ask **“Is this visit earned or rented?”** Use paid for speed; build organic for long-term findability.",
          tip: "Never send paid traffic to a page you would not want to find for free.",
          exerciseSteps: [
            "Think of the last time you visited a small business website.",
            "Write whether you arrived organically or from an ad.",
            "Write one reason that source matched your need.",
          ],
          check: {
            type: "check",
            question: "Paid traffic typically:",
            options: [
              {
                id: "a",
                label: "Continues forever after you switch the ads off",
                correct: false,
              },
              {
                id: "b",
                label: "Can start quickly, but usually stops or drops when you stop paying",
                correct: true,
              },
              {
                id: "c",
                label: "Is the same thing as a billboard you cannot measure",
                correct: false,
              },
            ],
            explain:
              "You rent attention. Organic attention is earned and can last, but it takes work.",
          },
        }),
      ],
    },
    {
      slug: "major-channels",
      title: "Major Digital Marketing Channels",
      minutes: "10 min",
      summary:
        "A channel is where you reach people. Pick the few places your customer already uses for the job you need done this month.",
      blocks: [
        {
          type: "p",
          text: "Priya at **12:05** is not in the same mood as Priya at **8 p.m.** scrolling Reels. BrightBrew does not need to be on every app. They need the **right channels** for each moment.",
        },
        {
          type: "ul",
          items: [
            "**What:** main **digital channels** — Search (SEO + Google Ads), Social (organic + ads), Email, Content (blog/video), Listings (Google Business Profile), WhatsApp or delivery apps.",
            "**Why:** each channel fits a different job (discover, compare, order, repeat).",
            "**How:** match channel to audience habit and funnel stage — do not spray the same post everywhere.",
          ],
        },
        {
          type: "p",
          text: "**How a marketer uses it:** For “hungry now” Priya → **Search** + map listing. For “what looks good?” → **Instagram** photos. For last week’s buyers → **email** or WhatsApp with Thursday’s bowl.",
        },
        {
          type: "p",
          text: "**Practical example:** BrightBrew skips podcast and YouTube in month one. They run **Google Business Profile**, one **Search** campaign for “lunch near [area],” and **Instagram** 4×/week with a link to the lunch landing page.",
        },
        {
          type: "ul",
          items: [
            "**Search:** strong when people type what they want (“lunch near me”).",
            "**Social:** strong for discovery, proof, and reminders.",
            "**Email:** strong for repeats and offers to people who opted in.",
            "**Content:** answers questions so people trust you before they buy.",
          ],
        },
        ...lessonClose({
          mistake:
            "Opening six accounts, posting twice, then abandoning five — instead of doing two channels well.",
          takeaway:
            "Choose channels where **your audience already is** and that can do **this month’s job**.",
          tip: "If you cannot explain why a channel fits in one sentence, skip it for now.",
          exerciseSteps: [
            "Pick a brand you follow.",
            "Name two channels they use.",
            "Write the job of each (find new people / stay in mind / get a repeat order).",
          ],
          check: {
            type: "check",
            question: "How should a beginner choose a channel?",
            options: [
              { id: "a", label: "Open every app the intern likes", correct: false },
              {
                id: "b",
                label: "Choose where the customer already looks, for a clear job this month",
                correct: true,
              },
              {
                id: "c",
                label: "Only use TV because it feels premium",
                correct: false,
              },
            ],
            explain:
              "Channels are tools. Fit to audience and job comes first.",
          },
        }),
      ],
    },
    {
      slug: "customer-journey",
      title: "The Customer Journey",
      minutes: "9 min",
      summary:
        "The customer journey is the path a real person takes from noticing a need to coming back again.",
      blocks: [
        {
          type: "p",
          text: "Priya does not wake up thinking about BrightBrew. She wakes up thinking about her **1 p.m. client call**. Hunger is the trigger. The **customer journey** is her story — not the café’s internal to-do list.",
        },
        {
          type: "term",
          term: "Customer Journey",
          meaning:
            "**What:** the steps someone takes over time — trigger, search, compare, first buy, repeat. **Why:** a “BUY NOW” ad fails when they are still comparing prices. **How:** list moments in **first person** (“I need… I worry… I choose…”) and match messages to each moment.",
        },
        {
          type: "p",
          text: "**BrightBrew journey (simple):** Meeting runs over → Priya needs fast healthy lunch → she searches Google or checks Instagram stories → she compares distance, photos, and price → she orders **₹199 bowl** → if it was good, she saves the café for Thursday.",
        },
        {
          type: "p",
          text: "**How a marketer uses it:** They map journey **questions** (Where does she look? What stops her?) and fix leaks — slow checkout, hidden prices — not only louder ads.",
        },
        {
          type: "p",
          text: "**Practical example:** Priya already trusts BrightBrew. Her journey skips “compare five cafés” — she orders from a WhatsApp broadcast. Journeys are not always linear.",
        },
        ...lessonClose({
          mistake:
            "Writing marketing only from the business view (“we are amazing”) instead of from the customer’s moment of need.",
          takeaway:
            "The **customer journey** is the person’s path from need to repeat purchase — design messages for their step, not yours.",
          tip: "Write five bullets for your own last food choice. Label notice, compare, and buy.",
          exerciseSteps: [
            "Write 5 bullets for the last time you chose a new food place.",
            "Label which moment was “I notice,” “I compare,” and “I buy.”",
          ],
          check: {
            type: "check",
            question: "The customer journey is mainly:",
            options: [
              {
                id: "a",
                label: "The path a person takes from need to (repeat) purchase",
                correct: true,
              },
              {
                id: "b",
                label: "A list of your company’s departments",
                correct: false,
              },
              { id: "c", label: "Only the color of the logo", correct: false },
            ],
            explain:
              "You design messages around the person’s path, not around internal teams.",
          },
        }),
      ],
    },
    {
      slug: "marketing-funnel",
      title: "The Marketing Funnel",
      minutes: "11 min",
      summary:
        "The funnel is a planning tool: Awareness → Consideration → Conversion → Retention. Each stage has a different job.",
      blocks: [
        {
          type: "p",
          text: "BrightBrew posted beautiful coffee art all month. Foot traffic barely moved. The problem was not “awareness” — office workers still did not know lunch existed, prices were buried, and ordering took six taps. The **marketing funnel** helps you see which **stage** is weak.",
        },
        {
          type: "term",
          term: "Marketing Funnel",
          meaning:
            "**What:** a simple model — **Awareness**, **Consideration**, **Conversion**, **Retention**. **Why:** pretty posts alone do not fill seats if nobody can order. **How:** assign activities and KPIs to each stage on purpose.",
        },
        {
          type: "ul",
          items: [
            "**Awareness:** they learn you exist — Reel of the lunch line, local ad reach.",
            "**Consideration:** they compare — prices on the page, reviews, “ready in 8 minutes.”",
            "**Conversion:** they act — order button, coupon, easy WhatsApp checkout.",
            "**Retention:** they return — “Thursday bowl + cookie” email to past buyers.",
          ],
        },
        {
          type: "p",
          text: "**How a marketer uses it:** Journey = empathy for Priya. **Funnel** = your checklist so you do not only post awareness content when conversion is leaking.",
        },
        {
          type: "p",
          text: "**Practical example:** Goal **80 weekday orders**. Awareness KPI: 10,000 impressions nearby. Consideration KPI: 500 landing-page views. Conversion KPI: **80 orders**. Retention KPI: **25 repeat orders** in 30 days.",
        },
        {
          type: "code",
          title: "This course’s learning journey",
          code: `UNDERSTAND → RESEARCH → PLAN → ATTRACT → ENGAGE → CONVERT → MEASURE → OPTIMIZE`,
        },
        ...lessonClose({
          mistake:
            "Calling every Instagram post “marketing” without naming which funnel stage it serves.",
          takeaway:
            "Plan work for **awareness, consideration, conversion, and retention** — not one random post type.",
          tip: "If results are weak, name the **leaking stage** before you ask for more budget.",
          exerciseSteps: [
            "Pick a brand. Write one activity they do for each funnel stage (guess is OK).",
            "Star the stage that looks weakest.",
          ],
          check: {
            type: "check",
            question: "Conversion in the funnel means:",
            options: [
              { id: "a", label: "Someone saw a logo once", correct: false },
              {
                id: "b",
                label: "The person takes the action you wanted (order, book, buy, sign up)",
                correct: true,
              },
              {
                id: "c",
                label: "You posted every day for a year",
                correct: false,
              },
            ],
            explain:
              "Awareness is being seen. Conversion is the useful action. Retention is the repeat.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Brand digital marketing scan",
    goal: "Pick a real brand. Map how they use digital marketing: channels, a landing page or website, organic vs paid clues, and funnel stages.",
    starterLabel: "Notes template you can copy",
    steps: [
      "Choose one brand you can observe without insider access (café chain, D2C brand, app, or local shop with a site).",
      "List the digital channels you can see (site, Google listing, Instagram, YouTube, email signup, ads you are shown).",
      "Open their homepage and one offer page. Note the main CTA.",
      "Guess what is organic vs paid (an ad labeled “Sponsored” vs a Google ranking).",
      "Map one activity to Awareness, Consideration, Conversion, and Retention.",
      "Write 5 sentences: what they do well, and one leak in the funnel.",
    ],
    starterCode: `Brand: ____________________
Who they seem to want as a customer:
Main action they want online:

Channels I can see:
Website / landing page CTA:
Organic clues:
Paid clues:

Funnel
Awareness:
Consideration:
Conversion:
Retention:

What they do well:
Likely leak (stage + why):
One thing I would test next:`,
    doneWhen: [
      "You named a real brand and a likely customer.",
      "You listed channels and at least one CTA.",
      "You mapped activities to all four funnel stages and named a leak.",
    ],
  },
};

export default digitalMarketingFoundationsModule01;

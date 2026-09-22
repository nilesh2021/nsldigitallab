import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule10: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "complete-digital-marketing-campaign",
  moduleNumber: "10",
  title: "Complete Digital Marketing Campaign",
  estimatedTime: "90–120 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 10 | Full Campaign | NSL Digital Lab",
    description:
      "Capstone: plan a complete digital marketing campaign from business problem through channels, KPIs, tracking, testing, optimization, and reporting.",
    keywords:
      "digital marketing campaign plan, marketing capstone, channel strategy, KPI plan, campaign optimization beginner",
    canonical: `${BASE}/complete-digital-marketing-campaign`,
  },
  prevModule: {
    href: `${BASE}/analytics-and-marketing-performance`,
    label: "Previous: Module 09",
  },
  intro: {
    headline: "One campaign, one story — told across every channel",
    body: [
      "This capstone walks the full loop: **Business** → **Audience** → **Channels & content** → **SEO, ads, social, email, page** → **KPIs & tracking** → **Optimize** → **Report**.",
      `You will build a **30-day weekday lunch campaign** for **BrightBrew only** — ${BRIGHTBREW.toLowerCase()}.`,
      "Each lesson adds a piece of the plan with **actual output** you could hand to a café owner. Keep scope small. A finished 30-day plan beats a slide deck nobody could run.",
    ],
    youWillLearn: [
      "How to start from a business problem, not a random channel",
      "How persona, journey, and funnel connect to channel jobs",
      "How SEO, Google Ads, paid social, organic, email, and one landing page share one offer",
      "How to set KPIs, tracking, tests, and a 7-day optimization loop",
      "How to write a one-page campaign report",
    ],
  },
  lessons: [
    {
      slug: "problem-to-objective",
      title: "Business problem and marketing objective",
      minutes: "9 min",
      summary:
        "Start with pain in the business. Translate it into one SMART marketing objective.",
      blocks: [
        {
          type: "p",
          text: "Channels come **after** the job is clear. BrightBrew’s owner might say “we need more marketing.” A marketer asks: **what problem in the business** does marketing solve this month?",
        },
        {
          type: "p",
          text: "**SMART** means Specific, Measurable, Achievable, Relevant, Time-bound. One numbered objective beats five vague wishes.",
        },
        {
          type: "code",
          title: "Step 1 output — Business → SMART objective (BrightBrew)",
          code: `Business one-liner:
  BrightBrew — millet bowls and coffee for office workers near Cyber Park;
  weekday lunch seats are empty 11 a.m.–2 p.m.

Business problem (one sentence):
  Nearby teams do not know we exist, so they default to the canteen or delivery apps.

Marketing objective (SMART, 30 days):
  Generate 80 paid weekday lunch orders from office workers within 4 km
  by [start date + 30 days], with CPA ≤ ₹250 on tracked channels.

What we are NOT solving this month:
  Rebranding, dinner menu launch, or national franchise awareness.`,
        },
        ...lessonClose({
          mistake:
            "Opening Instagram because it is trendy before naming the business problem.",
          takeaway:
            "Campaigns start with a numbered marketing objective tied to revenue or orders.",
          tip:
            "If you cannot state the problem in one sentence, pause before writing ad copy.",
          exerciseSteps: [
            "Rewrite BrightBrew’s problem in your own words (one sentence).",
            "Write one SMART objective with a number and a deadline.",
          ],
          check: {
            type: "check",
            question: "A campaign should start from:",
            options: [
              {
                id: "a",
                label: "A business problem translated into a SMART marketing objective",
                correct: true,
              },
              { id: "b", label: "Whatever audio is trending today", correct: false },
              { id: "c", label: "A logo refresh with no goal", correct: false },
            ],
            explain:
              "Channels come after the job is clear.",
          },
        }),
      ],
    },
    {
      slug: "audience-journey-funnel",
      title: "Audience, persona, journey, and funnel",
      minutes: "10 min",
      summary:
        "Who you serve, what their week feels like, and which funnel stage each message supports.",
      blocks: [
        {
          type: "p",
          text: "Reuse research habits from Module 02. The same **persona** should appear in ads, email, and the landing page — not a new personality per channel.",
        },
        {
          type: "code",
          title: "Step 2 output — Persona, journey, funnel (BrightBrew)",
          code: `Target audience:
  Office workers 22–40 within 4 km of BrightBrew (Cyber Park, nearby towers)

Buyer persona — Priya, 29, operations coordinator:
  - Pain: canteen queue + food coma before afternoon calls
  - Budget: ₹150–₹280 for lunch; shares deals with team chat
  - Behavior: scrolls Instagram at lunch; searches Google when in a hurry
  - Success: hot bowl in hand in under 10 minutes

Customer journey (4 beats):
  1 Unaware → sees bowl Reel while scrolling
  2 Considering → opens menu, compares price vs delivery app fees
  3 Intent → clicks ad or email, lands on /weekday-lunch
  4 Purchase → WhatsApp order or pickup; repeats Thursdays

Marketing funnel (jobs per stage):
  Awareness     Reels + light paid social (show product + price)
  Consideration SEO lunch page + proof (reviews, “ready in 8 min”)
  Conversion    Google Search + retargeting + email offer → /weekday-lunch
  Retention     Thank-you + “Thursday bowl” email (Module 08 sequence)`,
        },
        ...lessonClose({
          mistake:
            "Putting 40% of budget on LinkedIn because it feels “professional” when Priya lives on Instagram and Google.",
          takeaway:
            "Persona + journey tell you where to show up; funnel tells you what to say at each stage.",
          tip:
            "Print the persona on one sticky note. Check every headline against Priya’s Tuesday.",
          exerciseSteps: [
            "Add two details to Priya (schedule, objection, favorite bowl).",
            "Map one activity to each funnel stage for BrightBrew.",
          ],
          check: {
            type: "check",
            question: "Journey and funnel together help you:",
            options: [
              {
                id: "a",
                label: "Match messages to real moments and assign jobs to stages",
                correct: true,
              },
              { id: "b", label: "Skip knowing the customer", correct: false },
              { id: "c", label: "Avoid having a landing page", correct: false },
            ],
            explain:
              "Empathy (journey) plus planning (funnel) is the pair this course uses.",
          },
        }),
      ],
    },
    {
      slug: "channel-and-content",
      title: "Channel selection and content strategy",
      minutes: "10 min",
      summary:
        "Pick few channels. Give each a job. Plan content that supports the same primary offer.",
      blocks: [
        {
          type: "p",
          text: "BrightBrew cannot “be everywhere.” This 30-day plan uses **four doors** to the same offer: **Google Search**, **paid social**, **organic Instagram**, and **email** — all pointing to **one landing page**.",
        },
        {
          type: "code",
          title: "Step 3 output — Channel plan + content snippet (BrightBrew)",
          code: `Channel plan (30 days, one primary offer: Weekday bowls from ₹199)

| Channel        | Job this month                          | Budget / effort      |
|----------------|-----------------------------------------|----------------------|
| Google Search  | Capture "lunch near Cyber Park" intent  | ₹12,000 ad spend     |
| Paid social    | Interrupt scroll; retarget site visitors| ₹8,000 ad spend      |
| Organic IG     | Proof + repetition (3 posts/week)       | Time: 4 hrs/week     |
| Email          | Convert opt-ins from cheat-sheet magnet | Tool + 3-email seq   |

Content pillars (reuse one photoshoot):
  1 Speed — "Ready in 8 minutes" bowl lineup
  2 Health/value — millet, under ₹250 options
  3 Order path — WhatsApp / pickup in 3 taps

Content snippet (Reel script, 15 sec):
  Hook on screen: "Still in the canteen queue?"
  Shot: steam rising off millet bowl, price ₹199 on screen
  Voice: "BrightBrew — pick up in 8 min. Link in bio."
  CTA end card: Weekday lunch → /weekday-lunch`,
        },
        ...lessonClose({
          mistake:
            "Every channel promotes a different offer with different URLs.",
          takeaway:
            "One campaign, one primary offer, many supporting formats.",
          tip:
            "If a channel cannot support this month’s SMART goal, it is a later project.",
          exerciseSteps: [
            "Pick 3 channels for your version of BrightBrew and write each job.",
            "List 3 content pillars and one source asset (photoshoot, menu, reviews).",
          ],
          check: {
            type: "check",
            question: "Channel strategy fails when:",
            options: [
              {
                id: "a",
                label: "Each channel tells a different offer with no shared landing page",
                correct: true,
              },
              {
                id: "b",
                label: "Each channel has a clear job toward one objective",
                correct: false,
              },
              { id: "c", label: "You reuse one photoshoot", correct: false },
            ],
            explain:
              "Message match across doors is non-negotiable for beginners.",
          },
        }),
      ],
    },
    {
      slug: "seo-ads-social-email-page",
      title: "SEO, ads, social, email, and the landing page",
      minutes: "12 min",
      summary:
        "Modules 04–08 show up as concrete copy — all aimed at one URL.",
      blocks: [
        {
          type: "p",
          text: "Write the **landing page** outline before ads. Trailer after the movie exists. BrightBrew’s primary URL for this campaign: `/weekday-lunch`.",
        },
        {
          type: "code",
          title: "Step 4 output — Copy pack (BrightBrew, one offer)",
          code: `SEO title (≤60 chars):
  Weekday Lunch Bowls Near Cyber Park | BrightBrew

Meta description:
  Millet bowls from ₹199, ready in ~8 min. Pickup or WhatsApp order.
  Open Mon–Fri 11–3.

Google Search headlines (2):
  H1: Office Lunch in 8 Minutes
  H2: Millet Bowls From ₹199 | Cyber Park

Paid social primary text:
  Skip the canteen queue. BrightBrew bowls from ₹199 — ready before your 1 p.m. call.

Organic social post (Instagram caption):
  Thursday = millet power bowl day 🥗 ₹199 · 8-min pickup near Cyber Park
  Tap link for menu + WhatsApp order. #OfficeLunch

Email subject (from welcome / promo):
  Your 10% first bowl is waiting — code BRIGHT10

Landing page H1:
  Weekday bowls from ₹199 — ready in 8 minutes

Landing sections:
  Hero + price | 3 bestsellers | Reviews | Hours | WhatsApp CTA sticky on mobile`,
        },
        ...lessonClose({
          mistake:
            "Writing ads first and landing on the homepage with no mention of ₹199 or Cyber Park.",
          takeaway:
            "SEO, ads, social, and email are doors; the landing page is the room they enter.",
          tip:
            "Read every line aloud. If Priya cannot tell the price and next step in 5 seconds, simplify.",
          exerciseSteps: [
            "Write H1 + primary CTA for /weekday-lunch.",
            "Write one Search headline and one Reel hook that match the H1.",
          ],
          check: {
            type: "check",
            question: "The landing page in a full campaign is:",
            options: [
              {
                id: "a",
                label: "The shared destination most channels should agree on",
                correct: true,
              },
              { id: "b", label: "Optional if the logo is nice", correct: false },
              {
                id: "c",
                label: "A different random URL per caption",
                correct: false,
              },
            ],
            explain:
              "Beginners should run one primary URL per campaign.",
          },
        }),
      ],
    },
    {
      slug: "kpis-tracking-testing",
      title: "KPIs, tracking, and testing",
      minutes: "9 min",
      summary:
        "Decide what you count, how you count it, and what you test first.",
      blocks: [
        {
          type: "p",
          text: "If tracking is missing, you will only see **clicks**. Do not scale a campaign you cannot read (Module 09).",
        },
        {
          type: "code",
          title: "Step 5 output — KPIs table + tracking plan + test (BrightBrew)",
          code: `KPIs (30-day campaign)

| KPI                         | Target        | Tool              |
|-----------------------------|---------------|-------------------|
| Weekday lunch orders        | 80            | POS + GA4 purchase|
| CPA (paid channels)         | ≤ ₹250        | Ads + spreadsheet |
| Landing conversion rate     | ≥ 4%          | GA4               |
| Email opt-ins (cheat sheet) | 120           | Email platform    |

Tracking plan:
  - GA4 on site; event "purchase" or "whatsapp_click" as primary conversion
  - Meta + Google conversion tags on /weekday-lunch thank-you or click
  - UTM on every link: ?utm_source=instagram&utm_medium=paid&utm_campaign=weekday-lunch-mar
  - Coupon code BRIGHT10 in email as backup attribution
  - Weekly export: spend, clicks, orders by source (one tab)

A/B test (week 1, paid social only):
  Variable: Creative A (top-down bowl) vs B (bowl in hand at desk)
  Rule: 50 clicks each before picking lower CPA
  Kill rule: Pause any ad set with ₹1,500 spend and 0 tracked orders after page check`,
        },
        ...lessonClose({
          mistake:
            "Launching all channels day one with no conversion event and no UTM discipline.",
          takeaway:
            "KPIs + tracking + one test = you can optimize instead of guess.",
          tip:
            "Write kill rules before spend feels emotional.",
          exerciseSteps: [
            "List 4 KPIs with targets for BrightBrew.",
            "Write 2 tracking methods (tool + backup) and one A/B test.",
          ],
          check: {
            type: "check",
            question: "UTMs and conversion events exist to:",
            options: [
              {
                id: "a",
                label: "Show which door people used and whether they converted",
                correct: true,
              },
              { id: "b", label: "Make URLs prettier only", correct: false },
              { id: "c", label: "Replace having an offer", correct: false },
            ],
            explain:
              "Attribution is never perfect. Directional truth beats none.",
          },
        }),
      ],
    },
    {
      slug: "optimize-and-report",
      title: "Optimization and reporting",
      minutes: "9 min",
      summary:
        "Optimization is a scheduled loop. Reporting tells the owner what happened and what happens next.",
      blocks: [
        {
          type: "term",
          term: "Optimization",
          meaning:
            "**What:** improving results using evidence. **Why:** the first plan is a hypothesis. **How:** read the biggest leak, change **one** thing, read again.",
        },
        {
          type: "code",
          title: "Step 6 output — 7-day optimize checklist + report paragraph (BrightBrew)",
          code: `7-day optimization checklist

Day 1:  Confirm /weekday-lunch loads fast on mobile; test WhatsApp CTA
Day 2:  Check geo on paid social + Search — no clicks outside 4 km
Day 3:  Compare creative A vs B CTR; pause obvious loser
Day 4:  Search terms report — add negatives for irrelevant lunch queries
Day 5:  If CTR ok but CVR low → move CTA above fold; add 2 reviews
Day 6:  Retargeting only: new headline + BRIGHT10 reminder
Day 7:  Calculate CPA, ROAS, orders vs 80 goal; write 1 next test

Report paragraph (example after week 1):

"We spent ₹5,200 across Search and Meta (days 1–7), drove 312 sessions to
/weekday-lunch, and tracked 22 orders (CPA ₹236, ROAS 1.1). CTR on Meta
was strong at 2.8%, but landing CVR was 3.1% vs our 4% target — mobile
users missed the WhatsApp button until we moved it sticky on day 5.
Search brought higher-intent clicks at ₹18 CPC. Next week we will scale
Search lunch keywords, keep Meta on creative B only, and retest CVR after
the CTA fix. We are pacing behind 80 orders but CPA is within ₹250."`,
        },
        ...lessonClose({
          mistake:
            "Tweaking caption punctuation daily while the mobile page hides the order button.",
          takeaway:
            "Optimize the biggest leak on a calendar — not in random panic.",
          tip:
            "Pair every optimization with one metric you expect to move.",
          exerciseSteps: [
            "Write a 4-checkpoint optimization calendar for days 1, 3, 5, 7.",
            "Draft a 5-sentence report with goal, actual, diagnosis, next test.",
          ],
          check: {
            type: "check",
            question: "Optimization should be:",
            options: [
              {
                id: "a",
                label: "A scheduled loop based on KPIs and leaks",
                correct: true,
              },
              { id: "b", label: "Random daily panic", correct: false },
              {
                id: "c",
                label: "Never changing the first ad out of loyalty",
                correct: false,
              },
            ],
            explain:
              "Evidence beats loyalty to a losing ad.",
          },
        }),
      ],
    },
    {
      slug: "assemble-the-document",
      title: "Assemble the campaign document",
      minutes: "8 min",
      summary:
        "Combine every step into one document someone could run for 30 days.",
      blocks: [
        {
          type: "p",
          text: "Your **final project** is not a glossary. It is the BrightBrew plan you built lesson by lesson — problem → persona → channels → copy pack → KPIs → tracking → optimize → report.",
        },
        {
          type: "code",
          title: "Step 7 output — Campaign document spine (BrightBrew, filled)",
          code: `1. Business overview     BrightBrew weekday lunch near Cyber Park
2. Problem               Empty 11–2 seats; low local awareness
3. SMART objective       80 orders / 30 days / CPA ≤ ₹250 / 4 km
4. Persona               Priya, 29, ops coordinator (see lesson 2)
5. Funnel + journey      Awareness → Consideration → Conversion → Retention
6. Channel plan          Search ₹12k | Meta ₹8k | Organic IG | Email
7. Primary URL           /weekday-lunch (all doors)
8. Copy pack             SEO title, ads, post, email subject, H1 (lesson 4)
9. KPIs + tracking       Table + UTM + BRIGHT10 backup (lesson 5)
10. Test                 Social creative A vs B; kill rules
11. 7-day optimize       Checklist (lesson 6)
12. Report template      Goal vs actual paragraph weekly

Hand-off line for owner:
  "Approve ₹20k media + cheat-sheet email; we review orders every Monday."`,
        },
        {
          type: "ul",
          items: [
            "If a section is empty, either cut the channel or do the thinking — empty “SEO plan” boxes are obvious.",
            "Invented numbers are fine if **math is consistent** (Module 09).",
            "Do not paste definitions. Show decisions for **this** business.",
          ],
        },
        ...lessonClose({
          mistake:
            "A beautiful deck that never names the landing URL, budget, or Monday review.",
          takeaway:
            "Capstone success = someone could run 30 days from your document.",
          tip:
            "Read it aloud. If the owner asks “what do I do Tuesday?” and you stumble, add dates.",
          exerciseSteps: [
            "Copy the mini-project headings and star any section you cannot fill yet.",
            "Write one sentence the BrightBrew owner approves to start spend.",
          ],
          check: {
            type: "check",
            question: "The capstone is successful when:",
            options: [
              {
                id: "a",
                label: "Someone could run 30 days of work from the document",
                correct: true,
              },
              { id: "b", label: "It only lists dictionary definitions", correct: false },
              { id: "c", label: "It has no KPIs so it cannot fail", correct: false },
            ],
            explain:
              "This path trained you to plan and measure — not memorize jargon.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Final project: Complete digital marketing campaign",
    goal: "Submit the full BrightBrew 30-day campaign document using every section below. Replace placeholders with your decisions.",
    starterLabel: "Campaign document outline",
    steps: [
      "Copy the spine from lesson 7 and expand any thin sections.",
      "Include SEO page brief, Search sketch, paid social sketch, email sequence, landing outline.",
      "Show KPI maths, tracking, one A/B test, 7-day optimize checklist, and a sample report paragraph.",
      "End with what you will not do this month (scope guardrails).",
    ],
    starterCode: `1. Business overview
2. Target audience
3. Buyer persona
4. Problem / opportunity
5. Marketing objective (SMART)
6. Customer journey
7. Marketing funnel
8. Channel strategy (jobs per channel)
9. Content plan (pillars + 2-week calendar)
10. SEO plan (one page — title, H1, meta)
11. Paid advertising plan (Search)
12. Social media plan (organic + paid)
13. Email strategy (magnet + 3 emails)
14. Landing page concept (H1, sections, CTA)
15. KPIs (with example numbers)
16. Measurement / tracking plan
17. Optimization plan (7-day checklist + kill rules)
18. Reporting (goal vs actual paragraph)

Primary offer:
What we will not do this month:`,
    doneWhen: [
      "Every section has a BrightBrew-specific decision.",
      "Channels share one primary offer and /weekday-lunch (or your named URL).",
      "KPIs, tracking, testing, and optimization are specific enough to run.",
    ],
  },
};

export default digitalMarketingFoundationsModule10;

import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule09: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "analytics-and-marketing-performance",
  moduleNumber: "09",
  title: "Analytics & Marketing Performance",
  estimatedTime: "70–90 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 09 | Analytics | NSL Digital Lab",
    description:
      "Beginner Module 09: KPIs, traffic, users, sessions, engagement, conversion rate, CTR, CPC, CPA, ROAS, Google Analytics basics, and reporting.",
    keywords:
      "marketing KPIs, CTR CPC CPA ROAS explained, conversion rate, Google Analytics beginner, campaign reporting",
    canonical: `${BASE}/analytics-and-marketing-performance`,
  },
  prevModule: {
    href: `${BASE}/email-marketing-and-conversion`,
    label: "Previous: Module 08",
  },
  nextModule: {
    href: `${BASE}/complete-digital-marketing-campaign`,
    label: "Next: Module 10",
  },
  intro: {
    headline: "Learn the numbers — do not memorize definitions",
    body: [
      "Marketing without measurement is guessing. Marketing with the **wrong** numbers is still guessing.",
      `${BRIGHTBREW}. This module teaches you to **calculate** a small set of metrics, read what they mean, and choose an **action** — not to become a data scientist.`,
      "For each metric: simple **formula**, **numeric example**, and **what a marketer does next**.",
    ],
    youWillLearn: [
      "Why measurement matters and how to pick KPIs",
      "Traffic, users, sessions, and engagement",
      "Conversion rate with real arithmetic",
      "CTR, CPC, CPA, and ROAS as a story",
      "Google Analytics basics and short campaign reports",
    ],
  },
  lessons: [
    {
      slug: "why-measurement-and-kpis",
      title: "Why Measurement Matters — and KPIs",
      minutes: "8 min",
      summary:
        "Measurement shows where the leak is. KPIs are the few numbers tied to the goal.",
      blocks: [
        {
          type: "p",
          text: "If BrightBrew “did marketing” and revenue is flat, you cannot tell whether ads failed, the page failed, or the kitchen failed. **Measurement** separates those stories.",
        },
        {
          type: "term",
          term: "KPI",
          meaning:
            "**Key performance indicator** — a number that tells you if the plan is working. Example for orders: **CPA**, landing-page **conversion rate**, weekly **orders**. Likes are not a KPI unless **awareness** was the job.",
        },
        {
          type: "code",
          title: "Pick KPIs before you spend (BrightBrew 30-day lunch campaign)",
          code: `Business goal:     80 weekday lunch orders in 30 days
Marketing KPIs:    Orders (primary)
                   CPA ≤ ₹250 (secondary)
                   Landing conversion rate ≥ 4% (diagnostic)

Not KPIs for this campaign: Total Instagram followers, raw impressions alone`,
        },
        {
          type: "p",
          text: "Write KPIs **before** the campaign. Changing the scoreboard after a bad week is how teams hide.",
        },
        ...lessonClose({
          mistake:
            "Tracking ten vanity metrics but none tied to the campaign goal.",
          takeaway:
            "If a number cannot change a decision (stop, fix, scale), it is trivia — not a KPI.",
          tip:
            "Limit yourself to three KPIs per campaign until reporting feels easy.",
          exerciseSteps: [
            "Write one campaign goal in numbers.",
            "List three KPIs. Cross out any that cannot change a decision.",
          ],
          check: {
            type: "check",
            question: "A KPI should:",
            options: [
              {
                id: "a",
                label: "Help you decide to stop, fix, or scale something",
                correct: true,
              },
              {
                id: "b",
                label: "Be the largest number available, even if unrelated",
                correct: false,
              },
              { id: "c", label: "Stay undefined to avoid accountability", correct: false },
            ],
            explain:
              "KPIs exist for decisions, not decoration.",
          },
        }),
      ],
    },
    {
      slug: "traffic-users-sessions-engagement",
      title: "Traffic, Users, Sessions, Engagement",
      minutes: "11 min",
      summary:
        "These words describe visits and attention — not sales. Learn them with a café story.",
      blocks: [
        {
          type: "p",
          text: "People mix these up. Clear language prevents false celebrations (“traffic doubled!” while orders stayed flat).",
        },
        {
          type: "code",
          title: "Traffic, users, sessions, engagement",
          code: `Metric       Simple formula / idea              Example (BrightBrew week)
-----------  ---------------------------------  ---------------------------
Traffic      Visits to the site (often sessions) 1,200 sessions
Users        Unique people in the period         1,000 users
Sessions     One visit (can be multiple/user)  Priya Mon + Thu = 2 sessions, 1 user
Engagement   Meaningful interaction on site/social Time on page, scroll, clicks, saves

Story: 1,000 users, 1,200 sessions, 40 orders → plenty arriving, few buying.
Action: Do not celebrate traffic until conversions move too.`,
        },
        {
          type: "p",
          text: "When someone says “**traffic** is up,” ask: **Which source?** Did **orders** follow? Tools like **Google Analytics** label these slightly differently over time — the *idea* stays: arrival ≠ purchase.",
        },
        ...lessonClose({
          mistake:
            "Reporting traffic growth alone after a conversion campaign.",
          takeaway:
            "Users and sessions explain arrival; orders explain success.",
          tip:
            "Always pair traffic with source (ads, email, organic) and conversions.",
          exerciseSteps: [
            "Invent: 500 users, 650 sessions, 20 orders. Write one human sentence.",
            "Name one action if orders stay flat while users rise.",
          ],
          check: {
            type: "check",
            question: "More users with no extra orders usually means:",
            options: [
              {
                id: "a",
                label: "More people arrived; the conversion step may be weak",
                correct: true,
              },
              { id: "b", label: "Marketing automatically succeeded", correct: false },
              { id: "c", label: "Sessions cannot exceed users", correct: false },
            ],
            explain:
              "One user can have multiple sessions. Arrival and purchase are different stages.",
          },
        }),
      ],
    },
    {
      slug: "conversion-rate",
      title: "Conversion Rate",
      minutes: "8 min",
      summary:
        "Conversion rate is conversions divided by the chance to convert — name the denominator.",
      blocks: [
        {
          type: "term",
          term: "Conversion rate",
          meaning:
            "**What:** conversions ÷ opportunities × 100. **Why:** measures page and offer quality, not just ad spend. **How:** always state “% of what?”",
        },
        {
          type: "code",
          title: "Conversion rate — formula, example, action",
          code: `Formula:     Conversions ÷ denominator × 100

Example A (site):  40 orders ÷ 1,000 landing sessions = 4.0%
Example B (ads):   20 orders ÷ 200 ad clicks = 10.0%

If you double traffic but rate stays 4% → orders double.
If you fix the page from 2% → 4% → same orders with half the traffic.

Action when rate is low: message match, price on page, mobile CTA, speed, trust (reviews).`,
        },
        ...lessonClose({
          mistake:
            "Quoting “4% conversion” without saying 4% of sessions, clicks, or emails sent.",
          takeaway:
            "Conversion rate is efficiency. Improving it saves ad money.",
          tip:
            "Fix the landing page when CTR is healthy but conversion rate is not.",
          exerciseSteps: [
            "200 clicks, 10 orders — write the conversion rate.",
            "Write one page change that might raise it.",
          ],
          check: {
            type: "check",
            question: "If clicks stay the same and conversion rate rises, you usually:",
            options: [
              {
                id: "a",
                label: "Get more conversions without buying more clicks",
                correct: true,
              },
              { id: "b", label: "Must double ad budget immediately", correct: false },
              { id: "c", label: "Have broken maths", correct: false },
            ],
            explain:
              "That is why landing pages are performance work.",
          },
        }),
      ],
    },
    {
      slug: "ctr-cpc-cpa-roas",
      title: "CTR, CPC, CPA, and ROAS",
      minutes: "14 min",
      summary:
        "Four numbers that tell you if ads are interesting, affordable per click, affordable per result, and profitable.",
      blocks: [
        {
          type: "p",
          text: "Read them as a **story**, not four isolated definitions. BrightBrew spent **₹10,000** in one week — here is how a marketer thinks.",
        },
        {
          type: "code",
          title: "CTR, CPC, CPA, ROAS — each with formula, example, action",
          code: `CTR (click-through rate)
  Formula:  Clicks ÷ Impressions × 100
  Example:  500 clicks ÷ 50,000 impressions = 1.0%
  Action:   Low CTR → test new creative/headline or tighten audience/search match

CPC (cost per click)
  Formula:  Ad spend ÷ Clicks
  Example:  ₹10,000 ÷ 500 = ₹20 per click
  Action:   High CPC with low orders → improve CTR or pause expensive placements

CPA (cost per acquisition / action)
  Formula:  Ad spend ÷ Conversions
  Example:  ₹10,000 ÷ 25 orders = ₹400 CPA
  Action:   Compare CPA to profit per order (not a random blog average)

ROAS (return on ad spend)
  Formula:  Revenue from ads ÷ Ad spend
  Example:  ₹8,000 revenue ÷ ₹10,000 spend = 0.8 ROAS (₹0.80 back per ₹1)
  Action:   ROAS < 1 loses money on ad revenue alone — fix offer, AOV, or targeting

Combo read: High CTR + low conversion → landing page leak.
            Low CTR → ad/creative leak.`,
        },
        ...lessonClose({
          mistake:
            "Celebrating high CTR while CPA and ROAS show the campaign loses money.",
          takeaway:
            "CTR diagnoses the ad; CPA and ROAS diagnose the business outcome.",
          tip:
            "Put all four on one line in your weekly note — arithmetic beats memory.",
          exerciseSteps: [
            "Spend ₹10,000; 50,000 impressions; 500 clicks; 25 orders; ₹8,000 revenue.",
            "Calculate CTR, CPC, CPA, ROAS. Write what you would fix first.",
          ],
          check: {
            type: "check",
            question: "CPA is most useful when compared to:",
            options: [
              {
                id: "a",
                label: "How much a conversion is worth (profit or allowed cost)",
                correct: true,
              },
              { id: "b", label: "Number of fonts on the homepage", correct: false },
              { id: "c", label: "Last year’s weather", correct: false },
            ],
            explain:
              "₹400 CPA is fine if profit per order is ₹600; painful if profit is ₹80.",
          },
        }),
      ],
    },
    {
      slug: "ga-basics",
      title: "Basic Google Analytics Concepts",
      minutes: "9 min",
      summary:
        "Google Analytics (GA) answers where people came from, what they did, and whether they converted.",
      blocks: [
        {
          type: "p",
          text: "You do not need every report. You need **questions** and the report that answers each.",
        },
        {
          type: "code",
          title: "GA ideas mapped to marketer questions",
          code: `Concept          Question it helps answer
---------------  ------------------------------------------
Source / medium  Which channel sent people? (google/cpc, instagram/social)
Landing page     Which first page did they hit? Does it match the ad?
Event / conversion Did they click Order or complete purchase?
Date range       Are we comparing the same days as the ad platform?

BrightBrew after 7-day campaign — ask GA:
1) Sessions from paid social vs email?
2) Did /lunch get 80% of ad landings?
3) How many purchase events fired?`,
        },
        {
          type: "p",
          text: "If Ads Manager says 80 conversions and GA says 20, do not panic-post. Check **date range**, **filters**, and **what each tool counts** as a conversion.",
        },
        ...lessonClose({
          mistake:
            "Opening GA without a question and exporting reports nobody reads.",
          takeaway:
            "Ask a business question first; open the matching report second.",
          tip:
            "Bookmark three views: acquisition, landing page, conversions.",
          exerciseSteps: [
            "Write 3 questions for GA after a 7-day BrightBrew campaign.",
            "Name which GA idea answers each (source, landing page, conversion).",
          ],
          check: {
            type: "check",
            question: "The most useful beginner habit in Analytics is:",
            options: [
              {
                id: "a",
                label: "Ask a business question, then open the matching report",
                correct: true,
              },
              { id: "b", label: "Export everything and read none of it", correct: false },
              { id: "c", label: "Ignore traffic sources", correct: false },
            ],
            explain:
              "Tools answer questions. They do not replace questions.",
          },
        }),
      ],
    },
    {
      slug: "campaign-reporting",
      title: "Campaign Reporting",
      minutes: "9 min",
      summary:
        "A report is a decision memo: goal, results, meaning, next test.",
      blocks: [
        {
          type: "ul",
          items: [
            "Goal vs actual (orders, **CPA**, **ROAS**).",
            "Spend (money + rough hours).",
            "What worked (ad, audience, email).",
            "Likely leak (**CTR** ok but **conversion rate** low → page).",
            "One next test (single variable).",
          ],
        },
        {
          type: "code",
          title: "Good vs weak report (BrightBrew)",
          code: `WEAK:  "Impressions were amazing."

STRONG (example):
  Goal: 80 orders / CPA ≤ ₹250
  Actual: 48 orders, ₹312 CPA, ROAS 0.9
  Spend: ₹15,000 over 7 days
  CTR 3.1% (creative fine) · Landing CVR 2.1% (target 4%)
  Diagnosis: mobile page hid WhatsApp CTA below fold
  Next: move CTA up, retest 7 days, pause Ad set B (high CPA)`,
        },
        ...lessonClose({
          mistake:
            "A 30-slide deck with every column from Ads Manager and no decision.",
          takeaway:
            "Reporting ends with what the owner does Monday — not vanity charts.",
          tip:
            "One paragraph a café owner can forward to their team is enough.",
          exerciseSteps: [
            "Using numbers from the CTR lesson (or new ones), write a 6-line report.",
            "End with one next action and one thing you will not change yet.",
          ],
          check: {
            type: "check",
            question: "A useful campaign report ends with:",
            options: [
              {
                id: "a",
                label: "A decision or next test, not only metrics",
                correct: true,
              },
              {
                id: "b",
                label: "Every possible screenshot from ad platforms",
                correct: false,
              },
              { id: "c", label: "No mention of the original goal", correct: false },
            ],
            explain:
              "Reporting is for decisions.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Marketing performance report",
    goal: "Build a one-page report from realistic numbers (you may invent them) and explain what they mean.",
    starterLabel: "Report template",
    steps: [
      "State the campaign goal and dates.",
      "Fill traffic and ad metrics.",
      "Calculate conversion rate, CTR, CPC, CPA, ROAS.",
      "Write the story in plain language.",
      "Recommend one optimization.",
    ],
    starterCode: `Campaign:
Dates:
Goal:

Spend:
Impressions:
Clicks:
CTR: (clicks/impressions)
CPC: (spend/clicks)
Landing sessions:
Conversions:
Conversion rate:
Revenue:
CPA:
ROAS:

Story in 4 sentences:
What I would change next week:
What I would not change yet:`,
    doneWhen: [
      "Key metrics are calculated, not left blank.",
      "The story names a likely leak (ad vs page vs offer).",
      "There is one next action an owner could approve.",
    ],
  },
};

export default digitalMarketingFoundationsModule09;

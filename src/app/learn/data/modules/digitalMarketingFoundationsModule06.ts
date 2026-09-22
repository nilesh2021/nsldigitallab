import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule06: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "paid-advertising-and-google-ads",
  moduleNumber: "06",
  title: "Paid Advertising & Google Ads",
  estimatedTime: "70–90 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 06 | Google Ads | NSL Digital Lab",
    description:
      "Beginner Module 06: PPC, Google Search campaigns, keywords, ad groups, ad copy, landing pages, bidding, and conversion tracking.",
    keywords:
      "PPC, Google Ads for beginners, search campaigns, ad groups, ad copy, conversion tracking, CPC, paid vs organic acquisition",
    canonical: `${BASE}/paid-advertising-and-google-ads`,
  },
  prevModule: {
    href: `${BASE}/seo-foundations`,
    label: "Previous: Module 05",
  },
  nextModule: {
    href: `${BASE}/social-media-advertising`,
    label: "Next: Module 07",
  },
  intro: {
    headline: "Paid search rents the moment someone is already looking",
    body: [
      `SEO earns visibility over time. **PPC** (pay-per-click) lets BrightBrew appear at the top of Google this week — and pay when someone clicks. That is **paid acquisition**: buying qualified visits on a timeline.`,
      `${BRIGHTBREW}. You will learn structure on paper first — campaign, **ad groups**, **ad copy**, **landing page**, **budget**, **bidding**, **CPC**, and **conversion tracking** — so the live account is not expensive chaos.`,
    ],
    youWillLearn: [
      "Organic vs paid acquisition — when each earns its place",
      "How PPC and Google Search campaigns work",
      "Search intent, keywords, and ad groups",
      "Ad copy and landing pages that match",
      "Targeting, budget, and bidding basics",
      "Conversion tracking and the full click journey",
    ],
  },
  lessons: [
    {
      slug: "organic-vs-paid-acquisition",
      title: "Organic vs Paid Acquisition",
      minutes: "8 min",
      summary:
        "Acquisition means getting customers. Organic earns attention over time. Paid rents it when speed matters.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew’s SMART goal is 80 new weekday lunch orders in 30 days. Organic posts and SEO help, but they rarely move that fast alone. The marketer asks: what must we **pay to rent** this month?",
        },
        {
          type: "term",
          term: "Acquisition",
          meaning:
            "**What:** getting new customers or orders. **Organic acquisition** uses SEO, content, unpaid social. **Paid acquisition** uses ads where you pay for visibility or clicks. **Why:** timelines and competition differ. **How:** use organic for compounding trust; use paid when the calendar demands results and the offer page is ready.",
        },
        {
          type: "p",
          text: "**Real example:** Module 05 grows **organic traffic** to the lunch page. Module 06 runs **Google Ads** on “office lunch cyber park” while SEO climbs — same promise on the **landing page**.",
        },
        {
          type: "p",
          text: "**Marketer use:** report channel mix to the owner; avoid pretending organic is “free” (it costs time); never send paid clicks to a homepage that hides the bowl offer.",
        },
        {
          type: "code",
          title: "Organic vs paid (BrightBrew 30-day goal)",
          code: `| Factor           | Organic                 | Paid (PPC)                  |
|------------------|-------------------------|-----------------------------|
| Speed            | Weeks to months         | Days (if page converts)     |
| Cost             | Time, content, SEO      | Budget + management time    |
| Control          | Less precise timing     | On/off, budget caps         |
| When to lean in  | Long-term findability   | 80 orders in 30 days push   |`,
        },
        ...lessonClose({
          mistake:
            "Turning on ads before the offer and landing page exist. You rent confusion at full price.",
          takeaway:
            "Mature plans use both. Choose paid when qualified attention must arrive on a deadline.",
          tip: "Write one sentence: what we pay for this month (clicks, leads, orders).",
          exerciseSteps: [
            "Write when BrightBrew should choose paid this month.",
            "Write when organic/SEO should lead for 90 days.",
            "Name the landing page URL paid traffic should hit.",
          ],
          check: {
            type: "check",
            question: "Paid acquisition is most useful when:",
            options: [
              {
                id: "a",
                label: "You need qualified attention on a timeline ads can serve",
                correct: true,
              },
              { id: "b", label: "You have no offer and no page", correct: false },
              {
                id: "c",
                label: "You want to avoid measuring anything",
                correct: false,
              },
            ],
            explain:
              "Speed is the point. A broken page makes speed expensive.",
          },
        }),
      ],
    },
    {
      slug: "ppc-and-google-ads",
      title: "PPC and Google Ads Fundamentals",
      minutes: "10 min",
      summary:
        "PPC means you usually pay when someone clicks. Google Ads runs Search campaigns when people type buying-intent queries.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** Priya searches “healthy lunch near Cyber Park.” At the top she may see **Google Ads** text listings. BrightBrew bids to show there. If she clicks, BrightBrew pays — that is **PPC**.",
        },
        {
          type: "term",
          term: "PPC (Pay-Per-Click)",
          meaning:
            "**What:** advertising where you typically pay when someone clicks your ad (other billing models exist, but search beginners start here). **Why:** you buy intent at the moment of search. **How:** set keywords, write ads, choose a **landing page**, set **budget** and **bids**.",
        },
        {
          type: "term",
          term: "Google Ads & Search Campaigns",
          meaning:
            "**What:** Google’s ads platform. A **Search campaign** shows text ads on Google search results. **Why:** capture **do** and **go** intent queries. **How:** structure campaign → **ad groups** → keywords + ads → landing page → **conversion tracking**.",
        },
        {
          type: "term",
          term: "CPC (Cost Per Click)",
          meaning:
            "**What:** ad spend divided by clicks. Example: ₹4,000 spend ÷ 500 clicks = ₹8 **CPC**. **Why:** compares keyword efficiency. **How:** improve relevance, Quality Score factors, and landing page match to avoid overpaying for weak clicks.",
        },
        {
          type: "p",
          text: "**Marketer use:** Search **PPC** complements SEO — ads for speed, SEO for compounding **organic traffic** on the same keywords over time.",
        },
        {
          type: "code",
          title: "BrightBrew paid journey (overview — numbers are illustrative)",
          code: `Ad shown     | Search: "office lunch cyber park" — BrightBrew headline
Click        | Priya taps ad → you pay CPC (example ₹8)
Landing page | Same promise: bowls, ₹199, 8 min, WhatsApp CTA
Conversion   | Priya taps WhatsApp = counted lead (example)
Measurement  | 500 clicks × ₹8 = ₹4,000 spend | 25 leads → cost/lead ₹160`,
        },
        ...lessonClose({
          mistake:
            "Watching only “impressions” and feeling successful. Clicks cost money; business results matter.",
          takeaway:
            "PPC = pay for clicks toward a defined action on a matched landing page.",
          tip: "Search ads love queries that already contain need — “lunch near [area],” not “coffee vibes.”",
          exerciseSteps: [
            "Google a local service. Describe one Search ad you see.",
            "Write whether the headline matches the query.",
            "Guess what action the advertiser wants on the landing page.",
          ],
          check: {
            type: "check",
            question: "In classic search PPC you usually pay when:",
            options: [
              { id: "a", label: "Someone clicks the ad", correct: true },
              { id: "b", label: "You think about advertising", correct: false },
              { id: "c", label: "Google likes your logo color", correct: false },
            ],
            explain:
              "That is why landing pages and conversion tracking are not optional.",
          },
        }),
      ],
    },
    {
      slug: "keywords-ad-groups-intent",
      title: "Search Intent, Keywords, and Ad Groups",
      minutes: "11 min",
      summary:
        "Group similar keywords so ad copy can mirror the search. Intent keeps spend on orders, not curiosity.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew dumps 200 keywords into one ad group with one generic ad. Priya searches “vegetarian office lunch cyber park” and sees an ad about “artisan coffee.” She clicks out. Money wasted.",
        },
        {
          type: "p",
          text: "**Search intent** in ads matches Module 05: **know**, **do**, **go**. Search campaigns usually target **do** and **go** — people ready to order or find you.",
        },
        {
          type: "term",
          term: "Ad Groups",
          meaning:
            "**What:** themed folders inside a campaign — each with its own keywords and ads. **Why:** message match raises clicks that convert and lowers junk traffic. **How:** one theme per group (office lunch bowls ≠ wedding cake).",
        },
        {
          type: "ul",
          items: [
            "**Campaign** = budget, location, goal (BrightBrew Lunch — 30 days).",
            "**Ad group** = one theme (healthy bowls / vegetarian lunch / brand name).",
            "**Keywords** = searches you want to trigger ads.",
            "Add **negative keywords** later (jobs, free recipes, wrong cities).",
          ],
        },
        {
          type: "p",
          text: "**BrightBrew starter structure:** 1 campaign, 2–3 ad groups, 5–10 keywords each — not a junk drawer.",
        },
        {
          type: "code",
          title: "Sample ad groups (BrightBrew Search campaign)",
          code: `Campaign: BrightBrew Weekday Lunch | Location: 3 km radius
Ad group 1 "Office lunch bowls" | office lunch cyber park | healthy lunch bowl near me
Ad group 2 "Vegetarian lunch"   | veg office lunch gurgaon | jain lunch near cyber park
Ad group 3 "Brand"              | brightbrew cafe          | brightbrew lunch menu`,
        },
        ...lessonClose({
          mistake:
            "One ad group for every product you have ever sold. Start tight; expand with data.",
          takeaway:
            "Ad groups keep keywords and ad copy tightly themed for intent.",
          tip: "Read each keyword aloud. If your ad sounds weird, move it or delete it.",
          exerciseSteps: [
            "Write 2 ad group names for BrightBrew.",
            "List 5 keywords under each — no mixing unrelated themes.",
            "List 3 negative keywords you expect (jobs, free, wrong area).",
          ],
          check: {
            type: "check",
            question: "Ad groups exist so that:",
            options: [
              {
                id: "a",
                label: "Keywords and ads stay tightly themed and relevant",
                correct: true,
              },
              { id: "b", label: "You can hide from conversion tracking", correct: false },
              {
                id: "c",
                label: "Google can ignore your landing page",
                correct: false,
              },
            ],
            explain:
              "Relevance lowers wasted clicks and usually improves results.",
          },
        }),
      ],
    },
    {
      slug: "ad-copy-and-landing-pages",
      title: "Ad Copy and Landing Pages",
      minutes: "10 min",
      summary:
        "The ad promises. The landing page must keep that promise in five seconds on mobile.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** Priya clicks because the ad says “Ready in 8 minutes.” The page is a slow blog about coffee origins. She leaves. **Message match** is where beginners leak **PPC** budget.",
        },
        {
          type: "term",
          term: "Ad Copy",
          meaning:
            "**What:** headlines and descriptions in the ad. **Why:** earns the click and sets expectation. **How:** include keyword idea, offer, proof (speed, price, area), and a hint of the **CTA** — aligned with the **landing page** H1.",
        },
        {
          type: "term",
          term: "Landing Page",
          meaning:
            "**What:** the URL after the click — built for one primary action. **Why:** Google and Priya reward relevance; you pay for clicks that should convert. **How:** same headline promise as the ad, fast mobile load, visible price, one order path.",
        },
        {
          type: "p",
          text: "**BrightBrew match:** **Ad:** “Office Lunch Bowls Near Cyber Park — Ready in 8 Min — From ₹199.” **Landing page H1:** same idea, bowl photos, WhatsApp button above the fold.",
        },
        {
          type: "p",
          text: "**Marketer use:** write the landing page first, then draft the ad as a trailer. Use the same module 05 on-page checklist for SEO pages used as ad destinations.",
        },
        {
          type: "code",
          title: "Match vs mismatch",
          code: `| Element      | Good match                    | Bad mismatch              |
|--------------|-------------------------------|---------------------------|
| Ad headline  | 8-min office lunch bowls      | Best coffee in India      |
| Page H1      | Weekday bowls near Cyber Park | 2019 blog about beans     |
| CTA          | Order on WhatsApp             | Hidden contact form page 5|`,
        },
        ...lessonClose({
          mistake:
            "Sending all ads to the homepage. Use a dedicated lunch **landing page**.",
          takeaway:
            "Ad copy + landing page = one promise, one action, mobile-fast proof.",
          tip: "Screenshot ad and page side by side. If promises differ, fix before spending.",
          exerciseSteps: [
            "Write 3 headlines + 2 descriptions for one ad group.",
            "Write the landing page H1 and primary CTA to match.",
            "List one proof element (photo, review, timer) above the fold.",
          ],
          check: {
            type: "check",
            question: "The landing page should:",
            options: [
              {
                id: "a",
                label: "Repeat the ad’s promise and make the action easy",
                correct: true,
              },
              {
                id: "b",
                label: "Talk about a completely different product",
                correct: false,
              },
              {
                id: "c",
                label: "Hide the price after a 12-step maze",
                correct: false,
              },
            ],
            explain:
              "Message match is a conversion skill, not decoration.",
          },
        }),
      ],
    },
    {
      slug: "targeting-budget-bidding",
      title: "Targeting, Budget, and Bidding Basics",
      minutes: "9 min",
      summary:
        "Targeting limits who can see ads. Budget caps spend. Bidding chooses how you compete in the auction for clicks.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew sets a ₹5,000/day budget by mistake and shows lunch ads nationwide. Clicks arrive from cities Priya does not live in. **Targeting** and **budget** exist to prevent that.",
        },
        {
          type: "term",
          term: "Targeting (Search)",
          meaning:
            "**What:** mainly keywords + geography + language (+ schedule optional). **Why:** local cafés need local clicks. **How:** radius around Cyber Park, Hindi/English as appropriate, exclude areas you cannot deliver to.",
        },
        {
          type: "term",
          term: "Budget",
          meaning:
            "**What:** daily spend cap (example ₹500/day). **Why:** prevents runaway costs while learning. **How:** monthly ≈ daily × 30.4; adjust after you see **CPC** and conversions.",
        },
        {
          type: "term",
          term: "Bidding",
          meaning:
            "**What:** how you tell Google what to optimize in the ad auction. **Why:** beginners need guardrails before chasing fancy strategies. **How:** often start with max clicks or max **CPC** cap; move toward conversion-based bidding once **conversion tracking** works.",
        },
        {
          type: "p",
          text: "**Economics:** if average lunch profit is ₹70, a ₹40 **CPC** click that never converts hurts. Budget is not “spend it all” — it is “buy enough data to learn without sinking the café.”",
        },
        {
          type: "code",
          title: "BrightBrew starter settings (example)",
          code: `Daily budget     | ₹500/day (~₹15,200/month)
Location         | 3 km around café + office parks
Language         | English + Hindi (match customer base)
Bidding (start)  | Max CPC cap ₹12 while learning
Review day 7     | Search terms, CTR, CPC, conversions`,
        },
        ...lessonClose({
          mistake:
            "No budget cap or nationwide targeting for a walk-in lunch offer.",
          takeaway:
            "Targeting + budget + bidding = control who sees ads, how much you spend, and how you compete.",
          tip: "Location radius saves small businesses more than clever adjectives.",
          exerciseSteps: [
            "Set a daily budget you could defend to the café owner.",
            "Write location radius and why.",
            "Write your max CPC cap and what would make you lower it.",
          ],
          check: {
            type: "check",
            question: "For a local café Search campaign, a critical targeting choice is:",
            options: [
              {
                id: "a",
                label: "A sensible geographic radius plus relevant keywords",
                correct: true,
              },
              {
                id: "b",
                label: "Showing ads worldwide to build brand",
                correct: false,
              },
              { id: "c", label: "Bidding with no budget cap", correct: false },
            ],
            explain:
              "Local intent dies if you pay for clicks hundreds of kilometres away.",
          },
        }),
      ],
    },
    {
      slug: "conversion-tracking",
      title: "Conversion Tracking",
      minutes: "8 min",
      summary:
        "A conversion is the action you wanted. Tracking connects ads to orders, leads, or calls — not just clicks.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew spends ₹4,000 in a week on **Google Ads**. The dashboard shows 500 clicks. The owner asks: “How many lunches did we sell?” Without **conversion tracking**, the marketer only shrugs.",
        },
        {
          type: "term",
          term: "Conversion",
          meaning:
            "**What:** the valuable action — purchase, booking, form submit, WhatsApp click, call. **Why:** clicks are mid-funnel; the business pays for outcomes. **How:** define one primary conversion before launching.",
        },
        {
          type: "term",
          term: "Conversion Tracking",
          meaning:
            "**What:** recording those actions in Google Ads / Analytics (tag, thank-you page, or counted button click). **Why:** you optimize **budget**, **bidding**, and keywords on results, not vanity **CPC**. **How:** implement tag or use a counted proxy (WhatsApp button) and know its limits.",
        },
        {
          type: "p",
          text: "**BrightBrew proxy:** count “WhatsApp order button clicks” as a lead if full order tracking is not ready — imperfect but better than blind spend. Pair with coupon code LUNCH80 in-store when possible.",
        },
        {
          type: "code",
          title: "Journey: Ad → Click → Landing Page → Conversion → Measurement",
          code: `Step | Stage           | BrightBrew example (illustrative)
-----|-----------------|------------------------------------------
  1  | Ad              | "Office lunch bowls — 8 min — from ₹199"
  2  | Click           | 500 clicks × ₹8 CPC = ₹4,000 ad spend
  3  | Landing page    | Priya sees bowls + WhatsApp CTA in 3 sec
  4  | Conversion      | 25 WhatsApp taps (= 25 tracked leads)
  5  | Measurement     | Cost/lead = ₹4,000 ÷ 25 = ₹160
     | Business check  | If 10 leads → 4 orders × ₹220 ≈ ₹880 revenue
     |                 | Compare to ad spend; improve page or keywords`,
        },
        {
          type: "p",
          text: "**Marketer use:** weekly search term reviews cut waste; conversion data tells you which **ad groups** deserve more **budget**. Remember: conversion action primary/secondary settings in Google Ads UI are manual today — plan what you count.",
        },
        ...lessonClose({
          mistake:
            "Launching with “we will see what happens.” Decide the conversion before you spend.",
          takeaway:
            "Track the business action, not only clicks. The five-step journey turns spend into learning.",
          tip: "Even a unique coupon code tracked at the counter beats zero measurement.",
          exerciseSteps: [
            "Name BrightBrew’s primary conversion for Search ads.",
            "Write how you would track it with and without fancy tools.",
            "Write what decision you would make if cost/lead is ₹160 but only 1 in 6 leads orders.",
          ],
          check: {
            type: "check",
            question: "Without conversion tracking, Google Ads mainly tells you:",
            options: [
              {
                id: "a",
                label: "Clicks and cost — not whether the business result happened",
                correct: true,
              },
              {
                id: "b",
                label: "Exact lifetime profit of every guest",
                correct: false,
              },
              { id: "c", label: "Nothing at all, even clicks", correct: false },
            ],
            explain:
              "Clicks are a step. Conversions are the job. Track the job.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Google Search campaign structure",
    goal: "Design a simple Search campaign on paper: campaign, ad groups, keywords, ads, landing page, budget, conversion.",
    starterLabel: "Campaign structure sheet",
    steps: [
      "Write the objective and location.",
      "Create 2–3 themed ad groups.",
      "List 5–8 keywords per group.",
      "Write 3 headlines and 2 descriptions per group.",
      "Describe the landing page and conversion.",
      "Set a daily budget and a learning note (what you will check after 7 days).",
    ],
    starterCode: `Campaign name:
Objective:
Location / language:
Daily budget:
Conversion we will count:

AD GROUP 1 name:
Keywords:
Headlines (3):
Descriptions (2):
Landing page URL + H1:

AD GROUP 2:
(same fields)

Journey check (fill with your numbers):
Clicks × CPC = spend
Conversions = ?
Cost/conversion = spend ÷ conversions

What I will review after 7 days (search terms, CTR, conversions):
Negatives I already expect (jobs, recipes, another city):`,
    doneWhen: [
      "Ad groups are themed, not one junk drawer.",
      "Ads match keywords and the landing page promise.",
      "A conversion definition, budget, and measurement math exist.",
    ],
  },
};

export default digitalMarketingFoundationsModule06;

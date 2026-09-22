import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule07: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "social-media-advertising",
  moduleNumber: "07",
  title: "Social Media Advertising",
  estimatedTime: "60–80 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 07 | Paid Social | NSL Digital Lab",
    description:
      "Beginner Module 07: organic vs paid social, objectives, targeting, creatives, copy, CTAs, landing pages, retargeting, A/B tests, and performance.",
    keywords:
      "paid social ads, Meta ads beginner, audience targeting, retargeting, A/B testing ads, ad creative, campaign objectives",
    canonical: `${BASE}/social-media-advertising`,
  },
  prevModule: {
    href: `${BASE}/paid-advertising-and-google-ads`,
    label: "Previous: Module 06",
  },
  nextModule: {
    href: `${BASE}/email-marketing-and-conversion`,
    label: "Next: Module 08",
  },
  intro: {
    headline: "Paid social puts your offer in front of people who are scrolling — not searching",
    body: [
      "Google catches **intent** (“lunch near me”). Instagram and Facebook catch **attention** — Priya is on her phone after a long meeting, sees a bowl, and thinks about tomorrow’s lunch.",
      `${BRIGHTBREW}. This module teaches **paid social**: pick an **objective**, choose an **audience**, ship a **creative** with a clear **CTA**, send clicks to a matching **landing page**, then use **retargeting**, **A/B testing**, and **metrics** to improve.`,
      "You already practised organic posts in Module 04. Paid social is when you budget to show the best message to the right people on purpose.",
    ],
    youWillLearn: [
      "When organic is enough vs when to pay",
      "Boost post vs a structured campaign (and why it matters)",
      "How campaign objectives guide the algorithm",
      "Targeting, creative, copy, CTA, and landing page as one system",
      "Retargeting, A/B tests, and which metrics to read",
    ],
  },
  lessons: [
    {
      slug: "organic-vs-paid-social",
      title: "Organic vs Paid Social",
      minutes: "8 min",
      summary:
        "Organic builds trust over time. Paid social buys reach and structure when you have an offer and a page ready.",
      blocks: [
        {
          type: "p",
          text: "**Organic social** is what you post for free: Reels, stories, photos. The platform shows it to some followers — and fewer over time as feeds get crowded.",
        },
        {
          type: "p",
          text: "**Paid social** is advertising inside the app (Meta Ads for Instagram/Facebook, etc.). You choose **budget**, **objective**, **audience**, and **creative**. You pay for impressions or results depending on settings.",
        },
        {
          type: "p",
          text: "A Reel that gets 2,000 views organically is a signal: people stopped scrolling. That does not guarantee 80 lunch orders. **Paid** lets you show a proven message to 10,000 nearby office workers — if you have something clear to sell.",
        },
        {
          type: "code",
          title: "Boost post vs structured campaign (beginner comparison)",
          code: `| Question              | Boost post (quick)     | Structured campaign (Ads Manager) |
|-----------------------|------------------------|-----------------------------------|
| Best for              | One-off push on a post | Weekly/monthly goals with learning |
| Objective             | Often vague ("more reach") | You pick: traffic, leads, sales |
| Audience control      | Limited presets        | Geo, interests, custom, retargeting |
| Creative testing      | Usually one post       | Multiple ads, A/B tests           |
| Landing destination   | Easy to forget         | You choose URL per ad             |
| Reporting             | Basic                  | Breakdown by ad, audience, placement |
| Beginner risk         | Paying to amplify weak posts | More setup, but you learn faster |

BrightBrew rule: boost only after the post already has a CTA and offer ON the image.
Otherwise, build a small campaign with objective + geo + one landing page.`,
        },
        {
          type: "ul",
          items: [
            "Use **organic** to test hooks: which photo gets saves and DMs?",
            "Turn winners into **ads** with a real **objective** and **landing page**.",
            "Do not boost a “good morning café vibes” post and call it performance marketing.",
          ],
        },
        ...lessonClose({
          mistake:
            "Hitting Boost on every post without an offer, audience, or destination page — then blaming “ads don’t work.”",
          takeaway:
            "Organic tests ideas; paid social scales ideas that already have objective + audience + offer + page.",
          tip:
            "Before spending ₹1, ask: What should someone do after they stop scrolling?",
          exerciseSteps: [
            "Pick one organic post that could become an ad. Write what is missing (price? CTA? URL?).",
            "Decide: quick boost or structured campaign — and write one sentence why.",
          ],
          check: {
            type: "check",
            question: "Paid social works best when you already have:",
            options: [
              {
                id: "a",
                label: "An objective, audience, offer, and landing page",
                correct: true,
              },
              {
                id: "b",
                label: "No creative and no idea who the customer is",
                correct: false,
              },
              {
                id: "c",
                label: "Only a logo and generic vibes",
                correct: false,
              },
            ],
            explain:
              "Money amplifies a system. It does not replace thinking.",
          },
        }),
      ],
    },
    {
      slug: "campaign-objectives",
      title: "Campaign Objectives",
      minutes: "9 min",
      summary:
        "The objective tells the platform what “success” means — awareness, traffic, leads, or purchases.",
      blocks: [
        {
          type: "term",
          term: "Campaign objective",
          meaning:
            "**What:** the goal you select when you create a campaign (examples: awareness, traffic, engagement, leads, sales/conversions). **Why:** platforms optimize delivery toward people likely to complete that action. **How:** match the objective to the **funnel stage** — do not pick “awareness” if this week’s job is lunch orders.",
        },
        {
          type: "ul",
          items: [
            "**Awareness:** more people know BrightBrew exists. Good for a brand-new location — not a complete sales plan alone.",
            "**Traffic:** clicks to the site or menu. Good when **conversion tracking** is still being set up.",
            "**Engagement:** comments, saves, messages. Good for community — watch that engagement is not hiding zero orders.",
            "**Leads:** form fills, WhatsApp opt-ins. Good when you nurture by email or chat.",
            "**Sales / conversions:** orders or purchases on the site. Good when the pixel or events track checkout reliably.",
          ],
        },
        {
          type: "p",
          text: "Week 1 at BrightBrew: if the order page is new, **traffic** to a clear lunch page plus manual WhatsApp orders can be honest. Week 3: switch toward **conversions** when tracking proves clicks become bowls.",
        },
        {
          type: "p",
          text: "**One campaign, one main job.** Mixing “get famous” and “get 80 orders” in one stew confuses your reports and the algorithm’s learning.",
        },
        ...lessonClose({
          mistake:
            "Choosing “awareness” for a conversion goal, then complaining that ad spend did not produce orders.",
          takeaway:
            "Objective = the scoreboard the platform optimizes for. Pick the scoreboard that matches the business goal.",
          tip:
            "Write the funnel stage on paper before opening Ads Manager: unaware → considering → ready to order.",
          exerciseSteps: [
            "State BrightBrew’s goal for the next 14 days (example: 60 weekday lunch orders).",
            "Pick one objective and explain in one sentence why it fits this week.",
          ],
          check: {
            type: "check",
            question: "If the goal is paid lunch orders this month, the weakest default is usually:",
            options: [
              {
                id: "a",
                label: "Awareness only, with no path to order",
                correct: true,
              },
              {
                id: "b",
                label: "Conversions or traffic to an order page",
                correct: false,
              },
              {
                id: "c",
                label: "Leads if you collect opt-ins to remind people",
                correct: false,
              },
            ],
            explain:
              "Awareness can be a step. It is not a conversion plan by itself.",
          },
        }),
      ],
    },
    {
      slug: "audience-targeting",
      title: "Audience Targeting",
      minutes: "9 min",
      summary:
        "Targeting defines who is eligible to see the ad — location, interests, your lists, or people who already visited.",
      blocks: [
        {
          type: "p",
          text: "**Audience targeting** is not “finding perfect humans.” It is narrowing delivery so lunch ads do not show to people 40 km away.",
        },
        {
          type: "ul",
          items: [
            "**Geography:** radius around BrightBrew (example: 3–5 km). Non-negotiable for a walk-in lunch café.",
            "**Demographics:** age or gender only when it truly changes the offer. Use lightly.",
            "**Interests / behaviors:** “food & drink,” “office worker” — helpful guesses, not magic.",
            "**Custom audiences:** website visitors, Instagram engagers, customer list uploads (with permission).",
            "**Lookalike / similar audiences:** later, when you have enough real customers to model from.",
          ],
        },
        {
          type: "p",
          text: "Beginners often **over-target**: “women 26–27 who like millet and jazz.” Start **broader inside the right city radius** with a strong **creative** (bowl + price + 8-minute promise). Then **exclude** staff or existing daily regulars if the campaign is for *new* guests.",
        },
        {
          type: "code",
          title: "BrightBrew starter audience (example)",
          code: `Primary audience:
  Location: 4 km around café pin
  Age: 22–45 (optional broad band)
  Interests: food delivery, healthy eating (1–2 only)

Exclusions:
  People who already purchased (custom list) — if goal is new customers
  Employees (email list)

Why this works: geo does the heavy lifting; creative does the selling.`,
        },
        ...lessonClose({
          mistake:
            "Targeting India-wide “for reach” on a single-location café — paying for clicks that can never visit.",
          takeaway:
            "For local businesses, geography is the first filter; creative is the second.",
          tip:
            "A sharp photo with ₹199 on the image beats a perfect interest stack with a blurry bowl.",
          exerciseSteps: [
            "Write primary audience: location + one extra signal (interest or job area).",
            "Write who you would exclude and why.",
          ],
          check: {
            type: "check",
            question: "For a local lunch café, the first targeting filter should be:",
            options: [
              {
                id: "a",
                label: "Geography someone could realistically visit from work",
                correct: true,
              },
              { id: "b", label: "Entire country for maximum reach", correct: false },
              { id: "c", label: "Only people with a specific first name", correct: false },
            ],
            explain:
              "If they cannot walk or commute to you, the click is usually waste.",
          },
        }),
      ],
    },
    {
      slug: "creative-copy-cta-page",
      title: "Creatives, Copy, CTA, and Landing Pages",
      minutes: "11 min",
      summary:
        "The thumb stops for the image. Copy supports. The CTA directs. The landing page finishes the job.",
      blocks: [
        {
          type: "p",
          text: "On social, you **interrupt** someone’s scroll. You earn the stop in about two seconds — often **on mute** for video.",
        },
        {
          type: "ul",
          items: [
            "**Ad creative:** image or video. Show the bowl, portion, price, and speed (“ready in 8 min”). Text on the image matters because many never read the caption.",
            "**Ad copy:** one problem, one proof, one offer. Short lines on mobile. Example: “Skip the canteen queue. Millet bowl ₹199. Order before 11:30.”",
            "**CTA (call to action):** button text — Order now, Send message, Learn more. Must match what happens next.",
            "**Landing page:** same offer as the ad. Bowl ad → bowl page with price and order button — not a generic homepage.",
          ],
        },
        {
          type: "code",
          title: "One ad → one page (message match)",
          code: `CREATIVE (on image):  Millet power bowl · ₹199 · Ready in 8 min
PRIMARY TEXT:           Office lunch without the food coma. Pick up or desk delivery nearby.
CTA BUTTON:             Order now
LANDING H1:             Weekday bowls from ₹199 — ready in 8 minutes
LANDING CTA:            Order on WhatsApp / Pick up today

If any row disagrees with the others, conversion rate suffers.`,
        },
        {
          type: "p",
          text: "**Message match** is the rule you learned for Google Ads (Module 06). It applies twice as hard on social, where attention is thinner.",
        },
        ...lessonClose({
          mistake:
            "Beautiful lifestyle photos with no price, no product, and a CTA that lands on the homepage.",
          takeaway:
            "Creative sells the stop; copy sells the click; the landing page sells the order.",
          tip:
            "Read the ad on your phone without sound. If the offer is unclear, fix the creative before the caption.",
          exerciseSteps: [
            "Describe one image (what is on screen, including price).",
            "Write 3 lines of primary text + CTA button label.",
            "Write the landing page H1 it must match.",
          ],
          check: {
            type: "check",
            question: "On paid social, the creative should:",
            options: [
              {
                id: "a",
                label: "Show the offer clearly even if nobody reads the caption",
                correct: true,
              },
              { id: "b", label: "Hide the product to create mystery", correct: false },
              { id: "c", label: "Always be a 4-minute talking-head video", correct: false },
            ],
            explain:
              "Thumbs move fast. Clarity on the visual is a core performance skill.",
          },
        }),
      ],
    },
    {
      slug: "retargeting",
      title: "Retargeting",
      minutes: "8 min",
      summary:
        "Retargeting shows ads to people who already interacted — visited, watched, engaged, or almost ordered.",
      blocks: [
        {
          type: "term",
          term: "Retargeting",
          meaning:
            "**What:** ads aimed at **warm** audiences who know you a little. **Why:** first visits rarely convert; a helpful reminder can. **How:** install a **pixel** or use platform engagement lists, then show a *different* message than cold prospects.",
        },
        {
          type: "ul",
          items: [
            "Website visitors last 7 days who did not order.",
            "Instagram profile visitors or video viewers at 50%+.",
            "People who clicked but bounced from the menu page.",
          ],
        },
        {
          type: "p",
          text: "Do not retarget with the **identical** first-time ad forever. Change the angle: social proof (“4.8★ from Cyber Park teams”), urgency (“Today’s special ends 2 p.m.”), or friction removal (“Tap to order on WhatsApp — 3 taps”).",
        },
        {
          type: "p",
          text: "Watch **frequency** (how many times one person sees the ad). Very high frequency with no conversions often means annoyance, not persuasion.",
        },
        ...lessonClose({
          mistake:
            "Running retargeting before any cold traffic — or stalking people with the same ad 40 times in a week.",
          takeaway:
            "Retargeting is a second conversation. Bring a new reason to act, not a replay.",
          tip:
            "Cap frequency when the platform allows, and refresh creative every 1–2 weeks.",
          exerciseSteps: [
            "Define one retargeting audience (example: visited /lunch, 7 days, no purchase).",
            "Write a new headline that is NOT the same as your prospecting ad.",
          ],
          check: {
            type: "check",
            question: "Retargeting usually works better because:",
            options: [
              {
                id: "a",
                label: "Those people already showed some interest",
                correct: true,
              },
              {
                id: "b",
                label: "Strangers always prefer repeated ads",
                correct: false,
              },
              {
                id: "c",
                label: "It replaces having a landing page",
                correct: false,
              },
            ],
            explain:
              "Warm audiences convert more cheaply when the follow-up message is useful.",
          },
        }),
      ],
    },
    {
      slug: "testing-and-performance",
      title: "A/B Testing and Ad Performance",
      minutes: "9 min",
      summary:
        "A/B testing compares one change at a time. Performance metrics tell you if the objective was achieved at an acceptable cost.",
      blocks: [
        {
          type: "term",
          term: "A/B testing",
          meaning:
            "Version A vs version B with **one main variable** (different image, OR different headline — not both at once if you want a clean lesson). Keep audience and budget similar. Wait for enough data before picking a winner.",
        },
        {
          type: "p",
          text: "**Ad performance** is not “likes.” Ask: Did we hit the **objective**? What did each result cost? Which **ad** and **audience** won? Did people **convert** on the page?",
        },
        {
          type: "code",
          title: "Metrics beginners should read (paid social)",
          code: `Metric          Formula (idea)              Example              If bad, marketer often…
--------------  --------------------------  -------------------  ---------------------------------
Impressions     Times ad was shown          50,000               Check delivery / budget / geo
CTR             Clicks ÷ impressions × 100  200÷10,000 = 2%      Test new creative or audience
CPC             Spend ÷ clicks              ₹6,000÷200 = ₹30     Tighten targeting; improve CTR
Conv. rate      Orders ÷ clicks × 100       20÷200 = 10%         Fix landing page / offer match
CPA             Spend ÷ conversions         ₹6,000÷20 = ₹300     Compare to profit per order
ROAS            Revenue ÷ ad spend          ₹8,000÷₹6,000 = 1.33 Scale only if profit-positive`,
        },
        {
          type: "p",
          text: "High **CTR** + low **conversion rate** often means the **landing page** or offer is the leak. Low **CTR** usually means **creative** or **audience** mismatch. A pretty ad with terrible **CPA** is not a win.",
        },
        ...lessonClose({
          mistake:
            "Changing image, audience, offer, and landing page on the same day — then not knowing what helped.",
          takeaway:
            "Test one lever at a time. Pair CTR with CPA or ROAS so you do not celebrate clicks that lose money.",
          tip:
            "Test the picture before rewriting the tenth line of caption. On social, creative is usually the biggest lever.",
          exerciseSteps: [
            "Write A vs B with only one variable (example: bowl top-down vs bowl in hand).",
            "Write your decision rule (example: lower CPA after 50 clicks each).",
          ],
          check: {
            type: "check",
            question: "A fair A/B test usually changes:",
            options: [
              {
                id: "a",
                label: "One main thing at a time so you know what worked",
                correct: true,
              },
              {
                id: "b",
                label: "Audience, image, offer, and page all at once",
                correct: false,
              },
              { id: "c", label: "Nothing — then guess", correct: false },
            ],
            explain:
              "If everything changes, you learn nothing. Learning is what small test budgets buy.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Sample paid social campaign",
    goal: "Plan a Meta-style campaign (Instagram/Facebook) on paper for BrightBrew or a small local business.",
    starterLabel: "Paid social brief",
    steps: [
      "Pick objective and funnel stage.",
      "Define geo audience + exclusions.",
      "Write primary creative, copy, CTA, landing page.",
      "Add a retargeting idea with a new message.",
      "Define one-variable A/B test and success metric (CPA or purchases).",
      "Set a 7-day budget and a kill rule.",
    ],
    starterCode: `Campaign name:
Objective:
Funnel stage:
Geo / audience:
Exclusions:
Offer:
Creative (what is on screen):
Primary text:
CTA:
Landing page URL + H1:
Retargeting audience + new message:
A/B test (one variable):
7-day budget:
KPI (CPA / purchases / leads):
Kill rule (when I pause an ad):`,
    doneWhen: [
      "Objective matches the funnel stage.",
      "Geo is realistic for the business.",
      "Creative, page, retargeting, and a single-variable test are written.",
    ],
  },
};

export default digitalMarketingFoundationsModule07;

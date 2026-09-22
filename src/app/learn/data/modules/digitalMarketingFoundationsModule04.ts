import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule04: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "content-marketing-and-social-media",
  moduleNumber: "04",
  title: "Content Marketing & Social Media",
  estimatedTime: "60–80 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 04 | Content & Social | NSL Digital Lab",
    description:
      "Beginner Module 04: content marketing, pillars, organic social strategy, calendars, writing posts, engagement, CTAs, and repurposing.",
    keywords:
      "content marketing, content pillars, social media strategy, content calendar, CTA, content repurposing, organic social",
    canonical: `${BASE}/content-marketing-and-social-media`,
  },
  prevModule: {
    href: `${BASE}/digital-marketing-strategy`,
    label: "Previous: Module 03",
  },
  nextModule: {
    href: `${BASE}/seo-foundations`,
    label: "Next: Module 05",
  },
  intro: {
    headline: "Content is how you stay useful between ads",
    body: [
      `Strategy told BrightBrew who to reach and what result to chase. Module 04 is **Attract + Engage**: publishing useful posts, videos, and stories so Priya notices the café before she is ready to order — and trusts it when she is.`,
      `${BRIGHTBREW}. Content is not random inspiration quotes. It is planned **organic social** (unpaid posts), clear **CTAs**, and **repurposing** so one honest idea reaches people in many formats.`,
    ],
    youWillLearn: [
      "What content marketing is and why trust comes before the sale",
      "How content types and pillars stop “what do we post?” panic",
      "How to choose platforms and run organic social on purpose",
      "How a calendar and strong posts turn ideas into action",
      "Why engagement is research, not vanity",
      "How repurposing saves time without sounding spammy",
    ],
  },
  lessons: [
    {
      slug: "what-is-content-marketing",
      title: "Content Marketing and why it matters",
      minutes: "9 min",
      summary:
        "Content marketing means publishing useful material so people trust you before — and after — they buy.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** Priya walks past BrightBrew every day but always orders from a chain app. She has never opened the menu. A single “20% off today” post might not convince her. A short clip showing a millet bowl ready in eight minutes might — because it answers a question she already has at 12:45 p.m.",
        },
        {
          type: "term",
          term: "Content Marketing",
          meaning:
            "**What:** publishing helpful or proof-rich material — posts, short videos, emails, articles — that teaches, shows, or reassures, not only discounts. **Why:** strangers rarely buy from a first shout; they need a reason to remember and trust you. **How:** list questions your audience already asks, answer them on a rhythm, and invite a small next step (**CTA**).",
        },
        {
          type: "p",
          text: "**Real example:** BrightBrew posts “What is in the millet lunch bowl?” with a photo and price, a 15-second kitchen clip, and “How to order before your 1 p.m. call.” **Wasted effort:** generic “Monday motivation” with no café, no offer, no local detail.",
        },
        {
          type: "p",
          text: "**What a marketer uses it for:** warming the **top of the funnel** (awareness), staying visible between campaigns, testing hooks that later become ads, and collecting comments that reveal objections (“Do you have Jain options?”).",
        },
        {
          type: "code",
          title: "Content marketing vs one-off promotion",
          code: `|                    | Content marketing        | One-off promo only      |
|--------------------|--------------------------|-------------------------|
| Goal               | Trust + helpfulness      | Discount this week      |
| Audience feeling   | "They get my lunch problem" | "They want a sale"   |
| Reuse              | Becomes SEO, email, ads  | Dies when offer ends    |
| BrightBrew example | 8-min bowl proof clip    | "Flat 10% off" banner   |`,
        },
        ...lessonClose({
          mistake:
            "Treating every post like a billboard. If nothing teaches or proves anything, people scroll past — even with a discount.",
          takeaway:
            "Content marketing earns attention by being useful or credible first, then inviting action.",
          tip: "Before you post, ask: what question does this answer for Priya on a weekday?",
          exerciseSteps: [
            "Write 3 questions office workers near BrightBrew already ask about lunch.",
            "Turn each into one content idea (photo, Reel, or short caption).",
            "Circle which idea could later become an ad or email subject line.",
          ],
          check: {
            type: "check",
            question: "Content marketing is mainly:",
            options: [
              {
                id: "a",
                label: "Helping the audience so they trust you enough to act",
                correct: true,
              },
              { id: "b", label: "Only buying billboards", correct: false },
              { id: "c", label: "Hiding the product forever", correct: false },
            ],
            explain:
              "Help and proof come first; a clear CTA still matters. Content is not the whole funnel by itself.",
          },
        }),
      ],
    },
    {
      slug: "types-and-pillars",
      title: "Content Types and Content Pillars",
      minutes: "9 min",
      summary:
        "Types are formats. Pillars are themes you repeat so the brand feels recognisable — not random.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew’s social manager opens Instagram on Tuesday with no plan. They post a latte art photo, then a meme, then a discount, then a staff birthday. Followers cannot tell what the café is *for*. Pillars fix that.",
        },
        {
          type: "term",
          term: "Content Types",
          meaning:
            "**What:** the format you publish — photo, carousel, Story, Reel, blog section, email, Google Business post. **Why:** different formats suit different jobs (quick proof vs deep explanation). **How:** match format to pillar and platform; do not force a blog where a 15-second clip works.",
        },
        {
          type: "term",
          term: "Content Pillars",
          meaning:
            "**What:** 3–4 repeating themes every post fits into. **Why:** they end daily panic and keep the mix balanced (teach, prove, community, offer). **How:** name pillars in plain language, assign each week’s posts to a pillar, retire a pillar that never gets saves or replies.",
        },
        {
          type: "p",
          text: "**BrightBrew pillars (example):** (1) **Speed & weekday lunch** — ready in 8 minutes, order flow. (2) **Real ingredients** — millet, portions, kitchen transparency. (3) **Local office life** — Cyber Park lunch culture, desk lunch tips. (4) **Offers & how to order** — price, WhatsApp, hours.",
        },
        {
          type: "p",
          text: "**Marketer use:** pillars become briefing sheets for freelancers, filters for what *not* to post, and labels in the **content calendar** so you can see if you posted too many offers and zero proof.",
        },
        {
          type: "code",
          title: "One week — pillar mix (BrightBrew)",
          code: `Mon | Speed & lunch     | Reel        | 8-min ticket proof
Tue | Real ingredients  | Carousel    | What's in the bowl
Wed | Local office life | Photo+poll  | "Desk lunch win?"
Thu | Speed & lunch     | Story       | Order before 1 p.m.
Fri | Offers & order    | Post        | ₹199 bowl + WhatsApp CTA`,
        },
        ...lessonClose({
          mistake:
            "Calling everything a pillar. If you have twelve themes, you have no pillars — just chaos with labels.",
          takeaway:
            "Types are how you publish; pillars are what you keep saying so people know why to follow you.",
          tip: "A week with only offers feels spammy. A week with only recipes never converts. Mix on purpose.",
          exerciseSteps: [
            "Write 3 pillars for a business you know (not four vague words — full phrases).",
            "For each pillar, name one content type you will use this week.",
            "Mark which pillar owns the main CTA this week.",
          ],
          check: {
            type: "check",
            question: "Content pillars help you:",
            options: [
              {
                id: "a",
                label: "Repeat useful themes instead of random daily panic",
                correct: true,
              },
              { id: "b", label: "Avoid ever asking for an order", correct: false },
              {
                id: "c",
                label: "Post in every language on earth",
                correct: false,
              },
            ],
            explain:
              "Pillars are a menu of themes. Content types are how you serve them.",
          },
        }),
      ],
    },
    {
      slug: "organic-social-strategy",
      title: "Social Media Strategy and Organic Social",
      minutes: "10 min",
      summary:
        "Organic social is unpaid posting. Strategy means picking platforms, a voice, a job for the account, and a rhythm — not being everywhere.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew opens accounts on six platforms, posts twice on each, then burns out. Nothing grows because **organic reach** (who sees posts without paying) is limited and split six ways. Strategy means fewer places, clearer job.",
        },
        {
          type: "term",
          term: "Organic Social Media",
          meaning:
            "**What:** posts people see without you paying the platform for that impression. **Why:** it builds proof, replies, and a library of creative you can later boost with **paid social**. **How:** choose 1–2 platforms where Priya already is, define the account’s job in one sentence, post on a calendar, reply like sales conversations.",
        },
        {
          type: "p",
          text: "**Real example:** Instagram + Google Business posts for lunch photos and hours beat five dead accounts. Account job: “Show weekday lunch proof and how to order in under 15 minutes.” Voice: clear, local, no slang Priya would not use in a client meeting.",
        },
        {
          type: "p",
          text: "**When marketers rely on organic:** staying present, testing hooks, learning from comments, nurturing community. **When they do not rely on it alone:** a hard 30-day order target — they add **paid** and a strong landing page.",
        },
        {
          type: "code",
          title: "Organic vs paid social (beginner view)",
          code: `|                  | Organic social           | Paid social               |
|------------------|--------------------------|---------------------------|
| Cost             | Mostly time              | Budget + time             |
| Speed            | Slow, inconsistent reach | Faster, targeted reach    |
| Best for         | Proof, replies, testing  | Scale when offer is ready |
| BrightBrew       | Daily bowl Reels         | Boost best Reel to offices|`,
        },
        ...lessonClose({
          mistake:
            "Expecting organic posts alone to hit an aggressive sales goal. Organic is a presence engine, not a guaranteed sales machine.",
          takeaway:
            "Organic social strategy = platform choice + account job + voice + reply habit — not posting everywhere.",
          tip: "Turn the phone around. Film the bowl, the ticket timer, the street — not a stock sunset.",
          exerciseSteps: [
            "Pick one platform for BrightBrew and write its job in one sentence.",
            "Write 3 voice rules (example: prices always visible, no vague “vibes”).",
            "List one metric you will watch besides likes (saves, shares, DMs).",
          ],
          check: {
            type: "check",
            question: "Organic social is most useful as:",
            options: [
              {
                id: "a",
                label: "A rhythm of proof, help, and conversation — not magic sales",
                correct: true,
              },
              { id: "b", label: "A guarantee of page-one Google", correct: false },
              { id: "c", label: "A replacement for a clear offer", correct: false },
            ],
            explain:
              "Organic builds trust and feedback. It rarely replaces conversion paths or paid when you need speed.",
          },
        }),
      ],
    },
    {
      slug: "calendar-and-writing",
      title: "Content Calendar and Writing Effective Posts",
      minutes: "11 min",
      summary:
        "A calendar plans the week. A strong post has a hook, one idea, and a CTA that matches the funnel stage.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** It is Monday 9 a.m. BrightBrew has no photo ready, no caption, and lunch rush starts at 12:30. A **content calendar** would have said: Thursday shoot bowl assembly; Monday post Speed pillar Reel with WhatsApp CTA.",
        },
        {
          type: "term",
          term: "Content Calendar",
          meaning:
            "**What:** a simple plan — day, pillar, format, hook, asset needed, **CTA** (call to action). **Why:** so creative work happens before panic, not during lunch service. **How:** plan one week at a time in a table or spreadsheet; batch film once; write CTAs before captions.",
        },
        {
          type: "term",
          term: "Call to Action (CTA)",
          meaning:
            "**What:** the next step you ask for — “Order on WhatsApp,” “Save this menu,” “Comment LUNCH for today’s bowls.” **Why:** busy people rarely guess. **How:** one primary CTA per post; match it to intent (save for later vs order now).",
        },
        {
          type: "p",
          text: "**Post anatomy:** **Hook** — first line earns the second (“Ready in 8 minutes before your 1 p.m. call”). **Body** — one idea, one visual job. **CTA** — explicit next tap. **Weak:** “Great vibes only.” **Working:** bowl photo, ₹199, timer proof, Story link sticker to WhatsApp.",
        },
        {
          type: "p",
          text: "**Marketer use:** calendars align with campaigns (Module 03), prevent off-brand reactive posting, and show stakeholders what “content work” actually is.",
        },
        ...lessonClose({
          mistake:
            "Writing the caption first and forgetting the CTA. If you cannot name the next step, the post has no job.",
          takeaway:
            "Calendar = plan; post = hook + one idea + CTA. Write the CTA before you polish poetry.",
          tip: "Batch: one photoshoot or one kitchen clip should fill multiple calendar cells via repurposing.",
          exerciseSteps: [
            "Write one Instagram caption: hook, 2 short lines, CTA.",
            "Add it to a 7-day table with pillar and format columns.",
            "Underline the single action you want Priya to take.",
          ],
          check: {
            type: "check",
            question: "A call to action should:",
            options: [
              {
                id: "a",
                label: "Tell the person the next useful tap or reply",
                correct: true,
              },
              {
                id: "b",
                label: "Be hidden so the post feels mysterious",
                correct: false,
              },
              { id: "c", label: "Always be “follow for follow”", correct: false },
            ],
            explain:
              "Spell out the next step that matches where they are in the funnel.",
          },
        }),
      ],
    },
    {
      slug: "engagement",
      title: "Engagement",
      minutes: "7 min",
      summary:
        "Engagement is interaction — comments, saves, shares, replies. Treat it as conversation and research, not a score to chase blindly.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew’s post gets 200 likes but 40 comments asking “Jain options?” The marketer who only screenshots likes misses the product insight. **Engagement** is where objections and orders begin.",
        },
        {
          type: "term",
          term: "Engagement",
          meaning:
            "**What:** actions that show someone cared — comment, save, share, reply, DM. **Why:** platforms often show posts to more people when humans interact; more importantly, comments tell you what to fix on the menu, page, or next post. **How:** ask real questions, reply quickly, turn FAQs into new content.",
        },
        {
          type: "p",
          text: "**Real example:** Reply: “Yes — millet bowl with no onion/garlic on request. WhatsApp ‘JAIN’ and we’ll pack it for tomorrow lunch.” That is **engagement** plus a **CTA**, not a generic “Thanks!”",
        },
        {
          type: "p",
          text: "**Marketer use:** engagement rate helps compare posts; comment themes feed SEO page copy, ad headlines, and email subjects. Saves often mean “I might order later” — worth more than a passive like for lunch businesses.",
        },
        {
          type: "code",
          title: "Engagement signals — what they might mean",
          code: `Saves        | "I'll need this at lunch"     | Retarget later, email menu
Comments     | Questions & objections        | FAQ post, landing page line
Shares       | Social proof to colleagues    | Office lunch campaign angle
DMs          | High intent                   | Treat like inbound sales lead`,
        },
        ...lessonClose({
          mistake:
            "Buying fake likes or ignoring comments because the brand is “too premium.” Fake numbers teach nothing; ignored DMs lose orders.",
          takeaway:
            "Engagement is a feedback loop: listen, reply with a next step, publish what you learned.",
          tip: "Pin one comment that answers the most common question under each high-traffic post.",
          exerciseSteps: [
            "Find 3 comments on any food brand’s post.",
            "Write replies that answer and include a sensible next step.",
            "Note one comment theme that could become next week’s post.",
          ],
          check: {
            type: "check",
            question: "High engagement is most useful when you:",
            options: [
              {
                id: "a",
                label: "Learn what people need and move the conversation toward action",
                correct: true,
              },
              {
                id: "b",
                label: "Ignore comments to stay mysterious",
                correct: false,
              },
              { id: "c", label: "Buy fake likes to look popular", correct: false },
            ],
            explain:
              "Real replies surface Jain-bowl insights fake likes never will.",
          },
        }),
      ],
    },
    {
      slug: "repurposing",
      title: "Content Repurposing",
      minutes: "8 min",
      summary:
        "Repurposing turns one strong idea into many formats so you create once and publish all week — without copy-paste spam.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew films one kitchen clip: millet bowl assembled, ticket shows eight minutes, price ₹199. The beginner posts it once and spends six more days scrambling for content. The marketer slices that clip into five channels.",
        },
        {
          type: "term",
          term: "Content Repurposing",
          meaning:
            "**What:** adapting one source idea into multiple formats and platforms. **Why:** time is limited; one honest shoot should fuel the calendar. **How:** keep facts consistent (time, price, offer); change hooks per platform; space publishes so feeds are not identical noise.",
        },
        {
          type: "p",
          text: "**Source idea:** “BrightBrew millet lunch bowl — ready in 8 minutes, ₹199, order on WhatsApp before your meeting.”",
        },
        {
          type: "code",
          title: "One idea → five formats (BrightBrew)",
          code: `1. LinkedIn post     | Text hook for office workers: "8-minute millet bowl
                       | before your 1 p.m. call" + 3 bullet facts + link in comments
2. Instagram post    | Square bowl photo + caption hook + "WhatsApp to order" CTA
3. Short video       | 15–20 sec Reel: ticket timer + assembly + on-screen ₹199
4. Blog section      | H2 "What's in the millet bowl" + ingredients, time, how to order
5. Email snippet     | Subject: "Desk lunch in 8 minutes?" + 2 sentences + order button`,
        },
        {
          type: "p",
          text: "**Marketer use:** repurposing feeds **organic social**, **email**, **SEO** copy, and later **ad creative** from one approved message — so brand facts stay aligned.",
        },
        {
          type: "ul",
          items: [
            "Keep the fact the same (8 minutes, ₹199). Change the hook for each platform.",
            "Do not paste the identical caption twelve times in twelve hours.",
            "Store a **source asset** folder: one video, one price card, one customer quote.",
          ],
        },
        ...lessonClose({
          mistake:
            "Repurposing as copy-paste spam. Same caption everywhere in one hour feels robotic and hurts reach.",
          takeaway:
            "One true idea, many formats — same facts, fresh hooks, sensible spacing.",
          tip: "Film one “bowl assembly” weekly; that single asset can fill half the calendar.",
          exerciseSteps: [
            "Pick one BrightBrew idea (or your own business).",
            "Fill in the five rows from the table above with your own hooks.",
            "Mark which piece you would boost with paid first and why.",
          ],
          check: {
            type: "check",
            question: "Repurposing is useful because it:",
            options: [
              {
                id: "a",
                label: "Lets one honest idea reach people in different formats",
                correct: true,
              },
              {
                id: "b",
                label: "Means copying a competitor’s entire grid",
                correct: false,
              },
              { id: "c", label: "Replaces having an offer", correct: false },
            ],
            explain:
              "You still need a true idea and offer. Repurposing is efficiency, not theft.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: 7-day social content plan",
    goal: "Build a week of organic posts for one business, with pillars, formats, captions, CTAs, and one repurposed source idea.",
    starterLabel: "7-day plan template",
    steps: [
      "Name the platform and the account’s job.",
      "List 3 pillars.",
      "Fill 7 rows: day, pillar, format, hook, CTA.",
      "Write full captions for at least 3 days.",
      "Mark which days come from the same source video or photoshoot.",
    ],
    starterCode: `Business / platform / account job:
Pillars: 1)  2)  3)

Day | Pillar | Format | Hook | CTA | Asset
Mon
Tue
Wed
Thu
Fri
Sat
Sun

Source asset this week:
3 full captions:
Engagement question I will actually reply to:`,
    doneWhen: [
      "Seven days have a pillar, format, and CTA.",
      "At least three captions are written, not just topics.",
      "You reused one source idea on more than one day.",
    ],
  },
};

export default digitalMarketingFoundationsModule04;

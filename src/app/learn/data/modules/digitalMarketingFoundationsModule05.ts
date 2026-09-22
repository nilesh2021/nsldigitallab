import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule05: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "seo-foundations",
  moduleNumber: "05",
  title: "SEO Foundations",
  estimatedTime: "70–90 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 05 | SEO Foundations | NSL Digital Lab",
    description:
      "Beginner Module 05: how search engines work, search intent, keywords, on-page SEO, technical basics, and organic traffic.",
    keywords:
      "what is SEO, search intent, keyword research, title tags, meta description, on-page SEO, technical SEO basics, organic traffic",
    canonical: `${BASE}/seo-foundations`,
  },
  prevModule: {
    href: `${BASE}/content-marketing-and-social-media`,
    label: "Previous: Module 04",
  },
  nextModule: {
    href: `${BASE}/paid-advertising-and-google-ads`,
    label: "Next: Module 06",
  },
  intro: {
    headline: "SEO is being findable when someone already has a need",
    body: [
      `Priya types a **search query** into Google: “healthy lunch near Cyber Park.” In about a second she sees ads, map results, and blue links. **SEO** (Search Engine Optimization) is the work of making BrightBrew’s page a useful, findable answer in that unpaid list.`,
      `${BRIGHTBREW}. SEO is slower than ads but can keep sending **organic traffic** after you stop paying. This module builds SEO from zero — one webpage at a time.`,
    ],
    youWillLearn: [
      "What SEO is and why organic traffic compounds",
      "What happens when someone searches Google",
      "Search intent, keywords, keyword research, and long-tail keywords",
      "On-page SEO step-by-step for one important URL",
      "Technical basics that stop pages from ranking",
      "How to plan and improve one page like a marketer",
    ],
  },
  lessons: [
    {
      slug: "what-is-seo",
      title: "What is SEO and why it matters",
      minutes: "9 min",
      summary:
        "SEO improves pages so they can appear in unpaid search results when people look for something you honestly offer.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew has a website, but Priya never finds it. She searches “office lunch bowls near me” and clicks a competitor on page one. SEO is how you earn a place in that unpaid list — by being relevant, clear, and technically reachable.",
        },
        {
          type: "term",
          term: "SEO (Search Engine Optimization)",
          meaning:
            "**What:** improving website pages so search engines can understand them and show them for matching **search queries**. **Why:** people with intent already typed the need — **organic traffic** can cost less over time than renting every click with ads. **How:** match **search intent**, use honest **keywords**, write strong on-page content, keep the site healthy.",
        },
        {
          type: "term",
          term: "Organic Traffic",
          meaning:
            "**What:** visits from unpaid search results (not ads, not social links you paid for). **Why:** it scales with useful pages and trust. **How:** publish pages that answer real queries, earn links over time, fix technical blockers, measure in Search Console later.",
        },
        {
          type: "p",
          text: "**Real example:** You do not “SEO a café” in the abstract. You SEO **one URL** that answers: “healthy office lunch [area],” “millet bowl order near [landmark].”",
        },
        {
          type: "p",
          text: "**Marketer use:** SEO supports long-term acquisition, reduces dependence on paid for the same queries, and forces clarity (if the page cannot explain the offer, Google and humans both struggle).",
        },
        {
          type: "code",
          title: "SEO vs paid search (same query)",
          code: `|                    | SEO (organic)              | Paid search (ads)        |
|--------------------|----------------------------|--------------------------|
| When you appear    | After work + time          | When campaign is on      |
| Cost model         | Time + content + tech      | Pay per click (PPC)      |
| BrightBrew query   | "healthy lunch cyber park" | Same query, ad at top    |
| Best beginner move | One excellent lunch page   | Ads while SEO grows      |`,
        },
        ...lessonClose({
          mistake:
            "Chasing tricks — hidden text, keyword stuffing, buying spam links. That can hurt the site. Useful pages are the beginner path.",
          takeaway:
            "SEO = helpful pages + clear keywords + healthy site → organic traffic over time.",
          tip: "If nobody searches your phrase, ranking #1 still brings zero people. Demand comes first.",
          exerciseSteps: [
            "Type 3 phrases you would search before trying a new lunch place.",
            "Note whether Google shows maps, ads, blogs, or menu pages.",
            "Circle one phrase BrightBrew should own with a dedicated page.",
          ],
          check: {
            type: "check",
            question: "SEO is mainly about:",
            options: [
              {
                id: "a",
                label: "Helping useful pages get found in unpaid search results",
                correct: true,
              },
              { id: "b", label: "Hacking Google with hidden white text", correct: false },
              { id: "c", label: "Paying for every click forever", correct: false },
            ],
            explain:
              "Paid clicks are ads. SEO focuses on earning unpaid visibility with quality pages.",
          },
        }),
      ],
    },
    {
      slug: "how-search-engines-work",
      title: "How Search Engines Work",
      minutes: "9 min",
      summary:
        "When someone searches Google, software finds, stores, and ranks pages. Beginners need crawl, index, rank — and a readable page.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** Priya searches “café with wifi near Cyber Park.” What happens in the next second? Google does not “think like a human”; it runs a process built over years — but you only need the beginner model to fix BrightBrew’s page.",
        },
        {
          type: "p",
          text: "**What happens when someone searches Google (simple version):** (1) Priya submits a **search query**. (2) Google looks in its **index** (a giant library of pages it already knows). (3) It **ranks** candidates by usefulness, relevance, and hundreds of signals. (4) Priya sees a results page — ads, maps, links — and clicks one.",
        },
        {
          type: "ul",
          items: [
            "**Crawl:** Google’s crawler follows links to discover pages (including BrightBrew’s lunch URL).",
            "**Index:** it stores what the page is about (text, titles, links).",
            "**Rank:** for each query, it orders pages it believes will help.",
          ],
        },
        {
          type: "term",
          term: "Search Query",
          meaning:
            "**What:** the exact words someone types or speaks into Google. **Why:** your page must match the job behind those words, not random synonyms. **How:** study real queries with autocomplete, Search Console (later), and by reading what already ranks.",
        },
        {
          type: "p",
          text: "**BrightBrew blockers:** page blocked by robots.txt, no internal links to the lunch page, offer trapped only inside a huge menu image, or site so slow Priya leaves before reading.",
        },
        {
          type: "p",
          text: "**Marketer use:** you do not need Google’s secret formula. You need a page crawlers can read and humans are glad they opened.",
        },
        ...lessonClose({
          mistake:
            "Designing a beautiful page with no real text in HTML. Crawlers and rushed humans both need words that state area, offer, and how to order.",
          takeaway:
            "Search = query → index lookup → ranked results. Your job: be in the index with a page that fits the query.",
          tip: "View page source or select text on your menu page. If you cannot select the prices, SEO has a problem.",
          exerciseSteps: [
            "Open a small business website on your phone.",
            "Search Google for one service they should win. See what format ranks (map, list, guide).",
            "List one reason Google might skip or downgrade their page.",
          ],
          check: {
            type: "check",
            question: "If Google cannot crawl a page:",
            options: [
              {
                id: "a",
                label: "That page usually cannot rank, no matter how pretty it is",
                correct: true,
              },
              { id: "b", label: "It automatically ranks #1", correct: false },
              { id: "c", label: "SEO no longer exists as a field", correct: false },
            ],
            explain:
              "Discovery and indexing come before ranking. Technical blocks are a common beginner miss.",
          },
        }),
      ],
    },
    {
      slug: "search-intent-and-keywords",
      title: "Search Intent and Keywords",
      minutes: "11 min",
      summary:
        "Search intent is the job behind the query. Keywords are the phrases people type. Keyword research finds demand you can serve — including long-tail keywords.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew wants to rank for “coffee.” Priya searching “coffee” might want history, beans, or a café ten kilometres away — not lunch. Wrong intent wastes months. Match the **job**, then pick **keywords**.",
        },
        {
          type: "term",
          term: "Search Intent",
          meaning:
            "**What:** why someone searched. Beginner types: **know** (learn), **do** (buy/order), **go** (find a place or brand). **Why:** a blog essay will not satisfy “order lunch near me.” **How:** read the current results page — maps, product pages, guides — and build the same job, better.",
        },
        {
          type: "term",
          term: "Keywords",
          meaning:
            "**What:** words and phrases in **search queries**. **Why:** each important page should target one primary keyword and close variants. **How:** **keyword research** — list phrases with real demand that you can honestly serve.",
        },
        {
          type: "term",
          term: "Long-tail Keywords",
          meaning:
            "**What:** longer, more specific phrases (often lower volume, clearer intent). Example head term: “lunch.” Long-tail: “millet lunch bowl order cyber park gurgaon.” **Why:** easier to match intent and convert for small businesses. **How:** combine place + offer + action in research lists; one long-tail per page is a strong beginner strategy.",
        },
        {
          type: "p",
          text: "**BrightBrew examples:** “what is millet” = **know**. “millet lunch bowl order cyber park” = **do**. “BrightBrew gurgaon” = **go** (brand). The order page targets **do** + **go**, not millet history.",
        },
        {
          type: "p",
          text: "**Keyword research (free start):** Google autocomplete, “People also ask,” scroll page-one results, ask staff what customers say on WhatsApp. Later: keyword tools for volume. Avoid stuffing: “lunch lunch cheap lunch café.”",
        },
        {
          type: "code",
          title: "Head vs long-tail (BrightBrew lunch page)",
          code: `Head keyword        | lunch near me           | High competition, vague
Long-tail keyword   | 8 minute office lunch   | Clearer intent, fits menu
                    | bowl cyber park         |
Primary page pick   | Use long-tail + location| One primary per URL`,
        },
        {
          type: "p",
          text: "**Marketer use:** keywords become title tags, ad groups (Module 06), and content pillars (Module 04). Intent keeps SEO, ads, and landing pages aligned.",
        },
        ...lessonClose({
          mistake:
            "Writing one page for every keyword variant. One URL, one primary keyword, a few natural variants in the copy.",
          takeaway:
            "Intent first, keywords second. Long-tail phrases often convert better for local offers.",
          tip: "Google the phrase before you write. The results page is Google’s hint about intent.",
          exerciseSteps: [
            "Pick one phrase. Google it. Label intent: know / do / go.",
            "Write a better long-tail version with place + offer.",
            "State what page type should rank (menu, map, guide).",
          ],
          check: {
            type: "check",
            question: "If the top results are Maps and order pages, your millet history essay is probably:",
            options: [
              { id: "a", label: "Mismatched to search intent", correct: true },
              { id: "b", label: "Automatically the winner", correct: false },
              { id: "c", label: "Required by law", correct: false },
            ],
            explain:
              "Format follows the job behind the query. Long-tail helps you match that job precisely.",
          },
        }),
      ],
    },
    {
      slug: "on-page-seo",
      title: "On-Page SEO: titles, meta, headings, links",
      minutes: "12 min",
      summary:
        "On-page SEO is what you write and structure on one URL so humans and Google understand it — step by step for BrightBrew’s lunch page.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** You have one URL: `/weekday-lunch-bowls`. Priya might click from Google if the listing is clear. On the page, she needs the same promise. Here is **on-page SEO** for that single webpage — in order.",
        },
        {
          type: "term",
          term: "On-Page SEO",
          meaning:
            "**What:** optimising one page’s content and HTML structure — title, meta description, headings, body copy, images, **internal links**. **Why:** it tells Google and Priya what the page is about and why to click. **How:** follow the checklist below once per important URL.",
        },
        {
          type: "code",
          title: "Step-by-step: one webpage (BrightBrew lunch URL)",
          code: `Step 1 | Title tag (search headline)     | "Office Lunch Bowls Cyber Park |
       | ~60 chars if possible           | Ready in 8 Min | BrightBrew"
Step 2 | Meta description                | Offer + area + CTA: "Millet bowls
       |                                 | from ₹199. Order on WhatsApp."
Step 3 | One H1 on the page              | "Weekday lunch bowls near Cyber Park"
Step 4 | H2 sections                     | "Today's bowls" / "How to order" /
       |                                 | "Hours & location"
Step 5 | First paragraph (visible text)  | Area, speed, price band, order method
Step 6 | Internal links TO this page     | From homepage + blog with anchor text
       |                                 | like "weekday lunch bowls"
Step 7 | Images                          | Real photos + alt text describing bowl`,
        },
        {
          type: "p",
          text: "**Real example:** Title and H1 should agree with the **long-tail keyword** you chose. Do not write a clickbait title that the page does not deliver.",
        },
        {
          type: "p",
          text: "**Marketer use:** on-page SEO is the same message discipline as ad copy — promise in the title, proof on the page, one primary **CTA**.",
        },
        ...lessonClose({
          mistake:
            "Multiple H1s, empty title tags, or repeating the keyword unnaturally. Write for Priya first; clarity is usually good SEO.",
          takeaway:
            "One page: title → meta → H1 → H2s → intro text → internal links → helpful images.",
          tip: "Draft the title tag as if Priya is choosing between five tabs on her phone.",
          exerciseSteps: [
            "Write title + meta for BrightBrew’s lunch page (or a local business).",
            "List 3 H2s and the primary CTA.",
            "Name two other pages that should link to this URL.",
          ],
          check: {
            type: "check",
            question: "A title tag should:",
            options: [
              {
                id: "a",
                label: "Describe this page clearly and invite a relevant click",
                correct: true,
              },
              { id: "b", label: "Repeat the keyword 12 times", correct: false },
              { id: "c", label: "Be left empty so Google can guess", correct: false },
            ],
            explain:
              "Empty or stuffed titles waste clicks. Honest clarity wins.",
          },
        }),
      ],
    },
    {
      slug: "technical-seo-basics",
      title: "Technical SEO Basics",
      minutes: "8 min",
      summary:
        "Technical SEO asks: can Google reach the page, and can Priya use it on her phone without rage-quitting?",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew’s lunch page looks fine on a designer’s laptop on Wi‑Fi. On Priya’s phone on 4G, a 12 MB menu image loads for eleven seconds. She orders elsewhere. Google notices poor engagement too.",
        },
        {
          type: "term",
          term: "Technical SEO",
          meaning:
            "**What:** site health — crawl access, speed, mobile usability, HTTPS, clean URLs. **Why:** the best copy cannot rank if the page is blocked or unusable. **How:** fix basics before you publish ten more posts.",
        },
        {
          type: "ul",
          items: [
            "Page loads on mobile without huge waits (compress images, avoid giant PDF menus only).",
            "Site uses **https://** (lock icon).",
            "Important text is real HTML text — not only inside images.",
            "You do not accidentally block Google in robots settings.",
            "Each important offer has its own clear URL (not only a PDF or social link).",
          ],
        },
        {
          type: "p",
          text: "**Marketer use:** you flag issues for a developer or agency with screenshots and URLs. You do not need to code — you need to notice “Priya would leave.”",
        },
        {
          type: "code",
          title: "Technical quick check (before you promote the page)",
          code: `| Check              | Pass? | BrightBrew note              |
|--------------------|-------|------------------------------|
| Mobile load        |       | Open on 4G, not only Wi-Fi   |
| Text selectable    |       | Prices in HTML, not only JPG |
| HTTPS              |       | Lock icon in browser         |
| One URL per offer  |       | /weekday-lunch-bowls exists  |
| Internal links in  |       | Homepage links to lunch page |`,
        },
        ...lessonClose({
          mistake:
            "Publishing then ignoring Core Web Vitals excuses. A slow image-only menu hurts users and **organic traffic**.",
          takeaway:
            "Technical SEO = crawlable + fast + mobile + secure. Fix blockers on your money page first.",
          tip: "Test on your own phone on mobile data. If you would give up, so will Priya.",
          exerciseSteps: [
            "Open a local business page on your phone. Time how long until you see the offer.",
            "Note one technical fix and one on-page fix.",
            "Write who would implement each (you, owner, developer).",
          ],
          check: {
            type: "check",
            question: "A common technical problem for beginners is:",
            options: [
              {
                id: "a",
                label: "A slow page where the offer exists only as a huge image",
                correct: true,
              },
              { id: "b", label: "Having a clear H1", correct: false },
              { id: "c", label: "Using https", correct: false },
            ],
            explain:
              "Clear headings and HTTPS help. Unreadable giant images hide meaning from users and crawlers.",
          },
        }),
      ],
    },
    {
      slug: "one-page-plan",
      title: "Putting SEO to work on one page",
      minutes: "8 min",
      summary:
        "Marketers do not “do SEO” as a vibe. They improve one important URL against one intent, then measure and iterate.",
      blocks: [
        {
          type: "p",
          text: "**Scenario:** BrightBrew’s owner wants “more Google.” The marketer responds with one plan: one URL, one **long-tail keyword**, one conversion action — weekday lunch orders via WhatsApp.",
        },
        {
          type: "ul",
          items: [
            "Pick the business result (20 extra weekday orders).",
            "Pick the query, intent (**do** / **go**), and primary keyword.",
            "Apply the on-page checklist (title, meta, H1, H2s, intro, CTA).",
            "Add **internal links** from home, footer, and Google Business profile.",
            "Fix one technical risk (speed, image menu, mobile layout).",
            "Measure later: Search Console impressions/clicks; for now, judge clarity with a colleague.",
          ],
        },
        {
          type: "p",
          text: "**Real example:** Skip fifty thin blog posts about coffee history. One excellent lunch page beats a graveyard of articles nobody searches for.",
        },
        {
          type: "p",
          text: "**Marketer use:** this one-page plan becomes the brief for web updates, content repurposing (Module 04), and later ad landing pages (Module 06) — same promise everywhere.",
        },
        {
          type: "code",
          title: "60-day one-page SEO habit",
          code: `Week 1  | Publish or rewrite the single money URL
Week 2  | Add internal links + Google Business link
Week 3  | Improve speed / menu text based on phone test
Week 4+ | Add FAQ from customer questions (new H2s)
Monthly | Review queries in Search Console; adjust title/H2`,
        },
        ...lessonClose({
          mistake:
            "Starting with 500 spun articles or chasing vanity keywords with no local demand.",
          takeaway:
            "Beginner SEO = one important page + matching intent + technical basics + weekly improvements.",
          tip: "When customers ask a question twice, add it as an H2 on the money page.",
          exerciseSteps: [
            "Name the one URL BrightBrew would create or improve first.",
            "Write primary keyword, intent, and the action on that page.",
            "List two internal links you would add this week.",
          ],
          check: {
            type: "check",
            question: "A beginner SEO plan should start with:",
            options: [
              {
                id: "a",
                label: "One important page that matches a real search intent",
                correct: true,
              },
              { id: "b", label: "500 spun articles overnight", correct: false },
              { id: "c", label: "Hiding the address from Google", correct: false },
            ],
            explain:
              "Focus beats volume when learning. Thin content rarely earns trust or rankings.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: SEO plan for one webpage",
    goal: "Plan (or rewrite) one page that could rank for a real search with clear intent.",
    starterLabel: "One-page SEO brief",
    steps: [
      "Choose the business and the business goal of the page.",
      "Google 3 candidate keywords. Pick one primary based on intent and what already ranks.",
      "Write title, meta, H1, intro, H2 outline, primary CTA.",
      "List 2 internal links you would add.",
      "Note one technical risk (speed, image-only menu, not mobile-friendly).",
    ],
    starterCode: `Page URL (real or planned):
Business goal of this page:
Primary keyword:
Long-tail variant:
Search intent (know / do / go):
What currently ranks (format):
Title tag:
Meta description:
H1:
Intro (2 sentences):
H2s:
Primary CTA:
Internal links from:
Technical risk to fix:
How I will know it is working in 60 days:`,
    doneWhen: [
      "Intent matches the page type.",
      "Title, meta, H1, and CTA are written.",
      "You named a technical risk and two internal links.",
    ],
  },
};

export default digitalMarketingFoundationsModule05;

import { PublishedModule } from "../../types";
import { BRIGHTBREW, lessonClose } from "./digitalMarketingLessonHelpers";

const PATH = "digital-marketing-foundations";
const BASE = `/learn/${PATH}`;

export const digitalMarketingFoundationsModule08: PublishedModule = {
  pathSlug: PATH,
  pathTitle: "Digital Marketing Foundations",
  moduleSlug: "email-marketing-and-conversion",
  moduleNumber: "08",
  title: "Email Marketing & Conversion",
  estimatedTime: "60–80 minutes",
  syllabusHref: BASE,
  seo: {
    title:
      "Digital Marketing Foundations Module 08 | Email & Conversion | NSL Digital Lab",
    description:
      "Beginner Module 08: lead generation, lead magnets, lists, opt-ins, welcome sequences, subject lines, CTAs, funnels, and basic automation.",
    keywords:
      "email marketing beginner, lead magnet, welcome sequence, opt-in forms, conversion funnel, email automation, subject lines",
    canonical: `${BASE}/email-marketing-and-conversion`,
  },
  prevModule: {
    href: `${BASE}/social-media-advertising`,
    label: "Previous: Module 07",
  },
  nextModule: {
    href: `${BASE}/analytics-and-marketing-performance`,
    label: "Next: Module 09",
  },
  intro: {
    headline: "Email is a channel you own — when people say yes first",
    body: [
      "Social algorithms change. Ad costs rise. An **email list** is people who gave **permission** to hear from you. That is why marketers protect it.",
      `${BRIGHTBREW}. Trade a useful **lead magnet** (checklist, coupon, menu PDF) for an address on an **opt-in** form. Then send a **welcome sequence** instead of silence — and map the path through a **conversion funnel** with light **automation**.`,
    ],
    youWillLearn: [
      "Lead generation and what a lead really is",
      "Lead magnets, lists, and honest opt-in forms",
      "A realistic 3-email BrightBrew welcome sequence",
      "Subject lines, CTAs, and landing pages that convert",
      "Funnel thinking and basic automation triggers",
    ],
  },
  lessons: [
    {
      slug: "email-and-leads",
      title: "Email Marketing and Lead Generation",
      minutes: "9 min",
      summary:
        "Email marketing sends useful messages to people who opted in. Lead generation is earning that permission.",
      blocks: [
        {
          type: "term",
          term: "Email marketing",
          meaning:
            "**What:** sending emails to a list you have permission to use. **Why:** inboxes are quieter than social feeds; repeats (Thursday lunch) live here. **How:** collect emails fairly, deliver value immediately, then send on a rhythm.",
        },
        {
          type: "term",
          term: "Lead generation",
          meaning:
            "The work of capturing a potential customer’s contact details. A **lead** is not automatically a sale — it is a raised hand: “I’m interested enough to hear more.”",
        },
        {
          type: "p",
          text: "Buying scraped email lists is a bad beginner move: spam complaints, legal risk, and people who never wanted BrightBrew. **Earn** the address with a clear trade: “Give us email → get this specific thing.”",
        },
        {
          type: "ul",
          items: [
            "**Permission** is the foundation (opt-in, not trick pages).",
            "**Value** is the reason they stay (offers, menus, tips — not daily noise).",
            "**WhatsApp lists** follow the same ethics: opt-in + useful next message.",
          ],
        },
        ...lessonClose({
          mistake:
            "Adding everyone you met once to a list — or hiding the fact they will get marketing emails.",
          takeaway:
            "A lead is interest plus permission. Email marketing scales trust, not tricks.",
          tip:
            "Write the opt-in promise in one sentence a friend would understand.",
          exerciseSteps: [
            "Why would Priya give BrightBrew her email? (What she gets.)",
            "What does BrightBrew get? (A chance to remind her before Thursday lunch.)",
          ],
          check: {
            type: "check",
            question: "A lead is best described as:",
            options: [
              {
                id: "a",
                label: "Someone interested who shared a way to contact them with permission",
                correct: true,
              },
              { id: "b", label: "Always a completed purchase", correct: false },
              {
                id: "c",
                label: "Anyone whose email you found online",
                correct: false,
              },
            ],
            explain:
              "Permission first. A lead is potential, not guaranteed revenue.",
          },
        }),
      ],
    },
    {
      slug: "lead-magnets-lists-forms",
      title: "Lead Magnets, Lists, and Opt-in Forms",
      minutes: "10 min",
      summary:
        "The lead magnet is the gift. The form is the door. The list is everyone who said yes.",
      blocks: [
        {
          type: "term",
          term: "Lead magnet",
          meaning:
            "A specific freebie in exchange for an email: checklist, coupon code, one-page menu, “order in 3 taps” guide. Weak magnet: “Sign up for our newsletter” with no clear benefit.",
        },
        {
          type: "ul",
          items: [
            "**Email list:** contacts plus tags (example: “office lunch,” “weekend brunch”).",
            "**Opt-in form:** usually email only (name optional). Say what they receive and how often.",
            "**Double opt-in:** confirm via inbox link — stronger list quality in many regions.",
          ],
        },
        {
          type: "p",
          text: "BrightBrew magnets that work for beginners: “**5 weekday bowls under ₹250**” PDF with photos and order link, or “**10% off first bowl**” coupon delivered instantly.",
        },
        {
          type: "code",
          title: "Opt-in page sketch (BrightBrew)",
          code: `Headline:   Free office lunch cheat sheet (5 bowls under ₹250)
Subhead:    Pick faster. Order in 8 minutes. No spam — 1 email/week max.
Fields:     Email only
Button:     Send me the cheat sheet
Fine print: Unsubscribe anytime. Coupon valid 14 days.

Deliver the magnet in Email 1 within 60 seconds.`,
        },
        ...lessonClose({
          mistake:
            "A 40-page ebook nobody asked for — or delaying the magnet “for manual review.”",
          takeaway:
            "Specific, fast, tied to the product. The form should feel like a fair trade.",
          tip:
            "Button text should describe the gift (“Get the cheat sheet”), not “Submit.”",
          exerciseSteps: [
            "Write one lead magnet in a single sentence.",
            "List form fields (aim for 1–2).",
            "Write button text and the fine-print promise.",
          ],
          check: {
            type: "check",
            question: "A strong lead magnet is:",
            options: [
              {
                id: "a",
                label: "Specific, quick to receive, and tied to what you sell",
                correct: true,
              },
              { id: "b", label: "A random pile of unrelated PDFs", correct: false },
              {
                id: "c",
                label: "Forced email gate on the entire homepage",
                correct: false,
              },
            ],
            explain:
              "Vague newsletters underperform because the value is unclear.",
          },
        }),
      ],
    },
    {
      slug: "welcome-and-sequences",
      title: "Welcome Emails and Email Sequences",
      minutes: "11 min",
      summary:
        "A sequence is planned emails in order. The welcome sequence starts the relationship on purpose.",
      blocks: [
        {
          type: "term",
          term: "Email sequence",
          meaning:
            "A series sent automatically in order. A **welcome sequence** is the first 2–5 emails after signup: deliver the magnet, explain who you are, invite the first order.",
        },
        {
          type: "p",
          text: "Silence after signup is a leak. Priya was interested **today**. Tomorrow she is in back-to-back meetings. Your welcome emails carry the momentum.",
        },
        {
          type: "p",
          text: "Rules: **one job per email**, deliver the magnet in email 1, and make email 3 the clearest **CTA** toward an order.",
        },
        {
          type: "code",
          title: "BrightBrew — 3-email welcome sequence (realistic outlines)",
          code: `EMAIL 1 — Immediate (0 minutes after opt-in)
Subject:   Your office lunch cheat sheet (+ 10% inside)
Preview:   5 bowls under ₹250 — links work on mobile
Body:
  - Hi {first_name}, here is the PDF you asked for: [Download cheat sheet]
  - Who we are (4 lines): BrightBrew near Cyber Park · millet bowls · ready in ~8 min
  - What to expect: 1 useful email this week, unsubscribe anytime
CTA:       Download the cheat sheet

EMAIL 2 — Day 2
Subject:   How Cyber Park teams order lunch in 3 taps
Preview:   Pickup, WhatsApp, or desk delivery nearby
Body:
  - Short story: busy afternoon, queue at canteen, bowl ready before the 1 p.m. call
  - 3-step how-to: choose bowl → tap WhatsApp → pick up or delivery slot
  - One social proof line (example: “Most orders come from teams within 2 km”)
CTA:       See this week’s menu

EMAIL 3 — Day 4
Subject:   Thursday bowl: ₹199 millet power (10% still active)
Preview:   Offer ends Sunday — code BRIGHT10
Body:
  - One featured bowl + photo description
  - Remind coupon BRIGHT10 (first bowl)
  - Hours + last order time for same-day pickup
CTA:       Order Thursday’s bowl → [order page with code pre-filled]

Automation timing: 0 min → +2 days → +2 days after email 2`,
        },
        ...lessonClose({
          mistake:
            "Pasting the entire menu into email 1 or selling hard before delivering the promised magnet.",
          takeaway:
            "Welcome = keep the first promise, build trust, then ask for the first order.",
          tip:
            "Draft all three emails in a doc before clicking automation buttons.",
          exerciseSteps: [
            "Write subject + 4-line body for your email 1 (magnet delivery).",
            "In one line each, state the job of emails 2 and 3.",
          ],
          check: {
            type: "check",
            question: "The first welcome email should usually:",
            options: [
              {
                id: "a",
                label: "Deliver the promised magnet and set expectations",
                correct: true,
              },
              {
                id: "b",
                label: "Ignore the magnet and pitch 12 products",
                correct: false,
              },
              { id: "c", label: "Arrive weeks later", correct: false },
            ],
            explain:
              "Trust starts by keeping the first promise on time.",
          },
        }),
      ],
    },
    {
      slug: "subject-cta-pages",
      title: "Subject Lines, CTAs, and Landing Pages",
      minutes: "9 min",
      summary:
        "The subject earns the open. The CTA earns the click. The landing page earns the conversion.",
      blocks: [
        {
          type: "ul",
          items: [
            "**Subject lines:** specific and honest. “Your 8-minute lunch cheat sheet” beats “AMAZING DEAL!!!”",
            "**Preview text:** the grey snippet after the subject — treat it as a second headline.",
            "**CTA:** one primary action per email. Button words match the destination (“Order Thursday’s bowl”).",
            "**Landing page:** if the email promises BRIGHT10, the page shows the code and bowl — not a generic home.",
          ],
        },
        {
          type: "p",
          text: "This is **message match** again (Modules 06–07). Email is a warmer click — the page still has to finish the job.",
        },
        {
          type: "code",
          title: "Email 3 subject tests (BrightBrew)",
          code: `A) Thursday bowl: ₹199 millet power (code inside)
B) Still have 10% off your first BrightBrew bowl?
C) Last call: cheat-sheet coupon ends Sunday

Pick one primary CTA: "Order with BRIGHT10"
Landing H1 must match: "First bowl 10% off — ready in 8 minutes"`,
        },
        ...lessonClose({
          mistake:
            "Clickbait subjects that the email body does not deliver — trains people to ignore you.",
          takeaway:
            "Clarity beats tricks. One CTA, one matched landing page.",
          tip:
            "Send a test to yourself on mobile. Tap the CTA. Did the right page open in one thumb?",
          exerciseSteps: [
            "Write 3 subject lines for your offer email.",
            "Write CTA button text + the landing H1 it must open to.",
          ],
          check: {
            type: "check",
            question: "A good subject line is:",
            options: [
              {
                id: "a",
                label: "Clear about value and honest about what is inside",
                correct: true,
              },
              {
                id: "b",
                label: "ALL CAPS fake urgency every single time",
                correct: false,
              },
              { id: "c", label: "Blank or misleading", correct: false },
            ],
            explain:
              "Opens from tricks do not build a list that buys.",
          },
        }),
      ],
    },
    {
      slug: "conversion-funnel",
      title: "The Conversion Funnel in email",
      minutes: "8 min",
      summary:
        "A conversion funnel is the path from first touch to action. Email often nurtures the middle and the repeat.",
      blocks: [
        {
          type: "term",
          term: "Conversion funnel",
          meaning:
            "The steps people take: see offer → land on page → opt in or buy → thank-you → follow-up email. Each step loses people. Fix the **biggest leak** first — not every pixel at once.",
        },
        {
          type: "code",
          title: "BrightBrew funnel with example numbers",
          code: `Step                    Action                          Example count
----------------------  ------------------------------  ---------------
Instagram ad            Click                           1,000 clicks
Landing page            Submit email for cheat sheet    80 opt-ins (8%)
Email 1                 Open + download                 56 opens (70%)
Email 3                 Click order CTA                 24 clicks (30% of opens)
Order page              Purchase                        12 orders (50% of clicks)

Leak to fix first if opt-in is 8% vs 20% goal: magnet headline or form friction — not "more followers."`,
        },
        {
          type: "p",
          text: "Count steps. Six extra form fields is a leak you chose. A thank-you page without next steps is a leak you chose.",
        },
        ...lessonClose({
          mistake:
            "Buying more ads into a landing page that converts 1% — hoping volume fixes a broken offer.",
          takeaway:
            "Diagnose the step with the biggest drop-off before scaling traffic.",
          tip:
            "Walk the funnel on your phone once a week like a customer.",
          exerciseSteps: [
            "Draw 5 boxes from ad to first order for your business.",
            "Star the box you think loses the most people — and write one fix.",
          ],
          check: {
            type: "check",
            question: "When a funnel underperforms, first:",
            options: [
              {
                id: "a",
                label: "Find which step loses the most people, then fix that step",
                correct: true,
              },
              { id: "b", label: "Add five more social apps", correct: false },
              {
                id: "c",
                label: "Delete the thank-you page",
                correct: false,
              },
            ],
            explain:
              "More traffic into a leaky bucket still leaks.",
          },
        }),
      ],
    },
    {
      slug: "basic-automation",
      title: "Basic Automation",
      minutes: "7 min",
      summary:
        "Automation sends the right email when a trigger happens — so you are not copy-pasting at midnight.",
      blocks: [
        {
          type: "term",
          term: "Basic automation",
          meaning:
            "**Trigger → action.** Example: joins list → send welcome email 1 now, email 2 in 2 days, email 3 in 4 days. Optional: clicked order link but no purchase → one reminder. Tools vary; the logic matters more than the brand name.",
        },
        {
          type: "code",
          title: "BrightBrew starter automations (week 1 only)",
          code: `Automation 1 — Welcome sequence
  Trigger: Subscribed via "Office lunch cheat sheet" form
  Actions: Email 1 (0 min) → Email 2 (+2 days) → Email 3 (+2 days)

Automation 2 — (Later) Cart / click reminder
  Trigger: Clicked "Order" in email, no purchase in 24 hours
  Action: One reminder with hours + code BRIGHT10

Do NOT automate 40 emails in week one. Nail the welcome first.`,
        },
        {
          type: "p",
          text: "Write emails in a document first. Automation only ships what you already thought through.",
        },
        ...lessonClose({
          mistake:
            "Turning on complex branches before the welcome sequence is written and tested.",
          takeaway:
            "Automate reliable follow-up on known triggers — with permission and useful copy.",
          tip:
            "Name automations like a human (“Welcome – cheat sheet”) so you can find them in six months.",
          exerciseSteps: [
            "Write one trigger (signed up / first order / abandoned click).",
            "Write the automated message job in one sentence.",
          ],
          check: {
            type: "check",
            question: "Marketing automation is for:",
            options: [
              {
                id: "a",
                label: "Reliable follow-up when a known trigger happens",
                correct: true,
              },
              {
                id: "b",
                label: "Emailing people who never opted in",
                correct: false,
              },
              { id: "c", label: "Avoiding having an offer", correct: false },
            ],
            explain:
              "Triggers + permission + useful messages = beginner standard.",
          },
        }),
      ],
    },
  ],
  miniProject: {
    title: "Mini project: Lead magnet + 3-email welcome sequence",
    goal: "Create a complete opt-in offer and three welcome emails with subjects, CTAs, and timing.",
    starterLabel: "Welcome sequence draft",
    steps: [
      "Describe the audience and the magnet.",
      "Write the opt-in page headline, form, and button.",
      "Write emails 1–3: subject, preview, body outline, CTA, destination.",
      "Note automation timing and one optional reminder trigger.",
    ],
    starterCode: `Audience:
Lead magnet (1 sentence):
Opt-in headline:
Form fields:
Button text:

EMAIL 1 (immediate)
Subject:
Preview:
Body:
CTA:

EMAIL 2 (day __)
Subject:
Body:
CTA:

EMAIL 3 (day __)
Subject:
Body:
CTA / offer:

Automation timing:
What we will not send:`,
    doneWhen: [
      "The magnet is specific and delivered in email 1.",
      "Each email has one job and one CTA.",
      "Timing is written so it could be automated.",
    ],
  },
};

export default digitalMarketingFoundationsModule08;

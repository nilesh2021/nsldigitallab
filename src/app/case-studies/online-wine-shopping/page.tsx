import { ReactNode } from "react";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../../seo/SEO";
import MainLayout from "../../layouts/MainLayout";

const STAGES = ["Discovery", "Define", "Ideate", "Design", "Testing"] as const;

const TOC = [
  ["01", "Overview"],
  ["02", "Challenge"],
  ["03", "Goals"],
  ["04", "Discovery"],
  ["05", "Research"],
  ["06", "Competitive Analysis"],
  ["07", "Research Insights"],
  ["08", "Define"],
  ["09", "User Persona"],
  ["10", "Empathy Map"],
  ["11", "User Journey"],
  ["12", "Problem Statement"],
  ["13", "How Might We"],
  ["14", "Ideation"],
  ["15", "Feature Prioritization"],
  ["16", "Information Architecture"],
  ["17", "User Flow"],
  ["18", "Wireframes"],
  ["19", "UI Design"],
  ["20", "Design System"],
  ["21", "Prototype"],
  ["22", "Usability Testing"],
  ["23", "Nielsen Heuristic Evaluation"],
  ["24", "Iterations"],
  ["25", "Final Design"],
  ["26", "Learnings"],
  ["27", "Next Steps"],
] as const;

export default function OnlineWineShoppingPage() {
  return (
    <>
      <SEO
        title="Online Wine Shopping UX Case Study | Oak & Cork | NSL Digital Lab"
        description="End-to-end UI/UX case study for an online wine shopping experience — discovery, research, personas, IA, wireframes, UI, testing, and iteration."
        keywords="wine shopping UX, e-commerce case study, UI UX portfolio, user research, information architecture"
        canonical="/case-studies/online-wine-shopping"
        type="article"
      />

      <MainLayout>
        <header className="relative overflow-hidden bg-[#1a1214] pb-16 pt-24 sm:pb-20 sm:pt-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(196,163,90,0.22) 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <Link
              to="/case-studies"
              className="text-xs font-medium text-[#C4A35A] transition hover:text-white"
            >
              ← All case studies
            </Link>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4A35A]">
              E-commerce UX Case Study · SAMPLE / ASSUMED research labeled
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Online Wine Shopping Experience
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-rose-100/70">
              How Oak & Cork helps first-time and occasional buyers choose a
              bottle with confidence — without tasting-note jargon or a
              40-filter maze.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {STAGES.map((stage) => (
                <span
                  key={stage}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[12px] text-rose-50"
                >
                  {stage}
                </span>
              ))}
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Role", "Solo product designer"],
                ["Timeline", "6 weeks (assumed)"],
                ["Platform", "Responsive web"],
                ["Tools", "Figma · Notion"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-rose-200/60">
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="border-t border-[#e6dccf] bg-[#fbf8f4]">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:px-6 lg:grid-cols-[11.25rem_minmax(0,1fr)] lg:items-start lg:gap-8 lg:px-8 lg:py-10">
            <nav
              aria-label="Case study sections"
              className="h-fit max-h-48 overflow-y-auto rounded-xl border border-[#eadfd3] bg-white p-1.5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)]"
            >
              <p className="px-2 pb-1 pt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9a7b80]">
                Sections
              </p>
              <ol>
                {TOC.map(([n, label]) => (
                  <li key={n}>
                    <a
                      href={`#s${n}`}
                      className="flex gap-1.5 rounded-md px-2 py-[5px] text-[12px] leading-4 text-[#5c3d42] hover:bg-[#f7f4ef] hover:text-[#722F37]"
                    >
                      <span className="w-5 shrink-0 font-mono text-[10px] text-[#C4A35A]">
                        {n}
                      </span>
                      <span className="min-w-0">{label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="min-w-0 text-[#1a1214]">
          <Section n="01" title="Overview" stage="Discovery">
            <p>
              Oak & Cork is a conceptual e-commerce experience for buying wine
              online. The project follows a professional UI/UX process —
              Discovery → Define → Ideate → Design → Testing — and is written
              as a portfolio case study, not a course lesson.
            </p>
            <p className="mt-4 text-slate-600">
              The product promise: help people who enjoy wine but do not
              identify as experts find a bottle they will actually like, then
              check out without anxiety about shipping, age verification, or
              “did I pick the wrong one?”
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Audience", "Urban 28–42, occasional hosts"],
                ["Constraint", "Legal age gate + shipping rules"],
                ["North star", "Confidence at add-to-cart"],
              ].map(([h, b]) => (
                <div
                  key={h}
                  className="rounded-2xl border border-[#eadfd3] bg-white p-5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#722F37]">
                    {h}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{b}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section n="02" title="Challenge" stage="Discovery">
            <p>
              Most wine sites optimize for collectors: region, vintage, tannin,
              residual sugar. Occasional buyers bounce because they cannot
              translate “medium-plus acidity” into “will this work with
              biryani on Saturday?”
            </p>
            <blockquote className="mt-6 flex gap-3 rounded-2xl border-l-4 border-[#C4A35A] bg-white p-5 text-slate-700">
              <Quote className="h-5 w-5 shrink-0 text-[#C4A35A]" />
              <span>
                “I want a nice bottle for dinner. I do not want a sommelier
                exam.” — SAMPLE interview note
              </span>
            </blockquote>
          </Section>

          <Section n="03" title="Goals" stage="Discovery">
            <div className="grid gap-4 md:grid-cols-2">
              <GoalCard
                title="Business"
                items={[
                  "Increase first-order conversion on mobile",
                  "Raise average order value via guided bundles",
                  "Reduce returns from ‘wrong bottle’ disappointment",
                ]}
              />
              <GoalCard
                title="User"
                items={[
                  "Choose a bottle in under 5 minutes",
                  "Understand taste in plain language",
                  "Trust delivery date and legal checkout",
                ]}
              />
            </div>
          </Section>

          <Section n="04" title="Discovery" stage="Discovery">
            <SampleBadge />
            <p className="mt-4">
              Stakeholder workshops (assumed boutique importer) aligned on
              three jobs-to-be-done: gift a bottle, pair with a meal, restock
              a house favorite. Success was defined as a completed first
              purchase with a 4+ “I would buy again” intent score.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Business goal", "Grow first-time buyers, not just SKU count"],
                ["User need", "A recommendation I can explain to a guest"],
                ["Risk", "Age gate and shipping friction at checkout"],
              ].map(([t, d]) => (
                <article
                  key={t}
                  className="rounded-2xl bg-[#1a1214] p-5 text-rose-50"
                >
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#C4A35A]">
                    {t}
                  </p>
                  <p className="mt-2 text-sm leading-6">{d}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section n="05" title="Research" stage="Discovery">
            <SampleBadge />
            <p className="mt-4">
              Mixed methods: 8 remote interviews, a 42-response survey, and
              cart-abandonment notes from an assumed analytics snapshot.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  t: "Interviews",
                  n: "n = 8",
                  d: "Occasional buyers, 2 hosts, 1 collector. Theme: fear of looking uninformed.",
                },
                {
                  t: "Survey",
                  n: "n = 42",
                  d: "67% said filters feel expert-only. 54% abandoned after shipping estimate.",
                },
                {
                  t: "Analytics (assumed)",
                  n: "30-day snapshot",
                  d: "Highest drop-off: PLP → PDP, then checkout shipping step.",
                },
              ].map((c) => (
                <article
                  key={c.t}
                  className="rounded-2xl border border-[#eadfd3] bg-white p-5"
                >
                  <p className="text-xs font-semibold text-[#722F37]">{c.t}</p>
                  <p className="mt-1 font-mono text-2xl text-[#1a1214]">{c.n}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{c.d}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section n="06" title="Competitive Analysis" stage="Discovery">
            <SampleBadge />
            <div className="mt-6 overflow-x-auto rounded-2xl border border-[#eadfd3] bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#f7f4ef] text-[11px] uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Brand (assumed peers)</th>
                    <th className="px-4 py-3">Strength</th>
                    <th className="px-4 py-3">Gap we could own</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eadfd3] text-slate-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">Mass marketplace</td>
                    <td className="px-4 py-3">Price and SKU depth</td>
                    <td className="px-4 py-3">Guidance is ads, not taste</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Luxury merchant</td>
                    <td className="px-4 py-3">Photography, provenance</td>
                    <td className="px-4 py-3">Intimidating copy and price</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Subscription club</td>
                    <td className="px-4 py-3">Curation</td>
                    <td className="px-4 py-3">Poor one-off gift flow</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section n="07" title="Research Insights" stage="Discovery">
            <SampleBadge />
            <ol className="mt-6 space-y-3">
              {[
                "People shop by occasion, not appellation.",
                "Taste language must map to food and mood, not chemistry.",
                "Trust is delivery date + return policy, not more tasting notes.",
                "Gifting needs a ‘safe impressive’ default, not 200 similar reds.",
              ].map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-2xl border border-[#eadfd3] bg-white px-4 py-4"
                >
                  <span className="font-mono text-sm text-[#C4A35A]">
                    0{i + 1}
                  </span>
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section n="08" title="Define" stage="Define">
            <p>
              We framed the opportunity as a confidence problem, not a catalog
              problem. The design should translate expertise into a few
              consequential choices: occasion, flavor direction, budget.
            </p>
          </Section>

          <Section n="09" title="User Persona" stage="Define">
            <SampleBadge />
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#eadfd3] bg-white md:grid md:grid-cols-[13rem_1fr]">
              <div className="flex flex-col justify-end bg-gradient-to-b from-[#722F37] to-[#1a1214] p-6 text-white">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#C4A35A]">
                  Primary persona
                </p>
                <p className="mt-2 text-2xl font-bold">Meera, 34</p>
                <p className="mt-1 text-sm text-rose-100/80">
                  Product manager · Pune · Hosts monthly dinners
                </p>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <PersonaBlock
                  title="Goals"
                  items={[
                    "Look thoughtful without overspending",
                    "Pair wine with Indian and fusion menus",
                  ]}
                />
                <PersonaBlock
                  title="Frustrations"
                  items={[
                    "Filter walls",
                    "Shipping surprises at checkout",
                    "Fear of a ‘wrong’ bottle",
                  ]}
                />
                <PersonaBlock
                  title="Behaviors"
                  items={[
                    "Shops on phone after 9pm",
                    "Screenshots bottles from Instagram",
                  ]}
                />
                <PersonaBlock
                  title="Quote"
                  items={[
                    "If you tell me this goes with paneer and won’t taste like cough syrup, I’m in.",
                  ]}
                />
              </div>
            </div>
          </Section>

          <Section n="10" title="Empathy Map" stage="Define">
            <SampleBadge />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Says", "Just something nice for Saturday."],
                ["Thinks", "I hope this isn’t too sweet."],
                ["Does", "Opens three tabs, then WhatsApps a friend."],
                ["Feels", "Rushed, slightly embarrassed, hopeful."],
              ].map(([q, a]) => (
                <div
                  key={q}
                  className="rounded-2xl border border-[#eadfd3] bg-white p-5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#722F37]">
                    {q}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{a}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section n="11" title="User Journey" stage="Define">
            <SampleBadge />
            <div className="mt-6 grid gap-2 md:grid-cols-5">
              {[
                ["Trigger", "Dinner invite tonight", "High FOMO"],
                ["Browse", "Scrolls reds", "Overwhelmed"],
                ["Decide", "Picks by label art", "Unsure"],
                ["Pay", "Age gate + shipping", "Anxious"],
                ["Receive", "Bottle arrives warm", "Mixed"],
              ].map(([step, action, emotion]) => (
                <div
                  key={step}
                  className="rounded-2xl border border-[#eadfd3] bg-white p-4"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C4A35A]">
                    {step}
                  </p>
                  <p className="mt-2 text-sm font-medium">{action}</p>
                  <p className="mt-1 text-xs text-slate-500">{emotion}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Peak pain: decide + pay. That is where guidance and delivery
              honesty must sit.
            </p>
          </Section>

          <Section n="12" title="Problem Statement" stage="Define">
            <p className="rounded-2xl bg-[#1a1214] p-6 text-lg leading-8 text-rose-50 sm:p-8">
              Occasional wine buyers need a way to choose a bottle for a
              specific occasion with plain-language taste cues and transparent
              delivery — because current catalogs reward expertise they do not
              have.
            </p>
          </Section>

          <Section n="13" title="How Might We" stage="Define">
            <ul className="space-y-3">
              {[
                "HMW translate wine expertise into three decisions: occasion, flavor, budget?",
                "HMW make the ‘safe impressive’ bottle obvious for gifting?",
                "HMW show shipping and age requirements before emotional commitment?",
              ].map((h) => (
                <li
                  key={h}
                  className="rounded-2xl border border-dashed border-[#C4A35A] bg-white px-5 py-4 text-sm leading-6"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Section>

          <Section n="14" title="Ideation" stage="Ideate">
            <p>
              Crazy-8s produced 24 concepts. We clustered them into Taste
              Compass, Occasion Kits, Label Decoder, and Cellar Memory.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["Taste Compass", "Occasion Kits", "Label Decoder", "Cellar Memory"].map(
                (idea) => (
                  <div
                    key={idea}
                    className="rounded-2xl bg-gradient-to-br from-[#722F37] to-[#3b151c] p-5 text-center text-sm font-semibold text-white"
                  >
                    {idea}
                  </div>
                ),
              )}
            </div>
          </Section>

          <Section n="15" title="Feature Prioritization" stage="Ideate">
            <div className="grid gap-4 md:grid-cols-3">
              <Prio
                title="Must"
                items={["Occasion quiz", "Plain-language PDP", "Early shipping quote"]}
              />
              <Prio
                title="Should"
                items={["Gift wrap + note", "Pairing chips", "Age-gate progressive"]}
              />
              <Prio
                title="Later"
                items={["AR cellar", "Sommelier chat", "Subscription"]}
              />
            </div>
          </Section>

          <Section n="16" title="Information Architecture" stage="Ideate">
            <div className="rounded-2xl border border-[#eadfd3] bg-white p-5">
              <p className="text-center text-sm font-semibold">Home</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-5">
                {["Discover", "Shop", "Occasions", "Gifts", "Account"].map((n) => (
                  <div
                    key={n}
                    className="rounded-xl bg-[#f7f4ef] py-3 text-center text-xs font-medium"
                  >
                    {n}
                  </div>
                ))}
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-4">
                {["PDP", "Cart", "Checkout", "Order tracker"].map((n) => (
                  <div
                    key={n}
                    className="rounded-xl border border-dashed border-[#C4A35A] py-3 text-center text-xs"
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section n="17" title="User Flow" stage="Ideate">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                "Land",
                "Occasion",
                "3 bottles",
                "PDP",
                "Ship date",
                "Cart",
                "Age + pay",
                "Confirm",
              ].map((step, i, arr) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="rounded-full bg-[#722F37] px-3 py-1.5 text-xs font-medium text-white">
                    {step}
                  </span>
                  {i < arr.length - 1 ? (
                    <ArrowRight className="h-3.5 w-3.5 text-[#C4A35A]" />
                  ) : null}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Happy path never requires a region filter. Expert filters live
              behind “Browse all.”
            </p>
          </Section>

          <Section n="18" title="Wireframes" stage="Design">
            <p className="mb-6 text-sm text-slate-600">
              Low-fidelity frames to test hierarchy before visual design.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Home", "Discover", "PDP", "Checkout"].map((name) => (
                <div
                  key={name}
                  className="rounded-2xl border border-[#eadfd3] bg-white p-3"
                >
                  <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    {name}
                  </p>
                  <div className="space-y-2 rounded-xl bg-[#f3eee7] p-3">
                    <div className="h-16 rounded-lg bg-[#ddd4c8]" />
                    <div className="h-3 w-3/4 rounded bg-[#d4c8b8]" />
                    <div className="h-3 w-1/2 rounded bg-[#d4c8b8]" />
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="h-20 rounded-lg bg-[#e7dfd4]" />
                      <div className="h-20 rounded-lg bg-[#e7dfd4]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section n="19" title="UI Design" stage="Design">
            <p className="mb-6">
              Visual language: cellar warmth, not nightclub luxury. Photography
              is bottle-forward; type is editorial; CTAs are burgundy, never
              neon.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <UiScreen title="Home" kicker="Tonight’s table">
                <div className="h-24 rounded-xl bg-gradient-to-br from-[#722F37] to-[#1a1214]" />
                <p className="mt-3 text-xs font-semibold">Start with the occasion</p>
                <div className="mt-2 flex gap-2">
                  {["Dinner", "Gift", "Weekend"].map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-[#f7f4ef] px-2 py-1 text-[10px]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </UiScreen>
              <UiScreen title="PDP" kicker="Malbec · Mendoza">
                <div className="h-28 rounded-xl bg-[#3b151c]" />
                <p className="mt-3 text-xs font-semibold">Plum, cocoa, low oak</p>
                <p className="mt-1 text-[10px] text-slate-500">
                  Pairs with grilled lamb or mushroom biryani
                </p>
                <div className="mt-3 rounded-lg bg-[#722F37] py-2 text-center text-[10px] font-semibold text-white">
                  Add · delivers Fri
                </div>
              </UiScreen>
              <UiScreen title="Checkout" kicker="Two steps left">
                <div className="space-y-2">
                  <div className="h-8 rounded bg-[#f7f4ef]" />
                  <div className="h-8 rounded bg-[#f7f4ef]" />
                  <div className="rounded-lg border border-[#C4A35A] px-2 py-2 text-[10px]">
                    Age verified · ships to Pune
                  </div>
                </div>
              </UiScreen>
            </div>
          </Section>

          <Section n="20" title="Design System" stage="Design">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Color
                </p>
                <div className="mt-3 flex gap-2">
                  {[
                    ["#722F37", "Burgundy"],
                    ["#C4A35A", "Gold"],
                    ["#1a1214", "Ink"],
                    ["#f7f4ef", "Paper"],
                  ].map(([hex, name]) => (
                    <div key={hex} className="flex-1">
                      <div
                        className="h-14 rounded-xl border border-black/5"
                        style={{ background: hex }}
                      />
                      <p className="mt-1 text-[10px] text-slate-500">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Type & components
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  <li>Display: Sora / editorial weights</li>
                  <li>Buttons: filled burgundy, ghost gold</li>
                  <li>Chips: occasion, pairing, budget</li>
                  <li>Cards: 16px radius, paper fill, hairline border</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section n="21" title="Prototype" stage="Design">
            <p>
              Mid-fi Figma prototype covered Land → Occasion → 3 bottles → PDP
              → Checkout. Click targets were 44px+. Age gate used a
              date-of-birth field, not a yes/no that people tap through.
            </p>
          </Section>

          <Section n="22" title="Usability Testing" stage="Testing">
            <SampleBadge />
            <p className="mt-4">
              5 unmoderated tasks (assumed): buy a bottle for a vegetarian
              dinner under ₹2,000, arriving before Friday.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#eadfd3] bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#f7f4ef] text-[11px] uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Finding</th>
                    <th className="px-4 py-3">Severity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eadfd3]">
                  <tr>
                    <td className="px-4 py-3">
                      “Vegetarian” pairing was buried under red meat chips
                    </td>
                    <td className="px-4 py-3 text-[#722F37]">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      Shipping date appeared after add-to-cart
                    </td>
                    <td className="px-4 py-3 text-[#722F37]">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      Occasion quiz felt fun; 4/5 completed without filters
                    </td>
                    <td className="px-4 py-3 text-emerald-700">Positive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section n="23" title="Nielsen Heuristic Evaluation" stage="Testing">
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["Visibility of status", "Shipping ETA now on PDP and cart."],
                ["Match to real world", "Taste in food words, not chemistry."],
                ["User control", "Easy edit of occasion without restarting quiz."],
                ["Consistency", "Same chip language from quiz to PDP."],
                ["Error prevention", "Age + address before payment method."],
                ["Recognition", "Saved ‘house red’ on home after first order."],
              ].map(([h, d]) => (
                <div
                  key={h}
                  className="rounded-2xl border border-[#eadfd3] bg-white p-4"
                >
                  <p className="text-sm font-semibold">{h}</p>
                  <p className="mt-1 text-sm text-slate-600">{d}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section n="24" title="Iterations" stage="Testing">
            <div className="grid gap-4 md:grid-cols-2">
              <BeforeAfter
                label="Before"
                text="ETA only on checkout step 2. Vegetarian pairing hidden."
              />
              <BeforeAfter
                label="After"
                text="ETA on PDP CTA. Pairing chips: veg, spice, dessert first."
              />
            </div>
          </Section>

          <Section n="25" title="Final Design" stage="Testing">
            <p className="mb-6">
              The live story: land on occasion, see three honest
              recommendations, confirm taste in one sentence, know Friday
              delivery before you tap Add.
            </p>
            <div className="rounded-[1.75rem] bg-[#1a1214] p-6 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#C4A35A]">
                Oak & Cork · final
              </p>
              <p className="mt-3 max-w-xl text-2xl font-semibold text-white sm:text-3xl">
                Find a bottle you can explain at the table.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Occasion first", "Taste in food words", "ETA before cart"].map(
                  (p) => (
                    <div
                      key={p}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-5 text-sm text-rose-50"
                    >
                      {p}
                    </div>
                  ),
                )}
              </div>
            </div>
          </Section>

          <Section n="26" title="Learnings" stage="Testing">
            <ul className="space-y-3 text-sm leading-7 text-slate-700">
              <li>
                Expertise is a service, not a UI. Showing every filter is not
                being thorough; it is outsourcing the work to the user.
              </li>
              <li>
                Trust artifacts (ETA, age, returns) belong next to desire, not
                after it.
              </li>
              <li>
                Sample research is useful for process storytelling; real
                research would replace assumed n-sizes before a live launch.
              </li>
            </ul>
          </Section>

          <Section n="27" title="Next Steps">
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700">
              <li>Run 12 moderated sessions with first-time buyers in-market.</li>
              <li>Instrument quiz → PDP → pay funnel with real analytics.</li>
              <li>Pilot sommelier notes as optional progressive disclosure.</li>
              <li>Localize pairing language for regional cuisines.</li>
            </ol>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-xl border border-[#eadfd3] bg-white px-4 py-2.5 text-sm font-semibold"
              >
                All case studies
              </Link>
              <Link
                to="/learn/ui-ux-design"
                className="inline-flex items-center gap-2 rounded-xl bg-[#722F37] px-4 py-2.5 text-sm font-semibold text-white"
              >
                UI/UX Foundations course
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Section>
            </article>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

function SampleBadge() {
  return (
    <p className="inline-flex rounded-full bg-[#C4A35A]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b5420]">
      SAMPLE / ASSUMED research
    </p>
  );
}

function Section({
  n,
  title,
  stage,
  children,
}: {
  n: string;
  title: string;
  stage?: (typeof STAGES)[number];
  children: ReactNode;
}) {
  return (
    <section
      id={`s${n}`}
      className="scroll-mt-24 border-b border-[#eadfd3] py-8 last:border-b-0 sm:py-10"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="font-mono text-xs text-[#C4A35A]">{n}</p>
          <h2 className="mt-0.5 text-xl font-bold tracking-tight sm:text-2xl">
            {title}
          </h2>
        </div>
        {stage ? (
          <span className="rounded-full border border-[#eadfd3] bg-white px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#722F37]">
            {stage}
          </span>
        ) : null}
      </div>
      <div className="max-w-3xl text-[15px] leading-7 text-slate-700">
        {children}
      </div>
    </section>
  );
}

function GoalCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-[#eadfd3] bg-white p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#722F37]">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
    </div>
  );
}

function PersonaBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#722F37]">
        {title}
      </p>
      <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Prio({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-[#eadfd3] bg-white p-5">
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function UiScreen({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[1.4rem] border border-[#eadfd3] bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between px-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          {title}
        </span>
        <span className="text-[10px] text-[#C4A35A]">{kicker}</span>
      </div>
      <div className="rounded-xl border border-[#eadfd3] p-3">{children}</div>
    </div>
  );
}

function BeforeAfter({ label, text }: { label: string; text: string }) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        label === "After"
          ? "bg-[#722F37] text-white"
          : "border border-[#eadfd3] bg-white"
      }`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] opacity-80">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6">{text}</p>
    </div>
  );
}

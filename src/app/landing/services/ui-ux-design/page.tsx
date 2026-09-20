import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Figma,
  Layers3,
  LayoutDashboard,
  Monitor,
  MousePointerClick,
  Palette,
  PencilRuler,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import SEO from "../../../../seo/SEO";
import { PAGE_SEO } from "../../../../seo/pages";

const offerings = [
  {
    title: "Website UI",
    description: "Responsive marketing and product sites with a clear hierarchy, refined type, and layouts built to convert.",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    title: "Mobile app UI",
    description: "Native-feeling flows for iOS and Android—thumb-friendly, fast to scan, and consistent across screens.",
    icon: Smartphone,
  },
  {
    title: "SaaS dashboards",
    description: "Dense data made readable: information architecture, tables, filters, and empty states that stay calm.",
    icon: LayoutDashboard,
  },
  {
    title: "Wireframes & flows",
    description: "Structure before polish. We map journeys so development never starts from a guess.",
    icon: PencilRuler,
  },
  {
    title: "UX audits",
    description: "Find drop-off, friction, and accessibility gaps on live products—then ship a prioritized fix list.",
    icon: MousePointerClick,
  },
  {
    title: "Design systems",
    description: "Tokens, components, and rules so your product stays consistent as the team and surface area grow.",
    icon: Layers3,
  },
];

const process = [
  {
    step: "01",
    title: "Research",
    body: "Goals, users, competitors, and constraints. We write a short brief before a single frame is drawn.",
    icon: Users,
  },
  {
    step: "02",
    title: "Structure",
    body: "Sitemaps, user flows, and wireframes that lock navigation and content order.",
    icon: PencilRuler,
  },
  {
    step: "03",
    title: "Interface",
    body: "Visual system, components, and high-fidelity screens in Figma—ready for review.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Prototype",
    body: "Clickable prototypes for stakeholder walkthroughs and early usability checks.",
    icon: Figma,
  },
];

const deliverables = [
  "Figma files with organized pages",
  "User flows and annotated wireframes",
  "Responsive web and mobile screens",
  "Component library / starter system",
  "Prototype for stakeholder review",
  "Handoff notes for engineering",
];

const faqs = [
  {
    q: "What do you typically design?",
    a: "Marketing websites, SaaS dashboards, mobile app interfaces, landing pages, and design systems. Most work starts from a product or conversion goal—not a moodboard.",
  },
  {
    q: "Do you include research and wireframes?",
    a: "Yes. Discovery, flows, and wireframes come before visual design so we are not decorating the wrong structure.",
  },
  {
    q: "Can you redesign an existing product?",
    a: "Yes. We audit the current experience, keep what works, and redesign the screens and journeys that cause drop-off.",
  },
  {
    q: "How long does a UI/UX project take?",
    a: "Focused landing pages can ship in 1–2 weeks. Full product or website UI typically takes 3–8 weeks depending on scope and review cycles.",
  },
];

export default function UiUxDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const featured = offerings.find((item) => item.featured) ?? offerings[0];
  const rest = offerings.filter((item) => !item.featured);

  return (
    <>
      <SEO {...PAGE_SEO.uiUxDesign} />
      <Navigation />

      <main className="min-h-screen bg-white text-slate-900">
        <section className="relative overflow-hidden bg-[#060b14] pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-36">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  UI / UX design
                </div>

                <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  <span className="block">Interfaces people</span>
                  <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                    actually finish using
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  Research, flows, UI, and systems for websites, apps, and SaaS—so the product looks considered and the next action is obvious.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#offerings"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#061018] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    See what we design
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    Book a design consult
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Typical kickoff", value: "5–7 days" },
                  { label: "Core stack", value: "Figma" },
                  { label: "Handoff", value: "Dev-ready" },
                  { label: "Response", value: "24 hrs" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="offerings"
          className="scroll-mt-24 border-t border-slate-100 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                  Offerings
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
                  Product surfaces,
                  <span className="block text-slate-500">not just pretty screens</span>
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Pick a focused sprint or a full product UI. Every engagement includes structure first, then visual design.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-7">
              <article className="group relative overflow-hidden rounded-[1.75rem] bg-[#0f172a] lg:col-span-7 lg:min-h-[480px]">
                <img
                  src={featured.image}
                  alt="Designer reviewing a website interface on a laptop"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/55 to-transparent" />
                <div className="relative flex min-h-[380px] flex-col justify-end p-6 sm:min-h-[440px] sm:p-8 lg:min-h-[480px] lg:p-10">
                  <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-sm">
                    Featured
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{featured.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">{featured.description}</p>
                </div>
              </article>

              <div className="grid gap-4 lg:col-span-5">
                {rest.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-[1.35rem] border border-slate-200/80 bg-slate-50 p-4 sm:p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#0f172a]">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f5f7fb] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                Process
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                From brief to handoff
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                You always know the stage, the artifact, and what we need from you to keep moving.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.step} className="rounded-2xl border border-slate-200/80 bg-white p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tabular-nums text-slate-400">{item.step}</span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-[#0f172a]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                What you walk away with
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Files engineers can build from—not a folder of disconnected mockups.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                Common questions
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                If you already have Figma files or a live product, we can start from there.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700"
              >
                All services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q} className="py-5">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-[#0f172a]"
                    >
                      {faq.q}
                      <span className={`text-lg font-normal text-slate-400 transition ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                    {isOpen ? (
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{faq.a}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#060b14] py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to make the product easier to use?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Send the current site, app, or brief. We will reply with a scoped starting point—not a bloated proposal.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#061018] transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Start a UI/UX project
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View all services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

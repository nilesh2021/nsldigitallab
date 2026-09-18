import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Gauge,
  Layers,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../../seo/SEO";
import { PAGE_SEO } from "../../seo/pages";

const services = [
  {
    title: "SEO Services",
    eyebrow: "Search growth",
    description:
      "Technical foundations, content systems, and local visibility that help the right people find you—and convert.",
    outcomes: ["Keyword & content strategy", "Technical SEO audits", "Rank tracking & reporting"],
    link: "/services/seo-services",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    alt: "Analytics dashboard showing search performance",
    featured: true,
  },
  {
    title: "Web Design",
    eyebrow: "Sites that convert",
    description:
      "Fast, responsive websites with a premium look, clear messaging, and layouts built around leads and sales.",
    outcomes: ["Marketing websites", "Landing pages", "Performance & SEO-ready builds"],
    link: "/services/web-design",
    icon: MonitorSmartphone,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    alt: "Laptop showing a modern business website",
    featured: false,
  },
  {
    title: "UI/UX Design",
    eyebrow: "Product experience",
    description:
      "Research-led interfaces and journeys that feel obvious to use, look refined, and keep users moving.",
    outcomes: ["UX research & flows", "UI systems", "Prototypes & handoff"],
    link: "/services/ui-ux-design",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=80",
    alt: "Designer reviewing interface mockups on a desk",
    featured: false,
  },
  {
    title: "Social Media Marketing",
    eyebrow: "Brand presence",
    description:
      "Campaigns and content designed to earn attention, grow communities, and send qualified traffic back to your site.",
    outcomes: ["Content calendars", "Paid social support", "Creative & reporting"],
    link: "/services/social-media-marketing",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1400&q=80",
    alt: "Smartphone displaying social media content",
    featured: false,
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    body: "We map goals, audience, competitors, and constraints so the work starts from a clear brief.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Design",
    body: "Structure, copy, and visuals come together into an experience that is easy to understand and hard to ignore.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Launch",
    body: "We ship production-ready work—sites, campaigns, or SEO systems—with quality checks baked in.",
    icon: Gauge,
  },
  {
    step: "04",
    title: "Grow",
    body: "After launch we track what matters and iterate so the investment keeps compounding.",
    icon: Sparkles,
  },
];

const faqs = [
  {
    q: "How do we start a project?",
    a: "Share your goals and timeline through the contact form. We reply within one business day with a proposed scope, next steps, and a discovery call if it is a fit.",
  },
  {
    q: "Do you work with startups and established brands?",
    a: "Yes. Engagements range from a focused landing page or SEO audit to ongoing design, web, and marketing retainers.",
  },
  {
    q: "What does a typical timeline look like?",
    a: "Most websites and UI/UX projects ship in 3–8 weeks depending on scope. SEO and social programs run in monthly cycles after an initial setup sprint.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const featured = services.find((service) => service.featured) ?? services[0];
  const rest = services.filter((service) => service !== featured);

  return (
    <>
      <SEO {...PAGE_SEO.services} />
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
            <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  Services
                </div>

                <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  <span className="block">Work that looks sharp</span>
                  <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                    and actually grows
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  SEO, websites, UI/UX, and social marketing—planned as one system so your brand looks consistent and converts with less friction.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#service-offerings"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#061018] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    See offerings
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    Book a consultation
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Focus areas", value: "4" },
                  { label: "Typical kickoff", value: "7 days" },
                  { label: "Delivery", value: "Remote" },
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
          id="service-offerings"
          className="scroll-mt-24 border-t border-slate-100 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                  What we offer
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
                  Four services,
                  <span className="block text-slate-500">one growth stack</span>
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Pick a lane or combine them. Every engagement is scoped around your audience, offer, and the metric that actually matters.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-7">
              <Link
                to={featured.link}
                className="group relative overflow-hidden rounded-[1.75rem] bg-[#0f172a] lg:col-span-7 lg:min-h-[540px]"
              >
                <img
                  src={featured.image}
                  alt={featured.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/60 to-transparent" />
                <div className="relative flex min-h-[420px] flex-col justify-end p-6 sm:min-h-[500px] sm:p-8 lg:min-h-[540px] lg:p-10">
                  <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-sm">
                    {featured.eyebrow}
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{featured.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">{featured.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                    Explore SEO
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>

              <div className="grid gap-6 lg:col-span-5">
                {rest.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.title}
                      to={service.link}
                      className="group flex gap-4 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg sm:p-5"
                    >
                      <div className="relative hidden h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:block">
                        <img src={service.image} alt="" className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#0f172a]">{service.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{service.description}</p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700">
                          Learn more
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={`${service.title}-outcomes`}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                    {service.title}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f5f7fb] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                How we work
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                A process that stays visible
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                No black-box retainers. You always know the stage, the next deliverable, and why it exists.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.step}
                    className="rounded-2xl border border-slate-200/80 bg-white p-6"
                  >
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
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                Common questions
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Straightforward answers before you book a call. Need something more specific? Reach out and we will map it.
              </p>
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
              Ready to put a real system behind your digital presence?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Tell us what you are building. We will recommend a focused starting point—not a bloated proposal.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#061018] transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Start a project
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    category: "Website Design",
    title: "Agency Website",
    description:
      "Modern responsive business website focused on branding, SEO, and lead generation.",
    tags: ["React", "Tailwind", "SEO"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
    alt: "Laptop showing a modern agency website on a wooden desk",
  },
  {
    category: "UI/UX Design",
    title: "Dashboard Experience",
    description:
      "Clean dashboard interface designed with accessibility, usability, and performance in mind.",
    tags: ["Figma", "UX", "Prototype"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    alt: "Analytics dashboard with charts on a laptop screen",
  },
  {
    category: "Landing Pages",
    title: "High-Converting Pages",
    description:
      "Campaign pages structured around a single offer, faster load times, and clearer calls to action.",
    tags: ["CRO", "Copy", "A/B"],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80",
    alt: "Designer reviewing a landing page mockup on a tablet",
  },
];

export default function FeaturedWork() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section
      id="featured-work"
      className="scroll-mt-24 relative overflow-hidden bg-[#060b14] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.14) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-600/[0.08] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">
              Featured portfolio
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Selected work that
              <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                solves real problems
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Websites, dashboards, and landing pages where research and interface design turn into something that looks sharp and converts.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col divide-y divide-white/10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] lg:col-span-5">
            {projects.map((project, index) => {
              const isActive = index === active;
              return (
                <button
                  key={project.title}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`flex w-full cursor-pointer items-start gap-4 p-5 text-left transition-colors sm:p-6 ${
                    isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`mt-0.5 text-xs font-semibold tabular-nums tracking-widest ${
                      isActive ? "text-cyan-300" : "text-slate-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {project.category}
                    </span>
                    <span
                      className={`mt-1 block text-lg font-semibold tracking-tight ${
                        isActive ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {project.title}
                    </span>
                    <span className="mt-2 hidden text-sm leading-6 text-slate-400 sm:block">
                      {project.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`mt-1 h-4 w-4 shrink-0 ${
                      isActive ? "text-cyan-300" : "text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <article className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 lg:col-span-7 lg:min-h-[520px]">
            <img
              key={current.image}
              src={current.image}
              alt={current.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/40 to-transparent" />
            <div className="relative flex h-full min-h-[360px] flex-col justify-end p-6 sm:min-h-[420px] sm:p-8 lg:min-h-[520px] lg:p-10">
              <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-sm">
                {current.category}
              </span>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {current.title}
              </h3>
              <p className="mt-3 max-w-lg text-base leading-6 text-slate-300 sm:text-lg">
                {current.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-slate-400">Want something in this vein for your brand?</p>
          <Link
            to="/services"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-cyan-50"
          >
            Explore services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

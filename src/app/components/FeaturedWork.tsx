import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    category: "Website Design",
    title: "Agency Website",
    description:
      "Modern responsive business website focused on branding, SEO and lead generation.",
    tags: ["React", "Tailwind", "SEO"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
    alt: "Laptop showing a modern agency website on a wooden desk",
    featured: true,
  },
  {
    category: "UI/UX Design",
    title: "Dashboard Experience",
    description:
      "Clean dashboard interface designed with accessibility, usability and performance in mind.",
    tags: ["Figma", "UX", "Prototype"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard with charts on a laptop screen",
    featured: false,
  },
  {
    category: "Landing Pages",
    title: "High Converting Landing Pages",
    description:
      "Optimized landing pages designed to increase conversions, engagement and campaign performance.",
    tags: ["CRO", "Copy", "A/B"],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    alt: "Designer reviewing a landing page mockup on a tablet",
    featured: false,
  },
];

export default function FeaturedWork() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const supporting = projects.filter((project) => project !== featured);

  return (
    <section
      id="featured-work"
      className="scroll-mt-24 border-t border-slate-100 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
              Featured Portfolio
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl lg:leading-tight">
              Selected work that
              <span className="block text-slate-500">solves real problems</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore web and mobile projects where research, wireframing, and
            interface design come together into experiences that look sharp and
            convert.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-7">
          <article className="group relative overflow-hidden rounded-[1.75rem] bg-[#0f172a] lg:col-span-7 lg:min-h-[560px]">
            <img
              src={featured.image}
              alt={featured.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/55 to-transparent" />

            <div className="relative flex min-h-[420px] flex-col justify-end p-6 sm:min-h-[500px] sm:p-8 lg:min-h-[560px] lg:p-10">
              <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-sm">
                {featured.category}
              </span>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-white">
                  View case
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </article>

          <div className="grid gap-6 lg:col-span-5">
            {supporting.map((project) => (
              <article
                key={project.title}
                className="group grid overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-50 sm:grid-cols-[0.95fr_1.05fr] lg:grid-cols-1 xl:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative h-52 overflow-hidden sm:h-full lg:h-48 xl:h-full">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-600">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-[#0f172a]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 sm:flex-row sm:px-8">
          <p className="text-slate-600">Interested in seeing more of our work?</p>
          <Link
            to="/services"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#0f172a] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1e293b] hover:shadow-lg sm:px-8 sm:text-base"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

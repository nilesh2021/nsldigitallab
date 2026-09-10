import {
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: Globe,
    category: "Website Design",
    title: "Agency Website",
    description:
      "Modern responsive business website focused on branding, SEO and lead generation.",
    tags: ["React", "Tailwind", "SEO"],
  },
  {
    icon: LayoutDashboard,
    category: "UI/UX Design",
    title: "Dashboard Experience",
    description:
      "Clean dashboard interface designed with accessibility, usability and performance in mind.",
    tags: ["Figma", "UX", "Prototype"],
  },
  {
    icon: MonitorSmartphone,
    category: "Landing Pages",
    title: "High Converting Landing Pages",
    description:
      "Optimized landing pages designed to increase conversions, engagement and campaign performance.",
    tags: null,
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="featured-work"
      className="scroll-mt-24 border-t border-slate-100 bg-slate-50/60 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            Featured Portfolio
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl lg:leading-tight">
            UI/UX Case Studies
            <br className="hidden sm:block" />
            <span className="sm:ml-0"> That Solve Real Problems</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore selected web and mobile projects where user research, wireframing,
            prototyping and modern interface design come together to create intuitive,
            engaging and business-focused digital experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-cyan-600 sm:h-52">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_50%)]" />
                  <Icon className="relative h-14 w-14 text-white/90 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16" />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-600">
                    {project.category}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-[#0f172a] sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {project.description}
                  </p>

                  {project.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-5 text-slate-600">
            Interested in seeing more of our work?
          </p>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1e293b] hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

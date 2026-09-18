import {
  Search,
  Target,
  TrendingUp,
  Megaphone,
  BarChart3,
  Mail,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "SEO Growth",
    description:
      "Rank higher with technical SEO, content strategy, and search intent that brings qualified traffic.",
    href: "/services/seo-services",
    featured: true,
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Content systems and campaigns that keep your brand visible across the platforms that matter.",
    href: "/services/social-media-marketing",
    featured: true,
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description:
      "Paid campaigns on Google and Meta built around ROI, not vanity clicks.",
    href: "/#contact",
  },
  {
    icon: TrendingUp,
    title: "Content Marketing",
    description:
      "Useful content that attracts, educates, and converts your ideal customers.",
    href: "/#contact",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Clear reporting so you know what is working, what is not, and what to do next.",
    href: "/#contact",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture sequences that turn interest into repeat conversations and conversions.",
    href: "/#contact",
  },
];

export default function Services() {
  const featured = services.filter((service) => service.featured);
  const rest = services.filter((service) => !service.featured);

  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-slate-100 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
              <Sparkles className="h-3.5 w-3.5" />
              Our Expertise
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Services that turn
              <span className="block text-slate-500">attention into growth</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            UI/UX, websites, SEO, and digital marketing — built as one system so
            visitors find you, trust you, and take action.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {featured.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-[#060b14] p-7 text-white sm:p-8 lg:col-span-6"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <service.icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                    <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}

          {rest.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group flex cursor-pointer flex-col rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 lg:col-span-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm ring-1 ring-slate-200">
                  <service.icon className="h-4.5 w-4.5 h-4 w-4" />
                </div>
                <span className="text-xs font-medium tabular-nums text-slate-300">
                  {String(index + 3).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#0f172a]">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700">
                Talk to us
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <p className="text-slate-600">
            Need a full stack of design, development, and growth?
          </p>
          <Link
            to="/services"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e293b]"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

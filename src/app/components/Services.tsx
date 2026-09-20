import {
  ArrowUpRight,
  Layers,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Search,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const coreServices = [
  {
    icon: Search,
    number: "01",
    title: "SEO Services",
    description:
      "Technical SEO, content, and search intent that bring qualified traffic—not just rankings.",
    href: "/services/seo-services",
    span: "lg:col-span-7 lg:row-span-2",
    featured: true,
  },
  {
    icon: MonitorSmartphone,
    number: "02",
    title: "Web Design",
    description:
      "Fast, conversion-led websites with clear messaging and a premium look.",
    href: "/services/web-design",
    span: "lg:col-span-5",
    featured: false,
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Design",
    description:
      "Research-led interfaces that feel obvious to use and keep people moving.",
    href: "/services/ui-ux-design",
    span: "lg:col-span-5",
    featured: false,
  },
];

const supporting = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
  },
  {
    icon: Layers,
    title: "PPC & Content",
    href: "/#contact",
  },
  {
    icon: Sparkles,
    title: "Analytics & Email",
    href: "/#contact",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-[#060b14] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.14) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/[0.08] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              Services
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Design, build, and grow
              <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                as one system
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            UI/UX, websites, SEO, and marketing — so people find you, trust the
            experience, and take action.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-5">
          {coreServices.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className={`group relative flex min-h-[220px] cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/30 hover:bg-white/[0.07] sm:p-8 ${service.span}`}
            >
              {service.featured && (
                <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl transition-opacity group-hover:opacity-100" />
              )}

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium tabular-nums tracking-widest text-slate-500">
                  {service.number}
                </span>
              </div>

              <div className="relative mt-auto pt-10">
                <h3
                  className={`font-semibold tracking-tight text-white ${
                    service.featured ? "text-2xl sm:text-3xl" : "text-xl"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300">
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {supporting.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-cyan-400/25 hover:bg-white/[0.06]"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-cyan-300">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {item.title}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-slate-400">
            Need the full stack — design, development, and growth?
          </p>
          <Link
            to="/services"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-cyan-50"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

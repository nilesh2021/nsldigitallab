import { Link } from "react-router-dom";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const stats = [
  { value: "50+", label: "Resources" },
  { value: "15+", label: "Templates" },
  { value: "100%", label: "Free" },
  { value: "Weekly", label: "Updates" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060b14] pt-28 pb-10 sm:pt-32 sm:pb-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[min(100%,640px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              100% Free Learning Library
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Digital Marketing, SEO
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                &amp; UI/UX Resources
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              Checklists, interview questions, Figma files, templates and
              guides to build digital skills faster.
            </p>

            <Link
              to="/resources#resourcesGrid"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:bg-cyan-300"
            >
              <Download size={16} />
              Browse resources
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[420px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3"
              >
                <p className="text-xl font-bold text-cyan-300">{stat.value}</p>
                <p className="mt-0.5 text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

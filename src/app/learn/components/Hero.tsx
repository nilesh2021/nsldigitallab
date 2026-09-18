import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "60+", label: "Lessons" },
  { value: "3", label: "Learning paths" },
  { value: "100%", label: "Free to start" },
  { value: "Weekly", label: "New content" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060b14] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-cyan-300">Free learning platform</span>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <span>UI/UX · SEO · Marketing</span>
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn digital skills
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                that get you hired
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Practical UI/UX, SEO, and digital marketing tutorials with
              projects, interview prep, and case studies — built for students
              and career switchers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#060b14] shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 sm:text-base"
              >
                <BookOpen className="h-4 w-4" />
                Start a path
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] sm:text-base"
              >
                Explore articles
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm"
              >
                <p className="text-2xl font-bold tracking-tight text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

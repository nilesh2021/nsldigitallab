import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#060b14] py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[min(100%,560px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-cyan-300">
          Start this week
        </span>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Build real skills.
          <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
            Completely free.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
          Learn UI/UX, SEO, and digital marketing with practical projects and
          career-focused lessons.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#courses"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#060b14] transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Choose a path
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            Browse articles
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span>Free courses</span>
          <span>Practical projects</span>
          <span>Weekly updates</span>
        </div>
      </div>
    </section>
  );
}

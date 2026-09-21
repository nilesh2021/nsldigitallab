import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const paths = [
  {
    title: "UI/UX Design Foundations",
    description: "Research through a portfolio case study.",
    to: "/learn/ui-ux-design",
  },
  {
    title: "React Foundations",
    description: "JSX to a first deployed app.",
    to: "/learn/react-foundations",
  },
];

export default function LearnTeaser() {
  return (
    <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
              From the studio
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Free skill guides
              <span className="block text-slate-500">we use on client work</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Practical paths for UI/UX and React — written the same way we
              brief and build for clients. No enrollment, no paywall.
            </p>
          </div>
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f172a] transition hover:text-cyan-800"
          >
            <BookOpen className="h-4 w-4" />
            Browse all guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {paths.map((path) => (
            <Link
              key={path.to}
              to={path.to}
              className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70"
            >
              <h3 className="text-lg font-semibold text-[#0f172a]">
                {path.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {path.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800">
                Start this path
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

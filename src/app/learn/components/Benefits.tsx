import { CheckCircle2 } from "lucide-react";
import { benefits } from "../data/benefits";

export default function Benefits() {
  return (
    <section className="border-t border-slate-100 bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
              Why learn here
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Skills employers
              <span className="block text-slate-500">actually look for</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Short lessons, real projects, and career context — so you leave
              with work you can show, not just notes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                <h3 className="mt-3 font-semibold text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

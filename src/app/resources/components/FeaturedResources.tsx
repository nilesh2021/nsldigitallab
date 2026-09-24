import { Link } from "react-router-dom";
import { ArrowRight, Download, Star } from "lucide-react";

import { resources } from "../../../data/resources";

const spotlight = [...resources].sort((a, b) => b.downloads - a.downloads)[0];

export default function FeaturedResources() {
  if (!spotlight) {
    return null;
  }

  return (
    <section className="bg-[#fafaf7] pb-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          to={`/resources/${spotlight.slug}`}
          className="group flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 ring-1 ring-slate-200/70 transition hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)] hover:ring-slate-300 sm:gap-4"
        >
          <img
            src={spotlight.image}
            alt=""
            className="h-10 w-10 shrink-0 rounded-xl object-cover"
          />

          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              Most downloaded
            </p>
            <p className="mt-0.5 truncate text-sm font-semibold text-slate-900 sm:text-base">
              {spotlight.title}
            </p>
          </div>

          <span className="hidden shrink-0 items-center gap-1.5 text-sm text-slate-500 sm:inline-flex">
            <Download className="h-4 w-4" />
            {spotlight.downloads.toLocaleString()}
          </span>

          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition group-hover:bg-slate-800 sm:text-sm">
            Get it free
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>
  );
}

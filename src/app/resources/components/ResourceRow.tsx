import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

import { resourcePath } from "../../../data/resources";
import type { Resource } from "./ResourceCard";

type Props = {
  resource: Resource;
};

export default function ResourceRow({ resource }: Props) {
  const isNew = resource.downloads === 0;
  const className =
    "group flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] hover:ring-slate-300 sm:gap-4 sm:p-4";

  const row = (
    <>
      <img
        src={resource.image}
        alt=""
        loading="lazy"
        className="h-14 w-14 shrink-0 rounded-xl object-cover sm:h-16 sm:w-16"
      />

      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 items-center gap-2">
          <h3 className="truncate text-sm font-semibold text-slate-900 group-hover:text-cyan-800 sm:text-base">
            {resource.title}
          </h3>
          {resource.premium ? (
            <span className="shrink-0 rounded-full bg-amber-400 px-2 py-0.5 text-[11px] font-semibold text-slate-900">
              Premium
            </span>
          ) : null}
          {isNew ? (
            <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
              New
            </span>
          ) : null}
        </div>

        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
          <span className="font-semibold text-cyan-700">{resource.category}</span>
          <span className="text-slate-300" aria-hidden>
            ·
          </span>
          <span>{resource.type}</span>
          {isNew ? null : (
            <>
              <span className="text-slate-300" aria-hidden>
                ·
              </span>
              <span className="inline-flex items-center gap-1">
                <Download className="h-3.5 w-3.5" />
                {resource.downloads.toLocaleString()}
                <span className="hidden sm:inline">downloads</span>
              </span>
            </>
          )}
        </p>

        <p className="mt-1 hidden truncate text-sm text-slate-500 md:block">
          {resource.description}
        </p>
      </div>

      <span
        className={`hidden shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold sm:inline-flex ${
          resource.premium
            ? "bg-amber-400 text-slate-900"
            : "bg-slate-900 text-white"
        }`}
      >
        {resource.buttonText}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>

      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white sm:hidden">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </>
  );

  if (resource.purchaseUrl) {
    return (
      <a href={resource.purchaseUrl} className={className}>
        {row}
      </a>
    );
  }

  return (
    <Link to={resourcePath(resource)} className={className}>
      {row}
    </Link>
  );
}

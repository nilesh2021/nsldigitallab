import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

import type { Resource } from "./ResourceCard";

type Props = {
  resource: Resource;
};

export default function ResourceRow({ resource }: Props) {
  const isNew = resource.downloads === 0;

  return (
    <Link
      to={`/resources/${resource.slug}`}
      className="group flex items-center gap-3 px-3 py-2 transition hover:bg-slate-50 sm:gap-4 sm:px-4"
    >
      <img
        src={resource.image}
        alt=""
        loading="lazy"
        className="h-10 w-10 shrink-0 rounded-lg object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-slate-900 group-hover:text-cyan-800">
          {resource.title}
        </h3>
        <p className="mt-0.5 hidden truncate text-xs text-slate-500 sm:block">
          {resource.description}
        </p>
        <p className="mt-0.5 truncate text-xs text-slate-500 sm:hidden">
          {resource.category} · {resource.type}
          {isNew ? " · New" : ` · ${resource.downloads.toLocaleString()} downloads`}
        </p>
      </div>

      <span className="hidden w-36 shrink-0 md:block">
        <span className="rounded-full bg-cyan-50 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-700">
          {resource.category}
        </span>
      </span>

      <span className="hidden w-24 shrink-0 text-xs font-medium text-slate-600 sm:block">
        {resource.type}
      </span>

      <span className="hidden w-20 shrink-0 text-xs text-slate-500 sm:block">
        {isNew ? (
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
            New
          </span>
        ) : (
          <span className="inline-flex items-center gap-1">
            <Download className="h-3.5 w-3.5" />
            {resource.downloads.toLocaleString()}
          </span>
        )}
      </span>

      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export type Resource = {
  id: number;
  title: string;
  slug: string;
  category: string;
  type: string;
  description: string;
  downloads: number;
  image: string;
  buttonText: string;
  icon?: string;
};

type Props = {
  resource: Resource;
  compact?: boolean;
};

export default function ResourceCard({ resource, compact = false }: Props) {
  const isNew = resource.downloads === 0;

  return (
    <Link
      to={`/resources/${resource.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.3)] hover:ring-slate-300"
    >
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          compact ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <img
          src={resource.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-slate-900 shadow-sm backdrop-blur">
          {resource.type}
        </span>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-5"}`}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
          {resource.category}
        </p>

        <h3
          className={`mt-1.5 font-semibold leading-snug tracking-tight text-slate-900 ${
            compact ? "text-base" : "text-lg"
          }`}
        >
          {resource.title}
        </h3>

        <p
          className={`mt-1.5 text-sm leading-6 text-slate-600 ${
            compact ? "mb-3 line-clamp-1" : "mb-5 line-clamp-2"
          }`}
        >
          {resource.description}
        </p>

        <div
          className={`mt-auto flex items-center justify-between gap-3 border-t border-slate-100 ${
            compact ? "pt-3" : "pt-4"
          }`}
        >
          {isNew ? (
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
              New
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <Download className="h-3.5 w-3.5" />
              {resource.downloads.toLocaleString()}
              {compact ? null : " downloads"}
            </span>
          )}
          <span
            className={`inline-flex items-center gap-1 font-semibold text-slate-900 ${
              compact ? "text-xs" : "text-sm"
            }`}
          >
            {resource.buttonText}
            <span
              className={`flex items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-slate-900 group-hover:text-white ${
                compact ? "h-6 w-6" : "h-7 w-7"
              }`}
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

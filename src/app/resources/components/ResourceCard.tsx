import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

type Resource = {
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
};

export default function ResourceCard({ resource }: Props) {
  return (
    <Link
      to={`/resources/${resource.slug}`}
      className="group flex items-start gap-4 rounded-2xl border border-transparent px-3 py-4 transition duration-200 hover:border-cyan-200/80 hover:bg-white hover:shadow-md hover:shadow-slate-200/50 sm:gap-5 sm:px-4 sm:py-5"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-20 sm:w-20">
        <img
          src={resource.image}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cyan-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
            {resource.category}
          </span>
          <span className="text-[11px] font-medium text-slate-400">
            {resource.type}
          </span>
        </div>

        <h3 className="mt-1.5 text-base font-semibold tracking-tight text-[#0f172a] group-hover:text-cyan-800 sm:text-lg">
          {resource.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">
          {resource.description}
        </p>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
            <Download className="h-3.5 w-3.5" />
            {resource.downloads.toLocaleString()} downloads
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700">
            {resource.buttonText}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

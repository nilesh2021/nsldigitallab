import { ArrowUpRight } from "lucide-react";
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
      className="group flex h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-lg hover:shadow-slate-200/70"
    >
      <div className="relative hidden w-[132px] shrink-0 overflow-hidden sm:block">
        <img
          src={resource.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-cyan-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
            {resource.category}
          </span>
          <span className="text-[11px] font-medium text-slate-400">
            {resource.type}
          </span>
        </div>

        <h3 className="mt-2 line-clamp-2 text-[15px] font-semibold leading-snug text-[#0f172a]">
          {resource.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-500">
          {resource.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-[11px] text-slate-400">
            {resource.downloads.toLocaleString()} downloads
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-700">
            {resource.buttonText}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

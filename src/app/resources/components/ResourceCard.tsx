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
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}

      <div className="h-48 bg-slate-100 overflow-hidden">
        <img
          src={resource.image}
          alt={resource.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
            {resource.category}
          </span>

          <span className="text-2xl">{resource.icon}</span>
        </div>

        <h3 className="mt-3 text-xl font-bold text-slate-900">
          {resource.title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          {resource.description}
        </p>

        <div className="mt-auto pt-3">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>{resource.type}</span>
            <span>{resource.downloads.toLocaleString()} Downloads</span>
          </div>

          <Link
            to={`/resources/${resource.slug}`}
            className="mt-6 flex justify-center rounded-xl bg-gradient-to-r from-[#5A14D6] to-[#2563EB] px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-[#4810B0] hover:to-[#1D4ED8] hover:shadow-xl" 
          >
            Download Free
          </Link>
        </div>
      </div>

    </div>
  );
}
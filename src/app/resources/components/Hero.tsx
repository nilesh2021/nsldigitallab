import { resources } from "../../../data/resources";

const categoryCount = new Set(resources.map((resource) => resource.category)).size;
const totalDownloads = resources.reduce(
  (sum, resource) => sum + resource.downloads,
  0
);

const stats = [
  `${resources.length} resources`,
  `${categoryCount} categories`,
  `${totalDownloads.toLocaleString()}+ downloads`,
];

export default function Hero() {
  return (
    <section className="relative bg-[#060b14]">
      <div className="h-24 sm:h-28" aria-hidden />

      <div className="relative -mt-8 rounded-t-[2rem] bg-[#fafaf7] pb-4 pt-6 sm:pb-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Free resources
            </h1>
            <p className="mt-1 hidden text-sm text-slate-600 sm:block sm:text-base">
              Checklists, templates, interview questions and Figma files for
              design, SEO and marketing.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-2 text-sm text-slate-500">
            {stats.map((stat, index) => (
              <li key={stat} className="flex items-center gap-2">
                {index > 0 ? <span className="text-slate-300" aria-hidden>·</span> : null}
                <span className="font-medium text-slate-700">{stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

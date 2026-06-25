import { resources } from "../../../data/resources";

export default function CategoryFilter() {
  const categories = [
    "All",
    ...new Set(resources.map((resource) => resource.category)),
  ];

  return (
    <section className="bg-white py-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 hover:shadow-md"
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}
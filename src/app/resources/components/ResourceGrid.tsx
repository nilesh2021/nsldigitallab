import { useMemo, useState } from "react";
import { resources } from "../../../data/resources";
import CategoryFilter from "./CategoryFilter";
import ResourceCard from "./ResourceCard";

export default function ResourceGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(resources.map((resource) => resource.category))],
    []
  );

  const filteredResources =
    activeCategory === "All"
      ? resources
      : resources.filter((resource) => resource.category === activeCategory);

  return (
    <section className="scroll-mt-24 bg-white py-10 sm:py-12" id="resourcesGrid">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
              Browse the library
            </h2>
            <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-600">
              Templates, checklists, interview questions and practical tools.
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div
          className={`mt-7 grid gap-4 ${
            filteredResources.length === 1
              ? "max-w-xl"
              : "sm:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}

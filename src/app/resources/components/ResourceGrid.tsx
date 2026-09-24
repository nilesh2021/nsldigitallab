import { useEffect, useMemo, useState } from "react";
import { LayoutGrid, List, Search, SearchX, X } from "lucide-react";

import { resources } from "../../../data/resources";
import CategoryFilter from "./CategoryFilter";
import ResourceCard from "./ResourceCard";
import ResourceRow from "./ResourceRow";

type SortOption = "popular" | "newest";
type ViewMode = "list" | "grid";

const VIEW_STORAGE_KEY = "nsl-resources-view";

function getInitialView(): ViewMode {
  try {
    return window.localStorage.getItem(VIEW_STORAGE_KEY) === "grid" ? "grid" : "list";
  } catch {
    return "list";
  }
}

export default function ResourceGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("popular");
  const [view, setView] = useState<ViewMode>(getInitialView);

  useEffect(() => {
    try {
      window.localStorage.setItem(VIEW_STORAGE_KEY, view);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }, [view]);

  const { categories, counts } = useMemo(() => {
    const counts: Record<string, number> = { All: resources.length };
    for (const resource of resources) {
      counts[resource.category] = (counts[resource.category] ?? 0) + 1;
    }
    return { categories: Object.keys(counts), counts };
  }, []);

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return resources
      .filter(
        (resource) =>
          activeCategory === "All" || resource.category === activeCategory
      )
      .filter((resource) => {
        if (!normalizedQuery) return true;
        const haystack = [
          resource.title,
          resource.description,
          ...(resource.tags ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .sort((a, b) =>
        sort === "popular" ? b.downloads - a.downloads : b.id - a.id
      );
  }, [activeCategory, query, sort]);

  const hasFilters = activeCategory !== "All" || query.trim().length > 0;

  function clearFilters() {
    setActiveCategory("All");
    setQuery("");
  }

  const viewButtonClass = (mode: ViewMode) =>
    `flex h-8 w-8 items-center justify-center rounded-full transition ${
      view === mode
        ? "bg-slate-900 text-white"
        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
    <section
      className="scroll-mt-20 bg-[#fafaf7] pb-16"
      id="resourcesGrid"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sticky top-16 z-20 -mx-6 border-b border-slate-200 bg-[#fafaf7]/90 px-6 backdrop-blur-md sm:top-20 lg:-mx-8 lg:px-8">
          <div className="flex flex-col gap-2 pt-2 lg:flex-row lg:items-end lg:gap-4">
            <div className="min-w-0 lg:flex-1">
              <CategoryFilter
                categories={categories}
                counts={counts}
                active={activeCategory}
                onChange={setActiveCategory}
              />
            </div>

            <div className="flex items-center gap-2 pb-2">
              <label className="relative min-w-0 flex-1 lg:w-56 lg:flex-none">
                <span className="sr-only">Search resources</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search"
                  className="w-full rounded-full border border-slate-200 bg-white py-1.5 pl-9 pr-8 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 [&::-webkit-search-cancel-button]:hidden"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                ) : null}
              </label>

              <label className="shrink-0">
                <span className="sr-only">Sort resources</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortOption)}
                  className="cursor-pointer rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                >
                  <option value="popular">Popular</option>
                  <option value="newest">Newest</option>
                </select>
              </label>

              <div
                className="flex shrink-0 items-center gap-0.5 rounded-full border border-slate-200 bg-white p-0.5"
                role="group"
                aria-label="View mode"
              >
                <button
                  type="button"
                  onClick={() => setView("list")}
                  aria-pressed={view === "list"}
                  aria-label="List view"
                  title="List view"
                  className={viewButtonClass("list")}
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  aria-pressed={view === "grid"}
                  aria-label="Grid view"
                  title="Grid view"
                  className={viewButtonClass("grid")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>

              <p className="hidden shrink-0 text-xs text-slate-500 sm:block" aria-live="polite">
                <span className="font-semibold text-slate-900">
                  {filteredResources.length}
                </span>
                /{resources.length}
              </p>
            </div>
          </div>
        </div>

        {filteredResources.length === 0 ? (
          <div className="mt-6 flex flex-col items-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <SearchX className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              No resources found
            </h3>
            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-600">
              Try a different keyword or browse another category.
            </p>
            {hasFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Clear filters
              </button>
            ) : null}
          </div>
        ) : view === "list" ? (
          <div className="mt-4 divide-y divide-slate-100 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70">
            {filteredResources.map((resource) => (
              <ResourceRow key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} compact />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

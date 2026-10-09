type Props = {
  categories: string[];
  counts: Record<string, number>;
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  counts,
  active,
  onChange,
}: Props) {
  return (
    <div
      className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label="Filter by category"
    >
      {categories.map((category) => {
        const isActive = category === active;

        return (
          <button
            key={category}
            type="button"
            role="tab"
            onClick={() => onChange(category)}
            aria-selected={isActive}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900 hover:ring-slate-300"
            }`}
          >
            {category}
            <span
              className={`min-w-5 rounded-full px-1.5 py-0.5 text-center text-[11px] font-semibold tabular-nums ${
                isActive ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"
              }`}
            >
              {counts[category] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}

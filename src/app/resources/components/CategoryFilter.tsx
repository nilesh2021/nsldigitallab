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
      className="-mb-px flex gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
            className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap border-b-2 pb-2.5 pt-1 text-sm font-semibold transition ${
              isActive
                ? "border-cyan-500 text-slate-900"
                : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
            }`}
          >
            {category}
            <span
              className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
                isActive ? "bg-cyan-50 text-cyan-700" : "bg-slate-100 text-slate-500"
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

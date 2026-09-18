type Props = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category === active;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
              isActive
                ? "border-cyan-400 bg-cyan-400 text-[#0f172a]"
                : "border-slate-200 bg-white text-slate-600 hover:border-cyan-400 hover:text-cyan-700"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

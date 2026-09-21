import { Check } from "lucide-react";

type Props = {
  current: number;
  total: number;
  complete: boolean;
  onMarkComplete: () => void;
};

export default function LessonProgress({
  current,
  total,
  complete,
  onMarkComplete,
}: Props) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-slate-500">
        Lesson {current} of {total}
      </p>
      {complete ? (
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
          <Check className="h-4 w-4" />
          Completed ✓
        </span>
      ) : (
        <button
          type="button"
          onClick={onMarkComplete}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Mark as complete
        </button>
      )}
    </div>
  );
}

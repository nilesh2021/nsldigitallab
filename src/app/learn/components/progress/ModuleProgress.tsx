import ProgressBar from "./ProgressBar";

type Props = {
  moduleNumber: number;
  moduleCount: number;
  completedLessons: number;
  totalLessons: number;
  percent: number;
  className?: string;
};

export default function ModuleProgress({
  moduleNumber,
  moduleCount,
  completedLessons,
  totalLessons,
  percent,
  className = "mt-3 max-w-md",
}: Props) {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-xs font-medium text-slate-200">
          Module {moduleNumber} of {moduleCount}
        </p>
        <p className="text-[11px] text-slate-400">
          {completedLessons} of {totalLessons} lessons complete
        </p>
      </div>
      <ProgressBar
        className="mt-1.5"
        value={percent}
        label={`Module progress ${percent} percent`}
        trackClassName="bg-white/10"
        barClassName="bg-cyan-400"
      />
    </div>
  );
}

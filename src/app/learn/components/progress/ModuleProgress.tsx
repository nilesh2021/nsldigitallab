import ProgressBar from "./ProgressBar";

type Props = {
  moduleNumber: number;
  moduleCount: number;
  completedLessons: number;
  totalLessons: number;
  percent: number;
};

export default function ModuleProgress({
  moduleNumber,
  moduleCount,
  completedLessons,
  totalLessons,
  percent,
}: Props) {
  return (
    <div className="mt-5 max-w-md">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium text-slate-200">
          Module {moduleNumber} of {moduleCount}
        </p>
        <p className="text-xs text-slate-400">
          {completedLessons} of {totalLessons} lessons complete
        </p>
      </div>
      <ProgressBar
        className="mt-2"
        value={percent}
        label={`Module progress ${percent} percent`}
        trackClassName="bg-white/10"
        barClassName="bg-cyan-400"
      />
    </div>
  );
}

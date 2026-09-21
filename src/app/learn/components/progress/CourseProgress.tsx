import ProgressBar from "./ProgressBar";
import { CatalogLesson } from "../../progress/types";

type Props = {
  percent: number;
  completedLessons: number;
  totalLessons: number;
  completedModules: number;
  totalModules: number;
  nextLesson: CatalogLesson | null;
  isCourseComplete: boolean;
  hydrated: boolean;
};

export default function CourseProgress({
  percent,
  completedLessons,
  totalLessons,
  completedModules,
  totalModules,
  nextLesson,
  isCourseComplete,
  hydrated,
}: Props) {
  return (
    <div className="mt-5 max-w-xl rounded-xl border border-white/[0.08] bg-white/[0.04] p-4">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-semibold text-white">
          {hydrated ? `${percent}% Complete` : "Your progress"}
        </p>
        <p className="text-xs text-slate-400">
          {hydrated
            ? `${completedLessons} of ${totalLessons} lessons · ${completedModules} of ${totalModules} modules`
            : "Loading saved progress…"}
        </p>
      </div>
      <ProgressBar
        className="mt-2.5"
        value={hydrated ? percent : 0}
        label="Course progress"
        trackClassName="bg-white/10"
        barClassName="bg-cyan-400"
      />
      {hydrated && isCourseComplete ? (
        <p className="mt-3 text-sm font-medium text-cyan-200">
          You finished every lesson in this path.
        </p>
      ) : hydrated && nextLesson ? (
        <p className="mt-3 text-xs leading-5 text-slate-400">
          Next: {nextLesson.title}
        </p>
      ) : null}
    </div>
  );
}

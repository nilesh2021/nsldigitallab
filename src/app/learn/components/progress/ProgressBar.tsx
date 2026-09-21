type Props = {
  value: number;
  label?: string;
  className?: string;
  trackClassName?: string;
  barClassName?: string;
};

export default function ProgressBar({
  value,
  label,
  className = "",
  trackClassName = "bg-slate-200",
  barClassName = "bg-cyan-500",
}: Props) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={className}>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
        aria-label={label ?? "Progress"}
        className={`h-1.5 w-full overflow-hidden rounded-full ${trackClassName}`}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-300 ${barClassName}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}

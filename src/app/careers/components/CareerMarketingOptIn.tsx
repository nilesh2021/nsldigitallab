type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  className?: string;
  /** Dark listing form vs light modal */
  variant?: "dark" | "light";
};

export default function CareerMarketingOptIn({
  checked,
  onChange,
  id = "career-marketing-opt-in",
  className = "",
  variant = "light",
}: Props) {
  const label =
    variant === "dark"
      ? "text-slate-400 group-hover:text-slate-300"
      : "text-slate-600 group-hover:text-slate-700";

  return (
    <label
      htmlFor={id}
      className={`group flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-3 text-sm ${
        variant === "dark"
          ? "border-white/[0.08] bg-white/[0.03]"
          : "border-slate-200 bg-slate-50"
      } ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
      />
      <span className={label}>
        Email me about future freelance roles and NSL Digital Lab updates. You can unsubscribe
        anytime. Optional — does not affect this application.
      </span>
    </label>
  );
}

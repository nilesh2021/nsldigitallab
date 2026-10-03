type Props = {
  title: string;
  description: string;
};

export default function BestForBadge({ title, description }: Props) {
  return (
    <div className="rounded-2xl border border-cyan-200/80 bg-cyan-50/80 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-800">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
    </div>
  );
}

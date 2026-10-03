import { CheckCircle2, MinusCircle } from "lucide-react";

type Props = {
  heading?: string;
  productName: string;
  pros: string[];
  cons: string[];
};

export default function ProsCons({ heading, productName, pros, cons }: Props) {
  return (
    <div className="scroll-mt-24">
      {heading ? (
        <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
          {heading}
        </h2>
      ) : null}
      <p className="mt-2 text-sm text-slate-600">
        Balanced view of {productName}—not a sales pitch.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-[#0f172a]">Pros</h3>
          <ul className="mt-4 space-y-3">
            {pros.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-700"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-[#0f172a]">Cons</h3>
          <ul className="mt-4 space-y-3">
            {cons.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-700"
              >
                <MinusCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

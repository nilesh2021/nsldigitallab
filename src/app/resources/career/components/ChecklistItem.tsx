import { CheckCircle2 } from "lucide-react";

type Props = {
  children: string;
};

export default function ChecklistItem({ children }: Props) {
  return (
    <li className="flex items-start gap-3 text-sm leading-6 text-slate-700 print:text-black">
      <CheckCircle2
        className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 print:text-slate-700"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}

import { ATS_CHECKLIST_SECTIONS } from "../data/atsChecklistContent";
import ChecklistItem from "./ChecklistItem";

type Props = {
  id?: string;
  className?: string;
};

export default function ATSChecklist({ id = "checklist", className }: Props) {
  return (
    <div
      id={id}
      className={`ats-checklist-print rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 print:border-0 print:p-0 ${className ?? ""}`}
    >
      <p className="hidden print:block print:mb-4 print:text-sm print:text-slate-600">
        Free ATS Resume Checklist — NSL Digital Lab. Use before you apply; no tool
        guarantees hiring outcomes.
      </p>
      <div className="space-y-8">
        {ATS_CHECKLIST_SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold text-[#0f172a] print:text-base">
              {section.title}
            </h2>
            <ul className="mt-3 space-y-2">
              {section.items.map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

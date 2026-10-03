import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { CHECKLIST_PAGE_PATH } from "../data/atsChecklistContent";
import { useCareerPageSlug } from "../context/CareerTrackingContext";
import { trackLeadMagnetView } from "../utils/trackLeadMagnet";

type Props = {
  className?: string;
};

export default function CareerChecklistPromo({ className }: Props) {
  const sourcePage = useCareerPageSlug();

  useEffect(() => {
    trackLeadMagnetView(sourcePage);
  }, [sourcePage]);

  return (
    <aside
      className={`rounded-2xl border border-slate-200 bg-[#f5f7fb] p-6 sm:p-7 ${className ?? ""}`}
    >
      <p className="text-base font-semibold text-[#0f172a]">
        Not sure if your resume is ATS-ready?
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Use our free checklist before your next application.
      </p>
      <Link
        to={CHECKLIST_PAGE_PATH}
        className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-900"
      >
        Get Free ATS Checklist
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}

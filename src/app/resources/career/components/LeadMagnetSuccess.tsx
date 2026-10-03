import AffiliateButton from "./AffiliateButton";

type Props = {
  title?: string;
  onViewChecklist?: () => void;
  onPrint?: () => void;
  showAffiliateRecommendations?: boolean;
};

export default function LeadMagnetSuccess({
  title = "Your ATS Resume Checklist is Ready",
  onViewChecklist,
  onPrint,
  showAffiliateRecommendations = true,
}: Props) {
  return (
    <div className="space-y-6" aria-live="polite">
      <div className="rounded-2xl border border-slate-200 bg-[#f5f7fb] p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#0f172a] sm:text-2xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          You can use the checklist on this page now. If email delivery is
          enabled for your address, you may also receive a copy—confirm on our
          mailing setup when connected.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {onViewChecklist ? (
            <button
              type="button"
              onClick={onViewChecklist}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#061018] transition hover:bg-cyan-300"
            >
              View Checklist
            </button>
          ) : null}
          {onPrint ? (
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Print / Download
            </button>
          ) : null}
        </div>
      </div>

      {showAffiliateRecommendations ? (
        <section
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          aria-label="Optional resume tools"
        >
          <h3 className="text-lg font-semibold text-[#0f172a]">
            Want Help Improving Your Resume?
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Optional tools you can explore after reviewing the checklist.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h4 className="font-semibold text-[#0f172a]">Rezi</h4>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                Best for
              </p>
              <p className="mt-1 text-sm text-slate-600">
                ATS-focused AI resume optimization
              </p>
              <div className="mt-3">
                <AffiliateButton
                  productId="rezi"
                  label="Try Rezi"
                  position="lead-magnet-success"
                  variant="primary"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#061018] transition hover:bg-cyan-300"
                />
              </div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h4 className="font-semibold text-[#0f172a]">Resume.io</h4>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                Best for
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Guided resume building
              </p>
              <div className="mt-3">
                <AffiliateButton
                  productId="resumeIo"
                  label="Explore Resume.io"
                  position="lead-magnet-success"
                  variant="primary"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

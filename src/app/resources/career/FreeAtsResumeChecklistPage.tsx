import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Printer } from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import SEO from "../../../seo/SEO";
import BreadcrumbListSchema from "../../../seo/schemas/BreadcrumbListSchema";
import AffiliateDisclosure from "./components/AffiliateDisclosure";
import ArticleHero from "./components/ArticleHero";
import ATSChecklist from "./components/ATSChecklist";
import ChecklistLeadForm from "./components/ChecklistLeadForm";
import LeadMagnetSuccess from "./components/LeadMagnetSuccess";
import { CareerTrackingProvider } from "./context/CareerTrackingContext";
import { CHECKLIST_PAGE_PATH } from "./data/atsChecklistContent";
import { isChecklistUnlockedInSession } from "./utils/checklistLead";
import {
  trackChecklistPrint,
  trackChecklistView,
  trackLeadMagnetView,
} from "./utils/trackLeadMagnet";
import { CAREER_HUB_PATH, careerArticlePath } from "./data/types";

const PAGE_SLUG = "free-ats-resume-checklist";

const SEO_TITLE = "Free ATS Resume Checklist for Job Seekers | NSL Digital Lab";
const SEO_DESCRIPTION =
  "Use this free ATS resume checklist to review formatting, keywords, work experience, skills and common resume mistakes before applying for jobs.";

const relatedLinks = [
  { label: "Best Resume Builders", href: careerArticlePath("best-resume-builders") },
  { label: "Best ATS Resume Tools", href: careerArticlePath("best-ats-resume-tools") },
  { label: "Rezi Review", href: careerArticlePath("rezi-review") },
  { label: "Resume.io Review", href: careerArticlePath("resume-io-review") },
  {
    label: "Best Job Search Tools",
    href: careerArticlePath("best-job-search-tools"),
  },
];

function FreeAtsResumeChecklistContent() {
  const [unlocked, setUnlocked] = useState(() => isChecklistUnlockedInSession());
  const checklistViewTracked = useRef(false);

  useEffect(() => {
    trackLeadMagnetView(PAGE_SLUG);
  }, []);

  useEffect(() => {
    if (unlocked && !checklistViewTracked.current) {
      checklistViewTracked.current = true;
      trackChecklistView(PAGE_SLUG);
    }
  }, [unlocked]);

  function handlePrint() {
    trackChecklistPrint(PAGE_SLUG);
    window.print();
  }

  function scrollToChecklist() {
    document.getElementById("checklist")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <SEO
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
        keywords="ATS resume checklist, free resume checklist, job application resume"
        canonical={CHECKLIST_PAGE_PATH}
        type="article"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Career Resources", path: CAREER_HUB_PATH },
          { name: "Free ATS Resume Checklist", path: CHECKLIST_PAGE_PATH },
        ]}
      />
      <MainLayout>
        <div className="no-print">
          <ArticleHero
            badge="Free resource"
            h1="Free ATS Resume Checklist"
            dek="Use this practical checklist to review your resume before applying for jobs and avoid common ATS formatting, keyword, and content mistakes."
            breadcrumbLabel="Free ATS Resume Checklist"
            heroCta={
              unlocked
                ? { label: "View Checklist", href: "#checklist" }
                : { label: "Get the Free Checklist", href: "#get-checklist" }
            }
          />
        </div>

        <div className="border-t border-slate-100 bg-white px-6 py-6 lg:px-8 no-print">
          <div className="mx-auto max-w-3xl">
            <AffiliateDisclosure />
          </div>
        </div>

        <article className="border-t border-slate-100 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            {!unlocked ? (
              <div className="no-print rounded-2xl border border-slate-200 bg-[#f5f7fb] p-6 sm:p-8">
                <h2 className="text-xl font-bold text-[#0f172a]">
                  Get the checklist
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Enter your name and email to unlock the full checklist on this
                  page. {/* TODO: dedicated checklist email delivery when backend supports it. */}
                </p>
                <div className="mt-6">
                  <ChecklistLeadForm onSuccess={() => setUnlocked(true)} />
                </div>
              </div>
            ) : (
              <div className="no-print space-y-10">
                <LeadMagnetSuccess
                  onViewChecklist={scrollToChecklist}
                  onPrint={handlePrint}
                />
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <Printer className="h-4 w-4" aria-hidden />
                    Download / Print Checklist
                  </button>
                </div>
              </div>
            )}

            {unlocked ? (
              <div className="mt-10 print:mt-0">
                <ATSChecklist id="checklist" className="scroll-mt-24" />
              </div>
            ) : null}

            <nav
              className="no-print mt-14 border-t border-slate-200 pt-10"
              aria-label="Related career guides"
            >
              <h2 className="text-lg font-bold text-[#0f172a]">
                Related career resources
              </h2>
              <ul className="mt-4 space-y-2">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-cyan-800 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to={CAREER_HUB_PATH}
                    className="text-sm font-medium text-cyan-800 hover:underline"
                  >
                    All career resources
                  </Link>
                </li>
              </ul>
              <Link
                to={CAREER_HUB_PATH}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-cyan-800"
              >
                Back to career hub
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </nav>
          </div>
        </article>

        <style>{`
          @media print {
            .no-print { display: none !important; }
            body { background: white; }
            main { padding: 0; }
          }
        `}</style>
      </MainLayout>
    </>
  );
}

export default function FreeAtsResumeChecklistPage() {
  return (
    <CareerTrackingProvider pageSlug={PAGE_SLUG}>
      <FreeAtsResumeChecklistContent />
    </CareerTrackingProvider>
  );
}

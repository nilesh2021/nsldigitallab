import { FileText, LayoutTemplate, ScanSearch, Target } from "lucide-react";

import CareerJobSeekerResourceLanding from "../components/CareerJobSeekerResourceLanding";
import { CHECKLIST_PAGE_PATH } from "../career/data/atsChecklistContent";

const DOWNLOAD_PATH = "/downloads/ATS-Resume-Template-Pack.zip";

const zipMockup = (
  <div
    className="mx-auto max-w-sm rotate-1 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
    aria-hidden
  >
    <div className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2">
      <span className="text-lg">📁</span>
      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
        Template pack
      </span>
    </div>
    <ul className="mt-6 space-y-2 text-sm text-slate-300">
      <li className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
        <FileText className="h-4 w-4 text-cyan-400" />
        ATS-Resume-Word.docx
      </li>
      <li className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
        <FileText className="h-4 w-4 text-cyan-400" />
        ATS-Resume-PDF.pdf
      </li>
      <li className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-slate-500">
        Freshers-formatting-tips.pdf
      </li>
    </ul>
    <p className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-500">
      ZIP · Word + PDF · 2026 freshers layout
    </p>
  </div>
);

export default function AtsResumeTemplateFreshersPage() {
  return (
    <CareerJobSeekerResourceLanding
      config={{
        slug: "free-ats-resume-template-freshers-2026",
        seoKey: "atsResumeTemplateFreshers",
        downloadUrl: DOWNLOAD_PATH,
        downloadType: "ZIP",
        resourceTitle: "Free ATS Resume Template for Freshers (2026)",
        heroBadge: "Free Word & PDF template pack",
        h1: "Free ATS Resume Template for Freshers (2026)",
        heroDescription:
          "Download an ATS-friendly resume template built for freshers—clean sections, readable fonts, and formatting that parses in recruiter systems. Unlock the ZIP with your email.",
        heroCtaLabel: "Get Free Template",
        secondaryLink: {
          to: CHECKLIST_PAGE_PATH,
          label: "ATS resume checklist",
        },
        stats: [
          { label: "Format", value: "Word + PDF" },
          { label: "Built for", value: "Freshers" },
          { label: "Price", value: "Free" },
        ],
        mockup: zipMockup,
        benefits: [
          {
            title: "ATS-friendly layout",
            description:
              "Single-column structure, standard headings, and bullet styles that applicant tracking systems can read.",
            icon: ScanSearch,
          },
          {
            title: "Freshers-first sections",
            description:
              "Room for education, projects, internships, and skills without cramming experience you do not have yet.",
            icon: Target,
          },
          {
            title: "Editable in Word",
            description:
              "Open the DOCX, swap in your details, and export to PDF when you are ready to apply.",
            icon: LayoutTemplate,
          },
          {
            title: "Pair with our checklist",
            description:
              "Use the free on-page ATS checklist to verify keywords, file name, and section order before you send.",
            icon: FileText,
          },
        ],
        includedTitle: "What’s in the template pack",
        includedItems: [
          "ATS-friendly Word resume template (.docx)",
          "Matching PDF version for quick applications",
          "Section guide: summary, education, projects, skills",
          "Formatting tips for freshers and campus placements",
          "Font and margin settings that stay machine-readable",
          "Reminder to tailor keywords per job description",
        ],
        steps: [
          {
            n: "01",
            title: "Enter your email",
            body: "Use the download card on this page. No account is required.",
          },
          {
            n: "02",
            title: "Unlock instantly",
            body: "The ZIP download button appears as soon as the form succeeds.",
          },
          {
            n: "03",
            title: "Customise & apply",
            body: "Edit the Word file, export PDF if needed, and run through the ATS checklist before you submit.",
          },
        ],
        bottomCtaLabel: "Get Free Template",
        faqIntro: "ATS templates, file formats, and how this differs from our resume checklist.",
        faqs: [
          {
            question: "Is this ATS resume template really free?",
            answer:
              "Yes. Enter your email on this page to unlock the ZIP. There is no paid plan required for this download.",
          },
          {
            question: "What file formats are included?",
            answer:
              "The pack includes an editable Word template and a PDF version, plus short formatting tips for freshers.",
          },
          {
            question: "How is this different from the free ATS resume checklist?",
            answer:
              "The checklist is an on-page guide you tick through before applying. This pack is the actual resume layout in Word and PDF. Use both together for best results.",
          },
          {
            question: "Will this work for design or UI/UX roles?",
            answer:
              "This template targets general freshers and ATS parsing. For design portfolios, also see our UI/UX designer resume template and keep creative work in your portfolio link.",
          },
        ],
        relatedSlugs: [
          "free-job-application-tracker",
          "free-chatgpt-prompts-job-seekers-2026",
          "ui-ux-designer-resume-template",
        ],
        extraRelatedLinks: [
          { to: CHECKLIST_PAGE_PATH, label: "Free ATS resume checklist" },
        ],
      }}
    />
  );
}

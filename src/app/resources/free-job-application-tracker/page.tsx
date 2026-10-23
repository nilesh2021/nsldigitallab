import { BarChart3, Bell, ClipboardList, Table2 } from "lucide-react";

import CareerJobSeekerResourceLanding from "../components/CareerJobSeekerResourceLanding";

const DOWNLOAD_PATH = "/downloads/Job-Application-Tracker.xlsx";

const spreadsheetMockup = (
  <div
    className="mx-auto max-w-sm -rotate-1 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
    aria-hidden
  >
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/80">
      <div className="grid grid-cols-4 gap-px bg-slate-700/50 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
        <div className="bg-slate-800/90 px-2 py-2">Company</div>
        <div className="bg-slate-800/90 px-2 py-2">Role</div>
        <div className="bg-slate-800/90 px-2 py-2">Status</div>
        <div className="bg-slate-800/90 px-2 py-2">Follow-up</div>
      </div>
      {[
        ["Acme Corp", "Analyst", "Applied", "Mon"],
        ["North Labs", "Intern", "Screen", "Wed"],
        ["River Co", "Associate", "Offer", "—"],
      ].map((row) => (
        <div key={row[0]} className="grid grid-cols-4 gap-px border-t border-white/5 text-[11px] text-slate-400">
          {row.map((cell) => (
            <div key={cell} className="bg-slate-900/60 px-2 py-2 truncate">{cell}</div>
          ))}
        </div>
      ))}
    </div>
    <p className="mt-4 text-center text-xs text-slate-500">Excel · Works in Google Sheets</p>
  </div>
);

export default function JobApplicationTrackerPage() {
  return (
    <CareerJobSeekerResourceLanding
      config={{
        slug: "free-job-application-tracker",
        seoKey: "jobApplicationTracker",
        downloadUrl: DOWNLOAD_PATH,
        downloadType: "Spreadsheet",
        resourceTitle: "Free Job Application Tracker (Excel & Google Sheets)",
        heroBadge: "Free spreadsheet tracker",
        h1: "Free Job Application Tracker (Excel & Google Sheets)",
        heroDescription:
          "Track every application, status, recruiter contact, and follow-up date in one sheet. Download the XLSX, use it in Excel, or upload to Google Sheets.",
        heroCtaLabel: "Get Free Tracker",
        stats: [
          { label: "Format", value: "XLSX" },
          { label: "Sheets", value: "1 workbook" },
          { label: "Price", value: "Free" },
        ],
        mockup: spreadsheetMockup,
        benefits: [
          {
            title: "One view of your pipeline",
            description:
              "See applied, screening, interview, and offer stages without digging through email threads.",
            icon: Table2,
          },
          {
            title: "Never miss follow-ups",
            description:
              "Log next-action dates so you nudge recruiters at the right time—not too early, not too late.",
            icon: Bell,
          },
          {
            title: "Excel or Sheets",
            description:
              "Download the XLSX for Excel or import the same file into Google Sheets on your drive.",
            icon: ClipboardList,
          },
          {
            title: "Spot what’s working",
            description:
              "Track sources and outcomes to learn which job boards and referrals convert for you.",
            icon: BarChart3,
          },
        ],
        includedTitle: "Tracker columns & sheets",
        includedItems: [
          "Company, role title, and job link",
          "Application date and current status",
          "Recruiter or hiring manager contact",
          "Resume version used for that application",
          "Interview rounds and notes",
          "Follow-up date and next action",
          "Source (referral, LinkedIn, campus, etc.)",
          "Optional outcome notes for learning",
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
            body: "The spreadsheet download button appears as soon as the form succeeds.",
          },
          {
            n: "03",
            title: "Log applications",
            body: "Add a row per application and update status as you hear back.",
          },
        ],
        bottomCtaLabel: "Get Free Tracker",
        faqIntro: "Spreadsheet format, Google Sheets, and who this tracker is for.",
        faqs: [
          {
            question: "Is the job application tracker free?",
            answer:
              "Yes. Enter your email on this page to unlock the XLSX download. There is no paid plan required.",
          },
          {
            question: "Can I use this in Google Sheets?",
            answer:
              "Yes. Download the XLSX file and upload it to Google Drive, then open with Google Sheets. Column layout stays the same.",
          },
          {
            question: "Who should use this tracker?",
            answer:
              "Freshers and experienced job seekers who apply to multiple roles and want a simple status log without a paid CRM.",
          },
          {
            question: "Where is the file stored?",
            answer:
              "After unlock, you download from /downloads/Job-Application-Tracker.xlsx on this site.",
          },
        ],
        relatedSlugs: [
          "free-ats-resume-template-freshers-2026",
          "free-chatgpt-prompts-job-seekers-2026",
        ],
      }}
    />
  );
}

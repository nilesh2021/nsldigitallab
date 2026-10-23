import { Bot, MessageSquare, PenLine, Users } from "lucide-react";

import CareerJobSeekerResourceLanding from "../components/CareerJobSeekerResourceLanding";

const DOWNLOAD_PATH = "/downloads/AI-Prompt-Pack-for-Job-Seekers.zip";

const promptsMockup = (
  <div
    className="mx-auto max-w-sm rotate-1 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
    aria-hidden
  >
    <div className="space-y-3">
      {[
        "Rewrite my bullet for impact…",
        "Mock interview: behavioural Q…",
        "Tailor summary to job post…",
      ].map((line, i) => (
        <div
          key={line}
          className={`rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 ${i === 1 ? "ml-4" : ""}`}
        >
          {line}
        </div>
      ))}
    </div>
    <p className="mt-6 border-t border-white/10 pt-4 text-center text-xs font-semibold uppercase tracking-wider text-cyan-300">
      100 prompts · ZIP
    </p>
  </div>
);

const examplePrompts = [
  "Rewrite this internship bullet to show impact with metrics and strong verbs.",
  "List 10 behavioural interview questions for a fresher analyst role with sample STAR outlines.",
  "Compare my resume summary to this job description and suggest keyword gaps.",
  "Draft a polite follow-up email one week after applying with no response.",
  "Generate LinkedIn connection request notes to a recruiter (under 300 characters).",
  "Turn my project description into three ATS-friendly resume bullets.",
  "Suggest questions I should ask at the end of a campus placement interview.",
  "Help me explain a career gap in two concise, honest sentences.",
];

export default function ChatGptPromptsJobSeekersPage() {
  return (
    <CareerJobSeekerResourceLanding
      config={{
        slug: "free-chatgpt-prompts-job-seekers-2026",
        seoKey: "chatgptPromptsJobSeekers",
        downloadUrl: DOWNLOAD_PATH,
        downloadType: "ZIP",
        resourceTitle: "100 Free ChatGPT Prompts for Job Seekers (2026)",
        heroBadge: "100 AI prompts for job search",
        h1: "100 Free ChatGPT Prompts for Job Seekers (2026)",
        heroDescription:
          "Resume rewrites, cover letters, interview prep, networking messages, and follow-ups—ready-to-copy prompts built for job seekers. Unlock the ZIP with your email.",
        heroCtaLabel: "Get Free Prompts",
        stats: [
          { label: "Prompts", value: "100" },
          { label: "Format", value: "ZIP pack" },
          { label: "Price", value: "Free" },
        ],
        mockup: promptsMockup,
        benefits: [
          {
            title: "Resume & profile",
            description:
              "Polish summaries, bullets, and LinkedIn headlines without staring at a blank page.",
            icon: PenLine,
          },
          {
            title: "Interview ready",
            description:
              "Practise behavioural questions, company research, and post-interview thank-you notes.",
            icon: MessageSquare,
          },
          {
            title: "Networking scripts",
            description:
              "Short messages for recruiters, alumni, and referrals that sound human—not spammy.",
            icon: Users,
          },
          {
            title: "Job-search workflow",
            description:
              "Prompts for tailoring applications, tracking tasks, and learning from rejections.",
            icon: Bot,
          },
        ],
        includedTitle: "Sample prompts (full pack has 100)",
        includedItems: examplePrompts,
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
            title: "Copy into ChatGPT",
            body: "Open the files in the pack, paste a prompt, and add your resume or job link as context.",
          },
        ],
        bottomCtaLabel: "Get Free Prompts",
        faqIntro: "What’s in the pack, how it differs from our general ChatGPT prompt pack, and usage tips.",
        faqs: [
          {
            question: "Are these ChatGPT prompts really free?",
            answer:
              "Yes. Enter your email on this page to unlock the ZIP. There is no paid plan required for this download.",
          },
          {
            question: "How is this different from the general ChatGPT prompt pack?",
            answer:
              "Our marketing-focused prompt pack covers broader content tasks. This ZIP is only for job seekers: resumes, interviews, applications, and networking.",
          },
          {
            question: "Do I need a paid ChatGPT plan?",
            answer:
              "You can use these prompts in free or paid ChatGPT accounts. Always review and edit AI output before sending applications.",
          },
          {
            question: "What’s inside the ZIP?",
            answer:
              "Organised text files with 100 copy-ready prompts for job search tasks. Exact folder layout is in the pack you download.",
          },
        ],
        relatedSlugs: [
          "free-ats-resume-template-freshers-2026",
          "free-job-application-tracker",
          "chatgpt-prompt-pack",
        ],
      }}
    />
  );
}

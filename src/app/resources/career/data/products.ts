import type { AffiliateUrlKey } from "./affiliateUrls";

export type ProductId =
  | "rezi"
  | "resumeIo"
  | "zety"
  | "topResume"
  | "coursera"
  | "udemy"
  | "grammarly"
  | "preply";

export type ProductDefinition = {
  id: ProductId;
  name: string;
  summary: string;
  bestFor: string;
  affiliateKey: AffiliateUrlKey;
  ctaLabel: string;
};

export const PRODUCTS: Record<ProductId, ProductDefinition> = {
  rezi: {
    id: "rezi",
    name: "Rezi",
    summary:
      "Resume builder with AI-assisted drafting and a focus on ATS-friendly structure and keywords.",
    bestFor: "Job seekers who want help aligning a resume to a specific posting.",
    affiliateKey: "AFFILIATE_REZI_URL",
    ctaLabel: "Try Rezi",
  },
  resumeIo: {
    id: "resumeIo",
    name: "Resume.io",
    summary:
      "Template-based editor for resumes and cover letters with a clear section-by-section flow.",
    bestFor: "People who want a polished visual template and a fast first draft.",
    affiliateKey: "AFFILIATE_RESUME_IO_URL",
    ctaLabel: "Explore Resume.io",
  },
  zety: {
    id: "zety",
    name: "Zety",
    summary:
      "Guided resume and cover letter builder with prompts and example phrasing for each section.",
    bestFor: "First-time writers who want step-by-step guidance while they type.",
    affiliateKey: "AFFILIATE_ZETY_URL",
    ctaLabel: "Visit Zety",
  },
  topResume: {
    id: "topResume",
    name: "TopResume",
    summary:
      "Professional resume writing service where a writer reviews and rewrites your materials.",
    bestFor: "Candidates who prefer a human writer over a self-serve editor.",
    affiliateKey: "AFFILIATE_TOPRESUME_URL",
    ctaLabel: "Get Professional Resume Help",
  },
  coursera: {
    id: "coursera",
    name: "Coursera",
    summary:
      "Online learning platform with courses and certificates from universities and companies.",
    bestFor: "Structured learning paths when you want credentials alongside skills.",
    affiliateKey: "AFFILIATE_COURSERA_URL",
    ctaLabel: "Explore Courses",
  },
  udemy: {
    id: "udemy",
    name: "Udemy",
    summary:
      "Marketplace of on-demand video courses across technical and career topics.",
    bestFor: "Self-paced skill building when you want to pick a single focused course.",
    affiliateKey: "AFFILIATE_UDEMY_URL",
    ctaLabel: "View Career Courses",
  },
  grammarly: {
    id: "grammarly",
    name: "Grammarly",
    summary:
      "Writing assistant for grammar, clarity, and tone in emails, documents, and applications.",
    bestFor: "Polishing cover letters, LinkedIn summaries, and follow-up messages.",
    affiliateKey: "AFFILIATE_GRAMMARLY_URL",
    ctaLabel: "Try Grammarly",
  },
  preply: {
    id: "preply",
    name: "Preply",
    summary:
      "Platform to book one-on-one tutors for languages and communication practice.",
    bestFor: "Interview and workplace English practice with a live tutor.",
    affiliateKey: "AFFILIATE_PREPLY_URL",
    ctaLabel: "Find a Tutor",
  },
};

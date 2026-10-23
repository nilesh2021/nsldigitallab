export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACTOR"
  | "TEMPORARY"
  | "INTERN";

export interface JobPostalAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface JobFaq {
  question: string;
  answer: string;
}

/** Exactly what the job page's info bar shows. */
export interface JobInfoBar {
  location: string;
  jobType: string;
  experience: string;
  salary: string;
}

/** Exactly what the /careers listing card shows. */
export interface JobListing {
  title: string;
  type: string;
  location: string;
  experience: string;
  category: string;
  description: string;
}

export interface CareerJob {
  slug: string;
  title: string;
  /** Value sent to the Apps Script as jobTitle. */
  applicationJobTitle: string;
  status: "open" | "closed";
  /** Plain text or simple HTML taken from the page's own job content. */
  description: string;
  /** Actual posting date. Never substitute today's or the build date. */
  datePosted?: string;
  /** Only set when the employer has a real closing date. */
  validThrough?: string;
  employmentType?: EmploymentType[];
  /** True only when the page explicitly states fully remote within India. */
  remoteIndiaOnly: boolean;
  address?: JobPostalAddress;
  /** Only set when amount and pay period are both confirmed. */
  salary?: {
    min: number;
    max: number;
    unit: "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";
  };
  infoBar: JobInfoBar;
  listing: JobListing;
  /** FAQ copy shared by the page UI and FAQPage schema. */
  faqItems?: JobFaq[];
  /** Contradictions between surfaces awaiting employer confirmation. */
  conflicts?: string[];
  relatedSlugs: string[];
}

/** General application form on `/careers` (not a job detail page). */
export const GENERAL_CAREER_APPLICATION = {
  jobSlug: "general",
  applicationJobTitle: "General Career Application",
} as const;

const FIVE_TO_TEN_K = "₹5K - ₹10K";
const FIVE_TO_TEN_K_EN_DASH = "₹5K – ₹10K";

export const CAREER_JOBS: Record<string, CareerJob> = {
  "data-entry-remote-job": {
    slug: "data-entry-remote-job",
    title: "Remote Data Entry Executive",
    applicationJobTitle: "Data Entry Remote Job",
    status: "open",
    description:
      "<p>NSL Digital Lab is looking for detail-oriented individuals for remote data entry positions. Candidates should possess basic computer knowledge, strong attention to detail, and the ability to manage data accurately.</p><p>Responsibilities: enter and update data accurately; verify information and correct errors; maintain company records; generate reports when required; ensure data confidentiality.</p><p>Requirements: basic computer skills; MS Excel and Google Sheets; good typing speed; attention to detail; internet connection.</p>",
    datePosted: "2026-06-17",
    employmentType: ["PART_TIME"],
    remoteIndiaOnly: false,
    infoBar: { location: "Remote", jobType: "Part-Time", experience: "0-2 Years", salary: FIVE_TO_TEN_K },
    listing: {
      title: "Data Entry Operator",
      type: "Remote",
      location: "Remote",
      experience: "Fresher welcome",
      category: "Operations",
      description:
        "General operations data entry — records, reports, and business information. Fully remote.",
    },
    faqItems: [
      {
        question: "Is this a work from home data entry job?",
        answer:
          "Yes, this is a fully remote data entry position that allows candidates to work from home.",
      },
      {
        question: "Is this a part-time or full-time job?",
        answer:
          "Both part-time and full-time opportunities may be available depending on business requirements.",
      },
    ],
    conflicts: [
      "Page FAQ says part-time or full-time 'may be available'; info bar says Part-Time.",
      "Listing says 'Fresher welcome'; info bar says 0-2 Years.",
      "FAQ says work from home but does not state fully remote within India (schema TELECOMMUTE not set).",
    ],
    relatedSlugs: ["data-entry-jobs-remote", "content-writer-job"],
  },
  "data-entry-jobs-remote": {
    slug: "data-entry-jobs-remote",
    title: "Remote Data Entry Executive – Digital Products",
    applicationJobTitle: "Data Entry Jobs Remote – Digital Products",
    status: "open",
    description:
      "<p>NSL Digital Lab is hiring for remote data entry jobs focused on our digital products, not generic office records. You will enter, check, and update catalog rows for template bundles, resource PDFs, Figma wireframe kits, ChatGPT prompt packs, and course or module listings so customers and the team can find the right file every time.</p><p>This is a fully remote role. You can work from home anywhere in India with a laptop and a stable internet connection.</p>",
    datePosted: "2026-10-06",
    employmentType: ["PART_TIME"],
    remoteIndiaOnly: true,
    infoBar: { location: "Remote", jobType: "Part-Time", experience: "0–2 Years", salary: FIVE_TO_TEN_K_EN_DASH },
    listing: {
      title: "Data Entry (Digital Products)",
      type: "Remote",
      location: "Remote",
      experience: "Fresher welcome",
      category: "Operations",
      description:
        "Work-from-home catalog data entry for digital products: templates, checklists, Figma kits, and downloadable assets.",
    },
    faqItems: [
      {
        question: "Is this a work from home data entry job?",
        answer:
          "Yes. This is a fully remote data entry role. You can work from home anywhere in India with a laptop and a stable internet connection.",
      },
      {
        question: "Can freshers apply for these remote data entry jobs?",
        answer:
          "Yes. Freshers, students, and career starters are welcome if you are accurate, comfortable with Google Sheets or Excel, and can follow a simple catalog checklist.",
      },
      {
        question: "What are digital products in this job?",
        answer:
          "Digital products here means NSL Digital Lab assets such as website template bundles, SEO and marketing checklists, Figma wireframe kits, ChatGPT prompt packs, and learning-path listings. You will enter and check catalog data for those products—not physical inventory.",
      },
      {
        question: "Which tools will I use?",
        answer:
          "Most work is in Google Sheets or Microsoft Excel, plus shared folders for file names and download links. We give a short walkthrough of our catalog format before you start.",
      },
      {
        question: "Is this part-time or full-time?",
        answer:
          "This opening is part-time (about 2–4 hours a day) with flexible hours. Full-time hours may be offered later based on catalog volume and your accuracy.",
      },
    ],
    conflicts: ["Listing says 'Fresher welcome'; info bar says 0–2 Years."],
    relatedSlugs: ["data-entry-remote-job", "digital-marketing-executive-job"],
  },
  "digital-marketing-executive-job": {
    slug: "digital-marketing-executive-job",
    title: "Digital Marketing Executive – Remote",
    applicationJobTitle: "Digital Marketing Executive – Remote",
    status: "open",
    description:
      "<p>NSL Digital Lab is hiring for remote digital marketing executive jobs, not an SEO-only seat. You will plan and run search, social, paid ads, and content for client websites and our in-house digital products so campaigns stay consistent and measurable week to week.</p><p>This is a fully remote role. You can work from home anywhere in India with a laptop and a stable internet connection.</p>",
    datePosted: "2026-10-06",
    employmentType: ["PART_TIME"],
    remoteIndiaOnly: true,
    infoBar: { location: "Remote", jobType: "Part-Time", experience: "0–2 Years", salary: FIVE_TO_TEN_K_EN_DASH },
    listing: {
      title: "Digital Marketing Executive",
      type: "Remote",
      location: "Remote",
      experience: "0–2 years",
      category: "Marketing",
      description:
        "Remote digital marketing executive: SEO, social media, Google Ads, Meta ads, and content for live client campaigns.",
    },
    faqItems: [
      {
        question: "Is this a work from home digital marketing job?",
        answer:
          "Yes. This is a fully remote digital marketing executive role. You can work from home anywhere in India with a laptop and a stable internet connection.",
      },
      {
        question: "Can freshers apply for these remote digital marketing jobs?",
        answer:
          "Yes. Freshers, graduates, and career switchers are welcome if you can write clearly, follow a campaign checklist, and are willing to learn Google Analytics, Search Console, and ads dashboards.",
      },
      {
        question: "How is this different from the SEO Executive job?",
        answer:
          "The SEO Executive listing is search-only. This Digital Marketing Executive role covers SEO plus social media, Google Ads, Meta ads, and content for client campaigns. If you only want organic search, apply on the SEO Executive page.",
      },
      {
        question: "Which tools will I use?",
        answer:
          "Google Analytics (GA4), Google Search Console, Google Ads, Meta Ads Manager, Google Business Profile, Canva or similar, and spreadsheets for weekly reporting. We walk you through our templates before you start.",
      },
      {
        question: "Is this part-time or full-time?",
        answer:
          "This opening is part-time (about 2–4 hours a day) with flexible hours. Full-time hours may be offered later based on campaign load and your results.",
      },
    ],
    relatedSlugs: ["seo-executive-job", "content-writer-job"],
  },
  "content-writer-job": {
    slug: "content-writer-job",
    title: "Remote Content Writer",
    applicationJobTitle: "Content Writer Job",
    status: "open",
    description:
      "<p>NSL Digital Lab is looking for detail-oriented individuals for remote content writing positions. Candidates should possess strong writing skills, good grammar, and the ability to create engaging content for various platforms.</p>",
    employmentType: ["PART_TIME"],
    remoteIndiaOnly: false,
    infoBar: { location: "Remote", jobType: "Part-Time", experience: "0-2 Years", salary: FIVE_TO_TEN_K },
    listing: {
      title: "Content Writer",
      type: "Remote",
      location: "Remote",
      experience: "0–2 years",
      category: "Content",
      description:
        "Write engaging, well-edited content for websites, blogs, and social platforms from home.",
    },
    faqItems: [
      {
        question: "Is this a work from home Content Writer job?",
        answer:
          "Yes, this is a fully remote Content Writer position allowing candidates to work from home.",
      },
      {
        question: "Is this a part-time or full-time job?",
        answer:
          "Both part-time and full-time opportunities may be available based on business requirements.",
      },
    ],
    conflicts: [
      "Previous metadata advertised 'part-time and full-time'; info bar says Part-Time.",
      "FAQ says work from home but does not state fully remote within India (schema TELECOMMUTE not set).",
    ],
    relatedSlugs: ["seo-executive-job", "digital-marketing-executive-job"],
  },
  "seo-executive-job": {
    slug: "seo-executive-job",
    title: "SEO Executive",
    applicationJobTitle: "SEO Executive Job",
    status: "open",
    description:
      "<p>NSL Digital Lab is looking for passionate SEO Executives who can help improve website rankings, optimize content, conduct keyword research, and drive organic traffic through proven SEO strategies.</p>",
    employmentType: ["PART_TIME"],
    remoteIndiaOnly: false,
    infoBar: { location: "Remote", jobType: "Part-Time", experience: "0-2 Years", salary: FIVE_TO_TEN_K },
    listing: {
      title: "SEO Executive",
      type: "Remote",
      location: "Remote",
      experience: "0–2 years",
      category: "Marketing",
      description:
        "Improve website rankings with keyword research, content optimisation, and organic traffic growth strategies.",
    },
    faqItems: [
      {
        question: "Is this a work from home SEO Executive job?",
        answer:
          "Yes, this is a fully remote SEO Executive position allowing candidates to work from home.",
      },
      {
        question: "Is this a part-time or full-time job?",
        answer:
          "Both part-time and full-time opportunities may be available based on business requirements.",
      },
    ],
    conflicts: [
      "Previous metadata advertised 'part-time and full-time'; info bar says Part-Time.",
      "FAQ says work from home but does not state fully remote within India (schema TELECOMMUTE not set).",
    ],
    relatedSlugs: ["digital-marketing-executive-job", "content-writer-job"],
  },
  "ui-ux-designer-job": {
    slug: "ui-ux-designer-job",
    title: "UI/UX Designer",
    applicationJobTitle: "UI/UX Designer",
    status: "open",
    description:
      "<p>NSL Digital Lab is looking for a passionate and creative UI/UX Designer to design intuitive, user-friendly, and visually engaging digital experiences for web and mobile applications. You will collaborate with developers, project managers, and stakeholders to transform business requirements into modern, responsive, and user-centered interfaces.</p><p>You will work throughout the complete design process, including user research, competitor analysis, information architecture, wireframing, prototyping, visual interface design, and usability testing, using Figma to create high-fidelity mockups, interactive prototypes, and reusable design systems.</p>",
    datePosted: "2026-06-27",
    remoteIndiaOnly: false,
    infoBar: { location: "Remote", jobType: "Part-Time", experience: "0-2 Years", salary: "₹5K - ₹40K" },
    listing: {
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Remote",
      experience: "1–3 years",
      category: "Design",
      description:
        "Design websites and product interfaces in Figma, from research and wireframes to polished, usable systems.",
    },
    conflicts: [
      "Employment type: info bar says Part-Time; listing says Full Time; old schema said part/full time.",
      "Experience: info bar says 0-2 Years; listing says 1–3 years.",
      "Location: page says Remote; page title and old schema say Pune.",
      "Salary: info bar says ₹5K - ₹40K (no period); old schema said ₹5,00,000–9,00,000.",
    ],
    relatedSlugs: ["digital-marketing-executive-job", "content-writer-job"],
  },
};

export const JOB_URL = (slug: string) => `/careers/${slug}`;

export const OPEN_JOBS = Object.values(CAREER_JOBS).filter((job) => job.status === "open");

/** Maps a careers form jobTitle (listing or application label) to a job slug. */
export function resolveCareerJobSlug(jobTitle: string): string {
  const normalized = jobTitle.trim();
  if (normalized === GENERAL_CAREER_APPLICATION.applicationJobTitle) {
    return GENERAL_CAREER_APPLICATION.jobSlug;
  }
  const match = Object.values(CAREER_JOBS).find(
    (job) =>
      job.applicationJobTitle === normalized ||
      job.listing.title === normalized ||
      job.title === normalized,
  );
  return match?.slug ?? GENERAL_CAREER_APPLICATION.jobSlug;
}

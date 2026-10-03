import type { ReactNode } from "react";

import type { ProductId } from "./products";

export type CareerArticleSlug =
  | "best-resume-builders"
  | "best-ai-resume-builders"
  | "best-ats-resume-tools"
  | "best-resume-writing-services"
  | "rezi-review"
  | "resume-io-review"
  | "zety-review"
  | "rezi-vs-resume-io"
  | "best-career-courses"
  | "best-job-search-tools";

export type CareerArticleLayout = "roundup" | "review" | "comparison";

export type HubCategory =
  | "resume-tools"
  | "ats-tools"
  | "writing-services"
  | "career-courses"
  | "job-search-tools";

export type CareerArticleMeta = {
  slug: CareerArticleSlug;
  layout: CareerArticleLayout;
  hubCategory: HubCategory;
  badge: string;
  h1: string;
  dek: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords?: string;
  relatedSlugs: CareerArticleSlug[];
  heroCta?: { label: string; href: string };
  heroAffiliate?: { productId: ProductId; label: string };
};

export type ComparisonRow = {
  label: string;
  values: Record<string, string>;
  columnKeys: string[];
};

export type ComparisonTableBlock = {
  kind: "comparisonTable";
  id?: string;
  heading: string;
  intro?: string;
  columns: { key: string; label: string }[];
  rows: { label: string; cells: string[] }[];
  /** Maps column key → product for footer CTAs */
  columnProducts?: Partial<Record<string, ProductId>>;
};

export type CareerContentBlock =
  | { kind: "prose"; heading: string; body: ReactNode }
  | { kind: "products"; heading: string; intro?: string; productIds: ProductId[] }
  | ComparisonTableBlock
  | {
      kind: "prosCons";
      heading?: string;
      productName: string;
      pros: string[];
      cons: string[];
    }
  | { kind: "bestFor"; heading: string; items: { title: string; description: string }[] }
  | { kind: "chooseIf"; items: { title: string; bullets: string[] }[] }
  | { kind: "checklist"; heading: string; items: string[] }
  | {
      kind: "ctas";
      id?: string;
      heading?: string;
      intro?: string;
      buttons: {
        label: string;
        productId: ProductId;
        reviewPath?: string;
      }[];
    }
  | { kind: "checklistPromo" }
  | {
      kind: "quickRecommendation";
      title: string;
      productId: ProductId;
      description: string;
      reviewSlug?: CareerArticleSlug;
      ctaLabel?: string;
    };

export type CareerArticleContent = {
  slug: CareerArticleSlug;
  faqs: { question: string; answer: string }[];
  blocks: CareerContentBlock[];
  closingCta?: { label: string; productId: ProductId };
};

export const CAREER_HUB_PATH = "/resources/career";

export function careerArticlePath(slug: CareerArticleSlug): string {
  return `${CAREER_HUB_PATH}/${slug}`;
}

export type CaseStudyCard = {
  slug: string;
  href: string;
  title: string;
  category: string;
  blurb: string;
  process: string;
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudyCard[] = [
  {
    slug: "online-wine-shopping",
    href: "/case-studies/online-wine-shopping",
    title: "Online Wine Shopping Experience",
    category: "E-commerce UX Case Study",
    blurb:
      "A guided wine-buying journey for people who love wine but feel lost in tasting notes, filters, and checkout.",
    process: "Discovery → Define → Ideate → Design → Testing",
    featured: true,
  },
];

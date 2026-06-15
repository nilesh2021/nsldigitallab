/**
 * Pillar-cluster internal linking map for NSL Digital Lab blog.
 * Keeps related articles consistent and supports topical authority flow.
 */

export type RelatedLink = {
  href: string;
  label: string;
};

export type BlogLinkSet = {
  related: RelatedLink[];
  service?: RelatedLink;
};

export const blogInternalLinks: Record<string, BlogLinkSet> = {
  // —— SEO cluster (pillar: what-is-seo) ——
  "what-is-seo": {
    related: [
      { href: "/blog/seo/technical-seo-checklist", label: "Technical SEO checklist" },
      { href: "/blog/seo/seo-for-startups", label: "SEO for startups" },
      { href: "/blog/seo/website-optimization-tips", label: "Website optimization tips" },
      { href: "/blog/seo/seo-interview-questions", label: "SEO interview questions" },
    ],
    service: { href: "/services/seo-services", label: "SEO services" },
  },
  "seo-for-startups": {
    related: [
      { href: "/blog/seo/what-is-seo", label: "What is SEO?" },
      { href: "/blog/seo/technical-seo-checklist", label: "Technical SEO checklist" },
      { href: "/blog/seo/website-optimization-tips", label: "Website optimization tips" },
      { href: "/blog/digital-marketing/what-is-digital-marketing", label: "What is digital marketing?" },
    ],
    service: { href: "/services/seo-services", label: "SEO services for startups" },
  },
  "technical-seo-checklist": {
    related: [
      { href: "/blog/seo/website-optimization-tips", label: "Website optimization tips" },
      { href: "/blog/seo/what-is-seo", label: "What is SEO?" },
      { href: "/blog/seo/seo-for-startups", label: "SEO for startups" },
      { href: "/blog/seo/seo-interview-questions", label: "SEO interview questions" },
    ],
    service: { href: "/services/seo-services", label: "Technical SEO help" },
  },
  "website-optimization-tips": {
    related: [
      { href: "/blog/seo/technical-seo-checklist", label: "Technical SEO checklist" },
      { href: "/blog/seo/what-is-seo", label: "What is SEO?" },
      { href: "/blog/seo/seo-for-startups", label: "SEO for startups" },
      { href: "/blog/ui-ux/accessibility-in-ux-design", label: "Accessibility in UX design" },
    ],
    service: { href: "/services/seo-services", label: "SEO & performance services" },
  },
  "seo-interview-questions": {
    related: [
      { href: "/blog/seo/what-is-seo", label: "What is SEO?" },
      { href: "/blog/seo/technical-seo-checklist", label: "Technical SEO checklist" },
      { href: "/blog/seo/seo-for-startups", label: "SEO for startups" },
      { href: "/blog/digital-marketing/digital-marketing-interview-questions", label: "Digital marketing interview questions" },
    ],
    service: { href: "/careers", label: "SEO internships & careers" },
  },

  // —— Digital marketing cluster ——
  "what-is-digital-marketing": {
    related: [
      { href: "/blog/digital-marketing/how-to-earn-money-from-digital-marketing", label: "Earn money from digital marketing" },
      { href: "/blog/digital-marketing/digital-marketing-interview-questions", label: "Digital marketing interview questions" },
      { href: "/blog/seo/what-is-seo", label: "What is SEO?" },
      { href: "/blog/affiliate-marketing/affiliate-marketing-for-beginners", label: "Affiliate marketing for beginners" },
    ],
    service: { href: "/services/social-media-marketing", label: "Social media marketing" },
  },
  "digital-marketing-interview-questions": {
    related: [
      { href: "/blog/digital-marketing/what-is-digital-marketing", label: "What is digital marketing?" },
      { href: "/blog/digital-marketing/how-to-earn-money-from-digital-marketing", label: "Earn money from digital marketing" },
      { href: "/blog/seo/seo-interview-questions", label: "SEO interview questions" },
      { href: "/blog/seo/what-is-seo", label: "What is SEO?" },
    ],
    service: { href: "/careers", label: "Marketing internships" },
  },
  "how-to-earn-money-from-digital-marketing": {
    related: [
      { href: "/blog/affiliate-marketing/affiliate-marketing-for-beginners", label: "Affiliate marketing for beginners" },
      { href: "/blog/digital-marketing/what-is-digital-marketing", label: "What is digital marketing?" },
      { href: "/blog/digital-marketing/digital-marketing-interview-questions", label: "Digital marketing interview questions" },
      { href: "/blog/seo/seo-for-startups", label: "SEO for startups" },
    ],
    service: { href: "/services/social-media-marketing", label: "Grow with our marketing team" },
  },

  // —— Affiliate (supports monetization cluster) ——
  "affiliate-marketing-for-beginners": {
    related: [
      { href: "/blog/digital-marketing/how-to-earn-money-from-digital-marketing", label: "Earn money from digital marketing" },
      { href: "/blog/digital-marketing/what-is-digital-marketing", label: "What is digital marketing?" },
      { href: "/blog/seo/what-is-seo", label: "What is SEO?" },
      { href: "/blog/ai-tools/best-ai-tools-for-college-students", label: "AI tools for students" },
    ],
    service: { href: "/services/seo-services", label: "SEO for affiliate sites" },
  },

  // —— UI/UX cluster (pillar: ui-ux-design-in-2026) ——
  "ui-ux-design-in-2026": {
    related: [
      { href: "/blog/ui-ux/future-of-ui-design", label: "Future of UI design" },
      { href: "/blog/ui-ux/ui-ux-design-process-explained", label: "UI/UX design process" },
      { href: "/blog/ui-ux/accessibility-in-ux-design", label: "Accessibility in UX design" },
      { href: "/blog/ui-ux/saas-dashboard-design-ideas", label: "SaaS dashboard design ideas" },
    ],
    service: { href: "/services/ui-ux-design", label: "UI/UX design services" },
  },
  "future-of-ui-design": {
    related: [
      { href: "/blog/ui-ux/ui-ux-design-in-2026", label: "UI/UX design in 2026" },
      { href: "/blog/ui-ux/saas-dashboard-design-ideas", label: "SaaS dashboard design ideas" },
      { href: "/blog/ui-ux/ui-ux-design-process-explained", label: "UI/UX design process" },
      { href: "/blog/ai-tools/best-ai-tools-for-designers", label: "AI tools for designers" },
    ],
    service: { href: "/services/ui-ux-design", label: "UI/UX design services" },
  },
  "ui-ux-design-process-explained": {
    related: [
      { href: "/blog/ui-ux/saas-dashboard-design-ideas", label: "SaaS dashboard design ideas" },
      { href: "/blog/ui-ux/ui-ux-design-in-2026", label: "UI/UX trends in 2026" },
      { href: "/blog/ui-ux/accessibility-in-ux-design", label: "Accessibility in UX design" },
      { href: "/blog/ui-ux/future-of-ui-design", label: "Future of UI design" },
    ],
    service: { href: "/services/ui-ux-design", label: "UI/UX design services" },
  },
  "saas-dashboard-design-ideas": {
    related: [
      { href: "/blog/ui-ux/ui-ux-design-process-explained", label: "UI/UX design process" },
      { href: "/blog/ui-ux/ui-ux-design-in-2026", label: "UI/UX design in 2026" },
      { href: "/blog/ui-ux/future-of-ui-design", label: "Future of UI design" },
      { href: "/blog/ui-ux/accessibility-in-ux-design", label: "Accessibility in UX design" },
    ],
    service: { href: "/services/ui-ux-design", label: "SaaS UI/UX design" },
  },
  "accessibility-in-ux-design": {
    related: [
      { href: "/blog/ui-ux/ui-ux-design-in-2026", label: "UI/UX design in 2026" },
      { href: "/blog/ui-ux/ui-ux-design-process-explained", label: "UI/UX design process" },
      { href: "/blog/seo/website-optimization-tips", label: "Website optimization tips" },
      { href: "/blog/ui-ux/future-of-ui-design", label: "Future of UI design" },
    ],
    service: { href: "/services/ui-ux-design", label: "Inclusive UI/UX design" },
  },

  // —— AI tools cluster ——
  "best-ai-tools-for-college-students": {
    related: [
      { href: "/blog/ai-tools/best-ai-tools-for-designers", label: "AI tools for designers" },
      { href: "/blog/digital-marketing/digital-marketing-interview-questions", label: "Digital marketing interview prep" },
      { href: "/blog/seo/seo-interview-questions", label: "SEO interview questions" },
      { href: "/blog/affiliate-marketing/affiliate-marketing-for-beginners", label: "Affiliate marketing guide" },
    ],
    service: { href: "/blog", label: "More guides on our blog" },
  },

  "how-to-use-chatgpt": {
    related: [
      {
        href: "/blog/ai-tools/best-ai-tools-for-college-students",
        label: "Best AI tools for students",
      },
      {
        href: "/blog/digital-marketing/how-to-earn-money-from-digital-marketing",
        label: "Earn money from digital marketing",
      },
      {
        href: "/blog/affiliate-marketing/affiliate-marketing-for-beginners",
        label: "Affiliate marketing for beginners",
      },
      {
        href: "/blog/seo/seo-interview-questions",
        label: "SEO interview questions",
      },
    ],

    service: {
      href: "/blog",
      label: "Explore more AI guides",
    },
  },
  
  "best-ai-tools-for-designers": {
    related: [
      { href: "/blog/ai-tools/best-ai-tools-for-college-students", label: "AI tools for students" },
      { href: "/blog/ui-ux/future-of-ui-design", label: "Future of UI design" },
      { href: "/blog/ui-ux/ui-ux-design-process-explained", label: "UI/UX design process" },
      { href: "/blog/ui-ux/saas-dashboard-design-ideas", label: "SaaS dashboard design" },
    ],
    service: { href: "/services/ui-ux-design", label: "UI/UX design services" },
  },
  "create-and-sell-digital-products-using-chatgpt": {
  related: [
    {
      href: "/blog/ai-tools/how-to-use-chatgpt",
      label: "How to use ChatGPT",
    },
    {
      href: "/blog/ai-tools/chatgpt-vs-gemini-vs-claude",
      label: "ChatGPT vs Gemini vs Claude",
    },
    {
      href: "/blog/digital-marketing/how-to-earn-money-from-digital-marketing",
      label: "How to earn money from digital marketing",
    },
    {
      href: "/blog/affiliate-marketing/affiliate-marketing-for-beginners",
      label: "Affiliate marketing for beginners",
    },
  ],
  service: {
    href: "/services/digital-marketing",
    label: "Digital marketing services",
  },
},

};

export function getBlogLinks(slug: string): BlogLinkSet {
  return (
    blogInternalLinks[slug] ?? {
      related: [{ href: "/blog", label: "All blog articles" }],
      service: { href: "/services", label: "Our services" },
    }
  );
}

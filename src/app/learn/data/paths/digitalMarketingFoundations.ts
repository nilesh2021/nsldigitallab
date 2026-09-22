import { TrendingUp } from "lucide-react";
import { INSTAGRAM_URL, LINKEDIN_COMPANY_URL } from "../../../../data/social";
import { LearningPath } from "../../types";

export { LINKEDIN_COMPANY_URL };

export const digitalMarketingFoundationsPath: LearningPath = {
  slug: "digital-marketing-foundations",
  title: "Digital Marketing Foundations",
  eyebrow: "Growth path",
  tagline: "from first principles to a full campaign",
  description:
    "A free beginner course if you have never done marketing. We start with what digital marketing actually is, then walk you through research, planning, content, SEO, ads, email, and numbers — until you can write a complete campaign for a small business.",
  level: "Beginner",
  estimatedTime: "6–8 weeks · ~45 hours",
  moduleLabel: "10 modules",
  prerequisites: [
    "No marketing experience required — we assume you are starting from zero",
    "A computer or phone, plus a notebook or Google Doc for mini projects",
    "You do not need Google Ads, Meta Ads, or Analytics logins to complete the lessons",
  ],
  outcomes: [
    "Explain digital marketing, websites vs landing pages, organic vs paid traffic, and the funnel in everyday language",
    "Describe a target audience, write a buyer persona, and do a simple competitor scan",
    "Turn a business goal into a SMART marketing objective, pick channels, and plan a 30-day campaign",
    "Create beginner content, SEO, Google Search ads, paid social, and email plans that share one offer",
    "Read CTR, CPC, CPA, ROAS, and conversion rate with simple numbers — and say what to change",
    "Finish a complete campaign document: audience, journey, channels, page, KPIs, tracking, and next tests",
  ],
  linkedInUrl: LINKEDIN_COMPANY_URL,
  instagramUrl: INSTAGRAM_URL,
  download: {
    label: "Free Digital Marketing Checklist",
    href: "/downloads/digital-marketing-checklist.html",
  },
  seo: {
    title:
      "Digital Marketing Foundations Course | 10-Module Path | NSL Digital Lab",
    description:
      "Free beginner digital marketing course from zero: what marketing is, audience research, strategy, content, SEO, Google Ads, social ads, email, analytics, and a complete campaign project. No experience required.",
    keywords:
      "learn digital marketing, digital marketing course, beginner marketing, SEO, Google Ads, social media ads, email marketing, marketing funnel, KPIs",
    canonical: "/learn/digital-marketing-foundations",
  },
  icon: TrendingUp,
  modules: [
    {
      n: "01",
      slug: "digital-marketing-fundamentals",
      contentHref:
        "/learn/digital-marketing-foundations/digital-marketing-fundamentals",
      title: "Digital Marketing Fundamentals",
      description:
        "Learn what digital marketing is, how it differs from traditional marketing, why businesses use it, and how websites, traffic, channels, journeys, and funnels fit together.",
      topics: [
        "What is Digital Marketing?",
        "Traditional vs Digital Marketing",
        "Why businesses use Digital Marketing",
        "Websites and Landing Pages",
        "Organic vs Paid Traffic",
        "Major Digital Marketing Channels",
        "Customer Journey",
        "Marketing Funnel",
        "Awareness → Consideration → Conversion → Retention",
      ],
      miniProject: "Analyze how a real brand uses digital marketing.",
    },
    {
      n: "02",
      slug: "audience-and-market-research",
      contentHref:
        "/learn/digital-marketing-foundations/audience-and-market-research",
      title: "Audience & Market Research",
      description:
        "Find who you should talk to, what they need, and how competitors already win their attention — before you spend money on ads.",
      topics: [
        "Target Audience",
        "Customer Segments",
        "Buyer Persona",
        "Customer Needs, Goals and Pain Points",
        "Market Research",
        "Competitor Research",
        "Customer Journey",
        "Research Questions",
        "Qualitative vs Quantitative Research",
      ],
      miniProject: "Create a Buyer Persona and simple Competitor Analysis.",
    },
    {
      n: "03",
      slug: "digital-marketing-strategy",
      contentHref:
        "/learn/digital-marketing-foundations/digital-marketing-strategy",
      title: "Digital Marketing Strategy",
      description:
        "Turn business goals into marketing goals, choose channels, plan content and budget, and pick KPIs you can actually measure.",
      topics: [
        "Business Goals vs Marketing Goals",
        "SMART Goals",
        "Marketing Objectives",
        "Positioning",
        "Choosing Marketing Channels",
        "Content Strategy",
        "Campaign Planning",
        "Budget Basics",
        "KPIs",
        "Marketing Funnel Planning",
      ],
      miniProject: "Create a Digital Marketing Strategy for a small business.",
    },
    {
      n: "04",
      slug: "content-marketing-and-social-media",
      contentHref:
        "/learn/digital-marketing-foundations/content-marketing-and-social-media",
      title: "Content Marketing & Social Media",
      description:
        "Create useful content, plan organic social posts, write with a clear CTA, and reuse one idea across formats.",
      topics: [
        "Content Marketing",
        "Why Content Matters",
        "Content Types",
        "Content Pillars",
        "Social Media Strategy",
        "Organic Social Media",
        "Content Calendar",
        "Writing Effective Posts",
        "Engagement",
        "Calls to Action",
        "Content Repurposing",
      ],
      miniProject: "Create a 7-day Social Media Content Plan.",
    },
    {
      n: "05",
      slug: "seo-foundations",
      contentHref: "/learn/digital-marketing-foundations/seo-foundations",
      title: "SEO Foundations",
      description:
        "Help people find a page in Google by matching search intent, choosing keywords, and fixing on-page and basic technical SEO.",
      topics: [
        "What is SEO?",
        "Why SEO Matters",
        "How Search Engines Work",
        "Search Intent",
        "Keywords",
        "Keyword Research",
        "On-Page SEO",
        "Title Tags",
        "Meta Descriptions",
        "Headings",
        "Internal Linking",
        "Technical SEO Basics",
        "Organic Traffic",
      ],
      miniProject: "Create an SEO plan for one webpage.",
    },
    {
      n: "06",
      slug: "paid-advertising-and-google-ads",
      contentHref:
        "/learn/digital-marketing-foundations/paid-advertising-and-google-ads",
      title: "Paid Advertising & Google Ads",
      description:
        "Learn how paid search works: intent, keywords, ad groups, ad copy, landing pages, bidding, and conversion tracking.",
      topics: [
        "Organic vs Paid Acquisition",
        "PPC",
        "Google Ads Fundamentals",
        "Search Campaigns",
        "Search Intent",
        "Keywords",
        "Ad Groups",
        "Ad Copy",
        "Landing Pages",
        "Targeting",
        "Budget and Bidding Basics",
        "Conversion Tracking",
      ],
      miniProject: "Create a basic Google Search campaign structure.",
    },
    {
      n: "07",
      slug: "social-media-advertising",
      contentHref:
        "/learn/digital-marketing-foundations/social-media-advertising",
      title: "Social Media Advertising",
      description:
        "Plan a paid social campaign: objective, audience, creative, CTA, landing page, retargeting, tests, and performance.",
      topics: [
        "Organic vs Paid Social",
        "Campaign Objectives",
        "Audience Targeting",
        "Ad Creatives",
        "Ad Copy",
        "CTA",
        "Landing Pages",
        "Retargeting",
        "A/B Testing",
        "Ad Performance",
      ],
      miniProject: "Create a sample Paid Social campaign.",
    },
    {
      n: "08",
      slug: "email-marketing-and-conversion",
      contentHref:
        "/learn/digital-marketing-foundations/email-marketing-and-conversion",
      title: "Email Marketing & Conversion",
      description:
        "Capture leads with a useful offer, write a welcome sequence, and connect email to a conversion funnel.",
      topics: [
        "Email Marketing",
        "Lead Generation",
        "Lead Magnets",
        "Email Lists",
        "Opt-in Forms",
        "Welcome Emails",
        "Email Sequences",
        "Subject Lines",
        "CTA",
        "Landing Pages",
        "Conversion Funnel",
        "Basic Automation",
      ],
      miniProject: "Create a Lead Magnet and 3-email Welcome Sequence.",
    },
    {
      n: "09",
      slug: "analytics-and-marketing-performance",
      contentHref:
        "/learn/digital-marketing-foundations/analytics-and-marketing-performance",
      title: "Analytics & Marketing Performance",
      description:
        "Read the numbers that matter: traffic, engagement, conversion rate, CTR, CPC, CPA, and ROAS — with simple examples.",
      topics: [
        "Why Measurement Matters",
        "KPIs",
        "Traffic",
        "Users",
        "Sessions",
        "Engagement",
        "Conversion Rate",
        "CTR",
        "CPC",
        "CPA",
        "ROAS",
        "Basic Google Analytics Concepts",
        "Campaign Reporting",
      ],
      miniProject:
        "Create a simple Marketing Performance Report and explain what the numbers mean.",
    },
    {
      n: "10",
      slug: "complete-digital-marketing-campaign",
      contentHref:
        "/learn/digital-marketing-foundations/complete-digital-marketing-campaign",
      title: "Complete Digital Marketing Campaign",
      description:
        "Plan one campaign from business problem to optimization: audience, funnel, channels, content, SEO, ads, email, KPIs, and reporting.",
      topics: [
        "Business Problem",
        "Marketing Objective",
        "Target Audience",
        "Buyer Persona",
        "Customer Journey",
        "Marketing Funnel",
        "Channel Selection",
        "Content Strategy",
        "SEO",
        "Paid Advertising",
        "Social Media",
        "Email Marketing",
        "Landing Page",
        "KPIs",
        "Tracking",
        "Testing",
        "Optimization",
        "Reporting",
      ],
      miniProject:
        "Create a complete Digital Marketing Campaign for a fictional business.",
    },
  ],
};

export default digitalMarketingFoundationsPath;

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  LayoutTemplate,
  ShoppingBag,
  Sparkles,
  Store,
  UserRound,
} from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import ResourceDownload from "../../resources/components/ResourceDownload";
import ResourceCard from "../../resources/components/ResourceCard";
import SEO from "../../../seo/SEO";
import FAQSchema from "../../../seo/schemas/FAQSchema";
import { PAGE_SEO } from "../../../seo/pages";
import { SITE } from "../../../seo/schemas/constants";
import { resources } from "../../../data/resources";

const BUNDLE_SLUG = "1000-website-templates-mega-bundle";

const bundle = resources.find((item) => item.slug === BUNDLE_SLUG);

const relatedSlugs = [
  "website-launch-checklist",
  "figma-website-wireframe-kit",
];

const faqs = [
  {
    q: "Are these free website templates really free to download?",
    a: "Yes. Enter your email on this page to unlock the ZIP bundle instantly. There is no paid plan required for this download.",
  },
  {
    q: "Do I get HTML, Bootstrap 5, and Tailwind CSS templates?",
    a: "The mega bundle includes ready-to-use HTML templates built with Bootstrap 5 and Tailwind CSS, covering business sites, portfolios, agencies, SaaS, eCommerce, and landing pages.",
  },
  {
    q: "Can I use these templates for client or commercial projects?",
    a: "You can use the templates as a starting point for client and commercial websites. Keep third-party licenses (fonts, stock images, plugins) that ship inside individual templates, and replace placeholder branding with your own.",
  },
  {
    q: "How does the download work?",
    a: "Submit your email, unlock the file on this page, then open the Google Drive folder and save the ZIP. You can return to the folder anytime with the same link.",
  },
  {
    q: "Are the templates mobile responsive?",
    a: "Yes. The HTML, Bootstrap 5, and Tailwind CSS website templates in this bundle are built as responsive layouts you can customize for phones, tablets, and desktops.",
  },
];

const niches = [
  {
    title: "Business website templates",
    description:
      "Company sites with services, about, and contact sections so local businesses can launch a professional homepage without starting from a blank file.",
    icon: Briefcase,
  },
  {
    title: "Portfolio templates",
    description:
      "Designer, developer, and freelancer portfolios with project galleries and case-study layouts ready to swap in your work.",
    icon: UserRound,
  },
  {
    title: "Landing page templates",
    description:
      "Single-page layouts for product launches, waitlists, and campaigns—hero, proof, and a clear call to action.",
    icon: LayoutTemplate,
  },
  {
    title: "SaaS templates",
    description:
      "Product marketing pages with feature grids, pricing, and FAQ blocks you can map to a software offer.",
    icon: Sparkles,
  },
  {
    title: "Agency templates",
    description:
      "Studio and agency homepages with process, work, and contact sections for studios that sell design or marketing.",
    icon: Store,
  },
  {
    title: "eCommerce templates",
    description:
      "Storefront-style pages for catalogs, product highlights, and checkout-oriented landing layouts.",
    icon: ShoppingBag,
  },
];

const included = [
  "1,000 HTML website templates in one ZIP",
  "Bootstrap 5 templates for faster layout and components",
  "Tailwind CSS templates for utility-first customization",
  "Business, portfolio, agency, SaaS, eCommerce, and landing pages",
  "Responsive markup you can edit in any code editor",
  "Instant unlock after you enter your email",
];

const steps = [
  {
    n: "01",
    title: "Enter your email",
    body: "No account is required. Use the download card on this page.",
  },
  {
    n: "02",
    title: "Unlock instantly",
    body: "The Drive folder opens as soon as the form succeeds.",
  },
  {
    n: "03",
    title: "Save the ZIP",
    body: "Download the mega bundle and keep the files for future projects.",
  },
];

export default function FreeWebsiteTemplatesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = relatedSlugs
    .map((slug) => resources.find((item) => item.slug === slug))
    .filter((item): item is (typeof resources)[number] => Boolean(item));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "1000 Free Website Templates Mega Bundle",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: PAGE_SEO.freeWebsiteTemplates.description,
    url: `${SITE.url}/free-website-templates`,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <SEO {...PAGE_SEO.freeWebsiteTemplates} />
      <FAQSchema faqs={faqs.map((item) => ({ question: item.q, answer: item.a }))} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <MainLayout>
        <section className="relative overflow-hidden bg-[#060b14] pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-36">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  Free ZIP bundle
                </p>
                <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                  1000 Free Website Templates — HTML, Bootstrap 5 & Tailwind CSS
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  Download 1,000 ready-to-use HTML templates free—Bootstrap 5 and
                  Tailwind CSS files for business websites, portfolios, agencies,
                  SaaS, eCommerce, and landing pages.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#061018] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    Download free templates
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#whats-included"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    See what’s included
                  </a>
                </div>
                <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { label: "Templates", value: "1,000" },
                    { label: "Frameworks", value: "Bootstrap 5 · Tailwind" },
                    { label: "Price", value: "Free" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {stat.label}
                      </dt>
                      <dd className="mt-1 text-lg font-semibold text-white">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div id="download" className="scroll-mt-28 lg:pt-4">
                {bundle ? (
                  <ResourceDownload
                    slug={bundle.slug}
                    resourceTitle={bundle.title}
                    downloadUrl={bundle.downloadUrl}
                    type={bundle.type}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section
          id="whats-included"
          className="scroll-mt-24 border-t border-slate-100 bg-white py-20 sm:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                What’s in the HTML templates mega bundle
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                One download for Bootstrap 5 templates and Tailwind CSS website
                templates you can customize, ship to a client, or use as a
                learning reference.
              </p>
            </div>
            <ul className="grid gap-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f5f7fb] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Free website templates by use case
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Browse the ZIP for business website templates, portfolio templates,
              landing page templates, SaaS templates, and more—then customize the
              HTML to match your brand.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {niches.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200/80 bg-white p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[#0f172a]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              How the free download works
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.n}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="text-xs font-semibold tabular-nums text-slate-400">
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#0f172a]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                Common questions
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                License, Bootstrap vs Tailwind, and how to get the ZIP.
              </p>
              <Link
                to="/resources"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700"
              >
                Browse all resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q} className="py-5">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-[#0f172a]"
                    >
                      {faq.q}
                      <span className={`text-lg font-normal text-slate-400 transition ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                    {isOpen ? (
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{faq.a}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="border-t border-slate-100 bg-[#f5f7fb] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                  Related resources
                </h2>
                <Link to="/resources" className="hidden text-sm font-semibold text-cyan-700 sm:inline">
                  Browse all
                </Link>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {related.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </MainLayout>
    </>
  );
}

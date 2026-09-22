import { useEffect } from "react";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";

import { INSTAGRAM_URL, LINKEDIN_COMPANY_URL } from "../../data/social";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/images/Nsl-digital-lab.png";

type FooterLink = {
  label: string;
  to: string;
  hash?: string;
};

const serviceLinks: FooterLink[] = [
  { label: "UI/UX Design", to: "/services/ui-ux-design" },
  { label: "Website Design", to: "/services/web-design" },
  { label: "SEO Services", to: "/services/seo-services" },
  { label: "Digital Marketing", to: "/services/social-media-marketing" },
  { label: "View all services", to: "/services" },
];

const learnLinks: FooterLink[] = [
  { label: "Learning Hub", to: "/learn" },
  { label: "UI/UX Design Foundations", to: "/learn/ui-ux-design" },
  { label: "Digital Marketing Foundations", to: "/learn/digital-marketing-foundations" },
  { label: "React Foundations", to: "/learn/react-foundations" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Free Resources", to: "/resources" },
];

const resourceLinks: FooterLink[] = [
  { label: "All Resources", to: "/resources" },
  { label: "UI/UX Interview Questions", to: "/resources/ui-ux-interview-questions" },
  { label: "SEO Checklist", to: "/resources/seo-checklist" },
  { label: "Marketing Checklist", to: "/resources/digital-marketing-checklist" },
  { label: "Website Launch Checklist", to: "/resources/website-launch-checklist" },
  { label: "Figma UI Kit", to: "/resources/figma-ui-kit" },
  { label: "ChatGPT Prompt Pack", to: "/resources/chatgpt-prompt-pack" },
  { label: "Blog", to: "/blog" },
];

const companyLinks: FooterLink[] = [
  { label: "About", to: "/", hash: "about" },
  { label: "Portfolio", to: "/", hash: "featured-work" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/", hash: "contact" },
  { label: "Newsletter", to: "/resources", hash: "subscribe" },
];

const policyLinks: FooterLink[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Disclaimer", to: "/disclaimer" },
];

const columns = [
  { title: "Services", links: serviceLinks },
  { title: "Learn", links: learnLinks },
  { title: "Resources", links: resourceLinks },
  { title: "Company", links: companyLinks },
];

function FooterNavLink({
  link,
  onSectionClick,
}: {
  link: FooterLink;
  onSectionClick: (id: string, path: string) => void;
}) {
  const className =
    "cursor-pointer text-base leading-5 text-slate-400 transition-colors duration-200 hover:text-white md:text-[13px]";

  if (link.hash) {
    return (
      <button
        type="button"
        onClick={() => onSectionClick(link.hash!, link.to)}
        className={`${className} text-left`}
      >
        {link.label}
      </button>
    );
  }

  return (
    <Link to={link.to} className={className}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;

    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const scrollToSection = (id: string, path: string) => {
    if (window.location.pathname === path) {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      return;
    }

    navigate(`${path}#${id}`);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#060b14] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-violet-600/[0.06] blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-white/[0.08] py-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-base font-semibold tracking-tight text-white sm:text-lg">
              Ready to grow your digital presence?
            </p>
            <p className="mt-0.5 text-base text-slate-400 md:text-[13px]">
              Tell us about your project — we usually reply within 24 hours.
            </p>
          </div>

          <div className="flex flex-row flex-wrap gap-2">
            <button
              type="button"
              onClick={() => scrollToSection("contact", "/")}
              className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-base font-semibold text-[#060b14] transition-all duration-200 hover:-translate-y-px hover:bg-slate-100 md:text-[13px]"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <a
              href="mailto:hello@nsldigitallab.com"
              className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-base font-medium text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white md:text-[13px]"
            >
              <Mail className="h-3.5 w-3.5 text-cyan-400" />
              hello@nsldigitallab.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 py-8 sm:grid-cols-4 lg:grid-cols-6 lg:gap-8">
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Link to="/" className="group inline-flex cursor-pointer items-center gap-2.5">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                <img src={logo} alt="" className="h-6 w-6 object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-none tracking-tight text-white">
                  NSL
                  <span className="ml-1.5 font-light text-slate-300">Digital Lab</span>
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  Design · Development · Growth
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-[13px] leading-6 text-slate-400">
              We help businesses build modern websites, improve user experience,
              rank better in search, and grow through design, development, SEO,
              and digital marketing.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <a
                href={LINKEDIN_COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NSL Digital Lab on LinkedIn"
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-500/15 hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NSL Digital Lab on Instagram"
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-500/15 hover:text-white"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {column.title}
              </h2>
              <ul className="space-y-1.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <FooterNavLink link={link} onSectionClick={scrollToSection} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] py-4 lg:flex-row">
          <p className="text-center text-[13px] text-slate-500 lg:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-300">NSL Digital Lab</span>
            . All rights reserved.
          </p>

          <nav
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-base md:text-[13px]"
          >
            {policyLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="cursor-pointer text-slate-500 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

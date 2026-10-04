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
  { label: "Spoken English Communication", to: "/learn/spoken-english-communication" },
  { label: "Case Studies", to: "/case-studies" },
];

const companyLinks: FooterLink[] = [
  { label: "About", to: "/", hash: "about" },
  { label: "Portfolio", to: "/", hash: "featured-work" },
  { label: "Careers", to: "/careers" },
  { label: "Resources", to: "/resources" },
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
    "inline-block cursor-pointer py-px text-[13px] leading-5 text-slate-400 transition-colors duration-200 hover:text-white";

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
      <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-cyan-500/[0.05] blur-[80px]" />
      <div className="pointer-events-none absolute -right-12 bottom-0 h-36 w-36 rounded-full bg-violet-600/[0.05] blur-[70px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-2.5 border-b border-white/[0.08] py-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight text-white">
              Ready to grow your digital presence?
            </p>
            <p className="text-[13px] leading-5 text-slate-400">
              Tell us about your project — we usually reply within 24 hours.
            </p>
          </div>

          <div className="flex flex-row flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => scrollToSection("contact", "/")}
              className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-[#060b14] transition-all duration-200 hover:-translate-y-px hover:bg-slate-100"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <a
              href="mailto:hello@nsldigitallab.com"
              className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] font-medium text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-cyan-400" />
              hello@nsldigitallab.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 py-5 sm:grid-cols-4 lg:grid-cols-5 lg:gap-x-8">
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Link to="/" className="group inline-flex cursor-pointer items-center gap-2">
              <div className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
                <img src={logo} alt="" className="h-4 w-4 object-contain" />
              </div>
              <div>
                <p className="text-[13px] font-semibold leading-none tracking-tight text-white">
                  NSL
                  <span className="ml-1 font-light text-slate-300">Digital Lab</span>
                </p>
                <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500">
                  Design · Development · Growth
                </p>
              </div>
            </Link>

            <p className="mt-2.5 max-w-xs text-[13px] leading-5 text-slate-400">
              Websites, UI/UX, SEO, and digital marketing for businesses that want to grow.
            </p>

            <div className="mt-2.5 flex items-center gap-1.5">
              <a
                href={LINKEDIN_COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NSL Digital Lab on LinkedIn"
                className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-500/15 hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NSL Digital Lab on Instagram"
                className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-500/15 hover:text-white"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {column.title}
              </h2>
              <ul className="space-y-0.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <FooterNavLink link={link} onSectionClick={scrollToSection} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/[0.08] py-2.5 sm:flex-row">
          <p className="text-center text-[12px] text-slate-500 sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-300">NSL Digital Lab</span>
            . All rights reserved.
          </p>

          <nav
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[12px] sm:justify-end"
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

import { useEffect } from "react";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
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
  { label: "UI/UX Design", to: "/learn/ui-ux-design" },
  { label: "Learn SEO", to: "/learn/seo" },
  { label: "Digital Marketing", to: "/learn/digital-marketing" },
  { label: "Free Resources", to: "/resources" },
];

const resourceLinks: FooterLink[] = [
  { label: "All Resources", to: "/resources" },
  { label: "UI/UX Interview Questions", to: "/resources/ui-ux-interview-questions" },
  { label: "SEO Checklist", to: "/resources/seo-checklist" },
  { label: "Marketing Checklist", to: "/resources/digital-marketing-checklist" },
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
    "text-sm text-slate-400 transition-colors duration-200 hover:text-white";

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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-white/[0.08] py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              Ready to grow your digital presence?
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Tell us about your project — we usually reply within 24 hours.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => scrollToSection("contact", "/")}
              className="inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#060b14] transition-all duration-200 hover:-translate-y-px hover:bg-slate-100"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <a
              href="mailto:hello@nsldigitallab.com"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              <Mail className="h-4 w-4 text-cyan-400" />
              hello@nsldigitallab.com
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-6 lg:gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                <img src={logo} alt="" className="h-7 w-7 object-contain" />
              </div>
              <div>
                <p className="text-[15px] font-semibold leading-none tracking-tight text-white sm:text-base">
                  NSL
                  <span className="ml-1.5 font-light text-slate-300">Digital Lab</span>
                </p>
                <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Design · Development · Growth
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              We help businesses build modern websites, improve user experience,
              rank better in search, and grow through design, development, SEO,
              and digital marketing.
            </p>

            <a
              href="https://www.linkedin.com/company/nsldigitallab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NSL Digital Lab on LinkedIn"
              className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-500/15 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {column.title}
              </h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <FooterNavLink link={link} onSectionClick={scrollToSection} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/[0.08] py-6 lg:flex-row">
          <p className="text-center text-sm text-slate-500 lg:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-300">NSL Digital Lab</span>
            . All rights reserved.
          </p>

          <nav
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm"
          >
            {policyLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-slate-500 transition-colors duration-200 hover:text-white"
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

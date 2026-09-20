import { Linkedin } from "lucide-react";
import { useLocation } from "react-router-dom";

const LINKEDIN_URL = "https://www.linkedin.com/company/nsldigitallab/";

const HIDDEN_PATHS = new Set([
  "/career-crud",
  "/thank-you",
  "/careers/thank-you",
  "/contact/thank-you",
  "/resources/thank-you",
]);

export default function LinkedInFollowCta() {
  const { pathname } = useLocation();

  if (HIDDEN_PATHS.has(pathname)) {
    return null;
  }

  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow NSL Digital Lab on LinkedIn"
      className="fixed right-0 top-1/2 z-[9998] inline-flex -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-l-xl bg-[#0A66C2] px-2 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(10,102,194,0.35)] transition hover:bg-[#0c75dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/70 focus-visible:ring-offset-2"
    >
      <Linkedin className="h-[18px] w-[18px] shrink-0" />
      <span className="tracking-wide" style={{ writingMode: "vertical-rl" }}>
        Follow us
      </span>
    </a>
  );
}

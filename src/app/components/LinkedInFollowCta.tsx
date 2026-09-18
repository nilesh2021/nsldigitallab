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
      className="fixed right-4 bottom-[4.75rem] z-[9998] inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-[#0A66C2] text-sm font-semibold text-white shadow-[0_12px_40px_rgba(10,102,194,0.35)] transition hover:bg-[#0c75dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/70 focus-visible:ring-offset-2 md:right-7 md:bottom-[5.75rem] md:h-12 md:w-auto md:px-4"
    >
      <Linkedin className="h-4 w-4 md:h-[18px] md:w-[18px]" />
      <span className="hidden md:inline">Follow us</span>
    </a>
  );
}

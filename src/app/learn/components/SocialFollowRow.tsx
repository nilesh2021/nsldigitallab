import { Instagram, Linkedin } from "lucide-react";

import { INSTAGRAM_URL, LINKEDIN_COMPANY_URL } from "../../../data/social";

type Props = {
  linkedInUrl?: string;
  instagramUrl?: string;
  className?: string;
};

export default function SocialFollowRow({
  linkedInUrl = LINKEDIN_COMPANY_URL,
  instagramUrl = INSTAGRAM_URL,
  className = "",
}: Props) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`.trim()}>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 transition hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/[0.04]"
      >
        <span>
          <span className="block text-sm font-semibold text-[#0f172a]">
            Follow on LinkedIn
          </span>
          <span className="mt-0.5 block text-xs text-slate-500">
            Modules, project ideas, and career notes
          </span>
        </span>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2] text-white">
          <Linkedin className="h-4 w-4" />
        </span>
      </a>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 transition hover:border-[#dd2a7b]/30 hover:bg-[#dd2a7b]/[0.04]"
      >
        <span>
          <span className="block text-sm font-semibold text-[#0f172a]">
            Follow on Instagram
          </span>
          <span className="mt-0.5 block text-xs text-slate-500">
            Short design and marketing updates
          </span>
        </span>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#dd2a7b] text-white">
          <Instagram className="h-4 w-4" />
        </span>
      </a>
    </div>
  );
}

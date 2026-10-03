import { ArrowRight } from "lucide-react";

import { affiliateLinkProps, getAffiliateUrl } from "../data/affiliateUrls";
import { PRODUCTS, type ProductId } from "../data/products";
import { useCareerPageSlug } from "../context/CareerTrackingContext";
import {
  trackProductAffiliateClick,
  type AffiliateClickPosition,
} from "../utils/trackAffiliateClick";

type Props = {
  productId: ProductId;
  label: string;
  position: AffiliateClickPosition;
  variant?: "primary" | "secondary";
  className?: string;
};

const primaryClass =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#061018] transition hover:bg-cyan-300";
const secondaryClass =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50";

export default function AffiliateButton({
  productId,
  label,
  position,
  variant = "primary",
  className,
}: Props) {
  const page = useCareerPageSlug();
  const product = PRODUCTS[productId];
  const href = getAffiliateUrl(product.affiliateKey);

  function handleClick() {
    trackProductAffiliateClick(productId, page, position, label);
  }

  return (
    <a
      href={href}
      {...affiliateLinkProps}
      onClick={handleClick}
      className={className ?? (variant === "primary" ? primaryClass : secondaryClass)}
    >
      {label}
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
    </a>
  );
}

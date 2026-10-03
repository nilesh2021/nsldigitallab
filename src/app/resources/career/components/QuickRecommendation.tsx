import { Link } from "react-router-dom";

import { PRODUCTS, type ProductId } from "../data/products";
import type { AffiliateClickPosition } from "../utils/trackAffiliateClick";
import AffiliateButton from "./AffiliateButton";

type Props = {
  title: string;
  productId: ProductId;
  description: string;
  position?: AffiliateClickPosition;
  reviewPath?: string;
  ctaLabel?: string;
};

export default function QuickRecommendation({
  title,
  productId,
  description,
  position = "quick-recommendation",
  reviewPath,
  ctaLabel,
}: Props) {
  const product = PRODUCTS[productId];
  const label = ctaLabel ?? product.ctaLabel;

  return (
    <aside
      className="rounded-2xl border border-cyan-200/80 bg-cyan-50/60 p-6 sm:p-7"
      aria-label={title}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-900">
        {title}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-[#0f172a]">
        {product.name}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
        {description}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <AffiliateButton
          productId={productId}
          label={label}
          position={position}
          variant="primary"
        />
        {reviewPath ? (
          <Link
            to={reviewPath}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Read full review
          </Link>
        ) : null}
      </div>
    </aside>
  );
}

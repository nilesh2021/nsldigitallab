import { Link } from "react-router-dom";

import { PRODUCTS, type ProductId } from "../data/products";
import { careerArticlePath, type CareerArticleSlug } from "../data/types";
import AffiliateButton from "./AffiliateButton";

type Props = {
  productId: ProductId;
  reviewSlug?: CareerArticleSlug;
};

const REVIEW_SLUGS: Partial<Record<ProductId, CareerArticleSlug>> = {
  rezi: "rezi-review",
  resumeIo: "resume-io-review",
  zety: "zety-review",
};

export default function AffiliateProductCard({
  productId,
  reviewSlug,
}: Props) {
  const product = PRODUCTS[productId];
  const review =
    reviewSlug ?? REVIEW_SLUGS[productId];

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#0f172a]">{product.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{product.summary}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        <span className="font-medium text-slate-800">Best for: </span>
        {product.bestFor}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <AffiliateButton
          productId={productId}
          label={product.ctaLabel}
          position="product-card"
          variant="primary"
        />
        {review ? (
          <Link
            to={careerArticlePath(review)}
            className="inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-cyan-800 underline-offset-2 hover:underline"
          >
            Read full review
          </Link>
        ) : null}
      </div>
    </article>
  );
}

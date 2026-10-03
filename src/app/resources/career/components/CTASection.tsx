import { Link } from "react-router-dom";

import type { ProductId } from "../data/products";
import type { AffiliateClickPosition } from "../utils/trackAffiliateClick";
import AffiliateButton from "./AffiliateButton";

type Button = {
  label: string;
  productId: ProductId;
  reviewPath?: string;
};

type Props = {
  id?: string;
  heading?: string;
  intro?: string;
  buttons: Button[];
  position?: AffiliateClickPosition;
};

export default function CTASection({
  id,
  heading,
  intro,
  buttons,
  position = "cta-section",
}: Props) {
  const primary = buttons[0];
  const secondary = buttons.slice(1);

  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-slate-200 bg-[#f5f7fb] p-6 sm:p-8"
    >
      {heading ? (
        <h2 className="text-xl font-bold text-[#0f172a]">{heading}</h2>
      ) : null}
      {intro ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          {intro}
        </p>
      ) : null}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {primary ? (
          <AffiliateButton
            productId={primary.productId}
            label={primary.label}
            position={position}
            variant="primary"
          />
        ) : null}
        {primary?.reviewPath ? (
          <Link
            to={primary.reviewPath}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Read full review
          </Link>
        ) : null}
        {secondary.map((btn) => (
          <AffiliateButton
            key={btn.productId}
            productId={btn.productId}
            label={btn.label}
            position={position}
            variant="secondary"
          />
        ))}
      </div>
    </section>
  );
}

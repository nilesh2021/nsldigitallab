import { ArrowRight } from "lucide-react";

import CareerBreadcrumbs from "./CareerBreadcrumbs";
import { CAREER_HUB_PATH } from "../data/types";
import type { ProductId } from "../data/products";
import AffiliateButton from "./AffiliateButton";

type Props = {
  badge: string;
  h1: string;
  dek: string;
  breadcrumbLabel: string;
  heroCta?: { label: string; href: string };
  heroAffiliate?: { productId: ProductId; label: string };
};

export default function ArticleHero({
  badge,
  h1,
  dek,
  breadcrumbLabel,
  heroCta,
  heroAffiliate,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#060b14] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <CareerBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Career Resources", href: CAREER_HUB_PATH },
            { label: breadcrumbLabel },
          ]}
        />
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
            {badge}
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            {h1}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            {dek}
          </p>
          {(heroAffiliate || heroCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {heroAffiliate ? (
                <AffiliateButton
                  productId={heroAffiliate.productId}
                  label={heroAffiliate.label}
                  position="hero"
                  variant="primary"
                />
              ) : null}
              {heroCta ? (
                <a
                  href={heroCta.href}
                  className={
                    heroAffiliate
                      ? "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                      : "inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#061018] transition hover:bg-cyan-300"
                  }
                >
                  {heroCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

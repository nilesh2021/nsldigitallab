import { trackEvent } from "../../../../utils/analytics";
import { getAffiliateUrl } from "../data/affiliateUrls";
import type { AffiliateUrlKey } from "../data/affiliateUrls";
import type { ProductId } from "../data/products";
import { PRODUCTS } from "../data/products";

export type AffiliateClickPosition =
  | "hero"
  | "intro-recommendation"
  | "product-card"
  | "comparison-table"
  | "cta-section"
  | "quick-recommendation"
  | "lead-magnet-success"
  | "closing-cta"
  | "hub-recommended-tools"
  | "prose-inline";

export type AffiliateClickPayload = {
  product: ProductId;
  page: string;
  position: AffiliateClickPosition;
  cta: string;
  destination: string;
};

export function trackAffiliateClick(payload: AffiliateClickPayload): void {
  trackEvent("affiliate_click", {
    product: payload.product,
    page: payload.page,
    position: payload.position,
    cta: payload.cta,
    destination: payload.destination,
    timestamp: Date.now(),
  });
}

export function trackAffiliateClickByKey(
  affiliateKey: AffiliateUrlKey,
  product: ProductId,
  page: string,
  position: AffiliateClickPosition,
  cta: string,
): void {
  trackAffiliateClick({
    product,
    page,
    position,
    cta,
    destination: getAffiliateUrl(affiliateKey),
  });
}

export function trackProductAffiliateClick(
  productId: ProductId,
  page: string,
  position: AffiliateClickPosition,
  cta: string,
): void {
  const product = PRODUCTS[productId];
  trackAffiliateClickByKey(
    product.affiliateKey,
    productId,
    page,
    position,
    cta,
  );
}

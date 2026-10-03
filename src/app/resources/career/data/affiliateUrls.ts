/** Replace placeholder strings with real affiliate URLs. */
export const AFFILIATE_URLS = {
  AFFILIATE_REZI_URL: "AFFILIATE_REZI_URL",
  AFFILIATE_RESUME_IO_URL: "AFFILIATE_RESUME_IO_URL",
  AFFILIATE_ZETY_URL: "AFFILIATE_ZETY_URL",
  AFFILIATE_TOPRESUME_URL: "AFFILIATE_TOPRESUME_URL",
  AFFILIATE_COURSERA_URL: "AFFILIATE_COURSERA_URL",
  AFFILIATE_UDEMY_URL: "AFFILIATE_UDEMY_URL",
  AFFILIATE_GRAMMARLY_URL: "AFFILIATE_GRAMMARLY_URL",
  AFFILIATE_PREPLY_URL: "AFFILIATE_PREPLY_URL",
} as const;

export type AffiliateUrlKey = keyof typeof AFFILIATE_URLS;

export function getAffiliateUrl(key: AffiliateUrlKey): string {
  return AFFILIATE_URLS[key];
}

export const affiliateLinkProps = {
  target: "_blank",
  rel: "sponsored nofollow noopener noreferrer",
} as const;

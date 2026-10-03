import MainLayout from "../../../layouts/MainLayout";
import SEO from "../../../../seo/SEO";
import FAQSchema from "../../../../seo/schemas/FAQSchema";
import ArticleSchema from "../../../../seo/schemas/ArticleSchema";
import BreadcrumbListSchema from "../../../../seo/schemas/BreadcrumbListSchema";
import { SITE } from "../../../../seo/schemas/constants";
import type { CareerArticleMeta } from "../data/types";
import type { CareerArticleContent } from "../data/types";
import { CAREER_HUB_PATH, careerArticlePath } from "../data/types";
import AffiliateDisclosure from "./AffiliateDisclosure";
import ArticleBody from "./ArticleBody";
import ArticleHero from "./ArticleHero";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";
import RelatedResources from "./RelatedResources";

type Props = {
  meta: CareerArticleMeta;
  content: CareerArticleContent;
};

export default function CareerArticleLayout({ meta, content }: Props) {
  const canonicalPath = careerArticlePath(meta.slug);
  const articleUrl = `${SITE.url}${canonicalPath}`;

  return (
    <>
      <SEO
        title={meta.seoTitle}
        description={meta.seoDescription}
        keywords={meta.seoKeywords}
        canonical={canonicalPath}
        type="article"
      />
      <FAQSchema faqs={content.faqs} />
      <ArticleSchema
        headline={meta.h1}
        description={meta.seoDescription}
        url={articleUrl}
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Career Resources", path: CAREER_HUB_PATH },
          { name: meta.h1, path: canonicalPath },
        ]}
      />
      <MainLayout>
        <ArticleHero
          badge={meta.badge}
          h1={meta.h1}
          dek={meta.dek}
          breadcrumbLabel={meta.h1}
          heroCta={meta.heroCta}
          heroAffiliate={meta.heroAffiliate}
        />

        <div className="border-t border-slate-100 bg-white px-6 py-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <AffiliateDisclosure />
          </div>
        </div>

        <article className="border-t border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ArticleBody blocks={content.blocks} />
            {content.closingCta ? (
              <div className="mt-14">
                <CTASection
                  heading="Final recommendation"
                  intro="Visit the official site to confirm current features and plans before you sign up."
                  position="closing-cta"
                  buttons={[
                    {
                      label: content.closingCta.label,
                      productId: content.closingCta.productId,
                    },
                  ]}
                />
              </div>
            ) : null}
            <RelatedResources relatedSlugs={meta.relatedSlugs} />
          </div>
        </article>

        <FAQSection faqs={content.faqs} />
      </MainLayout>
    </>
  );
}

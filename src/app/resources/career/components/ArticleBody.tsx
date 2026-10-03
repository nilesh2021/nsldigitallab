import type { CareerContentBlock } from "../data/types";
import { careerArticlePath } from "../data/types";
import AffiliateProductCard from "./AffiliateProductCard";
import ArticleSection from "./ArticleSection";
import BestForBadge from "./BestForBadge";
import CareerChecklistPromo from "./CareerChecklistPromo";
import ChooseIf from "./ChooseIf";
import CTASection from "./CTASection";
import ProductComparisonTable from "./ProductComparisonTable";
import ProsCons from "./ProsCons";
import QuickRecommendation from "./QuickRecommendation";
import { CheckCircle2 } from "lucide-react";

type Props = {
  blocks: CareerContentBlock[];
};

export default function ArticleBody({ blocks }: Props) {
  return (
    <div className="space-y-14">
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "prose":
            return (
              <ArticleSection key={index} heading={block.heading}>
                {block.body}
              </ArticleSection>
            );
          case "quickRecommendation":
            return (
              <QuickRecommendation
                key={index}
                title={block.title}
                productId={block.productId}
                description={block.description}
                ctaLabel={block.ctaLabel}
                reviewPath={
                  block.reviewSlug
                    ? careerArticlePath(block.reviewSlug)
                    : undefined
                }
              />
            );
          case "checklistPromo":
            return <CareerChecklistPromo key={index} />;
          case "products":
            return (
              <div key={index} id="recommended" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  {block.heading}
                </h2>
                {block.intro ? (
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                    {block.intro}
                  </p>
                ) : null}
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {block.productIds.map((id) => (
                    <AffiliateProductCard key={id} productId={id} />
                  ))}
                </div>
              </div>
            );
          case "comparisonTable":
            return (
              <div key={index} id={block.id} className={block.id ? "scroll-mt-24" : undefined}>
              <ProductComparisonTable
                heading={block.heading}
                intro={block.intro}
                columns={block.columns}
                rows={block.rows}
                columnProducts={block.columnProducts}
              />
              </div>
            );
          case "prosCons":
            return (
              <ProsCons
                key={index}
                heading={block.heading}
                productName={block.productName}
                pros={block.pros}
                cons={block.cons}
              />
            );
          case "bestFor":
            return (
              <div key={index} className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  {block.heading}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <BestForBadge
                      key={item.title}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            );
          case "chooseIf":
            return (
              <div key={index} className="scroll-mt-24">
                <ChooseIf items={block.items} />
              </div>
            );
          case "checklist":
            return (
              <div key={index} id="checklist" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  {block.heading}
                </h2>
                <ul className="mt-6 max-w-2xl space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "ctas":
            return (
              <CTASection
                key={index}
                id={block.id}
                heading={block.heading}
                intro={block.intro}
                buttons={block.buttons}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

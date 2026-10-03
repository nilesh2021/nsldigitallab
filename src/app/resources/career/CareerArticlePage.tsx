import { Link, useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { getCareerArticleContent } from "./content";
import { getCareerArticleMeta } from "./data/registry";
import CareerArticleLayout from "./components/CareerArticleLayout";
import { CareerTrackingProvider } from "./context/CareerTrackingContext";
import { CAREER_HUB_PATH } from "./data/types";

export default function CareerArticlePage() {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const meta = articleSlug ? getCareerArticleMeta(articleSlug) : undefined;
  const content = articleSlug ? getCareerArticleContent(articleSlug) : undefined;

  if (!meta || !content) {
    return (
      <MainLayout>
        <div className="mx-auto max-w-xl px-6 py-32 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Page not found</h1>
          <p className="mt-3 text-slate-600">
            This career guide does not exist or has moved.
          </p>
          <Link
            to={CAREER_HUB_PATH}
            className="mt-6 inline-block text-sm font-semibold text-cyan-700 hover:underline"
          >
            Back to career resources
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <CareerTrackingProvider pageSlug={meta.slug}>
      <CareerArticleLayout meta={meta} content={content} />
    </CareerTrackingProvider>
  );
}

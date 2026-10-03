import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { careerArticleMeta } from "../data/registry";
import { CAREER_HUB_PATH, careerArticlePath, type CareerArticleSlug } from "../data/types";

type Props = {
  relatedSlugs: CareerArticleSlug[];
  title?: string;
};

export default function RelatedResources({
  relatedSlugs,
  title = "Related career guides",
}: Props) {
  const links = relatedSlugs
    .map((slug) => careerArticleMeta[slug])
    .filter(Boolean);

  return (
    <section className="mt-16">
      <h2 className="text-xl font-bold text-[#0f172a]">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((article) => (
          <li key={article.slug}>
            <Link
              to={careerArticlePath(article.slug)}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50/50"
            >
              {article.h1}
              <ArrowRight
                className="h-4 w-4 shrink-0 text-cyan-600 transition group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </li>
        ))}
        <li className="sm:col-span-2">
          <Link
            to={CAREER_HUB_PATH}
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-cyan-300"
          >
            All career resources
            <ArrowRight className="h-4 w-4 text-cyan-600" aria-hidden />
          </Link>
        </li>
      </ul>
    </section>
  );
}

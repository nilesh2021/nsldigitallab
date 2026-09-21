import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type RelatedLink = {
  href: string;
  label: string;
};

type RelatedArticlesProps = {
  links?: {
    related?: RelatedLink[];
    learn?: RelatedLink;
  };

  title?: string;
};

export default function RelatedArticles({
  links,
  title = "Related Articles",
}: RelatedArticlesProps) {

  if (!links?.related?.length) {
    return null;
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-6 space-y-4">

        {links.related.map((article, index) => (

          <Link
            key={index}
            to={article.href}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4 hover:border-green-500/30 hover:bg-green-500/5 transition"
          >

            <span className="text-gray-300 group-hover:text-white transition">
              {article.label}
            </span>

            <ArrowRight className="h-4 w-4 text-green-400" />

          </Link>

        ))}

        {links.learn ? (
          <Link
            to={links.learn.href}
            className="group flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4 hover:border-cyan-400/50 hover:bg-cyan-500/15 transition"
          >
            <span className="text-cyan-100 group-hover:text-white transition">
              {links.learn.label}
            </span>
            <ArrowRight className="h-4 w-4 text-cyan-300" />
          </Link>
        ) : null}

      </div>

    </div>
  );
}
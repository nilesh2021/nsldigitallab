import { Helmet } from "react-helmet-async";
import { SITE } from "./constants";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export default function ArticleSchema({
  headline,
  description,
  url,
  image = SITE.image,
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  author = "NSL Digital Lab",
}: ArticleSchemaProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline,
          description,
          image,
          author: {
            "@type": "Organization",
            name: author,
          },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            logo: {
              "@type": "ImageObject",
              url: SITE.logo,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
          datePublished,
          dateModified,
        })}
      </script>
    </Helmet>
  );
}
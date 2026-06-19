import { Helmet } from "react-helmet-async";
import { SITE } from "./schemas/constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  robots?: string;
}

export default function SEO({
  title = SITE.title,
  description = SITE.description,
  keywords = SITE.keywords,
  canonical = "/",
  image = SITE.image,
  type = "website",
  robots = "index, follow",
}: SEOProps) {

  const url =
    canonical === "/"
      ? SITE.url
      : `${SITE.url}${canonical}`;

  return (
    <Helmet>

      {/* Primary SEO */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="robots"
        content={robots}
      />

      <meta
        name="author"
        content={SITE.name}
      />

      {/* Canonical */}

      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}

      <meta property="og:type" content={type} />

      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta property="og:url" content={url} />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:site_name"
        content={SITE.name}
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

    </Helmet>
  );
}
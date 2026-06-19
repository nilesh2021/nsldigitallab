import { Helmet } from "react-helmet-async";
import { SITE } from "./constants";

export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: SITE.name,

    alternateName: SITE.name,

    url: SITE.url,

    description: SITE.description,

    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SITE.logo,
      },
    },

    inLanguage: "en",
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
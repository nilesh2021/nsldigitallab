import { Helmet } from "react-helmet-async";
import { SITE } from "./constants"

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: SITE.name,

    url: SITE.url,

    logo: SITE.logo,

    email: SITE.email,

    description: SITE.description,

    sameAs: [
      "https://www.linkedin.com/company/nsldigitallab",
      "https://www.facebook.com/nsldigitallab",
      "https://www.instagram.com/nsldigitallab",
      "https://x.com/nsldigitallab",
      "https://github.com/nilesh2021/nsldigitallab"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
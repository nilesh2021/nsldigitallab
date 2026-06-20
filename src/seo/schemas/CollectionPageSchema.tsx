import { Helmet } from "react-helmet-async";

interface Props {
  name: string;
  description: string;
  url: string;
}

export default function CollectionPageSchema({
  name,
  description,
  url,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
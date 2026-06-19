 import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  datePosted: string;
  employmentType: string;
  location: string;
  salary: string;
}

export default function JobPostingSchema({
  title,
  description,
  datePosted,
  employmentType,
  location,
  salary,
}: Props) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title,
          description,
          datePosted,
          employmentType,
          hiringOrganization: {
            "@type": "Organization",
            name: "NSL Digital Lab",
            sameAs: "https://nsldigitallab.com",
          },
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: {
            "@type": "Country",
            name: "India",
          },
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              minValue: 5000,
              maxValue: 10000,
              unitText: "MONTH",
            },
          },
        })}
      </script>
    </Helmet>
  );
}
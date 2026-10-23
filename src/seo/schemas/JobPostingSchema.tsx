import { Helmet } from "react-helmet-async";
import { SITE } from "./constants";
import { JOB_URL, type CareerJob } from "../../app/careers/data/jobs";

interface Props {
  job: CareerJob;
}

/**
 * Google-required JobPosting facts. Recommended properties (validThrough,
 * employmentType, baseSalary, identifier) never block output.
 */
export function missingRequiredFields(job: CareerJob): string[] {
  const missing: string[] = [];
  if (job.status !== "open") missing.push("open status");
  if (!job.title) missing.push("title");
  if (!job.description) missing.push("description");
  if (!job.datePosted) missing.push("datePosted");
  if (!job.remoteIndiaOnly && !job.address) {
    missing.push("address or confirmed remote-within-India status");
  }
  return missing;
}

export default function JobPostingSchema({ job }: Props) {
  const missing = missingRequiredFields(job);

  if (missing.length > 0) {
    if (import.meta.env.DEV) {
      console.warn(
        `[JobPostingSchema] Skipped "${job.slug}" — missing: ${missing.join(", ")}`,
      );
    }
    return null;
  }

  const url = `${SITE.url}${JOB_URL(job.slug)}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    url,
    identifier: {
      "@type": "PropertyValue",
      name: SITE.name,
      value: job.slug,
    },
    datePosted: job.datePosted,
    directApply: true,
    hiringOrganization: {
      "@type": "Organization",
      name: SITE.name,
      sameAs: SITE.url,
      logo: SITE.logo,
    },
  };

  if (job.validThrough) schema.validThrough = job.validThrough;

  if (job.employmentType?.length) {
    schema.employmentType =
      job.employmentType.length === 1
        ? job.employmentType[0]
        : job.employmentType;
  }

  if (job.remoteIndiaOnly) {
    schema.jobLocationType = "TELECOMMUTE";
    schema.applicantLocationRequirements = {
      "@type": "Country",
      name: "India",
    };
  } else if (job.address) {
    schema.jobLocation = {
      "@type": "Place",
      address: { "@type": "PostalAddress", ...job.address },
    };
  }

  if (job.salary) {
    schema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salary.min,
        maxValue: job.salary.max,
        unitText: job.salary.unit,
      },
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

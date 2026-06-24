import { Helmet } from "react-helmet-async";

import MainLayout from "../layouts/MainLayout";

import Hero from "./components/Hero";
import ResourceGrid from "./components/ResourceGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";

import NewsletterSection from "../components/common/NewsletterSection";

export default function ResourcesPage() {
  return (
    <>
      <Helmet>
        <title>
          Free Digital Marketing, SEO & UI/UX Resources | NSL Digital Lab
        </title>

        <meta
          name="description"
          content="Download free UI/UX resources, SEO checklists, digital marketing guides, Figma templates, interview questions and career resources."
        />

        <meta
          name="keywords"
          content="free ui ux resources, seo checklist, digital marketing resources, figma ui kit, ui ux interview questions, resume templates"
        />

        <link
          rel="canonical"
          href="https://nsldigitallab.com/resources"
        />
      </Helmet>

      <MainLayout>


        <Hero />

        <ResourceGrid />

        <WhyChooseUs />

        <NewsletterSection
          title="Get Free Premium Resources"
          subtitle="Join thousands of learners and receive UI/UX templates, SEO checklists, Digital Marketing guides and exclusive downloads."
          interest="Resources"
          source="Resources Page"
        />

        <FAQ />

      </MainLayout>


    </>
  );
}
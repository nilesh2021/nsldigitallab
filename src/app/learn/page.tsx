import SEO from "../../seo/SEO";
import { PAGE_SEO } from "../../seo/pages";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";


import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Benefits from "./components/Benefits";
import Skills from "./components/Skills";
import Roadmap from "./components/Roadmap"
import Community from "./components/Community";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

import NewsletterSection from "../components/common/NewsletterSection";


export default function LearnPage() {

  return (
    <>
      <SEO
        title="Free UI/UX Design, SEO & Digital Marketing Courses | NSL Digital Lab"
        description="Learn UI/UX Design, SEO and Digital Marketing through free tutorials, projects, interview questions and real-world case studies."
        keywords="UI UX course, SEO course, Digital Marketing course, Learn SEO, Learn UI UX, Free digital marketing course"
      />


      <MainLayout>
        <Hero />
        <Courses />
        <Benefits />
        <Skills />
        <Roadmap />
        <Community />

        <NewsletterSection
          title="Get Free Learning Resources"
          subtitle="Join our community and receive free UI/UX, SEO, Digital Marketing resources, templates, interview questions and career updates."
          interest="Learning Resources"
          source="Learn Page"
        />

        <FAQ />
        <FinalCTA />


      </MainLayout>


    </>
  );



}
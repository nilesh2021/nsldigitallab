import { Route, Routes } from "react-router-dom";

import App from "./app";
import RouteScrollToTop from "./app/components/RouteScrollToTop";
import ScrollToTop from "./app/components/ScrollToTop";
import LinkedInFollowCta from "./app/components/LinkedInFollowCta";

import BlogPage from "./app/blog/page";
import ClaudeLandingPage from "./app/landing/ai-tools/claudeLandingpage/page";
import FreeWebsiteTemplatesPage from "./app/landing/website-templates/page";
import CareerCrudPage from "./app/career-crud/page";
import CareerThankYouPage from "./app/careers/thank-you/page";
import ContactThankYouPage from "./app/contact/thank-you/page";
import ThankYouPage from "./app/thank-you/page";

import learnRoutes from "./routes/learnRoutes";
import caseStudyRoutes from "./routes/caseStudyRoutes";
import resourceRoutes from "./routes/resourceRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import careerRoutes from "./routes/careerRoutes";
import internshipRoutes from "./routes/internshipRoutes";
import policyRoutes from "./routes/policyRoutes";
import blogRoutes from "./routes/blog";

export default function AppRoutes() {
  return (
    <>
      <RouteScrollToTop />
      <ScrollToTop />
      <LinkedInFollowCta />

      <Routes>
        {resourceRoutes}
        {learnRoutes}
        {caseStudyRoutes}
        {serviceRoutes}
        {careerRoutes}
        {internshipRoutes}
        {policyRoutes}
        {blogRoutes}

        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/claude-ai" element={<ClaudeLandingPage />} />
        <Route
          path="/free-website-templates"
          element={<FreeWebsiteTemplatesPage />}
        />
        <Route path="/career-crud" element={<CareerCrudPage />} />

        <Route
          path="/careers/thank-you"
          element={<CareerThankYouPage />}
        />

        <Route
          path="/contact/thank-you"
          element={<ContactThankYouPage />}
        />

        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </>
  );
}

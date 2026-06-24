import { Route } from "react-router-dom";

import SeoForStartupsPage from "../../app/blog/seo/seo-for-startups/page";
import WhatIsSeoPage from "../../app/blog/seo/what-is-seo/page";
import TechnicalSeoChecklistPage from "../../app/blog/seo/technical-seo-checklist/page";
import WebsiteOptimizationTipsPage from "../../app/blog/seo/website-optimization-tips/page";
import SeoInterviewQuestionsPage from "../../app/blog/seo/seo-interview-questions/page";

const seoRoutes = (
  <>
    <Route
      path="/blog/seo/seo-for-startups"
      element={<SeoForStartupsPage />}
    />

    <Route
      path="/blog/seo/what-is-seo"
      element={<WhatIsSeoPage />}
    />

    <Route
      path="/blog/seo/technical-seo-checklist"
      element={<TechnicalSeoChecklistPage />}
    />

    <Route
      path="/blog/seo/website-optimization-tips"
      element={<WebsiteOptimizationTipsPage />}
    />

    <Route
      path="/blog/seo/seo-interview-questions"
      element={<SeoInterviewQuestionsPage />}
    />
  </>
);

export default seoRoutes;
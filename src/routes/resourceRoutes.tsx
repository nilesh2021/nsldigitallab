import { Route } from "react-router-dom";

import CareerArticlePage from "../app/resources/career/CareerArticlePage";
import FreeAtsResumeChecklistPage from "../app/resources/career/FreeAtsResumeChecklistPage";
import CareerResourcesPage from "../app/resources/career/page";
import ResourcesPage from "../app/resources/page";
import ResourceDetails from "../app/resources/ResourceDetails";
import ResourceThankYouPage from "../app/resources/thank-you/page";
import ResourcesWelcomePage from "../app/resources/welcome/page";

const resourceRoutes = (
  <>
    <Route
      path="/resources"
      element={<ResourcesPage />}
    />

    <Route
      path="/resources/career"
      element={<CareerResourcesPage />}
    />

    <Route
      path="/resources/career/free-ats-resume-checklist"
      element={<FreeAtsResumeChecklistPage />}
    />

    <Route
      path="/resources/career/:articleSlug"
      element={<CareerArticlePage />}
    />

    <Route
      path="/resources/:slug"
      element={<ResourceDetails />}
    />

    <Route
      path="/resources/welcome"
      element={<ResourcesWelcomePage />}
    />

    <Route
      path="/resources/thank-you"
      element={<ResourceThankYouPage />}
    />
  </>
);

export default resourceRoutes;
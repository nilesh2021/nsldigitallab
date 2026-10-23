import { Route } from "react-router-dom";

import CareerArticlePage from "../app/resources/career/CareerArticlePage";
import FreeAtsResumeChecklistPage from "../app/resources/career/FreeAtsResumeChecklistPage";
import CareerResourcesPage from "../app/resources/career/page";
import ResourcesPage from "../app/resources/page";
import ResourceDetails from "../app/resources/ResourceDetails";
import ResourceThankYouPage from "../app/resources/thank-you/page";
import ResourcesWelcomePage from "../app/resources/welcome/page";
import TongueTwistersLandingPage from "../app/resources/500-tongue-twisters-english-pronunciation/page";
import AtsResumeTemplateFreshersPage from "../app/resources/free-ats-resume-template-freshers-2026/page";
import JobApplicationTrackerPage from "../app/resources/free-job-application-tracker/page";
import ChatGptPromptsJobSeekersPage from "../app/resources/free-chatgpt-prompts-job-seekers-2026/page";

const resourceRoutes = (
  <>
    <Route
      path="/resources"
      element={<ResourcesPage />}
    />

    <Route
      path="/resources/500-tongue-twisters-english-pronunciation"
      element={<TongueTwistersLandingPage />}
    />

    <Route
      path="/resources/free-ats-resume-template-freshers-2026"
      element={<AtsResumeTemplateFreshersPage />}
    />

    <Route
      path="/resources/free-job-application-tracker"
      element={<JobApplicationTrackerPage />}
    />

    <Route
      path="/resources/free-chatgpt-prompts-job-seekers-2026"
      element={<ChatGptPromptsJobSeekersPage />}
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
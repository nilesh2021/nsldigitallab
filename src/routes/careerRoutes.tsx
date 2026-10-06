import { Navigate, Route } from "react-router-dom";

import CareersPage from "../app/careers/page";

import DataEntryRemoteJob from "../app/careers/data-entry-remote-job/page";
import DataEntryJobsRemote from "../app/careers/data-entry-jobs-remote/page";
import DigitalMarketingExecutiveJob from "../app/careers/digital-marketing-executive-job/page";
import ContentWriterJob from "../app/careers/content-writer-job/page";
import SeoExecutiveJob from "../app/careers/seo-executive-job/page";
import UiuxDesignerJob from "../app/careers/ui-ux-designer-job/page";

const careerRoutes = (
  <>
    <Route
      path="/careers"
      element={<CareersPage />}
    />

    <Route
      path="/careers/data-entry-remote-job"
      element={<DataEntryRemoteJob />}
    />

    <Route
      path="/careers/data-entry-jobs-remote"
      element={<DataEntryJobsRemote />}
    />

    <Route
      path="/careers/digital-marketing-executive-job"
      element={<DigitalMarketingExecutiveJob />}
    />

    <Route
      path="/careers/content-writer-job"
      element={<ContentWriterJob />}
    />

    <Route
      path="/careers/seo-executive-job"
      element={<SeoExecutiveJob />}
    />

    <Route
      path="/careers/ui-ux-designer-job"
      element={<UiuxDesignerJob />}
    />

    <Route
      path="/careers/ui-ux-designer-remote-job"
      element={<Navigate to="/careers/ui-ux-designer-job" replace />}
    />
  </>
);

export default careerRoutes;
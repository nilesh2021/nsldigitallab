import { Route } from "react-router-dom";

import CareersPage from "../app/careers/page";

import DataEntryRemoteJob from "../app/careers/data-entry-remote-job/page";
import ContentWriterJob from "../app/careers/content-writer-job/page";
import SeoExecutiveJob from "../app/careers/seo-executive-job/page";
import UiuxDesignerJob from "../app/careers/ui-ux-designer-remote-job/page"

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
  </>
);

export default careerRoutes;
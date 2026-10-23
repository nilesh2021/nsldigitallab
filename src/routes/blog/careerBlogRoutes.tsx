import { Route } from "react-router-dom";

import HowToGetRemoteDataEntryJobsInIndiaPage from "../../app/blog/career/how-to-get-remote-data-entry-jobs-in-india/page";
import DataEntrySkillsForBeginnersPage from "../../app/blog/career/data-entry-skills-for-beginners/page";
import HowToCheckRemoteDataEntryJobLegitPage from "../../app/blog/career/how-to-check-if-remote-data-entry-job-is-legit/page";

const careerBlogRoutes = (
  <>
    <Route
      path="/blog/career/how-to-get-remote-data-entry-jobs-in-india"
      element={<HowToGetRemoteDataEntryJobsInIndiaPage />}
    />

    <Route
      path="/blog/career/data-entry-skills-for-beginners"
      element={<DataEntrySkillsForBeginnersPage />}
    />

    <Route
      path="/blog/career/how-to-check-if-remote-data-entry-job-is-legit"
      element={<HowToCheckRemoteDataEntryJobLegitPage />}
    />
  </>
);

export default careerBlogRoutes;

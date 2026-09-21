import { Route } from "react-router-dom";

import CaseStudiesPage from "../app/case-studies/page";
import OnlineWineShoppingPage from "../app/case-studies/online-wine-shopping/page";

const caseStudyRoutes = (
  <>
    <Route path="/case-studies" element={<CaseStudiesPage />} />
    <Route
      path="/case-studies/online-wine-shopping"
      element={<OnlineWineShoppingPage />}
    />
  </>
);

export default caseStudyRoutes;

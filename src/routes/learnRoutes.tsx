import { Route } from "react-router-dom";

import LearnPage from "../app/learn/page";
import LearnUiUxPage from "../app/learn/ui-ux-design/page";
import LearnDigitalMarketingPage from "../app/learn/digital-marketing/page";
import LearnSeoPage from "../app/learn/seo/page";

const learnRoutes = (
  <>
    <Route
      path="/learn"
      element={<LearnPage />}
    />

    <Route
      path="/learn/ui-ux-design"
      element={<LearnUiUxPage />}
    />

    <Route
      path="/learn/digital-marketing"
      element={<LearnDigitalMarketingPage />}
    />

    <Route
      path="/learn/seo"
      element={<LearnSeoPage />}
    />
  </>
);

export default learnRoutes;
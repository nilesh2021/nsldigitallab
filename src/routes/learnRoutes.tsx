import { Route } from "react-router-dom";

import LearnPage from "../app/learn/page";
import LearnUiUxPage from "../app/learn/ui-ux-design/page";
import LearnDigitalMarketingPage from "../app/learn/digital-marketing/page";
import LearnSeoPage from "../app/learn/seo/page";
import LearnReactFoundationsPage from "../app/learn/react-foundations/page";
import ReactFoundationsModule01Page from "../app/learn/react-foundations/react-and-modern-frontend/page";

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

    <Route
      path="/learn/react-foundations"
      element={<LearnReactFoundationsPage />}
    />

    <Route
      path="/learn/react-foundations/react-and-modern-frontend"
      element={<ReactFoundationsModule01Page />}
    />
  </>
);

export default learnRoutes;
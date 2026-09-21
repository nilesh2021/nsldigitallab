import { Route } from "react-router-dom";

import LearnPage from "../app/learn/page";
import LearnUiUxPage from "../app/learn/ui-ux-design/page";
import LearnDigitalMarketingPage from "../app/learn/digital-marketing/page";
import LearnSeoPage from "../app/learn/seo/page";
import LearnReactFoundationsPage from "../app/learn/react-foundations/page";
import ReactFoundationsModule01Page from "../app/learn/react-foundations/react-and-modern-frontend/page";
import ReactFoundationsModule02Page from "../app/learn/react-foundations/jsx-and-components/page";
import ReactFoundationsModule03Page from "../app/learn/react-foundations/props-and-component-composition/page";
import ReactFoundationsModule04Page from "../app/learn/react-foundations/state-and-events/page";
import ReactFoundationsModule05Page from "../app/learn/react-foundations/conditional-rendering-and-lists/page";
import ReactFoundationsModule06Page from "../app/learn/react-foundations/forms-and-user-input/page";
import ReactFoundationsModule07Page from "../app/learn/react-foundations/useeffect-and-api-data/page";
import ReactFoundationsModule08Page from "../app/learn/react-foundations/routing/page";
import ReactFoundationsModule09Page from "../app/learn/react-foundations/reusable-architecture-and-custom-hooks/page";
import ReactFoundationsModule10Page from "../app/learn/react-foundations/final-react-project-and-deployment/page";

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
    <Route
      path="/learn/react-foundations/jsx-and-components"
      element={<ReactFoundationsModule02Page />}
    />
    <Route
      path="/learn/react-foundations/props-and-component-composition"
      element={<ReactFoundationsModule03Page />}
    />
    <Route
      path="/learn/react-foundations/state-and-events"
      element={<ReactFoundationsModule04Page />}
    />
    <Route
      path="/learn/react-foundations/conditional-rendering-and-lists"
      element={<ReactFoundationsModule05Page />}
    />
    <Route
      path="/learn/react-foundations/forms-and-user-input"
      element={<ReactFoundationsModule06Page />}
    />
    <Route
      path="/learn/react-foundations/useeffect-and-api-data"
      element={<ReactFoundationsModule07Page />}
    />
    <Route
      path="/learn/react-foundations/routing"
      element={<ReactFoundationsModule08Page />}
    />
    <Route
      path="/learn/react-foundations/reusable-architecture-and-custom-hooks"
      element={<ReactFoundationsModule09Page />}
    />
    <Route
      path="/learn/react-foundations/final-react-project-and-deployment"
      element={<ReactFoundationsModule10Page />}
    />
  </>
);

export default learnRoutes;
import { Route } from "react-router-dom";

import LearnPage from "../app/learn/page";
import LearnUiUxPage from "../app/learn/ui-ux-design/page";
import UiUxDesignModule01Page from "../app/learn/ui-ux-design/introduction-to-ui-ux-design/page";
import UiUxDesignModule02Page from "../app/learn/ui-ux-design/discovery-understand-the-problem/page";
import UiUxDesignModule03Page from "../app/learn/ui-ux-design/define-understand-the-user/page";
import UiUxDesignModule04Page from "../app/learn/ui-ux-design/ideation-generate-solutions/page";
import UiUxDesignModule05Page from "../app/learn/ui-ux-design/wireframing/page";
import UiUxDesignModule06Page from "../app/learn/ui-ux-design/ui-design-foundations/page";
import UiUxDesignModule07Page from "../app/learn/ui-ux-design/figma-foundations/page";
import UiUxDesignModule08Page from "../app/learn/ui-ux-design/ui-ux-principles-and-nielsen-heuristics/page";
import UiUxDesignModule09Page from "../app/learn/ui-ux-design/prototyping-testing-accessibility/page";
import UiUxDesignModule10Page from "../app/learn/ui-ux-design/complete-ui-ux-case-study/page";
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
      path="/learn/ui-ux-design/introduction-to-ui-ux-design"
      element={<UiUxDesignModule01Page />}
    />
    <Route
      path="/learn/ui-ux-design/discovery-understand-the-problem"
      element={<UiUxDesignModule02Page />}
    />
    <Route
      path="/learn/ui-ux-design/define-understand-the-user"
      element={<UiUxDesignModule03Page />}
    />
    <Route
      path="/learn/ui-ux-design/ideation-generate-solutions"
      element={<UiUxDesignModule04Page />}
    />
    <Route
      path="/learn/ui-ux-design/wireframing"
      element={<UiUxDesignModule05Page />}
    />
    <Route
      path="/learn/ui-ux-design/ui-design-foundations"
      element={<UiUxDesignModule06Page />}
    />
    <Route
      path="/learn/ui-ux-design/figma-foundations"
      element={<UiUxDesignModule07Page />}
    />
    <Route
      path="/learn/ui-ux-design/ui-ux-principles-and-nielsen-heuristics"
      element={<UiUxDesignModule08Page />}
    />
    <Route
      path="/learn/ui-ux-design/prototyping-testing-accessibility"
      element={<UiUxDesignModule09Page />}
    />
    <Route
      path="/learn/ui-ux-design/complete-ui-ux-case-study"
      element={<UiUxDesignModule10Page />}
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
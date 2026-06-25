import { Route } from "react-router-dom";

import UiUxFuture2026Page from "../../app/blog/ui-ux/ui-ux-design-in-2026/page";
import FutureOfUiDesignPage from "../../app/blog/ui-ux/future-of-ui-design/page";
import AccessibilityInUxDesignPage from "../../app/blog/ui-ux/accessibility-in-ux-design/page";
import UiUxDesignProcessExplainedPage from "../../app/blog/ui-ux/ui-ux-design-process-explained/page";
import UiUxDesignPrinciplesPage from "../../app/blog/ui-ux/ui-ux-design-principles/page";
import SaasDashboardDesignIdeasPage from "../../app/blog/ui-ux/saas-dashboard-design-ideas/page";
import SaasDashboardDesignGuidePage from "../../app/blog/ui-ux/saas-dashboard-design-guide/page";

const uiuxRoutes = (
  <>
    <Route
      path="/blog/ui-ux/ui-ux-design-in-2026"
      element={<UiUxFuture2026Page />}
    />

    <Route
      path="/blog/ui-ux/future-of-ui-design"
      element={<FutureOfUiDesignPage />}
    />

    <Route
      path="/blog/ui-ux/accessibility-in-ux-design"
      element={<AccessibilityInUxDesignPage />}
    />

    <Route
      path="/blog/ui-ux/ui-ux-design-process-explained"
      element={<UiUxDesignProcessExplainedPage />}
    />

    <Route
      path="/blog/ui-ux/ui-ux-design-principles"
      element={<UiUxDesignPrinciplesPage />}
    />

    <Route
      path="/blog/ui-ux/saas-dashboard-design-ideas"
      element={<SaasDashboardDesignIdeasPage />}
    />

    <Route
      path="/blog/ui-ux/saas-dashboard-design-guide"
      element={<SaasDashboardDesignGuidePage />}
    />
  </>
);

export default uiuxRoutes;
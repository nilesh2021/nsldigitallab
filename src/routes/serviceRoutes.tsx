import { Route } from "react-router-dom";

import ServicesPage from "../app/services/page";
import SeoServicesPage from "../app/landing/services/seo-services/page";
import WebDesignPage from "../app/landing/services/web-design/page";
import UiUxDesignPage from "../app/landing/services/ui-ux-design/page";
import SocialMediaMarketingPage from "../app/landing/services/social-media-marketing/page";

const serviceRoutes = (
  <>
    <Route
      path="/services"
      element={<ServicesPage />}
    />

    <Route
      path="/services/seo-services"
      element={<SeoServicesPage />}
    />

    <Route
      path="/services/web-design"
      element={<WebDesignPage />}
    />

    <Route
      path="/services/ui-ux-design"
      element={<UiUxDesignPage />}
    />

    <Route
      path="/services/social-media-marketing"
      element={<SocialMediaMarketingPage />}
    />
  </>
);

export default serviceRoutes;
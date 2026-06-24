import { Route } from "react-router-dom";

import PrivacyPolicyPage from "../app/privacy-policy/page";
import TermsAndConditionsPage from "../app/terms-and-conditions/page";
import DisclaimerPage from "../app/disclaimer/page";
import CookiePolicyPage from "../app/cookie-policy/page";
import AffiliateDisclosurePage from "../app/affiliate-disclosure/page";

const policyRoutes = (
  <>
    <Route
      path="/privacy-policy"
      element={<PrivacyPolicyPage />}
    />

    <Route
      path="/terms-and-conditions"
      element={<TermsAndConditionsPage />}
    />

    <Route
      path="/disclaimer"
      element={<DisclaimerPage />}
    />

    <Route
      path="/cookie-policy"
      element={<CookiePolicyPage />}
    />

    <Route
      path="/affiliate-disclosure"
      element={<AffiliateDisclosurePage />}
    />
  </>
);

export default policyRoutes;
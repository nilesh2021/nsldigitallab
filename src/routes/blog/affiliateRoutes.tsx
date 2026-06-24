import { Route } from "react-router-dom";

import AffiliateMarketingForBeginnersPage from "../../app/blog/affiliate-marketing/affiliate-marketing-for-beginners/page";

const affiliateRoutes = (
  <>
    <Route
      path="/blog/affiliate-marketing/affiliate-marketing-for-beginners"
      element={<AffiliateMarketingForBeginnersPage />}
    />
  </>
);

export default affiliateRoutes;
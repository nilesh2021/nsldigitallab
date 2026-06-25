import { Route } from "react-router-dom";

import AffiliateMarketingForBeginnersPage from "../../app/blog/affiliate-marketing/affiliate-marketing-for-beginners/page";
import EarningMoneyWithAffiliateMarketingPage from "../../app/blog/affiliate-marketing/earning-money-with-affiliate-marketing/page";

const affiliateRoutes = (
  <>
    <Route
      path="/blog/affiliate-marketing/affiliate-marketing-for-beginners"
      element={<AffiliateMarketingForBeginnersPage />}
    />

    <Route
      path="/blog/affiliate-marketing/earning-money-with-affiliate-marketing"
      element={<EarningMoneyWithAffiliateMarketingPage />}
    />
  </>
);

export default affiliateRoutes;
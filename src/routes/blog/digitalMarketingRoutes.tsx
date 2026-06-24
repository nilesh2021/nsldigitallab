import { Route } from "react-router-dom";

import WhatIsDigitalMarketingPage from "../../app/blog/digital-marketing/what-is-digital-marketing/page";
import DigitalMarketingInterviewQuestionsPage from "../../app/blog/digital-marketing/digital-marketing-interview-questions/page";
import HowToEarnMoneyFromDigitalMarketingPage from "../../app/blog/digital-marketing/how-to-earn-money-from-digital-marketing/page";

const digitalMarketingRoutes = (
  <>
    <Route
      path="/blog/digital-marketing/what-is-digital-marketing"
      element={<WhatIsDigitalMarketingPage />}
    />

    <Route
      path="/blog/digital-marketing/digital-marketing-interview-questions"
      element={<DigitalMarketingInterviewQuestionsPage />}
    />

    <Route
      path="/blog/digital-marketing/how-to-earn-money-from-digital-marketing"
      element={<HowToEarnMoneyFromDigitalMarketingPage />}
    />
  </>
);

export default digitalMarketingRoutes;
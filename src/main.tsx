import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './styles/index.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import CareersPage from './app/careers/page';
import TermsAndConditionsPage from './app/terms-and-conditions/page';
import DisclaimerPage from './app/disclaimer/page';
import AffiliateDisclosurePage from './app/affiliate-disclosure/page';
import CookiePolicyPage from './app/cookie-policy/page';
import PrivacyPolicyPage from './app/privacy-policy/page';
import SeoInternshipPune from './app/Internship/SeoInternshipPune';
import SeoInternshipMumbai from './app/Internship/SeoInternshipMumbai';
import RemoteSeoInternship from './app/Internship/RemoteSeoInternship';
import RouteScrollToTop from './app/components/RouteScrollToTop';
import BestAiToolsForMarketers from './app/Resources/BestAiToolsForMarketers';
import BestChatgptToolsForMarketers from './app/Resources/BestChatgptToolsForMarketers';

import ServicesPage from './app/services/page';
import SeoServicesPage from './app/landing/services/seo-services/page';
import WebDesignPage from './app/landing/services/web-design/page';
import UiUxDesignPage from './app/landing/services/ui-ux-design/page';
import SocialMediaMarketingPage from './app/landing/services/social-media-marketing/page';
import UiUxFuture2026Page from './app/blog/ui-ux/ui-ux-design-in-2026/page';
import FutureOfUiDesignPage from './app/blog/ui-ux/future-of-ui-design/page';
import AccessibilityInUxDesignPage from './app/blog/ui-ux/accessibility-in-ux-design/page';
import BlogPage from './app/blog/page';

import BestAIToolsStudentsPage from './app/blog/ai-tools/best-ai-tools-for-college-students/page';
import SeoForStartupsPage from './app/blog/seo/seo-for-startups/page';
import WhatIsSeoPage from './app/blog/seo/what-is-seo/page';
import TechnicalSeoChecklistPage from './app/blog/seo/technical-seo-checklist/page';
import WebsiteOptimizationTipsPage from './app/blog/seo/website-optimization-tips/page';
import SeoInterviewQuestionsPage from './app/blog/seo/seo-interview-questions/page';
import UiUxDesignProcessExplainedPage from './app/blog/ui-ux/ui-ux-design-process-explained/page';
import SaasDashboardDesignIdeasPage from './app/blog/ui-ux/saas-dashboard-design-ideas/page';
import WhatIsDigitalMarketingPage from './app/blog/digital-marketing/what-is-digital-marketing/page';
import DigitalMarketingInterviewQuestionsPage from './app/blog/digital-marketing/digital-marketing-interview-questions/page';
import HowToEarnMoneyFromDigitalMarketingPage from './app/blog/digital-marketing/how-to-earn-money-from-digital-marketing/page';
import AffiliateMarketingForBeginnersPage from './app/blog/affiliate-marketing/affiliate-marketing-for-beginners/page';
import BestAiToolsForDesignersPage from './app/blog/ai-tools/best-ai-tools-for-designers/page';
import HowToUseChatGPTPage from './app/blog/ai-tools/how-to-use-chatgpt/page';
import CreateAndSellDigitalProductsUsingChatGPTPage from "./app/blog/ai-tools/create-and-sell-digital-products-using-chatgpt/page";
import ClaudeLandingPage from "./app/landing/ai-tools/claudeLandingpage/page";
import DataEntryRemoteJob from "./app/careers/data-entry-remote-job/page";
import ContentWriterJob from "./app/careers/content-writer-job/page";
import SeoExecutiveJob from "./app/careers/seo-executive-job/page";
import UiUxDesignerJob from "./app/careers/ui-ux-designer-job/page";
 import SaasDashboardDesignGuidePage from "./app/blog/ui-ux/saas-dashboard-design-guide/page";
import App from "./app";

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route
          path="/disclaimer"
          element={<DisclaimerPage />}
        />
        <Route
          path="/affiliate-disclosure"
          element={<AffiliateDisclosurePage />}
        />
        <Route
          path="/cookie-policy"
          element={<CookiePolicyPage />}
        />
        <Route
          path="/seo-internship-pune"
          element={<SeoInternshipPune />}
        />

        <Route
          path="/seo-internship-mumbai"
          element={<SeoInternshipMumbai />}
        />
        <Route
          path="/remote-seo-internship"
          element={<RemoteSeoInternship />}
        />
        <Route
          path="/best-ai-tools-for-marketers"
          element={<BestAiToolsForMarketers />}
        /><Route
          path="/best-chatgpt-tools-for-marketers"
          element={<BestChatgptToolsForMarketers />}
        />


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
          path="/blog"
          element={<BlogPage />}
        />

        <Route
          path="/blog/ai-tools/best-ai-tools-for-college-students"
          element={<BestAIToolsStudentsPage />}
        />
        <Route
          path="/blog/ai-tools/best-ai-tools-for-designers"
          element={<BestAiToolsForDesignersPage />}
        />
        <Route
          path="/blog/seo/seo-for-startups"
          element={<SeoForStartupsPage />}
        />
        <Route
          path="/blog/seo/what-is-seo"
          element={<WhatIsSeoPage />}
        />
        <Route
          path="/blog/seo/technical-seo-checklist"
          element={<TechnicalSeoChecklistPage />}
        />
        <Route
          path="/blog/seo/website-optimization-tips"
          element={<WebsiteOptimizationTipsPage />}
        />
        <Route
          path="/blog/seo/seo-interview-questions"
          element={<SeoInterviewQuestionsPage />}
        />
        <Route
          path="/blog/ui-ux/ui-ux-design-process-explained"
          element={<UiUxDesignProcessExplainedPage />}
        />
        <Route
          path="/blog/ui-ux/saas-dashboard-design-ideas"
          element={<SaasDashboardDesignIdeasPage />}
        />
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
        <Route
          path="/blog/affiliate-marketing/affiliate-marketing-for-beginners"
          element={<AffiliateMarketingForBeginnersPage />}
        />
        <Route
          path="/blog/ai-tools/how-to-use-chatgpt"
          element={<HowToUseChatGPTPage />}
        />
        <Route
          path="/blog/ai-tools/create-and-sell-digital-products-using-chatgpt"
          element={<CreateAndSellDigitalProductsUsingChatGPTPage />}
        />

        <Route
          path="/claude-ai"
          element={<ClaudeLandingPage />}
        />

        <Route
          path="/careers/data-entry-remote-job"
          element={<DataEntryRemoteJob />}
        />
<Route
  path="/careers/content-writer-job"
  element={<ContentWriterJob />}
/><Route
  path="/careers/seo-executive-job"
  element={<SeoExecutiveJob />}
/>
<Route
  path="/careers/ui-ux-designer-job"
  element={<UiUxDesignerJob />}
/>

   <Route path="/blog/ui-ux/saas-dashboard-design-guide" element={<SaasDashboardDesignGuidePage />} />


      </Routes>
    </BrowserRouter>

  </HelmetProvider>
);
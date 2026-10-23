import uiuxRoutes from "./uiuxRoutes";
import seoRoutes from "./seoRoutes";
import aiRoutes from "./aiRoutes";
import digitalMarketingRoutes from "./digitalMarketingRoutes";
import affiliateRoutes from "./affiliateRoutes";
import webDevelopmentRoutes from "./webDevelopmentRoutes";
import careerBlogRoutes from "./careerBlogRoutes";

const blogRoutes = (
  <>
    {careerBlogRoutes}
    {uiuxRoutes}
    {seoRoutes}
    {aiRoutes}
    {digitalMarketingRoutes}
    {affiliateRoutes}
    {webDevelopmentRoutes}
  </>
);

export default blogRoutes;
import { Route } from "react-router-dom";

import BestAIToolsStudentsPage from "../../app/blog/ai-tools/best-ai-tools-for-college-students/page";
import BestAiToolsForDesignersPage from "../../app/blog/ai-tools/best-ai-tools-for-designers/page";
import HowToUseChatGPTPage from "../../app/blog/ai-tools/how-to-use-chatgpt/page";
import CreateAndSellDigitalProductsUsingChatGPTPage from "../../app/blog/ai-tools/create-and-sell-digital-products-using-chatgpt/page";

const aiRoutes = (
  <>
    <Route
      path="/blog/ai-tools/best-ai-tools-for-college-students"
      element={<BestAIToolsStudentsPage />}
    />

    <Route
      path="/blog/ai-tools/best-ai-tools-for-designers"
      element={<BestAiToolsForDesignersPage />}
    />

    <Route
      path="/blog/ai-tools/how-to-use-chatgpt"
      element={<HowToUseChatGPTPage />}
    />

    <Route
      path="/blog/ai-tools/create-and-sell-digital-products-using-chatgpt"
      element={<CreateAndSellDigitalProductsUsingChatGPTPage />}
    />
  </>
);

export default aiRoutes;
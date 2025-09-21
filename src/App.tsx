


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticlesSection from "./components/ArticlesSection";
import ArticlePage from "./components/ArticlePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          {/* Головна сторінка */}
          <Route path="/" element={<Index />} />

          {/* Сторінка зі списком статей */}
          <Route path="/articles" element={<ArticlesSection />} />

          {/* Окремі статті */}
          <Route path="/articles/sensory-processing" element={<ArticlePage id="sensory-processing" />} />
          <Route path="/articles/communication-styles" element={<ArticlePage id="communication-styles" />} />
          <Route path="/articles/strengths-based" element={<ArticlePage id="strengths-based" />} />
          <Route path="/articles/transition-support" element={<ArticlePage id="transition-support" />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


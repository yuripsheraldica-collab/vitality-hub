import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Instituto from "./pages/Instituto.tsx";
import Equipe from "./pages/Equipe.tsx";
import Especialidades from "./pages/Especialidades.tsx";
import Resultados from "./pages/Resultados.tsx";
import Academico from "./pages/Academico.tsx";
import News from "./pages/News.tsx";
import NewsArticle from "./pages/NewsArticle.tsx";
import CentroDeCuidados from "./pages/CentroDeCuidados.tsx";
import Contato from "./pages/Contato.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/instituto" element={<Instituto />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/academico" element={<Academico />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/centro-de-cuidados" element={<CentroDeCuidados />} />
          <Route path="/area-do-paciente" element={<CentroDeCuidados />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import CustomCursor from "@/components/portfolio/CustomCursor";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Playground from "@/components/portfolio/Playground";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Chatbot from "@/components/portfolio/Chatbot";
import CaseStudy from "@/components/portfolio/CaseStudy";
import { Toaster } from "sonner";

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
}

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [hash, pathname]);
  return null;
}

function Portfolio() {
  useLenis();
  return (
    <div className="App relative" data-testid="portfolio-root">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function CasePage() {
  useLenis();
  return <CaseStudy />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/case/:slug" element={<CasePage />} />
      </Routes>
      <Chatbot />
      <Toaster position="bottom-left" />
    </BrowserRouter>
  );
}

export default App;

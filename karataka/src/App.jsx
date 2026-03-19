import { useState, useEffect } from "react";
import "./App.css";
import DustParticles from "./components/DustParticles";
import Stars from "./components/Stars";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrailerSection from "./components/TrailerSection";
import Features from "./components/Features";
import Characters from "./components/Characters";
import WorldSection from "./components/WorldSection";
import PlatformsSection from "./components/PlatformsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import "./responsive.css";

export default function KaratakaSite() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      style={{
        background: "var(--nuit)",
        color: "var(--creme)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar scrolled={scrolled} />
      <Hero />
      <TrailerSection />
      <Features />
      <Characters />
      <WorldSection />
      <PlatformsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

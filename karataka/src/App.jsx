import { useState, useEffect } from "react";
import "./App.css";
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
import logoISPM from "./assets/logo_ispm.png";
import uiLogo from "./assets/ui_logo.png";
import CustomCursor from "./components/CustomCursor";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        background: "#050302",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
      }}
    >
      {/* Logos */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <img
          src={uiLogo}
          alt="Karataka"
          style={{
            width: 56,
            height: 56,
            objectFit: "contain",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
        <div style={{
          width: 1,
          height: 40,
          background: "#254F22",
          filter: "brightness(1.6)",
        }} />
        <img
          src={logoISPM}
          alt="ISPM"
          style={{
            width: 48,
            height: 48,
            objectFit: "contain",
            borderRadius: "50%",
            border: "1px solid rgba(37,79,34,0.6)",
            animation: "pulse 1.5s ease-in-out infinite",
            animationDelay: "0.3s",
          }}
        />
      </div>

      {/* Titre */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 28,
          fontWeight: 900,
          color: "var(--or)",
          letterSpacing: "0.2em",
          marginBottom: 6,
        }}>
          KARATAKA
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: 13,
          color: "#254F22",
          letterSpacing: "0.2em",
          filter: "brightness(1.8)",
          textTransform: "uppercase",
        }}>
          Institut Supérieur Polytechnique de Madagascar
        </div>
      </div>

      {/* Barre de chargement */}
      <div style={{
        width: 200,
        height: 2,
        background: "rgba(37,79,34,0.2)",
        borderRadius: 2,
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg, #254F22, #3d8a38)",
          filter: "brightness(1.5)",
          borderRadius: 2,
          animation: "loading 2s ease-in-out forwards",
        }} />
      </div>

      {/* Texte */}
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        color: "rgba(245,236,215,0.3)",
        fontSize: 13,
        letterSpacing: "0.1em",
        animation: "fadeInOut 1.5s ease-in-out infinite",
      }}>
        Chargement en cours...
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.95); }
        }
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

export default function KaratakaSite() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {/* Loader */}
      {loading && <Loader />}

      {/* Site principal */}
      <div
        style={{
          background: "var(--nuit)",
          color: "var(--creme)",
          minHeight: "100vh",
          overflowX: "hidden",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.8s ease",
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
    </>
  );
}
import { useState, useEffect } from "react";
import Stars from "./Stars";
import DustParticles from "./DustParticles";
import s14Background from "../assets/s14.jpeg";
 
function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
 
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
 
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: isMobile ? 600 : 700,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${s14Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
          filter: "brightness(0.6) contrast(1.1) blur(1px)",
        }}
      />
 
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(13,8,5,0.4) 0%, rgba(37,79,34,0.15) 30%, rgba(193,68,14,0.1) 60%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
 
      <Stars />
      <DustParticles count={isMobile ? 8 : 20} />
 
      {/* Sun glow */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 100 : 160,
          height: isMobile ? 100 : 160,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #FFF8C0 0%, #F7C948 35%, #FF6B35 65%, transparent 100%)",
          boxShadow:
            "0 0 120px 60px rgba(247,180,41,0.25), 0 0 200px 100px rgba(200,68,14,0.15)",
        }}
      />
 
      {/* Grain noise */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: "none",
          animation: "grain 0.5s steps(1) infinite",
        }}
      />
 
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          textAlign: "center",
          paddingBottom: isMobile ? "20%" : "15%",
          paddingLeft: isMobile ? 20 : 0,
          paddingRight: isMobile ? 20 : 0,
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 0.3s",
          width: "100%",
        }}
      >
        {/* Sous-titre */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "var(--or-pale)",
            fontSize: "clamp(11px, 2vw, 16px)",
            letterSpacing: isMobile ? "0.2em" : "0.4em",
            textTransform: "uppercase",
            marginBottom: 16,
            opacity: 0.85,
            animation: "fadeUp 1s ease 0.4s both",
          }}
        >
          Un récit malgache · Point & Click
        </div>
 
        {/* Titre principal */}
        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(52px, 12vw, 130px)",
            fontWeight: 900,
            color: "var(--or)",
            lineHeight: 0.9,
            letterSpacing: "0.06em",
            textShadow:
              "0 0 60px rgba(240,180,41,0.4), 0 6px 30px rgba(0,0,0,0.9)",
            animation: "fadeUp 1s ease 0.6s both",
            margin: "0 0 6px",
          }}
        >
          KARATAKA
        </h1>
 
        {/* Tagline */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "var(--creme)",
            fontSize: "clamp(14px, 3vw, 26px)",
            opacity: 0.9,
            letterSpacing: "0.05em",
            animation: "fadeUp 1s ease 0.8s both",
            marginBottom: isMobile ? 32 : 48,
          }}
        >
          L'Héritage de la Terre Rouge
        </div>
 
        {/* Boutons */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeUp 1s ease 1s both",
            padding: isMobile ? "0 32px" : 0,
          }}
        >
          <button
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 13,
              letterSpacing: "0.12em",
              fontWeight: 700,
              color: "#fff",
              background: "linear-gradient(135deg, #254F22 0%, #3d8a38 100%)",
              border: "none",
              padding: isMobile ? "14px 32px" : "16px 40px",
              borderRadius: 2,
              cursor: "pointer",
              textTransform: "uppercase",
              boxShadow: "0 8px 32px rgba(37,79,34,0.35)",
              animation: "pulse 2.5s infinite",
              transition: "transform 0.3s",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? 280 : "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.06)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            ▶ Jouer Maintenant
          </button>
 
          <button
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 13,
              letterSpacing: "0.12em",
              fontWeight: 400,
              color: "var(--or-pale)",
              background: "transparent",
              border: "1px solid rgba(240,180,41,0.5)",
              padding: isMobile ? "14px 32px" : "16px 40px",
              borderRadius: 2,
              cursor: "pointer",
              textTransform: "uppercase",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? 280 : "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(240,180,41,0.1)";
              e.currentTarget.style.borderColor = "var(--or)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
            }}
          >
            ▷ Voir la Bande-Annonce
          </button>
        </div>
 
        {/* Scroll indicator — caché sur mobile */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              opacity: 0.5,
              animation: "fadeIn 1s ease 2s both",
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 10,
                letterSpacing: "0.3em",
                color: "var(--or-pale)",
                textTransform: "uppercase",
              }}
            >
              Défiler
            </div>
            <div
              style={{
                width: 1,
                height: 48,
                background:
                  "linear-gradient(to bottom, var(--or), transparent)",
                animation: "shimmer 2s infinite",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
 
export default Hero;
 
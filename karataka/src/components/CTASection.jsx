import { useEffect, useState } from "react";
import Stars from "./Stars";
import DustParticles from "./DustParticles";

function CTASection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, #150A06 0%, #0D0805 50%, #3A1060 100%)",
        padding: isMobile ? "72px 20px" : "120px 48px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Stars count={isMobile ? 20 : 40} />
      <DustParticles count={isMobile ? 6 : 12} />

      {/* Glow central */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 280 : 500,
          height: isMobile ? 280 : 500,
          background:
            "radial-gradient(circle, rgba(193,68,14,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>

        {/* Étiquette */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "var(--or)",
            fontSize: isMobile ? 12 : 14,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: 20,
            opacity: 0.8,
          }}
        >
          Rejoignez l'Aventure
        </div>

        {/* Titre */}
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(32px, 7vw, 72px)",
            color: "var(--creme)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 20,
            textShadow: "0 4px 30px rgba(0,0,0,0.8)",
          }}
        >
          Votre Héritage
          <br />
          <span style={{ color: "var(--or)" }}>Commence Ici</span>
        </h2>

        {/* Citation */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "rgba(245,236,215,0.6)",
            fontSize: isMobile ? 16 : 20,
            maxWidth: 500,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            fontStyle: "italic",
            padding: isMobile ? "0 8px" : 0,
          }}
        >
          « La terre est une richesse. Mais seule la sagesse la transforme en
          prospérité. »
        </p>

        {/* Boutons */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 14,
              letterSpacing: "0.12em",
              fontWeight: 700,
              color: "var(--nuit)",
              background: "linear-gradient(135deg, #F0B429 0%, #C1440E 100%)",
              border: "none",
              padding: isMobile ? "14px 36px" : "18px 52px",
              borderRadius: 2,
              cursor: "pointer",
              textTransform: "uppercase",
              boxShadow: "0 10px 40px rgba(240,180,41,0.3)",
              transition: "all 0.3s",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? 280 : "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.boxShadow =
                "0 16px 50px rgba(240,180,41,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 40px rgba(240,180,41,0.3)";
            }}
          >
            ▶ Jouer Gratuitement
          </button>

          <button
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 14,
              letterSpacing: "0.12em",
              color: "var(--or-pale)",
              background: "transparent",
              border: "1px solid rgba(240,180,41,0.4)",
              padding: isMobile ? "14px 36px" : "18px 52px",
              borderRadius: 2,
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "all 0.3s",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? 280 : "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(240,180,41,0.08)";
              e.currentTarget.style.borderColor = "var(--or)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)";
            }}
          >
            Être Notifié
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
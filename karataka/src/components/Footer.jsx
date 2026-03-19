import { useEffect, useState } from "react";
import uiLogo from "../assets/ui_logo.png";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        background: "#050302",
        borderTop: "1px solid rgba(240,180,41,0.08)",
        padding: isMobile ? "32px 20px" : "40px 48px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: isMobile ? 16 : 20,
        textAlign: isMobile ? "center" : "left",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={uiLogo}
          alt="Karataka Logo"
          style={{ width: 24, height: 24, objectFit: "contain" }}
        />
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            color: "rgba(240,180,41,0.6)",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.15em",
          }}
        >
          KARATAKA
        </span>
      </div>

      {/* Copyright */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "rgba(245,236,215,0.25)",
          fontSize: isMobile ? 12 : 13,
          order: isMobile ? 1 : 0,
        }}
      >
        © 2026 The brain Studio · Madagascar · Tous droits réservés
      </div>

      {/* Liens */}
      <div
        style={{
          display: "flex",
          gap: isMobile ? 16 : 24,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["Politique de confidentialité", "CGU", "Contact"].map((l) => (
          <span
            key={l}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "rgba(245,236,215,0.25)",
              cursor: "pointer",
              transition: "color 0.3s",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = "rgba(240,180,41,0.6)")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = "rgba(245,236,215,0.25)")
            }
          >
            {l}
          </span>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
import { useState } from "react";
import uiLogo from "../assets/ui_logo.png";

function Navbar({ scrolled }) {
  const [showModal, setShowModal] = useState(false);
  const histoires = [
    {
      titre: "KARATAKA : Rakoto l’Héritage de la Terre Rouge",
      texte: 
      `
      Dans KARATAKA Rakoto l’Héritage de la Terre Rouge, le joueur suit Rakoto, 
      jeune héritier d’un petit terrain dans les Hautes Terres malgaches, 
      qui doit transformer une ferme modeste en exploitation prospère. 
      Entre poulailler délabré, terres sèches et marché animé du village, 
      il apprend à gérer ses animaux, cultiver la terre,
      investir dans des outils et diversifier ses productions tout en faisant 
      face à la dette et aux aléas de la nature : pluie, sécheresse, maladies animales 
      ou variations des prix. Guidé par la sagesse de son grand-père et les conseils de
      sa voisine Rasoa,Rakoto découvre que la richesse ne vient pas seulement de la terre,
      mais de la patience, de la stratégie, du travail acharné et de la capacité à écouter 
      et respecter la nature pour construire un avenir solide.
      `,
    },
  ];

  const navBtnStyle = {
    background: "none",
    border: "none",
    color: "var(--or)",
    font: "inherit",
    cursor: "pointer",
    padding: 0,
    margin: 0,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: "'Cinzel', serif",
    fontSize: 15,
    fontWeight: 700,
    transition: "color 0.2s",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(13,8,5,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(240,180,41,0.15)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={uiLogo}
          alt="Karataka Logo"
          style={{
            width: 32,
            height: 32,
            objectFit: "contain",
          }}
        />
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            color: "var(--or)",
            fontSize: 18,
            fontWeight: 900,
            letterSpacing: "0.15em",
          }}
        >
          KARATAKA
        </span>
      </div>

      <div style={{ display: "flex", gap: 36 }}>
        {["Histoire", "Gameplay", "Personnages", "Monde"].map((l) =>
          l === "Histoire" ? (
            <button
              key={l}
              onClick={() => setShowModal(true)}
              className="nav-link"
              style={navBtnStyle}
            >
              {l}
            </button>
          ) : (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link"
              style={navBtnStyle}
            >
              {l}
            </a>
          ),
        )}
      </div>

      <button
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 11,
          letterSpacing: "0.15em",
          color: "var(--nuit)",
          background: "linear-gradient(135deg, var(--or), var(--terre))",
          border: "none",
          padding: "10px 24px",
          borderRadius: 2,
          cursor: "pointer",
          fontWeight: 700,
          textTransform: "uppercase",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        THE BRAIN STUDIO
      </button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(13,8,5,0.85)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: "#1a0a08",
              border: "1px solid var(--or)",
              borderRadius: 8,
              padding: 40,
              minWidth: 320,
              maxWidth: 500,
              color: "var(--creme)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 16,
                background: "none",
                border: "none",
                color: "var(--or)",
                fontSize: 22,
                cursor: "pointer",
                fontWeight: 700,
              }}
              aria-label="Fermer"
            >
              ×
            </button>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                color: "var(--or)",
                fontSize: 24,
                marginBottom: 24,
                textAlign: "center",
                letterSpacing: "0.1em",
              }}
            >
              Histoires du jeu
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {histoires.map((h, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "var(--or)",
                      fontSize: 18,
                      marginBottom: 6,
                    }}
                  >
                    {h.titre}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 16,
                      color: "var(--creme)",
                      opacity: 0.85,
                    }}
                  >
                    {h.texte}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import uiLogo from "../assets/ui_logo.png";
import logoISPM from "../assets/logo_ispm.png";

function Navbar({ scrolled }) {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const histoires = [
    {
      titre: "KARATAKA : Rakoto l'Héritage de la Terre Rouge",
      texte: `
      Dans KARATAKA Rakoto l'Héritage de la Terre Rouge, le joueur suit Rakoto, 
      jeune héritier d'un petit terrain dans les Hautes Terres malgaches, 
      qui doit transformer une ferme modeste en exploitation prospère. 
      Entre poulailler délabré, terres sèches et marché animé du village, 
      il apprend à gérer ses animaux, cultiver la terre,
      investir dans des outils et diversifier ses productions tout en faisant 
      face à la dette et aux aléas de la nature : pluie, sécheresse, maladies animales 
      ou variations des prix. Guidé par la sagesse de son grand-père et les conseils de
      sa voisine Rasoa, Rakoto découvre que la richesse ne vient pas seulement de la terre,
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

  const links = ["Histoire", "Gameplay", "Personnages", "Monde"];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isMobile ? "14px 20px" : "16px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled || menuOpen ? "rgba(13,8,5,0.97)" : "transparent",
          borderBottom: scrolled || menuOpen
            ? "1px solid rgba(37,79,34,0.4)"
            : "none",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          transition: "all 0.4s ease",
          boxShadow: scrolled || menuOpen
            ? "0 2px 20px rgba(37,79,34,0.15)"
            : "none",
        }}
      >
        {/* Logo KARATAKA + badge ISPM */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={uiLogo}
            alt="Karataka Logo"
            style={{ width: 32, height: 32, objectFit: "contain" }}
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

          {/* Séparateur vert */}
          <div style={{
            width: 1,
            height: 28,
            background: "#254F22",
            margin: "0 10px",
            filter: "brightness(1.6)",
          }} />

          {/* Badge ISPM */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <img
              src={logoISPM}
              alt="ISPM"
              style={{
                width: 28,
                height: 28,
                objectFit: "contain",
                borderRadius: "50%",
                border: "1px solid rgba(37,79,34,0.6)",
              }}
            />
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 10,
              color: "#254F22",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: isMobile ? "none" : "block",
              filter: "brightness(1.8)",
            }}>
              ISPM
            </span>
          </div>
        </div>

        {/* Desktop — liens */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 36 }}>
            {links.map((l) =>
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
              )
            )}
          </div>
        )}

        {/* Desktop — bouton GREEN CODE */}
        {!isMobile && (
          <button
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "#fff",
              background: "linear-gradient(135deg, #254F22, #3d8a38)",
              border: "none",
              padding: "10px 24px",
              borderRadius: 2,
              cursor: "pointer",
              fontWeight: 700,
              textTransform: "uppercase",
              transition: "all 0.3s",
              boxShadow: "0 0 12px rgba(37,79,34,0.4)",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            GREEN CODE
          </button>
        )}

        {/* Mobile — bouton hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "1px solid rgba(37,79,34,0.6)",
              borderRadius: 4,
              padding: "6px 10px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#254F22",
                  filter: "brightness(1.8)",
                  borderRadius: 2,
                  transition: "all 0.3s",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : menuOpen && i === 1
                      ? "scaleX(0)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile — menu déroulant */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 61,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(13,8,5,0.97)",
            backdropFilter: "blur(12px)",
            borderBottom: "2px solid rgba(37,79,34,0.5)",
            padding: menuOpen ? "24px 20px" : "0 20px",
            maxHeight: menuOpen ? 400 : 0,
            overflow: "hidden",
            transition: "all 0.4s ease",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {links.map((l) =>
              l === "Histoire" ? (
                <button
                  key={l}
                  onClick={() => { setShowModal(true); setMenuOpen(false); }}
                  style={{ ...navBtnStyle, fontSize: 16, textAlign: "left" }}
                >
                  {l}
                </button>
              ) : (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ ...navBtnStyle, fontSize: 16 }}
                >
                  {l}
                </a>
              )
            )}

            {/* Bouton GREEN CODE mobile */}
            <button
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: "#fff",
                background: "linear-gradient(135deg, #254F22, #3d8a38)",
                border: "none",
                padding: "12px 24px",
                borderRadius: 2,
                cursor: "pointer",
                fontWeight: 700,
                textTransform: "uppercase",
                marginTop: 8,
                boxShadow: "0 0 12px rgba(37,79,34,0.4)",
              }}
            >
              GREEN CODE
            </button>

            {/* Badge ISPM dans le menu mobile */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              paddingTop: 8,
              borderTop: "1px solid rgba(37,79,34,0.3)",
            }}>
              <img
                src={logoISPM}
                alt="ISPM"
                style={{
                  width: 24,
                  height: 24,
                  objectFit: "contain",
                  borderRadius: "50%",
                  border: "1px solid rgba(37,79,34,0.5)",
                }}
              />
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 10,
                color: "#254F22",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                filter: "brightness(1.8)",
              }}>
                Institut Supérieur Polytechnique de Madagascar
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Modal Histoire */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100vw", height: "100vh",
            background: "rgba(13,8,5,0.85)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: "#0d1a0c",
              border: "1px solid #254F22",
              borderRadius: 8,
              padding: isMobile ? 24 : 40,
              width: "100%",
              maxWidth: 500,
              color: "var(--creme)",
              boxShadow: "0 8px 40px rgba(37,79,34,0.3)",
              position: "relative",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: 12, right: 16,
                background: "none",
                border: "none",
                color: "#254F22",
                fontSize: 22,
                cursor: "pointer",
                fontWeight: 700,
                filter: "brightness(1.8)",
              }}
              aria-label="Fermer"
            >
              ×
            </button>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                color: "var(--or)",
                fontSize: isMobile ? 18 : 24,
                marginBottom: 8,
                textAlign: "center",
                letterSpacing: "0.1em",
              }}
            >
              Histoires du jeu
            </h2>

            {/* Ligne décorative verte */}
            <div style={{
              width: 40,
              height: 2,
              background: "#254F22",
              margin: "0 auto 24px auto",
              borderRadius: 2,
              filter: "brightness(1.5)",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {histoires.map((h, i) => (
                <div key={i}>
                  <div style={{
                    fontWeight: 700,
                    color: "var(--or)",
                    fontSize: isMobile ? 15 : 18,
                    marginBottom: 6,
                  }}>
                    {h.titre}
                  </div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 16,
                    color: "var(--creme)",
                    opacity: 0.85,
                  }}>
                    {h.texte}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
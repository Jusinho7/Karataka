import { useEffect, useState } from "react";

function WorldSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const zones = [
    {
      icon: "🏡",
      name: "La Ferme",
      desc: "Poulailler, terrain cultivable, réserve d'eau, espace énergie.",
    },
    {
      icon: "🏪",
      name: "Le Marché",
      desc: "Achat et vente à prix variables. Équipements, semences, outils.",
    },
    {
      icon: "🏦",
      name: "La Banque",
      desc: "Prêts, remboursements, gestion de la dette et discipline financière.",
    },
    {
      icon: "🌾",
      name: "Les Rizières",
      desc: "Terrasses en cascade, irrigation, culture de subsistance et export.",
    },
  ];

  const gradients = [
    "linear-gradient(160deg, #3D2000, #7A3500)",
    "linear-gradient(160deg, #1A2800, #3D5A00)",
    "linear-gradient(160deg, #00102A, #002A5A)",
    "linear-gradient(160deg, #1A0028, #3D0A5A)",
  ];

  return (
    <section
      id="monde"
      style={{
        background: "var(--nuit)",
        padding: isMobile ? "60px 20px" : "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ligne décorative */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(240,180,41,0.3), transparent)",
        }}
      />

      {/* Glow ambiant */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 300,
          background:
            "linear-gradient(180deg, #3A1060 0%, #8B1A00 40%, #C1440E 70%, transparent 100%)",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 64 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "var(--or)",
              fontSize: 14,
              letterSpacing: "0.35em",
              marginBottom: 12,
              opacity: 0.8,
            }}
          >
            Zones à Explorer
          </div>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(24px, 5vw, 52px)",
              color: "var(--creme)",
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            Les Hautes Terres Malgaches
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "rgba(245,236,215,0.6)",
              fontSize: isMobile ? 15 : 18,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
              fontStyle: "italic",
              padding: isMobile ? "0 8px" : 0,
            }}
          >
            Un village vivant, inspiré des paysages autour d'Antananarivo.
            Chaque zone est interactive, chaque décision a des conséquences.
          </p>
        </div>

        {/* Grid des zones */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 3,
          }}
        >
          {zones.map((z, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: isMobile ? 150 : 200,
                background: gradients[i],
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: isMobile ? 20 : 28,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                }}
              >
                <div style={{ fontSize: isMobile ? 26 : 32, marginBottom: 6 }}>
                  {z.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--creme)",
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {z.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "rgba(245,236,215,0.65)",
                    fontSize: isMobile ? 13 : 14,
                    lineHeight: 1.5,
                  }}
                >
                  {z.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorldSection;
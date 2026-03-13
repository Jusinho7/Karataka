function WorldSection() {
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

  return (
    <section
      id="monde"
      style={{
        background: "var(--nuit)",
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
              fontSize: "clamp(28px, 5vw, 52px)",
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
              fontSize: 18,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            Un village vivant, inspiré des paysages autour d'Antananarivo.
            Chaque zone est interactive, chaque décision a des conséquences.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 3,
          }}
        >
          {zones.map((z, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: 200,
                background:
                  i === 0
                    ? "linear-gradient(160deg, #3D2000, #7A3500)"
                    : i === 1
                      ? "linear-gradient(160deg, #1A2800, #3D5A00)"
                      : i === 2
                        ? "linear-gradient(160deg, #00102A, #002A5A)"
                        : "linear-gradient(160deg, #1A0028, #3D0A5A)",
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
                  padding: 28,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{z.icon}</div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--creme)",
                    fontSize: 16,
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  {z.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "rgba(245,236,215,0.65)",
                    fontSize: 14,
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

import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { animStyle } from "../hooks/useAnimationStyle";

function Features() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const { ref: headerRef, visible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, visible: gridVisible } = useScrollAnimation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      icon: "🗺️",
      title: "Monde Ouvert",
      desc: "Explorez les Hautes Terres malgaches — villages, marchés, rizières en terrasses et routes de latérite.",
      color: "#254F22",
    },
    {
      icon: "💰",
      title: "Économie Réelle",
      desc: "Gérez vos finances, négociez au marché, contractez des prêts. Chaque Ariary compte.",
      color: "#F0B429",
    },
    {
      icon: "🌿",
      title: "Agriculture & Élevage",
      desc: "Cultivez des terres, élevez poulets, chèvres et zébus. Résistez aux saisons difficiles.",
      color: "#254F22",
    },
    {
      icon: "⚡",
      title: "Énergie Moderne",
      desc: "Installez des panneaux solaires ou des éoliennes pour moderniser votre exploitation.",
      color: "#F0B429",
    },
    {
      icon: "🎭",
      title: "Choix Narratifs",
      desc: "Vos décisions façonnent l'histoire. Rivalité amicale avec Rasoa, dette, résilience.",
      color: "#254F22",
    },
    {
      icon: "🎲",
      title: "Événements Aléatoires",
      desc: "Sécheresse, pluies abondantes, maladies animales — chaque partie est unique.",
      color: "#F0B429",
    },
  ];

  return (
    <section
      id="gameplay"
      style={{
        background: "linear-gradient(180deg, var(--nuit) 0%, #150806 100%)",
        padding: isMobile ? "60px 20px" : "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(to right, transparent, rgba(240,180,41,0.4), transparent)",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{ textAlign: "center", marginBottom: isMobile ? 36 : 64, ...animStyle(headerVisible) }}
        >
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "var(--or)",
            fontSize: 14,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: 12,
            opacity: 0.8,
          }}>
            Mécaniques de Jeu
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(24px, 5vw, 52px)",
            color: "var(--creme)",
            fontWeight: 700,
            lineHeight: 1.1,
          }}>
            Bâtissez votre Héritage
          </h2>
        </div>

        {/* Grid des cards */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: isMobile ? 16 : 24,
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 4,
                padding: isMobile ? "24px 20px" : "32px 28px",
                transition: `transform 0.4s ease, opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                overflow: "hidden",
                ...animStyle(gridVisible, { direction: "up", delay: i * 0.1 }),
              }}
            >
              <div className="card-glow" style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(ellipse at 30% 30%, ${f.color}15 0%, transparent 60%)`,
                opacity: 0, transition: "opacity 0.4s", pointerEvents: "none",
              }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: f.color, opacity: 0.7 }} />
              <div style={{ fontSize: isMobile ? 30 : 36, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                color: "var(--creme)",
                fontSize: isMobile ? 14 : 16,
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: 12,
              }}>
                {f.title}
              </h3>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(245,236,215,0.65)",
                fontSize: isMobile ? 15 : 16,
                lineHeight: 1.65,
                margin: 0,
              }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
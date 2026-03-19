import { useState, useEffect } from "react";
import rakotoImage from "../assets/rakoto_hi.png";
import rasoaImage from "../assets/rasoa_salut.png";
 
function Characters() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
 
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const chars = [
    {
      name: "Rakoto",
      role: "Le Protagoniste",
      emoji: "👨🏿‍🌾",
      color: "#F0B429",
      desc: "Héritier d'une ferme modeste après le décès de son grand-père. Déterminé à transformer peu en abondance, Rakoto affronte dettes, saisons difficiles et rivalité fraternelle avec courage et sagesse.",
      stats: [
        { label: "Détermination", val: 92 },
        { label: "Sagesse", val: 68 },
        { label: "Charisme", val: 74 },
        { label: "Expérience", val: 40 },
      ],
    },
    {
      name: "Rasoa",
      role: "La Rivale Amicale",
      emoji: "👩🏿‍🌾",
      color: "#FFB3C6",
      desc: "Voisine expérimentée et mentor informel de Rakoto. Elle cultive et élève avec méthode, toujours prête à donner un conseil ou pointer une faiblesse. Sa rivalité bienveillante pousse Rakoto à se dépasser.",
      stats: [
        { label: "Détermination", val: 80 },
        { label: "Sagesse", val: 95 },
        { label: "Charisme", val: 88 },
        { label: "Expérience", val: 85 },
      ],
    },
    {
      name: "Grand-père",
      role: "La Mémoire",
      emoji: "👴🏿",
      color: "#A8D8A8",
      desc: "Voix du passé qui résonne dans les choix de Rakoto. Sa lettre d'héritage pose les fondements moraux du jeu : la terre n'est pas seulement une ressource, c'est une responsabilité transmise.",
      stats: [
        { label: "Détermination", val: 75 },
        { label: "Sagesse", val: 100 },
        { label: "Charisme", val: 90 },
        { label: "Expérience", val: 99 },
      ],
    },
  ];
 
  const c = chars[active];
 
  return (
    <section
      id="personnages"
      style={{
        background: "linear-gradient(180deg, #150806 0%, #0D0805 100%)",
        padding: isMobile ? "60px 20px" : "100px 48px",
        position: "relative",
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
            Les Personnages
          </div>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(24px, 5vw, 52px)",
              color: "var(--creme)",
              fontWeight: 700,
            }}
          >
            Rencontrez l'Humanité du Jeu
          </h2>
        </div>
 
        {/* Boutons de sélection */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? 8 : 12,
            justifyContent: "center",
            marginBottom: isMobile ? 28 : 48,
            flexWrap: "wrap",
          }}
        >
          {chars.map((ch, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: isMobile ? 11 : 12,
                letterSpacing: "0.1em",
                color: active === i ? "var(--nuit)" : ch.color,
                background:
                  active === i
                    ? `linear-gradient(135deg, ${ch.color}, ${ch.color}AA)`
                    : "transparent",
                border: `1px solid ${ch.color}60`,
                padding: isMobile ? "8px 16px" : "10px 24px",
                borderRadius: 2,
                cursor: "pointer",
                transition: "all 0.3s",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                if (active !== i)
                  e.currentTarget.style.background = `${ch.color}15`;
              }}
              onMouseLeave={(e) => {
                if (active !== i)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              {ch.name}
            </button>
          ))}
        </div>
 
        {/* Card principale */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
            gap: isMobile ? 32 : 48,
            alignItems: "center",
            background: "rgba(255,255,255,0.02)",
            border: `1px solid ${c.color}30`,
            borderRadius: 4,
            padding: isMobile ? 24 : 48,
            transition: "border-color 0.5s",
          }}
        >
          {/* Colonne gauche — avatar */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: isMobile ? 120 : 160,
                height: isMobile ? 120 : 160,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${c.color}20 0%, transparent 70%)`,
                border: `2px solid ${c.color}50`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                boxShadow: `0 0 40px ${c.color}20`,
                animation: "float 5s ease-in-out infinite",
                overflow: "hidden",
              }}
            >
              {c.name === "Rakoto" ? (
                <img
                  src={rakotoImage}
                  alt={c.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : c.name === "Rasoa" ? (
                <img
                  src={rasoaImage}
                  alt={c.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <span style={{ fontSize: isMobile ? 60 : 80 }}>{c.emoji}</span>
              )}
            </div>
 
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: c.color,
                fontSize: isMobile ? 18 : 22,
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              {c.name}
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                color: "rgba(245,236,215,0.5)",
                fontSize: 15,
                marginTop: 6,
              }}
            >
              {c.role}
            </div>
          </div>
 
          {/* Colonne droite — description + stats */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(245,236,215,0.75)",
                fontSize: isMobile ? 16 : 18,
                lineHeight: 1.8,
                marginBottom: isMobile ? 24 : 36,
                fontStyle: "italic",
              }}
            >
              "{c.desc}"
            </p>
 
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {c.stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "'Cinzel', serif",
                      color: "rgba(245,236,215,0.6)",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      marginBottom: 6,
                    }}
                  >
                    <span>{s.label}</span>
                    <span style={{ color: c.color }}>{s.val}</span>
                  </div>
                  <div
                    style={{
                      height: 3,
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${s.val}%`,
                        background: `linear-gradient(to right, ${c.color}80, ${c.color})`,
                        borderRadius: 2,
                        transition: "width 0.8s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Characters;
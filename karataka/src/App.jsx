import { useState, useEffect, useRef } from "react";

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Kalam:wght@400;700&display=swap');
`;

const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }
  :root {
    --terre: #C1440E;
    --terre-dark: #7A2800;
    --or: #F0B429;
    --or-pale: #F7D98B;
    --ciel: #FF6B35;
    --nuit: #0D0805;
    --brun: #2C1208;
    --herbe: #5A8A3C;
    --creme: #FFF5E6;
    --text: #F5ECD7;
  }

  @keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-12px); } }
  @keyframes dustFloat { 0% { transform:translateY(0) translateX(0); opacity:0; }
    20% { opacity:0.6; }
    100% { transform:translateY(-120px) translateX(30px); opacity:0; } }
  @keyframes shimmer { 0%,100% { opacity:0.4; } 50% { opacity:1; } }
  @keyframes slide { from { transform:translateX(0); } to { transform:translateX(-50%); } }
  @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(240,180,41,0.4); }
    50% { box-shadow: 0 0 0 20px rgba(240,180,41,0); } }
  @keyframes scanline { from { top: -10%; } to { top: 110%; } }
  @keyframes grain {
    0%,100% { transform: translate(0,0); }
    10% { transform: translate(-1%,-1%); }
    20% { transform: translate(1%,1%); }
    30% { transform: translate(-1%,1%); }
    40% { transform: translate(1%,-1%); }
  }
  @keyframes twinkle { 0%,100%{opacity:0.1} 50%{opacity:0.7} }
  @keyframes borderGlow {
    0%,100% { border-color: rgba(240,180,41,0.3); }
    50% { border-color: rgba(240,180,41,0.9); }
  }

  .nav-link { position: relative; color: var(--or-pale); text-decoration: none;
    font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: 0.15em;
    text-transform: uppercase; opacity: 0.75; transition: opacity 0.3s; }
  .nav-link::after { content:''; position:absolute; bottom:-4px; left:0; right:0;
    height:1px; background:var(--or); transform:scaleX(0); transition:transform 0.3s; }
  .nav-link:hover { opacity: 1; }
  .nav-link:hover::after { transform: scaleX(1); }

  .feature-card:hover { transform: translateY(-8px); }
  .feature-card:hover .card-glow { opacity: 1; }

  .trailer-btn:hover { transform: scale(1.05); }
  .trailer-btn:hover .play-ring { transform: scale(1.15); }

  .platform-badge:hover { background: rgba(240,180,41,0.2); border-color: var(--or); }

  .scroll-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
  .scroll-reveal.visible { opacity: 1; transform: translateY(0); }

  .char-card:hover { transform: scale(1.03); }
  .char-card:hover .char-overlay { opacity: 1; }
`;

// ── Particules de poussière ──
function DustParticles({ count = 15 }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 2 + Math.random() * 4,
    }))
  );
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {particles.current.map((p) => (
        <div key={p.id} style={{
          position: "absolute",
          bottom: "10%",
          left: `${p.left}%`,
          width: p.size,
          height: p.size,
          borderRadius: "50%",
          background: "rgba(240,180,41,0.5)",
          animation: `dustFloat ${p.duration}s ${p.delay}s infinite`,
        }} />
      ))}
    </div>
  );
}

// ── Étoiles ──
function Stars({ count = 60 }) {
  const stars = useRef(Array.from({ length: count }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 50,
    size: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 4, duration: 2 + Math.random() * 3,
  })));
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {stars.current.map((s) => (
        <div key={s.id} style={{
          position: "absolute",
          left: `${s.x}%`, top: `${s.y}%`,
          width: s.size, height: s.size,
          borderRadius: "50%", background: "white",
          animation: `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  );
}

// ── Navbar ──
function Navbar({ scrolled }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "16px 48px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(13,8,5,0.95)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(240,180,41,0.15)" : "none",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32,
          background: "linear-gradient(135deg, var(--terre), var(--or))",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }} />
        <span style={{
          fontFamily: "'Cinzel', serif",
          color: "var(--or)",
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: "0.15em",
        }}>KARATAKA</span>
      </div>

      <div style={{ display: "flex", gap: 36 }}>
        {["Histoire", "Gameplay", "Personnages", "Monde"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
        ))}
      </div>

      <button style={{
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
        onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
      >
        Pré-commander
      </button>
    </nav>
  );
}

// ── HERO ──
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      minHeight: 700,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Ciel coucher de soleil */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, #0D0420 0%, #3A1060 18%, #8B1A00 38%, #C1440E 52%, #FF6B35 62%, #F0B429 72%, #C1440E 82%, #7A2800 100%)",
      }} />

      <Stars />
      <DustParticles count={20} />

      {/* Soleil */}
      <div style={{
        position: "absolute",
        top: "38%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 160,
        height: 160,
        borderRadius: "50%",
        background: "radial-gradient(circle, #FFF8C0 0%, #F7C948 35%, #FF6B35 65%, transparent 100%)",
        boxShadow: "0 0 120px 60px rgba(247,180,41,0.25), 0 0 200px 100px rgba(200,68,14,0.15)",
      }} />

      {/* Collines */}
      <svg style={{ position: "absolute", bottom: "22%", left: 0, width: "100%", height: "35%" }} preserveAspectRatio="none" viewBox="0 0 1200 300">
        <path d="M0,300 Q150,100 300,160 Q500,40 700,120 Q900,20 1100,100 L1200,120 L1200,300Z"
          fill="#3A1060" opacity="0.6" />
        <path d="M0,300 Q200,120 400,170 Q600,60 800,130 Q1000,30 1200,110 L1200,300Z"
          fill="#5A2D0C" opacity="0.5" />
        <path d="M0,300 Q100,150 250,180 Q400,100 600,160 Q750,80 1000,140 Q1100,100 1200,130 L1200,300Z"
          fill="#7A3500" opacity="0.7" />
      </svg>

      {/* Collines proches */}
      <svg style={{ position: "absolute", bottom: "12%", left: 0, width: "100%", height: "30%" }} preserveAspectRatio="none" viewBox="0 0 1200 250">
        <path d="M0,250 Q150,60 350,110 Q550,20 750,90 Q950,10 1200,70 L1200,250Z"
          fill="#C1440E" />
        <path d="M0,250 Q200,80 400,130 Q600,40 800,100 Q1000,20 1200,80 L1200,250Z"
          fill="#A03208" opacity="0.8" />
      </svg>

      {/* Rizières */}
      <svg style={{ position: "absolute", bottom: "8%", left: 0, width: "100%", height: "20%" }} preserveAspectRatio="none" viewBox="0 0 1200 180">
        <rect x="60" y="100" width="280" height="35" rx="4" fill="#5A8A3C" opacity="0.75" />
        <rect x="40" y="130" width="320" height="35" rx="4" fill="#3D6B28" opacity="0.65" />
        <rect x="820" y="90" width="320" height="35" rx="4" fill="#5A8A3C" opacity="0.75" />
        <rect x="800" y="120" width="360" height="40" rx="4" fill="#3D6B28" opacity="0.65" />
        <rect x="460" y="115" width="180" height="30" rx="4" fill="#6B9E45" opacity="0.6" />
      </svg>

      {/* Sol */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "14%",
        background: "linear-gradient(180deg, #8B3500 0%, #3D1500 100%)",
      }} />

      {/* Grain texture overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        opacity: 0.4,
        pointerEvents: "none",
        animation: "grain 0.5s steps(1) infinite",
      }} />

      {/* Silhouette personnage */}
      <div style={{
        position: "absolute",
        bottom: "13%",
        left: "50%",
        transform: "translateX(-50%)",
        opacity: loaded ? 1 : 0,
        transition: "opacity 2s ease 0.5s",
        animation: loaded ? "float 6s ease-in-out infinite" : "none",
        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
        zIndex: 2,
      }}>
        <svg width="180" height="320" viewBox="0 0 180 320">
          {/* Corps silhouette Rakoto avec outils */}
          <ellipse cx="90" cy="60" rx="28" ry="32" fill="#1A0808" opacity="0.95"/>
          <rect x="62" y="88" width="56" height="100" rx="8" fill="#1A0808" opacity="0.95"/>
          {/* Bras gauche avec outil */}
          <rect x="30" y="95" width="34" height="14" rx="7" fill="#1A0808" opacity="0.95" transform="rotate(-20 30 95)"/>
          <rect x="10" y="108" width="30" height="6" rx="3" fill="#2C1208" opacity="0.9"/>
          {/* Bras droit */}
          <rect x="116" y="95" width="34" height="14" rx="7" fill="#1A0808" opacity="0.95" transform="rotate(15 150 95)"/>
          {/* Jambes */}
          <rect x="68" y="184" width="24" height="80" rx="8" fill="#1A0808" opacity="0.95" transform="rotate(-5 68 184)"/>
          <rect x="90" y="184" width="24" height="80" rx="8" fill="#1A0808" opacity="0.95" transform="rotate(5 114 184)"/>
          {/* Chapeau */}
          <ellipse cx="90" cy="32" rx="38" ry="10" fill="#1A0808" opacity="0.9"/>
          <rect x="60" y="18" width="60" height="18" rx="4" fill="#1A0808" opacity="0.95"/>
          {/* Lettre / document */}
          <rect x="125" y="100" width="22" height="28" rx="2" fill="#F0B429" opacity="0.85"/>
          <line x1="128" y1="108" x2="144" y2="108" stroke="#7A4A00" strokeWidth="1.5"/>
          <line x1="128" y1="114" x2="144" y2="114" stroke="#7A4A00" strokeWidth="1.5"/>
          <line x1="128" y1="120" x2="138" y2="120" stroke="#7A4A00" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Zébu silhouette */}
      <div style={{
        position: "absolute", bottom: "13%", left: "8%",
        opacity: loaded ? 0.7 : 0,
        transition: "opacity 2s ease 1s",
        fontSize: 72,
        filter: "brightness(0.2) sepia(1)",
      }}>
        🐂
      </div>

      {/* Contenu hero */}
      <div style={{
        position: "relative",
        zIndex: 5,
        textAlign: "center",
        paddingBottom: "15%",
        opacity: loaded ? 1 : 0,
        transition: "opacity 1s ease 0.3s",
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "var(--or-pale)",
          fontSize: "clamp(13px, 2vw, 16px)",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          marginBottom: 16,
          opacity: 0.85,
          animation: "fadeUp 1s ease 0.4s both",
        }}>
          🌿 Un récit malgache · Point & Click
        </div>

        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(64px, 12vw, 130px)",
          fontWeight: 900,
          color: "var(--or)",
          lineHeight: 0.9,
          letterSpacing: "0.06em",
          textShadow: "0 0 60px rgba(240,180,41,0.4), 0 6px 30px rgba(0,0,0,0.9)",
          animation: "fadeUp 1s ease 0.6s both",
          margin: "0 0 6px",
        }}>
          KARATAKA
        </h1>

        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "var(--creme)",
          fontSize: "clamp(16px, 3vw, 26px)",
          opacity: 0.9,
          letterSpacing: "0.05em",
          animation: "fadeUp 1s ease 0.8s both",
          marginBottom: 48,
        }}>
          L'Héritage de la Terre Rouge
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          animation: "fadeUp 1s ease 1s both",
        }}>
          <button style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 13,
            letterSpacing: "0.12em",
            fontWeight: 700,
            color: "var(--nuit)",
            background: "linear-gradient(135deg, #F0B429 0%, #C1440E 100%)",
            border: "none",
            padding: "16px 40px",
            borderRadius: 2,
            cursor: "pointer",
            textTransform: "uppercase",
            boxShadow: "0 8px 32px rgba(240,180,41,0.35)",
            animation: "pulse 2.5s infinite",
            transition: "transform 0.3s",
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.06)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            ▶ Jouer Maintenant
          </button>

          <button style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 13,
            letterSpacing: "0.12em",
            fontWeight: 400,
            color: "var(--or-pale)",
            background: "transparent",
            border: "1px solid rgba(240,180,41,0.5)",
            padding: "16px 40px",
            borderRadius: 2,
            cursor: "pointer",
            textTransform: "uppercase",
            backdropFilter: "blur(8px)",
            transition: "all 0.3s",
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

        {/* Scroll indicator */}
        <div style={{
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
        }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 10,
            letterSpacing: "0.3em",
            color: "var(--or-pale)",
            textTransform: "uppercase",
          }}>Défiler</div>
          <div style={{
            width: 1, height: 48,
            background: "linear-gradient(to bottom, var(--or), transparent)",
            animation: "shimmer 2s infinite",
          }} />
        </div>
      </div>
    </section>
  );
}

// ── Trailer Section ──
function TrailerSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section style={{
      position: "relative",
      background: "var(--nuit)",
      padding: "100px 48px",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(193,68,14,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "var(--or)",
          fontSize: 14,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          marginBottom: 16,
          opacity: 0.8,
        }}>
          Bande-Annonce Officielle
        </div>
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(32px, 6vw, 60px)",
          color: "var(--creme)",
          fontWeight: 700,
          marginBottom: 48,
          lineHeight: 1.1,
        }}>
          Découvrez les Hautes Terres
        </h2>

        {/* Faux lecteur vidéo */}
        <div
          className="trailer-btn"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            borderRadius: 4,
            overflow: "hidden",
            cursor: "pointer",
            transition: "transform 0.3s",
            border: "1px solid rgba(240,180,41,0.2)",
          }}
        >
          {/* Décor vidéo */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(160deg, #0D0420 0%, #3A1060 25%, #8B1A00 50%, #C1440E 70%, #F0B429 100%)",
          }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 800 450">
              <path d="M0,450 Q150,200 300,280 Q500,100 700,200 L800,220 L800,450Z" fill="#7A2800" opacity="0.7"/>
              <path d="M0,450 Q200,250 400,310 Q600,160 800,240 L800,450Z" fill="#5A1A00" opacity="0.8"/>
              <ellipse cx="400" cy="180" rx="80" ry="80" fill="rgba(247,201,72,0.15)" />
              <ellipse cx="400" cy="180" rx="40" ry="40" fill="rgba(247,201,72,0.2)" />
            </svg>
            {/* Scanline effect */}
            <div style={{
              position: "absolute", left: 0, right: 0,
              height: "2px",
              background: "rgba(255,255,255,0.06)",
              animation: "scanline 4s linear infinite",
              pointerEvents: "none",
            }} />
          </div>

          {/* Play button */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div className="play-ring" style={{
              width: hovered ? 90 : 80,
              height: hovered ? 90 : 80,
              borderRadius: "50%",
              border: "2px solid var(--or)",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(13,8,5,0.7)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s",
              boxShadow: hovered ? "0 0 40px rgba(240,180,41,0.5)" : "0 0 20px rgba(240,180,41,0.2)",
            }}>
              <div style={{
                width: 0, height: 0,
                borderTop: "16px solid transparent",
                borderBottom: "16px solid transparent",
                borderLeft: "28px solid var(--or)",
                marginLeft: 6,
              }} />
            </div>
          </div>

          {/* Label */}
          <div style={{
            position: "absolute", bottom: 20, left: 24,
            fontFamily: "'Cinzel', serif",
            color: "var(--or-pale)",
            fontSize: 12,
            letterSpacing: "0.15em",
            opacity: 0.8,
          }}>
            KARATAKA — CINEMATIC TRAILER 2024
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Features ──
function Features() {
  const features = [
    {
      icon: "🗺️",
      title: "Monde Ouvert",
      desc: "Explorez les Hautes Terres malgaches — villages, marchés, rizières en terrasses et routes de latérite.",
      color: "#5A8A3C",
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
      color: "#8FBC5A",
    },
    {
      icon: "⚡",
      title: "Énergie Moderne",
      desc: "Installez des panneaux solaires ou des éoliennes pour moderniser votre exploitation.",
      color: "#87CEEB",
    },
    {
      icon: "🎭",
      title: "Choix Narratifs",
      desc: "Vos décisions façonnent l'histoire. Rivalité amicale avec Rasoa, dette, résilience.",
      color: "#FFB3C6",
    },
    {
      icon: "🎲",
      title: "Événements Aléatoires",
      desc: "Sécheresse, pluies abondantes, maladies animales — chaque partie est unique.",
      color: "#C1440E",
    },
  ];

  return (
    <section id="gameplay" style={{
      background: "linear-gradient(180deg, var(--nuit) 0%, #150806 100%)",
      padding: "100px 48px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ligne décorative */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%",
        height: 1,
        background: "linear-gradient(to right, transparent, rgba(240,180,41,0.4), transparent)",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            fontSize: "clamp(28px, 5vw, 52px)",
            color: "var(--creme)",
            fontWeight: 700,
            lineHeight: 1.1,
          }}>
            Bâtissez votre Héritage
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 4,
                padding: "32px 28px",
                transition: "transform 0.4s ease",
                overflow: "hidden",
              }}
            >
              {/* Glow effet */}
              <div className="card-glow" style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(ellipse at 30% 30%, ${f.color}15 0%, transparent 60%)`,
                opacity: 0,
                transition: "opacity 0.4s",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", top: 0, left: 0,
                width: 3, height: "100%",
                background: f.color,
                opacity: 0.7,
              }} />

              <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                color: "var(--creme)",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: 12,
              }}>
                {f.title}
              </h3>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(245,236,215,0.65)",
                fontSize: 16,
                lineHeight: 1.65,
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

// ── Personnages ──
function Characters() {
  const [active, setActive] = useState(0);
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
    <section id="personnages" style={{
      background: "linear-gradient(180deg, #150806 0%, #0D0805 100%)",
      padding: "100px 48px",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%",
        height: 1,
        background: "linear-gradient(to right, transparent, rgba(240,180,41,0.3), transparent)",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "var(--or)",
            fontSize: 14,
            letterSpacing: "0.35em",
            marginBottom: 12,
            opacity: 0.8,
          }}>
            Les Personnages
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            color: "var(--creme)",
            fontWeight: 700,
          }}>
            Rencontrez l'Humanité du Jeu
          </h2>
        </div>

        {/* Sélecteur */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 48 }}>
          {chars.map((ch, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 12,
                letterSpacing: "0.1em",
                color: active === i ? "var(--nuit)" : ch.color,
                background: active === i
                  ? `linear-gradient(135deg, ${ch.color}, ${ch.color}AA)`
                  : "transparent",
                border: `1px solid ${ch.color}60`,
                padding: "10px 24px",
                borderRadius: 2,
                cursor: "pointer",
                transition: "all 0.3s",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => { if (active !== i) e.currentTarget.style.background = `${ch.color}15`; }}
              onMouseLeave={(e) => { if (active !== i) e.currentTarget.style.background = "transparent"; }}
            >
              {ch.name}
            </button>
          ))}
        </div>

        {/* Carte personnage */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 48,
          alignItems: "center",
          background: "rgba(255,255,255,0.02)",
          border: `1px solid ${c.color}30`,
          borderRadius: 4,
          padding: 48,
          transition: "border-color 0.5s",
        }}>
          {/* Avatar */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: 160, height: 160,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${c.color}20 0%, transparent 70%)`,
              border: `2px solid ${c.color}50`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 80,
              margin: "0 auto 24px",
              boxShadow: `0 0 40px ${c.color}20`,
              animation: "float 5s ease-in-out infinite",
            }}>
              {c.emoji}
            </div>
            <div style={{
              fontFamily: "'Cinzel', serif",
              color: c.color,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}>
              {c.name}
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "rgba(245,236,215,0.5)",
              fontSize: 15,
              marginTop: 6,
            }}>
              {c.role}
            </div>
          </div>

          {/* Détails */}
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "rgba(245,236,215,0.75)",
              fontSize: 18,
              lineHeight: 1.8,
              marginBottom: 36,
              fontStyle: "italic",
            }}>
              "{c.desc}"
            </p>

            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {c.stats.map((s) => (
                <div key={s.label}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    fontFamily: "'Cinzel', serif",
                    color: "rgba(245,236,215,0.6)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    marginBottom: 6,
                  }}>
                    <span>{s.label}</span>
                    <span style={{ color: c.color }}>{s.val}</span>
                  </div>
                  <div style={{
                    height: 3,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      height: "100%",
                      width: `${s.val}%`,
                      background: `linear-gradient(to right, ${c.color}80, ${c.color})`,
                      borderRadius: 2,
                      transition: "width 0.8s ease",
                    }} />
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

// ── Le Monde ──
function WorldSection() {
  const zones = [
    { icon: "🏡", name: "La Ferme", desc: "Poulailler, terrain cultivable, réserve d'eau, espace énergie." },
    { icon: "🏪", name: "Le Marché", desc: "Achat et vente à prix variables. Équipements, semences, outils." },
    { icon: "🏦", name: "La Banque", desc: "Prêts, remboursements, gestion de la dette et discipline financière." },
    { icon: "🌾", name: "Les Rizières", desc: "Terrasses en cascade, irrigation, culture de subsistance et export." },
  ];

  return (
    <section id="monde" style={{
      background: "var(--nuit)",
      padding: "100px 48px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%",
        height: 1,
        background: "linear-gradient(to right, transparent, rgba(240,180,41,0.3), transparent)",
      }} />

      {/* Panorama décoratif */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 300,
        background: "linear-gradient(180deg, #3A1060 0%, #8B1A00 40%, #C1440E 70%, transparent 100%)",
        opacity: 0.12,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "var(--or)",
            fontSize: 14,
            letterSpacing: "0.35em",
            marginBottom: 12,
            opacity: 0.8,
          }}>
            Zones à Explorer
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            color: "var(--creme)",
            fontWeight: 700,
            marginBottom: 20,
          }}>
            Les Hautes Terres Malgaches
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "rgba(245,236,215,0.6)",
            fontSize: 18,
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}>
            Un village vivant, inspiré des paysages autour d'Antananarivo. Chaque zone est interactive, chaque décision a des conséquences.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 3,
        }}>
          {zones.map((z, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: 200,
                background: i === 0
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
              onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; }}
            >
              <div style={{
                position: "absolute", inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: 28,
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{z.icon}</div>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  color: "var(--creme)",
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 6,
                }}>
                  {z.name}
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "rgba(245,236,215,0.65)",
                  fontSize: 14,
                  lineHeight: 1.5,
                }}>
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

// ── Plateformes ──
function PlatformsSection() {
  return (
    <section style={{
      background: "linear-gradient(180deg, #0D0805 0%, #150A06 100%)",
      padding: "80px 48px",
      borderTop: "1px solid rgba(240,180,41,0.1)",
      textAlign: "center",
    }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        color: "rgba(245,236,215,0.4)",
        fontSize: 13,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        marginBottom: 32,
      }}>
        Disponible sur
      </div>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
        {[
          { icon: "🌐", label: "Web" },
          { icon: "📱", label: "iOS" },
          { icon: "🤖", label: "Android" },
          { icon: "🖥️", label: "PC" },
        ].map((p) => (
          <div
            key={p.label}
            className="platform-badge"
            style={{
              display: "flex", alignItems: "center", gap: 10,
              border: "1px solid rgba(240,180,41,0.2)",
              borderRadius: 2,
              padding: "12px 28px",
              cursor: "pointer",
              transition: "all 0.3s",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span style={{ fontSize: 20 }}>{p.icon}</span>
            <span style={{
              fontFamily: "'Cinzel', serif",
              color: "rgba(245,236,215,0.6)",
              fontSize: 13,
              letterSpacing: "0.1em",
            }}>
              {p.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bandeau citations défilantes */}
      <div style={{ overflow: "hidden", position: "relative", padding: "20px 0" }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(to right, #150A06, transparent)",
          zIndex: 2,
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(to left, #150A06, transparent)",
          zIndex: 2,
        }} />
        <div style={{
          display: "flex",
          gap: 60,
          width: "max-content",
          animation: "slide 30s linear infinite",
        }}>
          {[...Array(2)].flatMap(() => [
            "🌿 Un jeu qui célèbre la culture malgache",
            "🐔 Gérez votre ferme avec sagesse",
            "💰 Chaque Ariary compte",
            "🌄 Les Hautes Terres vous attendent",
            "🎭 Des choix qui façonnent l'histoire",
            "🌧️ Survivez aux saisons difficiles",
          ]).map((t, i) => (
            <span key={i} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "rgba(240,180,41,0.4)",
              fontSize: 15,
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Final ──
function CTASection() {
  return (
    <section style={{
      position: "relative",
      background: "linear-gradient(180deg, #150A06 0%, #0D0805 50%, #3A1060 100%)",
      padding: "120px 48px",
      textAlign: "center",
      overflow: "hidden",
    }}>
      <Stars count={40} />
      <DustParticles count={12} />

      {/* Hexagone décoratif */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(193,68,14,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "var(--or)",
          fontSize: 14,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          marginBottom: 20,
          opacity: 0.8,
        }}>
          Rejoignez l'Aventure
        </div>

        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(36px, 7vw, 72px)",
          color: "var(--creme)",
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: 20,
          textShadow: "0 4px 30px rgba(0,0,0,0.8)",
        }}>
          Votre Héritage<br />
          <span style={{ color: "var(--or)" }}>Commence Ici</span>
        </h2>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "rgba(245,236,215,0.6)",
          fontSize: 20,
          maxWidth: 500,
          margin: "0 auto 48px",
          lineHeight: 1.7,
          fontStyle: "italic",
        }}>
          « La terre est une richesse. Mais seule la sagesse la transforme en prospérité. »
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 14,
            letterSpacing: "0.12em",
            fontWeight: 700,
            color: "var(--nuit)",
            background: "linear-gradient(135deg, #F0B429 0%, #C1440E 100%)",
            border: "none",
            padding: "18px 52px",
            borderRadius: 2,
            cursor: "pointer",
            textTransform: "uppercase",
            boxShadow: "0 10px 40px rgba(240,180,41,0.3)",
            transition: "all 0.3s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(240,180,41,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(240,180,41,0.3)"; }}
          >
            ▶ Jouer Gratuitement
          </button>

          <button style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 14,
            letterSpacing: "0.12em",
            color: "var(--or-pale)",
            background: "transparent",
            border: "1px solid rgba(240,180,41,0.4)",
            padding: "18px 52px",
            borderRadius: 2,
            cursor: "pointer",
            textTransform: "uppercase",
            transition: "all 0.3s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(240,180,41,0.08)"; e.currentTarget.style.borderColor = "var(--or)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)"; }}
          >
            📧 Être Notifié
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──
function Footer() {
  return (
    <footer style={{
      background: "#050302",
      borderTop: "1px solid rgba(240,180,41,0.08)",
      padding: "40px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 20,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 24, height: 24,
          background: "linear-gradient(135deg, var(--terre), var(--or))",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }} />
        <span style={{
          fontFamily: "'Cinzel', serif",
          color: "rgba(240,180,41,0.6)",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "0.15em",
        }}>KARATAKA</span>
      </div>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        color: "rgba(245,236,215,0.25)",
        fontSize: 13,
      }}>
        © 2024 Karataka Studio · Madagascar · Tous droits réservés
      </div>

      <div style={{ display: "flex", gap: 24 }}>
        {["Politique de confidentialité", "CGU", "Contact"].map((l) => (
          <span key={l} style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 10,
            letterSpacing: "0.1em",
            color: "rgba(245,236,215,0.25)",
            cursor: "pointer",
            transition: "color 0.3s",
            textTransform: "uppercase",
          }}
            onMouseEnter={(e) => e.target.style.color = "rgba(240,180,41,0.6)"}
            onMouseLeave={(e) => e.target.style.color = "rgba(245,236,215,0.25)"}
          >
            {l}
          </span>
        ))}
      </div>
    </footer>
  );
}

// ── App ──
export default function KaratakaSite() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{
      background: "var(--nuit)",
      color: "var(--creme)",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <style>{FONTS + CSS}</style>
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
  );
}
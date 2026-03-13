function PlatformsSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0D0805 0%, #150A06 100%)",
        padding: "80px 48px",
        borderTop: "1px solid rgba(240,180,41,0.1)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "rgba(245,236,215,0.4)",
          fontSize: 13,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginBottom: 32,
        }}
      >
        Disponible sur
      </div>
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 60,
        }}
      >
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
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(240,180,41,0.2)",
              borderRadius: 2,
              padding: "12px 28px",
              cursor: "pointer",
              transition: "all 0.3s",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span style={{ fontSize: 20 }}>{p.icon}</span>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                color: "rgba(245,236,215,0.6)",
                fontSize: 13,
                letterSpacing: "0.1em",
              }}
            >
              {p.label}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{ overflow: "hidden", position: "relative", padding: "20px 0" }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(to right, #150A06, transparent)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(to left, #150A06, transparent)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            display: "flex",
            gap: 60,
            width: "max-content",
            animation: "slide 30s linear infinite",
          }}
        >
          {[...Array(2)]
            .flatMap(() => [
              "🌿 Un jeu qui célèbre la culture malgache",
              "🐔 Gérez votre ferme avec sagesse",
              "💰 Chaque Ariary compte",
              "🌄 Les Hautes Terres vous attendent",
              "🎭 Des choix qui façonnent l'histoire",
              "🌧️ Survivez aux saisons difficiles",
            ])
            .map((t, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: "rgba(240,180,41,0.4)",
                  fontSize: 15,
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                {t}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformsSection;

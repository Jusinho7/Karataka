import { useState } from "react";
import s1 from "../assets/s5.jpeg";
import s2 from "../assets/s6.jpeg";
import s3 from "../assets/s9.jpeg";
import s4 from "../assets/s10.jpeg";
import s5 from "../assets/s11.jpeg";
import s6 from "../assets/s14.jpeg";

const sequences = [
  {
    id: "I",
    num: "Séquence 01",
    title: "L'Éveil des Hautes Terres",
    desc: "Les premiers rayons illuminent les pics enneigés. Un monde s'éveille dans le silence.",
    image: s1,
    bg: "linear-gradient(160deg, #1A0830 0%, #3A0050 50%, #2A0040 100%)",
    accent: "rgba(240,180,41,0.12)",
  },
  {
    id: "II",
    num: "Séquence 02",
    title: "Le Feu du Crépuscule",
    desc: "Les flammes du soleil couchant embrasent les vallées. La menace approche de l'horizon.",
    image: s2,
    bg: "linear-gradient(160deg, #200A08 0%, #5A1A00 50%, #3A0A00 100%)",
    accent: "rgba(240,120,20,0.18)",
  },
  {
    id: "III",
    num: "Séquence 03",
    title: "La Nuit des Profondeurs",
    desc: "Sous les étoiles froides, les secrets du lac remontent à la surface.",
    image: s3,
    bg: "linear-gradient(160deg, #04121A 0%, #0A3040 50%, #062030 100%)",
    accent: "rgba(150,220,255,0.1)",
  },
  {
    id: "IV",
    num: "Séquence 04",
    title: "La Forêt des Anciens",
    desc: "Au cœur de la forêt millénaire, les esprits veillent sur les derniers gardiens.",
    image: s4,
    bg: "linear-gradient(160deg, #0E1A06 0%, #1A3A08 50%, #0A2804 100%)",
    accent: "rgba(100,200,80,0.1)",
  },
  {
    id: "V",
    num: "Séquence 05",
    title: "L'Oracle de Bronze",
    desc: "La prophétie gravée dans le métal ancien révèle enfin son terrible dessin.",
    image: s5,
    bg: "linear-gradient(160deg, #18100A 0%, #4A2A08 50%, #321808 100%)",
    accent: "rgba(240,180,41,0.15)",
  },
  {
    id: "VI",
    num: "Séquence 06",
    title: "Le Souffle Final",
    desc: "Entre ciel et abîme, le destin de Karataka se joue dans un dernier souffle.",
    image: s6,
    bg: "linear-gradient(160deg, #0A0A18 0%, #20204A 50%, #181830 100%)",
    accent: "rgba(180,160,255,0.12)",
  },
];

function SequenceCard({ seq }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: "16/9",
        backgroundImage: seq.image ? `url(${seq.image})` : seq.bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Permanent dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,2,16,0.45)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 40%, ${seq.accent} 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "opacity 0.4s",
          opacity: hovered ? 1.5 : 1,
          zIndex: 1,
        }}
      />

      {/* Zoom layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: seq.image ? `url(${seq.image})` : seq.bg,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Sequence tag */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: 14,
          fontFamily: "'Cinzel', serif",
          fontSize: 10,
          letterSpacing: "0.25em",
          color: "#F0B429",
          border: "1px solid rgba(240,180,41,0.35)",
          padding: "3px 9px",
          background: "rgba(13,4,20,0.65)",
          zIndex: 2,
        }}
      >
        {seq.id}
      </div>

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered ? "rgba(8,2,16,0.78)" : "rgba(8,2,16,0)",
          transition: "background 0.35s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "20px 22px",
          zIndex: 3,
        }}
      >
        <div
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.35s ease",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 10,
              letterSpacing: "0.3em",
              color: "#F0B429",
              marginBottom: 6,
              textTransform: "uppercase",
            }}
          >
            {seq.num}
          </div>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 15,
              fontWeight: 700,
              color: "#F5EDD8",
              margin: "0 0 7px",
              lineHeight: 1.2,
            }}
          >
            {seq.title}
          </p>
          <p
            style={{
              fontSize: 12,
              color: "rgba(245,237,216,0.65)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {seq.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function SequencesSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#0D0820",
        padding: "80px 48px",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(193,68,14,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ maxWidth: 900, margin: "0 auto 48px", textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "#F0B429",
            fontSize: 13,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: 14,
            opacity: 0.8,
          }}
        >
          Les Séquences
        </div>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(26px, 5vw, 48px)",
            color: "#F5EDD8",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Karataka — Actes du Film
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 2,
        }}
      >
        {sequences.map((seq) => (
          <SequenceCard key={seq.id} seq={seq} />
        ))}
      </div>
    </section>
  );
}

export default SequencesSection;

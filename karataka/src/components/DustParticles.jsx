import { useRef } from "react";

function DustParticles({ count = 15 }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 2 + Math.random() * 4,
    })),
  );
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {particles.current.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: "10%",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(240,180,41,0.3)",
            animation: `dustFloat ${p.duration}s ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default DustParticles;

import { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);

    // Détecter si on survole un élément cliquable
    const handleOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const cursor = e.target.style.cursor;
      setHovering(tag === "button" || tag === "a" || cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  // Trail qui suit avec un léger délai
  useEffect(() => {
    const timeout = setTimeout(() => setTrail({ x: pos.x, y: pos.y }), 80);
    return () => clearTimeout(timeout);
  }, [pos]);

  return (
    <>
      {/* Curseur principal — feuille */}
      <div style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: clicking ? 20 : hovering ? 28 : 24,
        height: clicking ? 20 : hovering ? 28 : 24,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 999999,
        transition: "width 0.2s, height 0.2s",
        fontSize: clicking ? 16 : hovering ? 22 : 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: hovering ? "brightness(1.4)" : "brightness(1)",
      }}>
        🌿
      </div>

      {/* Trail — point vert */}
      <div style={{
        position: "fixed",
        top: trail.y,
        left: trail.x,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#254F22",
        filter: "brightness(1.8)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 999998,
        opacity: 0.6,
        boxShadow: "0 0 6px #254F22",
        transition: "top 0.08s ease, left 0.08s ease",
      }} />

      {/* CSS pour cacher le curseur natif */}
      <style>{`
        * { cursor: none !important; }
      `}</style>
    </>
  );
}

export default CustomCursor;
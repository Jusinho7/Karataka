import { useEffect, useState } from "react";
import Stars from "./Stars";
import DustParticles from "./DustParticles";

function CTASection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ nom: "", email: "", plateforme: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwS_-7EZYGz7WJoKnR_pSpMshZIbF3bMo1BEx7bD4InBzj4QquS0nsLhOfKpfc1ChS4/exec";

  const handleSubmit = async () => {
    if (!formData.nom || !formData.email || !formData.plateforme) return;
    setLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch (error) {
      alert("Erreur de connexion, réessayez.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nom: "", email: "", plateforme: "" });
    }, 300);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(37,79,34,0.08)",
    border: "1px solid rgba(37,79,34,0.4)",
    borderRadius: 4,
    padding: "12px 16px",
    color: "var(--creme)",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 16,
    outline: "none",
    boxSizing: "border-box",
    transition: "border 0.3s",
  };

  const labelStyle = {
    fontFamily: "'Cinzel', serif",
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#254F22",
    filter: "brightness(1.8)",
    marginBottom: 6,
    display: "block",
  };

  return (
    <>
      <section
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #150A06 0%, #0D0805 50%, #0a2612 100%)",
          padding: isMobile ? "72px 20px" : "120px 48px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Stars count={isMobile ? 20 : 40} />
        <DustParticles count={isMobile ? 6 : 12} />

        {/* Glow central */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? 280 : 500,
            height: isMobile ? 280 : 500,
            background: "radial-gradient(circle, rgba(37,79,34,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Étiquette */}
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "var(--or)",
              fontSize: isMobile ? 12 : 14,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: 20,
              opacity: 0.8,
            }}
          >
            Rejoignez l'Aventure
          </div>

          {/* Titre */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(32px, 7vw, 72px)",
              color: "var(--creme)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: 20,
              textShadow: "0 4px 30px rgba(0,0,0,0.8)",
            }}
          >
            Votre Héritage
            <br />
            <span style={{ color: "var(--or)" }}>Commence Ici</span>
          </h2>

          {/* Citation */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "rgba(245,236,215,0.6)",
              fontSize: isMobile ? 16 : 20,
              maxWidth: 500,
              margin: "0 auto 40px",
              lineHeight: 1.7,
              fontStyle: "italic",
              padding: isMobile ? "0 8px" : 0,
            }}
          >
            « La terre est une richesse. Mais seule la sagesse la transforme en prospérité. »
          </p>

          {/* Boutons */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 14,
                letterSpacing: "0.12em",
                fontWeight: 700,
                color: "#fff",
                background: "linear-gradient(135deg, #254F22 0%, #3d8a38 100%)",
                border: "none",
                padding: isMobile ? "14px 36px" : "18px 52px",
                borderRadius: 2,
                cursor: "pointer",
                textTransform: "uppercase",
                boxShadow: "0 10px 40px rgba(37,79,34,0.3)",
                transition: "all 0.3s",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? 280 : "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = "0 16px 50px rgba(37,79,34,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(37,79,34,0.3)";
              }}
            >
              ▶ Jouer Gratuitement
            </button>

            {/* Bouton Être Notifié */}
            <button
              onClick={() => setShowModal(true)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 14,
                letterSpacing: "0.12em",
                color: "var(--or-pale)",
                background: "transparent",
                border: "1px solid rgba(240,180,41,0.4)",
                padding: isMobile ? "14px 36px" : "18px 52px",
                borderRadius: 2,
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.3s",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? 280 : "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(240,180,41,0.08)";
                e.currentTarget.style.borderColor = "var(--or)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)";
              }}
            >
              Être Notifié
            </button>
          </div>
        </div>
      </section>

      {/* Modal Réservation */}
      {showModal && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100vw", height: "100vh",
            background: "rgba(5,3,2,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(180deg, #0d1a0c 0%, #080d07 100%)",
              border: "1px solid rgba(37,79,34,0.6)",
              borderRadius: 8,
              padding: isMobile ? 24 : 48,
              width: "100%",
              maxWidth: 480,
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(37,79,34,0.15)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Bouton fermer */}
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 16, right: 20,
                background: "none",
                border: "none",
                color: "rgba(37,79,34,0.8)",
                fontSize: 24,
                cursor: "pointer",
                fontWeight: 700,
                filter: "brightness(1.8)",
                lineHeight: 1,
              }}
            >
              ×
            </button>

            {!submitted ? (
              <>
                {/* En-tête */}
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    color: "var(--or)",
                    fontSize: 12,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                    opacity: 0.8,
                  }}>
                    Accès Anticipé
                  </div>
                  <h2 style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--creme)",
                    fontSize: isMobile ? 20 : 26,
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                  }}>
                    Réserver Ma Place
                  </h2>
                  <div style={{
                    width: 40, height: 2,
                    background: "#254F22",
                    margin: "0 auto 12px auto",
                    borderRadius: 2,
                    filter: "brightness(1.5)",
                  }} />
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "rgba(245,236,215,0.5)",
                    fontSize: 15,
                    fontStyle: "italic",
                  }}>
                    Soyez parmi les premiers à vivre l'héritage de Rakoto.
                  </p>
                </div>

                {/* Formulaire */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                  {/* Nom */}
                  <div>
                    <label style={labelStyle}>Nom complet</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#254F22")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(37,79,34,0.4)")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Adresse email</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#254F22")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(37,79,34,0.4)")}
                    />
                  </div>

                  {/* Plateforme */}
                  <div>
                    <label style={labelStyle}>Plateforme préférée</label>
                    <select
                      value={formData.plateforme}
                      onChange={(e) => setFormData({ ...formData, plateforme: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "#254F22")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(37,79,34,0.4)")}
                    >
                      <option value="" style={{ background: "#0d1a0c" }}>Choisir une plateforme</option>
                      <option value="pc" style={{ background: "#0d1a0c" }}>PC / Windows</option>
                      <option value="mac" style={{ background: "#0d1a0c" }}>Mac</option>
                      <option value="mobile" style={{ background: "#0d1a0c" }}>Mobile (Android / iOS)</option>
                      <option value="console" style={{ background: "#0d1a0c" }}>Console</option>
                    </select>
                  </div>

                  {/* Bouton soumettre */}
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.nom || !formData.email || !formData.plateforme || loading}
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 13,
                      letterSpacing: "0.15em",
                      fontWeight: 700,
                      color: "#fff",
                      background: (!formData.nom || !formData.email || !formData.plateforme)
                        ? "rgba(37,79,34,0.3)"
                        : "linear-gradient(135deg, #254F22 0%, #3d8a38 100%)",
                      border: "none",
                      padding: "16px 32px",
                      borderRadius: 4,
                      cursor: (!formData.nom || !formData.email || !formData.plateforme) ? "not-allowed" : "pointer",
                      textTransform: "uppercase",
                      transition: "all 0.3s",
                      boxShadow: "0 8px 30px rgba(37,79,34,0.3)",
                      marginTop: 8,
                    }}
                  >
                    {loading ? "Réservation en cours..." : "✦ Réserver Ma Place"}
                  </button>

                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    color: "rgba(245,236,215,0.25)",
                    fontSize: 12,
                    textAlign: "center",
                  }}>
                    Aucun paiement requis · Notification à la sortie officielle
                  </p>
                </div>
              </>
            ) : (
              /* Message de confirmation */
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{
                  fontSize: 48,
                  marginBottom: 16,
                }}>🌿</div>
                <h2 style={{
                  fontFamily: "'Cinzel', serif",
                  color: "var(--or)",
                  fontSize: isMobile ? 20 : 24,
                  marginBottom: 8,
                  letterSpacing: "0.08em",
                }}>
                  Place Réservée !
                </h2>
                <div style={{
                  width: 40, height: 2,
                  background: "#254F22",
                  margin: "0 auto 20px auto",
                  borderRadius: 2,
                  filter: "brightness(1.5)",
                }} />
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "rgba(245,236,215,0.7)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: 8,
                }}>
                  Merci <strong style={{ color: "var(--or)" }}>{formData.nom}</strong> !<br />
                  Vous serez notifié à <strong style={{ color: "var(--or)" }}>{formData.email}</strong><br />
                  dès la sortie officielle de KARATAKA.
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: "rgba(245,236,215,0.3)",
                  fontSize: 13,
                  marginTop: 24,
                }}>
                  « La patience est la première vertu du paysan. »
                </p>
                <button
                  onClick={handleClose}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "#fff",
                    background: "linear-gradient(135deg, #254F22, #3d8a38)",
                    border: "none",
                    padding: "12px 32px",
                    borderRadius: 4,
                    cursor: "pointer",
                    textTransform: "uppercase",
                    marginTop: 24,
                    boxShadow: "0 8px 20px rgba(37,79,34,0.3)",
                  }}
                >
                  Fermer
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CTASection;
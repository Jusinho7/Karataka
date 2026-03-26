import { useEffect, useState } from "react";
import uiLogo from "../assets/ui_logo.png";
import logoISPM from "../assets/logo_ispm.png";

const modalContenu = {
  "Politique de confidentialité": {
    titre: "Politique de confidentialité",
    texte: `
Dans le cadre du projet scolaire KARATAKA, développé à l'ISPM (Institut Supérieur 
Polytechnique de Madagascar), aucune donnée personnelle n'est collectée via ce site.

Ce site est une vitrine de présentation du jeu KARATAKA, réalisé par l'équipe 
GreenCode dans le cadre d'un projet académique. Aucun formulaire, compte utilisateur 
ou système de tracking n'est mis en place.

Pour toute question, contactez-nous via le formulaire de contact.
    `,
  },
  CGU: {
    titre: "Conditions Générales d'Utilisation",
    texte: `
Ce site web est un projet scolaire réalisé dans le cadre d'un cours à l'ISPM 
(Institut Supérieur Polytechnique de Madagascar).

1. PROPRIÉTÉ INTELLECTUELLE
Tous les contenus présents sur ce site (textes, images, design) sont la propriété 
exclusive de l'équipe GreenCode et sont protégés par le droit d'auteur.

2. UTILISATION
Ce site est destiné à la présentation du jeu KARATAKA. Toute reproduction ou 
utilisation commerciale sans autorisation est interdite.

3. RESPONSABILITÉ
L'équipe GreenCode ne saurait être tenue responsable des éventuelles erreurs 
ou omissions dans les contenus de ce site.
    `,
  },
  Contact: {
    titre: "Nous Contacter",
    texte: `
Vous souhaitez en savoir plus sur le projet KARATAKA ou contacter l'équipe GreenCode ?

🏫 Institut Supérieur Polytechnique de Madagascar (ISPM)
Antananarivo, Madagascar

👥 Équipe GreenCode
Projet réalisé dans le cadre d'un projet scolaire à l'ISPM.

Scannez le QR code ci-dessous pour nous envoyer un email !
    `,
    qrCode: "mailto:lucasjusinho@gmail.com",
  },
};

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [modalOuvert, setModalOuvert] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <footer
        style={{
          background: "linear-gradient(180deg, #050302 0%, #0d1a0c 100%)",
          borderTop: "2px solid #254F22",
          padding: isMobile ? "32px 20px" : "40px 48px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: isMobile ? 16 : 20,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={uiLogo}
            alt="Karataka Logo"
            style={{ width: 24, height: 24, objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              color: "rgba(240,180,41,0.6)",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.15em",
              cursor: "default",
            }}
          >
            KARATAKA
          </span>

          {/* Séparateur */}
          <div style={{
            width: 1,
            height: 20,
            background: "#254F22",
            margin: "0 8px",
          }} />

          {/* Badge ISPM */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <img
              src={logoISPM}
              alt="ISPM"
              style={{ width: 20, height: 20, objectFit: "contain", borderRadius: "50%" }}
            />
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 10,
              color: "#254F22",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              filter: "brightness(1.8)",
              cursor: "default",
            }}>
              ISPM
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "rgba(245,236,215,0.25)",
            fontSize: isMobile ? 12 : 13,
            order: isMobile ? 1 : 0,
            cursor: "default",
          }}
        >
          © 2026 GreenCode · Madagascar · Tous droits réservés
        </div>

        {/* Liens */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? 16 : 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["Politique de confidentialité", "CGU", "Contact"].map((l) => (
            <span
              key={l}
              onClick={() => setModalOuvert(l)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "rgba(245,236,215,0.25)",
                cursor: "pointer",
                transition: "color 0.3s",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#F0B429")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(245,236,215,0.25)")}
            >
              {l}
            </span>
          ))}
        </div>

        {/* Bande verte en bas */}
        <div style={{
          width: "100%",
          marginTop: isMobile ? 8 : 12,
          paddingTop: isMobile ? 16 : 20,
          borderTop: "1px solid rgba(37,79,34,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
        }}>
          <div style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#254F22",
            boxShadow: "0 0 8px #254F22",
          }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: isMobile ? 11 : 12,
            color: "rgba(37,79,34,0.8)",
            letterSpacing: "0.05em",
            filter: "brightness(1.8)",
            cursor: "default",
          }}>
            Projet scolaire · Institut Supérieur Polytechnique de Madagascar
          </span>
          <div style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#254F22",
            boxShadow: "0 0 8px #254F22",
          }} />
        </div>
      </footer>

      {/* Modal */}
      {modalOuvert && (
        <div
          onClick={() => setModalOuvert(null)}
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100vw", height: "100vh",
            background: "rgba(13,8,5,0.85)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#0d1a0c",
              border: "1px solid #254F22",
              borderRadius: 8,
              padding: isMobile ? 24 : 40,
              width: "100%",
              maxWidth: 500,
              color: "var(--creme)",
              boxShadow: "0 8px 40px rgba(37,79,34,0.3)",
              position: "relative",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setModalOuvert(null)}
              style={{
                position: "absolute",
                top: 12, right: 16,
                background: "none",
                border: "none",
                color: "#254F22",
                fontSize: 22,
                cursor: "pointer",
                fontWeight: 700,
                filter: "brightness(1.8)",
              }}
              aria-label="Fermer"
            >
              ×
            </button>

            {/* Titre */}
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              color: "var(--or)",
              fontSize: isMobile ? 16 : 20,
              marginBottom: 8,
              textAlign: "center",
              letterSpacing: "0.1em",
              paddingRight: 24,
            }}>
              {modalContenu[modalOuvert].titre}
            </h2>

            {/* Ligne décorative verte */}
            <div style={{
              width: 40,
              height: 2,
              background: "#254F22",
              margin: "0 auto 24px auto",
              borderRadius: 2,
              filter: "brightness(1.5)",
            }} />

            {/* Contenu texte */}
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              color: "var(--creme)",
              opacity: 0.85,
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}>
              {modalContenu[modalOuvert].texte}
            </div>

            {/* QR Code si Contact */}
            {modalContenu[modalOuvert].qrCode && (
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                marginTop: 24,
                padding: 16,
                background: "rgba(37,79,34,0.1)",
                borderRadius: 8,
                border: "1px solid rgba(37,79,34,0.4)",
              }}>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(modalContenu[modalOuvert].qrCode)}&bgcolor=0d1a0c&color=254F22&format=png`}
                  alt="QR Code Contact"
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 8,
                    border: "2px solid rgba(37,79,34,0.5)",
                  }}
                />
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 11,
                  color: "#254F22",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  filter: "brightness(1.8)",
                }}>
                  lucasjusinho@gmail.com
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
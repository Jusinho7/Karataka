import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import RevealImage from './RevealImage';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryImages = [
    { src: '/ferme-vue.png', title: 'Exploitation Isométrique', desc: 'Vue générale de la ferme et des moulins' },
    { src: '/menu-principal.png', title: 'Menu Principal', desc: 'Écran d’accueil de Karataka' },
    { src: '/interieur-banque.png', title: 'Intérieur de la Banque', desc: 'Exploration et gestion financière' },
    { src: '/histoire-board.png', title: 'Scénario & Objectifs', desc: 'Contexte et mission verte' },
    { src: '/options-ui.png', title: 'Paramètres du Jeu', desc: 'Interface des options et audio' },
    { src: '/loading-screen.png', title: 'Écran de Chargement', desc: 'Charme rustique et pixel-art' }
  ];

  return (
    <section id="gallery" style={{ padding: '100px 0', backgroundColor: '#09100a' }}>
      <div className="container">
        <div className="section-title">
          <span>CAPTURES D'ÉCRAN</span>
          <h2>Galerie Karataka</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImg(img)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                height: '200px',
                border: '1px solid var(--border-color)'
              }}
              className="gallery-item"
            >
              <RevealImage 
                src={img.src} 
                alt={img.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
              />
              <div className="gallery-overlay" style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(13, 22, 15, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                padding: '15px',
                textAlign: 'center'
              }}>
                <ZoomIn color="#4caf50" size={30} style={{ marginBottom: '8px' }} />
                <h4 style={{ fontSize: '1.1rem', color: 'white' }}>{img.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: 2000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }} onClick={() => setSelectedImg(null)}>
          <div style={{ position: 'relative', maxWidth: '900px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImg(null)} 
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImg.src} 
              alt={selectedImg.title} 
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px', border: '1px solid var(--border-color)' }} 
            />
            <div style={{ marginTop: '15px', textAlign: 'center' }}>
              <h3>{selectedImg.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{selectedImg.desc}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item:hover img {
          transform: scale(1.08);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
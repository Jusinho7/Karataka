import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" style={{
      backgroundColor: '#050a06',
      padding: '60px 0 30px',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px' }}>
              <Leaf color="#4caf50" size={26} /> KARATAKA
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Le jeu de simulation agricole axé sur la gestion d'avenir et l'énergie verte.
            </p>
            <br />
              <img
                src="/logoIspm.png"
                alt="Logo ISPM"
                style={{ width: '72px', height: '72px', objectFit: 'contain', margin: '4px 0' }}
              />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              IGGLIA2A, ISPM
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <a href="#hero">Accueil</a>
              <a href="#about">Le jeu</a>
              <a href="#gameplay">Gameplay</a>
              <a href="#green-energy">Énergie verte</a>
              <a href="#gallery">Galerie</a>
              <a href="#business">Acheter le jeu</a>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>Projet</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <a href="#world">L'Univers</a>
              <a href="#team">Équipe</a>
              <span>Version: 1.0.0-Beta</span>
              <a href="mailto:filmina75@gmail.com">Mail</a>
            </div>
          </div>
        </div>

        <div className="footer-copyright" style={{
          textAlign: 'center',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: 'var(--text-muted)',
          fontSize: '0.85rem'
        }}>
          © 2026 KARATAKA — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
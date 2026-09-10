import { useState, useEffect } from 'react';
import { Menu, X, Leaf, Play } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s ease',
      backgroundColor: scrolled ? 'rgba(13, 22, 15, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
      padding: scrolled ? '15px 0' : '25px 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.8rem', fontWeight: '900', color: 'white', letterSpacing: '1px' }}>
          <Leaf color="#4caf50" size={32} />
          KARATAKA
        </a>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', className: 'desktop-menu' }}>
          <a href="#about" style={linkStyle}>Le jeu</a>
          <a href="#gameplay" style={linkStyle}>Gameplay</a>
          <a href="#green-energy" style={linkStyle}>Énergie verte</a>
          <a href="#world" style={linkStyle}>L'Univers</a>
          <a href="#gallery" style={linkStyle}>Galerie</a>
          <a href="#team" style={linkStyle}>Équipe</a>
          <a href="#business" style={linkStyle}>Acheter</a>
          <a href="#community" style={linkStyle}>Communauté</a>
          <a href="#hero" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            <Play size={16} /> Découvrir
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', color: 'white', display: 'none' }} className="mobile-toggle">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--bg-dark)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Le jeu</a>
          <a href="#gameplay" onClick={() => setMenuOpen(false)}>Gameplay</a>
          <a href="#green-energy" onClick={() => setMenuOpen(false)}>Énergie verte</a>
          <a href="#world" onClick={() => setMenuOpen(false)}>L'Univers</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Galerie</a>
          <a href="#team" onClick={() => setMenuOpen(false)}>Équipe</a>
          <a href="#business" onClick={() => setMenuOpen(false)}>Acheter le jeu</a>
          <a href="#community" onClick={() => setMenuOpen(false)}>Communauté</a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

const linkStyle = {
  color: 'var(--text-light)',
  fontWeight: '500',
  transition: 'color 0.3s ease'
};
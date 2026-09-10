import { Play, ChevronDown, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundImage: 'linear-gradient(to bottom, rgba(13, 22, 15, 0.4), rgba(13, 22, 15, 0.95)), url("/menu-principal.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '0 20px'
    }}>
      <div style={{ maxWidth: '800px', zIndex: 2, marginTop: '60px' }}>
        <span style={{
          background: 'rgba(76, 175, 80, 0.2)',
          border: '1px solid var(--primary-light)',
          color: 'var(--accent-gold)',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '1.5px',
          textTransform: 'uppercase'
        }}>
          Simulation & Gestion Éco-Responsable
        </span>

        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: '900',
          margin: '20px 0 10px',
          background: 'linear-gradient(180deg, #ffffff 0%, #a3b899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.1'
        }}>
          KARATAKA
        </h1>

        <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', fontWeight: '600', marginBottom: '20px' }}>
          Build. Manage. Grow.
        </h2>

        <p style={{ fontSize: '1.2rem', color: '#d0dcd0', marginBottom: '40px', maxWidth: '650px', margin: '0 auto 40px' }}>
          Une simulation agricole immersive où chaque décision façonne l'avenir de votre exploitation.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#about" className="btn-primary">
            <Play size={20} /> Découvrir le jeu
          </a>
          <a href="#gameplay" className="btn-secondary">
            <Compass size={20} /> Voir le gameplay
          </a>
        </div>
      </div>

      <a href="#about" style={{
        position: 'absolute',
        bottom: '30px',
        color: 'var(--text-muted)',
        animation: 'bounce 2s infinite',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '0.85rem'
      }}>
        Scroll to explore
        <ChevronDown size={20} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
}
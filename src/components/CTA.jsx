import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section style={{
      padding: '120px 0',
      position: 'relative',
      backgroundImage: `linear-gradient(to right, rgba(13, 22, 15, 0.9), rgba(13, 22, 15, 0.8)), url("${import.meta.env.BASE_URL}loading-screen.png")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '15px' }}>
          Prêt à construire votre exploitation ?
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 35px' }}>
          Entrez dans l'univers de Karataka et construisez la ferme de demain.
        </p>
        <a href="#hero" className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>
          <Rocket size={22} /> Découvrir Karataka
        </a>
      </div>
    </section>
  );
}
import { CheckCircle2 } from 'lucide-react';
import RevealImage from './RevealImage';

export default function About() {
  const points = [
    "Développez et agrandissez votre exploitation familiale",
    "Gérez vos ressources et votre budget avec précision",
    "Investissez dans des technologies renouvelables d'avenir",
    "Prenez des décisions stratégiques sur le marché (Tsena, Banque)"
  ];

  return (
    <section id="about" style={{ padding: '100px 0', backgroundColor: 'var(--bg-dark)' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'center'
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: '-10px',
            background: 'linear-gradient(135deg, var(--primary-light), var(--accent-gold))',
            borderRadius: '24px',
            filter: 'blur(20px)',
            opacity: 0.2
          }}></div>
          <RevealImage 
            src="/ferme-vue.png"
            alt="Vue Isométrique de la ferme Karataka" 
            style={{
              width: '100%',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              objectFit: 'cover'
            }}
          />
        </div>

        <div>
          <span style={{ color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '2px', fontSize: '0.9rem' }}>BIENVENUE À KARATAKA</span>
          <h2 style={{ fontSize: '2.5rem', margin: '15px 0 20px', lineHeight: '1.2' }}>
            Reprenez les commandes d'une exploitation moderne
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '25px' }}>
            Karataka combine la profondeur d'un jeu de gestion stratégique avec une vision engagée pour l'environnement. Cultivez vos terres, interagissez avec le marché local et construisez des infrastructures durables.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {points.map((pt, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 color="#4caf50" size={22} />
                <span style={{ fontWeight: '500' }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
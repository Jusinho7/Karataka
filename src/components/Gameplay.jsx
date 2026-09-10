import { Sprout, Settings, Sun, TrendingUp } from 'lucide-react';

export default function Gameplay() {
  const features = [
    {
      icon: <Sprout size={36} color="#4caf50" />,
      title: "🌱 Cultiver",
      desc: "Développez vos cultures, gérez les saisons et optimisez votre production agricole."
    },
    {
      icon: <Settings size={36} color="#fbc02d" />,
      title: "⚙️ Gérer",
      desc: "Gérez vos ressources financières, vos infrastructures et interagissez avec la Banque."
    },
    {
      icon: <Sun size={36} color="#e67e22" />,
      title: "☀️ Énergie Verte",
      desc: "Installez des éoliennes et des panneaux solaires pour réduire l'empreinte de votre ferme."
    },
    {
      icon: <TrendingUp size={36} color="#2e7d32" />,
      title: "📈 Développer",
      desc: "Commercialisez au marché local (Tsena) et agrandissez progressivement votre domaine."
    }
  ];

  return (
    <section id="gameplay" style={{ padding: '100px 0', backgroundColor: '#09100a' }}>
      <div className="container">
        <div className="section-title">
          <span>FONCTIONNALITÉS CLES</span>
          <h2>Votre ferme. Vos décisions. Votre stratégie.</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '30px'
        }}>
          {features.map((feat, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--bg-card)',
              padding: '35px 25px',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            className="feature-card"
            >
              <div style={{ marginBottom: '20px' }}>{feat.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{feat.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .feature-card:hover {
          transform: translateY(-8px);
          background-color: var(--bg-card-hover);
          border-color: var(--primary-light);
          box-shadow: 0 10px 30px rgba(76, 175, 80, 0.15);
        }
      `}</style>
    </section>
  );
}
import { Sun, Wind, BatteryCharging } from 'lucide-react';
import RevealImage from './RevealImage';

export default function GreenEnergy() {
  return (
    <section id="green-energy" style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, #09100a 0%, #142217 100%)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '2px', fontSize: '0.9rem' }}>
              TRANSITION ÉNERGÉTIQUE
            </span>
            <h2 style={{ fontSize: '2.5rem', margin: '15px 0 20px', lineHeight: '1.2' }}>
              L'agriculture de demain commence aujourd'hui
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '30px' }}>
              Dans Karataka, l'énergie conventionnelle coûte cher et se raréfie. Pour maintenir une exploitation rentable et éco-responsable, vous devez équiper votre ferme de solutions d'énergie renouvelable.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={badgeStyle}>
                <Sun color="#fbc02d" size={28} />
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Panneaux Solaires</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Énergie propre de jour</p>
                </div>
              </div>

              <div style={badgeStyle}>
                <Wind color="#4caf50" size={28} />
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Éoliennes</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Production continue</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <RevealImage 
              src="/histoire-board.png"
              alt="Panneau d'histoire de Karataka sur l'énergie verte" 
              style={{
                width: '100%',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
              }}
            />
            {/* Visual Callout */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              backgroundColor: 'var(--bg-dark)',
              border: '1px solid var(--border-color)',
              padding: '20px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
            }}>
              <BatteryCharging color="#4caf50" size={32} />
              <div>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white' }}>100%</span>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Autonomie Énergétique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const badgeStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--border-color)',
  padding: '15px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
};
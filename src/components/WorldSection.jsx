import { ShoppingBag, Landmark } from 'lucide-react';
import RevealImage from './RevealImage';

export default function WorldSection() {
  return (
    <section id="world" style={{ padding: '100px 0', backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="section-title">
          <span>IMMERSION COMPLÈTE</span>
          <h2>Le Monde de Karataka</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <RevealImage 
              src="/interieur-banque.png"
              alt="Intérieur du bâtiment de la Banque Karataka" 
              style={{
                width: '100%',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.4)'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <Landmark size={30} color="#fbc02d" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>La Banque & Services Financiers</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Visitez les bâtiments administratifs en vue isométrique, gérez vos comptes aux distributeurs automatiques et sécurisez vos investissements.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <ShoppingBag size={30} color="#4caf50" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Le Marché "TSENA"</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Vendez directement vos récoltes fraîches et produits locaux au marché pour financer vos futures extensions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
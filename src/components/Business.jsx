import { useEffect, useState } from 'react';
import { Check, CreditCard, Eye, ShoppingCart, Sparkles, X } from 'lucide-react';
import siteStats from '../data/siteStats.json';
import { createPreorder, getStats, registerVisit } from '../lib/supabase';

export default function Business() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState(siteStats.initialVisitors);
  const [orderCount, setOrderCount] = useState(siteStats.initialOrders);
  const [email, setEmail] = useState('');
  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const benefits = [
    'Accès complet à l’expérience Karataka',
    'Mises à jour et améliorations du projet',
    'Soutien au développement du jeu indépendant'
  ];

  const emailSuggestions = (() => {
    const [localPart, domainPart = ''] = email.split('@');
    if (!localPart || email.includes('@') && email.split('@').length > 2) return [];

    return siteStats.emailDomains
      .filter((domain) => domain !== domainPart.toLowerCase() && domain.startsWith(domainPart.toLowerCase()))
      .map((domain) => `${localPart}@${domain}`);
  })();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsPaymentOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    const loadStats = async () => {
      try {
        const stats = await registerVisit(siteStats.initialVisitors, siteStats.initialOrders);
        setVisitorCount(stats.visitors);
        setOrderCount(stats.orders);
      } catch {
        const stats = await getStats(siteStats.initialVisitors, siteStats.initialOrders);
        setVisitorCount(stats.visitors);
        setOrderCount(stats.orders);
      }
    };
    void loadStats();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openPayment = () => {
    setIsSubmitted(false);
    setSubmitError('');
    setEmail('');
    setShowEmailSuggestions(false);
    setIsPaymentOpen(true);
  };

  const submitOrder = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setSubmitError('');

    try {
      await createPreorder(email);
      const stats = await getStats(siteStats.initialVisitors, siteStats.initialOrders);
      setOrderCount(stats.orders);
      setIsSubmitted(true);
    } catch {
      setSubmitError('Impossible d’enregistrer la précommande pour le moment. Réessayez plus tard.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="business" style={{ padding: '100px 0', background: 'linear-gradient(180deg, #142217 0%, #09100a 100%)' }}>
      <div className="container">
        <div className="section-title">
          <span>ÉDITION DU JEU</span>
          <h2>Construisez votre exploitation</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <Sparkles color="#fbc02d" size={34} />
            <h3 style={{ fontSize: '2rem', margin: '18px 0 15px' }}>Karataka — Édition complète</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '560px' }}>
              Une expérience de simulation agricole où vos choix façonnent une exploitation rentable, moderne et respectueuse de l’environnement.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '28px' }}>
              {benefits.map((benefit) => (
                <div key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Check color="#4caf50" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: '35px',
            textAlign: 'center',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            boxShadow: '0 18px 45px rgba(0, 0, 0, 0.25)'
          }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Prix de lancement</p>
            <strong style={{ display: 'block', fontSize: '2.8rem', color: 'var(--accent-gold)', marginBottom: '8px' }}>50 000 Ar</strong>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '25px' }}>Édition numérique</p>
            <button type="button" onClick={openPayment} className="btn-primary" style={{ width: '100%', justifyContent: 'center', border: 'none' }}>
              <ShoppingCart size={20} /> Précommander le jeu
            </button>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '14px' }}>
              Disponibilité et paiement à confirmer par l’équipe.
            </p>
          </div>
        </div>
      </div>

      {isPaymentOpen && (
        <div
          role="presentation"
          onClick={() => setIsPaymentOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-title"
            onClick={(event) => event.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '32px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.55)'
            }}
          >
            <button
              type="button"
              aria-label="Fermer le formulaire de paiement"
              onClick={() => setIsPaymentOpen(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', padding: '6px', color: 'var(--text-muted)', background: 'transparent' }}
            >
              <X size={22} />
            </button>

            <CreditCard color="#4caf50" size={32} />
            <h3 id="payment-title" style={{ fontSize: '1.7rem', margin: '12px 0 6px' }}>Précommander Karataka</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px' }}>
              Renseignez vos informations pour enregistrer votre précommande.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <div style={statStyle}>
                <Eye color="#4caf50" size={20} />
                <strong>{visitorCount}</strong>
                <span>Visiteurs</span>
              </div>
              <div style={statStyle}>
                <ShoppingCart color="#fbc02d" size={20} />
                <strong>{orderCount}</strong>
                <span>Précommandes</span>
              </div>
            </div>

            {isSubmitted ? (
              <div style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                <Check color="#4caf50" size={34} />
                <h4 style={{ margin: '10px 0 6px' }}>Précommande enregistrée</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Merci. L’équipe vous contactera pour confirmer le paiement.</p>
              </div>
            ) : (
              <form onSubmit={submitOrder} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <label style={labelStyle}>
                  Adresse e-mail
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onFocus={() => setShowEmailSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowEmailSuggestions(false), 150)}
                    placeholder="exemple@gmail.com"
                    autoComplete="email"
                    required
                    style={inputStyle}
                  />
                  {showEmailSuggestions && emailSuggestions.length > 0 && (
                    <div style={suggestionsStyle} role="listbox" aria-label="Suggestions d’adresses e-mail">
                      {emailSuggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => {
                            setEmail(suggestion);
                            setShowEmailSuggestions(false);
                          }}
                          style={suggestionStyle}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </label>

                <label style={labelStyle}>
                  Nom sur la carte
                  <input type="text" required placeholder="Votre nom complet" style={inputStyle} />
                </label>

                <label style={labelStyle}>
                  Numéro de carte
                  <input type="text" inputMode="numeric" required placeholder="0000 0000 0000 0000" maxLength="19" style={inputStyle} />
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <label style={labelStyle}>
                    Expiration
                    <input type="text" required placeholder="MM/AA" maxLength="5" style={inputStyle} />
                  </label>
                  <label style={labelStyle}>
                    CVC
                    <input type="password" inputMode="numeric" required placeholder="123" maxLength="4" style={inputStyle} />
                  </label>
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', border: 'none', marginTop: '6px' }}>
                  <CreditCard size={19} /> {isProcessing ? 'Enregistrement...' : 'Confirmer la précommande'}
                </button>
                {submitError && <p style={{ color: '#ff9d9d', fontSize: '0.8rem', textAlign: 'center' }}>{submitError}</p>}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textAlign: 'center' }}>
                  Démonstration uniquement : aucune donnée bancaire n’est envoyée ni enregistrée.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

const labelStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '7px',
  color: 'var(--text-light)',
  fontSize: '0.85rem',
  fontWeight: '600'
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  color: 'var(--text-light)',
  font: 'inherit'
};

const statStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  padding: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid var(--border-color)',
  borderRadius: '10px'
};

const suggestionsStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: '100%',
  zIndex: 5,
  display: 'flex',
  flexDirection: 'column',
  marginTop: '4px',
  padding: '5px',
  backgroundColor: '#1b2e20',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
};

const suggestionStyle = {
  padding: '9px 10px',
  textAlign: 'left',
  color: 'var(--text-light)',
  backgroundColor: 'transparent',
  borderRadius: '5px',
  font: 'inherit'
};

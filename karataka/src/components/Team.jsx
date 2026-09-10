import {
  BookOpen,
  CheckCircle2,
  Code2,
  Lightbulb,
  Megaphone,
  Monitor,
  Music2,
  Paintbrush
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    { name: "Mosa", role: "Développement", icon: Code2, description: "Conçoit et développe les fonctionnalités principales de Karataka." },
    { name: "Kevin", role: "Game Design", icon: Lightbulb, description: "Imagine les mécaniques de jeu et veille à la cohérence de l'expérience." },
    { name: "Faneva", role: "Graphisme", icon: Paintbrush, description: "Crée l'identité visuelle et les éléments graphiques du projet." },
    { name: "Sitraka", role: "Interface utilisateur", icon: Monitor, description: "Organise les écrans et les interactions pour rendre le jeu agréable à utiliser." },
    { name: "Tendry", role: "Scénario", icon: BookOpen, description: "Développe l'univers, le contexte et les objectifs proposés aux joueurs." },
    { name: "Tsiaro", role: "Son & musique", icon: Music2, description: "Travaille l'ambiance sonore et les effets qui accompagnent l'expérience." },
    { name: "Luckbitha", role: "Tests & qualité", icon: CheckCircle2, description: "Teste le jeu, repère les problèmes et contribue à améliorer sa qualité." },
    { name: "Finoana", role: "Communication", icon: Megaphone, description: "Présente le projet et coordonne sa communication auprès du public." }
  ];
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedMember(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="team" style={{ padding: '100px 0', backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="section-title">
          <span>CRÉATEURS</span>
          <h2>L'équipe derrière Karataka</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '30px'
        }}>
          {teamMembers.map((member) => {
            const RoleIcon = member.icon;

            return (
            <button key={member.name} type="button" onClick={() => setSelectedMember(member)} style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '30px',
              textAlign: 'center',
              color: 'inherit',
              font: 'inherit',
              transition: 'transform 0.25s ease, border-color 0.25s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                border: '2px solid var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <RoleIcon size={34} color="#4caf50" strokeWidth={1.8} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{member.name}</h3>
              <p style={{ color: 'var(--accent-gold)', fontSize: '0.9rem' }}>{member.role}</p>
            </button>
            );
          })}
        </div>
      </div>

      {selectedMember && (() => {
        const RoleIcon = selectedMember.icon;

        return (
          <div
            role="presentation"
            onClick={() => setSelectedMember(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backgroundColor: 'rgba(0, 0, 0, 0.78)'
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-member-title"
              onClick={(event) => event.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                padding: '35px 30px',
                textAlign: 'center',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            >
              <button
                type="button"
                aria-label="Fermer la fenêtre"
                onClick={() => setSelectedMember(null)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  display: 'grid',
                  placeItems: 'center',
                  padding: '6px',
                  color: 'var(--text-muted)',
                  background: 'transparent'
                }}
              >
                <X size={22} />
              </button>
              <RoleIcon size={42} color="#4caf50" strokeWidth={1.8} />
              <p style={{ color: 'var(--accent-gold)', marginTop: '18px', fontSize: '0.9rem' }}>{selectedMember.role}</p>
              <h3 id="team-member-title" style={{ fontSize: '1.6rem', margin: '5px 0 15px' }}>{selectedMember.name}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{selectedMember.description}</p>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
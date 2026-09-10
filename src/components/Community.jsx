import { MessageCircle, X } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  { name: 'X', href: 'https://x.com/Jusinho', icon: X },
  { name: 'Discord', href: 'https://discord.com/channels/@me', icon: MessageCircle },
  { name: 'TikTok', href: 'https://www.tiktok.com/@sisih716', icon: FaTiktok },
  { name: 'Instagram', href: 'https://www.instagram.com/jose_rasul/?hl=en', icon: FaInstagram }
];

export default function Community() {
  return (
    <section
      id="community"
      style={{
        position: 'relative',
        padding: '110px 0',
        backgroundImage: `linear-gradient(rgba(5, 10, 6, 0.78), rgba(5, 10, 6, 0.9)), url("${import.meta.env.BASE_URL}commu.jpeg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <span style={{ color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '2px', fontSize: '0.9rem' }}>
          RESTONS CONNECTÉS
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '14px 0 15px' }}>
          Joindre la communauté
        </h2>
        <p style={{ color: '#d0dcd0', maxWidth: '620px', margin: '0 auto 35px', fontSize: '1.05rem' }}>
          Rejoignez les joueurs et l’équipe Karataka pour suivre le projet, partager vos idées et découvrir les prochaines nouveautés.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          {socialLinks.map(({ name, href, icon: SocialIcon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Rejoindre Karataka sur ${name}`}
              title={name}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '12px 18px',
                color: 'var(--text-light)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                borderRadius: '10px',
                transition: 'background-color 0.25s ease, transform 0.25s ease'
              }}
            >
              <SocialIcon size={20} />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

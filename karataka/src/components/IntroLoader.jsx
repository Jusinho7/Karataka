import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

export default function IntroLoader() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 2200);
    const hideTimer = window.setTimeout(() => setIsHidden(true), 3000);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className={`intro-loader ${isLeaving ? 'intro-loader--leaving' : ''}`} aria-label="Chargement de Karataka">
      <div className="intro-loader__content">
        <div className="intro-loader__logos">
          <img className="intro-loader__ispm" src="/logoIspm.png" alt="Logo ISPM" />
          <span className="intro-loader__divider" aria-hidden="true" />
          <div className="intro-loader__karataka">
            <Leaf size={42} strokeWidth={1.7} />
            <span>KARATAKA</span>
          </div>
        </div>
        <p className="intro-loader__caption">Un projet universitaire L2 · IGGLIA2A · ISPM</p>
        <div className="intro-loader__line" aria-hidden="true"><span /></div>
      </div>
    </div>
  );
}

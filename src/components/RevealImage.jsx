import { useEffect, useRef, useState } from 'react';

export default function RevealImage({ className = '', ...props }) {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    observer.observe(image);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imageRef}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      {...props}
    />
  );
}

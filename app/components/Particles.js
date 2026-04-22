'use client';
import { useMemo } from 'react';

export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 30;
      const duration = 25 + Math.random() * 30;
      const size = 1 + Math.random() * 1.5;
      const opacity = 0.08 + Math.random() * 0.12;
      return { left, delay, duration, size, opacity, key: i };
    });
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.key}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(255,255,255,${p.opacity})`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

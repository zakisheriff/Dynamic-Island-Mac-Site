'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroVisual() {
  const wrapperRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 6, rotateY: -4 });

  useEffect(() => {
    const handleMouse = (e) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rotateX = ((e.clientY - cy) / rect.height) * 10;
      const rotateY = ((e.clientX - cx) / rect.width) * -10;
      setTilt({ rotateX, rotateY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="hero-visual-section">
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-image-wrapper" ref={wrapperRef}>
          <motion.div
            className="hero-image-3d"
            animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img src="/hero.png" alt="Dynamic Island Mac — Music Controls" />
          </motion.div>
          <div className="hero-image-glow" />
        </div>
      </motion.div>
    </div>
  );
}

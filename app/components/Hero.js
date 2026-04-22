'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
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
    <section className="hero">
      <div className="hero-ambient">
        <div className="hero-ambient-orb orb-1" />
        <div className="hero-ambient-orb orb-2" />
        <div className="hero-ambient-orb orb-3" />
      </div>

      <div className="hero-content">
        <motion.div {...fadeUp(0.2)}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">100% Free & Open Source</span>
          </div>
        </motion.div>

        <motion.h1 {...fadeUp(0.35)}>
          Dynamic Island
          <span className="line-2">for your Mac</span>
        </motion.h1>

        <motion.p className="hero-desc" {...fadeUp(0.5)}>
          Transform your MacBook&apos;s notch into a powerful, living interface.
          Music, notifications, timers — all beautifully integrated.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.65)}>
          <a href="#download" className="btn-primary" id="hero-download-btn">
            <Download size={18} strokeWidth={2} />
            <span>Download for Mac</span>
          </a>
          <a href="#features" className="btn-ghost">
            Explore Features
            <ChevronDown size={16} strokeWidth={2} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
    </section>
  );
}

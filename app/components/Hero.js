'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-ambient">
        <div className="hero-ambient-orb orb-1" />
        <div className="hero-ambient-orb orb-2" />
        <div className="hero-ambient-orb orb-3" />
      </div>

      <div className="hero-content">
        <motion.h1 {...fadeUp(0.35)}>
          Dynamic Island
          <span className="line-2">for your Mac</span>
        </motion.h1>

        <motion.p className="hero-desc" {...fadeUp(0.5)}>
          Transform your MacBook&apos;s notch into a powerful, living interface.
          Music, notifications, timers — all beautifully integrated.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.65)}>
          <a href="/Dynamic Island Mac by The Atom.dmg" download className="btn-primary" id="hero-download-btn">
            <Download size={18} strokeWidth={2} />
            <span>Download Free</span>
          </a>
          <a href="#features" className="btn-secondary">
            <span>Learn More</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

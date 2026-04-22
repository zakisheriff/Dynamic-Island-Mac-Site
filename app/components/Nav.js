'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="nav-logo">
        <img src="/Logo-Dynamic.png" alt="Dynamic Island Mac" className="nav-logo-img" />
        <span className="nav-logo-text">
          <span className="nav-brand">Dynamic Island Mac</span>
          <a href="https://www.theatom.lk" target="_blank" rel="noopener noreferrer" className="nav-by">by The Atom</a>
        </span>
      </a>

      <div className="nav-center">
        <a href="#features">Features</a>
        <a href="#showcase">Showcase</a>
        <a href="#download">Download</a>
        <a href="https://www.theatom.lk" target="_blank" rel="noopener noreferrer">The Atom</a>
      </div>

      <a href="#download" className="nav-cta">Download Free</a>
    </motion.nav>
  );
}

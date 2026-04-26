'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const reveal = {
    initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true },
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <footer className="footer-section">
      <motion.div 
        className="footer-container"
        {...reveal}
      >
        <div className="footer-top">
          <div className="footer-brand-area">
            <motion.h1 
              className="footer-big-title"
              initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Dynamic Island
            </motion.h1>
          </div>

          <div className="footer-nav-grid">
            <div className="footer-nav-col">
              <a href="/Dynamic%20Island%20Mac%20by%20The%20Atom.dmg" download="Dynamic Island Mac by The Atom.dmg">Download</a>
              <a href="#features">Features</a>
              <a href="#showcase">Showcase</a>
              <a href="https://www.theatom.lk" target="_blank" rel="noopener noreferrer">The Atom</a>
            </div>
            <div className="footer-nav-col">
              <a href="https://www.theatom.lk" target="_blank" rel="noopener noreferrer">Blog</a>
              <a href="mailto:connect.theatom@gmail.com">Contact</a>
              <a href="https://www.theatom.lk/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
              <a href="https://www.theatom.lk/terms" target="_blank" rel="noopener noreferrer">Terms</a>
            </div>
          </div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="footer-legal">
            <a href="https://www.theatom.lk" target="_blank" rel="noopener noreferrer" className="footer-atom-logo">
              The Atom
            </a>
          </div>
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()}</span>
            <a href="https://www.theatom.lk/privacy">Privacy</a>
            <a href="https://www.theatom.lk/terms">Terms</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

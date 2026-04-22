'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-area">
            <h1 className="footer-big-title">Dynamic Island</h1>
          </div>

          <div className="footer-nav-grid">
            <div className="footer-nav-col">
              <a href="/Dynamic Island Mac by The Atom.dmg" download>Download</a>
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

        <div className="footer-bottom">
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
        </div>
      </div>
    </footer>
  );
}

'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-left">
        © {new Date().getFullYear()} <a href="https://www.theatom.lk" target="_blank" rel="noopener noreferrer">The Atom</a>. All rights reserved.
      </div>
      <div className="footer-links">
        <a href="https://www.theatom.lk" target="_blank" rel="noopener noreferrer">The Atom</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:hello@theatom.lk">Contact</a>
        <a href="https://www.theatom.lk/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
      </div>
    </motion.footer>
  );
}

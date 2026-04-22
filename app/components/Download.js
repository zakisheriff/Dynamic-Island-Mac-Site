'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Download as DownloadIcon, Sparkles } from 'lucide-react';

export default function Download() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const featureList = [
    'Full Dynamic Island experience',
    'Music controls & Now Playing',
    'Smart notifications from all apps',
    'Timers, calendar & battery alerts',
    'Drag & Drop quick actions',
    'FaceTime & iPhone call alerts',
    'Regular updates & new features',
    'Built with love by The Atom',
  ];

  return (
    <section className="download-section" id="download" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-eyebrow">Pricing</div>
        <h2 className="section-heading">
          Completely free.<br />No catch.
        </h2>
        <p className="section-desc">
          We believe great software should be accessible to everyone.
          Dynamic Island Mac is and always will be 100% free.
        </p>
      </motion.div>

      <motion.div
        className="download-card"
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="download-badge">
          <Sparkles size={12} strokeWidth={1.5} />
          Free Forever
        </div>
        <div className="download-price">$0</div>
        <div className="download-price-note">No subscriptions. No in-app purchases. Ever.</div>

        <ul className="download-features">
          {featureList.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="download-check">
                <Check size={12} strokeWidth={2.5} />
              </span>
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#"
          className="download-btn"
          id="download-dmg-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <DownloadIcon size={18} strokeWidth={2} />
          Download .dmg — Free
        </motion.a>
      </motion.div>
    </section>
  );
}

'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="cta-section" ref={ref}>
      <div className="cta-glow" />

      <motion.h2
        className="cta-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        Ready to transform<br />
        your <span className="gradient-text">Mac experience</span>?
      </motion.h2>

      <motion.p
        className="cta-desc"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        Join thousands of Mac users who turned their notch into something extraordinary.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.a
          href="#download"
          className="btn-primary"
          id="cta-download-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download size={18} strokeWidth={2} />
          <span>Download Now — It&apos;s Free</span>
        </motion.a>
      </motion.div>
    </section>
  );
}

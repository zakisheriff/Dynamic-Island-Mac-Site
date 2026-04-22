'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Music, Bell, Timer, Battery } from 'lucide-react';

const listItems = [
  { icon: Music, text: 'Now Playing — Lavender Haze' },
  { icon: Bell, text: '3 new notifications' },
  { icon: Timer, text: 'Timer — 04:32 remaining' },
  { icon: Battery, text: 'Battery — 87% Charged' },
];

export default function Showcase() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 4, y: -6 });

  useEffect(() => {
    const handleMouse = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const x = ((e.clientY - cy) / rect.height) * 8;
      const y = ((e.clientX - cx) / rect.width) * -8;
      setTilt({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="showcase-section" id="showcase" ref={sectionRef}>
      <div className="showcase-grid">
        <motion.div
          className="showcase-visual"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div ref={cardRef}>
            <motion.div
              className="showcase-card-3d"
              animate={{ rotateX: tilt.x, rotateY: tilt.y }}
              transition={{ type: 'spring', stiffness: 60, damping: 18 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="showcase-notch-demo" />
              <div className="showcase-list">
                {listItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      className="showcase-list-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="showcase-list-icon">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                      <span className="showcase-list-text">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="showcase-content"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-eyebrow">Showcase</div>
          <h2 className="section-heading">
            Your notch,<br /><span className="gradient-text">reimagined</span>
          </h2>
          <p className="section-desc">
            The Dynamic Island turns your unused notch into the most useful part of
            your screen. Hover to expand, click to interact. It works seamlessly
            in the background while you focus on what matters.
          </p>
          <div className="showcase-tags">
            {['Hover to Expand', 'Always Visible', 'Native Performance', 'Zero Config'].map((tag, i) => (
              <motion.span
                key={i}
                className="showcase-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

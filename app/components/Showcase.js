'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, SkipBack, SkipForward, Radio } from 'lucide-react';

export default function Showcase() {
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
    <section className="showcase-section" id="showcase">
      <div className="showcase-grid">
        <motion.div
          className="showcase-visual"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div ref={cardRef}>
            <motion.div
              className="player-card-3d"
              animate={{ rotateX: tilt.x, rotateY: tilt.y }}
              transition={{ type: 'spring', stiffness: 60, damping: 18 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* iOS Music Player UI */}
              <div className="player-header">
                <img 
                  src="/JVKE_-_Golden_Hour.png" 
                  alt="Album Art" 
                  className="player-album-art" 
                />
                <div className="player-info">
                  <h4 className="player-title">Golden Hour</h4>
                  <p className="player-artist">JVKE</p>
                </div>
                <div className="player-more">
                   <div className="dot-group"><span></span><span></span><span></span></div>
                </div>
              </div>

              <div className="player-progress-container">
                <div className="player-time">0:05</div>
                <div className="player-progress-bar">
                  <div className="player-progress-fill" style={{ width: '15%' }} />
                </div>
                <div className="player-time">-3:08</div>
              </div>

              <div className="player-controls">
                <SkipBack fill="white" size={32} />
                <Play fill="white" size={38} className="play-icon" />
                <SkipForward fill="white" size={32} />
                <div className="player-airplay">
                  <Radio size={20} strokeWidth={2.5} />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="showcase-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
            {['Music Controls', 'Live Activities', 'System Alerts', 'Zero Lag'].map((tag, i) => (
              <motion.span
                key={i}
                className="showcase-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
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

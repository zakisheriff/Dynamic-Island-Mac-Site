'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Music, Bell, Timer, Phone, FolderInput, Battery } from 'lucide-react';

const features = [
  { icon: Music, title: 'Music Controls', desc: 'See what\'s playing and control playback. Apple Music, Spotify, and more.', span: false },
  { icon: Bell, title: 'Smart Notifications', desc: 'Real-time alerts from iMessages, WhatsApp, Slack, Telegram — every app.', span: true },
  { icon: Timer, title: 'Timers & Stopwatch', desc: 'Set timers that live in your Dynamic Island. Always visible, never in the way.', span: false },
  { icon: Phone, title: 'Call Alerts', desc: 'FaceTime and iPhone call alerts appear beautifully with caller info.', span: false },
  { icon: FolderInput, title: 'Drag & Drop', desc: 'Drag files to the notch for quick actions — share, convert, compress.', span: false },
  { icon: Battery, title: 'Battery & System', desc: 'Monitor battery, charging status, and system performance at a glance.', span: true },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      className={`bento-card ${feature.span ? 'span-2' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bento-icon">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.desc}</p>
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section className="section" id="features">
      <motion.div
        className="section-header"
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-eyebrow">Features</div>
        <h2 className="section-heading">
          Everything you need,<br />right at the notch
        </h2>
        <p className="section-desc">
          A complete Dynamic Island experience purpose-built for macOS. No compromises, no subscriptions.
        </p>
      </motion.div>

      <div className="bento-grid">
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} index={i} />
        ))}
      </div>
    </section>
  );
}

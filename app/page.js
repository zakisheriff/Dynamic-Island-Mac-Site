'use client';
import { useEffect } from 'react';
import Hero from './components/Hero';
import HeroVisual from './components/HeroVisual';
import MarqueeSection from './components/MarqueeSection';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Download from './components/Download';
import Footer from './components/Footer';
import Particles from './components/Particles';

export default function Home() {
  return (
    <>
      <Particles />
      <Hero />
      <HeroVisual />
      <MarqueeSection />
      <Features />
      <Showcase />
      <Download />
      <Footer />
    </>
  );
}

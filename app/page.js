'use client';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
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
      <Nav />
      <Hero />
      <MarqueeSection />
      <Features />
      <Showcase />
      <Download />
      <Footer />
    </>
  );
}

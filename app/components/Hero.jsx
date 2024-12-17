'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Logo from './Logo';
// HeroButton Component
const HeroButton = ({ href, children }) => {
  return (
    <Link 
      href={href}
      className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 
                 text-white px-8 py-3 rounded-full text-lg
                 hover:opacity-90 transition-all duration-300
                 hover:scale-105 transform"
    >
      {children}
    </Link>
  );
};

// Main HeroSection Component
const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".hero-logo", { 
      scale: 0.5, 
      opacity: 0, 
      duration: 1, 
      ease: "back.out(1.7)" 
    })
    .from(".hero-title", { 
      y: 50, 
      opacity: 0, 
      duration: 1, 
      ease: "power3.out" 
    }, "-=0.5")
    .from(".hero-description", { 
      y: 30, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.5")
    .from(".hero-button", { 
      y: 20, 
      opacity: 0, 
      duration: 0.5 
    }, "-=0.3");
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Animated Logo */}
        <div className="hero-logo mb-8">
          <Logo width="120" height="120" className="mx-auto" />
        </div>

        {/* Hero Content */}
        <h1 className="hero-title text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Transform Your Sound
        </h1>
        <p className="hero-description text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8">
          Create stunning audio transformations with pitch shifting, reverb, and tempo controls.
        </p>
        <div className="hero-button">
          <HeroButton href="/create">Start Creating</HeroButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
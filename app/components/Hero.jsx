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

const HeroSection = () => {
  useEffect(() => {
    // Create a matchMedia instance for desktop
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    // Create the animation timeline
    const createTimeline = () => {
      const tl = gsap.timeline();
      
      // Initial fade in and scale for logo
      tl.from(".hero-logo", { 
        scale: 0, 
        opacity: 0, 
        duration: 1.2, 
        ease: "elastic.out(1.2, 0.5)",
        rotation: 360
      })
      
      // Split text animation for title
      .from(".hero-title", { 
        y: mediaQuery.matches ? 100 : 50, // Larger movement on desktop
        opacity: 0, 
        duration: 1, 
        ease: "power3.out",
      }, "-=0.5")
      
      // Description fade in
      .from(".hero-description", { 
        y: mediaQuery.matches ? 50 : 30, // Adjust based on screen size
        opacity: 0, 
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.7")
      
      // Button animation
      .from(".hero-button", { 
        y: mediaQuery.matches ? 30 : 20,
        opacity: 0, 
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.5")
      
      // Background blobs animation
      .from(".bg-blob", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
      }, "-=1");
      
      return tl;
    };

    // Create the initial timeline
    let tl = createTimeline();
    
    // Update timeline when screen size changes
    const handleResize = () => {
      tl.kill();
      tl = createTimeline();
    };
    
    mediaQuery.addEventListener('change', handleResize);
    
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-blob absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="bg-blob absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="bg-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/10 to-indigo-900/10 blur-3xl" />
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

export default HeroSection;
'use client'
import React, { useEffect, useRef } from 'react';

export default function ModesSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const gsap = window.gsap;
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

      cardsRef.current.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    };

    document.body.appendChild(script);
  }, []);

  const modes = [
    // Slowed Category
    {
      name: "Slowed to Perfection ✨",
      description: "That dreamy, ethereal vibe",
      settings: { speed: 0.75, pitch: 0, reverb: 0.2 },
      category: "slowed"
    },
    {
      name: "Underwater Dreams 🌊",
      description: "Deep slowed with immersive feel",
      settings: { speed: 0.65, pitch: -2, reverb: 0.3 },
      category: "slowed"
    },
    {
      name: "Memory Lane 🌙",
      description: "Classic slowed nostalgia",
      settings: { speed: 0.70, pitch: -1, reverb: 0.25 },
      category: "slowed"
    },
    {
      name: "Drifting Away 💫",
      description: "Ultra slowed dreamscape",
      settings: { speed: 0.60, pitch: -3, reverb: 0.35 },
      category: "slowed"
    },
    {
      name: "Late Night Vibes 🌆",
      description: "Perfect for midnight drives",
      settings: { speed: 0.72, pitch: -2, reverb: 0.28 },
      category: "slowed"
    },
    {
      name: "Ocean Floor 🌊",
      description: "Deep underwater atmosphere",
      settings: { speed: 0.55, pitch: -4, reverb: 0.4 },
      category: "slowed"
    },

    // Pitched Up Category
    {
      name: "Pitched to Perfection ⚡️",
      description: "Crystal clear elevation",
      settings: { speed: 1.25, pitch: 4, reverb: 0.1 },
      category: "pitched"
    },
    {
      name: "Star Chaser 🌠",
      description: "High energy acceleration",
      settings: { speed: 1.30, pitch: 6, reverb: 0.15 },
      category: "pitched"
    },
    {
      name: "Sugar Rush 🍬",
      description: "Sweet sonic boost",
      settings: { speed: 1.35, pitch: 5, reverb: 0.1 },
      category: "pitched"
    },
    {
      name: "Cosmic Flight ✨",
      description: "Celestial pitch perfection",
      settings: { speed: 1.28, pitch: 7, reverb: 0.2 },
      category: "pitched"
    },
    {
      name: "Hyper Drive 🚀",
      description: "Maximum energy boost",
      settings: { speed: 1.40, pitch: 8, reverb: 0.05 },
      category: "pitched"
    },
    {
      name: "Crystal Kingdom 💎",
      description: "Sparkling clarity boost",
      settings: { speed: 1.32, pitch: 6, reverb: 0.12 },
      category: "pitched"
    },

    // Reverb Enhanced
    {
      name: "Echo Chamber 🕊️",
      description: "Slowed + reverb magic",
      settings: { speed: 0.75, pitch: -1, reverb: 0.5 },
      category: "reverb"
    },
    {
      name: "Ethereal Dreams 💭",
      description: "Heavenly atmosphere",
      settings: { speed: 0.72, pitch: -2, reverb: 0.6 },
      category: "reverb"
    },
    {
      name: "Cathedral Vibes 🕯️",
      description: "Massive space energy",
      settings: { speed: 0.70, pitch: -1, reverb: 0.7 },
      category: "reverb"
    },
    {
      name: "Cloud Walking 🌥️",
      description: "Floating in reverb",
      settings: { speed: 0.78, pitch: 0, reverb: 0.55 },
      category: "reverb"
    },

    // Experimental
    {
      name: "Diamond Cut 💎",
      description: "Ultra clear + light reverb",
      settings: { speed: 1.20, pitch: 3, reverb: 0.15 },
      category: "crystal"
    },
    {
      name: "Astral Plane 🌌",
      description: "Otherworldly experience",
      settings: { speed: 0.68, pitch: -2, reverb: 0.45 },
      category: "reverb"
    },
    {
      name: "8D Audio ⚡️",
      description: "Spatial audio enhanced",
      settings: { speed: 1.0, pitch: 0, reverb: 0.4 },
      category: "spatial"
    },
    {
      name: "Time Traveler 🕰️",
      description: "Retro-futuristic blend",
      settings: { speed: 0.85, pitch: 2, reverb: 0.3 },
      category: "crystal"
    }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'slowed': return 'bg-purple-500/10 text-purple-300';
      case 'pitched': return 'bg-blue-500/10 text-blue-300';
      case 'reverb': return 'bg-emerald-500/10 text-emerald-300';
      case 'crystal': return 'bg-pink-500/10 text-pink-300';
      case 'spatial': return 'bg-yellow-500/10 text-yellow-300';
      default: return 'bg-gray-500/10 text-gray-300';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Choose Your Vibe ✨
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your audio with these carefully crafted presets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, index) => (
            <div
              key={mode.name}
              ref={el => cardsRef.current[index] = el}
              className="rounded-xl border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors overflow-hidden p-6"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(mode.category)}`}>
                {mode.category.charAt(0).toUpperCase() + mode.category.slice(1)}
              </span>
              
              <h3 className="text-xl font-semibold mb-2 text-white">{mode.name}</h3>
              <p className="text-gray-400 mb-4">{mode.description}</p>

              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex flex-col gap-1">
                  <span>Speed</span>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500/50 rounded-full"
                      style={{ width: `${mode.settings.speed * 100}%` }}
                    />
                  </div>
                  <span className="text-right text-xs text-gray-500">{mode.settings.speed}x</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span>Pitch</span>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500/50 rounded-full"
                      style={{ width: `${((mode.settings.pitch + 6) / 12) * 100}%` }}
                    />
                  </div>
                  <span className="text-right text-xs text-gray-500">
                    {mode.settings.pitch > 0 ? '+' : ''}{mode.settings.pitch}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span>Reverb</span>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500/50 rounded-full"
                      style={{ width: `${mode.settings.reverb * 100}%` }}
                    />
                  </div>
                  <span className="text-right text-xs text-gray-500">{Math.round(mode.settings.reverb * 100)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
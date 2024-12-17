// src/components/Modes/ModesSection.jsx
export default function ModesSection() {
    const modes = [
      {
        name: "Slowed",
        description: "Classic slowed down effect",
        settings: { speed: 0.75, pitch: 0 }
      },
      {
        name: "Nightcore",
        description: "Sped up with higher pitch",
        settings: { speed: 1.25, pitch: 4 }
      },
      {
        name: "Deep",
        description: "Slowed with lower pitch",
        settings: { speed: 0.8, pitch: -3 }
      },
      {
        name: "Custom",
        description: "Adjust to your liking",
        settings: { speed: 1, pitch: 0 }
      }
    ];
  
    return (
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modes.map((mode) => (
              <div 
                key={mode.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{mode.name}</h3>
                <p className="text-white/70 mb-4">{mode.description}</p>
                <div className="text-sm text-white/50">
                  Speed: {mode.settings.speed}x<br />
                  Pitch: {mode.settings.pitch > 0 ? '+' : ''}{mode.settings.pitch}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
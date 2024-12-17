export default function BenefitsSection() {
    const benefits = [
      {
        title: "Quick Processing",
        description: "Transform your audio in seconds with professional-grade quality",
        icon: "⚡"
      },
      {
        title: "Simple Export",
        description: "Download your tracks instantly in high-quality format",
        icon: "💫"
      },
      {
        title: "Perfect Results",
        description: "Achieve the exact sound you're looking for with precision controls",
        icon: "✨"
      }
    ];
  
    return (
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Why Choose Utooni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
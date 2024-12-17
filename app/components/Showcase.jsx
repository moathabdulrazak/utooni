// src/components/Showcase.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function ShowcaseSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-90" />
          <div className="relative z-10 py-20 px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Sound?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who use Utooni for their audio transformations.
            </p>
            <Link 
              href="/create"
              className="inline-block bg-black/30 hover:bg-black/40 text-white px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm transition-all duration-300"
            >
              Start Creating
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
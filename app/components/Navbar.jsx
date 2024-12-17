'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
const NavLink = ({ href, children }) => {
  return (
    <Link 
      href={href}
      className="text-white/70 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
};

const NavButton = ({ href, children }) => {
  return (
    <Link 
      href={href}
      className="bg-gradient-to-r from-indigo-500 to-purple-500 
                 text-white px-4 py-2 rounded-full 
                 hover:opacity-90 transition-opacity"
    >
      {children}
    </Link>
  );
};

const MobileMenu = ({ isOpen }) => {
  return (
    <div className={`
      md:hidden absolute top-full left-0 right-0 
      bg-black/90 backdrop-blur-md
      transition-all duration-300 origin-top
      ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
    `}>
      <div className="px-6 py-4 space-y-4">
        <Link href="/features" className="block text-white/70 hover:text-white">
          Features
        </Link>
        <Link href="/examples" className="block text-white/70 hover:text-white">
          Examples
        </Link>
        <Link href="/pricing" className="block text-white/70 hover:text-white">
          Pricing
        </Link>
        <Link 
          href="/create"
          className="block bg-gradient-to-r from-indigo-500 to-purple-500 
                     text-white px-4 py-2 rounded-full text-center"
        >
          Start Creating
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Logo />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              utooni.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/examples">Examples</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavButton href="/create">Start Creating</NavButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>

        <MobileMenu isOpen={mobileMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar
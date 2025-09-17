import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Workshops', id: 'workshops' },
    { label: 'Events', id: 'events' },
    { label: 'Speakers', id: 'speakers' },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'Gallery', id: 'gallery' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`} style={{ backgroundColor: isScrolled ? '#0a0a0a95' : 'transparent' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 gradient-pink flex items-center justify-center">
              <span className="text-white font-black text-2xl">E</span>
            </div>
            <div>
              <h1 className="font-black text-xl text-white">
                E-Summit 2026
              </h1>
              <p className="text-sm" style={{ color: '#249f9c' }}>
                IIIT Bhubaneswar
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-medium transition-colors text-white hover:text-[#ed1b76] relative group"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#249f9c] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => window.open('/brochure.pdf', '_blank')}
              className="btn-secondary gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Brochure</span>
            </button>
          </div>

          {/* Register Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => scrollToSection('register')}
              className="btn-primary px-6 py-2.5 font-bold glow-pink"
            >
              <span>Register Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden backdrop-blur-md border-t" style={{ backgroundColor: '#0a0a0a95', borderColor: '#2a2a2a' }}>
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-white hover:text-[#ed1b76] transition-colors"
                >
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <button className="w-full btn-secondary gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download Brochure</span>
                </button>
                <button className="w-full btn-primary">
                  <span>Register Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
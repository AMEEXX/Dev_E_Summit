
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: '#0a0a0a', opacity: 0.85 }} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#ed1b76', opacity: 0.1 }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#249f9c', opacity: 0.1 }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: '#f44786', opacity: 0.05 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight">
              E-Summit
              <span className="block gradient-pink bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #ed1b76, #f44786)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                2026
              </span>
            </h1>
            <div className="h-2 w-32 mx-auto gradient-pink" />
            <h2 className="text-2xl lg:text-4xl font-bold text-white leading-relaxed uppercase tracking-wider">
              Ignite Your Entrepreneurial Journey
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed">
            Join three days of innovation, mentorship, and networking at India's premier entrepreneurship summit
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button 
              onClick={() => scrollToSection('register')}
              className="btn-primary font-black py-4 px-8 text-lg glow-pink group flex items-center gap-2"
            >
              <span>Get Your Pass</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="btn-secondary font-bold py-4 px-8 text-lg group flex items-center gap-2"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Highlights</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#249f9c80' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#249f9c80' }} />
        </div>
      </div>
    </section>
  );
}

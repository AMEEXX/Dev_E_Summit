import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Workshops', id: 'workshops' },
    { label: 'Events', id: 'events' },
    { label: 'Speakers', id: 'speakers' },
    { label: 'Gallery', id: 'gallery' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: '#249f9c' },
    { icon: Twitter, href: '#', color: '#249f9c' },
    { icon: Instagram, href: '#', color: '#ed1b76' },
    { icon: Linkedin, href: '#', color: '#249f9c' },
    { icon: Youtube, href: '#', color: '#ed1b76' }
  ];

  return (
    <footer className="text-white border-t-4" style={{ backgroundColor: '#000000', borderColor: '#ed1b76' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 gradient-pink rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-3xl">E</span>
              </div>
              <div>
                <h3 className="text-2xl font-black" style={{ color: '#ed1b76' }}>E-Summit 2026</h3>
                <p style={{ color: '#249f9c' }}>IIIT Bhubaneswar</p>
              </div>
            </div>
            
            <p className="text-white leading-relaxed mb-6 max-w-md">
              India's premier entrepreneurship summit bringing together innovators, 
              entrepreneurs, and industry leaders to shape the future of business.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: '#249f9c' }} />
                <a href="mailto:esummit@iiit-bh.ac.in" className="text-white hover:text-[#249f9c] transition-colors">
                  esummit@iiit-bh.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: '#249f9c' }} />
                <a href="tel:+917894561230" className="text-white hover:text-[#249f9c] transition-colors">
                  +91 78945 61230
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" style={{ color: '#249f9c' }} />
                <span className="text-white">
                  IIIT Bhubaneswar, Gothapatna, Bhubaneswar, Odisha 751003
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-6" style={{ color: '#ed1b76' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-[#249f9c] transition-colors block font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a 
                  href="/brochure.pdf" 
                  target="_blank"
                  className="text-white hover:text-[#249f9c] transition-colors font-medium"
                >
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-xl font-black mb-6" style={{ color: '#ed1b76' }}>Connect With Us</h4>
            
            {/* Social Media */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:glow-pink"
                  style={{ backgroundColor: '#1a1a1a' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = social.color}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1a1a1a'}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-white mb-4">Stay updated with latest announcements</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#249f9c] transition-colors rounded-lg"
                  style={{ backgroundColor: '#1a1a1a', borderColor: '#333333' }}
                />
                <button className="btn-primary px-4 py-2 font-bold rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8" style={{ borderColor: '#333333' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm" style={{ color: '#666666' }}>
              © 2026 E-Summit, IIIT Bhubaneswar. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white hover:text-[#249f9c] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-[#249f9c] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white hover:text-[#249f9c] transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
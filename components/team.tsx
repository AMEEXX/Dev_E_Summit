import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, Linkedin, Twitter } from 'lucide-react';

export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamMembers = [
    {
      id: 1,
      name: 'Arjun Sharma',
      role: 'Fest Head',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Leading E-Summit 2026 with vision and passion for entrepreneurship',
      email: 'arjun.sharma@iiit-bh.ac.in',
      linkedin: '#',
      twitter: '#',
      year: 'Final Year, CSE'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Secretary',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Coordinating all summit activities and ensuring seamless execution',
      email: 'priya.patel@iiit-bh.ac.in',
      linkedin: '#',
      twitter: '#',
      year: 'Third Year, ECE'
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      role: 'PR Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Building relationships and managing public communications',
      email: 'rohit.kumar@iiit-bh.ac.in',
      linkedin: '#',
      twitter: '#',
      year: 'Third Year, IT'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Sponsorship Lead',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Securing partnerships and managing sponsor relationships',
      email: 'sneha.reddy@iiit-bh.ac.in',
      linkedin: '#',
      twitter: '#',
      year: 'Final Year, CSE'
    },
    {
      id: 5,
      name: 'Vikash Singh',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Managing all technical aspects and digital infrastructure',
      email: 'vikash.singh@iiit-bh.ac.in',
      linkedin: '#',
      twitter: '#',
      year: 'Third Year, CSE'
    },
    {
      id: 6,
      name: 'Kavya Nair',
      role: 'Events Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Orchestrating competitions and workshop experiences',
      email: 'kavya.nair@iiit-bh.ac.in',
      linkedin: '#',
      twitter: '#',
      year: 'Third Year, ECE'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, teamMembers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="team" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#111111' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(237, 27, 118, 0.1) 35px,
              rgba(237, 27, 118, 0.1) 70px
            )
          `
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: '#ed1b76' }}>
            Meet Our Team
          </h2>
          <div className="h-1 w-24 mx-auto gradient-pink mb-4" />
          <p className="text-xl text-white max-w-3xl mx-auto">
            The passionate minds behind E-Summit 2026, working tirelessly to create an unforgettable experience
          </p>
        </div>

        {/* Main Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Image Display */}
          <div className="relative w-full max-w-4xl mx-auto mb-12">
            <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
              <div className="relative h-[500px] lg:h-[600px]">
                {/* Background Image with Parallax Effect */}
                <div 
                  className="absolute inset-0 transition-all duration-700 ease-in-out transform"
                  style={{ 
                    transform: `translateX(${(currentSlide * -10)}px)`,
                    background: `linear-gradient(135deg, rgba(237, 27, 118, 0.1), rgba(36, 159, 156, 0.1))`
                  }}
                />

                {/* Main Image */}
                <img
                  src={teamMembers[currentSlide].image}
                  alt={teamMembers[currentSlide].name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                  <div className="max-w-2xl">
                    <div className="inline-block px-4 py-2 rounded-full mb-4 gradient-pink">
                      <span className="text-sm font-bold uppercase">{teamMembers[currentSlide].role}</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black mb-4 uppercase" style={{ color: '#ffffff' }}>
                      {teamMembers[currentSlide].name}
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-300 mb-4 leading-relaxed">
                      {teamMembers[currentSlide].bio}
                    </p>
                    <p className="text-sm font-medium mb-6" style={{ color: '#249f9c' }}>
                      {teamMembers[currentSlide].year}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-4">
                      <a 
                        href={`mailto:${teamMembers[currentSlide].email}`}
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-[#249f9c]"
                        style={{ backgroundColor: '#1a1a1a80' }}
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href={teamMembers[currentSlide].linkedin}
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-[#249f9c]"
                        style={{ backgroundColor: '#1a1a1a80' }}
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href={teamMembers[currentSlide].twitter}
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-[#249f9c]"
                        style={{ backgroundColor: '#1a1a1a80' }}
                      >
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: '#0a0a0a80' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: '#0a0a0a80' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 flex-wrap">
            {teamMembers.map((member, index) => (
              <button
                key={member.id}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                  currentSlide === index 
                    ? 'border-[#ed1b76] scale-110' 
                    : 'border-transparent hover:border-[#249f9c] hover:scale-105'
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 transition-all duration-300 ${
                  currentSlide === index ? 'bg-transparent' : 'bg-black/40'
                }`} />
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 gradient-pink' 
                    : 'w-2 bg-gray-600 hover:bg-[#249f9c]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
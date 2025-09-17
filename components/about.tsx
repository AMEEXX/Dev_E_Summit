import React from 'react';
import { Target, Users, Lightbulb, Trophy } from 'lucide-react';

export default function About() {
  const highlights = [
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const features = [
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Cutting-edge solutions for tomorrow\'s challenges'
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with industry leaders and peers'
    },
    {
      icon: Lightbulb,
      title: 'Mentorship',
      description: 'Learn from successful entrepreneurs'
    },
    {
      icon: Trophy,
      title: 'Recognition',
      description: 'Showcase your startup to investors'
    }
  ];

  return (
    <section id="about" className="py-24" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: '#ed1b76' }}>
            About E-Summit 2026
          </h2>
          <div className="h-1 w-24 mx-auto gradient-pink" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-white leading-relaxed">
                E-Summit 2026 is India's premier entrepreneurship summit, hosted by IIIT Bhubaneswar. 
                As a centre of excellence in entrepreneurship, we bring together visionary minds, 
                innovative startups, and industry leaders for three transformative days.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#249f9c' }}>
                Our mission is to foster the next generation of entrepreneurs by providing a platform 
                for learning, networking, and collaboration. Join us as we shape the future of innovation 
                and create lasting impact in the startup ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#1a1a1a' }}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 gradient-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2" style={{ color: '#ed1b76' }}>{feature.title}</h3>
                      <p className="text-sm text-white">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#ed1b76] ${
                  index === 0 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`E-Summit highlight ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a80, transparent)' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '25+', label: 'Years of Excellence', gradient: 'gradient-pink' },
            { value: '500+', label: 'Startups Incubated', gradient: 'gradient-teal' },
            { value: '₹100Cr+', label: 'Funding Raised', gradient: 'gradient-pink' },
            { value: '50,000+', label: 'Alumni Network', gradient: 'gradient-teal' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-block p-6 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.gradient}`}>
                <div className="text-3xl font-black text-white">{stat.value}</div>
              </div>
              <div className="text-white font-medium group-hover:text-[#249f9c] transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { ExternalLink, MapPin, Building } from 'lucide-react';

export default function Speakers() {
  const [hoveredSpeaker, setHoveredSpeaker] = useState(null);

  const speakers = [
    {
      id: 1,
      name: 'Ravi Gururaj',
      title: 'CEO & Founder, QikPod',
      company: 'QikPod Technologies',
      bio: 'Serial entrepreneur with 15+ years in tech startups. Built and scaled multiple companies from seed to IPO.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      session: 'Building Scalable Tech Startups',
      location: 'Bangalore, India',
      social: '#'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Partner, Sequoia Capital',
      company: 'Sequoia Capital India',
      bio: 'Leading venture capitalist focusing on early-stage investments. Partner at Sequoia with portfolio worth $2B+.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      session: 'Future of Venture Capital in India',
      location: 'Mumbai, India',
      social: '#'
    },
    {
      id: 3,
      name: 'Dr. Meera Singh',
      title: 'Head of Impact, Tata Trust',
      company: 'Tata Trusts',
      bio: 'Pioneer in social entrepreneurship and sustainable development. Leading CSR initiatives across rural India.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      session: 'Social Impact & Rural Innovation',
      location: 'Mumbai, India',
      social: '#'
    },
    {
      id: 4,
      name: 'Amit Kumar',
      title: 'CTO, Times Internet',
      company: 'Times Internet Ltd',
      bio: 'Technology leader driving digital transformation. Expert in AI, blockchain, and emerging technologies.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      session: 'AI & The Future of Startups',
      location: 'Delhi, India',
      social: '#'
    },
    {
      id: 5,
      name: 'Kavitha Reddy',
      title: 'UN Youth Envoy',
      company: 'United Nations',
      bio: 'Global advocate for youth empowerment and sustainable development. Leading climate action initiatives.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      session: 'Youth Leadership & Climate Action',
      location: 'New York, USA',
      social: '#'
    },
    {
      id: 6,
      name: 'Arjun Malhotra',
      title: 'Climate Tech Entrepreneur',
      company: 'GreenTech Innovations',
      bio: 'Climate activist turned entrepreneur. Building solutions for carbon neutrality and clean energy.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      session: 'Climate Tech & Green Startups',
      location: 'Bangalore, India',
      social: '#'
    },
    {
      id: 7,
      name: 'Sarah Johnson',
      title: 'VP Global Partnerships, Google',
      company: 'Google LLC',
      bio: 'Leading strategic partnerships at Google. Expert in scaling global tech products and startup ecosystems.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      session: 'Global Scaling Strategies',
      location: 'San Francisco, USA',
      social: '#'
    },
    {
      id: 8,
      name: 'Nikhil Taneja',
      title: 'TEDx Speaker & Author',
      company: 'Independent',
      bio: 'Bestselling author and motivational speaker. Expert in personal branding and entrepreneurial mindset.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      session: 'Building Your Personal Brand',
      location: 'Mumbai, India',
      social: '#'
    }
  ];

  return (
    <section id="speakers" className="py-24" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: '#ed1b76' }}>
            Keynote Speakers
          </h2>
          <div className="h-1 w-24 mx-auto gradient-pink mb-4" />
          <p className="text-xl text-white max-w-3xl mx-auto">
            Learn from industry leaders, successful entrepreneurs, and visionary thinkers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative rounded-xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#249f9c]"
              style={{ backgroundColor: '#1a1a1a' }}
              onMouseEnter={() => setHoveredSpeaker(speaker.id)}
              onMouseLeave={() => setHoveredSpeaker(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 backdrop-blur-sm transition-all duration-300 ${
                  hoveredSpeaker === speaker.id ? 'opacity-100' : 'opacity-0'
                }`} style={{ backgroundColor: '#249f9c95' }}>
                  <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                    <h4 className="font-bold mb-2 uppercase">Session Topic:</h4>
                    <p className="text-sm font-bold mb-4">{speaker.session}</p>
                    <p className="text-sm leading-relaxed">{speaker.bio}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-[#249f9c] transition-colors uppercase">
                      {speaker.name}
                    </h3>
                    <p className="font-medium" style={{ color: '#ed1b76' }}>{speaker.title}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#249f9c' }}>
                    <Building className="w-4 h-4" />
                    <span>{speaker.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#249f9c' }}>
                    <MapPin className="w-4 h-4" />
                    <span>{speaker.location}</span>
                  </div>
                </div>

                {/* Social Link */}
                <div className="pt-4">
                  <a
                    href={speaker.social}
                    className="inline-flex items-center gap-2 text-white hover:text-[#249f9c] transition-colors text-sm font-medium"
                  >
                    Connect
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
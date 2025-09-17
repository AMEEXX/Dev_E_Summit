import React, { useEffect, useState } from 'react';

export default function Sponsors() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sponsorCategories = [
    {
      title: 'Presented By',
      sponsors: [
        { name: 'IIIT Bhubaneswar', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'E-Cell IIIT-BH', logo: '/api/placeholder/200/80', website: '#' }
      ]
    },
    {
      title: 'Title Sponsors',
      sponsors: [
        { name: 'Tata Group', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'Reliance Industries', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'Infosys', logo: '/api/placeholder/200/80', website: '#' }
      ]
    },
    {
      title: 'Co-organizing Partners',
      sponsors: [
        { name: 'Google for Startups', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'Microsoft', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'Amazon Web Services', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'IBM', logo: '/api/placeholder/200/80', website: '#' }
      ]
    },
    {
      title: 'Investment Partners',
      sponsors: [
        { name: 'Sequoia Capital', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'Accel Partners', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'KPMG', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'Deloitte', logo: '/api/placeholder/200/80', website: '#' },
        { name: 'EY', logo: '/api/placeholder/200/80', website: '#' }
      ]
    }
  ];

  const allSponsors = sponsorCategories.flatMap(category => category.sponsors);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(allSponsors.length / 4));
    }, 4000);
    return () => clearInterval(timer);
  }, [allSponsors.length]);

  return (
    <section id="sponsors" className="py-24" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: '#ed1b76' }}>
            Our Partners & Sponsors
          </h2>
          <div className="h-1 w-24 mx-auto gradient-pink mb-4" />
          <p className="text-xl text-white max-w-3xl mx-auto">
            Proudly supported by industry leaders and innovation champions
          </p>
        </div>

        {/* Sponsor Categories */}
        <div className="space-y-16">
          {sponsorCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-black text-center mb-8" style={{ color: '#ed1b76' }}>
                {category.title}
              </h3>
              
              <div className={`grid gap-8 justify-items-center ${
                category.sponsors.length <= 2 ? 'grid-cols-1 md:grid-cols-2' :
                category.sponsors.length <= 3 ? 'grid-cols-1 md:grid-cols-3' :
                'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }`}>
                {category.sponsors.map((sponsor, index) => (
                  <a
                    key={index}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-lg p-6 lg:p-8 flex items-center justify-center w-full max-w-xs hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#249f9c]"
                    style={{ backgroundColor: '#1a1a1a' }}
                  >
                    <div className="w-full h-16 flex items-center justify-center">
                      <span className="text-white font-bold text-sm text-center group-hover:text-[#249f9c] transition-colors">
                        {sponsor.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
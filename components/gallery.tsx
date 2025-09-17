import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'E-Summit 2025 Opening Ceremony',
      category: 'events'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Startup Pitch Competition',
      category: 'competitions'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Networking Session',
      category: 'networking'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Workshop in Progress',
      category: 'workshops'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Panel Discussion',
      category: 'events'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Award Ceremony',
      category: 'events'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Innovation Showcase',
      category: 'competitions'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Team Building Session',
      category: 'workshops'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Closing Night Party',
      category: 'networking'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Startup Exhibition',
      category: 'competitions'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mentorship Sessions',
      category: 'workshops'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Networking Dinner',
      category: 'networking'
    }
  ];

  // Split images into two rows
  const firstRowImages = [...images, ...images]; // Duplicate for seamless loop
  const secondRowImages = [...images.slice().reverse(), ...images.slice().reverse()]; // Duplicate reversed

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: '#ed1b76' }}>
            Gallery
          </h2>
          <div className="h-1 w-24 mx-auto gradient-pink mb-4" />
          <p className="text-xl text-white max-w-3xl mx-auto">
            Relive the highlights and memorable moments from previous E-Summit events
          </p>
        </div>

        {/* Dynamic Carousel Rows */}
        <div className="space-y-8 overflow-hidden">
          {/* First Row - Sliding Right */}
          <div className="relative">
            <div 
              className={`flex gap-6 ${isPaused ? '' : 'animate-slide-right'}`}
              style={{ width: 'calc(200% + 24px)' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {firstRowImages.map((image, index) => (
                <div
                  key={`first-${image.id}-${index}`}
                  className="group relative overflow-hidden rounded-xl cursor-pointer shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#249f9c] hover:scale-105 flex-shrink-0"
                  style={{ 
                    backgroundColor: '#1a1a1a',
                    width: '300px',
                    height: '200px'
                  }}
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a90, transparent)' }} />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-black text-sm mb-2 uppercase">{image.title}</h3>
                    <span className="inline-block px-2 py-1 text-white text-xs font-bold capitalize gradient-pink">
                      {image.category}
                    </span>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#249f9c80' }}>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Sliding Left */}
          <div className="relative">
            <div 
              className={`flex gap-6 ${isPaused ? '' : 'animate-slide-left'}`}
              style={{ width: 'calc(200% + 24px)' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {secondRowImages.map((image, index) => (
                <div
                  key={`second-${image.id}-${index}`}
                  className="group relative overflow-hidden rounded-xl cursor-pointer shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#249f9c] hover:scale-105 flex-shrink-0"
                  style={{ 
                    backgroundColor: '#1a1a1a',
                    width: '300px',
                    height: '200px'
                  }}
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a90, transparent)' }} />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-black text-sm mb-2 uppercase">{image.title}</h3>
                    <span className="inline-block px-2 py-1 text-white text-xs font-bold capitalize gradient-pink">
                      {image.category}
                    </span>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#249f9c80' }}>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-4" style={{ backgroundColor: '#0a0a0a90' }}>
            <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#ed1b76] transition-all duration-200"
                style={{ backgroundColor: '#0a0a0a50' }}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 z-10 w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#249f9c] transition-all duration-200"
                style={{ backgroundColor: '#0a0a0a50' }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 z-10 w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#249f9c] transition-all duration-200"
                style={{ backgroundColor: '#0a0a0a50' }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="inline-block p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a80' }}>
                  <h3 className="text-xl font-black mb-2 uppercase text-white">{selectedImage.title}</h3>
                  <span className="inline-block px-3 py-1 text-white text-sm font-bold capitalize gradient-pink">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-right {
          animation: slide-right 20s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
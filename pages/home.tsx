
import React, { useEffect } from 'react';
import Navigation from '../components/navigation.tsx';
import Hero from '../components/hero.tsx';
import About from '../components/about.tsx';
import Workshops from '../components/workshops.tsx'; // This one was already correct
import Events from '../components/events.tsx';
import Speakers from '../components/speakers.tsx';
import Team from '../components/team.tsx';
import Sponsors from '../components/sponsors.tsx';
import Gallery from '../components/gallery.tsx';
import Footer from '../components/footer.tsx';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    // Show hero section immediately
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.style.opacity = '1';
      heroSection.style.transform = 'translateY(0)';
    }

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600;700;800;900&display=swap');

        :root {
          --background: #0a0a0a;
          --foreground: #ffffff;
          --primary: #ed1b76; /* Hot Pink */
          --primary-light: #f44786; /* Lighter Pink */
          --secondary: #249f9c; /* Teal */
          --secondary-dark: #037a76; /* Dark Teal */
          --card: #1a1a1a;
          --card-dark: #111111;
          --border: #2a2a2a;
          --muted: #666666;
        }

        * {
          box-sizing: border-box;
        }

        body {
          background-color: var(--background);
          color: var(--foreground);
          font-family: 'Montserrat Alternates', sans-serif;
          margin: 0;
          padding: 0;
        }

        h1, h2, h3, h4, h5, h6 {
          text-transform: uppercase;
          font-weight: 900;
          color: var(--primary);
          font-family: 'Montserrat Alternates', sans-serif;
        }

        .gradient-pink {
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
        }

        .gradient-teal {
          background: linear-gradient(135deg, var(--secondary), var(--secondary-dark));
        }

        .glow-pink {
          box-shadow: 0 0 20px rgba(237, 27, 118, 0.3);
        }

        .glow-teal {
          box-shadow: 0 0 20px rgba(36, 159, 156, 0.3);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: white;
          border: none;
          transition: all 0.4s ease;
          font-family: 'Montserrat Alternates', sans-serif;
          font-weight: 700;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--secondary);
          transition: left 0.4s ease;
          z-index: 1;
        }

        .btn-primary:hover::before {
          left: 0;
        }

        .btn-primary span,
        .btn-primary > * {
          position: relative;
          z-index: 2;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(36, 159, 156, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: var(--secondary);
          border: 2px solid var(--secondary);
          transition: all 0.4s ease;
          font-family: 'Montserrat Alternates', sans-serif;
          font-weight: 700;
          position: relative;
          overflow: hidden;
        }

        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--secondary);
          transition: left 0.4s ease;
          z-index: 1;
        }

        .btn-secondary:hover::before {
          left: 0;
        }

        .btn-secondary:hover {
          color: white;
          border-color: var(--secondary);
          box-shadow: 0 4px 15px rgba(36, 159, 156, 0.4);
        }

        .btn-secondary span,
        .btn-secondary > * {
          position: relative;
          z-index: 2;
        }

        /* Apply to all buttons that don't have .no-animation class */
        button:not(.no-animation) {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        button:not(.no-animation):not(.btn-primary):not(.btn-secondary)::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--secondary);
          transition: left 0.4s ease;
          z-index: 1;
        }

        button:not(.no-animation):not(.btn-primary):not(.btn-secondary):hover::before {
          left: 0;
        }

        button:not(.no-animation):not(.btn-primary):not(.btn-secondary):hover {
          color: white;
        }

        button:not(.no-animation) span,
        button:not(.no-animation) > * {
          position: relative;
          z-index: 2;
        }
      `}</style>
      <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
        <Navigation />
        <Hero />
        <About />
        <Workshops />
        <Events />
        <Speakers />
        <Sponsors />
        <Gallery />
        <Team /> {/* Moved Team component here */}
        
        {/* The previous Registration Section has been removed */}

        <Footer />
      </div>
    </>
  );
}

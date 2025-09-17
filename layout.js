import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700;900&display=swap');

        :root {
          --background: #111111;
          --foreground: #FFFFFF;
          --primary: #E60000; /* Red */
          --accent: #00FF66; /* Neon Green */
          --card: #1a1a1a;
          --card-foreground: #FFFFFF;
          --border: #333333;
        }

        body {
          background-color: var(--background);
          color: var(--foreground);
          font-family: 'Montserrat Alternates', 'Sukhumvit Set', sans-serif;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        h1, h2, h3, h4, h5, h6 {
          text-transform: uppercase;
          font-weight: 900;
        }

        .section-red-lines {
          position: relative;
          overflow: hidden;
        }

        .section-red-lines::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 200px,
              rgba(230, 0, 0, 0.1) 201px,
              rgba(230, 0, 0, 0.1) 203px
            );
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
      <main>{children}</main>
    </>
  );
}
import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';

export const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            images.forEach((_, index) => {
              setTimeout(() => {
                setVisibleImages((prev) => [...prev, index]);
              }, index * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1651178836409-4460d0e47bea?w=400',
      label: 'LIVE',
      color: 'primary',
    },
    {
      src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400',
      label: 'CROWD',
      color: 'secondary',
    },
    {
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
      label: 'BACKSTAGE',
      color: 'accent',
    },
    {
      src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
      label: 'VIBES',
      color: 'primary',
    },
    {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      label: 'ENERGY',
      color: 'secondary',
    },
    {
      src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
      label: 'MEMORIES',
      color: 'accent',
    },
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-pricedown">
            <span className="text-primary font-pricedown">FEST</span>{' '}
            <span className="text-accent font-pricedown">VIBES</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Relive the electric moments from previous editions of STAVYA.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => {
            const isVisible = visibleImages.includes(index);
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{
                  transition: 'all 0.6s ease-out',
                }}
              >
                <Card className="border-0 overflow-hidden h-64 md:h-80">
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-${image.color} to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />

                  {/* Label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-4xl md:text-5xl font-bold text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 font-pricedown"
                      style={{
                        transform: 'rotate(-5deg)',
                      }}
                    >
                      {image.label}
                    </div>
                  </div>

                  {/* Border Glow on Hover */}
                  <div className={`absolute inset-0 border-4 border-${image.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none`} />
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Gallery;

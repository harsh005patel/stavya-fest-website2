import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Music, Users, Drama, Gamepad2, Palette, Award } from 'lucide-react';

export const About = () => {
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
      src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
      label: 'VIBES',
      color: 'primary',
      description: 'Tournaments, LAN parties, console gaming zones',
      category: 'Gaming & E-sports',
      icon: Gamepad2,
    },
    {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      label: 'ENERGY',
      color: 'primary',
      description: 'Live painting, digital art, photography exhibitions',
      category: 'Art & Design',
      icon: Palette,
    },
    {
      src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
      label: 'MEMORIES',
      color: 'primary',
      description: 'Literary events, debates, quizzes, and more',
      category: 'Competitions',
      icon: Award,
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-pricedown">
            <span className="font-pricedown">ABOUT</span>{' '}
            <span className="text-secondary font-pricedown">STAVYA</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Stavya, meaning “worthy of praise”, is the annual cultural festival of IIIT Vadodara–ICD.
It provides a dynamic platform for students to showcase talents in performing and aesthetic arts.
The fest celebrates creativity, collaboration, and cultural expression.
Stavya 2026 marks its 4th edition, continuing a growing legacy of excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => {
            const isVisible = visibleImages.includes(index);
            const Icon = image.icon;
            
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

<div
    className="absolute inset-0 pointer-events-none"
    style={{ backgroundColor: "rgba(6, 75, 105, 0.45)" }}
  ></div>

                  {/* Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div
                      className="text-4xl font-pricedown md:text-5xl font-bold text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
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

       {/* Stats */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
  {[
    { number: '50+', label: 'Events' },
    { number: '500+', label: 'Participants' },
    { number: '₹40K+', label: 'Prize Money' },
  ].map((stat, index) => (
    <div key={index} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-pricedown">
        {stat.number}
      </div>
      <div className="text-muted-foreground text-lg">{stat.label}</div>
    </div>
  ))}
</div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default About;

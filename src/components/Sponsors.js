import React, { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';

export const Sponsors = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const sponsors = [
    'Sponsor 1',
    'Sponsor 2',
    'Sponsor 3',
    'Sponsor 4',
    'Sponsor 5',
    'Sponsor 6',
    'Sponsor 7',
    'Sponsor 8',
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-pricedown">
            <span className="text-secondary font-pricedown">OUR</span>{' '}
            <span className="text-primary font-pricedown">SPONSORS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by amazing partners who believe in creativity and youth.
          </p>
        </div>

        {/* Auto-Scrolling Sponsor Strip */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-hidden py-8"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate sponsors for seamless loop */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center hover:border-primary transition-colors duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <Award className="text-primary mx-auto mb-2 group-hover:glow-pink" size={32} />
                  <div className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {sponsor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* College Info */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-accent font-pricedown">About The College</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            STAVYA is organized by the students of [College Name], a premier institution dedicated to
            fostering creativity, innovation, and excellence. Our fest brings together talented individuals
            from across the region to celebrate art, culture, and technology.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div>
              <div className="text-2xl font-bold text-secondary font-pricedown">20+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary font-pricedown">10,000+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent font-pricedown">50+</div>
              <div className="text-sm text-muted-foreground">Clubs & Societies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Sponsors;

import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from './CircularGallery';


const OrganizingClubs = () => {
  // Club data with your logos
  const clubItems = [
    { image: '/clubs/arts.png', text: 'Art Club' },
    { image: '/clubs/dance.png', text: 'Dance Club' },
    { image: '/clubs/drama.png', text: 'Drama Club' },
    { image: '/clubs/music.png', text: 'Music Club' },
    { image: '/clubs/photography.png', text: 'Photography Club' },
    { image: '/clubs/debate.png', text: 'Debate Club' },
    { image: '/clubs/literary.png', text: 'Literary Club' },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
       

        {/* Circular Gallery */}
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery 
            items={clubItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={1.7}
            scrollEase={0.05}
            font="bold 28px 'pricedown'"
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizingClubs;
import React from 'react';
import CircularGallery from './CircularGallery';

const OrganizingClubs = () => {
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
    <section
      className="relative w-full py-20 overflow-hidden"
      style={{ background: 'rgba(8, 145, 178, 0.15)' }}
    >
      <div className="container mx-auto px-4">
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

import React from 'react';
import { Music, Gamepad2, Palette, Drama, Zap, Star } from 'lucide-react';

export const FloatingShapes = () => {
  const shapes = [
    { Icon: Music, color: 'text-primary', delay: 0, duration: 20, top: '10%', left: '5%' },
    { Icon: Gamepad2, color: 'text-secondary', delay: 2, duration: 25, top: '20%', right: '10%' },
    { Icon: Palette, color: 'text-accent', delay: 4, duration: 22, top: '60%', left: '8%' },
    { Icon: Drama, color: 'text-primary', delay: 1, duration: 28, top: '70%', right: '15%' },
    { Icon: Zap, color: 'text-secondary', delay: 3, duration: 24, top: '40%', left: '15%' },
    { Icon: Star, color: 'text-accent', delay: 5, duration: 26, top: '80%', right: '8%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => {
        const { Icon, color, delay, duration, top, left, right } = shape;
        return (
          <div
            key={index}
            className={`absolute ${color} opacity-10`}
            style={{
              top,
              left,
              right,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon size={48} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingShapes;

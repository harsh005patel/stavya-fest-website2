import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target ;

      if (
        !target
      ) return;

      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth follower – no timeout, just easing towards the main cursor
  useEffect(() => {
    const ease = 0.18; // 0–1 → closer to 1 = tighter to cursor

    setFollowerPosition((prev) => ({
      x: prev.x + (position.x - prev.x) * ease,
      y: prev.y + (position.y - prev.y) * ease,
    }));
  }, [position]);

  return (
    <>
      {/* Main dot */}
      <div
        className="custom-cursor pointer-events-none hidden md:block fixed z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          backgroundColor: isHovering ? 'hsl(var(--primary))' : 'transparent',
        }}
      />

      {/* Soft trailing ring */}
      <div
        className="cursor-follower pointer-events-none hidden md:block fixed z-[9998]"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;

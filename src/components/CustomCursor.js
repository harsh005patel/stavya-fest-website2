import React, { useEffect, useRef, useState } from 'react';

const EASE = 0.12;
const HOVER_SELECTORS = 'a, button, [role="button"], [data-cursor-hover]';

function useMousePosition() {
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return pos;
}

function useHovering() {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onOver = (e) => {
      setHovering(e.target?.closest(HOVER_SELECTORS) ?? false);
    };
    const onOut = () => setHovering(false);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return hovering;
}

export const CustomCursor = () => {
  const mouseRef = useMousePosition();
  const isHovering = useHovering();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (!dotRef.current || !ringRef.current) return;

    ringPos.current = { x: mouseRef.current.x, y: mouseRef.current.y };

    const tick = () => {
      const { x: mx, y: my } = mouseRef.current;
      const rx = ringPos.current.x + (mx - ringPos.current.x) * EASE;
      const ry = ringPos.current.y + (my - ringPos.current.y) * EASE;
      ringPos.current = { x: rx, y: ry };

      dotRef.current.style.transform = `translate(-50%, -50%) scale(${isHovering ? 1.4 : 1})`;
      dotRef.current.style.backgroundColor = isHovering ? 'hsl(var(--primary))' : '';
      dotRef.current.style.left = `${mx}px`;
      dotRef.current.style.top = `${my}px`;

      ringRef.current.style.left = `${rx}px`;
      ringRef.current.style.top = `${ry}px`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHovering, mouseRef]);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot pointer-events-none hidden md:block fixed z-[9999]"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring pointer-events-none hidden md:block fixed z-[9998]"
        aria-hidden
      />
    </>
  );
};

export default CustomCursor;

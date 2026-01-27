import React, { useEffect, useRef } from "react";

const EASE = 0.12;
const HOVER_SELECTORS = 'a, button, [role="button"], [data-cursor-hover]';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
  const hovering = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onOver = (e) => {
      hovering.current = !!e.target.closest(HOVER_SELECTORS);
    };

    const onOut = () => {
      hovering.current = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    const tick = () => {
      const dot = dotRef.current;
      const ringEl = ringRef.current;

      // 🛑 STOP if elements are gone
      if (!dot || !ringEl) return;

      const { x: mx, y: my } = mouse.current;

      ring.current.x += (mx - ring.current.x) * EASE;
      ring.current.y += (my - ring.current.y) * EASE;

      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      dot.style.transform = `translate(-50%, -50%) scale(${hovering.current ? 1.4 : 1})`;

      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top = `${ring.current.y}px`;

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot fixed pointer-events-none hidden md:block z-[9999]"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring fixed pointer-events-none hidden md:block z-[9998]"
        aria-hidden
      />
    </>
  );
};

export default CustomCursor;

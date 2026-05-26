'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    /* Only activate on true pointer devices */
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let visible = false;

    const show = () => {
      if (!visible) {
        dot.style.opacity = '1';
        ring.style.opacity = '0.5';
        visible = true;
      }
    };

    const onMove = (e: MouseEvent) => {
      show();
      dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      ring.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
    };

    const onEnter = () => {
      ring.style.transform = ring.style.transform.replace('scale(1)', '');
      ring.style.width = '36px';
      ring.style.height = '36px';
    };

    document.addEventListener('mousemove', onMove);
    return () => {
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: 'var(--orange)',
          opacity: 0,
          transition: 'transform 0.1s ease',
          mixBlendMode: 'multiply',
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid var(--orange)',
          opacity: 0,
          transition: 'transform 0.1s ease, opacity 0.2s',
        }}
      />
    </>
  );
}

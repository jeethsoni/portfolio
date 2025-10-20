'use client';
import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils';

const Globe = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
  autoRotateSpeed = 0.12, 
}) => {
  const canvasRef = useRef(null);
  const globeRef = useRef(null);

  const phiRef = useRef(0);
  const thetaRef = useRef(theta);
  const lastTimeRef = useRef(performance.now());

  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      const parent = canvas.parentElement || document.body;
      const dpr = window.devicePixelRatio || 1;
      const w = Math.max(1, parent.clientWidth || 300);
      const h = w; 
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    setSize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: window.devicePixelRatio || 1,
      width: canvas.width,
      height: canvas.height,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark,
      scale,
      diffuse,
      mapSamples,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [],
      onRender: (state) => {
        const parent = canvas.parentElement || document.body;
        const dpr = window.devicePixelRatio || 1;
        const w = Math.max(1, parent.clientWidth || 300);
        const H = Math.round(w * dpr), W = H;
        if (state.width !== W || state.height !== H) {
          state.width = W; state.height = H;
          canvas.width = W; canvas.height = H;
        }

        const now = performance.now();
        const dt = (now - lastTimeRef.current) / 1000;
        lastTimeRef.current = now;

        if (!draggingRef.current) {
          phiRef.current += autoRotateSpeed * dt;
        }

        state.phi = phiRef.current;
        state.theta = thetaRef.current;
      },
    });

    globeRef.current = globe;

    const speed = 0.005; 
    const onDown = (x, y) => {
      draggingRef.current = true;
      lastXRef.current = x;
      lastYRef.current = y;
      canvas.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    };
    const onMove = (x, y) => {
      if (!draggingRef.current) return;
      const dx = x - lastXRef.current;
      const dy = y - lastYRef.current;
      phiRef.current += dx * speed;
      thetaRef.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, thetaRef.current - dy * speed));
      lastXRef.current = x;
      lastYRef.current = y;
    };
    const onUp = () => {
      draggingRef.current = false;
      canvas.style.cursor = 'grab';
      document.body.style.userSelect = '';
    };

    // mouse
    const mousedown = (e) => onDown(e.clientX, e.clientY);
    const mousemove = (e) => onMove(e.clientX, e.clientY);
    const mouseup = () => onUp();

    // touch
    const touchstart = (e) => {
      const t = e.touches[0];
      onDown(t.clientX, t.clientY);
    };
    const touchmove = (e) => {
      const t = e.touches[0];
      onMove(t.clientX, t.clientY);
    };
    const touchend = () => onUp();

    canvas.addEventListener('mousedown', mousedown);
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    canvas.addEventListener('touchstart', touchstart, { passive: true });
    window.addEventListener('touchmove', touchmove, { passive: true });
    window.addEventListener('touchend', touchend);

    const onResize = () => setSize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);

      canvas.removeEventListener('mousedown', mousedown);
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);

      canvas.removeEventListener('touchstart', touchstart);
      window.removeEventListener('touchmove', touchmove);
      window.removeEventListener('touchend', touchend);

      document.body.style.userSelect = '';
      if (globeRef.current) globeRef.current.destroy();
    };
  }, [
    theta,
    dark,
    scale,
    diffuse,
    mapSamples,
    mapBrightness,
    baseColor,
    markerColor,
    glowColor,
    autoRotateSpeed,
  ]);

  return (
    <div className={cn('flex items-center justify-center z-10 w-full max-w-[350px] mx-auto', className)}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1',
          cursor: 'grab',
          touchAction: 'none',
        }}
      />
    </div>
  );
};

export default Globe;

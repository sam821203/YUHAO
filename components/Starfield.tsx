"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; base: number; phase: number; speed: number };

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((width * height) / 6500);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.3,
        base: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      for (const s of stars) {
        if (!reduced) {
          s.x += 0.04;
          if (s.x > width) s.x = 0;
        }
        ctx.globalAlpha = reduced ? s.base : s.base * (0.55 + 0.45 * Math.sin(s.phase + t * s.speed * 0.06));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduced) frame = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 size-full" />;
}

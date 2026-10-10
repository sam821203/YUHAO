"use client";

import { useEffect, useRef } from "react";

const GAP = 22;
const REACH = 150;

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw(0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#08979c";
      const shift = reduced ? 0 : (t * 0.006) % GAP;
      for (let y = -GAP + shift; y < height + GAP; y += GAP) {
        for (let x = -GAP + shift; x < width + GAP; x += GAP) {
          const wave = reduced ? 0 : Math.pow(Math.max(0, Math.sin((x + y) * 0.008 - t * 0.0012)), 6);
          const dist = Math.hypot(x - pointer.x, y - pointer.y);
          const near = dist < REACH ? 1 - dist / REACH : 0;
          ctx.globalAlpha = 0.14 + wave * 0.22 + near * 0.55;
          ctx.beginPath();
          ctx.arc(x, y, 1 + wave * 0.4 + near * 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (!reduced) frame = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    if (!reduced) frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 size-full" />;
}

"use client";

import { useEffect, useRef, useState } from "react";

export function CampaignVideo({ name }: { name: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setLoad(true);
          if (el.currentSrc) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px", threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!load || !el) return;
    el.load();
    el.play().catch(() => {});
  }, [load]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={`/videos/posters/${name}.jpg`}
      width={952}
      height={540}
      aria-label={name}
      className="aspect-video w-full bg-muted object-cover"
    >
      {load && (
        <>
          <source src={`/videos/${name}.mp4`} type="video/mp4" />
          <source src={`/videos/${name}.webm`} type="video/webm" />
        </>
      )}
    </video>
  );
}

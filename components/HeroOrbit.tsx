import Image from "next/image";

const chips = [
  { label: "React", ring: "inner", angle: -100 },
  { label: "Vue 3", ring: "inner", angle: -20 },
  { label: "TypeScript", ring: "outer", angle: 25 },
  { label: "D3.js", ring: "inner", angle: 80, accent: true },
  { label: "WebSocket", ring: "outer", angle: 130 },
  { label: "Google Maps", ring: "inner", angle: 185 },
  { label: "Angular", ring: "outer", angle: -140, faint: true },
  { label: "Tailwind CSS", ring: "outer", angle: -50, faint: true },
];

const radius = { inner: 36, outer: 46 };

const sparkle = "M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z";

export function HeroOrbit() {
  return (
    <div className="animate-in fade-in zoom-in-95 relative mx-auto aspect-square w-full max-w-[360px] duration-1000 md:max-w-[480px]">
      <svg aria-hidden="true" viewBox="0 0 400 400" className="pointer-events-none absolute -inset-[10%] size-[120%] overflow-visible">
        <path
          d="M40 330 L170 230 L150 300 L360 120"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="46"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 60 30" className="pointer-events-none absolute top-[4%] left-[2%] w-12 overflow-visible md:w-16">
        <path d="M3 26 L16 6 L28 22 L40 4 L56 20" fill="none" stroke="var(--foreground)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute right-[4%] bottom-[6%] w-6 md:w-8">
        <path d={sparkle} fill="var(--primary)" />
      </svg>
      <div className="absolute inset-[14%] rounded-full border border-dashed border-primary/30 motion-safe:animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-[4%] rounded-full border border-dashed border-foreground/10 motion-safe:animate-[spin_90s_linear_infinite_reverse]" />
      <div className="absolute inset-[23%] overflow-hidden rounded-full shadow-[0_0_0_4px_var(--background),0_0_0_5px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
        <Image
          src="/headshot.jpg"
          alt="Yu Hao Huang"
          width={800}
          height={800}
          priority
          sizes="(min-width: 768px) 320px, 240px"
          className="size-full origin-[96%_4%] scale-[1.245] object-cover"
        />
      </div>
      {chips.map((chip, i) => {
        const r = radius[chip.ring as keyof typeof radius];
        const rad = (chip.angle * Math.PI) / 180;
        return (
          <span
            key={chip.label}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border bg-card px-2.5 py-1 font-mono text-[10px] whitespace-nowrap shadow-[0_10px_30px_-15px_var(--glow)] md:px-3 md:py-1.5 md:text-xs ${
              chip.accent ? "text-accent" : "text-foreground"
            } ${chip.faint ? "opacity-60" : ""}`}
            style={{
              left: `${50 + r * Math.cos(rad)}%`,
              top: `${50 + r * Math.sin(rad)}%`,
            }}
          >
            <span className="block motion-safe:animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: `${i * -0.8}s` }}>
              {chip.label}
            </span>
          </span>
        );
      })}
    </div>
  );
}

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

export function HeroOrbit() {
  return (
    <div className="animate-in fade-in zoom-in-95 relative mx-auto aspect-square w-full max-w-[360px] duration-1000 md:max-w-[480px]">
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

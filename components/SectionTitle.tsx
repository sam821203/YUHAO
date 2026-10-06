import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionTitle({ k, children }: { k: string; children: ReactNode }) {
  return (
    <Reveal className="mb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">{k}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{children}</h2>
    </Reveal>
  );
}

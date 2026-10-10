import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: `Experience · ${site.name}` };

export default function Page() {
  return (
    <main>
      <ExperienceSection />
    </main>
  );
}

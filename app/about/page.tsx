import type { Metadata } from "next";
import { AboutSection } from "@/components/sections";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: `About · ${site.name}` };

export default function Page() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}

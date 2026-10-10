import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: `Contact · ${site.name}` };

export default function Page() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}

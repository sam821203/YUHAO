"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function GoTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed right-5 bottom-5 z-40 rounded-full bg-primary p-3 text-primary-foreground shadow-[0_10px_30px_-10px_var(--glow)] transition-all hover:-translate-y-0.5",
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}

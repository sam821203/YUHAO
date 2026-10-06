"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "#about", label: "關於" },
  { href: "#experience", label: "經歷" },
  { href: "#projects", label: "作品" },
  { href: "#campaigns", label: "活動頁" },
  { href: "#contact", label: "聯絡" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <Image src="/logo-small.png" alt="" width={28} height={28} priority />
          <span>
            <span className="text-primary">&lt;</span>
            {site.brand}
            <span className="text-primary">/&gt;</span>
          </span>
        </a>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex" aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border p-1.5 transition-colors hover:border-primary hover:text-primary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="animate-in fade-in slide-in-from-top-2 border-t md:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

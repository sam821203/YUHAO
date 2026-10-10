"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, House, Mail, Menu, Presentation, UserRound, X } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";


const nav = [
  { href: "/", label: "Home", Icon: House },
  { href: "/about", label: "About", Icon: UserRound },
  { href: "/experience", label: "Experience", Icon: BriefcaseBusiness },
  { href: "/projects", label: "Projects", Icon: Presentation },
  { href: "/contact", label: "Contact", Icon: Mail },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-card/65 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Home" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground">
          <LogoMark className="size-9" />
          Yu Hao
        </Link>
        <nav className="hidden gap-7 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative inline-flex items-center gap-1.5 py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform hover:text-foreground hover:after:scale-x-100 ${
                  active ? "text-foreground after:scale-x-100" : "text-muted-foreground after:scale-x-0"
                }`}
              >
                <item.Icon className="size-4" strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </nav>
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
      {open && (
        <nav className="animate-in fade-in slide-in-from-top-2 border-t md:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 py-2 transition-colors hover:text-primary ${
                    isActive(pathname, item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <item.Icon className="size-4" strokeWidth={1.75} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const dark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("dark", dark ? "1" : "0");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-md border p-1.5 transition-colors hover:border-primary hover:text-primary"
      aria-label="Toggle dark mode"
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </button>
  );
}

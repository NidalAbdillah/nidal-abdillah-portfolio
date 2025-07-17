// src/app/components/ThemeSwitcher.tsx
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme(); // Ganti resolvedTheme dengan theme

  useEffect(() => {
    setMounted(true);
  }, []);

  // Penting: Return consistent placeholder selama hydration
  if (!mounted) {
    return (
      <button
        className="group relative p-2.5 rounded-xl bg-muted/50 backdrop-blur-sm border border-border hover:bg-muted transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        aria-label="Toggle theme"
        disabled
      >
        <div className="relative w-6 h-6">
          <Sun className="absolute inset-0 w-6 h-6 text-muted-foreground opacity-50" />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative p-2.5 rounded-xl bg-muted/50 backdrop-blur-sm border border-border hover:bg-muted transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out ${theme === "light" ? "rotate-0 scale-100 opacity-100 text-accent" : "rotate-90 scale-0 opacity-0 text-muted-foreground"}`} />
        <Moon className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out ${theme === "dark" ? "rotate-0 scale-100 opacity-100 text-primary" : "-rotate-90 scale-0 opacity-0 text-muted-foreground"}`} />
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--glow-primary)] to-[var(--glow-secondary)]" />
    </button>
  );
}

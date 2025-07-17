// src/app/providers.tsx
"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light" // Explicit default
      enableSystem={true}
      disableTransitionOnChange={false} // Smooth transitions
    >
      {children}
    </ThemeProvider>
  );
}

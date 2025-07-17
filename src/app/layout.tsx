// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "./components/Navbar";
import { AnimatedBackground } from "./components/AnimatedBackround";

// Optimasi font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Sudah ada, bagus!
  preload: true, // Eksplisit enable preload
  fallback: ["system-ui", "arial"], // Fallback fonts
  adjustFontFallback: false, // Disable jika tidak diperlukan
});

export const metadata: Metadata = {
  title: "Nidal Abdillah | Fullstack Developer",
  description: "Portfolio profesional Nidal Abdillah dibangun dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <AnimatedBackground />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

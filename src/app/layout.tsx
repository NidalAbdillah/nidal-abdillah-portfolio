// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "./components/Navbar";
import { AnimatedBackground } from "./components/AnimatedBackround";

export const metadata: Metadata = {
  title: "Nidal Abdillah | Developer • DevOps • AI Engineer",
  description: "Nidal Abdillah is a Fullstack Developer and DevOps Engineer with a passion for automation and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          <AnimatedBackground />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

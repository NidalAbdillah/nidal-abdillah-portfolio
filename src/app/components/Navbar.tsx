// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { Github, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Me" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1)); // Remove # from href
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove # from href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 64; // Height of navbar
      const offsetTop = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-2" onClick={(e) => handleClick(e, "#home")}>
          <div className="flex items-center">
            <span className="font-bold text-2xl text-foreground transition-colors">Nidal</span>
            <span className="font-light text-2xl text-muted-foreground transition-colors">Abdillah</span>
          </div>
        </Link>

        {/* Navigation - Fixed hydration issue */}
        <nav className="hidden lg:flex items-center gap-x-6 text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative py-2 transition-colors duration-300 whitespace-nowrap ${isActive ? "font-semibold text-primary" : "font-medium text-muted-foreground hover:text-primary"}`}
              >
                {link.label}
                {/* Underline animation - hanya render setelah mounted */}
                {mounted && isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                      opacity: { duration: 0.2 },
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden">
          <button
            className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
            onClick={() => {
              // You can add mobile menu logic here later
              console.log("Mobile menu clicked");
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-x-2">
          <ThemeSwitcher />

          {/* Social Links */}
          <a href="https://github.com/NidalAbdillah" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 hover:scale-110 transition-transform">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>

          <a href="https://www.linkedin.com/in/nidalall/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 hover:scale-110 transition-transform">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>

          <a href="https://www.instagram.com/nidall_all/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 hover:scale-110 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>

          <a href="https://www.facebook.com/nidal.abdillah.7?locale=id_ID" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 hover:scale-110 transition-transform">
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

// src/app/components/HeroSection.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <motion.div className="relative w-64 h-64 mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Image src="/nidal-1.png" alt="Foto Profil Nidal Abdillah" fill className="rounded-full object-cover border-4 border-border shadow-lg glow-secondary" priority sizes="256px" />
        {/* Glow effect yang konsisten */}
        <div className="absolute inset-0 rounded-full opacity-0 dark:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-[var(--glow-primary)] to-[var(--glow-secondary)] blur-xl -z-10" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
        <span className="text-muted-foreground">I am a </span>
        <TypeAnimation sequence={["Fullstack Developer", 2000, "DevOps Engineer", 2000, "Automation Expert", 2000, "AI Specialist", 2000]} wrapper="span" speed={50} className="text-primary" repeat={Infinity} />
      </motion.div>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6 max-w-xl text-left text-lg text-muted-foreground">
        A versatile technologist with a foundation in full-stack development. My expertise extends to streamlining deployments as a DevOps Engineer, building intelligent process automations with UiPath, and architecting innovative solutions
        powered by Artificial Intelligence.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="#contact"
          className="group relative flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-95 shadow-lg hover:shadow-xl glow-primary"
        >
          <span className="relative z-10">Contact Me</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="/resume"
          className="group relative flex items-center justify-center gap-2 rounded-full border border-border bg-muted/50 px-6 py-3 font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-muted active:scale-95 shadow-lg hover:shadow-xl"
        >
          <span className="relative z-10">View Resume</span>
          <Download size={16} className="transition-transform group-hover:translate-y-1" />
        </Link>
      </motion.div>
    </section>
  );
}

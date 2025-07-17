/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/components/AboutSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Building, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-8 min-h-screen flex items-center relative">
      {/* Remove bg-background, make it transparent */}
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Introduction</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">About me</h2>
        </div>

        {/* Main Content - Full Height Layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Side - Portrait Photo */}
          <div className="lg:col-span-2">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Portrait Photo Container - Transparent background */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-muted/20 backdrop-blur-sm shadow-lg border border-border/20">
                <Image src="/nidal-2.png" alt="Nidal Abdillah - Research Assistant at PT Telkom Indonesia" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 350px" priority />
                <div className=" absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Decorative elements - Enhanced */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-md" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-accent/10 rounded-full blur-md" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-3 space-y-5">
            {/* Description */}
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                I am a passionate <span className="text-primary font-semibold">Informatics Engineering</span> graduate currently serving as a <span className="text-primary font-semibold">Research Assistant</span> at{" "}
                <span className="text-primary font-semibold">PT Telkom Indonesia</span> within the <span className="text-foreground font-medium">Infraservice Research division</span> under IRA DCS.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                My expertise spans <span className="text-primary font-semibold">Cloud Computing</span>, <span className="text-primary font-semibold">DevOps</span>, and <span className="text-primary font-semibold">CI/CD pipelines</span>.
                I&apos;m skilled in <span className="text-foreground font-medium">Docker</span>, <span className="text-foreground font-medium">Kubernetes</span>, and <span className="text-primary font-semibold">process automation</span>{" "}
                using <span className="text-foreground font-medium">UiPath</span> and <span className="text-foreground font-medium">Power Automate</span>.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                As a <span className="text-primary font-semibold">Full-stack Developer</span>, my diverse role includes <span className="text-foreground font-medium">network infrastructure with MikroTik</span>, server management with{" "}
                <span className="text-foreground font-medium">XCP-ng</span>, and <span className="text-primary font-semibold">comprehensive research studies</span> on emerging technologies.
              </p>
            </div>

            {/* Improved Info Cards - Glassmorphism effect */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-4 p-4 bg-muted/20 backdrop-blur-sm rounded-lg border border-border/30 hover:bg-muted/30 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Research Assistant</h3>
                  <p className="text-primary text-sm font-medium">PT Telkom Indonesia</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-muted/20 backdrop-blur-sm rounded-lg border border-border/30 hover:bg-muted/30 transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Infraservice Research Division</h4>
                  <p className="text-muted-foreground text-sm">IRA DCS - Technology Research</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-muted/20 backdrop-blur-sm rounded-lg border border-border/30 hover:bg-muted/30 transition-all duration-300">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Indonesia</h4>
                  <p className="text-muted-foreground text-sm">Teknik Informatika Graduate</p>
                </div>
              </div>
            </div>

            {/* Enhanced Quote - Glassmorphism effect */}
            <div className="pt-0">
              <div className="p-2 bg-primary/5 backdrop-blur-sm rounded-lg border-l-4 border-primary/30 border border-border/20">
                <p className="text-muted-foreground text-sm italic">&quot;Passionate about leveraging technology to solve complex problems and drive innovation in the telecommunications industry.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

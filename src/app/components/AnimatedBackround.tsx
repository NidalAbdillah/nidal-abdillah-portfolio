// src/app/components/AnimatedBackground.tsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
  pulse: number;
  pulseDirection: number;
}

interface MouseState {
  x: number;
  y: number;
  isMoving: boolean;
}

interface ThemeColors {
  particle: string;
  line: string;
  mouseParticle: string;
  mouseGlow: string;
  centerGlow: string;
  innerGlow: string;
}

export function AnimatedBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef<MouseState>({ x: 0, y: 0, isMoving: false });
  const [mounted, setMounted] = useState(false);

  // Animation constants
  const PARTICLE_COUNT = 80;
  const MAX_DISTANCE = 140;
  const MOUSE_RADIUS = 180;
  const MOUSE_FORCE = 0.04;
  const RETURN_FORCE = 0.002;
  const FRICTION = 0.985;
  const BASE_SIZE = 2.5;
  const BOUNCE_DAMPING = 0.7;
  const BOUNDARY_MARGIN = 5;

  // Theme colors - Fixed untuk hydration dengan useCallback
  const getThemeColors = useCallback((): ThemeColors => {
    // Selalu return light theme untuk SSR consistency
    if (!mounted) {
      return {
        particle: "rgba(37, 99, 235, 0.8)",
        line: "rgba(37, 99, 235, 0.18)",
        mouseParticle: "rgba(29, 78, 216, 1)",
        mouseGlow: "rgba(37, 99, 235, 0.12)",
        centerGlow: "rgba(37, 99, 235, 0.12)",
        innerGlow: "rgba(29, 78, 216, 0.15)",
      };
    }

    const isDark = theme === "dark";

    if (isDark) {
      return {
        particle: "rgba(255, 255, 255, 0.7)",
        line: "rgba(255, 255, 255, 0.1)",
        mouseParticle: "rgba(255, 255, 255, 1)",
        mouseGlow: "rgba(255, 255, 255, 0.08)",
        centerGlow: "rgba(255, 255, 255, 0.15)",
        innerGlow: "rgba(255, 255, 255, 0.2)",
      };
    } else {
      return {
        particle: "rgba(37, 99, 235, 0.8)",
        line: "rgba(37, 99, 235, 0.18)",
        mouseParticle: "rgba(29, 78, 216, 1)",
        mouseGlow: "rgba(37, 99, 235, 0.12)",
        centerGlow: "rgba(37, 99, 235, 0.12)",
        innerGlow: "rgba(29, 78, 216, 0.15)",
      };
    }
  }, [mounted, theme]);

  // Background gradient yang konsisten
  const getBackgroundStyle = useCallback(() => {
    // Selalu return light theme untuk SSR
    if (!mounted) {
      return "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)";
    }

    const isDark = theme === "dark";
    return isDark ? "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #111111 100%)" : "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)";
  }, [mounted, theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas setup
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        isMoving: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isMoving = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        originalX: x,
        originalY: y,
        pulse: Math.random() * Math.PI * 2,
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const colors = getThemeColors();

      particles.forEach((particle, i) => {
        // Update pulse animation
        particle.pulse += particle.pulseDirection * 0.05;
        if (particle.pulse > Math.PI * 2) particle.pulse = 0;

        // Mouse interaction
        if (mouseRef.current.isMoving) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
            const angle = Math.atan2(dy, dx);
            particle.vx += Math.cos(angle) * force * MOUSE_FORCE;
            particle.vy += Math.sin(angle) * force * MOUSE_FORCE;
          }
        }

        // Apply friction
        particle.vx *= FRICTION;
        particle.vy *= FRICTION;

        // Return to original position
        const returnDx = particle.originalX - particle.x;
        const returnDy = particle.originalY - particle.y;
        particle.vx += returnDx * RETURN_FORCE;
        particle.vy += returnDy * RETURN_FORCE;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary collision
        if (particle.x <= BOUNDARY_MARGIN || particle.x >= canvas.width - BOUNDARY_MARGIN) {
          particle.vx *= -BOUNCE_DAMPING;
          particle.x = Math.max(BOUNDARY_MARGIN, Math.min(canvas.width - BOUNDARY_MARGIN, particle.x));
        }
        if (particle.y <= BOUNDARY_MARGIN || particle.y >= canvas.height - BOUNDARY_MARGIN) {
          particle.vy *= -BOUNCE_DAMPING;
          particle.y = Math.max(BOUNDARY_MARGIN, Math.min(canvas.height - BOUNDARY_MARGIN, particle.y));
        }

        // Check mouse proximity
        let nearMouse = false;
        let mouseDistance = Infinity;
        if (mouseRef.current.isMoving) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          mouseDistance = Math.sqrt(dx * dx + dy * dy);
          nearMouse = mouseDistance < MOUSE_RADIUS;
        }

        // Render particle
        const pulseSize = Math.sin(particle.pulse) * 0.5 + 1;
        const mouseSizeMultiplier = nearMouse ? 1.8 : 1;
        const size = BASE_SIZE * pulseSize * mouseSizeMultiplier;
        const color = nearMouse ? colors.mouseParticle : colors.particle;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Mouse glow effect
        if (nearMouse) {
          const glowIntensity = 1 - mouseDistance / MOUSE_RADIUS;

          // Outer glow
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = colors.mouseGlow.replace(/[\d.]+\)/, `${0.1 * glowIntensity})`);
          ctx.fill();

          // Inner glow
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = color.replace("1)", "0.3)");
          ctx.fill();
        }

        // Render connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_DISTANCE) {
            const baseOpacity = (1 - distance / MAX_DISTANCE) * 0.6;
            const otherNearMouse = mouseRef.current.isMoving && Math.sqrt(Math.pow(mouseRef.current.x - other.x, 2) + Math.pow(mouseRef.current.y - other.y, 2)) < MOUSE_RADIUS;

            const isHighlighted = nearMouse || otherNearMouse;
            const lineOpacity = isHighlighted ? baseOpacity * 2.5 : baseOpacity;
            const lineWidth = isHighlighted ? 2.5 : 1.2;

            // Create gradient
            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            const startColor = colors.line.replace(/[\d.]+\)/, `${lineOpacity})`);
            const endColor = colors.line.replace(/[\d.]+\)/, `${lineOpacity * 0.3})`);

            gradient.addColorStop(0, startColor);
            gradient.addColorStop(1, endColor);

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = isHighlighted ? colors.mouseParticle.replace("1)", "0.4)") : gradient;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      });

      // Mouse cursor glow
      if (mouseRef.current.isMoving) {
        // Outer glow
        const outerGradient = ctx.createRadialGradient(mouseRef.current.x, mouseRef.current.y, 0, mouseRef.current.x, mouseRef.current.y, MOUSE_RADIUS);

        outerGradient.addColorStop(0, colors.centerGlow);
        outerGradient.addColorStop(0.7, colors.centerGlow.replace(/[\d.]+\)/, "0.05)"));
        outerGradient.addColorStop(1, colors.centerGlow.replace(/[\d.]+\)/, "0)"));

        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, MOUSE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = outerGradient;
        ctx.fill();

        // Inner glow
        const innerGradient = ctx.createRadialGradient(mouseRef.current.x, mouseRef.current.y, 0, mouseRef.current.x, mouseRef.current.y, 40);

        innerGradient.addColorStop(0, colors.innerGlow);
        innerGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 40, 0, Math.PI * 2);
        ctx.fillStyle = innerGradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted, getThemeColors]); // Fixed: Added getThemeColors to dependency array

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 cursor-crosshair"
      style={{
        background: getBackgroundStyle(),
      }}
    />
  );
}

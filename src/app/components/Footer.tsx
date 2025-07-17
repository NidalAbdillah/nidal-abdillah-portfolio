// src/app/components/Footer.tsx
"use client";

import { Github, Linkedin, Instagram, Facebook, Mail, Phone, MapPin, Code, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025); // Default value untuk SSR

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/NidalAbdillah",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/nidalall/",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/nidall_all/",
      color: "hover:text-pink-400",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/nidal.abdillah.7?locale=id_ID",
      color: "hover:text-blue-500",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "nidal.abdillah@example.com",
      href: "mailto:nidal.abdillah@example.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "WhatsApp",
      value: "+62 821-3092-8779",
      href: "https://wa.me/6282130928779",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: "Bandung, West Java, Indonesia",
      href: "https://maps.google.com/?q=Bandung,Indonesia",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD"],
    },
    {
      title: "Tools",
      skills: ["Git", "Linux", "Prometheus", "Grafana"],
    },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 64;
      const offsetTop = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <footer className="bg-background/95 backdrop-blur-sm border-t border-border/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-bold text-2xl text-foreground">Nidal</span>
                <span className="font-light text-2xl text-muted-foreground">Abdillah</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Research Assistant & Fullstack Developer passionate about creating innovative solutions through technology. Specializing in web development, DevOps, and AI/ML implementations.
              </p>

              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <span className="text-primary/70 group-hover:text-primary transition-colors">{item.icon}</span>
                    <span className="text-sm">{item.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-3">
                {navigationLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={(e) => handleScrollToSection(e, link.href)} className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Skills Overview */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Skills</h3>
              <div className="space-y-4">
                {skillCategories.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-medium text-foreground mb-2">{category.title}</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="py-6 border-t border-border/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">Follow me on:</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`} aria-label={social.name}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium">
                  <ExternalLink className="w-4 h-4" />
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-lg hover:from-primary/90 hover:to-blue-500/90 transition-all text-sm font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="py-6 border-t border-border/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>© 2025 Nidal Abdillah. All rights reserved.</span>
              </div>

              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                <span>Crafted with passion in Bandung, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/30">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-2xl text-foreground">Nidal</span>
              <span className="font-light text-2xl text-muted-foreground">Abdillah</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Research Assistant & Fullstack Developer passionate about creating innovative solutions through technology. Specializing in web development, DevOps, and AI/ML implementations.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <span className="text-primary/70 group-hover:text-primary transition-colors">{item.icon}</span>
                  <span className="text-sm">{item.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleScrollToSection(e, link.href)} className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Skills Overview */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Skills</h3>
            <div className="space-y-4">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium text-foreground mb-2">{category.title}</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">Follow me on:</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`} aria-label={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume & Portfolio Links */}
            <div className="flex items-center gap-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium">
                <ExternalLink className="w-4 h-4" />
                Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "#contact")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-lg hover:from-primary/90 hover:to-blue-500/90 transition-all text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Nidal Abdillah. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              <span>Crafted with passion in Bandung, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

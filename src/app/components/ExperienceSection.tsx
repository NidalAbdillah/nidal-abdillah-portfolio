// src/app/components/ExperienceSection.tsx
"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
  logo: string;
  colorClass: string;
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: "1",
      position: "Research Assistant & Fullstack Developer",
      company: "PT Telkom Indonesia",
      location: "Bandung, West Java",
      period: "2024 - Present",
      type: "Full-time",
      description:
        "Working as a Research Assistant and Fullstack Developer at PT Telkom Indonesia, where I utilize all my technical skills across multiple domains. My responsibilities include fullstack development, DevOps implementation, cloud infrastructure management, AI/ML integration, automation solutions, network administration, and server management. I contribute to innovative projects and research initiatives while developing scalable solutions for telecommunications industry challenges.",
      skills: ["React.js", "Node.js", "Python", "DevOps", "AWS", "Docker", "Kubernetes", "AI/ML", "Network", "Automation"],
      logo: "/telkom.png",
      colorClass: "green-500",
    },
    {
      id: "2",
      position: "IT Support Specialist",
      company: "PT Daese Garmin",
      location: "Bandung, West Java",
      period: "2021 - 2023",
      type: "Full-time",
      description:
        "Served as IT Support Specialist at PT Daese Garmin, providing comprehensive technical support and system maintenance. My role involved troubleshooting hardware and software issues, managing network infrastructure, maintaining computer systems, and ensuring optimal IT operations. I collaborated with cross-functional teams to resolve technical challenges and implement effective IT solutions to support business operations.",
      skills: ["Windows", "Linux", "Network", "Hardware", "Troubleshooting", "System Admin"],
      logo: "/daese.png",
      colorClass: "blue-500",
    },
    {
      id: "3",
      position: "IT Support",
      company: "PT Yolita Jaya Indonesia",
      location: "Bandung Barat, West Java",
      period: "2019 - 2020",
      type: "Full-time",
      description:
        "Started my professional career as IT Support at PT Yolita Jaya Indonesia, focusing on network management and system maintenance. My responsibilities included network configuration, troubleshooting connectivity issues, maintaining IT infrastructure, and providing technical support to end users. This role provided me with foundational experience in IT operations and network administration.",
      skills: ["Network Management", "System Maintenance", "Troubleshooting", "IT Support", "Hardware"],
      logo: "/yolita.png",
      colorClass: "purple-500",
    },
  ];

  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">EXPERIENCE</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A collection of my work experience and the roles I have taken in various organizations</p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500/50 via-blue-500/50 to-purple-500/50"></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-center">
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-${experience.colorClass}/20 flex items-center justify-center z-10`}>
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm">
                    <Image src={experience.logo} alt={`${experience.company} logo`} width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Card */}
                <div className={`w-full max-w-md ${index % 2 === 0 ? "ml-auto pl-12" : "mr-auto pr-12"}`}>
                  <div className={`p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-${experience.colorClass}/20 hover:border-${experience.colorClass}/40 transition-all duration-300 shadow-lg`}>
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-sm border border-gray-100">
                        <Image src={experience.logo} alt={`${experience.company} logo`} width={32} height={32} className="w-8 h-8 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground">{experience.position}</h3>
                        <p className={`text-${experience.colorClass} font-medium text-sm`}>{experience.company}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        {experience.type}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{experience.description}</p>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className={`px-2 py-1 bg-${experience.colorClass}/10 text-${experience.colorClass.replace("500", "600")} text-xs rounded-full`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

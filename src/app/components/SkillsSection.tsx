// src/app/components/SkillsSection.tsx
"use client";

import { Code, Server, Settings, Cloud, Zap, Network } from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: ReactElement;
  skills: Skill[];
  color: string;
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", icon: "https://skillicons.dev/icons?i=react", color: "text-blue-500" },
        { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs", color: "text-black dark:text-white" },
        { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts", color: "text-blue-600" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js", color: "text-yellow-500" },
        { name: "HTML5", icon: "https://skillicons.dev/icons?i=html", color: "text-orange-500" },
        { name: "CSS3", icon: "https://skillicons.dev/icons?i=css", color: "text-blue-500" },
        { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind", color: "text-cyan-500" },
        { name: "Vue.js", icon: "https://skillicons.dev/icons?i=vue", color: "text-green-500" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs", color: "text-green-500" },
        { name: "Python", icon: "https://skillicons.dev/icons?i=python", color: "text-blue-400" },
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql", color: "text-blue-600" },
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb", color: "text-green-500" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql", color: "text-blue-600" },
        { name: "Express.js", icon: "https://skillicons.dev/icons?i=express", color: "text-gray-600" },
        { name: "Django", icon: "https://skillicons.dev/icons?i=django", color: "text-green-600" },
        { name: "Flask", icon: "https://skillicons.dev/icons?i=flask", color: "text-gray-600" },
      ],
    },
    {
      title: "DevOps & CI/CD",
      icon: <Settings className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker", color: "text-blue-500" },
        { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes", color: "text-blue-600" },
        { name: "Git", icon: "https://skillicons.dev/icons?i=git", color: "text-orange-500" },
        { name: "GitHub", icon: "https://skillicons.dev/icons?i=github", color: "text-gray-700 dark:text-gray-300" },
        { name: "Jenkins", icon: "https://skillicons.dev/icons?i=jenkins", color: "text-orange-500" },
        { name: "GitHub Actions", icon: "https://skillicons.dev/icons?i=githubactions", color: "text-gray-700" },
        { name: "Terraform", icon: "https://skillicons.dev/icons?i=terraform", color: "text-purple-500" },
        { name: "Ansible", icon: "https://skillicons.dev/icons?i=ansible", color: "text-red-500" },
      ],
    },
    {
      title: "Cloud Computing",
      icon: <Cloud className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", icon: "https://skillicons.dev/icons?i=aws", color: "text-orange-500" },
        { name: "Azure", icon: "https://skillicons.dev/icons?i=azure", color: "text-blue-500" },
        { name: "Google Cloud", icon: "https://skillicons.dev/icons?i=gcp", color: "text-blue-400" },
        { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase", color: "text-yellow-500" },
        { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel", color: "text-black dark:text-white" },
        { name: "Netlify", icon: "https://skillicons.dev/icons?i=netlify", color: "text-cyan-500" },
        { name: "Heroku", icon: "https://skillicons.dev/icons?i=heroku", color: "text-purple-500" },
      ],
    },
    {
      title: "Automation & RPA",
      icon: <Zap className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500",
      skills: [
        {
          name: "UiPath",
          icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0ZGNTcwMCIvPgo8cGF0aCBkPSJNMTYgMTJoMTZ2NmgtMTZWMTJaTTE2IDI0aDE2djZoLTE2VjI0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDMwaDZ2NmgtNlYzMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNCAzMGg2djZoLTZWMzBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=",
          color: "text-orange-500",
        },
        {
          name: "Power Automate",
          icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzAwNzhkNCIvPgo8cGF0aCBkPSJNMTIgMTJoMjRsLTggOEgxMlYxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMiAyOGgxNmw4LThoLTI0djhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=",
          color: "text-blue-500",
        },
        { name: "Selenium", icon: "https://skillicons.dev/icons?i=selenium", color: "text-green-500" },
        {
          name: "Puppeteer",
          icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzAwZDY4NCIvPgo8cGF0aCBkPSJNMTYgMTZoMTZ2NGgtMTZWMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMjRoMTZ2NGgtMTZWMjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMzJoMTZ2NGgtMTZWMzJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=",
          color: "text-green-400",
        },
        {
          name: "Zapier",
          icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0ZGNDUwMCIvPgo8cGF0aCBkPSJNMTIgMTJoMjRsLTggOEgyMGwtOC04WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDM2aDI0bC04LThoLTgtOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNCAyNGg4djhoLTh2LThaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=",
          color: "text-orange-400",
        },
        {
          name: "Power BI",
          icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0ZGQzAwMCIvPgo8cGF0aCBkPSJNMTIgMTJoOHYyNGgtOFYxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNCAxNmg4djIwaC04VjE2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM2IDIwaDh2MTZoLThWMjBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=",
          color: "text-yellow-500",
        },
      ],
    },
    {
      title: "Network & Infrastructure",
      icon: <Network className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        {
          name: "MikroTik",
          icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0RDMjYyNiIvPgo8cGF0aCBkPSJNMTIgMTJoMjR2NkgxMlYxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMiAyNGgxNnY2SDEyVjI0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDM2aDh2NkgxMlYzNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNCAzNmg4djZoLThWMzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=",
          color: "text-red-500",
        },
        { name: "Linux", icon: "https://skillicons.dev/icons?i=linux", color: "text-gray-700 dark:text-gray-300" },
        { name: "Ubuntu", icon: "https://skillicons.dev/icons?i=ubuntu", color: "text-orange-500" },
        { name: "Windows Server", icon: "https://skillicons.dev/icons?i=windows", color: "text-blue-500" },
        {
          name: "XCP-ng",
          icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzAwNzhkNCIvPgo8cGF0aCBkPSJNMTIgMTJoMjRsLTggOEgxMlYxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yOCAxMnY4aC04VjEyaDhaIiBmaWxsPSIjMDA3OGQ0Ii8+CjxwYXRoIGQ9Ik0xMiAyOGgxNmw4LThoLTI0djhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjggMjh2OGgtOHYtOGg4WiIgZmlsbD0iIzAwNzhkNCIvPgo8cGF0aCBkPSJNMTIgMTJoMjRsLTggOEgxMlYxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMiAzNmgyNGwtOC04SDEydjhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=",
          color: "text-blue-500",
        },
        {
          name: "VMware",
          icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzMzN0FCOCIvPgo8cGF0aCBkPSJNMTIgMTJoMjRsLTggOEgxMlYxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMiAyMGgxNnY4SDEyVjIwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDM2aDI0bC04LThoLTI0djhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjggMjBoOHY4aC04VjIwWiIgZmlsbD0iIzMzN0FCOCIvPgo8cGF0aCBkPSJNMjggMzJoOHY0aC04VjMyWiIgZmlsbD0iIzMzN0FCOCIvPgo8L3N2Zz4=",
          color: "text-blue-600",
        },
        {
          name: "Proxmox",
          icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0Y5NzMxNiIvPgo8cGF0aCBkPSJNMTIgMTJoMjR2NkgxMlYxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMiAyNGgxNnY2SDEyVjI0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDM2aDh2NkgxMlYzNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNCAzNmg4djZoLThWMzZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzYgMzZoNHY2aC00VjM2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+",
          color: "text-orange-500",
        },
        { name: "PowerShell", icon: "https://skillicons.dev/icons?i=powershell", color: "text-blue-600" },
      ],
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, skillName: string, categoryColor: string) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `<div class="w-8 h-8 bg-gradient-to-r ${categoryColor} rounded-lg text-white text-sm flex items-center justify-center font-bold">${skillName.charAt(0)}</div>`;
    }
  };

  return (
    <section id="skills" className="py-16 relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">SKILLS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A collection of my technical skills and expertise honed through various projects and experiences</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="group relative">
              {/* Category Card */}
              <div className="p-6 bg-muted/20 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>{category.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group/skill relative p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                      {/* Skill Content */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200">
                          <Image src={skill.icon} alt={skill.name} width={32} height={32} className="w-8 h-8 object-contain" onError={(e) => handleImageError(e, skill.name, category.color)} unoptimized />
                        </div>
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

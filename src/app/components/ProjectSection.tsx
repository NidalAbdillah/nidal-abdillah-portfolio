// src/app/components/ProjectsSection.tsx
"use client";

import { ExternalLink, Code, Server, Cpu, Bot } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  type: "web" | "infrastructure" | "automation" | "ai";
  featured: boolean;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Internship Portal - PT Telkom Indonesia",
      description:
        "Developed a comprehensive web application for student internship management at PT Telkom Indonesia. Built with React.js frontend and Express.js backend, featuring user authentication, application tracking, document management with MinIO storage, and PostgreSQL database with Sequelize ORM.",
      category: "Web Development",
      technologies: ["React.js", "Express.js", "PostgreSQL", "MinIO", "Sequelize"],
      image: "/projects/internship-portal.png",
      type: "web",
      featured: true,
    },
    {
      id: "2",
      title: "Simple Online Bookstore",
      description:
        "Created a basic online bookstore platform as a university learning project. This simple web application helped me understand full-stack development concepts using React.js frontend, Express.js backend, and PostgreSQL database. A foundational project for learning web development fundamentals.",
      category: "Learning Project",
      technologies: ["React.js", "Express.js", "PostgreSQL", "MinIO", "Sequelize"],
      image: "/projects/bookstore.png",
      type: "web",
      featured: false,
    },
    {
      id: "3",
      title: "Kubernetes Cluster Infrastructure",
      description:
        "Designed and deployed a production-ready Kubernetes cluster with multiple master nodes and worker nodes on Ubuntu servers. Integrated Rancher GUI for cluster management, providing scalable container orchestration infrastructure for enterprise applications at Telkom.",
      category: "Infrastructure",
      technologies: ["Kubernetes", "Ubuntu", "Rancher", "Docker", "Linux"],
      image: "/projects/kubernetes-cluster.png",
      type: "infrastructure",
      featured: true,
    },
    {
      id: "4",
      title: "Comprehensive Monitoring System",
      description:
        "Built enterprise-grade monitoring solution using Prometheus, Grafana, and custom exporters to monitor VMs, Mikrotik networks, XCP-ng servers, VMware infrastructure, room temperature, and device temperatures. Integrated Microsoft Teams alerts for instant notifications to research lab team.",
      category: "Monitoring & DevOps",
      technologies: ["Prometheus", "Grafana", "Exporters", "Microsoft Teams", "Monitoring"],
      image: "/projects/monitoring-dashboard.png",
      type: "infrastructure",
      featured: true,
    },
    {
      id: "5",
      title: "Server Infrastructure Setup",
      description:
        "Deployed and configured enterprise server infrastructure using XCP-ng hypervisor and TrueNAS storage management system. Implemented high-availability storage solutions and virtualization platform for production workloads in research lab environment.",
      category: "Infrastructure",
      technologies: ["XCP-ng", "TrueNAS", "Virtualization", "Storage", "Server"],
      image: "/projects/server-infrastructure.png",
      type: "infrastructure",
      featured: false,
    },
    {
      id: "6",
      title: "Basic Mikrotik Configuration",
      description:
        "Learned and practiced basic Mikrotik network device configuration in work environment. Performed simple routing, firewall setup, and basic network configurations. This was part of my learning process in network administration with beginner-level implementations.",
      category: "Network Learning",
      technologies: ["Mikrotik", "Basic Routing", "Firewall", "Network", "Learning"],
      image: "/projects/mikrotik-config.png",
      type: "infrastructure",
      featured: false,
    },
    {
      id: "7",
      title: "MEC Support with OSM",
      description:
        "Provided support assistance for Multi-Edge Computing (MEC) implementation using OSM (Open Source MANO) orchestrator running on Kubernetes. Helped senior team members with infrastructure preparation and testing processes for telecommunications MEC deployment.",
      category: "Support Role",
      technologies: ["OSM", "Kubernetes", "MEC", "Support", "Learning"],
      image: "/projects/mec-osm.png",
      type: "infrastructure",
      featured: false,
    },
    {
      id: "8",
      title: "UiPath Automation Suite",
      description:
        "Developed complex automation workflows using UiPath for thesis defense draft generation and automatic certificate creation. Implemented end-to-end automation following existing business processes, handling document generation, approval workflows, and certificate printing.",
      category: "Process Automation",
      technologies: ["UiPath", "RPA", "Automation", "Document Processing", "Workflow"],
      image: "/projects/uipath-automation.png",
      type: "automation",
      featured: true,
    },
    {
      id: "9",
      title: "AI Workstation Setup",
      description:
        "Built and configured high-performance AI workstation for machine learning tasks and deployed local AI applications using Ollama. Set up hardware optimization for AI workloads and implemented self-hosted AI solutions for research purposes in office environment.",
      category: "AI Infrastructure",
      technologies: ["Ollama", "AI Setup", "Hardware", "Local AI", "Configuration"],
      image: "/projects/ai-deployment.jpg",
      type: "ai",
      featured: false,
    },
    {
      id: "10",
      title: "N8N Workflow Automation",
      description:
        "Created various automation workflows using N8N including chatbot development, AI-powered CV scoring system, and intelligent agents for daily task automation. Implemented multiple integrations and automated processes for productivity enhancement in work environment.",
      category: "Workflow Automation",
      technologies: ["N8N", "Chatbot", "AI Integration", "Automation", "Workflows"],
      image: "/projects/n8n-workflows.png",
      type: "automation",
      featured: true,
    },
    {
      id: "11",
      title: "GitLab CI/CD Implementation",
      description:
        "Implemented continuous integration and deployment pipelines using GitLab CI/CD with GitLab Runner. Set up automated testing, building, and deployment processes for applications, ensuring reliable and efficient software delivery workflows in development environment.",
      category: "DevOps",
      technologies: ["GitLab CI/CD", "GitLab Runner", "DevOps", "Pipeline", "Automation"],
      image: "/projects/cicd-pipeline.png",
      type: "infrastructure",
      featured: false,
    },
  ];

  const getIconByType = (type: string) => {
    switch (type) {
      case "web":
        return <Code className="w-5 h-5" />;
      case "infrastructure":
        return <Server className="w-5 h-5" />;
      case "automation":
        return <Cpu className="w-5 h-5" />;
      case "ai":
        return <Bot className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getColorByType = (type: string) => {
    switch (type) {
      case "web":
        return "blue-500";
      case "infrastructure":
        return "green-500";
      case "automation":
        return "purple-500";
      case "ai":
        return "red-500";
      default:
        return "gray-500";
    }
  };

  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">PROJECTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-background/80 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${getColorByType(project.type)}/10 text-${getColorByType(project.type)} backdrop-blur-sm`}>
                    {getIconByType(project.type)}
                    <span className="ml-1">{project.category}</span>
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 backdrop-blur-sm">Featured</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={`px-2 py-1 bg-${getColorByType(project.type)}/10 text-${getColorByType(project.type)} text-xs rounded-full`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 bg-${getColorByType(project.type)}/10 text-${getColorByType(project.type)} rounded-lg hover:bg-${getColorByType(project.type)}/20 transition-colors text-sm font-medium`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

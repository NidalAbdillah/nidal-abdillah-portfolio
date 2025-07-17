// src/app/components/EducationSection.tsx
"use client";

import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
  logo: string;
  type: "university" | "highschool";
  colorClass: string;
}

export function EducationSection() {
  const educations: Education[] = [
    {
      id: "1",
      degree: "Bachelor of Informatics Engineering",
      institution: "Widyatama University",
      location: "Bandung, West Java",
      period: "2021 - 2025",
      grade: "3.68 GPA",
      description:
        "I completed my Bachelor's degree in Informatics Engineering from Widyatama University, Bandung. During my studies, I gained a strong foundation in software development, web technologies, database management, and computer networks. I have studied comprehensive courses such as Data Structures, Algorithms, Object-Oriented Programming, Software Engineering, Web Development, Database Systems, and Network Administration.",
      logo: "/widyatama.png",
      type: "university",
      colorClass: "primary",
    },
    {
      id: "2",
      degree: "Computer and Network Engineering",
      institution: "SMKN 1 Rancaekek",
      location: "Rancaekek, West Java",
      period: "2015 - 2018",
      grade: "85 Average",
      description:
        "I completed my vocational education in Computer and Network Engineering at SMKN 1 Rancaekek. During my time at SMK, I gained practical knowledge in computer hardware, network infrastructure, operating systems, and basic programming. I studied subjects such as Computer Assembly, Network Configuration, Windows & Linux Administration, Basic Programming, and Network Troubleshooting.",
      logo: "/smk.png",
      type: "highschool",
      colorClass: "purple-500",
    },
  ];

  return (
    <section id="education" className="py-16 relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">EDUCATION</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">My education has been a journey of learning and development. Here are the details of my academic background</p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 to-purple-500/50"></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {/* University - Left Side */}
            <div className="relative flex items-center">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-primary/20 flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm">
                  <Image src={educations[0].logo} alt={`${educations[0].institution} logo`} width={48} height={48} className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Card - Left */}
              <div className="w-full max-w-md mr-auto pr-12">
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-sm border border-gray-100">
                      <Image src={educations[0].logo} alt={`${educations[0].institution} logo`} width={32} height={32} className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{educations[0].degree}</h3>
                      <p className="text-primary font-medium text-sm">{educations[0].institution}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {educations[0].location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {educations[0].period}
                    </div>
                  </div>

                  {/* Grade */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-foreground">Grade: {educations[0].grade}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{educations[0].description}</p>
                </div>
              </div>
            </div>

            {/* SMK - Right Side */}
            <div className="relative flex items-center">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-purple-500/20 flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm">
                  <Image src={educations[1].logo} alt={`${educations[1].institution} logo`} width={48} height={48} className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Card - Right */}
              <div className="w-full max-w-md ml-auto pl-12">
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-lg">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-sm border border-gray-100">
                      <Image src={educations[1].logo} alt={`${educations[1].institution} logo`} width={32} height={32} className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{educations[1].degree}</h3>
                      <p className="text-purple-500 font-medium text-sm">{educations[1].institution}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {educations[1].location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {educations[1].period}
                    </div>
                  </div>

                  {/* Grade */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-foreground">Grade: {educations[1].grade}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{educations[1].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

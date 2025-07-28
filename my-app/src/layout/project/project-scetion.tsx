// components/project/project-section.tsx

"use client";

import { useState } from "react";
import { projects } from "@/data/project-home";
import { Badge } from "@/components/ui/bedge";
import { ProjectDesktop } from "@/components/project/project-desktop";
import { ProjectMobile } from "@/components/project/project-mobile";
import MagneticButton from "@/components/button/magnetic-button";
import { Sparkles } from "lucide-react";

export function ProjectSection() {
  const filterCategories = [
    { label: "All", value: "All" },
    { label: "Fullstack", value: "Full Stack Development" },
    { label: "Design", value: "Design & Development" },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") {
      return true;
    }
    return project.service === activeFilter;
  });

  return (
    <div className="relative pt-20 lg:pt-24">
      <div className="text-center mb-10 lg:mb-14 px-4 lg:px-8">
        <Badge text="Featured Work" icon={<Sparkles className="w-4 h-4" />} />
        <h2 className="text-5xl lg:text-7xl font-black text-gradient animate-gradientText mb-2 lg:mb-4">
          Recent Projects
        </h2>
        <p className="text-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent work, featuring innovative solutions and
          cutting-edge technologies
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex justify-start items-center gap-2 lg:gap-8 mb-10 lg:mb-14 px-4 lg:px-12">
        {filterCategories.map((category) => (
          <MagneticButton
            key={category.value}
            isActive={activeFilter === category.value}
            className="px-8 lg:px-12 !font-light"
            onClick={() => setActiveFilter(category.value)}
          >
            {category.label}
          </MagneticButton>
        ))}
      </div>

      <div className="hidden md:block">
        <ProjectDesktop projects={filteredProjects} />
      </div>

      <div className="block md:hidden">
        <ProjectMobile projects={filteredProjects} />
      </div>
    </div>
  );
}

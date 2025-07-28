"use client";

import { Sparkles } from "lucide-react";
import { projects } from "@/data/project-home";
import { Badge } from "./ui/bedge";
import MagneticButton from "./button/magnetic-button";
import { ProjectDesktop } from "./project/project-desktop";
import { ProjectMobile } from "./project/project-mobile";

export function ProjectSection() {
  const projectsForDesktop = projects.slice(0, 5);
  const projectsForMobile = projects.slice(0, 3);

  return (
    <div id="projects-section" className="relative pt-20 lg:pt-24">
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

      <div className="hidden md:block">
        <ProjectDesktop projects={projectsForDesktop} />
      </div>

      <div className="block md:hidden">
        <ProjectMobile projects={projectsForMobile} />
      </div>

      <div className="flex justify-center mt-8 md:mt-0">
        <MagneticButton href="/projects" className="px-8 md:px-12">
          <div className="flex items-start font-light text-sm gap-2">
            <span className="mt-1"> All Projects</span>
            <span>{projects.length}</span>
          </div>
        </MagneticButton>
      </div>
    </div>
  );
}

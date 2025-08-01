"use client";

import { projects } from "@/data/project-data";
import { Badge } from "@/components/ui/bedge";
import { ProjectDesktop } from "@/components/project/project-desktop";
import { ProjectMobile } from "@/components/project/project-mobile";
import { Sparkles } from "lucide-react";
import { SlideUp } from "@/components/animated/slide-up";
import { ButtonMagnetic } from "@/components/ui/button";
import Link from "next/link";

export function ProjectSection() {
  const projectsForDesktop = projects.slice(0, 5);
  const projectsForMobile = projects.slice(0, 3);

  return (
    <div id="projects-section" className="relative pt-20 lg:pt-24">
      <div className="text-center mb-10 lg:mb-14 px-4 lg:px-8">
        <Badge text="Featured Work" icon={<Sparkles className="w-4 h-4" />} />

        <SlideUp
          el="h2"
          text="Recent Projects"
          className="text-5xl lg:text-7xl font-semibold text-foreground mb-2 lg:mb-4"
        />
        <SlideUp
          el="p"
          text="A showcase of my recent work, featuring innovative solutions and cutting-edge technologies"
          className="text-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
        />
      </div>

      <div className="hidden md:block">
        <ProjectDesktop projects={projectsForDesktop} />
      </div>

      <div className="block md:hidden">
        <ProjectMobile projects={projectsForMobile} />
      </div>

      <div className="flex justify-center py-10 xl:py-24">
        <Link href="/projects" aria-label="Lihat semua proyek">
          <ButtonMagnetic padding="py-5 px-8 md:px-12">
            <div className="flex items-start font-light text-sm gap-2">
              <div className="mt-1"> All Projects</div>
              <div>{projects.length}</div>
            </div>
          </ButtonMagnetic>
        </Link>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/project-home";

interface ProjectMobileProps {
  projects: Project[];
}

export function ProjectMobile({ projects }: ProjectMobileProps) {
  return (
    <div className="flex flex-col space-y-8 px-4">
      {projects.map((project, index) => (
        <div key={index} className="overflow-hidden">
          <div className="bg-[#F2EEE7] dark:bg-[#1a1a1a] flex justify-center pt-10 relative rounded-t-2xl">
            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/20 dark:from-white/10"></div>
            <div className="relative w-full h-[30dvh] overflow-hidden">
              <Image
                src={project.imgProject.mobile}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-[#F2EEE7] dark:bg-[#1a1a1a] px-4 py-8 rounded-b-2xl">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.textHover.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-1">
                {project.title}
              </h2>
              <div className="flex justify-between items-center mb-2 text-sm text-foreground/80">
                <p className="text-foreground/80 text-sm">{project.service}</p>
                <p className="text-foreground/80 text-sm">{project.year}</p>
              </div>
              <p className="text-foreground/80 text-xs line-clamp-5 min-h-[5rem]">
                {project.description}
              </p>
            </div>
            <Link href={`/projects/${project.slug}`} rel="noopener noreferrer">
              <button className="flex items-center gap-2 w-full justify-center bg-gradient animate-gradientShift text-white font-bold py-3 px-8 rounded-full mt-4">
                <ExternalLink className="h-5 w-5" />
                View
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

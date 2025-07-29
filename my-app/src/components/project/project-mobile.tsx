"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/project-home";
import { SlideUp } from "../animated/slide-up";
import { motion } from "framer-motion";

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
              <div className="flex flex-wrap gap-2 mb-4">
                {project.textHover.map((tag) => (
                  <div key={tag} className="overflow-hidden">
                    <motion.p
                      initial={{ y: "100%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                      className="px-3 py-1 text-xs text-center font-medium rounded-full glass bg-background text-foreground/80"
                    >
                      {tag}
                    </motion.p>
                  </div>
                ))}
              </div>

              <SlideUp
                el="h2"
                text={project.title}
                className="text-3xl font-bold text-foreground mb-1"
              />

              <div className="flex justify-between items-center mb-2 text-sm text-foreground/80">
                <SlideUp
                  el="p"
                  text={project.service}
                  className="text-foreground/80 text-sm"
                />

                <SlideUp
                  el="p"
                  text={project.year}
                  className="text-foreground/80 text-sm"
                />
              </div>

              <SlideUp
                el="p"
                text={project.description}
                className="text-foreground/80 text-sm"
              />
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

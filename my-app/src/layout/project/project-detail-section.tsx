"use client";

import { projects } from "@/data/project-home";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/bedge";
import { useLayoutEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProjectDetailSection({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);

  const carouselImages = useMemo(() => {
    return [...(project?.imgProject.detail || [])];
  }, [project]);

  const parallaxContainerRef = useRef(null);
  const parallaxImageRef = useRef(null);

  useLayoutEffect(() => {
    if (!carouselImages[0]) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        parallaxImageRef.current,
        {
          yPercent: -15,
        },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: parallaxContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0,
          },
        }
      );
    }, parallaxContainerRef);

    return () => ctx.revert();
  }, [carouselImages]);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20 lg:pt-40">
      <div className="flex flex-col justify-start items-start max-w-7xl mx-auto mb-10 lg:mb-32 px-4 lg:px-0">
        <Badge text="Featured Work" icon={<Sparkles className="w-4 h-4" />} />
        <h2 className="text-5xl lg:text-7xl font-semibold text-foreground mb-12">
          {project.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-9 gap-8 md:space-x-16 w-full">
          <div className="md:col-span-3 flex flex-col">
            <h2 className="bg-foreground text-background px-2 w-fit text-center mb-2">
              App/Client
            </h2>
            <p className="border-b-2"></p>
            <h2 className="pt-2 text-foreground/80">{project.title}</h2>
          </div>
          <div className="md:col-span-3 flex flex-col">
            <h2 className="bg-foreground text-background px-2 w-fit text-center mb-2">
              Services
            </h2>
            <p className="border-b-2"></p>
            <h2 className="pt-2 text-foreground/80">{project.service}</h2>
          </div>
          <div className="md:col-span-3 flex flex-col">
            <h2 className="bg-foreground text-background px-2 w-fit text-center mb-2">
              Year
            </h2>
            <p className="border-b-2"></p>
            <h2 className="pt-2 text-foreground/80">{project.year}</h2>
          </div>
        </div>
      </div>

      <div
        ref={parallaxContainerRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {carouselImages[0] && (
          <Image
            ref={parallaxImageRef}
            src={carouselImages[0]}
            alt="Detail Proyek Parallax"
            fill
            priority
            className="absolute top-0 left-0 w-full h-[150%] object-cover"
          />
        )}
      </div>

      <div className="bg-background">
        <div className="flex flex-col justify-center items-start max-w-7xl mx-auto py-32 px-4 lg:px-0">
          <p className="text-foreground/80 text-3xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="bg-[#F2EEE7] dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-32 px-4 lg:px-0">
          {carouselImages.slice(1, 4).map((src, i) => (
            <div key={i} className="relative w-full aspect-[9/16]">
              <Image
                src={src}
                alt={`Mobile Preview ${i + 2}`}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { projects } from "@/data/project-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/bedge";
import { useLayoutEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlideUp } from "@/components/animated/slide-up";

export function ProjectDetailSection({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);

  const detailMedia = useMemo(() => {
    return [...(project?.imgProject.detail || [])];
  }, [project]);

  const imageUrls = detailMedia.filter((url) => !url.endsWith(".mp4"));
  const videoUrl = detailMedia.find((url) => url.endsWith(".mp4"));

  const parallaxContainerRef = useRef(null);
  const parallaxImageRef = useRef(null);
  const gridImagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const gridContainerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    if (!imageUrls[0]) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        parallaxImageRef.current,
        { yPercent: -15 },
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

      const gridContainers = gridImagesRef.current
        .map((img) => img?.parentElement)
        .filter(Boolean);

      const containerPositions = [
        { from: -100, to: 100 },
        { from: 0, to: 0 },
        { from: 100, to: -100 },
      ];

      gridContainers.forEach((container, i) => {
        gsap.fromTo(
          container as gsap.TweenTarget,
          { y: containerPositions[i].from },
          {
            y: containerPositions[i].to,
            ease: "none",
            scrollTrigger: {
              trigger: gridContainerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0,
            },
          }
        );
      });

      if (videoUrl) {
        gsap.fromTo(
          videoRef.current,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: videoContainerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [imageUrls, videoUrl]);

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
        className="relative w-full h-[30dvh] md:h-[50dvh] xl:h-[100dvh] overflow-hidden"
      >
        {imageUrls[0] && (
          <Image
            ref={parallaxImageRef}
            src={imageUrls[0]}
            alt="Detail Proyek Parallax"
            fill
            priority
            className="absolute top-0 left-0 w-full h-[120%] object-cover"
          />
        )}
      </div>

      <div className="bg-background">
        <div className="flex flex-col justify-center items-start max-w-7xl mx-auto py-20 xl:py-32 px-4 lg:px-0">
          <SlideUp
            el="p"
            className="text-foreground/80 text-xl lg:text-3xl leading-relaxed"
            text={project.description}
          />
        </div>
      </div>

      <div className="bg-[#F2EEE7] dark:bg-[#1a1a1a]">
        <div
          ref={gridContainerRef}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-20 xl:py-32 px-4 lg:px-8 xl:px-0"
        >
          {imageUrls.slice(1, 4).map((src, i) => (
            <div key={i} className="relative w-full aspect-[9/16]">
              <Image
                ref={(el) => {
                  gridImagesRef.current[i] = el;
                }}
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

      <div
        ref={videoContainerRef}
        className="relative w-full h-[30dvh] md:h-[50dvh] xl:h-[100dvh] overflow-hidden"
      >
        {videoUrl && (
          <video
            ref={videoRef}
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-[100%] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>

      <div className="bg-background">
        <div className="flex flex-col justify-center items-start max-w-7xl mx-auto py-20 xl:py-32 px-4 lg:px-0">
          <SlideUp
            el="p"
            className="text-foreground/80 text-xl lg:text-3xl leading-relaxed"
            text={project.description}
          />
        </div>
      </div>
    </div>
  );
}

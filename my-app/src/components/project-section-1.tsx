"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { projects } from "@/data/project-home";
import { ExternalLink, Sparkles } from "lucide-react";
import ShinyText from "./text/shiny-text";
import Link from "next/link";

export const ProjectSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (!isDesktop) return;
    const unsubscribe = scrollYProgress.on("change", (latestValue) => {
      const projectsCount = projects.length;
      const newIndex = Math.min(
        Math.floor(latestValue * projectsCount),
        projectsCount - 1
      );
      setActiveProjectIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress, isDesktop]);

  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      ref={sectionRef}
      id="projects"
      className={`relative ${
        isDesktop ? "h-[400vh]" : "h-auto"
      } md:pt-32 w-full bg-background`}
    >
      <div className="text-center mb-10">
        <div>
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium shadow-lg mb-4 lg:mb-8">
            <Sparkles className="w-4 h-4" />
            <ShinyText
              text="Featured Work"
              disabled={false}
              speed={4}
              className="text-foreground"
            />
          </span>
        </div>
        <h2 className="text-5xl lg:text-7xl font-black text-gradient animate-gradientText mb-2 lg:mb-4">
          Recent Projects
        </h2>
        <p className="text-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent work, featuring innovative solutions and
          cutting-edge technologies
        </p>
      </div>

      {isDesktop && (
        <div className="sticky top-36 max-w-7xl mx-auto h-[70vh]">
          <div className="flex h-full w-full items-center justify-center bg-[#f2eee7] dark:bg-[#1b1b1b] rounded-3xl">
            <div className="w-1/4 flex flex-col items-start justify-center gap-2 pl-12">
              {projects.map((project, index) => (
                <div
                  key={project.link + index}
                  className="relative w-fit cursor-default"
                >
                  <h2
                    className="text-md font-medium tracking-wide whitespace-nowrap overflow-hidden text-ellipsis max-w-xs sm:max-w-sm md:max-w-md"
                    style={{
                      opacity: index === activeProjectIndex ? 1 : 0.5,
                      transition: "opacity 0.3s",
                    }}
                  >
                    {project.link}
                  </h2>

                  <div className="absolute bottom-[1px] left-0 w-full h-[2px] overflow-hidden">
                    <AnimatePresence mode="wait">
                      {index === activeProjectIndex && (
                        <motion.div
                          className="h-full w-full bg-foreground"
                          initial={{ x: "-101%" }}
                          animate={{
                            x: 0,
                            opacity: 1,
                            transition: { duration: 0.8, ease: "easeInOut" },
                          }}
                          exit={{
                            x: "101%",
                            opacity: 0.5,
                            transition: { duration: 1, ease: "easeInOut" },
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 h-full relative"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCursorPosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCursorPosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
                setIsHoveringImage(true);
              }}
              onMouseLeave={() => setIsHoveringImage(false)}
            >
              <AnimatePresence>
                <motion.div
                  key={activeProject.imgProject.toString() + activeProjectIndex}
                  className="absolute inset-0 flex h-full w-full items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={activeProject.imgProject}
                    alt={activeProject.link}
                    fill
                    style={{ objectFit: "contain" }}
                    className="pt-24 pr-6"
                    priority={activeProjectIndex < 2}
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                {isHoveringImage && (
                  <motion.div
                    className="absolute z-10 flex items-center justify-center w-32 h-32 text-sm font-bold rounded-full pointer-events-none bg-gradient animate-gradientShift text-white"
                    initial={{
                      scale: 0,
                      opacity: 0,

                      x: cursorPosition.x,
                      y: cursorPosition.y,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x: cursorPosition.x,
                      y: cursorPosition.y,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      transition: { duration: 0.2, ease: "easeIn" },
                    }}
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        mass: 0.5,
                      },
                      y: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        mass: 0.5,
                      },
                      scale: { duration: 0.2, ease: "easeOut" },
                      opacity: { duration: 0.2, ease: "easeOut" },
                    }}
                    style={{
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                  >
                    <div className="flex items-end gap-2">
                      <ExternalLink className="h-6 w-6" />
                      Live Demo
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>

            <div className="w-1/2 flex flex-col justify-center pr-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProjectIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-3xl font-bold text-foreground">
                    {activeProject.title}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {activeProject.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      <div className="xl:hidden">
        <div className="bg-[#F2EEE7] dark:bg-[#1a1a1a] flex justify-center pt-10 relative">
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/20 dark:from-white/10"></div>
          <div className="relative w-full h-[40dvh] pt-10 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeProjectIndex}
                custom={direction}
                className="absolute inset-0"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  if (
                    info.offset.x < -50 &&
                    activeProjectIndex < projects.length - 1
                  ) {
                    setDirection("left");
                    setActiveProjectIndex((prev) => prev + 1);
                  } else if (info.offset.x > 50 && activeProjectIndex > 0) {
                    setDirection("right");
                    setActiveProjectIndex((prev) => prev - 1);
                  }
                }}
                variants={{
                  enter: (dir) => ({
                    x: dir === "left" ? 300 : -300,
                    opacity: 0,
                  }),
                  center: { x: 0, opacity: 1, transition: { duration: 0.3 } },
                  exit: (dir) => ({
                    x: dir === "left" ? -300 : 300,
                    opacity: 0,
                    transition: { duration: 0.3 },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ touchAction: "pan-y" }}
              >
                <Image
                  src={activeProject.imgProject.mobile}
                  alt={activeProject.title}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={activeProjectIndex < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-[#F2EEE7] dark:bg-[#1a1a1a] px-4 py-8">
          <div className="flex justify-start items-center gap-2 mb-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProjectIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeProjectIndex
                    ? "w-4 bg-black dark:bg-white"
                    : "bg-black/30 dark:bg-white/30"
                }`}
              />
            ))}
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {activeProject.textHover.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {activeProject.title}
            </h2>
            <p className="text-foreground/80 text-sm mb-2">
              {activeProject.service}
            </p>
            <p className="text-foreground/80 text-xs line-clamp-5 min-h-[5rem]">
              {activeProject.description}
            </p>
          </div>
          <Link
            href={activeProject.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 w-full justify-center bg-gradient animate-gradientShift text-white font-bold py-3 px-8 rounded-full">
              <ExternalLink className="h-5 w-5" />
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

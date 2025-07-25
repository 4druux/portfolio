"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Transition,
  useMotionValue,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";
import ShinyText from "./text/shiny-text";
import { ProjectItem } from "./project/project-item";
import { projects } from "@/data/project-home";
import Link from "next/link";

type MarqueeItem = {
  type: "text" | "img";
  value: string;
};

export function ProjectSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [bounds, setBounds] = useState<DOMRect | null>(null);
  const [cursorDirection, setCursorDirection] = useState<"top" | "bottom">(
    "top"
  );

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const smoothX = useSpring(motionX, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });
  const smoothY = useSpring(motionY, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  const velocityX = useVelocity(motionX);
  const velocityY = useVelocity(motionY);

  const MAX_VELOCITY = 600;
  const MAX_TEXT_OFFSET = 10;
  const MAX_IMAGE_OFFSET = 50;

  const textOffsetX = useTransform(
    velocityX,
    [-MAX_VELOCITY, MAX_VELOCITY],
    [-MAX_TEXT_OFFSET, MAX_TEXT_OFFSET]
  );
  const textOffsetY = useTransform(
    velocityY,
    [-MAX_VELOCITY, MAX_VELOCITY],
    [-MAX_TEXT_OFFSET, MAX_TEXT_OFFSET]
  );

  const imageOffsetX = useTransform(
    velocityX,
    [-MAX_VELOCITY, MAX_VELOCITY],
    [-MAX_IMAGE_OFFSET, MAX_IMAGE_OFFSET]
  );
  const imageOffsetY = useTransform(
    velocityY,
    [-MAX_VELOCITY, MAX_VELOCITY],
    [-MAX_IMAGE_OFFSET, MAX_IMAGE_OFFSET]
  );

  const springConfig = { stiffness: 200, damping: 25, mass: 1 };
  const smoothTextOffsetX = useSpring(textOffsetX, springConfig);
  const smoothTextOffsetY = useSpring(textOffsetY, springConfig);
  const smoothImageOffsetX = useSpring(imageOffsetX, springConfig);
  const smoothImageOffsetY = useSpring(imageOffsetY, springConfig);

  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [hoveredProjectImage, setHoveredProjectImage] = useState<{
    desktop: string;
    mobile: string;
  } | null>(null);

  const prevHoveredIndex = useRef<number | null>(null);
  useEffect(() => {
    prevHoveredIndex.current = hoveredIndex;
  }, [hoveredIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        motionX.set(e.clientX - rect.left);
        motionY.set(e.clientY - rect.top);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [motionX, motionY]);

  function getCursorDirection(
    e: React.MouseEvent,
    target: HTMLElement
  ): "top" | "bottom" {
    const bounds = target.getBoundingClientRect();
    const offsetY = e.clientY - bounds.top;
    return offsetY < bounds.height / 2 ? "top" : "bottom";
  }

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (hoveredIndex === null && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const cursorY = e.clientY - rect.top;
      setCursorDirection(cursorY < rect.height / 2 ? "top" : "bottom");
    }
    setHoveredIndex(index);
    setHoveredProjectImage(projects?.[index]?.imgProject || null);
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = e.currentTarget.getBoundingClientRect();
      setBounds({
        ...itemRect,
        top: itemRect.top - containerRect.top,
        left: 0,
        width: containerRect.width,
        height: itemRect.height,
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorDirection(getCursorDirection(e, e.currentTarget));
    setHoveredIndex(null);
    setHoveredProjectImage(null);
  };

  const activeProjectDesktop =
    hoveredIndex !== null ? projects?.[hoveredIndex] : null;
  const activeProjectMobile = projects[activeProjectIndex];

  const hoverDirection =
    hoveredIndex !== null &&
    prevHoveredIndex.current !== null &&
    hoveredIndex > prevHoveredIndex.current
      ? 1
      : -1;

  let marqueeItems: MarqueeItem[] = [];
  if (activeProjectDesktop) {
    const { textHover = [], imgHover = [] } = activeProjectDesktop;
    const maxLength = Math.max(textHover.length, imgHover.length);
    const ordered = Array.from({ length: maxLength * 2 })
      .map((_, i) => {
        const isText = i % 2 === 0;
        const idx = Math.floor(i / 2);
        if (isText && textHover?.[idx]) {
          return { type: "text", value: textHover[idx] };
        } else if (!isText && imgHover?.[idx]) {
          return { type: "img", value: imgHover[idx] };
        }
        return null;
      })
      .filter(Boolean) as MarqueeItem[];
    marqueeItems = [...ordered, ...ordered];
  }

  const clipPathFromTop = "inset(0% 0% 100% 0%)";
  const clipPathFromBottom = "inset(100% 0% 0% 0%)";
  const clipPathVisible = "inset(0% 0% 0% 0%)";

  const transition: Transition = shouldReduceMotion
    ? { type: "tween", duration: 0 }
    : { type: "spring", stiffness: 100, damping: 20, mass: 1 };


  return (
    <div className="relative pt-24 xl:pt-32">
      <div className="text-center mb-10 lg:mb-14 px-4 lg:px-8">
        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium shadow-lg mb-4 lg:mb-8">
          <Sparkles className="w-4 h-4" />
          <ShinyText
            text="Featured Work"
            disabled={false}
            speed={4}
            className="text-foreground"
          />
        </span>
        <h2 className="text-5xl lg:text-7xl font-black text-gradient animate-gradientText mb-2 lg:mb-4">
          Recent Projects
        </h2>
        <p className="text-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent work, featuring innovative solutions and
          cutting-edge technologies
        </p>
      </div>

      <div className="hidden xl:block">
        <div
          ref={containerRef}
          onMouseLeave={handleMouseLeave}
          className="relative flex flex-col max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                className="absolute z-50 flex items-center justify-center w-[500px] h-[500px] bg-black dark:bg-white pointer-events-none overflow-hidden"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  scale: { type: "spring", stiffness: 300, damping: 25 },
                }}
                style={{
                  top: 0,
                  left: 0,
                  x: smoothX,
                  y: smoothY,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              >
                <AnimatePresence custom={hoverDirection}>
                  <motion.div
                    key={hoveredProjectImage?.desktop}
                    custom={hoverDirection}
                    initial={{
                      y: hoverDirection > 0 ? "100%" : "-100%",
                      opacity: 0,
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                      },
                    }}
                    exit={{
                      y: hoverDirection > 0 ? "-100%" : "100%",
                      opacity: 0,
                      transition: {
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                      },
                    }}
                    className="absolute inset-0"
                  >
                    {hoveredProjectImage && (
                      <motion.div
                        className="w-full h-full"
                        style={{
                          x: smoothImageOffsetX,
                          y: smoothImageOffsetY,
                        }}
                      >
                        <Image
                          src={hoveredProjectImage.desktop}
                          alt={activeProjectDesktop?.title || "Project"}
                          fill
                          sizes="550px"
                          className="object-contain p-4"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
                <div className="relative z-10 flex items-center justify-center w-24 h-24 text-sm font-bold rounded-full bg-gradient animate-gradientShift text-white">
                  <motion.span
                    style={{
                      x: smoothTextOffsetX,
                      y: smoothTextOffsetY,
                      display: "inline-block",
                    }}
                  >
                    View
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {bounds && activeProjectDesktop && (
              <motion.div
                key="hover-bg-marquee"
                initial={{
                  opacity: 1,
                  top: bounds.top,
                  height: bounds.height,
                  clipPath:
                    cursorDirection === "top"
                      ? clipPathFromTop
                      : clipPathFromBottom,
                }}
                animate={{
                  opacity: 1,
                  top: bounds.top,
                  height: bounds.height,
                  clipPath: clipPathVisible,
                }}
                exit={{
                  opacity: 1,
                  top: bounds.top,
                  height: bounds.height,
                  clipPath:
                    cursorDirection === "top"
                      ? clipPathFromTop
                      : clipPathFromBottom,
                }}
                transition={transition}
                className="absolute left-0 w-full bg-black dark:bg-white z-20 pointer-events-none overflow-hidden flex items-center"
                style={{ position: "absolute" }}
              >
                <motion.div
                  className="flex gap-10 whitespace-nowrap"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: "-50%", opacity: 1 }}
                  transition={{
                    opacity: { delay: 0.2, duration: 0.4 },
                    x: {
                      repeat: Infinity,
                      ease: "linear",
                      duration: 15,
                    },
                  }}
                >
                  {marqueeItems.map((item, idx) =>
                    item.type === "text" ? (
                      <span
                        key={`text-${idx}`}
                        className="text-white dark:text-neutral-900 text-5xl pt-5 px-4"
                      >
                        {item.value}
                      </span>
                    ) : (
                      <div
                        key={`img-${idx}`}
                        className="w-[160px] h-[80px] rounded-full overflow-hidden bg-neutral-800"
                      >
                        <Image
                          src={item.value}
                          alt={`hover-img-${idx}`}
                          width={200}
                          height={90}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mb-10 relative">
            {projects.map((project, i) => (
              <ProjectItem
                key={i}
                onMouseEnter={(e) => handleMouseEnter(e, i)}
                title={project.title}
                service={project.service}
              />
            ))}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 mix-blend-difference z-30 pointer-events-none" />
          </div>
        </div>
      </div>

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
                  src={activeProjectMobile.imgProject.mobile}
                  alt={activeProjectMobile.title}
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
              {activeProjectMobile.textHover.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {activeProjectMobile.title}
            </h2>
            <p className="text-foreground/80 text-sm mb-2">
              {activeProjectMobile.service}
            </p>
            <p className="text-foreground/80 text-xs line-clamp-5 min-h-[5rem]">
              {activeProjectMobile.description}
            </p>
          </div>
          <Link
            href={activeProjectMobile.link || "#"}
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
}

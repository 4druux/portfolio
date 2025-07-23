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
import { Sparkles } from "lucide-react";
import ShinyText from "./text/shiny-text";
import { ProjectItem } from "./project/project-item";
import { projects } from "@/data/project-home";

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

  // 2. Gunakan useSpring agar gerakan teks lebih halus (tidak kaku)
  const springConfig = { stiffness: 200, damping: 25, mass: 1 };
  const smoothTextOffsetX = useSpring(textOffsetX, springConfig);
  const smoothTextOffsetY = useSpring(textOffsetY, springConfig);

  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [hoveredProjectImage, setHoveredProjectImage] = useState<string | null>(
    null
  );

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

  const activeProject = hoveredIndex !== null ? projects?.[hoveredIndex] : null;

  const direction =
    hoveredIndex !== null &&
    prevHoveredIndex.current !== null &&
    hoveredIndex > prevHoveredIndex.current
      ? 1
      : -1;

  let marqueeItems: MarqueeItem[] = [];
  if (activeProject) {
    const { textHover = [], imgHover = [] } = activeProject;
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

  const slideVariants = {
    initial: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      y: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    }),
  };

  return (
    <div id="projects" className="relative">
      <div className="text-center mb-10">
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

      <div
        ref={containerRef}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="absolute z-50 flex items-center justify-center  w-[450px] h-[450px] pointer-events-none overflow-hidden"
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
              <AnimatePresence custom={direction}>
                <motion.div
                  key={hoveredProjectImage}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0"
                >
                  {hoveredProjectImage && (
                    <Image
                      src={hoveredProjectImage}
                      alt={activeProject?.title || "Project"}
                      fill
                      sizes="200px"
                      className="object-contain pt-10"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="relative z-10 flex items-center justify-center w-20 h-20 text-sm font-bold rounded-full bg-gradient animate-gradientShift text-white">
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
          {bounds && activeProject && (
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
  );
}

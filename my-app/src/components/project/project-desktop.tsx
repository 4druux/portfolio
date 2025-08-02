"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useVelocity,
  useTransform,
  useSpring,
  type Transition,
} from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/project-data";
import { useCursorFollow } from "@/hooks/use-cursor-follow";
import Link from "next/link";
import { CursorFollow } from "../ui/cursor-follow";
import { ProjectList } from "./project-list";
import { ProjectHeader } from "./project-header";

type MarqueeItem = {
  type: "text" | "img";
  value: string;
};

interface ProjectDesktopProps {
  projects: Project[];
  enableListAnimation?: boolean;
}

export function ProjectDesktop({
  projects,
  enableListAnimation = false,
}: ProjectDesktopProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [bounds, setBounds] = useState<DOMRect | null>(null);
  const [cursorDirection, setCursorDirection] = useState<"top" | "bottom">(
    "top"
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const { mouseX, mouseY } = useCursorFollow(containerRef);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });
  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const MAX_VELOCITY = 600;
  const MAX_IMAGE_OFFSET = 50;

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
  const smoothImageOffsetX = useSpring(imageOffsetX, springConfig);
  const smoothImageOffsetY = useSpring(imageOffsetY, springConfig);

  const shouldReduceMotion = useReducedMotion();
  const [hoveredProjectImage, setHoveredProjectImage] = useState<{
    desktop: string;
    mobile: string;
  } | null>(null);

  const prevHoveredIndex = useRef<number | null>(null);

  useEffect(() => {
    prevHoveredIndex.current = hoveredIndex;
  }, [hoveredIndex]);

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
    <div
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col max-w-7xl mx-auto"
    >
      <AnimatePresence>
        {hoveredIndex !== null && (
          <>
            <motion.div
              className="absolute w-[400px] h-[400px] pointer-events-none overflow-hidden bg-white mix-blend-difference"
              style={{
                top: 0,
                left: 0,
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
                zIndex: 50,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                scale: { type: "spring", stiffness: 300, damping: 25 },
              }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] pointer-events-none overflow-hidden"
              style={{
                top: 0,
                left: 0,
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
                zIndex: 50,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                scale: { type: "spring", stiffness: 300, damping: 25 },
              }}
            >
              <div className="relative flex items-center justify-center w-full h-full">
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
                        style={{ x: smoothImageOffsetX, y: smoothImageOffsetY }}
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

                {activeProjectDesktop && (
                  <Link
                    href={`/projects/${activeProjectDesktop.slug}`}
                    className="relative z-10"
                  >
                    <CursorFollow text="View" mouseX={mouseX} mouseY={mouseY} />
                  </Link>
                )}
              </div>
            </motion.div>
          </>
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
                x: { repeat: Infinity, ease: "linear", duration: 15 },
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
        <ProjectHeader />

        <ProjectList
          projects={projects}
          onMouseEnter={handleMouseEnter}
          enableAnimation={enableListAnimation}
        />

        <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 mix-blend-difference z-30 pointer-events-none" />
      </div>
    </div>
  );
}

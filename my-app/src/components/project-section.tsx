"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Transition,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

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
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const cursorY = e.clientY - rect.top;
  
      setCursorDirection(cursorY < rect.height / 2 ? "top" : "bottom");
    }
    setHoveredIndex(null); 
  };

  const activeProject = hoveredIndex !== null ? projects[hoveredIndex] : null;

  let marqueeItems: MarqueeItem[] = [];
  if (activeProject) {
    const { textHover = [], imgHover = [] } = activeProject;
    const maxLength = Math.max(textHover.length, imgHover.length);
    const ordered = Array.from({ length: maxLength * 2 })
      .map((_, i) => {
        const isText = i % 2 === 0;
        const idx = Math.floor(i / 2);
        if (isText && textHover[idx]) {
          return { type: "text", value: textHover[idx] };
        } else if (!isText && imgHover[idx]) {
          return { type: "img", value: imgHover[idx] };
        }
        return null;
      })
      .filter(Boolean) as MarqueeItem[];
    marqueeItems = [...ordered, ...ordered];
  }
  const transition: Transition = shouldReduceMotion
    ? { type: "tween", duration: 0 }
    : { type: "spring", stiffness: 170, damping: 26, mass: 1 };

  const clipPathFromTop = "inset(0% 0% 100% 0%)";
  const clipPathFromBottom = "inset(100% 0% 0% 0%)";
  const clipPathVisible = "inset(0% 0% 0% 0%)";

  return (
    <div>
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
              className="absolute left-0 w-full bg-[#1a1a1a] z-20 pointer-events-none overflow-hidden flex items-center"
              style={{ position: "absolute" }}
            >
              <motion.div
                className="flex gap-10 whitespace-nowrap"
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 15,
                }}
              >
                {marqueeItems.map((item, idx) =>
                  item.type === "text" ? (
                    <span
                      key={`text-${idx}`}
                      className="text-white text-5xl pt-5 px-4"
                    >
                      {item.value}
                    </span>
                  ) : (
                    <div
                      key={`img-${idx}`}
                      className="w-[200px] h-[80px] rounded-full overflow-hidden bg-neutral-800"
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
          <div className="absolute bottom-0 left-0 w-full h-px bg-white mix-blend-difference z-30 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

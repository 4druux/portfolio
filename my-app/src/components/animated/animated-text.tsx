"use client";

import { motion, type Variants } from "framer-motion";
import { createElement, ReactNode, useEffect, useRef, useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const lineVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedText({
  children,
  className,
  as: Tag = "div",
}: AnimatedTextProps) {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof children !== "string") return;

    const words = children.trim().split(" ");
    if (words.length === 0) return;

    // Gunakan klon untuk pengukuran yang aman
    const clone = container.cloneNode() as HTMLElement;
    clone.style.position = "absolute";
    clone.style.visibility = "hidden";
    clone.style.height = "auto";
    clone.style.pointerEvents = "none";
    document.body.appendChild(clone);

    const tempLines: string[] = [];
    let currentLine = words[0];
    clone.innerHTML = currentLine;
    let lastHeight = clone.offsetHeight;

    for (let i = 1; i < words.length; i++) {
      clone.innerHTML += ` ${words[i]}`;
      if (clone.offsetHeight > lastHeight) {
        tempLines.push(currentLine);
        currentLine = words[i];
        lastHeight = clone.offsetHeight;
      } else {
        currentLine += ` ${words[i]}`;
      }
    }
    tempLines.push(currentLine);

    document.body.removeChild(clone);
    setLines(tempLines);
  }, [children]);

  return createElement(
    Tag,
    {
      ref: containerRef,
      className: `relative ${className || ""}`,
      "aria-label": typeof children === "string" ? children : undefined,
    },
    <>
      <span className="invisible">{children}</span>

      <motion.span
        aria-hidden
        key={lines.join("-")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
        className="absolute inset-0"
      >
        {lines.map((line, index) => (
          <span key={index} className="block overflow-hidden">
            <motion.span className="block" variants={lineVariants}>
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </>
  );
}

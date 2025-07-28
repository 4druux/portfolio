"use client";

import { motion, type Variants } from "framer-motion";

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
  lines: string[];
  className?: string;
  onAnimationComplete?: () => void;
  onViewportLeave?: () => void;
}

export function AnimatedText({
  lines,
  className,
  onAnimationComplete,
  onViewportLeave,
}: AnimatedTextProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      onAnimationComplete={onAnimationComplete}
      onViewportLeave={onViewportLeave}
      viewport={{ once: false, amount: 0.5 }}
      variants={containerVariants}
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div variants={lineVariants}>{line || " "}</motion.div>
        </div>
      ))}
    </motion.div>
  );
}

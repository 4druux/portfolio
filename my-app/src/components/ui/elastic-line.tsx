// components/ui/elastic-line.tsx

"use client";

import { useElasticLine } from "@/hooks/use-elastic-line";
import { motion } from "framer-motion";

export function ElasticLine() {
  const { ref, path, handleMouseMove, handleMouseLeave } = useElasticLine();

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-40 cursor-pointer"
    >
      <svg
        viewBox="0 -50 100 200"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <motion.path
          d={path}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

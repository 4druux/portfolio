"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export function GradientButton({
  children,
  onClick,
  className,
  icon,
}: GradientButtonProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } =
    useMagnetic<HTMLButtonElement>();

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`py-4 md:py-5 flex items-center justify-center bg-gradient animate-gradientShift text-lg text-white 
       font-semibold rounded-full group relative overflow-hidden ${className}`}
      style={{
        x,
        y,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="flex items-start justify-center z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        style={{
          x,
          y,
        }}
      >
        {children}
        {icon && (
          <span className="ml-2 rotate-90 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            {icon}
          </span>
        )}
      </motion.div>
    </motion.button>
  );
}

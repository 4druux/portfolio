"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useTheme } from "next-themes";

interface IconMagneticProps {
  onClick: () => void;
  name?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function IconMagnetic({
  onClick,
  name,
  icon,
  className,
}: IconMagneticProps) {
  const fillControls = useAnimation();
  const textControls = useAnimation();
  const { theme } = useTheme();
  const { ref, x, y, handleMouseMove, handleMouseLeave } =
    useMagnetic<HTMLButtonElement>();

  useEffect(() => {
    const idleColor = theme === "dark" ? "#fefff5" : "#1f2937";
    textControls.start({
      color: idleColor,
      transition: { duration: 0.1, ease: "easeInOut" },
    });
  }, [theme, textControls]);

  const getIdleColor = () => (theme === "dark" ? "#fefff5" : "#1f2937");
  const getHoverColor = () => (theme === "dark" ? "#1f2937" : "#fefff5");

  const onMouseEnter = () => {
    fillControls.start({
      y: ["80%", "-10%"],
      transition: { ease: [0.19, 1, 0.22, 1], duration: 1.5 },
    });

    textControls.start({
      scale: 1.05,
      color: getHoverColor(),
      transition: { duration: 0.2, ease: "easeInOut" },
    });
  };

  const onMouseLeave = () => {
    handleMouseLeave();
    fillControls.start({
      y: "-80%",
      transition: { ease: [0.19, 1, 0.22, 1], duration: 1.5 },
    });

    textControls.start({
      scale: 1,
      color: getIdleColor(),
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      aria-label={`Action for ${name}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`p-4 lg:p-5 border border-foreground rounded-2xl relative overflow-hidden ${className}`}
      style={{
        x,
        y,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.span
        className="relative z-10 block"
        style={{ x, y }}
        animate={textControls}
        initial={{ color: getIdleColor() }}
      >
        {icon}
      </motion.span>

      <motion.div
        animate={fillControls}
        className="absolute top-[-30%] left-[-25%] w-[150%] h-[150%] rounded-[100%] pointer-events-none z-0 translate-y-[90%]
        bg-foreground"
      />
    </motion.button>
  );
}

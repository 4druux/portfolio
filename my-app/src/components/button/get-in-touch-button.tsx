"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useTheme } from "next-themes";

interface GetInTouchMagneticProps {
  onClick: () => void;
  name?: string;
  className?: string;
  children?: React.ReactNode;
}

export function GetInTouchMagnetic({
  onClick,
  name,
  children,
  className,
}: GetInTouchMagneticProps) {
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

  const onMouseEnter = () => {
    fillControls.start({
      y: ["80%", "-10%"],
      transition: { ease: [0.19, 1, 0.22, 1], duration: 1.5 },
    });

    textControls.start({
      scale: 1.05,
      transition: { duration: 0.01, ease: "easeInOut" },
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
      transition: { duration: 0.6, ease: "easeInOut" },
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
      className={`bg-[#fefff5] dark:bg-[#1f2937] rounded-full relative overflow-hidden ${className}`}
      style={{
        x,
        y,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children && (
        <motion.span
          className="relative z-10 block"
          style={{ x, y }}
          animate={textControls}
          initial={{ color: getIdleColor() }}
        >
          {children}
        </motion.span>
      )}

      <motion.div
        animate={fillControls}
        className="absolute top-[-32%] left-[-25%] w-[150%] h-[150%] rounded-[100%] pointer-events-none z-0 translate-y-[90%]
        bg-[#dfd8c8] dark:bg-[#334155]"
      />
    </motion.button>
  );
}

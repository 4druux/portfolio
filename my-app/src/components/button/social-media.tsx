"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useTheme } from "next-themes";

interface SocialMediaProps {
  href: string;
  name?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function SocialMedia({ href, name, icon, className }: SocialMediaProps) {
  const fillControls = useAnimation();
  const textControls = useAnimation();
  const { theme } = useTheme();
  const { ref, x, y, handleMouseMove, handleMouseLeave } =
    useMagnetic<HTMLAnchorElement>();

  useEffect(() => {
    const idleColor = theme === "dark" ? "#ffffff" : "#111111";

    textControls.start({
      color: idleColor,
      transition: { duration: 0.1, ease: "easeInOut" },
    });
  }, [theme, textControls]);

  const getIdleColor = () => (theme === "dark" ? "#ffffff" : "#111111");
  const getHoverColor = () => (theme === "dark" ? "#111111" : "#ffffff");

  const onMouseEnter = () => {
    fillControls.start({
      y: ["80%", "-10%"],
      transition: { ease: [0.19, 1, 0.22, 1], duration: 2 },
    });

    textControls.start({
      scale: 1.05,
      color: getHoverColor(),
      transition: { duration: 0.1, ease: "easeInOut" },
    });
  };

  const onMouseLeave = () => {
    handleMouseLeave();

    fillControls.start({
      y: "-80%",
      transition: { ease: [0.19, 1, 0.22, 1], duration: 2 },
    });

    textControls.start({
      scale: 1,
      color: getIdleColor(),
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      arial-label={`Visit my ${name} profile`}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`p-4 lg:p-5 glass rounded-2xl relative overflow-hidden ${className}`}
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
        style={{
          x,
          y,
        }}
        animate={textControls}
        initial={{ color: getIdleColor() }}
      >
        {icon}
      </motion.span>

      <motion.div
        animate={fillControls}
        className="absolute top-[-30%] left-[-25%] w-[150%] h-[150%] rounded-[100%] pointer-events-none z-0 translate-y-[90%]
        bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white"
      />
    </motion.a>
  );
}

"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface ButtonMagneticProps {
  onClick?: () => void;
  name?: string;
  className?: string;
  children?: React.ReactNode;
  padding?: string;
  border?: string;
  rounded?: string;
  bgType?: "solid" | "transparent";
  bgColorLight?: string;
  bgColorDark?: string;
  fillColorLight?: string;
  fillColorDark?: string;
  textColorLightIdle?: string;
  textColorDarkIdle?: string;
  textColorLightHover?: string;
  textColorDarkHover?: string;
  iconOnly?: boolean;
  fillControlsProps?: {
    top?: string;
    left?: string;
    width?: string;
    height?: string;
    rounded?: string;
    TranslateY?: string;
  };
}

export function ButtonMagnetic({
  onClick,
  name,
  children,
  className,
  padding = "p-4",
  border = "border border-neutral-300 dark:border-neutral-700",
  rounded = "rounded-full",
  bgType = "transparent",
  bgColorLight = "#fefff5",
  bgColorDark = "#1f2937",
  fillColorLight = "#fefff5",
  fillColorDark = "#1f2937",
  textColorLightIdle = "#1f2937",
  textColorDarkIdle = "#fefff5",
  textColorLightHover = "#fefff5",
  textColorDarkHover = "#1f2937",
  iconOnly = false,
  fillControlsProps = {},
}: ButtonMagneticProps) {
  const fillControls = useAnimation();
  const textControls = useAnimation();
  const { theme } = useTheme();
  const { ref, x, y, handleMouseMove, handleMouseLeave } =
    useMagnetic<HTMLButtonElement>();

  useEffect(() => {
    const idleColor = theme === "dark" ? textColorDarkIdle : textColorLightIdle;

    textControls.start({
      color: idleColor,
      transition: { duration: 0.1, ease: "easeInOut" },
    });
  }, [theme, textColorDarkIdle, textColorLightIdle, textControls]);

  const onMouseEnter = () => {
    fillControls.start({
      y: ["80%", "-10%"],
      transition: { ease: [0.19, 1, 0.22, 1], duration: 1.5 },
    });

    const hoverColor =
      theme === "dark" ? textColorDarkHover : textColorLightHover;

    textControls.start({
      scale: 1.05,
      color: hoverColor,
      transition: { duration: 0.01, ease: "easeInOut" },
    });
  };

  const onMouseLeave = () => {
    handleMouseLeave();

    const idleColor = theme === "dark" ? textColorDarkIdle : textColorLightIdle;

    fillControls.start({
      y: "-80%",
      transition: { ease: [0.19, 1, 0.22, 1], duration: 1.5 },
    });

    textControls.start({
      scale: 1,
      color: idleColor,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const buttonBG =
    bgType === "solid"
      ? theme === "dark"
        ? bgColorDark
        : bgColorLight
      : "transparent";

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      aria-label={`Action for ${name}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={clsx(
        padding,
        border,
        rounded,
        "relative overflow-hidden flex items-center justify-center",
        className
      )}
      style={{
        x,
        y,
        backgroundColor: buttonBG,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children && (
        <motion.span
          className={clsx("relative z-10", iconOnly && "w-fit h-fit")}
          style={{ x, y }}
          animate={textControls}
          initial={{
            color: theme === "dark" ? textColorDarkIdle : textColorLightIdle,
          }}
        >
          {children}
        </motion.span>
      )}

      <motion.div
        animate={fillControls}
        className={clsx(
          "absolute pointer-events-none z-0 translate-y-[80%]",
          fillControlsProps.top ?? "top-[-140%]",
          fillControlsProps.left ?? "left-[-25%]",
          fillControlsProps.width ?? "w-[150%]",
          fillControlsProps.height ?? "h-[650%]",
          fillControlsProps.rounded ?? "rounded-[100%]",
          fillControlsProps.TranslateY ?? "translate-y-[80%]"
        )}
        style={{
          backgroundColor: theme === "dark" ? fillColorLight : fillColorDark,
        }}
      />
    </motion.button>
  );
}

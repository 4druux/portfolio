import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useTheme } from "next-themes";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

const MagneticButton = ({
  children,
  href,
  onClick,
  className,
  isActive = false,
}: MagneticButtonProps) => {
  const fillControls = useAnimation();
  const textControls = useAnimation();
  const { theme } = useTheme();
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic<
    HTMLAnchorElement | HTMLButtonElement
  >();

  const [isHovered, setIsHovered] = useState(false);

  const isDark = theme === "dark";

  const inactiveIdleText = isDark ? "#fefff5" : "#1f2937";
  const inactiveHoverText = isDark ? "#1f2937" : "#fefff5";

  const activeIdleText = isDark ? "#1f2937" : "#fefff5";
  const activeHoverText = isDark ? "#fefff5" : "#1f2937";

  useEffect(() => {
    const initialTextColor = isActive ? activeIdleText : inactiveIdleText;
    textControls.start({
      color: initialTextColor,
      transition: { duration: 0.1, ease: "easeInOut" },
    });
  }, [isActive, theme, activeIdleText, inactiveIdleText, textControls]);

  const onMouseEnter = () => {
    setIsHovered(true);
    const targetTextColor = isActive ? activeHoverText : inactiveHoverText;
    fillControls.start({
      y: ["80%", "-10%"],
      transition: { ease: [0.19, 1, 0.22, 1], duration: 1.5 },
    });
    textControls.start({
      scale: 1.05,
      color: targetTextColor,
      transition: { duration: 0.2, ease: "easeInOut" },
    });
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    const initialTextColor = isActive ? activeIdleText : inactiveIdleText;
    handleMouseLeave();
    fillControls.start({
      y: "-80%",
      transition: { ease: [0.19, 1, 0.22, 1], duration: 1.5 },
    });
    textControls.start({
      scale: 1,
      color: initialTextColor,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  };

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    if (isHovered) {
      const targetTextColor = isActive ? activeHoverText : inactiveHoverText;
      textControls.start({
        color: targetTextColor,
        transition: { duration: 0.1, ease: "easeInOut" },
      });
    } else {
      const targetTextColor = isActive ? activeIdleText : inactiveIdleText;
      textControls.start({
        color: targetTextColor,
        transition: { duration: 0.1, ease: "easeInOut" },
      });
    }
  }, [
    isActive,
    isHovered,
    activeHoverText,
    inactiveHoverText,
    activeIdleText,
    inactiveIdleText,
    textControls,
  ]);

  const Component = href ? motion.a : motion.button;

  const baseClasses =
    "py-4 md:py-5 flex items-center border justify-center text-lg font-semibold rounded-full group relative overflow-hidden transition-colors duration-300";
  const activeClasses = isActive
    ? "bg-foreground border-foreground"
    : "border-foreground";
  const hoverFillBg = isActive ? "bg-background" : "bg-foreground";

  return (
    <Component
      ref={ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
      href={href}
      onClick={handleOnClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${baseClasses} ${activeClasses} ${className}`}
      style={{ x, y, boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="relative z-10 block"
        style={{ x, y }}
        animate={textControls}
      >
        {children}
      </motion.span>
      <motion.div
        animate={fillControls}
        className={`absolute top-[-140%] left-[-25%] w-[150%] h-[650%] rounded-[100%] pointer-events-none z-0 translate-y-[80%] ${hoverFillBg}`}
      />
    </Component>
  );
};

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useTheme } from "next-themes";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const MagneticButton = ({
  children,
  href,
  onClick,
  className,
}: MagneticButtonProps) => {
  const fillControls = useAnimation();
  const textControls = useAnimation();
  const { theme } = useTheme();
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic<
    HTMLAnchorElement | HTMLButtonElement
  >();

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
      transition: { duration: 1, ease: "easeInOut" },
    });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`py-4 md:py-5 flex items-center justify-center text-lg font-semibold rounded-full group relative 
      overflow-hidden glass ${className}`}
      style={{
        x,
        y,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
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
        {children}
      </motion.span>

      <motion.div
        animate={fillControls}
        className="absolute top-[-140%] left-[-25%] w-[150%] h-[650%] rounded-[100%] pointer-events-none z-0 translate-y-[80%]
          bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white"
      />
    </Component>
  );
};

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;

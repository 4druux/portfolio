import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const MagneticButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  MagneticButtonProps
>(({ children, href, onClick, className }, ref) => {
  const fillControls = useAnimation();

  const handleMouseEnter = () => {
    fillControls.start({
      y: ["80%", "-10%"],
      transition: {
        ease: [0.19, 1, 0.22, 1],
        duration: 1.7,
      },
    });
  };

  const handleMouseLeave = () => {
    fillControls.start({
      y: "-80%",
      transition: {
        ease: [0.19, 1, 0.22, 1],
        duration: 1.7,
      },
    });
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      ref={ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
          relative inline-flex items-center justify-center text-lg font-medium tracking-wider
          rounded-full overflow-hidden transition-all duration-700 ease-in-out
          cursor-pointer group
          py-3 px-6 
          ${className} 

          text-gray-900 hover:text-white dark:text-gray-100 dark:hover:text-gray-900

          // Background: subtle glass effect, adapts to theme
          bg-white/10 dark:bg-black/10 backdrop-blur-sm

        
        `}
    >
      <span className="relative z-10">
        <motion.span
          className="block relative overflow-hidden transition-transform duration-700 ease-in-out group-hover:scale-110"
          data-text={children as string}
        >
          {children}
        </motion.span>
      </span>
      <motion.div
        animate={fillControls}
        className="absolute top-[-50%] left-[-25%] w-[150%] h-[250%] rounded-[50%] pointer-events-none z-0 translate-y-[80%]
            bg-gradient-to-br from-gray-700 via:gray-800 to-gray-900 dark:from-white via:gray-200 dark:to-white"
      />
    </Component>
  );
});

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;

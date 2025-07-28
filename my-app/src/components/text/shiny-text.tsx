import React from "react";
import { AnimatedText } from "../animated/animated-text";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`
        inline-block bg-clip-text
        text-gray-600 dark:text-neutral-200 
        ${disabled ? "" : "animate-shine"}
        ${className}
      `}
      style={{
        backgroundImage: `
          linear-gradient(
            120deg,
            var(--shine-gradient-start) 40%,
            var(--shine-gradient-middle) 50%,
            var(--shine-gradient-end) 60%
          )
        `,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationDuration: animationDuration,
      }}
    >
      <AnimatedText lines={[text]} />
    </div>
  );
};

export default ShinyText;

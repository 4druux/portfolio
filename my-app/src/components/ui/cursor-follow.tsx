"use client";

import {
  motion,
  useVelocity,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

interface CursorFollowProps {
  text: string;

  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function CursorFollow({ text, mouseX, mouseY }: CursorFollowProps) {
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const MAX_VELOCITY = 600;
  const MAX_TEXT_OFFSET = 10;

  const textOffsetX = useTransform(
    velocityX,
    [-MAX_VELOCITY, MAX_VELOCITY],
    [-MAX_TEXT_OFFSET, MAX_TEXT_OFFSET]
  );
  const textOffsetY = useTransform(
    velocityY,
    [-MAX_VELOCITY, MAX_VELOCITY],
    [-MAX_TEXT_OFFSET, MAX_TEXT_OFFSET]
  );

  const springConfig = { stiffness: 200, damping: 25, mass: 1 };
  const smoothTextOffsetX = useSpring(textOffsetX, springConfig);
  const smoothTextOffsetY = useSpring(textOffsetY, springConfig);

  return (
    <div className="flex items-center justify-center w-24 h-24 text-sm font-bold rounded-full bg-gradient animate-gradientShift text-white pointer-events-auto cursor-pointer">
      <motion.span
        style={{
          x: smoothTextOffsetX,
          y: smoothTextOffsetY,
          display: "inline-block",
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}

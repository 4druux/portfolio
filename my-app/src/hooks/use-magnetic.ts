import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export const useMagnetic = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothOptions = { stiffness: 200, damping: 30, mass: 0.7 };
  const smoothX = useSpring(x, smoothOptions);
  const smoothY = useSpring(y, smoothOptions);

  const magneticX = useTransform(smoothX, (val) => val * 0.3);
  const magneticY = useTransform(smoothY, (val) => val * 0.3);

  const handleMouseMove = (e: React.MouseEvent<T>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    x: magneticX,
    y: magneticY,
    handleMouseMove,
    handleMouseLeave,
  };
};

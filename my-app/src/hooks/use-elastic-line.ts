// hooks/use-elastic-line.ts

"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export const useElasticLine = () => {
  const ref = useRef<HTMLDivElement>(null);

  const y = useMotionValue(0);

  const spring = {
    stiffness: 150, // Sedikit lebih kaku agar 'snap' terasa
    damping: 3, // Redaman lebih tinggi untuk pantulan yang terkontrol
    mass: 1,
  };
  const smoothY = useSpring(y, spring);

  const path = useTransform(
    smoothY,
    (val) => `M 0 50 Q 50 ${50 + val * 1.5} 100 50`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseY = e.clientY - rect.top - rect.height / 2;
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    y.set(0);
  };

  return { ref, path, handleMouseMove, handleMouseLeave };
};

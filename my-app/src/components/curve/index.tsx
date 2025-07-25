"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { curve, text, translate } from "./anim";
import "./style.scss";

interface PageTransitionCurveProps {
  children: React.ReactNode;
  onComplete?: () => void;
}

interface TransitionCurveSVGProps {
  height: number;
  width: number;
  onComplete?: () => void;
  isTransitioning: boolean;
}

interface Dimensions {
  width: number | null;
  height: number | null;
}

const routes: { [key: string]: string } = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/contact": "Contact",
};

const animationProps = (variants: Variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

export default function PageTransitionCurve({
  children,

  onComplete,
}: PageTransitionCurveProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    setIsTransitioning(true);

    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    if (onComplete) onComplete();
  };

  const routeText = routes[pathname] ?? "Page";

  return (
    <div
      className={`page-transition-curve bg-neutral-900 dark:bg-neutral-100`}
      style={{
        zIndex: isTransitioning ? 9999 : -1,
      }}
    >
      <div
        style={{
          opacity: dimensions.width == null ? 1 : 0,
          zIndex: isTransitioning ? 49 : -1,
        }}
        className="page-transition-background"
      />
      <motion.div
        className="page-transition-route text-neutral-100 dark:text-neutral-900"
        {...animationProps(text)}
        style={{
          zIndex: isTransitioning ? 51 : -1,
        }}
      >
        <span className="bullet">•</span>
        <span className="route-text">{routeText}</span>
      </motion.div>

      {dimensions.width != null && dimensions.height != null && (
        <TransitionCurveSVG
          width={dimensions.width}
          height={dimensions.height}
          onComplete={handleTransitionComplete}
          isTransitioning={isTransitioning}
        />
      )}
      {children}
    </div>
  );
}

const TransitionCurveSVG = ({
  height,
  width,

  onComplete,
  isTransitioning,
}: TransitionCurveSVGProps) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg
      className="page-transition-svg"
      {...animationProps(translate)}
      onAnimationComplete={onComplete}
      style={{
        zIndex: isTransitioning ? 50 : -1,
      }}
    >
      <motion.path
        {...animationProps(curve(initialPath, targetPath))}
        className="fill-neutral-900 dark:fill-neutral-100"
      />
    </motion.svg>
  );
};

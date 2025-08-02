"use client";

import { useRef, FunctionComponent } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Sliding: FunctionComponent = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="flex flex-col gap-[3vw] relative bg-background z-[1]"
    >
      <motion.div style={{ height }} className="bg-background relative">
        <div className="h-[500%] xl:h-[1000%] w-[100%] xl:w-[120%] -left-[0%] xl:-left-[10%] rounded-b-[50%] bg-background absolute z-[1] shadow-[0_60px_50px_rgba(0,0,0,0.75)]"></div>
      </motion.div>
    </div>
  );
};

export default Sliding;

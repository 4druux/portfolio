"use client";

import React from "react";
import { AnimatedText } from "../animated/animated-text";

interface ProjectItemProps {
  title: string;
  service: string;
  year: string;
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function ProjectItem({
  title,
  service,
  year,
  onMouseEnter,
}: ProjectItemProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="relative grid grid-cols-12 items-center p-12 cursor-default"
    >
      <AnimatedText
        as="h2"
        className="col-span-7 text-4xl xl:text-5xl relative z-10 text-foreground"
      >
        {title}
      </AnimatedText>

      <AnimatedText
        as="p"
        className="col-span-4 text-md xl:text-lg relative z-10 text-foreground"
      >
        {service}
      </AnimatedText>

      <AnimatedText
        as="p"
        className="col-span-1 text-md xl:text-lg relative z-10 text-foreground"
      >
        {year}
      </AnimatedText>
    </div>
  );
}

"use client";

import React from "react";
import { SlideUp } from "../animated/slide-up";

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
      <SlideUp
        el="h2"
        text={title}
        className="col-span-7 text-4xl xl:text-5xl relative z-10 text-foreground"
      />

      <SlideUp
        el="p"
        text={service}
        className="col-span-4 text-md xl:text-lg relative z-10 text-foreground"
      />

      <SlideUp
        el="p"
        text={year}
        className="col-span-1 text-md xl:text-lg relative z-10 text-foreground"
      />
    </div>
  );
}

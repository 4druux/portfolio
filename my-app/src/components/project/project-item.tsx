"use client";

import React from "react";

interface ProjectItemProps {
  title: string;
  service: string;
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function ProjectItem({
  title,
  service,
  onMouseEnter,
}: ProjectItemProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="relative flex justify-between items-center p-12 cursor-default"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-white/20 mix-blend-difference z-30 pointer-events-none" />

      <h2 className="text-5xl relative z-10 text-foreground">{title}</h2>
      <p className="text-lg relative z-10 text-foreground">{service}</p>
    </div>
  );
}

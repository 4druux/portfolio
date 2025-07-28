"use client";

import React from "react";
import ShinyText from "../text/shiny-text";

interface BadgeProps {
  text: string;
  dot?: boolean;
  icon?: React.ReactNode;
}

export function Badge({ text, icon, dot }: BadgeProps) {
  return (
    <div className="text-center mb-4 lg:mb-8">
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium shadow-lg">
        {dot && (
          <span className="relative h-2 w-2 bg-green-500 rounded-full">
            <span className="absolute -right-0.5 -top-0.5 z-10 h-3 w-3 bg-green-500 rounded-full opacity-75 animate-ping"></span>
          </span>
        )}

        {icon && <span>{icon}</span>}

        <ShinyText
          text={text}
          disabled={false}
          speed={4}
          className="text-foreground mt-1"
        />
      </div>
    </div>
  );
}

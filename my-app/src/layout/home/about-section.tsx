"use client";

import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/bedge";
import { Workflow } from "@/components/about/workflow";
import { TechKeyboard3D } from "@/components/about/keyboard-3d";
import { skills } from "@/data/about-data";
import Lanyard from "@/components/about/lanyard";
import { SlideUp } from "@/components/animated/slide-up";

export function AboutSection() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="about-section"
      className="pt-20 lg:pt-24 flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <Badge text="About Me" icon={<Sparkles className="w-4 h-4" />} />
            <SlideUp
              el="h2"
              text="Crafting Digital Excellence"
              className="text-5xl lg:text-7xl font-semibold text-foreground mb-2 lg:mb-4"
            />
            <SlideUp
              el="p"
              text="With over 5 years of experience, I transform complex ideas into
            elegant, user-centric digital solutions that drive business growth"
              className="text-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            />
          </div>

          <div className="mb-10 md:mb-14">
            <Workflow />
          </div>

          <div className="grid xl:grid-cols-2 xl:gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-2">
                <SlideUp
                  el="h3"
                  text="My Journey"
                  className="text-foreground text-2xl lg:text-3xl font-bold"
                />

                <div className="flex flex-col gap-4">
                  <SlideUp
                    el="p"
                    text="I'm a passionate full-stack developer who believes in the
                  power of technology to create meaningful change. My journey
                  began with curiosity and has evolved into a mission to build
                  digital experiences that matter."
                    className="text-foreground/80 space-y-2 text-base lg:text-lg leading-relaxed"
                  />

                  <SlideUp
                    el="p"
                    text="When I'm not crafting code, you'll find me exploring
                  emerging technologies, contributing to open-source projects or
                  sharing knowledge with the developer community."
                    className="text-foreground/80 space-y-2 text-base lg:text-lg leading-relaxed"
                  />
                </div>
              </div>

              <div>
                <div className="hidden xl:block">
                  <SlideUp
                    el="h3"
                    text="Technical Expertise"
                    className="text-foreground text-2xl lg:text-3xl font-bold"
                  />
                  <TechKeyboard3D skills={skills} />
                </div>
              </div>
            </div>

            <div className="hidden xl:block">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

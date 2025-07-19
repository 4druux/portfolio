"use client";

import { Sparkles } from "lucide-react";
import { useRef } from "react";
import ShinyText from "./text/shiny-text";
import { TechKeyboard3D } from "./ui/keyboard-3d";
import Lanyard from "./ui/lanyard";
import { Workflow } from "./ui/workflow";
import { skills } from "@/data/about-data";

export function AboutSection() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <div>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium shadow-lg mb-4 lg:mb-8">
                <Sparkles className="w-4 h-4" />
                <ShinyText
                  text="About Me"
                  disabled={false}
                  speed={4}
                  className="text-foreground"
                />
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-gradient animate-gradientText mb-2 lg:mb-4">
              Crafting Digital Excellence
            </h2>

            <p className="text-foreground text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience, I transform complex ideas into
              elegant, user-centric digital solutions that drive business
              growth.
            </p>
          </div>

          <div className="mb-10 md:mb-14">
            <Workflow />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-foreground text-2xl lg:text-3xl font-bold">
                  My Journey
                </h3>

                <div className="text-foreground space-y-2 text-base lg:text-lg leading-relaxed">
                  <p>
                    I&apos;m a passionate full-stack developer who believes in
                    the power of technology to create meaningful change. My
                    journey began with curiosity and has evolved into a mission
                    to build digital experiences that matter.
                  </p>
                  <p>
                    When I&apos;m not crafting code, you&apos;ll find me
                    exploring emerging technologies, contributing to open-source
                    projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-foreground text-2xl lg:text-3xl font-bold">
                  Technical Expertise
                </h3>

                <TechKeyboard3D skills={skills} />
              </div>
            </div>

            <div className="relative">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

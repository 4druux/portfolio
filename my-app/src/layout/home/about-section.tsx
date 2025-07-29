"use client";

import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/bedge";
import { Workflow } from "@/components/about/workflow";
import { TechKeyboard3D } from "@/components/about/keyboard-3d";
import { skills } from "@/data/about-data";
import Lanyard from "@/components/about/lanyard";
import { AnimatedText } from "@/components/animated/animated-text";

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

            <AnimatedText
              as="h2"
              className="text-5xl lg:text-7xl font-semibold text-foreground mb-2 lg:mb-4"
            >
              Crafting Digital Excellence
            </AnimatedText>

            <AnimatedText
              as="p"
              className="text-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              With over 5 years of experience, I transform complex ideas into
              elegant, user-centric digital solutions that drive business growth
            </AnimatedText>
          </div>

          <div className="mb-10 md:mb-14">
            <Workflow />
          </div>

          <div className="grid xl:grid-cols-2 xl:gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-2">
                <AnimatedText
                  as="h3"
                  className="text-foreground text-2xl lg:text-3xl font-bold"
                >
                  My Journey
                </AnimatedText>
                <div className="flex flex-col gap-4">
                  <AnimatedText
                    as="p"
                    className="text-foreground/80 space-y-2 text-base lg:text-lg leading-relaxed"
                  >
                    I&apos;m a passionate full-stack developer who believes in
                    the power of technology to create meaningful change. My
                    journey began with curiosity and has evolved into a mission
                    to build digital experiences that matter.
                  </AnimatedText>

                  <AnimatedText
                    as="p"
                    className="text-foreground/80 space-y-2 text-base lg:text-lg leading-relaxed"
                  >
                    When I&apos;m not crafting code, you&apos;ll find me
                    exploring emerging technologies, contributing to open-source
                    projects or sharing knowledge with the developer community.
                  </AnimatedText>
                </div>
              </div>

              <div>
                <div className="hidden xl:block">
                  <AnimatedText
                    as="h3"
                    className="text-foreground text-2xl lg:text-3xl font-bold"
                  >
                    Technical Expertise
                  </AnimatedText>
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

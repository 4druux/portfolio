"use client";

import { Sparkles } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { TechKeyboard3D } from "./about/keyboard-3d";
import Lanyard from "./about/lanyard";
import { Workflow } from "./about/workflow";
import { skills } from "@/data/about-data";
import { Badge } from "./ui/bedge";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export function AboutSection() {
  const ref = useRef(null);
  const [width] = useWindowSize();
  const isMobile = width < 1025;

  return (
    <section
      ref={ref}
      id="about-section"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <Badge text="About Me" icon={<Sparkles className="w-4 h-4" />} />
            <h2 className="text-5xl lg:text-7xl font-black text-gradient animate-gradientText mb-2 lg:mb-4">
              Crafting Digital Excellence
            </h2>
            <p className="text-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience, I transform complex ideas into
              elegant, user-centric digital solutions that drive business
              growth.
            </p>
          </div>

          <div className="mb-10 md:mb-14">
            <Workflow />
          </div>

          <div className="grid xl:grid-cols-2 xl:gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-foreground text-2xl lg:text-3xl font-bold">
                  My Journey
                </h3>

                <div className="text-foreground/80 space-y-2 text-base lg:text-lg leading-relaxed">
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
                {!isMobile && (
                  <div>
                    <h3 className="text-foreground text-2xl lg:text-3xl font-bold">
                      Technical Expertise
                    </h3>
                    <TechKeyboard3D skills={skills} />
                  </div>
                )}
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

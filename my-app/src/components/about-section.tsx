"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import ShinyText from "./text/shiny-text";
import { TechKeyboard3D } from "./ui/keyboard-3d";
import Lanyard from "./ui/lanyard";

export function AboutSection() {
  const ref = useRef(null);

  const skills = [
    { name: "Html", logoUrl: "/logo/html.svg", color: "#E34F26" },
    { name: "Postman", logoUrl: "/logo/postman.svg", color: "#FF6C37" },
    { name: "Next.js", logoUrl: "/logo/next.svg", color: "#000000" },
    { name: "TypeScript", logoUrl: "/logo/typescript.svg", color: "#3178C6" },

    { name: "Node.js", logoUrl: "/logo/nodejs.svg", color: "#5FA04E" },
    { name: "Express", logoUrl: "/logo/express.svg", color: "#000000" },
    { name: "PostgreSQL", logoUrl: "/logo/postgresql.svg", color: "#336791" },
    {
      name: "Tailwind CSS",
      logoUrl: "/logo/tailwindcss.svg",
      color: "#06B6D4",
    },
    { name: "javascript", logoUrl: "/logo/javascript.svg", color: "#f59e0b" },
    { name: "MongoDB", logoUrl: "/logo/mongodb.svg", color: "#4DB33D" },
    { name: "React", logoUrl: "/logo/react.svg", color: "#0ea5e9" },
    { name: "Git", logoUrl: "/logo/github.svg", color: "#181717" },
    { name: "Laravel", logoUrl: "/logo/laravel.svg", color: "#FF2D20" },
    { name: "Sass", logoUrl: "/logo/sass.svg", color: "#CC6699" },
    { name: "Css", logoUrl: "/logo/css.svg", color: "#1572B6" },
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10 md:mb-20">
            <motion.div className="mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium shadow-lg">
                <Sparkles className="w-4 h-4" />
                <ShinyText
                  text="About Me"
                  disabled={false}
                  speed={4}
                  className="text-gray-800 dark:text-gray-100"
                />
              </span>
            </motion.div>

            <motion.h2 className="text-5xl lg:text-7xl font-black mb-4 text-gradient animate-gradientText">
              Crafting Digital Excellence
            </motion.h2>

            <motion.p className="text-gray-700 dark:text-gray-200 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience, I transform complex ideas into
              elegant, user-centric digital solutions that drive business
              growth.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div className="space-y-8">
              <motion.div className="space-y-2">
                <h3 className="text-gray-700 dark:text-gray-200 text-2xl lg:text-3xl font-bold">
                  My Journey
                </h3>

                <div className="text-gray-700 dark:text-gray-200 space-y-2 text-base lg:text-lg leading-relaxed">
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
              </motion.div>

              <motion.div className="space-y-2">
                <h3 className="text-gray-700 dark:text-gray-200 text-2xl lg:text-3xl font-bold">
                  Technical Expertise
                </h3>

                <TechKeyboard3D skills={skills} />
              </motion.div>
            </motion.div>
            <div>
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import ShinyText from "./text/shiny-text";
import MagneticButton from "./button/magnetic-button";
import { GradientButton } from "./button/gradient-button";
import { SocialMedia } from "./button/social-media";
import { socialLinks } from "@/data/social-media-data";
import { Badge } from "./ui/bedge";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <Badge text="Available for work" dot={true} />

          <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-8 leading-tight">
            <ShinyText
              text="Creative"
              disabled={false}
              speed={4}
              className="text-gray-800"
            />
            <motion.span className="block text-foreground">
              Developer
            </motion.span>
          </motion.h1>

          <motion.div>
            <p className="text-xl lg:text-3xl text-foreground mb-4 md:mb-8 lg:mb-12 font-light md:max-w-xl xl:max-w-4xl mx-auto leading-relaxed">
              I craft exceptional digital experiences that blend
              <span className="text-gradient animate-gradientText font-semibold mx-2">
                innovative design
              </span>
              with cutting-edge technology
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4 lg:gap-8 justify-center w-full items-center mb-6 md:mb-12">
            <MagneticButton
              onClick={() => scrollToSection("contact")}
              className="w-full md:w-1/3 lg:w-1/4 py-4 md:py-5 text-lg font-semibold"
            >
              Let&apos;s Connect
            </MagneticButton>

            <GradientButton
              onClick={() => scrollToSection("projects")}
              className="w-full md:w-1/3 lg:w-1/4"
              icon={<MousePointer2 />}
            >
              Explore My Work
            </GradientButton>
          </motion.div>

          <motion.div className="flex justify-center space-x-8">
            {socialLinks.map((social) => (
              <SocialMedia
                key={social.name}
                href={social.href}
                name={social.name}
                icon={<social.icon className="w-6 h-6" />}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

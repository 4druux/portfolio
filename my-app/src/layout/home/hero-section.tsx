"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MousePointer2 } from "lucide-react";
import { Badge } from "@/components/ui/bedge";
import ShinyText from "@/components/text/shiny-text";
import { ButtonMagnetic } from "@/components/ui/button";
import { GradientButton } from "@/components/button/gradient-button";
import { socialLinks } from "@/data/social-media-data";
import Link from "next/link";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroLinkNames = ["Github", "Linkedin", "Email"];
  const filteredLinks = socialLinks.filter((link) =>
    heroLinkNames.includes(link.name)
  );

  const MagneticButtonProps = {
    iconOnly: true,
    fillControlsProps: {
      top: "top-[-32%]",
      left: "left-[-25%]",
      width: "w-[150%]",
      height: "h-[150%]",
      TranslateY: "translate-y-[90%]",
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 xl:py-32"
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
            <ButtonMagnetic
              onClick={() => scrollToSection("contact")}
              padding="p-5"
              className="w-full md:w-1/3 lg:w-1/4"
              fillControlsProps={{
                TranslateY: "translate-y-[40%]",
              }}
            >
              Let&apos;s Connect
            </ButtonMagnetic>

            <GradientButton
              onClick={() => scrollToSection("projects-section")}
              className="w-full md:w-1/3 lg:w-1/4"
              icon={<MousePointer2 />}
            >
              Explore My Work
            </GradientButton>
          </motion.div>

          <motion.div className="flex justify-center space-x-6 mb-12">
            {filteredLinks.map(({ name, url, Icon }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonMagnetic padding="p-5" {...MagneticButtonProps}>
                  <Icon className="w-6 h-6" />
                </ButtonMagnetic>
              </Link>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center cursor-pointer w-fit mx-auto"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex flex-col items-center space-y-3">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ButtonMagnetic
                onClick={() => scrollToSection("about-section")}
                padding="p-3"
                {...MagneticButtonProps}
              >
                <ArrowDown className="w-6 h-6" />
              </ButtonMagnetic>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MousePointer2, Sparkles } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ShinyText from "./text/shiny-text";
import MagneticButton from "./button/magnetic-button";

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
      className="min-h-screen pt-20 md:pt-10 flex items-center justify-center relative overflow-hidden"
    >
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-8">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium shadow-lg">
              <motion.span className="w-2 h-2 bg-green-500 rounded-full" />
              <Sparkles className="w-4 h-4" />
              Available for work
            </span>
          </motion.div>

          <motion.div className="space-y-6">
            <motion.h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight">
              <ShinyText
                text="Creative"
                disabled={false}
                speed={4}
                className="text-gray-800"
              />
              <motion.span className="block text-gray-800 dark:text-white">
                Developer
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 font-light max-w-4xl mx-auto leading-relaxed">
              I craft exceptional digital experiences that blend
              <span className="text-gradient animate-gradientText font-semibold mx-2">
                innovative design
              </span>
              with cutting-edge technology
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-8 justify-center w-full items-center mb-10 md:mb-20">
            <MagneticButton
              onClick={() => scrollToSection("contact")}
              className="w-full md:w-1/4 py-4 md:py-5 text-lg font-semibold"
            >
              Let&apos;s Connect
            </MagneticButton>

            <motion.button
              onClick={() => scrollToSection("projects")}
              className="w-full md:w-1/4 py-4 md:py-5 flex items-center justify-center bg-gradient animate-gradientShift text-lg text-white font-semibold rounded-full group relative overflow-hidden"
              style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="flex items-center justify-center z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Explore My Work
                <MousePointer2 className="ml-3 h-5 w-5 rotate-90 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div className="flex justify-center space-x-8 mb-20">
            {[
              { icon: FiGithub, href: "https://github.com", label: "GitHub" },
              {
                icon: FiLinkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: "mailto:contact@johndoe.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass hover:bg-white/10"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="absolute -bottom-10 inset-x-0">
            <motion.button
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center space-y-3 text-muted-foreground hover:text-foreground transition-colors group mx-auto"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="p-3 rounded-full glass border border-white/20">
                <ArrowDown className="h-5 w-5" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

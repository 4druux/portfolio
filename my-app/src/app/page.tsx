import React from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
// import { ProjectSection } from "@/components/project-section-1";
import { ProjectSection } from "@/components/project-section";

export default function page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}

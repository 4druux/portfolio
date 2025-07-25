import React from "react";
import PageTransitionCurve from "@/components/curve";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectSection } from "@/components/project-section";

export default function page() {
  return (
    <PageTransitionCurve>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </main>
    </PageTransitionCurve>
  );
}

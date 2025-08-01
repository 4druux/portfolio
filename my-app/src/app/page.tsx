import React from "react";
import PageTransitionCurve from "@/components/curve";
import { HeroSection } from "@/layout/home/hero-section";
import { AboutSection } from "@/layout/home/about-section";
import { ProjectSection } from "@/layout/home/project-section";
import Footer from "@/components/footer";

export default function page() {
  return (
    <PageTransitionCurve>
      <main className="bg-background">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </main>
      <Footer />
    </PageTransitionCurve>
  );
}

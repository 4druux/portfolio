import React from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";

export default function page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
    </main>
  );
}

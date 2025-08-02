import React from "react";
import PageTransitionCurve from "@/components/curve";
import { ProjectSection } from "@/layout/project/project-scetion";
import Footer from "@/components/footer";
import Sliding from "@/components/ui/sliding";

export default function page() {
  return (
    <PageTransitionCurve>
      <main className="bg-background">
        <ProjectSection />
        <Sliding />
        <Footer />
      </main>
    </PageTransitionCurve>
  );
}

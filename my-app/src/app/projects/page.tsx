import React from "react";
import PageTransitionCurve from "@/components/curve";
import { ProjectSection } from "@/layout/project/project-scetion";
import Footer from "@/components/footer";

export default function page() {
  return (
    <PageTransitionCurve>
      <main className="bg-background">
        <ProjectSection />
      </main>
      <Footer />
    </PageTransitionCurve>
  );
}

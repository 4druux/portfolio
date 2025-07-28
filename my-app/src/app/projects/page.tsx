import React from "react";
import PageTransitionCurve from "@/components/curve";
import { ProjectSection } from "@/layout/project/project-scetion";

export default function page() {
  return (
    <PageTransitionCurve>
      <main className="min-h-screen bg-background">
        <ProjectSection />
      </main>
    </PageTransitionCurve>
  );
}

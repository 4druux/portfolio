import PageTransitionCurve from "@/components/curve";
import Footer from "@/components/footer";
import Sliding from "@/components/ui/sliding";
import { projects } from "@/data/project-data";
import { ProjectDetailSection } from "@/layout/project/project-detail-section";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <PageTransitionCurve>
      <main className="min-h-screen bg-background">
        <ProjectDetailSection slug={params.slug} />
        <Sliding />
        <Footer />
      </main>
    </PageTransitionCurve>
  );
}

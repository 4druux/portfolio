import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Project } from "@/data/project-home";
import { ProjectItem } from "./project-item";

interface ProjectListProps {
  projects: Project[];
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>, index: number) => void;
  enableAnimation: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

export function ProjectList({
  projects,
  onMouseEnter,
  enableAnimation,
}: ProjectListProps) {
  if (!enableAnimation) {
    return (
      <>
        {projects.map((project, i) => (
          <div key={project.slug || project.title} className="relative">
            <div className="absolute top-0 left-0 w-full h-px bg-white/20 mix-blend-difference z-30 pointer-events-none" />
            <ProjectItem
              onMouseEnter={(e) => onMouseEnter(e, i)}
              title={project.title}
              service={project.service}
              year={project.year}
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug || project.title}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-white/20 mix-blend-difference z-30 pointer-events-none" />
          <ProjectItem
            onMouseEnter={(e) => onMouseEnter(e, i)}
            title={project.title}
            service={project.service}
            year={project.year}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

import {
  IoDocumentTextOutline,
  IoCodeSlash,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { images } from "@/assets";

export interface Skill {
  name: string;
  logoUrl: string;
  color: string;
}

export const skills: Skill[] = [
  { name: "Html", logoUrl: images.html.src, color: "#E34F26" },
  { name: "Postman", logoUrl: images.postman.src, color: "#FF6C37" },
  { name: "Next.js", logoUrl: images.next.src, color: "#000000" },
  { name: "TypeScript", logoUrl: images.typescript.src, color: "#3178C6" },

  { name: "Node.js", logoUrl: images.nodejs.src, color: "#5FA04E" },
  { name: "Express", logoUrl: images.express.src, color: "#000000" },
  { name: "PostgreSQL", logoUrl: images.postgresql.src, color: "#336791" },
  {
    name: "Tailwind CSS",
    logoUrl: images.tailwind.src,
    color: "#06B6D4",
  },
  { name: "javascript", logoUrl: images.javascript.src, color: "#f59e0b" },
  { name: "MongoDB", logoUrl: images.mongodb.src, color: "#4DB33D" },
  { name: "React", logoUrl: images.react.src, color: "#0ea5e9" },
  { name: "Git", logoUrl: images.github.src, color: "#181717" },
  { name: "Laravel", logoUrl: images.laravel.src, color: "#FF2D20" },
  { name: "Sass", logoUrl: images.sass.src, color: "#CC6699" },
  { name: "Css", logoUrl: images.css.src, color: "#1572B6" },
];

export const workflowSteps = [
  { title: "Requirement Gathering & Discussion", icon: IoDocumentTextOutline },
  {
    title: "Planning & Proposal Submission",
    icon: HiChatBubbleLeftRight,
  },
  {
    title: "Development & Agile Iterations",
    icon: IoCodeSlash,
  },
  {
    title: "Testing & Client Feedback",
    icon: HiChatBubbleLeftRight,
  },
  {
    title: "Deployment & Project Handover",
    icon: IoCheckmarkCircleOutline,
  },
];

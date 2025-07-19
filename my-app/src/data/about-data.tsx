import {
  IoDocumentTextOutline,
  IoCodeSlash,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

export const skills = [
  { name: "Html", logoUrl: "/logo/html.svg", color: "#E34F26" },
  { name: "Postman", logoUrl: "/logo/postman.svg", color: "#FF6C37" },
  { name: "Next.js", logoUrl: "/logo/next.svg", color: "#000000" },
  { name: "TypeScript", logoUrl: "/logo/typescript.svg", color: "#3178C6" },

  { name: "Node.js", logoUrl: "/logo/nodejs.svg", color: "#5FA04E" },
  { name: "Express", logoUrl: "/logo/express.svg", color: "#000000" },
  { name: "PostgreSQL", logoUrl: "/logo/postgresql.svg", color: "#336791" },
  {
    name: "Tailwind CSS",
    logoUrl: "/logo/tailwindcss.svg",
    color: "#06B6D4",
  },
  { name: "javascript", logoUrl: "/logo/javascript.svg", color: "#f59e0b" },
  { name: "MongoDB", logoUrl: "/logo/mongodb.svg", color: "#4DB33D" },
  { name: "React", logoUrl: "/logo/react.svg", color: "#0ea5e9" },
  { name: "Git", logoUrl: "/logo/github.svg", color: "#181717" },
  { name: "Laravel", logoUrl: "/logo/laravel.svg", color: "#FF2D20" },
  { name: "Sass", logoUrl: "/logo/sass.svg", color: "#CC6699" },
  { name: "Css", logoUrl: "/logo/css.svg", color: "#1572B6" },
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

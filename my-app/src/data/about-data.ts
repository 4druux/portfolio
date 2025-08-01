import {
  IoDocumentTextOutline,
  IoCodeSlash,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { getImageUrl, images } from "@/assets";

export interface Skill {
  name: string;
  logoUrl: string;
  color: string;
}

export const skills: Skill[] = [
  { name: "Next.js", logoUrl: getImageUrl(images.next), color: "#000000" },
  { name: "React", logoUrl: getImageUrl(images.react), color: "#0ea5e9" },
  {
    name: "JavaScript",
    logoUrl: getImageUrl(images.javascript),
    color: "#f59e0b",
  },
  {
    name: "TypeScript",
    logoUrl: getImageUrl(images.typescript),
    color: "#3178C6",
  },

  { name: "Node.js", logoUrl: getImageUrl(images.nodejs), color: "#5FA04E" },
  { name: "Express", logoUrl: getImageUrl(images.express), color: "#000000" },
  { name: "Laravel", logoUrl: getImageUrl(images.laravel), color: "#FF2D20" },
  { name: "Html", logoUrl: getImageUrl(images.html), color: "#E34F26" },
  {
    name: "PostgreSQL",
    logoUrl: getImageUrl(images.postgresql),
    color: "#336791",
  },
  { name: "MongoDB", logoUrl: getImageUrl(images.mongodb), color: "#4DB33D" },
  { name: "MySql", logoUrl: getImageUrl(images.mysql), color: "#4479A1" },
  { name: "Postman", logoUrl: getImageUrl(images.postman), color: "#FF6C37" },
  {
    name: "Tailwind CSS",
    logoUrl: getImageUrl(images.tailwind),
    color: "#06B6D4",
  },

  { name: "Sass", logoUrl: getImageUrl(images.sass), color: "#CC6699" },
  { name: "Css", logoUrl: getImageUrl(images.css), color: "#1572B6" },
  { name: "Github", logoUrl: getImageUrl(images.github), color: "#181717" },
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

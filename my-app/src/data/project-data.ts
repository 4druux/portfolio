import { StaticImageData } from "next/image";
import { images } from "@/assets";

export interface Project {
  navigation: string;
  imageUrl: StaticImageData | string;
  tags: string[];
  description: string;
  title: string;
  liveDemoUrl: string;
}

export const projects: Project[] = [
  {
    navigation: "Mukrindo Motor",
    title: "Used Car Marketplace Platform",
    description:
      "A web-based platform for buying and selling used cars, developed for PT. Mukrindo Motor. Features responsive design, intuitive search, and clean user experience.",
    imageUrl: images.mukrindo,
    tags: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Vercel",
    ],
    liveDemoUrl: "https://mukrindo-motor.vercel.app",
  },
  {
    navigation: "Antika Studio",
    title: "E-Commerce Website for Craft Studio",
    description:
      "An e-commerce site built for a local craft brand. Offers a smooth shopping experience, dynamic product management, and secure payment integration with Stripe.",
    imageUrl: images.antika,
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveDemoUrl: "https://antikastudio.my.id",
  },
  {
    navigation: "Clone Alltrails",
    title: "Hiking Trail Finder Mobile App",
    description:
      "A mobile app inspired by AllTrails, allowing outdoor lovers to find, review, and share hiking routes. Built with real-time trail data and social features.",
    imageUrl: images.alltrails,
    tags: ["React Native", "Firebase", "Express.js"],
    liveDemoUrl: "https://ailltrails.vercel.app",
  },
  {
    navigation: "E-commerce",
    title: "Simple E-Commerce Dashboard",
    description:
      "A minimal dashboard for small businesses to manage products, orders, and user analytics. Prioritizes clean UI, accessibility, and ease of navigation.",
    imageUrl: images.ecommerce,
    tags: ["Sass", "JavaScript", "MongoDB"],
    liveDemoUrl: "#",
  },
  {
    navigation: "Nutrition Club",
    title: "Health & Wellness Landing Page",
    description:
      "A vibrant landing page for a nutrition club promoting healthy lifestyles. Highlights products, customer testimonials, and bold CTAs in a modern layout.",
    imageUrl: images.nc,
    tags: ["Sass", "JavaScript", "MongoDB"],
    liveDemoUrl: "https://nc-me.vercel.app",
  },
  {
    navigation: "Button Animation",
    title: "Creative Button Animation Showcase",
    description:
      "A UI concept exploring interactive hover animations for modern buttons. Inspired by Awwwards designs and focused on motion, detail, and user engagement.",
    imageUrl: images.button,
    tags: ["Sass", "JavaScript", "MongoDB"],
    liveDemoUrl: "https://buttonanimations.vercel.app",
  },
  {
    navigation: "School Landing Page",
    title: "School Website Landing Page",
    description:
      "An informative school homepage that showcases the vision, academic programs and registration details. Designed with clarity, responsiveness and stakeholder engagement.",
    imageUrl: images.tkislam,
    tags: ["Sass", "JavaScript", "MongoDB"],
    liveDemoUrl: "http://tkislambukitindah.vercel.app",
  },
];

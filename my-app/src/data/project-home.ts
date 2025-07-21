// data/projects.ts
import { images } from "@/assets";

export interface Project {
  title: string;
  service: string;
  textHover: string[];
  imgHover: string[];
}

export const projects = [
  {
    title: "Mukrindo Motor",
    service: "Design & Development",
    textHover: ["Design", "Vercel App", "Framer Motion"],
    imgHover: [images.mukrindo.src, images.mukrindo.src, images.mukrindo.src],
  },
  {
    title: "Antika Studio",
    service: "Design & Development",
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [images.mukrindo.src, images.mukrindo.src, images.mukrindo.src],
  },
  {
    title: "Clone Alltrails",
    service: "Design & Development",
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [images.mukrindo.src, images.mukrindo.src, images.mukrindo.src],
  },
  {
    title: "E-commerce",
    service: "Design & Development",
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [images.mukrindo.src, images.mukrindo.src, images.mukrindo.src],
  },
  {
    title: "Nutrition Club",
    service: "Design & Development",
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [images.mukrindo.src, images.mukrindo.src, images.mukrindo.src],
  },
  {
    title: "mukrindo Animation",
    service: "Design & Development",
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [images.mukrindo.src, images.mukrindo.src, images.mukrindo.src],
  },
  {
    title: "School Landing Page",
    service: "Design & Development",
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [images.mukrindo.src, images.mukrindo.src, images.mukrindo.src],
  },
];

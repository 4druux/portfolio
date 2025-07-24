// data/projects.ts
import { images } from "@/assets";

export interface Project {
  title: string;
  service: string;
  imgProject: string;
  textHover: string[];
  imgHover: string[];
}

export const projects = [
  {
    title: "Mukrindo Motor",
    service: "Full Stack Development",
    imgProject: images.mukrindo.src,
    textHover: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "0Auth",
      "Stripe",
    ],
    imgHover: [
      images.mukrindo1.src,
      images.mukrindo2.src,
      images.mukrindo3.src,
      images.mukrindo1.src,
      images.mukrindo2.src,
      images.mukrindo3.src,
    ],
  },
  {
    title: "Antika Studio",
    service: "Full Stack Development",
    imgProject: images.antika.src,
    textHover: [
      "React",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "Resend",
      "Stripe",
    ],

    imgHover: [
      images.antika1.src,
      images.antika2.src,
      images.antika3.src,
      images.antika1.src,
      images.antika2.src,
      images.antika3.src,
    ],
  },
  {
    title: "Clone Alltrails",
    service: "Design & Development",
    imgProject: images.alltrails.src,
    textHover: ["React", "Tailwind CSS", "Vercel App"],

    imgHover: [
      images.alltrails1.src,
      images.alltrails2.src,
      images.alltrails3.src,
    ],
  },
  {
    title: "E-commerce",
    service: "Design & Development",
    imgProject: images.ecommerce.src,
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [
      images.ecommerce1.src,
      images.ecommerce2.src,
      images.ecommerce3.src,
    ],
  },
  {
    title: "Nutrition Club",
    service: "Design & Development",
    imgProject: images.nc.src,
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [
      images.alltrails1.src,
      images.alltrails2.src,
      images.alltrails3.src,
    ],
  },
  {
    title: "Button Animation",
    service: "Design & Development",
    imgProject: images.button.src,
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [
      images.ecommerce1.src,
      images.ecommerce2.src,
      images.ecommerce3.src,
    ],
  },
  {
    title: "School Landing Page",
    service: "Design & Development",
    imgProject: images.tkislam.src,
    textHover: ["Design", "Vercel App", "Framer Motion"],

    imgHover: [
      images.mukrindo1.src,
      images.mukrindo1.src,
      images.mukrindo1.src,
    ],
  },
];

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
    imgProject: {
      desktop: images.mukrindoDesktop.src,
      mobile: images.mukrindoMobile.src,
    },
    textHover: ["Scalable", "User-Friendly", "Dashboard"],
    imgHover: [
      images.mukrindo1.src,
      images.mukrindo2.src,
      images.mukrindo3.src,
    ],
    description:
      "A web-based platform for buying and selling used cars, developed for PT. Mukrindo Motor. Features responsive design, intuitive search, and clean user experience.",
    link: "https://mukrindo-motor.vercel.app",
  },
  {
    title: "Antika Studio",
    service: "Full Stack Development",
    imgProject: {
      desktop: images.antikaDesktop.src,
      mobile: images.antikaMobile.src,
    },
    textHover: ["Easy Booking", "Personalized", "High-Quality"],
    imgHover: [images.antika1.src, images.antika2.src, images.antika3.src],
    description:
      "An e-commerce site built for a local craft brand. Offers a smooth shopping experience, dynamic product management, and secure payment integration with Stripe.",
    link: "https://antikastudio.my.id",
  },
  {
    title: "E-commerce",
    service: "Full Stack Development",
    imgProject: {
      desktop: images.ecomDesktop.src,
      mobile: images.ecomMobile.src,
    },
    textHover: ["Design", "Catalog", "Dashboard"],
    imgHover: [images.ecom1.src, images.ecom2.src, images.ecom3.src],
    description:
      "A minimal dashboard for small businesses to manage products, orders, and user analytics. Prioritizes clean UI, accessibility, and ease of navigation.",
    link: "#",
  },
  {
    title: "Clone Alltrails",
    service: "Design & Development",
    imgProject: {
      desktop: images.alltrailsDesktop.src,
      mobile: images.alltrailsMobile.src,
    },
    textHover: ["Visual", "Responsive", "Interactive"],
    imgHover: [
      images.alltrails1.src,
      images.alltrails2.src,
      images.alltrails3.src,
    ],
    description:
      "A mobile app inspired by AllTrails, allowing outdoor lovers to find, review, and share hiking routes. Built with real-time trail data and social features.",
    link: "https://ailltrails.vercel.app",
  },
  {
    title: "Nutrition Club",
    service: "Design & Development",
    imgProject: {
      desktop: images.ncDesktop.src,
      mobile: images.ncMobile.src,
    },
    textHover: ["Healthy", "Energize", "Wellness"],
    imgHover: [images.nc1.src, images.nc2.src, images.nc3.src],
    description:
      "A vibrant landing page for a nutrition club promoting healthy lifestyles. Highlights products, customer testimonials, and bold CTAs in a modern layout.",
    link: "https://nc-me.vercel.app",
  },
  {
    title: "Button Animation",
    service: "Design & Development",
    imgProject: {
      desktop: images.buttonDesktop.src,
      mobile: images.buttonMobile.src,
    },
    textHover: ["Creative", "Visual Craftsmanship", "Interactive"],
    imgHover: [images.antika1.src, images.ecom1.src, images.alltrails1.src],
    description:
      "A UI concept exploring interactive hover animations for modern buttons. Inspired by Awwwards designs and focused on motion, detail, and user engagement.",
    link: "https://buttonanimations.vercel.app",
  },
  {
    title: "School Landing Page",
    service: "Design & Development",
    imgProject: {
      desktop: images.tkDesktop.src,
      mobile: images.tkMobile.src,
    },
    textHover: ["Learn", "Discover", "Explore"],
    imgHover: [images.tk1.src, images.tk2.src, images.tk3.src],
    description:
      "An informative school homepage that showcases the vision, academic programs and registration details. Designed with clarity, responsiveness and stakeholder engagement.",
    link: "http://tkislambukitindah.vercel.app",
  },
];

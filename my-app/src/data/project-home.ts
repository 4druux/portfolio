// data/projects.ts
import { getImageUrl, images } from "@/assets";

export interface Project {
  slug: string;
  title: string;
  service: string;
  imgProject: {
    desktop: string;
    mobile: string;
  };
  textHover: string[];
  imgHover: string[];
  year: string;
  description: string;
  link: string;
}

export const projects = [
  {
    slug: "mukrindo-motor",
    title: "Mukrindo Motor",
    service: "Full Stack Development",
    imgProject: {
      desktop: getImageUrl(images.mukrindoDesktop),
      mobile: getImageUrl(images.mukrindoMobile),
    },
    textHover: ["Scalable", "User-Friendly", "Dashboard"],
    imgHover: [
      getImageUrl(images.mukrindo1),
      getImageUrl(images.mukrindo2),
      getImageUrl(images.mukrindo3),
    ],
    year: "2025",
    description:
      "A web-based platform for buying and selling used cars, developed for PT. Mukrindo Motor. Features responsive design, intuitive search, and clean user experience.",
    link: "https://mukrindo-motor.vercel.app",
  },
  {
    slug: "antika-studio",
    title: "Antika Studio",
    service: "Full Stack Development",
    imgProject: {
      desktop: getImageUrl(images.antikaDesktop),
      mobile: getImageUrl(images.antikaMobile),
    },
    textHover: ["Easy Booking", "Personalized", "High-Quality"],
    imgHover: [
      getImageUrl(images.antika1),
      getImageUrl(images.antika2),
      getImageUrl(images.antika3),
    ],
    year: "2025",
    description:
      "An e-commerce site built for a local craft brand. Offers a smooth shopping experience, dynamic product management, and secure payment integration with Stripe.",
    link: "https://antikastudio.my.id",
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    service: "Full Stack Development",
    imgProject: {
      desktop: getImageUrl(images.ecomDesktop),
      mobile: getImageUrl(images.ecomMobile),
    },
    textHover: ["Design", "Catalog", "Dashboard"],
    imgHover: [
      getImageUrl(images.ecom1),
      getImageUrl(images.ecom2),
      getImageUrl(images.ecom3),
    ],
    year: "2025",
    description:
      "A minimal dashboard for small businesses to manage products, orders, and user analytics. Prioritizes clean UI, accessibility, and ease of navigation.",
    link: "#",
  },
  {
    slug: "alltrails",
    title: "Clone Alltrails",
    service: "Design & Development",
    imgProject: {
      desktop: getImageUrl(images.alltrailsDesktop),
      mobile: getImageUrl(images.alltrailsMobile),
    },
    textHover: ["Visual", "Responsive", "Interactive"],
    imgHover: [
      getImageUrl(images.alltrails1),
      getImageUrl(images.alltrails2),
      getImageUrl(images.alltrails3),
    ],
    year: "2025",
    description:
      "A mobile app inspired by AllTrails, allowing outdoor lovers to find, review, and share hiking routes. Built with real-time trail data and social features.",
    link: "https://ailltrails.vercel.app",
  },
  {
    slug: "nutrition-club",
    title: "Nutrition Club",
    service: "Design & Development",
    imgProject: {
      desktop: getImageUrl(images.ncDesktop),
      mobile: getImageUrl(images.ncMobile),
    },
    textHover: ["Healthy", "Energize", "Wellness"],
    imgHover: [
      getImageUrl(images.nc1),
      getImageUrl(images.nc2),
      getImageUrl(images.nc3),
    ],
    year: "2025",
    description:
      "A vibrant landing page for a nutrition club promoting healthy lifestyles. Highlights products, customer testimonials, and bold CTAs in a modern layout.",
    link: "https://nc-me.vercel.app",
  },
  {
    slug: "button-animation",
    title: "Button Animation",
    service: "Design & Development",
    imgProject: {
      desktop: getImageUrl(images.buttonDesktop),
      mobile: getImageUrl(images.buttonMobile),
    },
    textHover: ["Creative", "Visual Craftsmanship", "Interactive"],
    imgHover: [
      getImageUrl(images.antika1),
      getImageUrl(images.ecom1),
      getImageUrl(images.alltrails1),
    ],
    year: "2025",
    description:
      "A UI concept exploring interactive hover animations for modern buttons. Inspired by Awwwards designs and focused on motion, detail, and user engagement.",
    link: "https://buttonanimations.vercel.app",
  },
  {
    slug: "school-landing-page",
    title: "School Landing Page",
    service: "Design & Development",
    imgProject: {
      desktop: getImageUrl(images.tkDesktop),
      mobile: getImageUrl(images.tkMobile),
    },
    textHover: ["Learn", "Discover", "Explore"],
    imgHover: [
      getImageUrl(images.tk1),
      getImageUrl(images.tk2),
      getImageUrl(images.tk3),
    ],
    year: "2025",
    description:
      "An informative school homepage that showcases the vision, academic programs and registration details. Designed with clarity, responsiveness and stakeholder engagement.",
    link: "http://tkislambukitindah.vercel.app",
  },
];

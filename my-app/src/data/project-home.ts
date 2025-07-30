// data/projects.ts
import { getImageUrl, images } from "@/assets";

export interface Project {
  slug: string;
  title: string;
  service: string;
  imgProject: {
    desktop: string;
    mobile: string;
    detail: string[];
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
      detail: [
        getImageUrl(images.mukrindoDetail1),
        getImageUrl(images.mukrindoDetail2),
        getImageUrl(images.mukrindoDetail3),
        getImageUrl(images.mukrindoDetail4),
        getImageUrl(images.mukrindoDetail5),
        getImageUrl(images.mukrindoDetail6),
        getImageUrl(images.mukrindoDetail7),
      ],
    },
    textHover: ["Scalable", "User-Friendly", "Dashboard"],
    imgHover: [
      getImageUrl(images.mukrindoHover1),
      getImageUrl(images.mukrindoHover2),
      getImageUrl(images.mukrindoHover3),
    ],
    year: "2025",
    description:
      "An independently developed web platform designed for PT. Mukrindo Motor, a company specializing in the buying and selling of used cars. This project was conceptualized and built solely as a portfolio showcase to demonstrate full stack development proficiency, with no formal collaboration or commercial agreement with Mukrindo Motor. The primary objective was to craft an intuitive, responsive user interface that simplifies the process of browsing and managing vehicle listings, while reflecting modern web design best practices. All visual assets, textual content, and references were either self-created or sourced responsibly from public automotive resources to ensure thematic alignment with the client's business model. This website serves as a technical demonstration of scalable, user-centric dashboard applications for automotive businesses.",
    link: "https://mukrindo-motor.vercel.app",
  },
  {
    slug: "antika-studio",
    title: "Antika Studio",
    service: "Full Stack Development",
    imgProject: {
      desktop: getImageUrl(images.antikaDesktop),
      mobile: getImageUrl(images.antikaMobile),
      detail: [
        getImageUrl(images.photostudio),
        getImageUrl(images.antikaDesktop),
      ],
    },
    textHover: ["Easy Booking", "Personalized", "High-Quality"],
    imgHover: [
      getImageUrl(images.antika1),
      getImageUrl(images.antika2),
      getImageUrl(images.antika3),
    ],
    year: "2025",
    description:
      "A conceptual e-commerce website independently designed and developed for Antika Studio, a creative business specializing in personalized craft products. This project was undertaken as a personal portfolio initiative to highlight proficiency in full stack web development, focusing on delivering an elegant and seamless shopping experience. No official collaboration with Antika Studio or any affiliated entities took place during the creation of this mockup. All design assets, imagery, and content were responsibly sourced or custom-crafted to reflect the brand's aesthetic identity and business vision. This platform serves as a showcase of advanced product management systems, secure payment integration, and user-friendly interfaces tailored for boutique retail environments.",
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
    year: "2024",
    description:
      "An e-commerce dashboard prototype conceptualized as a self-initiated portfolio project to demonstrate expertise in developing management tools for small businesses. This project was created independently without any collaboration with existing e-commerce brands or platforms. The primary goal was to design a minimalistic, functional interface that facilitates efficient product catalog management, order tracking, and basic analytics. All content, visual assets, and structural components were crafted solely for this project, ensuring a clean and user-focused administrative experience. This dashboard serves as a technical showcase of modern web development best practices, with emphasis on simplicity, accessibility, and scalability.",
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
      "An interactive mobile web application inspired by AllTrails, developed independently as a portfolio showcase to highlight skills in UI/UX design and full stack development. This project is not affiliated with or endorsed by AllTrails or its official team. The concept revolves around providing an intuitive platform for outdoor enthusiasts to discover, review, and share hiking trails, with a focus on mobile responsiveness and engaging user interactions. All content, images, and references were curated responsibly from public domain resources to maintain thematic consistency. This mockup serves as a creative exercise in building user-centered applications with real-time data features and community-driven functionalities.",
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
    year: "2024",
    description:
      "A vibrant landing page independently designed and developed for a Nutrition Club, conceptualized purely as a portfolio project to showcase capabilities in crafting engaging and wellness-oriented web experiences. This project was not commissioned by any real-world Nutrition Club, and no official collaboration took place. All visual materials, textual content, and branding elements were either custom-made or curated from publicly available resources to maintain alignment with the health and lifestyle sector. The landing page emphasizes bold call-to-actions, customer testimonials, and product highlights, serving as a demonstration of modern design techniques focused on user engagement and conversion optimization.",
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
      "An interactive UI concept exploring advanced button animations and micro-interactions, developed independently as a creative portfolio piece. This project draws inspiration from award-winning digital design platforms, aiming to showcase attention to detail, motion design skills, and user engagement strategies. No formal collaboration with any design agency or brand was involved in this project's development. All design elements, animations, and visual assets were created solely for this prototype, emphasizing craftsmanship in interactive design. The project serves as a demonstration of proficiency in blending functionality with aesthetic fluidity to enhance user interface experiences.",
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
    year: "2024",
    description:
      "A conceptual landing page for a primary school, designed and developed independently as a portfolio project to exhibit skills in building informative and visually appealing educational websites. This project was not created in collaboration with any educational institution and exists solely as a creative exercise. The design focuses on clarity, responsiveness, and effective content structuring to communicate the school's vision, academic programs, and enrollment information. All assets, including imagery and textual content, were either self-created or responsibly sourced to reflect the thematic elements of early childhood education. The website serves as a showcase of user-centric design practices tailored for educational platforms.",
    link: "http://tkislambukitindah.vercel.app",
  },
];

import { StaticImageData } from "next/image";

// techstack
import css from "@/assets/logo/css.svg";
import express from "@/assets/logo/express.svg";
import github from "@/assets/logo/github.svg";
import html from "@/assets/logo/html.svg";
import javascript from "@/assets/logo/javascript.svg";
import laravel from "@/assets/logo/laravel.svg";
import mongodb from "@/assets/logo/mongodb.svg";
import next from "@/assets/logo/next.svg";
import nodejs from "@/assets/logo/nodejs.svg";
import postgresql from "@/assets/logo/postgresql.svg";
import postman from "@/assets/logo/postman.svg";
import react from "@/assets/logo/react.svg";
import sass from "@/assets/logo/sass.svg";
import tailwind from "@/assets/logo/tailwindcss.svg";
import typescript from "@/assets/logo/typescript.svg";
import mysql from "@/assets/logo/mysql.svg";

// lanyard
import lanyard from "@/assets/lanyard/lanyard.png";

import photostudio from "@/assets/project/photo-studio.gif";

type ImageType = StaticImageData | string;
export const getImageUrl = (image: ImageType): string => {
  if (typeof image === "string") {
    return image;
  }
  return image.src;
};

export const images: { [key: string]: ImageType } = {
  // techstack
  css,
  express,
  github,
  html,
  javascript,
  laravel,
  mongodb,
  next,
  nodejs,
  postgresql,
  postman,
  react,
  sass,
  tailwind,
  typescript,
  mysql,

  // lanyard
  lanyard,

  photostudio,

  // project
  alltrailsDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626567/alltrailsDesktop_dzo2sf.png",
  alltrailsMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626567/alltrailsMobile_n2cuk7.png",
  alltrails1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626550/alltrails-3_u7mo6i.jpg",
  alltrails2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626629/alltrails-2_dsuvrj.jpg",
  alltrails3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626550/alltrails-1_y7suej.jpg",

  antikaDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626650/antikaDesktop_cjfx9q.png",
  antikaMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626660/antikaMobile_a3z4y3.png",
  antika1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626709/antika-3_qp3dbu.jpg",
  antika2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626673/antika-2_ymtvht.jpg",
  antika3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626647/antika-1_tfhbki.jpg",

  buttonDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626640/buttonDesktop_bcm2xm.png",
  buttonMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626643/buttonMobile_x2z6vc.png",

  ecomDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626516/ecomDesktop_cxefb0.png",
  ecomMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626539/ecomMobile_fgjket.png",
  ecom1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626536/ecom-2_dr0eop.jpg",
  ecom2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626529/ecom-3_qpd4qu.jpg",
  ecom3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626521/ecom-1_wb9osx.jpg",

  // mukrindo
  mukrindoDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626445/mukrindoDesktop_nzjttv.png",
  mukrindoMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626446/mukrindoMobile_tfxdnz.png",

  // mukrindo detail
  mukrindoDetail1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753872410/mukrindo-1_wt2qfr.png",
  mukrindoDetail2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753870187/mukrindo-2_wn7kye.png",
  mukrindoDetail3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753870189/mukrindo-3_ia8x0m.png",
  mukrindoDetail4:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753870190/mukrindo-4_r09iwg.png",
  mukrindoDetail5:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753870189/mukrindo-5_xho944.png",
  mukrindoDetail6:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753870188/mukrindo-6_znkwai.png",
  mukrindoDetail7:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753870188/mukrindo-7_kqrr5p.png",

  // mukrindo hover
  mukrindoHover1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626512/mukrindo-3_xtonom.jpg",
  mukrindoHover2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626471/mukrindo-2_rixuew.jpg",
  mukrindoHover3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626440/mukrindo-1_nvxrqk.jpg",

  ncDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626341/ncDesktop_ispar1.png",
  ncMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626309/ncMobile_bc6a2g.png",
  nc1: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626318/nc-2_hjibai.jpg",
  nc2: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626303/nc-3_dn8unr.jpg",
  nc3: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626318/nc-1_bnkyqw.jpg",

  tkDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753625739/tkDesktop_sherpe.png",
  tkMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753625739/tkMobile_wl8wzw.png",
  tk1: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626068/tk-3_qk4frx.jpg",
  tk2: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626088/tk-2_tl2f0j.jpg",
  tk3: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626065/tk-1_rayzxs.jpg",
};

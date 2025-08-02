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
import profile from "@/assets/lanyard/profile.jpg";

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
  profile,

  // project
  alltrailsDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626567/alltrailsDesktop_dzo2sf.png",
  alltrailsMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626567/alltrailsMobile_n2cuk7.png",

  // alltrails detail
  alltrailsDetail1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753898741/alltrails-1_fvegyt.gif",
  alltrailsDetail2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753904239/alltrails1_vj4djb.png",
  alltrailsDetail3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753904239/alltrails2_kbqjlq.png",
  alltrailsDetail4:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753904241/alltrails3_uw4yla.png",
  alltrailsDetail5:
    "https://res.cloudinary.com/do1oxpnak/video/upload/v1753953246/alltrails-video_k8uony.mp4",

  //  alltrails hover
  alltrails1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626550/alltrails-3_u7mo6i.jpg",
  alltrails2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626629/alltrails-2_dsuvrj.jpg",
  alltrails3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626550/alltrails-1_y7suej.jpg",

  // antika
  antikaDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626650/antikaDesktop_cjfx9q.png",
  antikaMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626660/antikaMobile_a3z4y3.png",

  // antika detail
  antikaDetail1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753899077/antika-1_jem23t.gif",
  antikaDetail2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753904301/antika1_o75vy3.png",
  antikaDetail3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753904303/antika2_xeimr1.png",
  antikaDetail4:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753904301/antika3_wb2ule.png",
  antikaDetail5:
    "https://res.cloudinary.com/do1oxpnak/video/upload/v1753954921/photo_mhmxch.mp4",

  // antika hover
  antika1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626709/antika-3_qp3dbu.jpg",
  antika2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626673/antika-2_ymtvht.jpg",
  antika3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626647/antika-1_tfhbki.jpg",

  // button
  buttonDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626640/buttonDesktop_bcm2xm.png",
  buttonMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626643/buttonMobile_x2z6vc.png",

  // button detail
  buttonDetail1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753898794/button-1_zzyvft.gif",
  buttonDetail2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753903258/button1_ilocfh.png",
  buttonDetail3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753903261/button3_srg7pr.png",
  buttonDetail4:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753903258/button2_kyvnn3.png",
  buttonDetail5:
    "https://res.cloudinary.com/do1oxpnak/video/upload/v1753955507/button_p5qzhu.mp4",

  // ecommerce
  ecomDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626516/ecomDesktop_cxefb0.png",
  ecomMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626539/ecomMobile_fgjket.png",

  // ecommerce detail
  ecommerceDetail1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753899667/ecommerce-1_o1ymmc.gif",
  ecommerceDetail2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753900847/ecom1_lhm9uj.png",
  ecommerceDetail3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753900984/ecom2_uvumyu.png",
  ecommerceDetail4:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753901537/ecom3_rglzlo.png",
  ecommerceDetail5:
    "https://res.cloudinary.com/do1oxpnak/video/upload/v1753955319/ecom_k4bzet.mp4",

  // ecommerce hover
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
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753898559/mukrindo-1_c49ot8.gif",
  mukrindoDetail2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753904965/mukrindo1_kzelwj.png",
  mukrindoDetail3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753904963/mukrindo3_deiytj.png",
  mukrindoDetail4:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753904964/mukrindo2_nwydkc.png",
  mukrindoDetail5:
    "https://res.cloudinary.com/do1oxpnak/video/upload/v1753954535/mukrindo_ktabno.mp4",

  // mukrindo hover
  mukrindoHover1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626512/mukrindo-3_xtonom.jpg",
  mukrindoHover2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626471/mukrindo-2_rixuew.jpg",
  mukrindoHover3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626440/mukrindo-1_nvxrqk.jpg",

  // nc
  ncDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626341/ncDesktop_ispar1.png",
  ncMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626309/ncMobile_bc6a2g.png",

  // nc detail
  ncDetail1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753898775/nc-1_n6cfkh.gif",
  ncDetail2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753902482/nc1_lzglys.png",
  ncDetail3:
    "https://res.cloudinary.com/do1oxpnak/video/upload/v1753955547/nc_jyeexi.mp4",

  // nc hover
  nc1: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626318/nc-2_hjibai.jpg",
  nc2: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626303/nc-3_dn8unr.jpg",
  nc3: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626318/nc-1_bnkyqw.jpg",

  // tk
  tkDesktop:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753625739/tkDesktop_sherpe.png",
  tkMobile:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753625739/tkMobile_wl8wzw.png",

  // tk detail
  tkDetail1:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753898758/tk-1_izzkvr.gif",
  tkDetail2:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753902433/tk1_ainqjt.png",
  tkDetail3:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753902430/tk2_wxy97f.png",
  tkDetail4:
    "https://res.cloudinary.com/do1oxpnak/image/upload/v1753902431/tk3_hicvtm.png",
  tkDetail5:
    "https://res.cloudinary.com/do1oxpnak/video/upload/v1753954966/tk_jtshws.mp4",

  // tk hover
  tk1: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626068/tk-3_qk4frx.jpg",
  tk2: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626088/tk-2_tl2f0j.jpg",
  tk3: "https://res.cloudinary.com/do1oxpnak/image/upload/v1753626065/tk-1_rayzxs.jpg",
};

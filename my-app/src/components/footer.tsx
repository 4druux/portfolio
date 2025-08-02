"use client";

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import Image from "next/image";
import { getImageUrl, images } from "@/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ElasticLine } from "./ui/elastic-line";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { ButtonMagnetic } from "./ui/button";
import { socialLinks } from "@/data/social-media-data";
import Link from "next/link";

export default function Footer() {
  const footerRef = useRef(null);
  const touchButtonRef = useRef(null);
  const { theme } = useTheme();

  const getZoneTime = () => {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());
  };

  const [time, setTime] = useState(getZoneTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getZoneTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTriggerConfig = {
      trigger: footerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        touchButtonRef.current,
        {
          xPercent: -400,
        },
        {
          xPercent: 250,
          ease: "none",
          scrollTrigger: scrollTriggerConfig,
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [180, 90]);

  const heroLinkNames = ["Github", "Instagram", "Linkedin", "Upwork"];
  const filteredLinks = socialLinks.filter((link) =>
    heroLinkNames.includes(link.name)
  );

  const SocialMediaButtonProps = {
    padding: "p-3",
    fillColorLight: "#1f2937",
    fillColorDark: "#fefff5",
    textColorLightIdle: "#fefff5",
    textColorLightHover: "#1f2937",
    textColorDarkIdle: "#1f2937",
    textColorDarkHover: "#fefff5",
    iconOnly: true,
    fillControlsProps: {
      top: "top-[-32%]",
      left: "left-[-25%]",
      width: "w-[150%]",
      height: "h-[150%]",
      TranslateY: "translate-y-[90%]",
    },
  };

  const ContactButtonProps = {
    padding: "py-6 px-10",
    fillColorLight: "#1f2937",
    fillColorDark: "#fefff5",
    textColorLightIdle: "#fefff5",
    textColorLightHover: "#1f2937",
    textColorDarkIdle: "#1f2937",
    textColorDarkHover: "#fefff5",
    iconOnly: true,
    fillControlsProps: {
      TranslateY: "translate-y-[40%]",
    },
  };

  const GetInTouchButtonProps = {
    padding: "py-14 px-5 md:py-20 md:px-10",
    border: "none",
    bgType: "solid",
    fillColorLight: "#64748B",
    fillColorDark: "#D1CBBE",
    textColorLightIdle: "#1f2937",
    textColorLightHover: "#fefff5",
    textColorDarkIdle: "#fefff5",
    textColorDarkHover: "#fefff5",
    fillControlsProps: {
      top: "top-[-32%]",
      left: "left-[-25%]",
      width: "w-[150%]",
      height: "h-[150%]",
      TranslateY: "translate-y-[90%]",
    },
  } as const;

  return (
    <div
      ref={footerRef}
      className="relative h-[100dvh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+100dvh)] -top-[100vh]">
        <div className="h-[100dvh] sticky top-[calc(100vh-100dvh)]">
          <div className="bg-[#1f1f1f] dark:bg-[#fefffa] text-[#fefff5] dark:text-[#1f2937] h-full w-full">
            <div className="max-w-7xl mx-auto flex flex-col justify-between h-full py-24 px-4">
              <div>
                <div className="inline-flex items-center gap-2 md:gap-4">
                  <Image
                    src={getImageUrl(images.profile)}
                    width={256}
                    height={256}
                    alt=""
                    className="rounded-full w-12 md:w-28 md:h-28"
                  />

                  <h3 className="text-5xl md:text-8xl leading-tight">
                    Let&#39;s Talk
                  </h3>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-5xl md:text-8xl leading-tight">
                    Together
                  </h3>
                  <motion.svg
                    style={{ rotate, scale: 2 }}
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                      fill={theme === "dark" ? "#1f2937" : "#fefff5"}
                    />
                  </motion.svg>
                </div>

                <div className="mt-8 md:mt-20 relative flex items-center">
                  <div className="w-full">
                    <ElasticLine />
                  </div>
                  <div
                    ref={touchButtonRef}
                    className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none"
                  >
                    <ButtonMagnetic
                      {...GetInTouchButtonProps}
                      className="pointer-events-auto z-10"
                    >
                      Get In Touch
                    </ButtonMagnetic>
                  </div>
                </div>

                <div className="mt-8 md:mt-20">
                  <h3 className="mb-2 block md:hidden">Contact</h3>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <ButtonMagnetic {...ContactButtonProps}>
                      andrewsamagachandra@gmail.com
                    </ButtonMagnetic>

                    <ButtonMagnetic {...ContactButtonProps}>
                      +62 877 0855 9045
                    </ButtonMagnetic>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse gap-10 mt-8 md:flex-row justify-between items-start md:items-center">
                <div className="flex gap-10">
                  <div className="flex flex-col gap-2">
                    <h3>Version</h3>
                    <p>1.0 &copy; Edition 2025</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3>Time & Location</h3>
                    <p>{time} Jakarta, ID</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3>Social Media</h3>
                  <div className="flex gap-4">
                    {filteredLinks.map(({ name, url, Icon }) => (
                      <Link
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ButtonMagnetic {...SocialMediaButtonProps}>
                          <Icon className="w-6 h-6" />
                        </ButtonMagnetic>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

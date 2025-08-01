"use client";

import React, { useRef, useLayoutEffect } from "react";
import { FooterMagnetic } from "./button/footer-button";
import { ArrowDown, Instagram } from "lucide-react";
import Image from "next/image";
import { getImageUrl, images } from "@/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ElasticLine } from "./ui/elastic-line";
import { FooterIcon } from "./button/footer-icon";
import { GetInTouchMagnetic } from "./button/get-in-touch-button";

export default function Footer() {
  const footerRef = useRef(null);
  const touchButtonRef = useRef(null);
  const arrowIconRef = useRef(null);

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
          xPercent: -500,
        },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: scrollTriggerConfig,
        }
      );

      gsap.fromTo(
        arrowIconRef.current,
        { rotate: 180 },
        {
          rotate: 20,
          ease: "none",
          scrollTrigger: scrollTriggerConfig,
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative h-[100dvh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+100dvh)] -top-[100vh]">
        <div className="h-[100dvh] sticky top-[calc(100vh-100dvh)]">
          <div className="bg-[#1f1f1f] dark:bg-[#fafafa] text-[#fefff5] dark:text-[#1f2937] h-full w-full">
            <div className="max-w-7xl mx-auto flex flex-col justify-between h-full pt-24 pb-10 px-4">
              <div>
                <div className="inline-flex items-center gap-2 md:gap-6">
                  <Image
                    src={getImageUrl(images.next)}
                    width={256}
                    height={256}
                    alt=""
                    className="rounded-full w-12 md:w-24 md:h-24"
                  />

                  <h3 className="text-5xl md:text-8xl leading-tight">
                    Let&#39;s Talk
                  </h3>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-5xl md:text-8xl leading-tight">
                    Together
                  </h3>
                  <div ref={arrowIconRef}>
                    <ArrowDown className="w-9 h-9" />
                  </div>
                </div>

                <div className="mt-8 md:mt-20 relative flex items-center">
                  <div className="w-full">
                    <ElasticLine />
                  </div>
                  <div
                    ref={touchButtonRef}
                    className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none"
                  >
                    <GetInTouchMagnetic
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="z-10 pointer-events-auto py-14 px-5 md:py-20 md:px-10"
                    >
                      <span className="textsm md:text-lg">Get In Touch</span>
                    </GetInTouchMagnetic>
                  </div>
                </div>

                <div className="mt-8 md:mt-20">
                  <h3 className="mb-2 block md:hidden">Contact</h3>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <FooterMagnetic
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!md:py-6 !px-10"
                    >
                      <span className="text-sm">
                        andrewsamagachandra@gmail.com
                      </span>
                    </FooterMagnetic>

                    <FooterMagnetic
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!md:py-6 !px-10"
                    >
                      <span className="text-sm">+62 877 0855 9045</span>
                    </FooterMagnetic>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse gap-10 mt-8 md:flex-row justify-between items-start md:items-center">
                <div className="flex gap-10">
                  <div className="flex flex-col gap-2">
                    <h3>Version</h3>
                    <p>1.0.0 2025 &copy; Edition</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3>Time & Location</h3>
                    <p>1.0.0 2025 &copy; Edition</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3>Social Media</h3>
                  <div className="flex gap-4">
                    <FooterIcon
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!p-3"
                      icon={<Instagram className="w-5 h-5" />}
                    />

                    <FooterIcon
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!p-3"
                      icon={<Instagram className="w-5 h-5" />}
                    />
                    <FooterIcon
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!p-3"
                      icon={<Instagram className="w-5 h-5" />}
                    />
                    <FooterIcon
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!p-3"
                      icon={<Instagram className="w-5 h-5" />}
                    />
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

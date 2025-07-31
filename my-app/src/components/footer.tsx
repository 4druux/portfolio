"use client";

import React, { useRef, useLayoutEffect } from "react";
import { FooterMagnetic } from "./button/footer-button";
import { ArrowDown, Instagram } from "lucide-react";
import Image from "next/image";
import { getImageUrl, images } from "@/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ElasticLine } from "./ui/elastic-line";

export default function Footer() {
  const footerRef = useRef(null);
  const touchButtonRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        touchButtonRef.current,
        {
          xPercent: -1200,
        },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0,
          },
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
            <div className="max-w-7xl mx-auto flex flex-col justify-between h-full py-24 px-4 lg:px-0">
              <div>
                <div className="inline-flex items-start gap-6">
                  <Image
                    src={getImageUrl(images.next)}
                    width={256}
                    height={256}
                    alt=""
                    className="rounded-full w-24 h-24"
                  />

                  <h3 className="text-8xl leading-tight">Let&#39;s Talk</h3>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-8xl leading-tight">Together</h3>
                  <FooterMagnetic
                    className="!p-3"
                    icon={<ArrowDown className="w-5 h-5" />}
                  />
                </div>

                <div className="relative">
                  <div className="w-full">
                    <ElasticLine />
                  </div>
                  <div
                    ref={touchButtonRef}
                    className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none"
                  >
                    <FooterMagnetic
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!px-10 !py-20 z-10 pointer-events-auto"
                    >
                      <span className="text-lg">Get In Touch</span>
                    </FooterMagnetic>
                  </div>
                </div>

                <div className="flex gap-8 mt-20">
                  <FooterMagnetic
                    onClick={() => window.open("https://wa.me/6287708559045")}
                    className="p-8"
                  >
                    <span className="text-sm">
                      andrewsamagachandra@gmail.com
                    </span>
                  </FooterMagnetic>

                  <FooterMagnetic
                    onClick={() => window.open("https://wa.me/6287708559045")}
                    className="p-8"
                  >
                    <span className="text-sm">+62 877 0855 9045</span>
                  </FooterMagnetic>
                </div>
              </div>

              <div className="flex justify-between items-center">
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
                    <FooterMagnetic
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!p-3"
                      icon={<Instagram className="w-5 h-5" />}
                    />

                    <FooterMagnetic
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!p-3"
                      icon={<Instagram className="w-5 h-5" />}
                    />
                    <FooterMagnetic
                      onClick={() => window.open("https://wa.me/6287708559045")}
                      className="!p-3"
                      icon={<Instagram className="w-5 h-5" />}
                    />
                    <FooterMagnetic
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

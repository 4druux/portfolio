"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function LenisScroller() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      // lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

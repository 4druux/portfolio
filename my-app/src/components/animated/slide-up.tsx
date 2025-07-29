// components/animated/SlideUp.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Variants untuk mengatur animasi container dan jeda antar anak (baris)
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Variants untuk animasi setiap baris
const lineVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

interface SlideUpProps {
  text: string; // Logika ini hanya bekerja dengan satu string
  className?: string;
  el?: keyof JSX.IntrinsicElements;
}

export function SlideUp({
  text,
  className,
  el: Wrapper = "div",
}: SlideUpProps) {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof text !== "string") return;

    const words = text.trim().split(" ");
    if (words.length === 0) return;

    // Gunakan klon untuk pengukuran yang aman tanpa mengganggu layout utama
    const clone = container.cloneNode(true) as HTMLElement;
    clone.style.position = "absolute";
    clone.style.visibility = "hidden";
    clone.style.height = "auto";
    clone.style.width = container.offsetWidth + "px"; // Sesuaikan lebar klon dengan kontainer asli
    clone.style.pointerEvents = "none";
    document.body.appendChild(clone);

    const tempLines: string[] = [];
    let currentLine = words[0];
    clone.innerHTML = currentLine;
    let lastHeight = clone.offsetHeight;

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      clone.innerHTML += ` ${word}`;
      if (clone.offsetHeight > lastHeight) {
        tempLines.push(currentLine);
        currentLine = word;
        // Setelah menemukan baris baru, reset klon ke baris saat ini
        clone.innerHTML = currentLine;
        lastHeight = clone.offsetHeight;
      } else {
        currentLine += ` ${word}`;
      }
    }
    tempLines.push(currentLine);

    document.body.removeChild(clone);
    setLines(tempLines);
  }, [text, className]); // Tambahkan className sebagai dependency

  return (
    <Wrapper
      ref={containerRef}
      className={`relative ${className || ""}`}
      aria-label={text}
    >
      {/* Teks tak terlihat ini berfungsi untuk menjaga tinggi & lebar layout */}
      <span className="invisible" aria-hidden="true">
        {text}
      </span>

      {/* Teks animasi ini akan ditampilkan di atas teks tak terlihat */}
      <motion.div
        aria-hidden="true"
        key={lines.join("-")} // Kunci unik untuk memicu re-render saat baris berubah
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
        className="absolute inset-0"
      >
        {lines.map((line, index) => (
          <span key={index} className="block overflow-hidden">
            <motion.span className="block" variants={lineVariants}>
              {line}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </Wrapper>
  );
}

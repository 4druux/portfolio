"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import ShinyText from "./text/shiny-text";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 px-4 transition-all duration-500`}
    >
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 rounded-full mt-4 transition-all duration-500
          ${
            isScrolled
              ? "bg-black/10 shadow-md backdrop-blur-md dark:bg-white/10 md:w-[750px] md:py-0"
              : "bg-black/10 backdrop-blur-lg dark:bg-white/10 md:py-0"
          }
        `}
      >
        <div className="flex justify-between items-center h-14 md:h-16">
          <motion.div
            className="text-2xl font-black"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ShinyText
              text="4druux"
              disabled={false}
              speed={3}
              className="text-lg md:text-xl"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => {
                  router.push(item.path);
                  setIsMobileMenuOpen(false);
                }}
                className="relative font-medium group text-sm text-foreground"
              >
                {(item.path === "/" && pathname === "/") ||
                (item.path !== "/" && pathname.startsWith(item.path)) ? (
                  <span className="absolute -left-3 top-1/3 -translate-y-1/3 w-1.5 h-1.5 rounded-full bg-rose-400 dark:bg-sky-600" />
                ) : null}
                <div className="relative overflow-hidden">
                  <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:-translate-y-full">
                    {item.label}
                  </span>
                  <span className="absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {item.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block mt-2">
              <ThemeToggle />
            </div>

            {/* CTA Button - Desktop */}
            <motion.div className="hidden md:block">
              <button
                onClick={() => router.push("/contact")}
                className="text-sm font-semibold px-6 py-3 rounded-full bg-gradient animate-gradientShift text-white"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Let&apos;s Talk
                </motion.div>
              </button>
            </motion.div>

            {/* Mobile-only controls */}
            <div className="md:hidden flex items-center space-x-2 transition-colors duration-0">
              <ThemeToggle />
              <button
                className="relative z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="h-6 w-6 text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="h-6 w-6 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[calc(20px + 80px + 1rem)] mt-4 left-1/2 -translate-x-1/2 w-[90%]
                      backdrop-blur-md bg-black/10 border border-black/10 dark:bg-white/10 dark:border-white/10
                      rounded-xl overflow-hidden shadow-lg p-4"
          >
            <nav className="flex flex-col space-y-1 py-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  onClick={() => {
                    router.push(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-lg font-medium transition-colors py-3 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <button
                  onClick={() => router.push("/contact")}
                  className="w-full bg-gradient animate-gradientShift text-white font-semibold py-3 rounded-full"
                >
                  Let&apos;s Talk
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

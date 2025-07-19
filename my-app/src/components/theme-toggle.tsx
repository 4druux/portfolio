"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <motion.button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="relative inline-flex"
    >
      <Sun className="w-5 h-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-foreground" />
      <Moon className="absolute w-5 h-5 rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-foreground" />
    </motion.button>
  );
}

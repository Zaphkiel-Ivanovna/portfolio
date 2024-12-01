"use client";

import { useScroll } from "@/lib/hooks/use-scroll";
import { motion, AnimatePresence } from "framer-motion";

const sectionColors = {
  hero: ["purple-500", "cyan-500", "blue-500"],
  about: ["emerald-500", "teal-500", "cyan-500"],
  education: ["indigo-500", "violet-500", "purple-500"],
  projects: ["rose-500", "pink-500", "fuchsia-500"],
  contact: ["amber-500", "orange-500", "red-500"],
};

export function Background() {
  const { activeSection, scrollDirection } = useScroll();
  const colors = sectionColors[activeSection as keyof typeof sectionColors] || sectionColors.hero;

  return (
    <div className="fixed inset-0 -z-10 transition-opacity duration-1000">
      <AnimatePresence>
        {scrollDirection === "down" && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute top-0 -left-4 w-72 h-72 bg-${colors[0]} rounded-full mix-blend-multiply filter blur-xl animate-blob`}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`absolute top-0 -right-4 w-72 h-72 bg-${colors[1]} rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000`}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`absolute -bottom-8 left-20 w-72 h-72 bg-${colors[2]} rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000`}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
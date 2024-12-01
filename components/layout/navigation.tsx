"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useScroll } from "@/lib/hooks/use-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollDirection, activeSection } = useScroll();

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {scrollDirection === "down" && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a
                href="#"
                className="text-xl font-bold text-white"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Portfolio
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-sm transition-colors hover:text-white/80",
                      activeSection === item.href.slice(1)
                        ? "text-white"
                        : "text-white/60"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Navigation */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu />
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
                        activeSection === item.href.slice(1)
                          ? "text-white bg-white/10"
                          : "text-white/60"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
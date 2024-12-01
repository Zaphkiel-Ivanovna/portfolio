"use client";

import { motion } from "framer-motion";
import { useScroll } from "@/lib/hooks/use-scroll";
import { 
  Home,
  User,
  GraduationCap,
  Code2,
  Mail,
  LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems: {
  href: string;
  icon: LucideIcon;
  label: string;
}[] = [
  { href: "#", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#education", icon: GraduationCap, label: "Education" },
  { href: "#projects", icon: Code2, label: "Projects" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

export function VerticalNav() {
  const { activeSection } = useScroll();

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-full z-50 hidden lg:flex items-center"
    >
      <div className="flex flex-col items-center space-y-8 backdrop-blur-md bg-black/20 p-4 rounded-r-3xl h-full justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
        >
          <span className="text-2xl font-bold text-cyan-400">P</span>
        </motion.div>
        
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => {
            const isActive = 
              (item.href === "#" && !activeSection) || 
              (item.href.slice(1) === activeSection);
            
            return (
              <motion.button
                key={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="relative group"
              >
                <div
                  className={cn(
                    "p-3 rounded-full transition-colors relative z-10",
                    isActive && "bg-white/10"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-6 h-6 transition-colors",
                      isActive ? "text-cyan-400" : "text-white/60 group-hover:text-white"
                    )}
                  />
                </div>
                {isActive && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute left-[calc(100%+1rem)] top-1/2 -translate-y-1/2 px-2 py-1 bg-black/50 backdrop-blur-md rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <span className="text-sm text-white whitespace-nowrap">{item.label}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
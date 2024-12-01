import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", bounce: 0.4 }}
      className={cn(
        "backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
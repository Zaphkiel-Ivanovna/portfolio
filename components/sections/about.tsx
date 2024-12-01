"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";

export function About() {
  return (
    <section id="about" className="min-h-screen relative py-24 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <GlassCard className="p-8">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-white/80 mb-4">
                With a passion for creating innovative solutions, I specialize in
                full-stack development with a focus on modern web technologies.
              </p>
              <p className="text-lg text-white/80">
                My journey in tech has been driven by curiosity and a constant
                desire to learn and grow.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
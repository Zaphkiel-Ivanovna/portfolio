"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Master's Degree",
      field: "Computer Science",
      school: "Your University",
      year: "2020-2022",
      description: "Specialized in Software Engineering and AI",
    },
    {
      degree: "Bachelor's Degree",
      field: "Computer Science",
      school: "Your University",
      year: "2017-2020",
      description: "Foundation in programming and computer science principles",
    },
  ];

  return (
    <section id="education" className="min-h-screen relative py-24 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <GlassCard className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/20"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400" />
                <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                <p className="text-cyan-400">{item.field}</p>
                <p className="text-white/60">{item.school} • {item.year}</p>
                <p className="mt-2 text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
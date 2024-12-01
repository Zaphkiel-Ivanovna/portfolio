"use client";

import Image from "next/image";
import { GlassCard } from "../ui/glass-card";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hello, I'm <span className="text-cyan-400">Your Name</span>
              </h1>
              <p className="text-lg text-white/80 mb-8">
                A passionate full-stack developer with a keen eye for design and a
                drive for creating impactful digital experiences. Specialized in
                modern web technologies and always eager to learn more.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  View Projects
                </a>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <GlassCard className="aspect-square">
              <Image
                src="/your-photo.jpg" // Replace with your photo URL
                alt="Profile"
                fill
                className="object-cover rounded-xl"
              />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
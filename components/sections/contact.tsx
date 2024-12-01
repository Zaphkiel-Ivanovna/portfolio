"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen relative py-24 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <GlassCard className="p-8">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-white/80 mb-8">
                I'm always open to new opportunities and collaborations. Feel free
                to reach out!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  your.email@example.com
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                  GitHub Profile
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-cyan-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-cyan-400"
              />
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
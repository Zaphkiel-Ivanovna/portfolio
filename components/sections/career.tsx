"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { useTranslation } from "react-i18next";
import { Briefcase } from "lucide-react";

export function Career() {
  const { t } = useTranslation();
  const timeline = t('career.timeline', { returnObjects: true });

  return (
    <section id="career" className="min-h-screen relative py-24 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <GlassCard className="p-8">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">{t('career.title')}</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-cyan-400/20" />
            
            {Object.entries(timeline).map(([year, description], index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                <div className="absolute left-0 w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-cyan-400" />
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{year}</h3>
                  <p className="text-white/80">{description as string}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
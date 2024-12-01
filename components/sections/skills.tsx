"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { useTranslation } from "react-i18next";
import {
  Code2,
  Server,
  Cloud,
  Star,
  StarHalf,
} from "lucide-react";

export function Skills() {
  const { t } = useTranslation();

  const renderSkillLevel = (level: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(level)) {
        stars.push(<Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
      } else if (i === Math.floor(level) && level % 1 !== 0) {
        stars.push(<StarHalf key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-400" />);
      }
    }
    return stars;
  };

  const stackSections = [
    {
      title: t('skills.stack.frontend.title'),
      icon: Code2,
      skills: t('skills.stack.frontend.skills', { returnObjects: true }),
    },
    {
      title: t('skills.stack.backend.title'),
      icon: Server,
      skills: t('skills.stack.backend.skills', { returnObjects: true }),
    },
    {
      title: t('skills.stack.devops.title'),
      icon: Cloud,
      skills: t('skills.stack.devops.skills', { returnObjects: true }),
    },
  ];

  return (
    <section id="skills" className="min-h-screen relative py-24 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-white mb-12">{t('skills.title')}</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                {t('skills.languages.title')}
              </h3>
              <div className="space-y-6">
                {Object.entries(t('skills.languages', { returnObjects: true }))
                  .filter(([key]) => key !== 'title')
                  .map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <p className="text-white/80">{value as string}</p>
                      <div className="flex gap-1">
                        {renderSkillLevel(Math.random() * 2 + 3)}
                      </div>
                    </div>
                  ))}
              </div>
            </GlassCard>
          </motion.div>

          <div className="space-y-8">
            {stackSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white">
                      {section.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
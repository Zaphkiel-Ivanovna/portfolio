import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    resources: {
      fr: {
        translation: {
          nav: {
            home: 'Accueil',
            about: 'À propos',
            education: 'Formation',
            projects: 'Projets',
            contact: 'Contact'
          },
          skills: {
            title: 'Compétences',
            languages: {
              title: 'Langages de programmation',
              javascript: 'JavaScript - Le langage que je parle couramment, même en dormant 😴',
              typescript: 'TypeScript - Pour quand JavaScript a besoin de structure 🏗️',
              python: 'Python - Mon serpent de compagnie préféré 🐍',
              java: 'Java - Pour quand j\'ai besoin de plus de café ☕',
              cpp: 'C++ - Pour les moments nostalgiques de la gestion de mémoire 🤓'
            },
            stack: {
              title: 'Stack technique',
              frontend: {
                title: 'Frontend',
                skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
              },
              backend: {
                title: 'Backend',
                skills: ['Node.js', 'Express', 'NestJS', 'Django']
              },
              devops: {
                title: 'DevOps',
                skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS']
              }
            }
          },
          career: {
            title: 'Parcours professionnel',
            timeline: {
              2023: 'Lead Developer - Entreprise Actuelle',
              2021: 'Senior Developer - Startup Innovante',
              2019: 'Full Stack Developer - Grande Entreprise',
              2017: 'Junior Developer - Première Expérience'
            }
          }
        }
      },
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            education: 'Education',
            projects: 'Projects',
            contact: 'Contact'
          },
          skills: {
            title: 'Skills',
            languages: {
              title: 'Programming Languages',
              javascript: 'JavaScript - The language I speak fluently, even in my sleep 😴',
              typescript: 'TypeScript - For when JavaScript needs structure 🏗️',
              python: 'Python - My favorite pet snake 🐍',
              java: 'Java - For when I need more coffee ☕',
              cpp: 'C++ - For those nostalgic memory management moments 🤓'
            },
            stack: {
              title: 'Tech Stack',
              frontend: {
                title: 'Frontend',
                skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
              },
              backend: {
                title: 'Backend',
                skills: ['Node.js', 'Express', 'NestJS', 'Django']
              },
              devops: {
                title: 'DevOps',
                skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS']
              }
            }
          },
          career: {
            title: 'Career Path',
            timeline: {
              2023: 'Lead Developer - Current Company',
              2021: 'Senior Developer - Innovative Startup',
              2019: 'Full Stack Developer - Large Enterprise',
              2017: 'Junior Developer - First Experience'
            }
          }
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });
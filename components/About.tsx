'use client'

import { motion } from 'framer-motion'
import { FaCode, FaUsers, FaRocket } from 'react-icons/fa'

export default function About() {
  const features = [
    {
      icon: FaCode,
      title: 'Architecture & Design',
      description: 'Application des principes SOLID, Design Patterns, Clean Architecture. Conception de systèmes scalables et maintenables.',
    },
    {
      icon: FaUsers,
      title: 'Leadership & Mentorat',
      description: 'Direction technique d&apos;équipes, supervision du développement, distribution des tâches et suivi technique. Mentorat des développeurs.',
    },
    {
      icon: FaRocket,
      title: 'Optimisation & Performance',
      description: 'Optimisation des performances avec réduction de 30-50% des temps de réponse. Mise en place de pipelines CI/CD et déploiement via Docker.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lead Developer avec 8+ ans d&apos;expérience en développement web full-stack. Expert en Symfony, Laravel, 
            ReactJS, TypeScript, JavaScript, Angular et en application des principes SOLID, Design Patterns, DRY, et KISS. 
            Passionné par l&apos;optimisation des performances, l&apos;automatisation CI/CD et les bonnes pratiques de développement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors"
            >
              <feature.icon className="text-primary-400 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


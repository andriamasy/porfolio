'use client'

import { motion } from 'framer-motion'
import { FaCode, FaUsers, FaRocket } from 'react-icons/fa'

export default function About() {
  const features = [
    {
      icon: FaCode,
      title: 'Architecture & Design',
      description: 'Des choix d’architecture adaptés au produit pour construire des applications évolutives et faciles à maintenir.',
    },
    {
      icon: FaUsers,
      title: 'Leadership & Mentorat',
      description: 'Clarification des priorités, accompagnement des développeurs et partage des bonnes pratiques au quotidien.',
    },
    {
      icon: FaRocket,
      title: 'Optimisation & Performance',
      description: 'Amélioration mesurée des performances et automatisation de la livraison avec Docker et des pipelines CI/CD.',
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
            Ma façon de travailler
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Un partenaire technique, de la conception à la livraison
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="mx-auto max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
            Basé à Antananarivo et fort de plus de 8 ans d’expérience, je
            transforme les besoins métier en applications web maintenables.
            J’interviens sur l’architecture, le développement full-stack et
            l’accompagnement technique des équipes.
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

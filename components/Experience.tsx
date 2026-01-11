'use client'

import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      title: 'Lead Développeur',
      company: 'Indépendant',
      period: 'Nov. 2024 - Aujourd\'hui',
      technologies: ['Symfony', 'Laravel', 'Next.js', 'ReactJS', 'PostgreSQL', 'Docker'],
      description: [
        'Accompagnement des développeurs dans l\'implémentation de solutions web',
        'Optimisation des performances avec une réduction de 30% du temps de réponse global',
        'Mise en place de pipelines CI/CD et déploiement via Docker pour automatiser les workflows de développement',
      ],
    },
    {
      title: 'Lead Développeur',
      company: 'EtechConsulting',
      period: 'Janv. 2023 - Avril 2025',
      technologies: ['Symfony', 'Laravel', 'ReactJS', 'PostgreSQL', 'Docker', 'CI/CD'],
      description: [
        'Direction technique et accompagnement des développeurs dans l\'implémentation de solutions web',
        'Optimisation des performances avec une réduction de 30% du temps de réponse global',
        'Mise en place de pipelines CI/CD et déploiement via Docker pour automatiser les workflows de développement',
      ],
    },
    {
      title: 'Développeur Senior',
      company: 'Etech Consulting',
      period: 'Juil. 2021 - Déc. 2023',
      technologies: ['Symfony', 'Laravel', 'PostgreSQL', 'Redis'],
      description: [
        'Implémentation de solutions web complexes en Symfony & Laravel, respect des principes SOLID',
        'Développement de systèmes résilients et performants en utilisant PostgreSQL et Redis',
        'Optimisation des performances avec une réduction de 50% des temps de chargement des applications',
      ],
    },
    {
      title: 'Développeur Senior',
      company: 'GPSANTE',
      period: '2022 - Aujourd\'hui',
      technologies: ['Symfony', 'MySQL', 'MangoPay', 'API REST', 'mTLS', 'NGINX', 'Docker', 'GitLab CI/CD'],
      description: [
        'Intégration du Service d\'Accès aux Soins (SAS) de Santé.fr avec authentification mutuelle TLS (mTLS)',
        'Intégration du nouveau flux MangoPay avec SCA (Strong Customer Authentication) conforme PSD2',
        'Sécurisation et supervision des échanges inter-applicatifs avec journaux d\'audit',
        'Développement et optimisation de la plateforme de prise de rendez-vous médicaux',
        'Mise en place de mécanismes de sécurisation des données médicales sensibles (RGPD)',
      ],
    },
    {
      title: 'Développeur Senior',
      company: 'PNUD Madagascar',
      period: '2022 - 2024',
      technologies: ['React.js', 'Symfony', 'Oracle'],
      description: [
        'Développement des modules de gestion des microfinances, intégrant des outils de suivi des prêts et remboursements',
        'Intégration de systèmes de paiement sécurisés pour faciliter les transactions',
        'Automatisation des rapports financiers pour une gestion plus rapide et précise des fonds',
      ],
    },
    {
      title: 'Développeur Full-Stack',
      company: 'SaynaWork',
      period: '2023 - 2024',
      technologies: ['Laravel', 'MySQL', 'ReactJS'],
      description: [
        'Conception et développement de tableaux de bord interactifs pour le suivi des performances en temps réel',
        'Amélioration du système de gestion des tâches en automatisant les notifications et le suivi des actions',
        'Optimisation de la base de données pour une gestion plus fluide des utilisateurs et de leurs activités',
      ],
    },
    {
      title: 'Développeur Senior',
      company: 'QualiData',
      period: '2020 - 2022',
      technologies: ['Laravel', 'PostgreSQL'],
      description: [
        'Conception et développement d\'une plateforme de stockage sécurisé pour la gestion de données sensibles dans le secteur de la santé',
        'Création d\'outils d\'analyse et d\'extraction de données permettant une meilleure exploitation des informations collectées',
        'Mise en œuvre de mécanismes de gestion des accès pour garantir la confidentialité des données',
      ],
    },
    {
      title: 'Développeur Intermédiaire',
      company: 'Etech Consulting',
      period: 'Janv. 2019 - Juin 2021',
      technologies: ['PHP', 'ReactJS', 'MySQL'],
      description: [
        'Développement de nouvelles fonctionnalités en PHP & ReactJS',
        'Intégration d\'APIs REST & systèmes tiers',
        'Participation à la revue de code et automatisation CI/CD',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expérience Professionnelle
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-500 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-12 md:mb-16"
              >
                <div className="flex flex-col md:flex-row items-start">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-800 z-10"></div>

                  <div className="md:ml-16 w-full">
                    <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors">
                      <div className="flex items-center mb-3">
                        <FaBriefcase className="text-primary-400 mr-3" />
                        <h3 className="text-2xl font-semibold text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-primary-400 font-medium mb-2">
                        {exp.company} • {exp.period}
                      </p>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary-900/50 text-primary-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


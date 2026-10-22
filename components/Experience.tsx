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

  const renderExperience = (exp: (typeof experiences)[number]) => (
    <article
      key={`${exp.company}-${exp.title}-${exp.period}`}
      className="h-full min-w-0 rounded-2xl border border-gray-700/80 bg-gray-900/60 p-5 transition-colors hover:border-primary-400/60 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-3">
            <FaBriefcase aria-hidden="true" className="shrink-0 text-primary-300" />
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
          </div>
          <p className="mt-2 text-sm font-medium text-primary-300">{exp.company}</p>
        </div>
        <span className="max-w-full whitespace-normal break-words rounded-full border border-gray-600 px-3 py-1 text-xs text-gray-300">
          {exp.period}
        </span>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-gray-800 px-2.5 py-1 text-xs text-gray-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <details className="group mt-5 border-t border-gray-700 pt-4">
        <summary className="cursor-pointer list-none text-sm font-semibold text-primary-300 hover:text-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Voir les contributions</span>
          <span className="hidden group-open:inline">Masquer les contributions</span>
        </summary>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-300">
          {exp.description.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </details>
    </article>
  )

  const selectedExperiences = experiences.slice(0, 4)
  const previousExperiences = experiences.slice(4)

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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
            Parcours
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expérience professionnelle
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-300">
            Plus de 8 ans d’expérience, du développement full-stack à la
            direction technique : conception d’applications, intégrations,
            optimisation et accompagnement d’équipes.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <h3 className="mb-5 text-lg font-semibold text-white">
            Expériences sélectionnées
          </h3>
          <div className="grid min-w-0 gap-4 md:grid-cols-2">
            {selectedExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                {renderExperience(exp)}
              </motion.div>
            ))}
          </div>

          <details className="group mt-6 rounded-2xl border border-gray-700 bg-gray-900/30 p-5 sm:p-6">
            <summary className="cursor-pointer list-none text-center font-semibold text-gray-200 hover:text-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">
                Voir {previousExperiences.length} autres expériences
              </span>
              <span className="hidden group-open:inline">
                Masquer les autres expériences
              </span>
            </summary>
            <div className="mt-6 grid min-w-0 gap-4 md:grid-cols-2">
              {previousExperiences.map(renderExperience)}
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Système d\'Information de Gestion des Ressources Humaines (SIRH)',
      description: 'Plateforme complète et intégrée de gestion des ressources humaines permettant une gestion centralisée de tous les aspects administratifs et opérationnels des employés. Le système couvre l\'ensemble du cycle de vie des ressources humaines, de l\'onboarding à la gestion des départs, en passant par le suivi des performances et la planification des ressources.',
      technologies: ['NestJS', 'ReactJS', 'MongoDB'],
      role: 'Chef de projet et Lead Développeur',
      period: 'Février 2025 - Aujourd\'hui',
      achievements: [
        'Conception et développement de la plateforme complète de Système d\'Information de Gestion des Ressources Humaines',
        'Intégration des modules essentiels : Gestion des dossiers administratifs des employés, Temps et activités, Présences & Absences, Planning et gestion des horaires de travail',
        'Création d\'une interface utilisateur intuitive et moderne facilitant la navigation et l\'utilisation quotidienne',
        'Optimisation des performances côté serveur et client, garantissant une réduction significative des temps de chargement et une meilleure réactivité',
        'Architecture modulaire permettant l\'ajout et la maintenance facilitée de nouveaux modules',
        'Mise en place de mécanismes de sécurité et de contrôle d\'accès pour protéger les données sensibles',
      ],
      image: '👥',
    },
    {
      title: 'Plateforme de formations en ligne et accompagnement',
      description: 'Solution complète de e-learning permettant la création, la diffusion et le suivi de formations en ligne. La plateforme offre un environnement d\'apprentissage interactif avec des fonctionnalités avancées de suivi de progression, d\'évaluation des performances et d\'accompagnement personnalisé des apprenants. L\'interface est conçue avec un focus particulier sur l\'accessibilité et l\'expérience utilisateur optimale.',
      technologies: ['Laravel', 'Next.js', 'PostgreSQL'],
      role: 'Chef de projet et Lead Développeur',
      period: 'Novembre 2024 - Aujourd\'hui',
      achievements: [
        'Conception et développement de la plateforme de formations en ligne complète',
        'Intégration de modules de suivi de progression permettant aux apprenants et formateurs de suivre l\'avancement en temps réel',
        'Développement de modules d\'évaluation des performances avec système de notation et de feedback',
        'Création d\'une interface utilisateur intuitive avec une forte attention portée à l\'accessibilité (WCAG)',
        'Optimisation des performances serveur et client, résultant en une réduction de 40% des temps de réponse',
        'Mise en place d\'un système de recommandations de formations basé sur les compétences et les objectifs',
        'Intégration de fonctionnalités d\'accompagnement et de mentorat pour améliorer l\'engagement des apprenants',
      ],
      image: '📚',
    },
    {
      title: 'Plateforme de gestion de contenus audiovisuels',
      description: 'Système complet de gestion et de distribution de contenus audiovisuels pour l\'industrie du divertissement et des médias. La plateforme permet la numérisation, le stockage sécurisé, l\'indexation, la recherche et la distribution automatisée de contenus vidéo et audio. Elle garantit la conformité aux standards de l\'industrie tout en optimisant les workflows de production et de post-production.',
      technologies: ['Symfony', 'Twig', 'MySQL'],
      role: 'Développeur Senior',
      period: 'Décembre 2024 - Aujourd\'hui',
      achievements: [
        'Développement de fonctionnalités de numérisation de contenus audiovisuels conformes aux standards de l\'industrie (MPEG, H.264, H.265)',
        'Mise en place d\'un système de stockage sécurisé et redondant pour vidéos et autres contenus sensibles avec gestion des métadonnées',
        'Implémentation de workflows automatisés pour la gestion et la distribution de contenus, améliorant significativement l\'efficacité de l\'équipe de production',
        'Développement d\'un système d\'indexation et de recherche avancée permettant de retrouver rapidement les contenus',
        'Intégration de mécanismes de contrôle d\'accès et de gestion des droits pour protéger la propriété intellectuelle',
        'Optimisation des performances de traitement et de streaming pour gérer de gros volumes de contenus',
      ],
      image: '🎬',
    },
    {
      title: 'Application web et mobile médecins-patients',
      description: 'Application complète de mise en relation et de gestion de consultations entre médecins et patients, disponible sur web et mobile. La solution permet la prise de rendez-vous, la téléconsultation, le suivi médical, la gestion des prescriptions et le partage sécurisé de documents médicaux. L\'architecture respecte les principes de Clean Architecture, SOLID et Design Patterns pour garantir la maintenabilité et l\'évolutivité.',
      technologies: ['NestJS', 'Next.js', 'React Native', 'MongoDB'],
      role: 'Lead Développeur',
      period: 'Septembre 2023 - Aujourd\'hui',
      achievements: [
        'Définition de l\'architecture globale de la solution incluant backend API RESTful, frontend web et application mobile native',
        'Sélection et mise en place des technologies appropriées (stack technique, base de données NoSQL, hébergement cloud)',
        'Application rigoureuse des principes Clean Architecture, SOLID et Design Patterns pour un code maintenable et évolutif',
        'Supervision et encadrement de l\'équipe de développement (frontend, backend, mobile) avec distribution des tâches et suivi technique',
        'Mise en place des priorités de développement et gestion du backlog technique',
        'Implémentation de mécanismes de sécurité avancés : chiffrement des données sensibles, authentification forte (2FA), gestion des tokens JWT',
        'Conformité RGPD avec gestion du consentement, droit à l\'oubli et portabilité des données',
        'Implémentation complète de tests : unitaires (Jest, PHPUnit), tests d\'intégration et tests end-to-end (E2E)',
        'Mise en place de CI/CD pour automatiser les déploiements et garantir la qualité du code',
        'Optimisation des performances pour gérer un grand nombre d\'utilisateurs simultanés',
      ],
      image: '🏥',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projets
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-primary-500 transition-all duration-300 overflow-hidden group h-full flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                {project.role && (
                  <p className="text-primary-400 text-sm font-medium mb-1">
                    {project.role}
                  </p>
                )}
                {project.period && (
                  <p className="text-gray-500 text-xs mb-4 italic">
                    {project.period}
                  </p>
                )}
                <div className="mb-4 flex-grow">
                  <h4 className="text-white font-semibold text-sm mb-2">Description du projet :</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {project.achievements && project.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-white font-semibold text-sm mb-2">Réalisations clés :</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="leading-relaxed">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


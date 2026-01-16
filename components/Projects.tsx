'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Application web et mobile médecins-patients',
      description: 'Application complète de mise en relation et de gestion de consultations entre médecins et patients, disponible sur web et mobile. La solution permet la prise de rendez-vous, la téléconsultation, le suivi médical, la gestion des prescriptions et le partage sécurisé de documents médicaux. L\'architecture respecte les principes de Clean Architecture, SOLID et Design Patterns pour garantir la maintenabilité et l\'évolutivité.',
      technologies: ['NestJS', 'Next.js', 'React Native', 'MongoDB'],
      role: 'Lead Développeur',
      period: '2021 - Aujourd\'hui',
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
    {
      title: 'Système d\'Information de Gestion des Ressources Humaines (SIRH)',
      description: 'Plateforme complète et intégrée de gestion des ressources humaines permettant une gestion centralisée de tous les aspects administratifs et opérationnels des employés. Le système couvre l\'ensemble du cycle de vie des ressources humaines, de l\'onboarding à la gestion des départs, en passant par le suivi des performances et la planification des ressources.',
      technologies: ['NestJS', 'ReactJS', 'MongoDB'],
      role: 'Chef de projet et Lead Développeur',
      period: 'Février 2024 - Décembre 2024',
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
      period: 'Novembre 2024 - Janvier 2025',
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
      title: 'Plateforme GPSANTE - Prise de rendez-vous médicaux',
      description: 'Plateforme complète de prise de rendez-vous médicaux avec intégration du Service d\'Accès aux Soins (SAS) de Santé.fr et système de paiement MangoPay. La solution permet la gestion des médecins, patients et créneaux horaires avec une sécurité renforcée pour les données médicales sensibles.',
      technologies: ['Symfony', 'MySQL', 'MangoPay', 'API REST', 'mTLS', 'NGINX', 'Docker', 'GitLab CI/CD'],
      role: 'Développeur Senior',
      period: '2022 - Aujourd\'hui',
      achievements: [
        'Intégration du Service d\'Accès aux Soins (SAS) de Santé.fr avec authentification mutuelle TLS (mTLS) via certificats X.509',
        'Génération, gestion et renouvellement automatique des certificats pour garantir une communication chiffrée bilatérale',
        'Configuration fine du serveur NGINX et du client PHP pour assurer une communication sécurisée',
        'Intégration du nouveau flux MangoPay avec SCA (Strong Customer Authentication) conforme PSD2',
        'Implémentation complète du parcours PreAuthorized PayIn avec gestion des redirections utilisateur',
        'Création automatique de portefeuilles MangoPay, gestion des KYC, virements et transferts',
        'Mise en place de journaux d\'audit pour tracer les appels sensibles (SAS, MangoPay)',
        'Automatisation des tests d\'intégration avec mocks des API SAS et MangoPay',
        'Optimisation des performances via mécanismes de retry, timeout intelligent et gestion d\'erreurs centralisée',
        'Mise en place de mécanismes de sécurisation des données médicales sensibles en conformité RGPD',
      ],
      image: '🏥',
    },
    {
      title: 'Système de gestion des microfinances - PNUD Madagascar',
      description: 'Plateforme de gestion des microfinances pour le PNUD Madagascar permettant le suivi des prêts, remboursements et transactions financières. Le système intègre des outils de paiement sécurisés et automatise la génération de rapports financiers.',
      technologies: ['React.js', 'Symfony', 'Oracle'],
      role: 'Développeur Senior',
      period: '2022 - 2024',
      achievements: [
        'Développement des modules de gestion des microfinances intégrant des outils de suivi des prêts et remboursements',
        'Intégration de systèmes de paiement sécurisés pour faciliter les transactions entre bénéficiaires et institutions',
        'Automatisation des rapports financiers permettant une gestion plus rapide et précise des fonds',
        'Création d\'interfaces de suivi en temps réel pour les gestionnaires et bénéficiaires',
        'Mise en place de mécanismes de validation et de contrôle des transactions',
      ],
      image: '💰',
    },
    {
      title: 'Plateforme SaynaWork - Tableaux de bord et gestion des tâches',
      description: 'Plateforme de gestion de projets avec tableaux de bord interactifs permettant le suivi des performances en temps réel. Le système inclut une gestion avancée des tâches avec automatisation des notifications et suivi des actions.',
      technologies: ['Laravel', 'MySQL', 'ReactJS'],
      role: 'Développeur Full-Stack',
      period: '2023 - 2024',
      achievements: [
        'Conception et développement de tableaux de bord interactifs pour le suivi des performances en temps réel',
        'Amélioration du système de gestion des tâches en automatisant les notifications et le suivi des actions',
        'Optimisation de la base de données pour une gestion plus fluide des utilisateurs et de leurs activités',
        'Création d\'interfaces utilisateur modernes et réactives',
        'Mise en place de systèmes de notifications en temps réel',
      ],
      image: '📊',
    },
    {
      title: 'Plateforme QualiData - Stockage sécurisé de données sensibles',
      description: 'Plateforme de stockage sécurisé pour la gestion de données sensibles dans le secteur de la santé et des sciences sociales. Le système inclut des outils d\'analyse et d\'extraction de données avec gestion avancée des accès.',
      technologies: ['Laravel', 'PostgreSQL'],
      role: 'Développeur Senior',
      period: '2020 - 2022',
      achievements: [
        'Conception et développement d\'une plateforme de stockage sécurisé pour la gestion de données sensibles',
        'Création d\'outils d\'analyse et d\'extraction de données permettant une meilleure exploitation des informations collectées',
        'Mise en œuvre de mécanismes de gestion des accès pour garantir la confidentialité des données',
        'Implémentation de systèmes de chiffrement pour protéger les données sensibles',
        'Développement d\'interfaces d\'administration pour la gestion des utilisateurs et des permissions',
      ],
      image: '🔒',
    },
    {
      title: 'Système COVID-DATA - Suivi des cas COVID-19',
      description: 'Système de suivi des cas COVID-19 et des tendances sanitaires à Madagascar. La plateforme inclut des tableaux de bord interactifs pour l\'analyse des données de santé publique et l\'intégration de multiples sources de données.',
      technologies: ['Symfony', 'React.js'],
      role: 'Développeur Intermédiaire',
      period: '2020 (6 mois)',
      achievements: [
        'Développement d\'un système de suivi des cas COVID-19 et des tendances sanitaires à Madagascar',
        'Création de tableaux de bord interactifs pour l\'analyse des données de santé publique',
        'Intégration de diverses sources de données pour une vue complète de la situation',
        'Amélioration des rapports d\'analyse pour une prise de décision rapide',
        'Mise en place de visualisations de données en temps réel',
      ],
      image: '🦠',
    },
    {
      title: 'Mecagoo - Moteur de recherche avancé',
      description: 'Plateforme de recherche de services avec moteur de recherche avancé permettant aux utilisateurs de trouver rapidement les services disponibles. Le système inclut un moteur de recommandation basé sur les préférences utilisateur et l\'intégration de la géolocalisation.',
      technologies: ['Laravel', 'Vue.js'],
      role: 'Développeur Intermédiaire',
      period: '2020 - 2021',
      achievements: [
        'Développement d\'un moteur de recherche avancé permettant de trouver rapidement les services disponibles',
        'Implémentation d\'un système de recommandation basé sur les préférences utilisateur',
        'Intégration de la géolocalisation pour améliorer la pertinence des résultats de recherche en temps réel',
        'Optimisation des performances de recherche pour des résultats instantanés',
        'Création d\'interfaces utilisateur intuitives pour la recherche et la découverte de services',
      ],
      image: '🔍',
    },
    {
      title: 'ChristiWines - E-commerce WordPress',
      description: 'Site e-commerce WordPress pour la vente de vins avec plugins personnalisés pour améliorer l\'expérience utilisateur. Optimisation des performances et mise en place de stratégies SEO pour augmenter la visibilité et le trafic.',
      technologies: ['WordPress', 'Angular', 'MySQL'],
      role: 'Développeur Intermédiaire',
      period: '2019 - 2020',
      achievements: [
        'Développement de plugins WordPress personnalisés pour améliorer l\'e-commerce et l\'UX/UI',
        'Optimisation des performances du site e-commerce pour améliorer la vitesse de chargement et l\'expérience utilisateur',
        'Implémentation de stratégies SEO pour augmenter la visibilité du site et générer plus de trafic',
        'Intégration de systèmes de paiement et de gestion des commandes',
        'Création d\'interfaces utilisateur modernes et responsives',
      ],
      image: '🍷',
    },
    {
      title: 'DomTomAutomobile - Gestion de stocks',
      description: 'Système de gestion de stocks pour un concessionnaire automobile avec fonctionnalités de suivi et de mise à jour en temps réel des inventaires.',
      technologies: ['Symfony', 'MySQL'],
      role: 'Développeur Intermédiaire',
      period: '2018 - 2019',
      achievements: [
        'Développement de fonctionnalités pour la gestion des stocks de véhicules',
        'Mise à jour en temps réel des inventaires',
        'Création d\'interfaces de gestion pour le suivi des stocks',
      ],
      image: '🚗',
    },
    {
      title: 'Nanoe - Gestion de stocks et installations électriques',
      description: 'Plateforme complète de gestion de stocks de véhicules et de gestion des installations électriques. Le système inclut un moteur de recherche avancé et des algorithmes d\'analyse des besoins en énergie.',
      technologies: ['Symfony', 'PostgreSQL'],
      role: 'Développeur Intermédiaire',
      period: '2018 - 2019',
      achievements: [
        'Développement de fonctionnalités pour la gestion des stocks de véhicules et la mise à jour en temps réel des inventaires',
        'Intégration de systèmes de paiement sécurisés pour les achats en ligne de véhicules',
        'Développement d\'un moteur de recherche avancé pour améliorer la recherche des véhicules selon les critères utilisateurs',
        'Création d\'un système de gestion des installations électriques permettant une gestion efficace de l\'infrastructure énergétique',
        'Développement d\'algorithmes pour analyser les besoins en énergie et optimiser la consommation',
        'Collaboration avec l\'équipe pour améliorer la performance du système et la gestion des données',
      ],
      image: '⚡',
    },
    {
      title: 'AppWork - Intégration de paiements et gestion de freelances',
      description: 'Plateforme de gestion de freelances et de projets avec intégration de systèmes de paiement et optimisation du backend pour améliorer les performances globales.',
      technologies: ['Symfony', 'Prestashop', 'Angular'],
      role: 'Développeur Junior',
      period: '2018 (1 an)',
      achievements: [
        'Intégration des API de paiement pour gérer les transactions en ligne de manière sécurisée',
        'Optimisation du backend pour améliorer les performances globales du système',
        'Développement de modules spécifiques pour améliorer la gestion des freelances et des projets',
        'Création d\'interfaces de gestion pour les freelances et les clients',
      ],
      image: '💼',
    },
    {
      title: 'Typy - Moteur de scraping et analyse de données',
      description: 'Système de scraping et d\'analyse de données des réseaux sociaux permettant l\'extraction, le stockage et l\'analyse de données pour fournir des rapports exploitables.',
      technologies: ['Symfony', 'MySQL', 'Twig'],
      role: 'Développeur Junior',
      period: '2017 - 2018',
      achievements: [
        'Développement d\'un moteur de scraping pour extraire des données de réseaux sociaux',
        'Stockage et analyse des données récoltées pour fournir des rapports exploitables',
        'Optimisation du backend pour une gestion plus fluide des données collectées',
        'Création d\'interfaces de visualisation des données analysées',
        'Mise en place de systèmes de traitement par lots pour gérer de gros volumes de données',
      ],
      image: '📱',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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


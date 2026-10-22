export default function Projects() {
  const projects = [
    {
      title: 'Application web et mobile médecins-patients',
      description: 'Application web et mobile de gestion des consultations : rendez-vous, téléconsultation, suivi médical, prescriptions et partage de documents. Une architecture pensée pour rester maintenable et évoluer.',
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
      description: 'Plateforme RH couvrant les dossiers des employés, les temps et activités, les absences et les plannings. Son architecture modulaire facilite l’évolution et la maintenance.',
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
      description: 'Plateforme de formation en ligne avec suivi de progression, évaluations et accompagnement des apprenants. L’interface met l’accent sur l’accessibilité et le suivi des formations.',
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

  const renderProject = (
    project: (typeof projects)[number],
    compact = false,
  ) => (
    <article
      key={project.title}
      className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-700/80 bg-gray-800/60 transition duration-300 hover:-translate-y-1 hover:border-primary-400/70 hover:bg-gray-800 ${
        compact ? 'p-4 sm:p-5' : 'p-5 sm:p-6'
      }`}
    >
      <div
        aria-hidden="true"
        className="relative -mx-5 -mt-5 mb-5 h-32 overflow-hidden border-b border-gray-700 bg-gradient-to-br from-primary-900/80 via-gray-800 to-gray-900 sm:-mx-6 sm:-mt-6 sm:h-36"
      >
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -right-8 -top-16 h-48 w-48 rounded-full border border-primary-200/10" />
        <div className="absolute -right-2 -top-10 h-36 w-36 rounded-full border border-primary-200/10" />
        <div className="absolute bottom-4 left-5 flex items-end gap-3 sm:left-6">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-gray-950/70 text-3xl shadow-lg backdrop-blur-sm">
            {project.image}
          </span>
          <span className="mb-1 rounded-full border border-white/15 bg-gray-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-100 backdrop-blur-sm">
            Aperçu illustratif
          </span>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} min-w-0 flex-1 font-semibold leading-snug text-white`}>
        {project.title}
        </h3>
        <span className="max-w-full whitespace-normal break-words rounded-full border border-gray-600 px-3 py-1 text-right text-xs font-medium text-gray-300">
          {project.period}
        </span>
      </div>
      <p className="text-sm font-medium text-primary-300">{project.role}</p>
      <p className="mt-4 flex-grow text-sm leading-6 text-gray-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-700/80 px-3 py-1 text-xs font-medium text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <details className="group/details mt-5 border-t border-gray-700 pt-4">
        <summary className="cursor-pointer list-none text-sm font-semibold text-primary-300 marker:hidden hover:text-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 [&::-webkit-details-marker]:hidden">
          <span className="group-open/details:hidden">
            Voir les réalisations ({project.achievements.length})
          </span>
          <span className="hidden group-open/details:inline">Masquer les réalisations</span>
        </summary>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-300">
          {project.achievements.map((achievement) => (
            <li key={achievement} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </details>
    </article>
  )

  const featuredProjects = projects.slice(0, 3)
  const additionalProjects = projects.slice(3)

  return (
    <section id="projects" className="bg-gray-900 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
            Réalisations
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Des réalisations pensées pour répondre à des besoins concrets
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-300">
            Quelques exemples de produits et de plateformes auxquels j’ai
            contribué, avec mon rôle, les technologies utilisées et les
            réalisations principales.
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => renderProject(project))}
        </div>

        <details className="group mx-auto mt-8 max-w-6xl rounded-2xl border border-gray-700 bg-gray-800/30 p-5 sm:p-7">
          <summary className="cursor-pointer list-none text-center font-semibold text-white marker:hidden hover:text-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Explorer {additionalProjects.length} autres projets</span>
            <span className="hidden group-open:inline">Masquer les autres projets</span>
          </summary>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((project) => renderProject(project, true))}
          </div>
        </details>
      </div>
    </section>
  )
}

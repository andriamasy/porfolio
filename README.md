# Portfolio - Andriamasy Eric Mathieu

Portfolio professionnel moderne de Lead Developer avec 8+ ans d'expérience en développement web full-stack. Construit avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - Interface élégante adaptée à tous les écrans
- **Animations fluides** - Utilisation de Framer Motion pour des transitions soignées
- **Sections complètes** :
  - Hero section avec présentation
  - À propos avec valeurs clés
  - Compétences techniques avec barres de progression
  - Expérience professionnelle avec timeline
  - Projets avec technologies utilisées
  - Contact avec liens sociaux
- **Navigation fluide** - Menu sticky avec scroll smooth
- **Optimisé pour le SEO** - Métadonnées et structure sémantique

## 🛠️ Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations et transitions
- **React Icons** - Bibliothèque d'icônes
- **Vercel Web Analytics** et **Google Analytics 4** - Mesure d'audience après consentement

## 📊 Analytique et confidentialité

Vercel Web Analytics et Google Analytics 4 ne sont chargés qu'après acceptation
dans la bannière de consentement. Les visiteurs peuvent modifier leur choix via
le lien « Préférences de confidentialité » dans le pied de page.

Pour activer Vercel Web Analytics, activez **Analytics** dans le tableau de bord
Vercel du projet après le déploiement.

Pour activer Google Analytics 4 :

1. Créez une propriété GA4 et récupérez son identifiant de mesure (`G-...`).
2. Dans Vercel, ajoutez la variable d'environnement
   `NEXT_PUBLIC_GA_MEASUREMENT_ID` avec cet identifiant pour Production
   (et Preview si souhaité).
3. Redéployez le site. Sans cette variable, Vercel Analytics fonctionne toujours
   après consentement, mais GA4 reste désactivé.

## 📦 Installation

1. Cloner le repository :
```bash
git clone https://github.com/votre-username/portfolio-lead-developer.git
cd portfolio-lead-developer
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🏗️ Build pour production

```bash
npm run build
```

Le build crée un dossier `.next/` optimisé pour la production. Pour un déploiement sur Vercel, le build est automatique.

## 👤 À propos

**Andriamasy Eric Mathieu** - Lead Developer

- 📍 Antananarivo, Madagascar
- 📧 m.andriamasy@outlook.fr | andriamasy1@gmail.com
- 💼 8+ ans d'expérience en développement web full-stack
- 🔗 [LinkedIn](https://linkedin.com/in/andriamasy)

### Expertises

- **Langages** : PHP, JavaScript, TypeScript, Java
- **Frameworks** : Symfony, Laravel, ReactJS, Next.js, VueJS, Angular, NestJS
- **Bases de données** : PostgreSQL, MySQL, MongoDB, Oracle, Redis
- **DevOps** : Docker, Git, CI/CD, AWS, NGINX, Webpack
- **Principes** : SOLID, Design Patterns, Clean Architecture, TDD

## 📝 Personnalisation

Les informations sont déjà personnalisées selon le CV. Pour modifier :

1. **Hero Section** : `components/Hero.tsx` - Nom, titre, description, liens sociaux
2. **À propos** : `components/About.tsx` - Description personnelle
3. **Compétences** : `components/Skills.tsx` - Catégories et niveaux
4. **Expérience** : `components/Experience.tsx` - Expériences professionnelles
5. **Projets** : `components/Projects.tsx` - Projets clés
6. **Certifications** : `components/Certifications.tsx` - Certifications
7. **Contact** : `components/Contact.tsx` - Informations de contact

### Personnaliser les couleurs

Modifier le fichier `tailwind.config.js` pour changer la palette de couleurs :

```javascript
colors: {
  primary: {
    // Vos couleurs personnalisées
  },
}
```

## 🚢 Déploiement

### Vercel (Recommandé - Gratuit) ⭐

**Méthode la plus simple et rapide :**

1. **Via l'interface web** (Recommandé) :
   - Allez sur [vercel.com](https://vercel.com) et créez un compte (gratuit)
   - Cliquez sur "Add New Project"
   - Importez votre repository GitHub
   - Vercel détecte automatiquement Next.js et configure tout
   - Cliquez sur "Deploy" → Votre site est en ligne en 2 minutes !

2. **Via CLI** :
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

**Avantages du plan gratuit Vercel :**
- ✅ 100 Go de bande passante/mois
- ✅ Déploiements illimités
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Domaines personnalisés
- ✅ Déploiements automatiques à chaque push GitHub

📖 **Guide détaillé** : Voir [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md)

### GitHub Pages

1. Configurer `next.config.js` avec `output: 'export'`
2. Créer un workflow GitHub Actions (voir `.github/workflows/deploy.yml`)
3. Configurer GitHub Pages dans les paramètres du repository

### Netlify

1. Installer Netlify CLI : `npm i -g netlify-cli`
2. Build : `npm run build`
3. Déployer : `netlify deploy --prod --dir=.next`

## 📄 Licence

Ce projet est sous licence MIT. N'hésitez pas à l'utiliser comme base pour votre propre portfolio.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

**Portfolio de Andriamasy Eric Mathieu** - Lead Developer

Créé avec Next.js, TypeScript, Tailwind CSS et Framer Motion

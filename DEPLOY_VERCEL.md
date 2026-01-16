# Guide de déploiement sur Vercel (Gratuit)

Ce guide vous explique comment déployer votre portfolio sur Vercel gratuitement en quelques minutes.

## 🚀 Méthode 1 : Déploiement via l'interface Vercel (Recommandé)

### Étape 1 : Préparer votre projet sur GitHub

1. **Créer un repository GitHub** (si ce n'est pas déjà fait) :
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio Lead Developer"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/votre-repo.git
   git push -u origin main
   ```

### Étape 2 : Créer un compte Vercel

1. Allez sur [https://vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"** (recommandé pour la connexion automatique)
4. Autorisez Vercel à accéder à votre compte GitHub

### Étape 3 : Importer votre projet

1. Une fois connecté, cliquez sur **"Add New..."** puis **"Project"**
2. Vous verrez la liste de vos repositories GitHub
3. Cliquez sur **"Import"** à côté de votre repository portfolio
4. Vercel détectera automatiquement que c'est un projet Next.js

### Étape 4 : Configurer le projet

1. **Project Name** : Laissez le nom par défaut ou changez-le (ex: `portfolio-mathieu`)
2. **Framework Preset** : Vercel détecte automatiquement "Next.js"
3. **Root Directory** : Laissez `./` (racine du projet)
4. **Build Command** : `npm run build` (déjà configuré)
5. **Output Directory** : Laissez vide (Vercel gère automatiquement)
6. **Install Command** : `npm install` (déjà configuré)

### Étape 5 : Déployer

1. Cliquez sur **"Deploy"**
2. Attendez 1-2 minutes que le build se termine
3. Votre site sera disponible sur une URL comme : `https://votre-projet.vercel.app`

### Étape 6 : Configurer un domaine personnalisé (Optionnel)

1. Dans votre projet Vercel, allez dans **"Settings"** > **"Domains"**
2. Ajoutez votre domaine (ex: `portfolio.mathieu.dev`)
3. Suivez les instructions pour configurer les DNS

## 🛠️ Méthode 2 : Déploiement via Vercel CLI

### Étape 1 : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2 : Se connecter à Vercel

```bash
vercel login
```

### Étape 3 : Déployer

Depuis le répertoire de votre projet :

```bash
vercel
```

Suivez les instructions :
- **Set up and deploy?** → `Y`
- **Which scope?** → Choisissez votre compte
- **Link to existing project?** → `N` (première fois)
- **What's your project's name?** → `portfolio-mathieu` (ou autre)
- **In which directory is your code located?** → `./`

### Étape 4 : Déployer en production

```bash
vercel --prod
```

Votre site sera disponible sur `https://votre-projet.vercel.app`

## 📝 Configuration automatique

Vercel détecte automatiquement :
- ✅ Next.js comme framework
- ✅ Les commandes de build (`npm run build`)
- ✅ Les variables d'environnement (si nécessaire)
- ✅ Les optimisations automatiques

## 🔄 Déploiements automatiques

Une fois connecté à GitHub, chaque push sur la branche `main` déclenchera automatiquement un nouveau déploiement.

### Workflow recommandé :

1. Faites vos modifications localement
2. Testez avec `npm run dev`
3. Commitez et poussez sur GitHub :
   ```bash
   git add .
   git commit -m "Description des modifications"
   git push
   ```
4. Vercel déploie automatiquement en quelques minutes

## 🎯 Plan gratuit Vercel

Le plan gratuit inclut :
- ✅ **100 Go** de bande passante par mois
- ✅ **Déploiements illimités**
- ✅ **HTTPS automatique**
- ✅ **CDN global** (sites rapides partout)
- ✅ **Domaines personnalisés** (illimités)
- ✅ **Prévisualisations** pour chaque Pull Request
- ✅ **Analytics** de base

## 🐛 Résolution de problèmes

### Erreur de build

Si le build échoue :
1. Vérifiez les logs dans l'onglet **"Deployments"** de Vercel
2. Testez localement : `npm run build`
3. Vérifiez que toutes les dépendances sont dans `package.json`

### Erreur "Module not found"

```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
```

### Variables d'environnement

Si vous avez besoin de variables d'environnement :
1. Allez dans **Settings** > **Environment Variables**
2. Ajoutez vos variables
3. Redéployez

## 📊 Monitoring

Vercel fournit :
- **Analytics** : Visiteurs, pages vues, etc.
- **Speed Insights** : Performance de votre site
- **Logs** : Logs en temps réel des déploiements

## 🔗 Liens utiles

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Next.js sur Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Dashboard Vercel](https://vercel.com/dashboard)

## ✅ Checklist avant déploiement

- [ ] Tous les fichiers sont commités sur GitHub
- [ ] `npm run build` fonctionne localement sans erreur
- [ ] Les liens et images fonctionnent correctement
- [ ] Le site est responsive (testé sur mobile)
- [ ] Les informations de contact sont à jour

---

**Votre portfolio sera en ligne en moins de 5 minutes ! 🚀**



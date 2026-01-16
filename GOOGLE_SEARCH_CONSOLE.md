# Guide Google Search Console - Référencement

Votre portfolio est maintenant optimisé pour Google ! Suivez ces étapes pour le référencer.

## 🎯 Votre domaine
**https://andriamasy.vercel.app**

## 📋 Étape 1 : Créer un compte Google Search Console

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Connectez-vous avec votre compte Google
3. Cliquez sur **"Démarrer"**

## 📋 Étape 2 : Ajouter votre propriété

1. Cliquez sur **"Ajouter une propriété"** (en haut à droite)
2. Choisissez **"Préfixe d'URL"**
3. Entrez : `https://andriamasy.vercel.app`
4. Cliquez sur **"Continuer"**

## 📋 Étape 3 : Vérifier la propriété

### Méthode recommandée : Balise HTML

1. Google vous donnera un code de vérification (ex: `content="abc123xyz"`)
2. Copiez ce code
3. Ouvrez le fichier `app/layout.tsx`
4. Trouvez la ligne 85 :
   ```typescript
   verification: {
     google: 'votre-code-verification-google',
   },
   ```
5. Remplacez `'votre-code-verification-google'` par votre code (ex: `'abc123xyz'`)
6. Déployez sur Vercel :
   ```bash
   git add .
   git commit -m "Add Google Search Console verification"
   git push
   ```
7. Revenez sur Google Search Console et cliquez sur **"Vérifier"**

## 📋 Étape 4 : Soumettre le sitemap

Une fois vérifié :

1. Dans le menu de gauche, cliquez sur **"Sitemaps"**
2. Dans le champ "Ajouter un nouveau sitemap", entrez : `sitemap.xml`
3. Cliquez sur **"Envoyer"**
4. Google va maintenant indexer votre site automatiquement

## 📋 Étape 5 : Vérifier l'indexation

1. Dans Google Search Console, allez dans **"Couverture"**
2. Attendez quelques jours pour voir les pages indexées
3. Vous pouvez aussi tester avec : `site:andriamasy.vercel.app` dans Google

## 🔍 Mots-clés optimisés pour vos recherches

Votre site est optimisé pour ces recherches :

### Recherches principales :
- ✅ "Lead Developer Madagascar"
- ✅ "Développeur Full-Stack Madagascar"
- ✅ "Développeur Symfony Madagascar"
- ✅ "Développeur Laravel Madagascar"
- ✅ "Développeur ReactJS Madagascar"
- ✅ "Développeur TypeScript Madagascar"
- ✅ "Expert Symfony Laravel"
- ✅ "Développeur freelance Madagascar"
- ✅ "Lead Developer Antananarivo"
- ✅ "Développeur web Antananarivo"

### Recherches secondaires :
- "Programmeur PHP Madagascar"
- "Développeur JavaScript Madagascar"
- "Architecte logiciel Madagascar"
- "Expert Clean Architecture"
- "Développeur NestJS"
- "Expert Docker CI/CD"
- "Consultant technique Madagascar"

## 📊 Suivi des performances

### Dans Google Search Console, vous pouvez voir :

1. **Performances** :
   - Nombre de clics
   - Impressions (fois où votre site apparaît)
   - Position moyenne dans les résultats
   - Taux de clic (CTR)

2. **Couverture** :
   - Pages indexées
   - Erreurs d'indexation
   - Pages exclues

3. **Améliorations** :
   - Problèmes de mobilité
   - Problèmes de sécurité
   - Suggestions d'optimisation

## ⏱️ Temps d'indexation

- **Première indexation** : 1-2 semaines après soumission
- **Indexation complète** : 2-4 semaines
- **Apparition dans les résultats** : 2-6 semaines

## 🚀 Optimisations supplémentaires

### 1. Créer du contenu régulièrement
- Mettez à jour vos projets
- Ajoutez de nouveaux projets
- Blog (optionnel) avec articles techniques

### 2. Obtenir des backlinks
- Partagez sur LinkedIn
- Partagez sur GitHub
- Partagez dans des communautés de développeurs

### 3. Optimiser les performances
- Votre site est déjà optimisé avec Next.js
- Vérifiez avec [PageSpeed Insights](https://pagespeed.web.dev)

## ✅ Checklist finale

- [ ] Compte Google Search Console créé
- [ ] Propriété ajoutée : `https://andriamasy.vercel.app`
- [ ] Code de vérification ajouté dans `app/layout.tsx`
- [ ] Site déployé avec le code de vérification
- [ ] Propriété vérifiée dans Google Search Console
- [ ] Sitemap soumis : `sitemap.xml`
- [ ] Attente de l'indexation (1-2 semaines)

## 🔗 Liens utiles

- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 📞 Support

Si vous avez des questions :
- Documentation Google : [Search Central](https://developers.google.com/search)
- Forum d'aide : [Google Search Central Help](https://support.google.com/webmasters)

---

**Une fois configuré, votre portfolio sera visible sur Google en recherchant vos compétences ! 🎉**

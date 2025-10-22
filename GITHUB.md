# 🚀 Déployer mon Portfolio sur GitHub

Ce guide m'aide à publier mon portfolio sur GitHub Pages.

## 📋 Étapes de publication

### 1. Créer le repository
- Aller sur [github.com](https://github.com) et me connecter
- Cliquer sur "New repository"
- Nom : `E-Portfolio` (ou `mathis-kam-portfolio`)
- Description : "Portfolio personnel de Mathis KAM - Étudiant ingénieur ENSEEIHT"
- ✅ Public (obligatoire pour GitHub Pages gratuit)
- ❌ Ne pas initialiser avec README (j'ai déjà le mien)

### 2. Publier le code
```bash
cd portfolio-website
git init
git add .
git commit -m "🎉 Initial commit: Mon portfolio personnel"
git branch -M main
git remote add origin https://github.com/MathisKAM/E-Portfolio.git
git push -u origin main
```

### 3. Activer GitHub Pages
- Aller dans les Settings de mon repository
- Section "Pages" dans la sidebar
- Source : "Deploy from a branch"
- Branch : `main` + `/ (root)`
- Sauvegarder

### 4. Accéder à mon site
Mon portfolio sera disponible à : `https://mathiskam.github.io/E-Portfolio`

## 🔄 Mises à jour futures

Pour mettre à jour mon portfolio :
```bash
git add .
git commit -m "✨ Mise à jour du portfolio"
git push
```

Les changements seront automatiquement déployés !

## 📝 Notes importantes

- ✅ `index.html` est bien à la racine (obligatoire pour GitHub Pages)
- ✅ Tous les chemins sont relatifs (pas de `/` au début)
- ✅ Structure organisée et professionnelle
- ✅ README.md complet pour présenter le projet

## 🎯 Checklist finale

- [ ] Repository créé sur GitHub
- [ ] Code poussé avec `git push`
- [ ] GitHub Pages activé dans Settings
- [ ] Site accessible via l'URL GitHub Pages
- [ ] Partager le lien sur LinkedIn/CV !

## Structure optimisée GitHub

✅ **Fichiers à la racine** :
- `index.html` - Point d'entrée pour GitHub Pages
- `README.md` - Documentation principale
- `.gitignore` - Fichiers à ignorer

✅ **Dossiers organisés** :
- `/css` - Styles
- `/js` - Scripts
- `/assets` - Ressources statiques

✅ **Chemins relatifs** :
- Tous les liens fonctionnent depuis la racine
- Compatible avec GitHub Pages

## Maintenance

- Le dossier `src/` original est ignoré par git (.gitignore)
- Les fichiers de développement (.md) sont ignorés
- Seule la structure propre sera versionnée

## Accès direct

Une fois publié, le portfolio sera accessible directement via :
`https://USERNAME.github.io/REPOSITORY`

Pas besoin de naviguer vers un sous-dossier !
# Instructions pour GitHub

## Publication sur GitHub

1. **Créer un nouveau repository sur GitHub**
   - Nom suggéré : `portfolio` ou `mathis-kam-portfolio`
   - Publique (pour GitHub Pages)
   - Initialiser sans README (on a déjà le nôtre)

2. **Pousser le code**
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m "Initial commit: Portfolio reorganized for GitHub"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

3. **Activer GitHub Pages**
   - Aller dans Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Le site sera disponible à `https://USERNAME.github.io/REPOSITORY`

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
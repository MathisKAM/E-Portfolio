# 📋 Instructions d'utilisation du Portfolio

## 🚀 Lancer le Portfolio

### Méthode 1 : Avec Live Server (Recommandé)
1. Ouvrez VS Code
2. Cliquez droit sur `src/index.html`
3. Sélectionnez **"Open with Live Server"**
4. Le site s'ouvrira automatiquement dans votre navigateur

### Méthode 2 : Ouverture directe
1. Naviguez vers le dossier `src/`
2. Double-cliquez sur `index.html`
3. Le site s'ouvrira dans votre navigateur par défaut

## 📝 Personnalisation

### Modifier vos informations
Éditez le fichier `src/main.js` :
- **Ligne 7-92** : Traductions FR/EN
- **Ligne 216-245** : Section Contact avec vos vraies informations

### Ajouter votre CV
Placez votre CV dans `src/assets/` et nommez-le `CV_MATHIS_KAM.pdf`
Puis modifiez les liens dans `main.js` :
```javascript
<a href="assets/CV_MATHIS_KAM.pdf" class="button" download>
```

### Changer votre photo
Remplacez `src/assets/images/PHOTO_CV_CLAIR.png` par votre nouvelle photo

### Modifier les logos des cours
Les logos se trouvent dans `src/assets/images/` :
- `Programming.png` - Logo programmation
- `AI.png` - Logo IA
- `Modelisation.png` - Logo modélisation
- `ADA.jpg` - Logo ADA
- `SW.png` - Logo SOLIDWORKS

## 🎨 Personnalisation des couleurs

Dans `src/styles/main.css`, modifiez les dégradés :
```css
/* Changer le dégradé principal */
background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
```

## 🌐 Langues

Le site démarre en **ANGLAIS** par défaut.
Pour changer, modifiez la ligne dans `main.js` :
```javascript
let currentLang = 'en'; // ou 'fr' pour français
```

## 📱 Sections du Portfolio

1. **Welcome** - Accueil avec photo et CV
2. **Engineering Courses** - Formation d'ingénieur (4 blocs)
3. **Technical Highlights** - Compétences techniques (7 technologies)
4. **Mobility** - Mobilité internationale
5. **Sustainability** - Durabilité
6. **Activities** - 5 centres d'intérêt
7. **Projects** - TIPE + Astre Launch
8. **Career & Ambitions** - Parcours et ambitions
9. **Contact** - 4 moyens de contact

## 🔗 Liens importants

- **Email** : mathis.kam@etu.inp-n7.fr
- **Téléphone** : +33 06 03 46 18 73
- **LinkedIn** : [linkedin.com/in/Mathis-Kam](https://www.linkedin.com/in/Mathis-Kam)
- **GitHub** : [github.com/MathisKAM](https://github.com/MathisKAM)

## ⚡ Performances

- ✅ JavaScript Vanilla (pas de framework)
- ✅ Animations CSS optimisées
- ✅ Images optimisées
- ✅ Chargement ultra-rapide
- ✅ 100% responsive

## 🐛 Problèmes courants

### Les images ne s'affichent pas
Vérifiez que tous les fichiers sont dans `src/assets/images/`

### Les animations ne fonctionnent pas
Videz le cache du navigateur (Ctrl + F5)

### Le PDF ne s'ouvre pas
Vérifiez que `TIPE_KAM_Mathis.pdf` est dans `src/assets/`

## 💡 Conseils

- Testez le site sur différents navigateurs
- Vérifiez la version mobile
- Utilisez des images haute qualité mais optimisées
- Gardez les textes concis et impactants

## 📧 Support

Pour toute question : mathis.kam@etu.inp-n7.fr

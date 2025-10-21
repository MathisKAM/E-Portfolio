# 🚀 GUIDE D'UTILISATION RAPIDE

## 📂 Ouvrir le portfolio

### Méthode 1 : Double-clic
1. Aller dans le dossier `src/`
2. Double-cliquer sur `index.html`
3. Le portfolio s'ouvre dans votre navigateur par défaut

### Méthode 2 : Live Server (VS Code)
1. Installer l'extension "Live Server" dans VS Code
2. Clic droit sur `src/index.html`
3. Sélectionner "Open with Live Server"
4. Le portfolio s'ouvre avec rechargement automatique

## 🎯 Navigation

### Sections disponibles
1. **Home** - Présentation et photo
2. **Engineering** - Formation d'ingénieur (4 cours)
3. **Skills** - Compétences techniques (7 technologies)
4. **Mobility** - Mobilité internationale
5. **Sustainability** - Engagement durable
6. **Activities** - 5 centres d'intérêt
7. **Projects** - 2 projets (TIPE, Astre Launch)
8. **Contact** - Informations de contact

### Boutons et interactions
- **EN/FR** : Changer la langue (défaut : Anglais)
- **Download My CV** : Télécharger le CV
- **Email** : Cliquer pour copier automatiquement
- **View PDF** : Ouvrir le PDF TIPE
- **Liens sociaux** : LinkedIn, GitHub

## 🎨 Animations

### Animations automatiques
- ✨ Rotation lumineuse autour du profil (8s)
- 💫 Pulsation du bouton CV (2s)
- 🌀 Rotation du fond d'écran Welcome (20s)

### Animations au scroll
- 📜 Toutes les sections apparaissent progressivement
- ⬆️ Fonctionne en montant ET en descendant la page
- 🎯 Les éléments individuels se révèlent avec délais échelonnés

### Animations au hover
- 🖱️ Logos techniques : rotation 360° + zoom
- 🎯 Cartes : élévation 3D + ombre
- 🔗 Liens navigation : soulignement animé
- 📧 Icônes contact : rotation

## 📱 Responsive

Le portfolio s'adapte automatiquement à :
- 💻 **Desktop** : Layout 2 colonnes, grandes images
- 📱 **Tablette** : Layout adapté, tailles moyennes
- 📞 **Mobile** : Layout 1 colonne, optimisé tactile

## 🛠️ Modification du contenu

### Changer les textes
Éditer `src/main.js` :
- Lignes 1-200 : Objet `translations` avec tous les textes FR/EN

### Changer les couleurs
Éditer `src/styles/main.css` :
- Lignes 8-17 : Variables CSS (`:root`)

### Ajouter des images
Placer les fichiers dans :
- `src/assets/images/profile/` : Photo de profil
- `src/assets/images/logos/` : Logos des cours/technologies
- `src/assets/documents/` : CV et PDF

## 🔧 Personnalisation rapide

### Changer la langue par défaut
`src/main.js` ligne 173 :
```javascript
let currentLang = 'en';  // Changer en 'fr' pour français
```

### Modifier les animations
`src/styles/main.css` :
- Chercher `@keyframes` pour les animations
- Ajuster les durées (`8s`, `2s`, etc.)
- Modifier les délais (`animation-delay`)

### Ajouter une section
1. Créer une fonction dans `main.js`
2. L'ajouter dans `render()` ligne 330+
3. Styliser dans `main.css`

## 📊 Structure des fichiers

```
src/
├── index.html          ← Point d'entrée
├── main.js             ← Logique et composants
├── styles/
│   ├── main.css        ← Tous les styles
│   └── animations.css  ← Animations additionnelles
└── assets/
    ├── documents/      ← PDF et CV
    ├── images/
    │   ├── profile/    ← PHOTO_CV_CLAIR.png
    │   └── logos/      ← Logos des cours
    └── fonts/          ← Polices (optionnel)
```

## 🎯 Checklist avant publication

- [ ] Vérifier que tous les liens fonctionnent
- [ ] Tester le téléchargement du CV
- [ ] Vérifier l'ouverture du PDF TIPE
- [ ] Tester sur mobile/tablette/desktop
- [ ] Vérifier les deux langues (EN/FR)
- [ ] Tester le clic-copie de l'email
- [ ] Vérifier que toutes les animations fonctionnent

## 🐛 Problèmes courants

### Les images ne s'affichent pas
→ Vérifier les chemins dans `assets/images/`

### Les animations ne fonctionnent pas
→ Vérifier que main.css est chargé dans index.html

### Le PDF ne s'ouvre pas
→ Vérifier que le fichier est dans `assets/documents/`

### La langue ne change pas
→ Vérifier la console du navigateur (F12)

## 💡 Conseils

- **Performance** : Les animations utilisent `transform` et `opacity` (GPU-accelerated)
- **Compatibilité** : Testé sur Chrome, Firefox, Safari, Edge
- **SEO** : Ajouter des balises meta dans `index.html` si nécessaire
- **Accessibilité** : Les animations respectent `prefers-reduced-motion`

---

**Support** : mathis.kam@etu.inp-n7.fr

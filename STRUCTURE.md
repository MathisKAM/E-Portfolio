# 📁 Architecture de mon Portfolio

Organisation des fichiers de mon portfolio personnel.

## 🎯 Fichiers principaux

- **`index.html`** - Page d'accueil (à la racine pour GitHub Pages)
- **`js/main.js`** - Toute la logique du portfolio (components, i18n, etc.)
- **`css/main.css`** - Styles principaux et responsive design

## 📂 Structure complète

```
portfolio-website/
├── index.html              # Point d'entrée du site
├── css/                    # Toutes les feuilles de style
│   ├── main.css           # Styles principaux + responsive
│   ├── animations.css     # Animations CSS (AOS, transitions)
│   └── modern-effects.css # Effets 3D et modernes
├── js/                     # Scripts JavaScript
│   ├── main.js           # Script principal (tout en un)
│   ├── modern-effects.js # Effets visuels interactifs
│   ├── animations.js     # Animations supplémentaires  
│   └── i18n.js          # Gestion français/anglais
├── assets/               # Ressources statiques
│   ├── images/          # Photos, logos, icônes
│   │   ├── profile/     # Ma photo de profil
│   │   └── logos/       # Logos des technologies
│   ├── documents/       # CV PDF et autres docs
│   └── fonts/          # Polices custom (si besoin)
└── README.md           # Documentation du projet
```

## 🔗 Dépendances externes

- **AOS** (Animate On Scroll) - Via CDN
- **FontAwesome** - Icônes via CDN  
- **Google Fonts** - Inter & Poppins
- Pas de build process - tout en vanilla JS/CSS

## 💡 Philosophie du code

- **Simplicité** - Pas de framework, code vanilla facile à maintenir
- **Performance** - Chargement rapide, optimisé pour tous les appareils  
- **Accessibilité** - Navigation au clavier, contrastes respectés
- **SEO-friendly** - Structure HTML sémantique

## 🎨 Choix techniques

- **CSS Grid/Flexbox** pour le layout responsive
- **CSS Custom Properties** pour la cohérence des couleurs
- **JavaScript ES6+** pour la modernité du code
- **Progressive Enhancement** - fonctionne même sans JS

## Chemins importants

Tous les chemins sont relatifs à la racine du projet :
- Images : `assets/images/filename.ext`
- Documents : `assets/documents/filename.pdf`
- CSS : `css/filename.css`
- JS : `js/filename.js`

## Déploiement GitHub Pages

Le fichier `index.html` est à la racine, donc le site sera automatiquement accessible via GitHub Pages à l'adresse :
`https://username.github.io/repository-name/`
# Portfolio de Mathis KAM

Bienvenue sur mon portfolio personnel ! Je suis étudiant ingénieur en sciences du numérique à l'ENSEEIHT (Toulouse), passionné par le développement web et les nouvelles technologies.

## 🚀 Démo en ligne

[Voir mon portfolio](https://mathiskam.github.io/E-Portfolio)

## 📖 À propos

Ce portfolio présente mon parcours, mes projets et mes compétences techniques. Il a été développé en HTML5, CSS3 et JavaScript vanilla pour une performance optimale.

## 🛠️ Technologies utilisées

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Animations**: AOS (Animate On Scroll), CSS transforms
- **Design**: Interface moderne et responsive
- **Déploiement**: GitHub Pages

## 📁 Structure du projet



```
portfolio-website/
├── index.html              # Page principale du portfolio
├── css/                    # Feuilles de style
│   ├── main.css           # Styles principaux
│   ├── animations.css     # Animations CSS
│   └── modern-effects.css # Effets visuels modernes
├── js/                     # Scripts JavaScript
│   ├── main.js            # Script principal du portfolio
│   ├── modern-effects.js  # Effets visuels interactifs
│   ├── animations.js      # Animations supplémentaires
│   └── i18n.js           # Gestion multilingue (FR/EN)
├── assets/                 # Ressources statiques
│   ├── images/           # Images et photos

│   ├── documents/        # CV et documents PDF
│   └── fonts/           # Polices personnalisées
└── README.md             # Ce fichier
```

## � Installation et utilisation

### Méthode simple
1. Téléchargez ou clonez ce repository
2. Ouvrez `index.html` dans votre navigateur
3. C'est tout ! Le portfolio est entièrement statique

### Avec un serveur local (recommandé)
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js
npx http-server

# Avec PHP
php -S localhost:8000

```

Puis ouvrir [http://localhost:8000](http://localhost:8000) dans votre navigateur.

## ✨ Fonctionnalités

- **Design responsive** - Adapté à tous les écrans (mobile, tablette, desktop)
- **Interface bilingue** - Français et anglais avec switch fluide
- **Animations modernes** - Effets visuels avec AOS et CSS transforms
- **Navigation intuitive** - Menu fixe avec ancres fluides
- **CV téléchargeable** - Accès direct en PDF
- **Projets interactifs** - Portfolio de réalisations
- **Performance optimisée** - Code vanilla, chargement rapide

## 🎯 Sections

1. **Accueil** - Présentation personnelle avec photo
2. **Formation** - Cursus ingénieur ENSEEIHT  
3. **Compétences** - Technologies et outils maîtrisés
4. **Mobilité** - Expériences internationales
5. **Engagement** - Projets durables et responsables
6. **Activités** - Centres d'intérêt personnels
7. **Projets** - Réalisations techniques
8. **Contact** - Coordonnées et réseaux

## 🛠️ Stack technique

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Animations**: AOS Library, CSS transforms
- **Icons**: FontAwesome
- **Fonts**: Google Fonts (Inter, Poppins)
- **Hosting**: GitHub Pages

## 📱 Compatibilité

✅ Tous navigateurs modernes (Chrome, Firefox, Safari, Edge)
✅ Appareils mobiles et tablettes
✅ Responsive design adaptatif



## 🎨 Personnalisation

### Modifier les couleurs
Les variables CSS principales se trouvent dans `css/main.css` :

```css
:root {
    --primary-color: #007acc;
    --secondary-color: #333;
    --background-color: #f8f9fa;
}
```

### Ajouter du contenu
Le contenu est géré dans `js/main.js` via l'objet `translations` :

```javascript
const translations = {
    fr: { /* contenu français */ },
    en: { /* contenu anglais */ }
};
```

## 📄 Licence

Ce projet est open source. Libre à vous de vous en inspirer !

## 👤 Contact

**Mathis KAM** - Étudiant ingénieur ENSEEIHT
- 📧 mathis.kam@etu.inp-n7.fr
- 📱 +33 06 03 46 18 73  
- 💼 [LinkedIn](https://linkedin.com/in/Mathis-Kam)
- 💻 [GitHub](https://github.com/MathisKAM)

---

*Développé avec ❤️ à Toulouse*

3. **Lancer le serveur de développement**
   ```bash
   npm start
   ```
   Le site sera accessible sur `http://localhost:8080`

4. **Alternative: Ouverture directe**
   Vous pouvez aussi ouvrir directement `src/index.html` dans votre navigateur

## 🎨 Personnalisation

### Modifier les informations personnelles
Éditez le fichier `src/main.js` pour changer:
- Vos informations de contact
- Vos projets
- Vos compétences
- Les traductions FR/EN

### Ajouter votre photo
Remplacez la div avec initiales dans la fonction `Welcome()` par:
```javascript
<img src="assets/images/profile/votre-photo.jpg" alt="..." class="profile-image" />
```

### Ajouter votre CV
Placez votre CV dans `src/assets/documents/cv.pdf`

## 🛠️ Technologies Utilisées

- **HTML5** - Structure
- **CSS3** - Styles et animations
- **JavaScript (ES6+)** - Logique et interactions
- **Live-server** - Serveur de développement

## 📱 Responsive Design

Le site est optimisé pour tous les appareils:
- 📱 Mobile (< 768px)
- 💻 Tablette (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## ✨ Fonctionnalités Techniques

- ✅ JavaScript Vanilla (pas de framework)
- ✅ Navigation fluide avec smooth scroll
- ✅ Changement de langue dynamique (FR/EN)
- ✅ Animations CSS optimisées
- ✅ Design moderne avec dégradés
- ✅ Code modulaire et maintenable

## 📝 Licence

MIT License - Vous êtes libre d'utiliser ce code pour votre propre portfolio!
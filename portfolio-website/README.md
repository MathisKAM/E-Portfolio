# 🎓 Portfolio Website - MATHIS KAM

Portfolio professionnel ultra-moderne pour MATHIS KAM, futur ingénieur en Sciences du Numérique à l'Institut de Toulouse (ENSEEIHT). Site web conçu avec JavaScript vanilla pour une performance optimale.

## ✨ Fonctionnalités

### 🏠 **Header avec Navigation Complète**
- Nom affiché en grand (MATHIS KAM)
- Navigation vers toutes les sections
- Bouton de langue EN/FR (démarre en anglais)
- Animations au survol sur tous les liens

### 🎯 **Sections du Portfolio**

1. **Welcome** - Accueil avec photo et présentation
   - Photo professionnelle à droite
   - Présentation à gauche avec animation progressive
   - Bouton CV avec animation de pulsation

2. **Engineering Courses** - Formation d'ingénieur
   - 4 blocs : Programming, Mathématiques, Data & IA, Modélisation
   - Logos professionnels pour chaque cours
   - Animations fluides au survol

3. **Technical Highlights** - Compétences techniques
   - Python, ADA, SOLIDWORKS, Git, HTML, CSS, JavaScript
   - Gros logos 3D sans encadrés
   - Rotation 360° au survol

4. **Mobility** - Mobilité internationale
   - Fond sombre avec dégradé
   - Texte élégant

5. **Sustainability** - Durabilité
   - Engagement environnemental
   - Design épuré

6. **Activities** - Centres d'intérêt
   - Musculation, Football, Spatial, IA, Jeux vidéo
   - Logos 3D avec texte à droite
   - Animations slide

7. **Projects** - Projets académiques
   - TIPE avec PDF consultable
   - Astre Launch

8. **Career & Ambitions** - Parcours professionnel
   - CV téléchargeable
   - Ambitions professionnelles

9. **Contact** - Informations de contact
   - Email : mathis.kam@etu.inp-n7.fr (avec bouton copier)
   - Téléphone : +33 06 03 46 18 73
   - LinkedIn : linkedin.com/in/Mathis-Kam
   - GitHub : github.com/MathisKAM

## 🎨 Design

- **Couleurs** : Bleu foncé, noir, gris, blanc (pas de violet)
- **Polices** : Inter & Poppins (modernes et lisibles)
- **Animations** : Fade-in, translation, hover, rebond, apparition progressive
- **Responsive** : Adapté à tous les écrans
- **3D** : Effets de profondeur sur les logos

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```
3. Install dependencies:
   ```
### Prérequis
- Node.js (pour le serveur de développement)
- Un navigateur web moderne

### Étapes

1. **Cloner le repository**
   ```bash
   git clone <url-du-repo>
   cd portfolio-website
   ```

2. **Installer les dépendances** (optionnel pour live-server)
   ```bash
   npm install
   ```

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
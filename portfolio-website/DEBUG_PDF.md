# 🔧 DEBUG - Problème d'ouverture du PDF TIPE

## Date : 18 octobre 2025

---

## ✅ Modifications appliquées

### 1. **Changement du bouton en lien `<a>`**
- Au lieu d'un `<button>` avec `onclick`
- Maintenant un `<a href>` avec classe `.pdf-link`
- Plus fiable dans le contexte JavaScript dynamique

### 2. **Ajout d'un gestionnaire d'événements explicite**
```javascript
// Dans render() - ligne ~418
const pdfLinks = document.querySelectorAll('.pdf-link');
pdfLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pdfUrl = link.getAttribute('href');
        console.log('Opening PDF:', pdfUrl);
        window.open(pdfUrl, '_blank');
    });
});
```

### 3. **Chemin du PDF**
- Utilisé : `assets/TIPE_KAM_Mathis.pdf`
- Emplacement réel : `src/assets/TIPE_KAM_Mathis.pdf`
- ✅ Chemin relatif correct depuis `src/index.html`

---

## 🧪 Comment tester

### Dans le navigateur :

1. **Ouvrir index.html**
2. **Appuyer sur F12** pour ouvrir la console développeur
3. **Scroller jusqu'à la section Projets**
4. **Cliquer sur "View PDF" / "Voir le PDF"**
5. **Vérifier dans la console :**
   - Vous devriez voir : `Opening PDF: assets/TIPE_KAM_Mathis.pdf`
   - Si vous voyez ce message → Le gestionnaire fonctionne
   - Si pas de message → Le gestionnaire ne s'exécute pas

### Si le message apparaît mais le PDF ne s'ouvre pas :

**Cause possible** : Blocage par le navigateur (popup blocker)

**Solution** :
- Autoriser les popups pour ce site
- Ou cliquer avec **Ctrl + Clic** (ouvre dans nouvel onglet)
- Ou **Clic droit → Ouvrir dans un nouvel onglet**

### Si aucun message n'apparaît :

**Cause possible** : Le lien n'a pas la classe `.pdf-link`

**Solution** : Vérifier dans l'inspecteur (F12) :
1. Aller dans l'onglet **Elements**
2. Trouver le bouton TIPE
3. Vérifier qu'il a : `class="project-button pdf-link"`

---

## 🔍 Vérifications faites

✅ Le fichier `TIPE_KAM_Mathis.pdf` existe dans `src/assets/`
✅ Le chemin relatif `assets/TIPE_KAM_Mathis.pdf` est correct
✅ La page de test `test-pdf.html` fonctionne
✅ Le code JavaScript génère correctement le HTML
✅ Le gestionnaire d'événements est ajouté après le rendu

---

## 🎯 Solutions de secours

### Solution 1 : Lien direct sans JavaScript

Si le gestionnaire JavaScript ne fonctionne toujours pas, on peut retirer le `e.preventDefault()` :

```javascript
// Modifier dans main.js
const pdfLinks = document.querySelectorAll('.pdf-link');
pdfLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Ne pas empêcher le comportement par défaut
        const pdfUrl = link.getAttribute('href');
        console.log('Opening PDF:', pdfUrl);
        // Le navigateur ouvrira le lien normalement
    });
});
```

### Solution 2 : Ouvrir dans la même page

Changer `target="_blank"` en retirant cet attribut :
```javascript
`<a href="assets/${project.pdf}" class="project-button pdf-link">${project.button}</a>`
```

### Solution 3 : Utiliser un serveur local

Les fichiers locaux ont parfois des restrictions. Utiliser **Live Server** dans VS Code :
1. Installer l'extension "Live Server"
2. Clic droit sur `index.html`
3. "Open with Live Server"
4. Le portfolio s'ouvrira sur `http://localhost:5500`

---

## 📝 Test maintenant

1. **Ouvrez index.html** (déjà ouvert)
2. **Ouvrez la console** (F12)
3. **Cliquez sur "View PDF"**
4. **Regardez la console** : y a-t-il le message "Opening PDF: ..." ?

**Si OUI** → Le problème vient du navigateur (popup blocker ou restrictions locales)
**Si NON** → Le gestionnaire ne s'exécute pas (problème de sélecteur)

---

**Dites-moi ce que vous voyez dans la console !** 🔍

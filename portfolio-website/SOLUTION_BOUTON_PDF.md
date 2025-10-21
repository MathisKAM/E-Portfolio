# ✅ SOLUTION - Bouton PDF TIPE non cliquable

## Date : 18 octobre 2025

---

## 🔍 Problème identifié

**Symptôme** : Le bouton "View PDF" / "Voir le PDF" n'était pas cliquable, comme s'il était une image.

**Cause** : Le pseudo-élément `::before` du `.project-block` se superposait au contenu et bloquait les clics.

```css
/* ❌ Avant - Le ::before bloquait les clics */
.project-block::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Pas de z-index → Se superpose au contenu */
}
```

---

## ✅ Solution appliquée

### 1. **Ajout de `z-index` et `pointer-events: none` au `::before`**

```css
.project-block::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.05), rgba(53, 122, 189, 0.05));
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 0;              /* ← Derrière le contenu */
    pointer-events: none;    /* ← N'intercepte pas les clics */
}
```

### 2. **Ajout de `z-index` au contenu du projet**

```css
.project-block h3 {
    position: relative;
    z-index: 1;  /* ← Au-dessus du ::before */
}

.project-block h4 {
    position: relative;
    z-index: 1;
}

.project-block p {
    position: relative;
    z-index: 1;
}
```

### 3. **Ajout de `z-index` au bouton**

```css
.project-button {
    position: relative;
    z-index: 10;  /* ← Encore plus haut pour garantir la clicabilité */
    cursor: pointer;
}
```

---

## 🎯 Hiérarchie des z-index

```
z-index: 10  → .project-button (bouton cliquable)
z-index: 1   → Contenu (h3, h4, p)
z-index: 0   → ::before (overlay décoratif)
```

---

## ✅ Résultat

- ✅ Le bouton "View PDF" / "Voir le PDF" est maintenant **cliquable**
- ✅ Le curseur change en **pointeur** (`cursor: pointer`)
- ✅ L'effet hover fonctionne (élévation + ombre)
- ✅ Le clic ouvre le PDF dans un nouvel onglet
- ✅ L'overlay décoratif fonctionne toujours au hover

---

## 🧪 Test

1. **Ouvrez le portfolio** (déjà ouvert)
2. **Scrollez jusqu'à "Projects"**
3. **Passez la souris sur le bouton "View PDF"**
   - ✅ Le curseur doit devenir une main (pointeur)
   - ✅ Le bouton doit s'élever légèrement
4. **Cliquez sur le bouton**
   - ✅ Le PDF doit s'ouvrir dans un nouvel onglet

---

## 📝 Fichiers modifiés

- **`src/styles/main.css`** :
  - Ligne ~517 : Ajout `z-index: 0` et `pointer-events: none` au `::before`
  - Ligne ~540-560 : Ajout `position: relative` et `z-index: 1` aux titres et paragraphe
  - Ligne ~570 : Ajout `position: relative` et `z-index: 10` au bouton

---

**Le bouton devrait maintenant être parfaitement cliquable !** 🎉

**Testez et confirmez que ça fonctionne !** 👆

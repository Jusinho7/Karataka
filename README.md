# 🌿 KARATAKA — L'Héritage de la Terre Rouge

> *Un jeu point & click narratif inspiré des Hautes Terres malgaches.*  
> Gérez une ferme, remboursez vos dettes, et transformez un héritage modeste en prospérité.

---

## 📖 À propos du projet

**KARATAKA** est un jeu de simulation narrative en **React** où le joueur incarne **Rakoto**, héritier d'une petite ferme sur les Hautes Terres d'Antananarivo. À travers des mécaniques de **point & click**, de **gestion économique** et de **choix narratifs**, le joueur construit son avenir face aux aléas des saisons, aux dettes bancaires et à la rivalité bienveillante de sa voisine Rasoa.

Ce dépôt contient deux livrables :

| Fichier | Description |
|---|---|
| `KaratakaSite.jsx` | Site vitrine marketing (style AAA game) |
| `Karataka.jsx` | Prototype jouable (Prologue + Scènes 1 & 2) |

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn
- Un projet React existant (Vite ou Create React App)

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/karataka.git
cd karataka

# Installer les dépendances
npm install
```

### Lancer le projet

```bash
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

---

## 🗂️ Structure du projet

```
karataka/
├── src/
│   ├── KaratakaSite.jsx     # Site vitrine (landing page)
│   ├── Karataka.jsx         # Jeu point & click jouable
│   └── main.jsx             # Point d'entrée React
├── public/
│   └── assets/              # Images, sons (à venir)
├── README.md
└── package.json
```

---

## 🎮 Fonctionnalités implémentées

### Site Vitrine (`KaratakaSite.jsx`)

- **Hero cinématique** avec coucher de soleil animé, silhouette de Rakoto, étoiles et particules de poussière
- **Section bande-annonce** avec lecteur vidéo stylisé et effet scanline
- **Section Gameplay** — 6 cartes mécaniques avec glow au hover
- **Personnages interactifs** — switcher Rakoto / Rasoa / Grand-père avec barres de stats
- **Le Monde** — 4 zones cliquables en grille
- **Navbar sticky** qui change au scroll
- **Footer** et bandeau de citations défilantes

### Prototype Jouable (`Karataka.jsx`)

- **Écran titre** animé avec oiseaux en vol et nuages dynamiques
- **Prologue** — zones cliquables (poulailler, sol, horizon) avec dialogues au défilement typographique
- **Scène 1** — exploration de la ferme vide, visite à la banque, prêt de 20 000 Ar
- **Scène 2** — rencontre avec Rasoa, menu d'actions (acheter poules, réparer le poulailler)
- **HUD stats** persistant (Ariary 💰, Poules 🐔, Cultures 🌿)
- **Système de dialogues** — effet machine à écrire, portraits colorés par personnage
- **Transitions** fluides entre scènes

---

## 🌍 Univers & Atmosphère

| Élément | Détail |
|---|---|
| 🗺️ Cadre | Hautes Terres malgaches, inspiré d'Antananarivo |
| 🎨 Palette | Terre rouge · Or · Vert rizière · Nuit violette |
| 🎵 Ambiance | Vent dans les herbes, cloches de zébus, marché lointain |
| 🌄 Décor | Collines rouges, rizières en terrasses, cases en briques |

---

## 👥 Personnages

### Rakoto — Le Protagoniste
Héritier d'une ferme modeste. Déterminé, inexpérimenté mais courageux. Son grand-père lui a légué une terre et une responsabilité immense.

### Rasoa — La Rivale Amicale
Voisine expérimentée. Mentor informel de Rakoto. Ses conseils sont précieux, sa réussite est un miroir.

### Le Grand-père — La Mémoire
Voix du passé. Sa lettre d'héritage pose les fondements moraux du jeu :  
*« La terre est une richesse. Mais seule la sagesse la transforme en prospérité. »*

---

## 🎲 Événements aléatoires (à venir)

- 🌧️ **Pluie abondante** — boost de récolte
- ☀️ **Sécheresse** — perte de cultures
- 🐔 **Maladie animale** — perte de bétail si non traité
- 📈 **Hausse des prix** — opportunité de vente
- 🐛 **Parasites** — intervention rapide nécessaire

---

## 🧭 Roadmap

- [x] Prologue jouable
- [x] Scène 1 — Manque d'argent / Banque
- [x] Scène 2 — La Petite Ferme / Rasoa
- [ ] Scène 3 — Énergie solaire & éolienne
- [ ] Scène 4 — Débloquer l'agriculture
- [ ] Scène 5 — Remboursement de la dette
- [ ] Système de comparaison avec Rasoa
- [ ] Événements aléatoires complets
- [ ] Zébu, chèvres, moutons (zones avancées)
- [ ] Musique & effets sonores
- [ ] Sauvegarde locale

---

## 🛠️ Stack technique

- **React 18** — UI et gestion d'état
- **CSS-in-JS** — styles inline + animations CSS pures
- **Google Fonts** — Cinzel, Cormorant Garamond, Kalam
- Aucune dépendance externe (hors React)

---

## 🤝 Contribuer

Les contributions sont les bienvenues !

1. Forkez le dépôt
2. Créez une branche : `git checkout -b feature/nom-de-la-fonctionnalite`
3. Commitez vos changements : `git commit -m 'feat: description'`
4. Pushez : `git push origin feature/nom-de-la-fonctionnalite`
5. Ouvrez une Pull Request

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

<div align="center">

*Fait avec ❤️ pour célébrer la culture malgache*

**KARATAKA © 2024 — Madagascar**

</div>

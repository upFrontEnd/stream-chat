# Stream Chat

Widget de chat personnalisé pour **Streamlabs / OBS**, compilé depuis SCSS avec Vite + Bun.

---

## Aperçu

![Chat Preview](https://upfrontend.github.io/stream-chat/style.css)

Le widget affiche les messages du chat Twitch avec :
- Nom du viewer sur un dégradé bleu
- Message sur fond blanc avec fondu vers le transparent
- Animation d'entrée (slide depuis la droite) et de sortie automatique

---

## Stack

| Outil | Rôle |
|---|---|
| **Bun** | Package manager & runtime |
| **Vite** | Dev server avec HMR |
| **SCSS** | Préprocesseur CSS avec sourcemaps |
| **GitHub Pages** | Hébergement du `style.css` compilé |

---

## Installation

```bash
bun install
```

---

## Commandes

```bash
bun run dev          # Dev server (ouvre le navigateur automatiquement)
bun run build        # Compile SCSS → style.css (variables Streamlabs injectées)
bun run build:watch  # Compilation en mode watch
```

---

## Intégration Streamlabs

Dans les paramètres du widget **Chat Box** de Streamlabs, collez dans le champ **Custom CSS** :

```css
@import url('https://upfrontend.github.io/stream-chat/style.css');
```

> Chaque `git push` met à jour le style en production automatiquement.

---

## Structure

```
src/styles/
├── main.scss          → entrée Vite (dev, valeurs CSS réelles)
├── streamlabs.scss    → entrée build CLI (tokens Streamlabs)
├── _variables.scss    → variables SCSS + slots Streamlabs
├── _base.scss         → reset & body
└── _chat.scss         → widget chat
```

---

## Variables Streamlabs

Les valeurs configurables depuis le panneau Streamlabs :

| Variable | Rôle |
|---|---|
| `{background_color}` | Couleur de fond du widget |
| `{font_size}` | Taille de la police |
| `{text_color}` | Couleur du texte |
| `{message_hide_delay}` | Délai avant disparition des messages |

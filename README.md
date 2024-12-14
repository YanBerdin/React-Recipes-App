# **Recipes App** 🍴

Recipes App est une application web permettant aux utilisateurs de découvrir et de gérer des recettes culinaires. Construite avec **React**, elle intègre une gestion avancée de l'état via **Redux** et des appels API avec gestion des annulations via **AbortController**.

---

## **Table des matières**

- [**Recipes App** 🍴](#recipes-app-)
  - [**Table des matières**](#table-des-matières)
  - [**Aperçu**](#aperçu)
  - [**Fonctionnalités**](#fonctionnalités)
  - [**Prérequis**](#prérequis)
  - [**Installation**](#installation)
  - [**Démarrage**](#démarrage)
    - [**Mode développement**](#mode-développement)
    - [**Build de production**](#build-de-production)
  - [**Structure du projet**](#structure-du-projet)
    - [**Détail des dossiers**](#détail-des-dossiers)
  - [**Technologies utilisées**](#technologies-utilisées)
    - [**Frontend**](#frontend)
    - [**API et gestion des requêtes**](#api-et-gestion-des-requêtes)
    - [**Styles**](#styles)
  - [**Scripts disponibles**](#scripts-disponibles)
  - [**Améliorations possibles**](#améliorations-possibles)
  - [**Auteur**](#auteur)
  - [**Support**](#support)

---

## **Aperçu**

Recipes App est une application moderne pour explorer des recettes.

- Affichez des recettes avec leurs détails.
- Ajoutez-les aux favoris.  
- Gérez les données utilisateur avec une interface fluide et rapide.  

L’application utilise :

- **React Router** pour la navigation entre les pages.  
- **Redux** pour gérer l'état global.  
- Une intégration avec une API pour récupérer les données des recettes.  

---

## **Fonctionnalités**

- **Afficher les recettes** : Explorez toutes les recettes disponibles.  
- **Gestion des favoris** : Sauvegardez vos recettes préférées.  
- **Navigation intuitive** : Pages dédiées pour l'accueil, les favoris, et les détails des recettes.  
- **Gestion des erreurs** : Redirection vers une page d'erreur pour les routes non valides.  
- **Optimisation API** : Annulation des requêtes inutiles avec `AbortController`.  

---

## **Prérequis**

1. **Node.js** (v16 ou supérieur recommandé).  
2. **Yarn** ou **npm** (gestionnaire de paquets).  
3. Clonez l'API utilisée par l'application :  
   [Express Recipes API](https://github.com/YanBerdin/Express-Recipes-API)  

---

## **Installation**

Clonez ce dépôt, puis installez les dépendances nécessaires :  

```bash
git clone https://github.com/username/recipes-app.git
cd recipes-app
yarn install
```

---

## **Démarrage**

### **Mode développement**

Pour lancer le projet en mode développement :

```bash
yarn start
```

Le serveur sera accessible à l'adresse : `http://localhost:8080`.

### **Build de production**

Pour générer une version optimisée pour la production :

```bash
yarn build
```

Les fichiers seront disponibles dans le dossier `dist/`.

---

## **Structure du projet**

Voici une présentation des principaux dossiers dans le projet :

```bash
src/
├── actions/            # Actions Redux (intention de modifications)
├── api/                # Appels API centralisés (ex: fetchRecipes)
├── assets/             # Ressources statiques (images, icônes, etc.)
├── components/         # Composants React (Menu, Home, Recipe, etc.)
├── hooks/              # Hooks personnalisés (ex: useAuth)
├── reducers/           # Réducteurs Redux (gestion des états)
├── selectors/          # Sélecteurs pour extraire des données du store Redux
├── store/              # Configuration du store Redux
├── styles/             # Fichiers SCSS globaux et spécifiques
└── index.js            # Point d'entrée principal de l'application
```

### **Détail des dossiers**

- **`actions/`** : Contient les fichiers définissant les intentions d'action pour Redux (par ex., `setRecipes`, `saveLoginSuccessful`).  
- **`api/`** : Centralise les appels API et leur gestion.  
- **`assets/`** : Regroupe les ressources comme les images, logos ou fichiers statiques.  
- **`components/`** : Inclut les composants React de l'application (par exemple, `Menu`, `Home`, `Recipe`).  
- **`hooks/`** : Contient les hooks personnalisés pour des comportements réutilisables (exemple : `useAuth` pour gérer la connexion utilisateur).  
- **`reducers/`** : Définit les réducteurs pour Redux, afin de transformer l'état global.  
- **`selectors/`** : Fournit des fonctions pour accéder ou transformer les données du store Redux.  
- **`store/`** : Configure le store Redux (inclut le middleware, les reducers, etc.).  
- **`styles/`** : Fichiers SCSS pour les styles globaux et spécifiques.  
- **`index.js`** : Point d'entrée principal qui connecte l'application au DOM.  

---

## **Technologies utilisées**

### **Frontend**

- **React** : Framework principal.  
- **React Router** : Navigation basée sur des routes.  
- **Redux** : Gestion globale de l'état.  

### **API et gestion des requêtes**

- **Axios** : Pour les requêtes HTTP.  
- **AbortController** : Permet d’annuler les requêtes inutiles.  

### **Styles**

- **SCSS** : Préprocesseur CSS pour des styles organisés et modulaires.  

---

## **Scripts disponibles**

Voici les scripts disponibles dans le fichier `package.json` :

- `yarn start` : Lance le serveur de développement.  
- `yarn build` : Génère les fichiers optimisés pour la production.  
- `yarn lint` : Analyse le code avec ESLint pour détecter les erreurs.  
- `yarn lint:fix` : Corrige automatiquement les erreurs détectées par ESLint.  
- `yarn clean` : Supprime le dossier `dist/`.  
- `yarn clean:all` : Supprime tous les fichiers générés, y compris `node_modules`.  

---

## **Améliorations possibles**

1. **Pagination** : Ajouter une pagination pour les longues listes de recettes.  
2. **Design système** : Intégrer un système de design avec des composants UI réutilisables.  
3. **Optimisation des performances** :  
   - Code splitting pour réduire la taille initiale du bundle.  
   - Ajout de `React.lazy` pour le chargement dynamique des composants.  
4. **Tests** : Intégrer des tests unitaires avec Jest et React Testing Library.  
5. **Accessibilité (a11y)** : Améliorer l'accessibilité pour les utilisateurs avec des besoins spécifiques.  

---

## **Auteur**

👤 **Yan Berdin**

- Website: [@yanberdin.com](<https://www.yanberdin.com>)
- Github: [@Yan{GitHub}](https://github.com/YanBerdin)
- LinkedIn: [@Yan{LinkedIn}](https://www.linkedin.com/in/yan-berdin)

---

## **Support**

Give a ⭐️ if this project helped you!

---

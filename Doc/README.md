# Welcome to Recipes 🍽️

> Recipes is a website project dedicated to culinary recipes. Powered by Express for the API, React and SCSS for the front-end to offer a user-friendly experience and connection management with JWT token and axios interceptors.

---
⚛️ React Modele

Bienvenue dans ce modèle/template de projet React !

- Première utilisation
- Comment démarrer un projet ?
- Build du projet
- Utilitaires
- Dépendances
- Scripts

---

## Prérequis

- Assurez-vous que Node.js et Yarn sont installés sur votre système.
- Clone, installation et démarrage de [l’API Recipes]( <https://github.com/YanBerdin/Express-Recipes-API>)
- Documentation sur <http://localhost:3001>

## Install

- installe les dépendances du projet

```sh
yarn install
```

## Usage

- lance le serveur de developpement

```sh
yarn run start
```

- rdv sur <http://localhost:8080/>

Build du projet

---

Le mode d'utilisation par défaut consiste à lancer un serveur de dev avec `yarn start`, mais alors tout est géré en mémoire : on ne voit jamais le résultat concret du travail de Webpack.

Webpack peut toutefois produire une version concrète du projet dans un dossier `dist/` avec la commande `yarn build`.

`build` permet de construire le projet pour la **production** (version prête pour hébergement).

- Assemblage des fichiers
- Copie de fichiers
- Nettoyage du code
- Minification du code
- ...

```sh
# dans le dossier du projet
cd mon-projet

# build de production : les fichiers sont rassemblés *et optimisés*
yarn build
```

---

Utilitaires

---

## Extensions VScode

### **EditorConfig**

Permet d'adapter l'indentation de l'éditeur grace à un fichier `.editorconfig`

`ext install EditorConfig.EditorConfig`

### **ESLint**

Linter pour le JavaScript

`ext install dbaeumer.vscode-eslint`

### Babel JavaScript

Coloration syntaxique améliorée pour ES6+

`ext install mgmcdermott.vscode-language-babel`

### **VScode Duplicate**

Permet de dupliquer un fichier / dossier

`ext install mrmlnc.vscode-duplicate`

### Extension Navigateur React Dev Tools
  
- [pour Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Extension Navigateur Redux Dev Tools

> <https://github.com/reduxjs/redux-devtools>

- [pour Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

---

Principaux Outils

---

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)
- [React](https://reactjs.org/)

### Webpack

_Task Runner_, _Builder_ ou _Bundler_ ie. automatisation de tâches : transpilation JS par Babel, conversion Sass -> CSS, optimisation du build, etc.

- [`webpack`](https://github.com/webpack/webpack) - Packageur de modules et ressources.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Interface en ligne de commande pour Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Serveur de développement pour Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Outil de fusion de fichiers de configuration.
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration.
- Loaders :
  - [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile les fichiers avec Babel depuis Webpack.
  - [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Charge et transforme le SCSS en CSS.
    - [`sass`](https://github.com/sass/dart-sass) - Préprocesseur Sass (implémentation avec Dart).
  - [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Transforme le CSS avec PostCSS.
    - [`cssnano`](https://github.com/cssnano/cssnano) - Optimise et compresse PostCSS.
    - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Comportements pour PostCSS.
  - [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Résout et importe le CSS dans le JS.
  - [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Injecte le CSS dans le DOM.
  - [`eslint-loader`](https://webpack.js.org/loaders/eslint-loader/) - Utilisation de ESLint avec Webpack.
  - [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copie de fichiers utilisés dans le JS.
- Plugins :
  - [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Supprime/nettoie le dossier de build.
  - [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copie des fichiers vers le dossier de build.
  - [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Génère un fichier HTML à partir d'un template.
  - [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extrait le CSS dans des fichiers séparés.
  - [`css-minimizer-webpack-plugin`](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) - Optimise et minimise les ressources CSS.
  - [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minimise le Javascript.
  - [`bundle-stats`](https://github.com/relative-ci/bundle-stats) - Analyse du build.

### Babel

Transpilation ES6/JSX -> ES5.

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ vers une version JavaScript compatible partout.
- Presets :
  - [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - "Vocabulaire" ou règles de syntaxe pour Babel et l'ES6+.
  - [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - "Vocabulaire" ou règles de syntaxe pour Babel et le JSX (React).
- Plugins :
  - [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Rend possible les propriétés de classe.
  - [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread) - Rend possible le déversement d'objets.

### ESLint

- [`eslint`](https://github.com/eslint/eslint) - ESLint, linter / analyseur de code JS.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Analyse le code Babel.
- [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Configuration Airbnb pour ESLint.
- Plugins :
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Analyse les imports de fichiers.
    - [`eslint-import-resolver-alias`](https://github.com/johvin/eslint-import-resolver-alias) - Permet de définir des alias pour les dossiers.
  - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) - Analyse le code React.
  - [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Analyse les hooks de React.
  - [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Analyse l'accessibilité du JSX.

### React

- [`react`](https://github.com/facebook/react) - React.
  - [`react-dom`](https://github.com/facebook/react/tree/master/packages/react-dom) - Permet d'injecter des composants React dans le DOM.
- [`prop-types`](https://github.com/facebook/prop-types) - Validation de props au sein du JSX.

---

Scripts

---

```sh
# Avec yarn
yarn {script}

# Avec npm
npm run {script}
```

- `start`: Lance le serveur de développement.
- `build`: Lance la construction de la version de production.
- `lint`: Affiche les erreurs dans le code.
- `lint:fix`: Tente de corriger certaines des erreurs dans le code.
- `clean`: Supprime le dossier `dist/`.
- `clean:all`: Supprime `dist/`, `node_modules/` et les fichiers `lock`.

---

---

## Installer node

<details>
  <summary>Linux</summary>

**Ubuntu :**

```bash
sudo apt install nodejs
```

**Pour les autres distributions**, vérifier <https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions>

Ou <https://nodejs.org/en/download/package-manager/>

**Alternative via NVM**  
NVM est un outil permettant de gérer plusieurs installations de plusieurs versions de node

- [Installer NVM](https://github.com/nvm-sh/nvm#installing-and-updating)

- [Utiliser NVM](https://github.com/nvm-sh/nvm#usage)

</details>

<details>
  <summary>MacOS</summary>

- A télécharger directement sur <https://nodejs.org/en/>

Ou

- [Installer homebrew](https://brew.sh/)
- Puis node avec la commande `brew install node`

</details>

<details>
  <summary>Windows</summary>

- A télécharger directement sur <https://nodejs.org/en/>

Ou

- [Installer chocolatey](https://chocolatey.org/)
- Puis node avec la commande `choco install nodejs`

</details>

## Mettre à jour node

<details>
  <summary>Linux</summary>

## **Méthode via npm**

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

### **Si vous utilisez NVM**

- [Référez vous à l'utilisation de nvm](<https://github.com/nvm-sh/nvm#usage>)

</details>

<details>
  <summary>MacOS</summary>

- A télécharger directement sur <https://nodejs.org/en/>

</details>

<details>
  <summary>Windows</summary>

- A télécharger directement sur <https://nodejs.org/en/>

Ou

- Si vous utilisez [chocolatey](https://chocolatey.org/) `choco upgrade nodejs`

</details>

## Installer yarn

Suivre <https://classic.yarnpkg.com/en/docs/install/> en fonction de votre OS

---

!['résultat'](./resultat.png)

## Author

👤 **Yan**

- Github: [@YanBerdin](https://github.com/YanBerdin)
- LinkedIn: [@yan-berdin](https://linkedin.com/in/yan-berdin)

## Show your support

Give a ⭐️ if this project helped you!

---

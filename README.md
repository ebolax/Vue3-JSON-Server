# Vue 3 + TypeScript + ESBuild + Bootstrap 5 + LiveReload & JSON-Server with Express.js Template

This repo contains a template to create a front-end application using Vue 3 + TypeScript with ESBuild bundler and Bootstrap 5 Framework. Also have serverside features like Express.js and JSON-Server API support. And all of them have Livereaload feature!

## Before you need

- git (on windows, [git for windows](https://git-scm.com/download/win) is recommended)
- node.js: available for all major platforms [here](https://nodejs.org/en/download/) (the LTS version is recommended)

A good code editor is also recommended and this repo is designed around [Visual Studio Code](https://code.visualstudio.com/)

I'm using ESLint for VS Code. If you don't want use ESLint rules, just delete `.eslintrc.json`. You can change rules whatever you want. If you want use, you must add lines below to VS Code `settings.json`

```
"eslint.validate": [
    "javascript",
    "typescript"
]
```

## **Installation**

Note that if you have cloned this template repo via GitHub, then you'll need to change the URLs below to match _your_ repo's name:

```bash
git clone https://github.com/ebolax/vue3-json-server
cd vue3-json-server
npm install

# or
npx degit "ebolax/vue3-json-server" myapp
cd myapp
npm install
```

## **Build and Run**

The `./dist/www/index.html` file contains a `<script src="index.js">` tag, which means we need to create `dist/www/index.js`. The npm command `npm run build` tells ESBuild to create this bundle, starting with `./src/main.ts` and including all its dependencies. This script build `dist/server.mjs` (not bundled) also.

    npm run dev

Builds the application to `dist/index.js` file and serve `./dist/index.html` file on `http://localhost:8000`

Watch ./src and ./dist folders to serve the files locally for changes and live reload browser (you need livereload plugin for your browser).

    npm run build

Builds the application and minify to `dist/www/index.js` and You must do it before you publish your web application.

    npm run serve

Serve your project on 8000 port.

## JSON-Server

You can run your json-server api on `http://localhost:8000/api`. To look json-server settings please click [here](https://github.com/typicode/json-server)
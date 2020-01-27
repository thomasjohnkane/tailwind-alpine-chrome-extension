# Alpine/Tailwind Chrome Extension Boilerplate
[WIP] This is a starting place for building a web extension with Tailwindcss & Alpinejs

---

## Goals
- Create a starting point for building web extensions
- Use alpine.js and tailwind.css
- Be cross browser (chrome, firefox, safari)
- Full DX path integrated
    - Readme to set it up
    - Watch script
    - Env based config files
    - Hot reloading (https://github.com/rubenspgcavalcante/webpack-extension-reloader)
    - deploy script (create zip for submitting to store)
    - Deploy instructions (per browser)

## Folder Structure
-src
    - icons
        - icon-128.png
        - icon-64.png
        - icon-38.png
        - icon-19.png
        - icon-16.png
    - options
        - options.js
        - options.html
        - options.css
    - popup
        - routes
            - index.js
            - pages
        - popup.js
        - popup.html
        - popup.css
    - content
        - content.js
        - content.css
    - manifest.js
    - background.js
    - tailwind.css
    - tailwind.dist.css
    - alpine.js
    - alpine.dist.js
- config
    - development.json
    - production.json
- webpack.config.js
- package.json
- .gitignore
- README.md

## Steps
[X] Create folder structure
[X] Add webpack
[X] Make hello world work in dev
[X] Add Tailwindcss
[X] Add Alpinejs
[X] Add package.json build scripts
[X] Add hot reloading
[] Handle sub views and routes for popup
[] do basic example of content.js
[] add basic example of background
[] update readme with instructions, etc
[] push to github


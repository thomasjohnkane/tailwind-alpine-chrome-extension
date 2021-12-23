# Tailwind3/Alpine3 Web Extension Boilerplate
This is a starting place for building a Web Extension with Tailwindcss & Alpinejs

| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1604" alt="Hello World Popup" src="https://user-images.githubusercontent.com/8945177/73615774-972c5300-45d0-11ea-8889-0e813ff172c2.png">  *Basic Popup with Tailwind* |  <img width="1604" alt="Alpine Button Clicked" src="https://user-images.githubusercontent.com/8945177/73615775-972c5300-45d0-11ea-8f29-5a7626767f0f.png"> *Alpine `@click` Works!* |<img width="1604" alt="Hello World Options" src="https://user-images.githubusercontent.com/8945177/73615776-97c4e980-45d0-11ea-836f-b5819a7aa410.png"> *Basic Options*|

## Installation
### Setup local project
* `git clone git@github.com:thomasjohnkane/tailwind-alpine-chrome-extension.git`
* `npm i && npm run dev`

### Install on Chrome
* Navigate to `chrome://extensions` in Chrome;
* Enable the **Developer mode**
* Click on **Load unpacked extension** (upper left nav)
* Upload the entire `extension` folder

## Why use this?
* It automatically puts [tailwindcss.com](https://tailwindcss.com/) into your project
* It automatically puts [alpinejs](https://github.com/alpinejs/alpine) into your project
* Hot reload (watches files and updates chrome)
* Cross browser support (Chrome & Firefox, Safari/Edge TBD)
* Provides basic `popup.html` & `options.html` (embeded in settings page)

## Goals of project
- Create a starting point for building web extensions
- Use alpine.js and tailwind.css
- Be cross browser (chrome, firefox, safari, edge?)
- Full DX path integrated
    - Readme to set it up
    - Watch script
    - Env based config files
    - Hot reloading (https://github.com/rubenspgcavalcante/webpack-extension-reloader)
    - deploy script (create zip for submitting to store)
    - Deploy instructions (per browser)

## Roadmap
- [X] Create folder structure
- [X] Add webpack
- [X] Make hello world work in dev
- [X] Add Tailwindcss
- [X] Add Alpinejs
- [X] Add package.json build scripts
- [X] Add hot reloading
- [X] Add basic options.html page
- [ ] Handle sub views and routes for popup
- [ ] Add basic example of content.js
- [ ] Add basic example of background.js
- [X] Update readme with instructions, etc
- [X] Push to github
- [ ] Add build-zip script for deployment
- [ ] Tag release v1.0

## Credit
* Thanks to Caleb Porzio for Alpinejs
* Thanks to Adam Watham for Tailwindcss
* Thanks to @rubenspgcavalcante for Webpack Extension Reload plugin
* Thanks to @Kocal, @EmailThis, and @williankeller for inspiration

## Security

If you discover any security related issues, please email instead of using the issue tracker.

## Contributing

1. Fork it (<https://github.com/thomasjohnkane/tailwind-alpine-chrome-extension/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


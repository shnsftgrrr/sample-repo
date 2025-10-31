# Men Skincare Landing Page  
A lightweight front-end setup built with **Pug**, **SCSS**, **Foundation**, and **BrowserSync** for live-reload development.  
This project demonstrates a responsive landing page structure using a modular SCSS architecture.

---

## Project Structure
```
project/
├─ dist/
├─ src/
│  ├─ img/              # Image assets
│  ├─ js/               # JavaScript source
│  │   └─ main.js
│  ├─ pug/              # Pug templates
│  │   ├─ includes/     # Header, Footer, layout
│  │   └─ index.pug     # Landing page
│  └─ scss/             # SCSS styles
│      ├─ components/   # Reusable parts (buttons, titles, etc.)
        ├─ helper.scss  # For helper classes
        └─ lp.scss      # Styles for main landing page
│      ├─ elements/     # Global + reset styles
│      ├─ settings/     # Colors, fonts, weights
│      ├─ tools/        # Mixins, media queries, functions
│      └─ style.scss    # Main entry point              # Compiled output (HTML, CSS, JS, IMG)
├─ package.json
├─ package-lock.json
└─ README.md
```

---

## Features
- **Pug** templating for clean and reusable HTML
- **SCSS** with partial **Foundation** integration
- **Flickity** for carousel
- **BrowserSync** for live reload on every save

---

## Commands

### Install Dependencies
```bash
npm install
```

### Build Once (generate `/dist`)
```bash
npm run build
```
This compiles:
- `src/pug` → `dist/*.html`
- `src/scss` → `dist/css/style.css`
- `src/js` → `dist/js/main.js`
- `src/img` → `dist/img/*`

### Development with Live Reload
```bash
npm run dev
```
This watches:
- Pug → recompile on save  
- SCSS → recompile on save  
- Browser auto-reload via BrowserSync

---

## Dependencies
- [foundation-sites](https://get.foundation/sites/docs/)
- [flickity](https://flickity.metafizzy.co/)
- [sass](https://sass-lang.com/)
- [pug-cli](https://www.npmjs.com/package/pug-cli)
- [browser-sync](https://browsersync.io/)
- [concurrently](https://www.npmjs.com/package/concurrently)

---

## Author
Developed by **Sheena Sofia Tegerero**  

[Windi CSS](https://windicss.org/) is a next-generation utility-first CSS framework.

[toc]

## Installation

Create a Vue project and install the packages.

```zsh
pnpm create vite vue-3-demo -- --template vue
cd vue-3-demo
pnpm i -D vite-plugin-windicss windicss
```

- [vite-plugin-windicss](https://www.npmjs.com/package/vite-plugin-windicss)
- [windicss](https://www.npmjs.com/package/windicss)

## Configuration

1. Register the plugin in `vite.config.js`.

```js
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import WindiCSS from "vite-plugin-windicss"

export default defineConfig({
  plugins: [Vue(), WindiCSS()]
})
```

2. Create `windi.config.js` in the root. This is the config file for this site.

<<< @/../windi.config.js

- [`preflight`](https://windicss.org/integrations/vite.html#preflight-style-reseting)`: false` is because I want to use [sanitize.css](https://csstools.github.io/sanitize.css/) for normalization. If you want to follow:

```zsh
pnpm i sanitize.css
```

- [`attributify`](https://windicss.org/integrations/vite.html#attributify-mode)`: true` is to help organize the classes better.
- [`transformCSS`](https://windicss.org/integrations/vite.html#scoped-style)`: "pre"` is to get [scoped style](https://v3.vuejs.org/api/sfc-style.html#style-scoped) work.
- I change the [`fontFamily`](https://windicss.org/utilities/typography.html#font-family) to just `sans` and `mono` with fonts from [Google Fonts](https://fonts.google.com/).
- I also change the [`colors`](https://windicss.org/utilities/colors.html#colors) to use the [Solarized](https://ethanschoonover.com/solarized/) palette.

3. Create `main.css` in `src` for the global style, including the fonts. Here is a snippet:

```css
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&family=Fira+Sans:wght@300;400;500&display=swap");

/* Variables */

html:not(.dark) {
  --background: #fdf6e3;
  --highlights: #eee8d5;
  --primary: #657b83;
  --secondary: #93a1a1;
  --emphasis: #586e75;
}

html.dark {
  --background: #002b36;
  --highlights: #073642;
  --primary: #839496;
  --secondary: #586e75;
  --emphasis: #93a1a1;
}

/* General */

::selection {
  @apply bg-$highlights;
}
```

4. Import everything in `src/main.js`. For sanitize.css' available stylesheets, check the [repo](https://github.com/csstools/sanitize.css#usage).

```js
import { createApp } from "vue"
import App from "./App.vue"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/assets.css"

import "virtual:windi.css"

import "./main.css"

const app = createApp(App)

app.mount("#app")
```

## Usage

Look for the [utilities](https://windicss.org/utilities/) and start putting the classes. You can also look for them in Tailwind's [documentation](https://tailwindcss.com/docs) if you prefer their docs (like me).

Here is an example from this site (`/index.html`).

<<< @/../index.html

- `$` in `bg-` and `text-` tells Windi that `background` and `primary` are CSS variables.
- Windi has several [grid template rows](https://windicss.org/utilities/grid.html#grid-template-rows) classes, but there is not one for the values `auto 1fr auto`. Fortunately, Windi has a feature called [auto-infer](https://windicss.org/features/value-auto-infer.html) so I can just write `grid-rows-[auto,1fr,auto]`.

Another [feature](https://windicss.org/features/) I use often is the `@apply` directive. Here is another code snippet from this website.

```css
.shiki-container {
  @apply border-solid border-$highlights rounded-lg border-4 mb-4 leading-normal py-2 px-4;
}
```

## Tips

This is for [VSCode](https://code.visualstudio.com/) users:

1. Install the [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) extension. <kbd>Ctrl</kbd>+<kbd>P</kbd> and paste this:

```
ext install voorjaar.windicss-intellisense
```

2. Turn on the `sortOnSave` setting.

```json
"windicss.sortOnSave": true
```

Just be careful when you have autosave, it can move your class before you finish writing it.

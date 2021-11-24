[unplugin-icons](https://github.com/antfu/unplugin-icons) is a tool to access icons as components on-demand.

[toc]

## Installation

Create a Vue project and install the packages.

```zsh
pnpm create vite vue-3-demo -- --template vue
cd vue-3-demo
pnpm i -D unplugin-icons unplugin-vue-components
```

- [unplugin-icons](https://www.npmjs.com/package/unplugin-icons)
- [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) <carbon-arrow-right /> optional - I include it for the convenience of components auto import

## Configuration

Register the plugins in `vite.config.js` and pass the [config options](https://github.com/antfu/uiconnplugin-icons#name-conversion) you want.

```js
import { defineConfig } from "vite"
import Components from "unplugin-vue-components/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [
    Vue(),

    Components({
      resolvers: [IconsResolver({ prefix: "" })]
    }),

    Icons({
      autoInstall: true
    })
  ]
})
```

- With `prefix: ""` we do not have to add `i-` before the collection name.
- With `autoInstall: true`, we can browse the [icons](https://icon-sets.iconify.design/) and use it in our project without having to install the icon pack manually.

## Usage

In your `<template>`, add the icon with `{prefix}-{collection}-{icon}`. You can also style it easily with class like any other element. I use [Windi CSS](https://windicss.org/) here.

```html
<carbon-face-cool class="text-yellow text-3xl" />
```
<carbon-face-cool class="text-yellow text-3xl" />

[@vueuse/head](https://github.com/vueuse/head) is a document `<head>` manager for Vue 3.

[toc]

## Installation

Create a Vue project and install the package.

```zsh
pnpm create vite vue-3-demo -- --template vue
cd vue-3-demo
pnpm i @vueuse/head
pnpm i -D unplugin-vue-components
```

- [@vueuse/head](https://www.npmjs.com/package/@vueuse/head)
- [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) <carbon-arrow-right /> optional - I include it for the convenience of components auto import

## Configuration

1. Register the plugin in `src/main.js`.

```js
import { createApp } from "vue"
import { createHead } from "@vueuse/head"
import App from "./App.vue"

const app = createApp(App)
const head = createHead()

app.use(head).mount("#app")
```

2. Register the other plugin in `vite.config.js`.

```js
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"

export default defineConfig({
  plugins: [Vue(), Components()]
})
```

## Usage

1. Create a component in `src/components`, e.g. `TheHead.vue`. Here I set the `<Head>` to use the `title` and `description` passed to this component.

```vue
<template>
  <Head>
    <title>{{ title }}</title>

    <meta name="description" :content="description" />
  </Head>
</template>

<script setup>
import { Head } from "@vueuse/head"

const props = defineProps({
  title: {
    type: String,
    default: ""
  },

  description: {
    type: String,
    default: ""
  }
})
</script>
```

Here is the syntax for other elements, taken from the repo [example](https://github.com/vueuse/head/blob/main/example/Contact.vue).

```vue
<template>
  <Head>
    <html lang="en"></html>

    <body class="body"></body>

    <component is="style">
      body { background: lightgreen; } {{ style }}
    </component>
  </Head>
</template>

<script setup>
import { Head } from "@vueuse/head"

const style = `button { color: red; }`
</script>
```

2. Use the component wherever you need. With `unplugin-vue-components` installed, we do not need to import the component.

```html
<template>
  <TheHead
    title="Yasmin ZY"
    description="Personal website of Yasmin Zulfati Yusrina. I create tutorials about Vue.js." />
</template
```

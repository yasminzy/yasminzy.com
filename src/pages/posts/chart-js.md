[Chart.js](https://www.chartjs.org/) is a simple and flexible JavaScript charting.

[toc]

## Installation

Create a Vue project and install the packages.

- [chart.js](https://www.npmjs.com/package/chart.js)
- [vue-chart-3](https://www.npmjs.com/package/vue-chart-3)
- [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import) <carbon-arrow-right /> optional - I include it for the convenience of APIs auto import

```zsh
pnpm create vite vue-3-chart -- --template vue
cd vue-3-chart
pnpm i chart.js vue-chart-3
pnpm i -D unplugin-auto-import
```

## Configuration

1. Register the optional plugin in `vite.config.js`.

```js
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"

export default defineConfig({
  plugins: [
    Vue(),

    AutoImport({
      imports: ["vue"]
    })
  ]
})
```

2. Create a `.js` file for importing plugins that you want to use across charts, e.g. `Legend`, `Title`, and `Tooltip`. If you will not have multiple charts, you can import and register these plugins and change the defaults in the component directly.

```js
// src/plugins/chart.js

import { Chart, Legend, Title, Tooltip } from "chart.js"

Chart.register(Legend, Title, Tooltip)

Chart.defaults.plugins.title.display = true
```

- The `title` is not displayed by [default](https://www.chartjs.org/docs/latest/configuration/title.html#title-configuration) so I set it to `true` here.

3. Import the file in `src/main.js`.

```js
import { createApp } from "vue"
import App from "./App.vue"

import "./plugins/chart.js"

const app = createApp(App)

app.mount("#app")
```

## Usage

1. Create components for the chart in `src/components`. In this tutorial, I will create 3 types of charts: bar, doughnut, and line. You can choose which to follow along in the steps ahead.

2. Import the [component](https://vue-chart-3.netlify.app/components/#list-of-all-components) then put it in the `<template>`. I name the class `chart-container`. I will pass some `data` and `options` to the [props](https://vue-chart-3.netlify.app/components/#all-components-props) later.

<details>
<summary><code>ChartBar.vue</code></summary>

```vue
<template>
  <BarChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container" />
</template>

<script setup>
import { BarChart } from "vue-chart-3"
</script>
```

</details>

<details>
<summary><code>ChartDoughnut.vue</code></summary>

```vue
<template>
  <DoughnutChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container" />
</template>

<script setup>
import { DoughnutChart } from "vue-chart-3"
</script>
```

</details>

<details>
<summary><code>ChartLine.vue</code></summary>

```vue
<template>
  <LineChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container" />
</template>

<script setup>
import { LineChart } from "vue-chart-3"
</script>
```

</details>

3. Import and register the necessary controllers, elements, scales, and plugins from Chart.js.

<details>
<summary><code>ChartBar.vue</code></summary>

```js
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js"

Chart.register(BarController, CategoryScale, LinearScale, BarElement)
```

</details>

<details>
<summary><code>ChartDoughnut.vue</code></summary>

```js
import { Chart, DoughnutController, ArcElement } from "chart.js"

Chart.register(DoughnutController, ArcElement)
```

</details>

<details>
<summary><code>ChartLine.vue</code></summary>

```js
import {
  Chart,
  LinearScale,
  LineElement,
  LineController,
  CategoryScale,
  PointElement
} from "chart.js"

Chart.register(
  LinearScale,
  LineElement,
  LineController,
  CategoryScale,
  PointElement
)
```

</details>

- How do we know what to import? Good question. We can start with just importing `Chart` and check what is missing from the error in the console. See the docs for all [available imports](https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc).

4. Add data and options to the component. Here is some sample data. The component is ready to be called then.

<details>
<summary><code>ChartBar.vue</code></summary>

```js
const dataValues = ref([
  [1, 3, 5, 7, 2, 4, 6],
  [1, 5, 2, 6, 3, 7, 4]
])

const data = computed(() => ({
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  datasets: [
    {
      label: "Foo",
      data: dataValues.value[0],
      backgroundColor: "#268bd2"
    },
    {
      label: "Bar",
      data: dataValues.value[1],
      backgroundColor: "#2aa198"
    }
  ]
}))

const options = ref({
  plugins: {
    title: {
      text: "Bar"
    }
  }
})
```

</details>

<details>
<summary><code>ChartDoughnut.vue</code></summary>

```js
const dataValues = ref([10, 20, 40])

const data = computed(() => ({
  labels: ["Foo", "Bar", "Baz"],

  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ["#859900", "#d33682", "#cb4b16"]
    }
  ]
}))

const options = ref({
  elements: {
    arc: {
      borderColor: "#073642"
    }
  },

  plugins: {
    title: {
      text: "Doughnut"
    }
  }
})
```

</details>

<details>
<summary><code>ChartLine.vue</code></summary>

```js
const dataValues = ref([12, 14, 16, 18, 11, 13, 15])

const data = computed(() => ({
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  datasets: [
    {
      label: "Foo",
      data: dataValues.value,
      borderColor: "#dc322f"
    }
  ]
}))

const options = ref({
  scales: {
    y: {
      beginAtZero: true
    }
  },

  plugins: {
    title: {
      text: "Line"
    }
  }
})
```

</details>

## Customization

In `src/plugins/chart.js`, change more default values. You can change the [colors](https://www.chartjs.org/docs/latest/general/colors.html#colors), [fonts](https://www.chartjs.org/docs/latest/general/fonts.html#fonts), [layout](https://www.chartjs.org/docs/latest/configuration/layout.html#layout), [legend](https://www.chartjs.org/docs/latest/configuration/legend.html#legend), [title](https://www.chartjs.org/docs/latest/configuration/title.html#title), etc. Here is an example:

```js
import { Chart, Legend, Title, Tooltip } from "chart.js"

Chart.register(Legend, Title, Tooltip)

Chart.defaults.color = "#657b83"
Chart.defaults.borderColor = "rgba(147, 161, 161, 0.25)"
Chart.defaults.font.family = "'Fira Sans', 'sans-serif'"
Chart.defaults.font.size = 16
Chart.defaults.font.lineHeight = 1.5
Chart.defaults.layout.padding = 16
Chart.defaults.plugins.legend.position = "bottom"
Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.padding = 16
```

## Tips

Make your chart more accessible with [Patternomaly](https://github.com/ashiguruma/patternomaly). There are many [patterns](https://github.com/ashiguruma/patternomaly#pattern-keys) available.

1. Install the package.

```zsh
pnpm i patternomaly
```

2. `import pattern from "patternomaly"` in the component and change the plain background color to a patterned one.

```js
// Single color

backgroundColor: "#268bd2", // instead of this
backgroundColor: pattern.draw("dash", "#268bd2"), // use this

// Multiple colors

backgroundColor: ["#859900", "#d33682", "#cb4b16"] // instead of this
backgroundColor: pattern.generate(["#859900", "#d33682", "#cb4b16"]) // use this
```

## Demo

<div class="grid gap-8" lg="grid-cols-2">
  <ChartBar />
  <ChartDoughnut />
  <ChartLine />
</div>

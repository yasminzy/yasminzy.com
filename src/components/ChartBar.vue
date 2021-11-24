<template>
  <BarChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container"
  />
</template>

<script setup>
import pattern from "patternomaly"
import { BarChart } from "vue-chart-3"
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js"

Chart.register(BarController, CategoryScale, LinearScale, BarElement)

const dataValues = ref([
  [1, 3, 5, 7, 2, 4, 6],
  [1, 5, 2, 6, 3, 7, 4]
])

const data = computed(() => ({
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  datasets: [
    {
      backgroundColor: pattern.draw("dash", "#268bd2"),
      data: dataValues.value[0],
      label: "Foo"
    },
    {
      backgroundColor: pattern.draw("dot", "#2aa198"),
      data: dataValues.value[1],
      label: "Bar"
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
</script>

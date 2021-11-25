<template>
  <LineChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container" />
</template>

<script setup>
import { LineChart } from "vue-chart-3"
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
</script>

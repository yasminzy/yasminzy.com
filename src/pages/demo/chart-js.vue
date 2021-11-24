<template>
  <div>
    <TheHead
      title="Chart.js Demo"
      description="Chart.js in a Vue project demo."
    />

    <DemoHeader title="Chart.js" blog="chart-js" />

    <div class="grid gap-8" lg="grid-cols-2">
      <ChartBar />
      <ChartDoughnut />
      <ChartLine />
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style>
.chart-container {
  @apply bg-$highlights rounded-lg;
}
</style>

<template>
  <img :src="img" :alt="img" />
</template>

<script setup>
const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const allImg = import.meta.glob("../assets/img/*.png")

let img = ref("")

onMounted(() => {
  allImg[`../assets/img/${props.slug}.png`]().then((mod) => {
    img.value = mod.default
  })
})
</script>

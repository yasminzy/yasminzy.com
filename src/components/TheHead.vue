<template>
  <Head>
    <title>{{ title || name }}</title>

    <meta name="description" :content="description" />
  </Head>
</template>

<script setup>
import { Head } from "@vueuse/head"
import { titleCase } from "title-case"

// Use current route as title fallback
const name = titleCase(useRoute().name)

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

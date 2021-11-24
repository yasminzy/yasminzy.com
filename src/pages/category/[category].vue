<template>
  <div>
    <TheHead
      :title="titleCase(category).replaceAll('-', ' ')"
      :description="`Posts in category: ${category}`"
    />

    <hr class="mb-8" />

    <h1 class="flex uppercase items-center">
      <carbon-box class="mr-4" />
      {{ category.replaceAll("-", " ") }}
    </h1>

    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { titleCase } from "title-case"
import { useStore } from "~/stores/index.js"

const category = useRoute().params.category
const posts = useStore().getPostsByCategory(category)

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

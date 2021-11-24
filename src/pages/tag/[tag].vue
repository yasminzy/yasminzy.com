<template>
  <div>
    <TheHead
      :title="titleCase(tag).replaceAll('-', ' ')"
      :description="`Posts with tag: ${tag}`"
    />

    <hr class="mb-8" />

    <h1 class="flex uppercase items-center">
      <carbon-tag class="mr-4" />
      {{ tag.replaceAll("-", " ") }}
    </h1>

    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { titleCase } from "title-case"
import { useStore } from "~/stores/index.js"

const tag = useRoute().params.tag
const posts = useStore().getPostsByTag(tag)

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div>
    <TheHead
      title="Yasmin ZY"
      description="Personal website of Yasmin Zulfati Yusrina. I create tutorials about Vue.js." />

    <hr class="mb-8" />

    <h1 class="uppercase">Latest Posts</h1>

    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { useStore } from "~/stores/index.js"

const posts = useStore().getLatestPosts(10)

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

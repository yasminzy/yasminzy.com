<template>
  <header>
    <hr class="mb-8" />

    <h1>{{ title }} Demo</h1>

    <ul class="pl-0">
      <li v-if="blog" class="flex list-none mb-2 items-center">
        <router-link :to="{ name: `posts-${blog}` }">
          <carbon-book class="mr-4" />Read tutorial
        </router-link>
      </li>

      <li v-if="youtube" class="flex list-none mb-2 items-center">
        <a :href="youtube" target="_blank">
          <carbon-video class="mr-4" />Watch tutorial
        </a>
      </li>

      <li v-if="github" class="flex list-none items-center">
        <a :href="github" target="_blank">
          <carbon-code class="mr-4" />See code
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ""
  },

  blog: {
    type: String,
    default: ""
  },

  youtube: {
    type: String,
    default: ""
  },

  github: {
    type: String,
    default: ""
  }
})
</script>

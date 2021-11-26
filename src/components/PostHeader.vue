<template>
  <header class="mb-8">
    <router-link
      :to="`/category/${toSlug(category)}`"
      class="text-$secondary tracking-widest uppercase"
    >{{ category }}</router-link>

    <h1 class="mt-2 mb-0">{{ title }}</h1>

    <small>{{ timeAgo(date) }}</small>

    <BaseImg
      :slug="id"
      class="border-solid border-$highlights rounded-lg mx-auto border-4 my-4 w-full max-w-[80ch] block"
    />

    <ul class="flex pl-0">
      <li v-if="youtube" class="list-none mr-2 -ml-2 p-2">
        <a :href="youtube" target="_blank">
          <carbon-logo-youtube />YouTube
        </a>
      </li>

      <li v-if="github" class="list-none p-2">
        <a :href="github" target="_blank">
          <carbon-logo-github />Github
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup>
import slugify from "slugify"
import BaseImg from "./BaseImg.vue"

function toSlug(string) {
  return slugify(string, { lower: true })
}

function timeAgo(date) {
  return useTimeAgo(date)
}

const props = defineProps({
  category: {
    type: String,
    default: ""
  },

  title: {
    type: String,
    default: ""
  },

  date: {
    type: String,
    default: ""
  },

  id: {
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

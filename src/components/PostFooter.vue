<template>
  <footer class="mt-8">
    <ul class="flex flex-wrap mb-8 pl-0">
      <li
        v-for="(item, index) in tags"
        :key="index"
        class="list-none my-2 mr-2 last:mr-0"
      >
        <router-link
          :to="`/tag/${toSlug(item)}`"
          class="bg-$highlights rounded-lg text-$secondary p-2 hover:rounded-lg-full"
        >{{ item }}</router-link>
      </li>
    </ul>

    <p class="text-right mb-8">
      Check more
      <router-link :to="`/category/${toSlug(category)}`">
        {{ category }}
        <carbon-arrow-right />
      </router-link>
    </p>
  </footer>
</template>

<script setup>
import slugify from "slugify"

function toSlug(string) {
  return slugify(string, { lower: true })
}

const props = defineProps({
  tags: {
    type: Array,
    default() {
      return []
    }
  },

  category: {
    type: String,
    default: ""
  }
})
</script>

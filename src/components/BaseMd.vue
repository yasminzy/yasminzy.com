<template>
  <TheHead
    :title="frontmatter.title || post.title"
    :description="frontmatter.description || post.description" />

  <!-- Template for article -->
  <article
    v-if="$route.path.includes('/posts/')"
    class="mx-auto max-w-[80ch] w-11/12">
    <PostHeader
      :id="post.id"
      :category="post.category"
      :title="post.title"
      :date="post.date" />

    <slot />

    <PostFooter :tags="post.tags" :category="post.category" />
  </article>

  <!-- Template for other page in markdown -->
  <article v-else class="mx-auto w-11/12">
    <hr class="mb-8" />
    <slot />
  </article>
</template>

<script setup>
import { useStore } from "~/stores/index.js"

const id = useRoute().path.replace("/posts/", "")
const post = useStore().getPostById(id)

const props = defineProps({
  frontmatter: {
    type: Object,
    default() {
      return {
        title: {
          type: String,
          default: ""
        },

        description: {
          type: String,
          default: ""
        }
      }
    }
  }
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style>
.toc {
  @apply bg-$highlights border-solid border-$highlights rounded-lg border-4 shadow mb-8;

  & ol {
    @apply flex m-0 pl-0 overflow-auto;

    & li {
      @apply rounded-lg hover:bg-$background;

      & a {
        @apply p-4 block;
      }
    }
  }
}

.shiki-container {
  @apply border-solid border-$highlights rounded-lg border-4 shadow mb-4 leading-normal py-2 px-4;
}
</style>

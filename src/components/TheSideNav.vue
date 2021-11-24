<template>
  <nav id="pages" class="font-mono leading-normal mb-8 max-w-[80ch]">
    <details :open="xl">
      <summary class="font-bold text-xl">
        <vscode-icons-default-root-folder class="pages-closed" />
        <vscode-icons-default-root-folder-opened class="pages-opened" />
        pages
      </summary>

      <ul>
        <li class="list-none mt-4">
          <TheSideNavFolderTitle folder="category" />
          <ul>
            <li class="cursor-not-allowed list-none mt-2">
              <vscode-icons-file-type-vue />
              [category]<span class="text-$secondary">.vue</span>
            </li>
          </ul>
        </li>

        <li class="list-none mt-4">
          <TheSideNavFolderTitle folder="demo" />
          <ul>
            <li v-for="item in demoId" :key="item" class="list-none mt-2">
              <router-link :to="`/demo/${item}`">
                <vscode-icons-file-type-vue />
                {{ item }}<span class="text-$secondary">.vue</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="list-none mt-4">
          <TheSideNavFolderTitle folder="posts" />
          <ul>
            <li v-for="item in postsId" :key="item" class="list-none mt-2">
              <router-link :to="`/posts/${item}`">
                <vscode-icons-file-type-markdown />
                {{ item }}<span class="text-$secondary">.md</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="list-none mt-4">
          <TheSideNavFolderTitle folder="tag" />
          <ul>
            <li class="cursor-not-allowed list-none mt-2">
              <vscode-icons-file-type-vue />
              [tag]<span class="text-$secondary">.vue</span>
            </li>
          </ul>
        </li>

        <li class="cursor-not-allowed list-none mt-4">
          <vscode-icons-file-type-vue />
          [...all]<span class="text-$secondary">.vue</span>
        </li>

        <TheSideNavTopLevelFile />
      </ul>
    </details>
  </nav>
</template>

<script setup>
import { useStore } from "~/stores/index.js"
import { breakpointsTailwind } from "@vueuse/core"

const postsId = useStore().getId("posts")
const demoId = useStore().getId("demo")

const xl = useBreakpoints(breakpointsTailwind).greater("xl")
</script>

<style scoped>
details {
  &:not([open]) {
    & .pages-opened {
      @apply hidden;
    }
  }

  &[open] {
    & .pages-closed {
      @apply hidden;
    }
  }
}
</style>

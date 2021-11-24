<template>
  <span class="font-bold">
    <vscode-icons-default-folder-opened v-if="inside(folder)" />
    <vscode-icons-default-folder v-else />
    {{ folder }}
  </span>
</template>

<script setup>
function inside(string) {
  return useRoute().path.startsWith(`/${string}`)
}

const props = defineProps({
  folder: {
    type: String,
    default: ""
  }
})
</script>

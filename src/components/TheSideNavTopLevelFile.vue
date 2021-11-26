<template>
  <li
    v-for="(item, index) in sideNavFiles"
    :key="index"
    class="list-none mt-2 first:mt-4"
  >
    <router-link :to="item.to">
      <vscode-icons-file-type-markdown v-if="item.extension === 'md'" />

      <vscode-icons-file-type-vue v-if="item.extension === 'vue'" />
      {{ item.name }}
      <span class="text-$secondary">.{{ item.extension }}</span>
    </router-link>
  </li>
</template>

<script setup>
// Get all routes
const routes = useRouter().getRoutes()

// Check if the string has double slash. Files in subfolders have them, e.g. /posts/chart-js.md
function inSubFolder(string) {
  return /\/.*\//.test(string)
}

// Manual input of vue files
const vueFiles = ["index", "about", "all"]

// Check if the string is in the vueFiles array. If not, return md as the extension
function extension(string) {
  return vueFiles.indexOf(string) !== -1 ? "vue" : "md"
}

// Sort the name alphabetically
function compareName(a, b) {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

// Get top level files in pages/
const sideNavFiles = routes

  // Keep the routes that are not in a subfolder
  .filter((route) => !inSubFolder(route.path))

  // Tidy the objects to only contain link, name, and extension
  .map((route) => {
    const obj = {}

    obj.to = route.path
    obj.name = route.name
    obj.extension = extension(route.name)

    return obj
  })

  // Sort the array by name
  .sort(compareName)

  // Take out 404 page
  .filter((file) => file.name !== "all")
</script>

<template>
  <header id="header" class="bg-$highlights rounded-b-lg shadow-lg w-screen">
    <div
      class="flex flex-wrap mx-auto text-center py-1 px-4 w-11/12 justify-center items-center"
    >
      <router-link to="/" class="-ml-2 p-4">
        <img src="/favicon.ico" />
      </router-link>

      <button
        class="border-none cursor-pointer text-yellow hover:opacity-80"
        title="Toggle dark mode"
        @click="toggleDark()"
      >
        <carbon-moon v-if="isDark" />
        <carbon-sun v-else />
      </button>

      <nav>
        <ul class="flex flex-wrap my-0 justify-between">
          <li v-for="(item, index) in mainNav" :key="index">
            <router-link
              :to="`/${item === 'home' ? '' : item}`"
              class="py-4 px-2"
            >{{ item }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)

const mainNav = ["home", "about", "contact"]
</script>

<style scoped>
@media (min-width: 450px) {
  nav {
    @apply ml-auto;
  }
}
</style>

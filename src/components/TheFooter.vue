<template>
  <footer>
    <div class="bg-$highlights rounded-t-lg shadow-lg w-screen">
      <div
        class="
          flex flex-wrap
          mx-auto
          py-1
          px-4
          w-11/12
          justify-between
          items-center
        ">
        <ul class="flex items-center">
          <li
            v-for="(item, index) in social"
            :key="index"
            class="list-none mr-2 first:-ml-4">
            <a
              :href="item.url"
              target="_blank"
              class="text-xl p-2"
              :title="item.name">
              <carbon-logo-youtube v-if="item.name === 'youtube'" />

              <carbon-logo-github v-else-if="item.name === 'github'" />

              <carbon-checkbox v-else />
            </a>
          </li>
        </ul>

        <p class="ml-auto my-0 text-center">Yasmin ZY &copy; 2021</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const social = [
  {
    name: "youtube",
    url: "http://www.youtube.com/c/YasminZulfatiYusrina"
  },
  {
    name: "github",
    url: "https://github.com/yasminzy/yasminzy.com"
  }
]
</script>

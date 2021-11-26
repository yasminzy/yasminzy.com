<template>
  <ul v-if="props" class="flex flex-wrap my-8 -mr-2 -ml-2 pl-0">
    <li
      v-for="item in posts"
      :key="item.id"
      class="bg-$highlights border-$highlights border-solid rounded-lg flex-grow list-none border-4 h-60 m-2 shadow hover:shadow-lg first:w-[30rem]"
    >
      <router-link :to="`/posts/${item.id}`" class="h-full block relative">
        <div class="rounded-lg h-full overflow-hidden">
          <BaseImg
            :slug="item.id"
            class="rounded-lg cursor-pointer h-full object-cover object-center w-full transition ease-in-out duration-200 hover:opacity-75"
          />
        </div>

        <div
          class="bg-$background border-solid border-$highlights rounded-lg border-4 text-xl text-center p-4 transform top-2/4 left-2/4 z-10 -translate-y-2/4 -translate-x-2/4 absolute pointer-events-none"
        >{{ item.id }}</div>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Array,
    default() {
      return []
    }
  }
})
</script>

<style scoped>
li:nth-child(2n) {
  width: 10rem;
}

li:nth-child(3n) {
  width: 15rem;
}

li:nth-child(5n) {
  width: 20rem;
}

a:hover img {
  @apply transform scale-150;
}
</style>

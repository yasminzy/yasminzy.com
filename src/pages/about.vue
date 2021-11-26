<template>
  <div>
    <TheHead
      title="About Yasmin ZY"
      description="Info about Yasmin Zulfati Yusrina"
    />

    <hr class="mb-8" />

    <h1 class="uppercase">About Me</h1>

    <div class="grid gap-8 md:grid-cols-[1fr,2fr]">
      <div
        class="border-solid border-$highlights rounded-lg h-full border-4 w-full wrapper overflow-hidden"
      >
        <img
          src="../assets/img/yasmin.jpeg"
          class="rounded-lg h-full object-cover object-center w-full transition ease-in-out duration-200"
        />
      </div>

      <div class="max-w-[80ch]">
        <p class="mt-0 intro">
          My name is Yasmin Zulfati Yusrina. I am 26 years old and I live in
          Samarinda, Indonesia. I started learning to code after I graduated
          from Institut Teknologi Kalimantan in 2016. In 2018, I started making
          Vue tutorials on
          <a
            href="https://www.youtube.com/c/YasminZulfatiYusrina"
          >YouTube</a>
          and my website.
        </p>

        <p>
          I also worked as a front-end web developer in Jakarta for a bit before
          I continued my study at Institut Teknologi Bandung. I got so busy and
          barely ever coded.
        </p>

        <p>
          When I dive back to web development recently (I finally graduated),
          everything has changed 🤣 It is still fun, though, so I decided to
          rebuild my website and make Vue tutorials again.
        </p>

        <p>
          Besides web development, I am also interested in intermittent fasting
          and exercise. I used to jog a few times a week before Covid-19, but
          now I like jumping rope more. I also like playing games and reading
          webtoon.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.intro:first-letter {
  @apply font-mono pt-2 pr-2 text-6xl float-left;
}

.wrapper:hover img {
  @apply transform scale-150;
}
</style>

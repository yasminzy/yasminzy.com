<template>
  <TheHeader />

  <div class="my-8 w-screen p-4">
    <div class="mx-auto w-11/12 xl:(grid gap-20 grid-cols-[1fr,5fr]) ">
      <TheSideNav />

      <main>
        <router-view />
      </main>
    </div>
  </div>

  <TheFooter />
</template>

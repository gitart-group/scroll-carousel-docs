<script setup lang="ts">
useHead({
  titleTemplate: 'Gitart Scroll Carousel | %s',
  meta: [
    {
      name: 'description',
      content: 'Documentation for Gitart Scroll Carousel. Carousel Vue Component. Docs',
    },
  ],
})
</script>

<template>
  <div class="sm:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpeg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar />
    <NuxtPage />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>

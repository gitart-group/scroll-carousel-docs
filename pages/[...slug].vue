<template>
  <div class="max-w-3xl py-10 m-auto bg-white px-8 sm:shadow dark:bg-gray-800 sm:rounded">
    <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
      <template #not-found>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang="postcss">
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
</style>

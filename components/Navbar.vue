<template>
  <div class="flex justify-between max-w-3xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200">
      <ContentNavigation v-slot="{ navigation }">
        <NuxtLink
          v-for="link of navigation"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
          class="mr-4"
        >
          {{ link.navTitle || link.title }}
        </NuxtLink>
      </ContentNavigation>
    </div>

    <div class="space-x-3 text-gray-500 transition">
      <a
        href="https://twitter.com/MichaelGitart"
        title="Twitter"
        class="hover:text-gray-700 dark:hover:text-gray-300"
      >
        <Icon name="fa-brands:twitter" />
      </a>

      <a
        href="https://github.com/gitart-group/scroll-carousel"
        title="GitHub"
        class="hover:text-gray-700 dark:hover:text-gray-300"
      >
        <Icon name="fa-brands:github" />
      </a>

      <a
        href="https://www.npmjs.com/package/gitart-scroll-carousel"
        title="NPM"
        class="hover:text-gray-700 dark:hover:text-gray-300"
      >
        <Icon name="fa-brands:npm" />
      </a>

      <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index: number
}>()
</script>

<template>
  <div class="bg-white dark:bg-gray-700 rounded-md p-3 relative">
    <img
      class="w-full h-32 m-0 object-cover rounded-md"
      src="https://picsum.photos/800/600"
      alt=""
    >
    <div class="absolute top-5 left-5 w-10 h-10 bg-gray-800 bg-opacity-90 text-white rounded-full text-md font-bold flex items-center justify-center">
      {{ index + 1 }}
    </div>
  </div>
</template>

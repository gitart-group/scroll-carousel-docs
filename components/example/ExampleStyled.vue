<script setup lang="ts">
import ImageSlide from '@/components/shared/ImageSlide.vue'

const items = useItems(15)
</script>

<template>
  <div class="base-style">
    <GSCarousel
      :items="items"
      :item-gap="12"
      :preview-size="30"
      :items-to-show="2"
    >
      <template #item="{ data }">
        <ImageSlide :index="data" />
      </template>
    </GSCarousel>
  </div>
</template>

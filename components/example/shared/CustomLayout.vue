<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomLayout',
  props: {
    onMove: {
      type: Function as PropType<(to: number) => void>,
      required: true,
    },
    disabledSide: {
      type: String as PropType<'left' | 'right' | 'none'>,
      required: true,
    },
    currentItem: {
      type: Number,
      required: true,
    },
    items: {
      type: Array as PropType<any[]>,
      required: true,
    },

    /**
     * layout specific props
     */

    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div>
    <div class="custom-layout-header">
      <div class="custom-layout-header__title">
        {{ title }}
      </div>

      <div class="custom-layout-header__indicator">
        <slot name="indicator" />
      </div>
    </div>

    <slot name="track" />

    <div class="custom-layout-arrows">
      <div @click="onMove(-1)">
        {{ '<' }}
      </div>

      <div @click="onMove(1)">
        {{ '>' }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-layout-header {
  display: flex;
  align-items: center;
  gap: 20px;

  &__title {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
  }

  &__indicator {
    flex: 1;
  }
}

.custom-layout-arrows {
  display: flex;

  div {
    background: #6366f1;
    margin: 5px;
    padding: 10px;
  }
}
</style>

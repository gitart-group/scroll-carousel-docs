<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps({
  // put %{1} to put there modelValue
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const proxiedModelValue = useVModel(props, 'modelValue')

const inputLabel = computed(() => {
  const { label, modelValue } = props
  return label.replace('%{1}', modelValue.toString())
})

</script>

<template>
  <label class="inline-flex flex-col">
    <span class="text-sm font-medium mb-2">
      {{ inputLabel }}
    </span>

    <div class="flex align-center">
      <input
        v-model="proxiedModelValue"
        type="checkbox"
        class="form-checkbox"
      >

      <span class="ml-2 leading-3 ">
        {{ proxiedModelValue }}
      </span>
    </div>
  </label>
</template>

<style lang="scss" scoped></style>

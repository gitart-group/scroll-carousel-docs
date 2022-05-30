<script setup lang="ts">
const props = defineProps({
  lable: {
    type: String,
    default: 'View Source',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits({
  'update:modelValue': (val: boolean) => true,
})

const scopedModelValue = ref(false)
watch(() => props.modelValue, (val) => {
  scopedModelValue.value = val
})

const onToggle = () => {
  scopedModelValue.value = !scopedModelValue.value
  emit('update:modelValue', scopedModelValue.value)
}
</script>

<template>
  <div>
    <div class="toggle-block-label" @click="onToggle">
      {{ lable }}
    </div>

    <slot v-if="scopedModelValue" />
  </div>
</template>

<style lang="scss" scoped>
.toggle-block-label {
  @apply
    text-sm font-medium
    rounded-lg
    py-2 px-3
    transition-all
    cursor-pointer
    shadow shadow-gray-300
    hover:bg-gray-100 hover:shadow-gray-400;
}
</style>

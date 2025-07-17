<template>
  <input
    class="txtInput"
    v-bind="$attrs"
    :value="modelValue"
    @input="handleInput"
  >
</template>

<script setup lang="ts">
defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style lang="scss" scoped>
.txtInput {
    width: calc(50% - 3rem);
    height: 1.5rem;
    background-color: #0b0a0b;
    color: white;
    border: 1px solid rgba(203, 203, 203, 0.7);
    border-radius: 2rem;
    font-size: 20px;
    padding: 1rem;

}
</style>

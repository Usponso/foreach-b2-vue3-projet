<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="shadow"
    w:bg="neutral-900"
    w:border="~ rounded none"
    w:p="40px"
    w:text="center"
  >
    <slot></slot>
    <p>{{ title }}</p>
  </div>
</template>

<style>
.shadow {
  box-shadow: rgba(58, 60, 63, 0.2) 0px 8px 24px;
}
</style>

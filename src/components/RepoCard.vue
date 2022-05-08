<script setup>
import RepoIcon from "~icons/ri/git-repository-fill";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  visibility: {
    type: String,
    required: false,
  },
  language: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div
    class="shadow"
    w:bg="neutral-900"
    w:border="~ rounded none"
    w:p="10px"
    w:grid="~ cols-1 rows-4"
  >
    <div w:flex="inline">
      <RepoIcon />
      <p>{{ title }}</p>
    </div>
    <div w:grid="row-start-2">
      {{ description }}
    </div>
    <div w:grid="row-start-3">
      {{ link }}
    </div>
    <div w:grid="row-start-4" w:flex="inline">
      {{ language }} {{ visibility }}
    </div>
  </div>
</template>

<style>
.shadow {
  box-shadow: rgba(58, 60, 63, 0.2) 0px 8px 24px;
}
</style>

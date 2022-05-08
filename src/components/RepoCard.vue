<script setup>
import RepoIcon from "~icons/ri/git-repository-line";

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
    required: true,
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
    w:p="20px"
    w:grid="~ cols-1 rows-3 gap-y-2"
  >
    <div w:flex="inline">
      <p>
        <RepoIcon w:text="text-bottom" />&nbsp;
        <a :href="link" w:text="underline">{{ title }}</a>
      </p>
    </div>
    <div w:grid="row-start-2">
      {{ description }}
    </div>
    <div w:grid="row-start-3" w:flex="inline">
      {{ language }} {{ visibility }}
    </div>
  </div>
</template>

<style>
.shadow {
  box-shadow: rgba(58, 60, 63, 0.2) 0px 8px 24px;
}
</style>

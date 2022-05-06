<script setup>
import { useCycleList } from "@vueuse/core";
import TranslateIcon from "~icons/mdi/translate";

const { t, locale, availableLocales } = useI18n();
const { next: nextLang } = useCycleList(availableLocales, {
  initialValue: locale,
});
</script>

<template>
  <nav w:w="full" w:flex="inline" w:justify="between" w:text="[20px]" w:p="8">
    <p class="gradient-text" w:font="800">&lt;e.a/&gt;</p>
    <ul
      w:grid="inline col-start-1 col-end-4 cols-4"
      w:justify="items-center"
      w:align="content-center"
    >
      <li class="menu-link">
        <RouterLink to="/">{{ t("home") }}</RouterLink>
      </li>
      <li class="menu-link">
        <a href="#skills">{{ t("skills") }}</a>
      </li>
      <li class="menu-link">
        <a href="#projects">{{ t("projects") }}</a>
      </li>
      <li class="menu-link">
        <button @click="() => (locale = nextLang())">
          <TranslateIcon /> {{ locale }}
        </button>
      </li>
    </ul>
    <div w:align="self-center">
      <RouterLink
        to="/contact"
        w:bg="primary"
        w:text="white"
        w:p="x-5 y-2"
        w:border="~ rounded none"
      >
        {{ t("contact") }}
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.menu-link {
  display: inline-block;
  position: relative;
}
.menu-link:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -15px;
  left: 0;
  background: -webkit-linear-gradient(45deg, #21bde4, #b548c6 90%);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.menu-link:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.gradient-text {
  background: -webkit-linear-gradient(45deg, #21bde4, #b548c6 60%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

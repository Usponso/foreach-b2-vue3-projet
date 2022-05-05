<script setup>
import StarField from "@troisjs/components/src/stars/StarField.vue";
import * as palettes from "nice-color-palettes/100.json";
const niceColors = palettes.default;
const colors = ["#66FFFF", "#8CBFE6", "#B380CC", "#D940B3", "#FF0099"]; //niceColors[95]
const velocity = ref(1);
//https://assets.codepen.io/33787/sprite.png
//https://klevron.github.io/codepen/misc/star.png

const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <StarField
    w:w="screen"
    id="starfield"
    star="https://klevron.github.io/codepen/misc/star.png"
    cloud="./src/assets/clouds1.jpg"
    :count="50000"
    :velocity="velocity"
    :colors="colors"
  />
  <div
    w:grid="col-span-2"
    style="pointer-events: none"
    w:text="center"
    w:h="screen"
  >
    <p w:m="t-[15%]" w:text="[55px] light-50">{{ t("presentation1") }}</p>
    <br />
    <p w:text="[75px]" w:font="800" class="gradient-text">Enzo Averlant</p>
    <br />
    <p w:text="[55px] light-50">{{ t("presentation2") }}</p>
    <br />
    <br />
    <br />
    <RouterLink
      style="pointer-events: all"
      to="/contact"
      class="btn-grad"
      @mouseenter="velocity = 100"
      @mouseleave="velocity = 1"
    >
      {{ t("contact") }}
    </RouterLink>
  </div>

  <div>
    <hr />
    TEST
  </div>
</template>

<style scoped>
.gradient-text {
  text-transform: uppercase;
  background: linear-gradient(to right, #21bde4 30%, #b548c6 65%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #21bde4 0%,
    #b548c6 51%,
    #21bde4 100%
  );
}
.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>

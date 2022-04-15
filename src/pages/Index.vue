<script setup>
const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <div w:grid="~ cols-3">
    <div id="presentation" w:grid="col-span-2" w:m="t-[20%]">
      <p w:text="[25px] light-50">{{ t("presentation1") }}</p>
      <br />
      <p w:text="[45px]" w:font="bold">Enzo Averlant</p>
      <br />
      <p w:text="[25px] light-50">{{ t("presentation2") }}</p>
      <br />
      <RouterLink
        to="/contact"
        w:bg="primary"
        w:text="white"
        w:p="10px"
        w:border="~ rounded none"
        >{{ t("contactme") }}</RouterLink
      >
    </div>
    <div class="illustration" w:text="center">
      <img src="../assets/dev.svg" />
    </div>
  </div>
</template>

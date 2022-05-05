<script setup></script>

<template>
  <div class="glass" w:w="full" w:font="Hellix 500">
    <header w:text="[18px]">
      <Appbar style="z-index: 1" w:pos="absolute" />
    </header>

    <main class="glass" w:p="60px">
      <RouterView />
    </main>
  </div>
</template>

<style>
html {
  color: white;
  min-height: 100vh;
  background-color: black;
  overflow-x: hidden;
}
.glass {
  background: black;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  min-height: 100vh;
  height: 100%;
}
#starfield {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
}
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: white white;
}
/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
}
*::-webkit-scrollbar-track {
  background: black;
}
*::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>

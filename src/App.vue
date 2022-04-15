<script setup></script>

<template>
  <div class="glass" w:p="40px" w:box="border" w:w="full" w:font="Poppins">
    <header w:text="[18px]"><Appbar /></header>

    <main w:p="60px"><RouterView /></main>
  </div>
</template>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #312e81;
  min-height: 100vh;
  background-image: url("./assets/grainy-2.jpg");
  background-size: cover;
  background-attachment: fixed;
}
.glass {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  min-height: 100vh;
  height: 100%;
}
</style>

<template>
  <div w:grid="~ cols-3">
    <div id="presentation" w:grid="col-span-2" w:m="t-[20%]">
      <p w:text="[25px] light-50">Bonjour, je suis</p>
      <br />
      <p w:text="[45px]" w:font="bold">Enzo Averlant</p>
      <br />
      <p w:text="[25px] light-50">Concepteur développeur d'applications</p>
      <br />
      <RouterLink
        to="/contact"
        w:bg="primary"
        w:text="white"
        w:p="10px"
        w:border="~ rounded none"
        >Me contacter</RouterLink
      >
    </div>
    <div class="illustration" w:text="center">
      <img src="https://assets.codepen.io/3364143/glass.png" />
    </div>
  </div>
</template>

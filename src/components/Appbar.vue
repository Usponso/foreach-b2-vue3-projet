<script setup></script>

<template>
  <nav w:w="full" w:grid="inline cols-2" w:p="8">
    <div w:m="left-[20px]">Logo</div>
    <ul w:grid="inline cols-4" w:justify="items-center">
      <li><RouterLink to="/">Accueil</RouterLink></li>
      <li><RouterLink to="/skills">Compétences</RouterLink></li>
      <li><RouterLink to="/projects">Projets</RouterLink></li>
      <li>
        <RouterLink
          to="/contact"
          w:bg="primary"
          w:text="white"
          w:p="10px"
          w:border="~ rounded none"
          >Contact</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

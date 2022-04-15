<script setup></script>

<template>
  <nav w:w="full" w:grid="inline cols-2" w:p="8">
    <div w:m="left-[20px]">
      <img src="../assets/logov3.png" w:w="50px" />
    </div>
    <ul
      w:grid="inline cols-4"
      w:justify="items-center"
      w:align="content-center"
    >
      <li>
        <RouterLink to="/">{{ t("home") }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/skills">{{ t("skills") }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects">{{ t("projects") }}</RouterLink>
      </li>
      <li>
        <RouterLink
          to="/contact"
          w:bg="primary"
          w:text="white"
          w:p="10px"
          w:border="~ rounded none"
          >{{ t("contact") }}</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

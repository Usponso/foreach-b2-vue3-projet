<script setup>
import StarField from "@troisjs/components/src/stars/StarField.vue";
import * as palettes from "nice-color-palettes/100.json";
import { getRepos } from "../composables/getRepos";
import HtmlIcon from "~icons/vscode-icons/file-type-html";
import CssIcon from "~icons/vscode-icons/file-type-css";
import JsIcon from "~icons/vscode-icons/file-type-js-official";
import PhpIcon from "~icons/vscode-icons/file-type-php3";
import VueIcon from "~icons/vscode-icons/file-type-vue";
import SqlIcon from "~icons/vscode-icons/file-type-mysql";
import CSharpIcon from "~icons/vscode-icons/file-type-csharp2";
import BootstrapIcon from "~icons/logos/bootstrap";
import GithubIcon from "~icons/mdi/github";
import PythonIcon from "~icons/vscode-icons/file-type-python";

const repos = ref();

onMounted(async () => {
  repos.value = await getRepos();
  console.log(repos);
});

//const niceColors = palettes.default;
const colors = ["#66FFFF", "#8CBFE6", "#B380CC", "#D940B3", "#FF0099"]; //niceColors[95]
const velocity = ref(1);

const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <div w:m="b-[100px]" style="pointer-events: all">
    <StarField
      w:w="screen"
      id="starfield"
      star="https://klevron.github.io/codepen/misc/star.png"
      :count="5000"
      :velocity="velocity"
      :colors="colors"
    />
    <div
      style="pointer-events: none"
      w:text="center"
      w:h="screen"
      w:p="t-[15%]"
    >
      <p w:text="[55px] light-50">{{ t("presentation1") }}</p>
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
  </div>

  <section w:m="b-[100px]" id="skills">
    <p w:text="[55px] center" class="gradient-text" w:font="700">
      {{ t("skills") }}
    </p>
    <div w:grid="~ cols-5 gap-6" w:m="t-[50px]">
      <SkillCard title="HTML5">
        <HtmlIcon style="font-size: 5em" />
      </SkillCard>
      <SkillCard title="CSS3">
        <CssIcon style="font-size: 5em" />
      </SkillCard>
      <SkillCard title="JavaScript">
        <JsIcon style="font-size: 5em" />
      </SkillCard>
      <SkillCard title="PHP">
        <PhpIcon style="font-size: 5em" />
      </SkillCard>
      <SkillCard title="SQL">
        <SqlIcon style="font-size: 5em" />
      </SkillCard>
      <SkillCard title="Vue.js">
        <VueIcon style="font-size: 5em" />
      </SkillCard>
      <SkillCard title="C#">
        <CSharpIcon style="font-size: 5em" />
      </SkillCard>
      <SkillCard title="Bootstrap">
        <BootstrapIcon style="font-size: 5em" />
      </SkillCard>
      <SkillCard title="Github">
        <GithubIcon style="font-size: 5em" />
      </SkillCard>
      <SkillCard title="Python">
        <PythonIcon style="font-size: 5em" />
      </SkillCard>
    </div>
  </section>

  <section id="projects">
    <p w:text="[55px] center" class="gradient-text" w:font="700">
      {{ t("projects") }}
    </p>
    <div w:grid="~ cols-2 gap-6" w:m="t-[50px]">
      <RepoCard
        v-for="repo in repos"
        :title="repo.name"
        :description="repo.description"
        :link="repo.url"
      />
    </div>
  </section>
</template>

<style scoped>
.gradient-text {
  text-transform: uppercase;
  background: linear-gradient(to right, #21bde4 30%, #b548c6 65%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient-sep {
  background: linear-gradient(to right, #21bde4 30%, #b548c6 65%);
  margin: auto;
  border: none;
  height: 5px;
  width: 10%;
  margin-bottom: 100px;
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

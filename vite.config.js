import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";
import windiCSS from "vite-plugin-windicss";
import pages from "vite-plugin-pages";
import icons from "unplugin-icons/vite";
import components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: ["vue", "vue-router"],
      dts: "./auto-imports.d.ts",
    }),
    windiCSS(),
    pages(),
    icons(),
    components(),
  ],
});

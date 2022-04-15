import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";
import windiCSS from "vite-plugin-windicss";
import pages from "vite-plugin-pages";
import icons from "unplugin-icons/vite";
import components from "unplugin-vue-components/vite";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "./auto-imports.d.ts",
    }),
    windiCSS(),
    pages(),
    icons(),
    components(),
    vueI18n({
      include: path.resolve(__dirname, "./src/locales/**"),
    }),
  ],
});

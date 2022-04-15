import App from "./App.vue";
import router from "./router.js";
import "virtual:windi.css";

const app = createApp(App);

import messages from "@intlify/vite-plugin-vue-i18n/messages";

const i18n = createI18n({
  locale: "fr",
  messages,
});

app.use(i18n);
app.use(router);
app.mount("#app");

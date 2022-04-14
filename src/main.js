import App from "./App.vue";
import router from "./router.js";
import "virtual:windi.css";

const app = createApp(App);

app.use(router);
app.mount("#app");

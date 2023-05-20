import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import VueScrollTo from "vue-scrollto";
import vClickOutside from "v-click-outside";

const app = createApp(App);
app.use(router);
app.use(vClickOutside);
app.mount("#app");

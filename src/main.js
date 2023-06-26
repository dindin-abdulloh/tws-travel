import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import VueScrollTo from "vue-scrollto";
import vClickOutside from "v-click-outside";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);
app.use(router);
app.use(vClickOutside);
app.component('VueDatePicker', VueDatePicker);
app.mount("#app");

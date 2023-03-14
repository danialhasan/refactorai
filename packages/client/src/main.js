import { createApp } from "vue";
import App from "./App.vue";
import "../styles/reset.css";
import "../styles/styles.css";

const pinia = createPinia();

createApp(App).mount("#app");

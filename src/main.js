import { createApp } from "vue";
import "./styles/base.css";
import "./styles/package/ham.css";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
export default app;

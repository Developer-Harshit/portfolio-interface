import { createApp } from "vue";
import App from "./App.vue";
import uiH2 from "./components/UI/ui-h2.vue";

import uiH3 from "./components/UI/ui-h3.vue";
const app = createApp(App);
app.component("ui-h2", uiH2);
app.component("ui-h3", uiH3);

app.mount("#app");
export default app;

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faCamera,
  faCaretDown,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faMinusSquare,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";

import "./index.css";

library.add(
  faBars,
  faUser,
  faCamera,
  faCaretDown,
  faMinusSquare,
  faPlusSquare,
  faEraser
);

createApp(App)
  .use(router)
  .use(createPinia())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

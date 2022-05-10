import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HeaderView from "@/views/HeaderView.vue";
import FooterView from "@/views/FooterView.vue";
import RouletteView from "@/views/RouletteView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    components: {
      header: HeaderView,
      main: RouletteView,
      footer: FooterView,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

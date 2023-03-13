import Vue from "vue";
import Router from "vue-router";

import CalendarBlock from "@/pages/CalendarBlock.vue";
import MainBlock from "@/pages/MainBlock.vue";
import WeatherBlock from "@/pages/WeatherBlock.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/Calendar",
      name: "calendar",
      component: CalendarBlock,
      props: true,
    },
    {
      path: "/Weather",
      name: "weather",
      component: WeatherBlock,
    },
    {
      path: "/",
      name: "main",
      component: MainBlock,
    },
  ],
});

export default router;

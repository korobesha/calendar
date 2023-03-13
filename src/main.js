import Vue from "vue";
import App from "./App.vue";
// import '@/assets/styles/main.css'
import "normalize.css";
import store from "./store";
import router from "@/router/router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");

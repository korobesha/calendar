import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentProjectYear: new Date().getFullYear(),
    vueTitle: "",
  },
  mutations: {
    SET_CURRENT_YEAR(state, increment) {
      state.currentProjectYear =
        increment == 0
          ? new Date().getFullYear()
          : state.currentProjectYear + increment;
    },
    SET_TITLE(state, title) {
      state.vueTitle = title;
    },
  },
  getters: {},
  actions: {},
});
export default store;

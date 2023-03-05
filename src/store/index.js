import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentProjectYear: new Date().getFullYear(),
  },
  mutations: {
    SET_CURRENT_YEAR(state) {
      state.currentProjectYear = new Date().getFullYear();
    },
    INCR_CURRENT_YEAR(state) {
      state.currentProjectYear = state.currentProjectYear + 1;
    },
    DECR_CURRENT_YEAR(state) {
      state.currentProjectYear = state.currentProjectYear - 1;
    },
  },
  getters: {},
  actions: {},
});
export default store;

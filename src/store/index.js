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
      state.currentProjectYear++;
    },
    DECR_CURRENT_YEAR(state) {
      state.currentProjectYear--;
    },
  },
  getters: {},
  actions: {},
});
export default store;

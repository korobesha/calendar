import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentProjectYear: null,
  },
  mutations: {
    SET_CURRENT_YEAR(state, year) {
      state.currentProjectYear = year;
    },
  },
  getters: {},
  actions: {},
});
export default store;

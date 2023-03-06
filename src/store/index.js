import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentProjectYear: new Date().getFullYear(),
  },
  mutations: {
    SET_CURRENT_YEAR(state, increment) {
      if (increment == 0) {
        state.currentProjectYear = new Date().getFullYear();
      } else if (
        (state.currentProjectYear <= new Date().getFullYear() - 6 &&
          increment < 0) ||
        (state.currentProjectYear >= new Date().getFullYear() + 1 &&
          increment > 0)
      ) {
        state.currentProjectYear = state.currentProjectYear + 0;
      } else {
        state.currentProjectYear = state.currentProjectYear + increment;
      }
    },
  },
  getters: {},
  actions: {},
});
export default store;

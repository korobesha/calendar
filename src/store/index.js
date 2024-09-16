import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentProjectYear: new Date().getFullYear(),
    orderForms: [],
  },
  mutations: {
    SET_CURRENT_YEAR(state, increment) {
      state.currentProjectYear =
        increment == 0
          ? new Date().getFullYear()
          : state.currentProjectYear + increment;
    },
    SET_FEED_BACK(state, order) {
      state.orderForms.push(order);
    },
    DELETE_ORDER(state, orderId) {
      const deleteId = state.orderForms.findIndex(
        (order) => order.order_id === orderId
      );
      state.orderForms.splice(deleteId, 1);
    },
  },
  getters: {},
  actions: {},
});

export default store;

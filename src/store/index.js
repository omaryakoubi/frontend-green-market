import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {
    STATE: (state) => state.cart,
  },
  mutations: {
    SET_ITEM: (state, payload) => (state.cart = payload),
    ADD_ITEM: (state, payload) => state.cart.push(payload),
  },
  actions: {},
  modules: {},
});

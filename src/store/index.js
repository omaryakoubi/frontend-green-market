import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    drawer: false,
  },
  getters: {
    GET_CART(state) {
      return state.cart;
    },
    GET_DRAWER(state) {
      return state.drawer;
    },
  },
  mutations: {
    ADD_PRODUCT(state, payload) {
      state.cart.push(payload);
    },
    CHANGE_DRAWER(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    SET_DRAWER(state) {
      state.drawer = !state.drawer;
    },
  },
  modules: {},
});

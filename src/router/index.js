import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";
import Cart from "../components/Cart.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

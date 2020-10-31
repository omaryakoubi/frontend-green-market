import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";
import NumberInput from '../components/NumberInput'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:"/test",
    name:'test',
    component: NumberInput
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

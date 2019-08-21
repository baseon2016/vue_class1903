import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
Vue.use(VueRouter);
const routes = [
  {
    component: Home,
    path: "/"
  },
  {
    component: About,
    path: "/about"
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;

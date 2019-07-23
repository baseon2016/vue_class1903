import Vue from "vue";
import VueRouter from "vue-router";
import PUBLICURL from "./publicPath";
import Main from "./components/Main";
Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [{ path: "/", component: Main }]
});

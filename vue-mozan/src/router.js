import Vue from "vue";
import VueRouter from "vue-router";
import PUBLICURL from "./publicPath";
import Home from "./components/Home.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [{ path: PUBLICURL + "/", component: Home }]
});

import Vue from "vue";
import VueRouter from "vue-router";
import PUBLICURL from "./publicPath";
import Main from "./components/Main";
import AddtoCart from "./components/AddtoCart";
Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: PUBLICURL + "/", component: Main },
    { path: PUBLICURL + "/addtocart", component: AddtoCart }
  ]
});

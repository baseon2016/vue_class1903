import Vue from "vue";
import VueRouter from "vue-router";
import PUBLICURL from "./publicPath";
import Main from "./components/Main";
import AddtoCart from "./components/AddtoCart";
import Cart from "./components/Cart";
Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: PUBLICURL + "/", component: Main },
    { path: PUBLICURL + "/addtocart", component: AddtoCart },
    { path: PUBLICURL + "/cart", component: Cart }
  ]
});

import Vue from "vue";
import VueRouter from "vue-router";
import Order from "./components/Order";
import Comment from "./components/Comment";
import Store from "./components/Store";
Vue.use(VueRouter);
const routes = [
  {
    component: Order,
    path: "/"
  },
  {
    component: Comment,
    path: "/comment"
  },
  {
    component: Store,
    path: "/store"
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;

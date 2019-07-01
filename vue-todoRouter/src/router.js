import Vue from "vue";
import VueRouter from "vue-router";
import All from "./components/All.vue";
import Active from "./components/Active.vue";
import Complete from "./components/Complete.vue";

Vue.use(VueRouter);

const routes = [
  {
    component: All,
    path: "/"
  },
  {
    component: Active,
    path: "/active"
  },
  {
    component: Complete,
    path: "/complete"
  }
];
const router=new VueRouter({
  routes:routes,
  mode:'history'
})
export default router;

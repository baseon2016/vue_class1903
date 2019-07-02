import Vue from "vue";
import VueRouter from "vue-router";
import Topics from "./components/Topics";
import Pins from "./components/Pins";
import Talks from "./components/Talks";
Vue.use(VueRouter);
const routes = [
  {
    component: Topics,
    path: "/"
  },
  {
    component: Pins,
    path: "/pins"
  },
  {
    component: Talks,
    path: "/talks"
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;

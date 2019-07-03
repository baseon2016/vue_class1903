import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Pins from "./components/Pins";
import Talks from "./components/Talks";
import Post from "./components/Post.vue";
Vue.use(VueRouter);
const routes = [
  {
    component: Home,
    path: "/"
  },
  {
    component: Pins,
    path: "/pins"
  },
  {
    component: Talks,
    path: "/talks"
  },
  {
    component: Post,
    path: "/post/:id"
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topic from "./components/Topic.vue";
import User from "./components/User.vue";
Vue.use(VueRouter);
const routes = [
  {
    component: Home,
    path: "/"
  },
  {
    component: Topic,
    path: "/topic/:id"
  },
  {
    component: User,
    path: "/User/:loginname"
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;

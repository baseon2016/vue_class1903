import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Post from "./components/Post.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/post/:id", component: Post }
  ]
});

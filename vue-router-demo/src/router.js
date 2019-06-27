//放项目路由的相关配置
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Pins from "./components/Pins.vue";
import Topics from "./components/Topics.vue";
//给vue项目安装路由功能
Vue.use(VueRouter);
//创建路由
//地址都是小写
const routes = [
  {
    component: Home,
    // /代表的是服务器跟地址，这里指的是localhost:8080
    path: "/"
  },
  {
    component: Pins,
    path: "/pins"
  },
  {
    component: Topics,
    path: "/topics"
  }
];
const router = new VueRouter({
  routes: routes,
  // 路由的模式默认是hash模式 锚点模式(路径会有/#/)
  // 可以修改成history模式(高仿浏览器模式)
  mode: "history"
});
export default router;

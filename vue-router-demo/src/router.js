//放项目路由的相关配置
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Pins from "./components/Pins.vue";
import Topics from "./components/Topics.vue";
import RecommendEnd from "./components/RecommendEnd.vue";
import FrontEnd from "./components/FrontEnd.vue";
import BackEnd from "./components/BackEnd.vue";
import Post from "./components/Post.vue";
import Error from "./components/Error.vue";
//给vue项目安装路由功能
Vue.use(VueRouter);
//创建路由
//地址都是小写
const routes = [
  {
    component: Home,
    // /代表的是服务器跟地址，这里指的是localhost:8080
    path: "/",
    //子路由的 path 开头不能加 / ,子路由默认path的开始是父路由的path
    //当子路由的 path 写成空的时候就相当于父路由的path
    children: [
      {
        path: "",
        component: RecommendEnd
      },
      {
        path: "welcome/recommendend",
        component: RecommendEnd
      },
      {
        path: "welcome/frontend",
        component: FrontEnd
      },
      {
        path: "welcome/backend",
        component: BackEnd
      }
    ]
  },
  {
    component: Pins,
    path: "/pins"
  },
  // 路由的重定向,更换了链接地址，但是用户还在使用原地址的情况
  {
    path: "/topics",
    redirect: "/newtopics"
  },
  {
    component: Topics,
    path: "/newtopics"
  },
  // 文章展示页 有很多页 但是只需要一个组件就够了只不过组件内的数据不一样
  // 把该页面创建成动态页面 动态路由 path的地址内有变量
  // 动态路径参数以 冒号开头 :
  {
    component: Post,
    path: "/post/:id"
  },
  // 当以上路由全部匹配失败就要出404页面，出现404页面的地址有多重情况
  // 所以我们将404路由的path写成* 而且必须写在所有路由的最下面
  {
    component: Error,
    path: "*"
  }
];
const router = new VueRouter({
  routes: routes,
  // 路由的模式默认是hash模式 锚点模式(路径会有/#/)
  // 可以修改成history模式(高仿浏览器模式)
  mode: "history"
});
export default router;

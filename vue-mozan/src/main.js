import Vue from "vue";
import App from "./App.vue";
import "./assets/global.css";
import PUBLICURL from "./publicPath";
import store from "./store";
import { router } from "./router";
import "./assets/plugins/element";
import "./assets/plugins/swiper";
Vue.prototype.$publicUrl = PUBLICURL;
Vue.config.productionTip = false;
// 下面代码使得单页面应用在模拟切换换面时,跳转到页面顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

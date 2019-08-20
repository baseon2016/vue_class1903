import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
new Vue({ render: h => h(App) }).$mount("#app");

// 上面写的是vue框架语法,webpack 默认不能编译,需要使用loader处理
// vue-loader(加载器) 搭配vue-template-compiler(plugin 插件)

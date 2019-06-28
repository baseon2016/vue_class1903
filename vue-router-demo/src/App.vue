<template>
  <div>
    <div class="logo" @click="clicklogo">
      <h1>vue路由</h1>
    </div>
    <div class="header">
      <span>{{$route.path}}</span>
      <ul class="nav">
        <li>
          <!-- 因为home有子路由导致地址发生变化，所以看首页的子页面时，首页的导航变色失效 因为exact 严格匹配 -->
          <!-- 1.当前地址有welcome时，home导航匹配规则不需要严格匹配 -->
          <!-- 2.当前地址没有welcome时，home导航匹配规则需要严格匹配 -->
          <!-- 如何获取当前页面的地址，因为我们的地址都是路由link to改变，获取地址需要去路由文档查找 -->
          <!-- vue路由提供了两个对象供我们查看路由的相关信息 -->
          <!-- 1.this.$route 获取的是当前页面相关的路由信息对象 path属性:获取当前页面的url -->
          <!-- 2.this.$router 获取整个你创建好的路由对象 -->
          <!-- 原生 location:href获取和变更当前页面地址 -->
          <!-- <router-link
            to="/"
            active-class="active-router"
            :exact="$route.path.indexOf('welcome')===-1?true:false"
          >首页</router-link>-->
          <router-link
            to="/"
            :class="$route.path === '/' || $route.path.indexOf('welcome') != -1 ?'active-router':''"
          >首页</router-link>
        </li>
        <li>
          <router-link to="/pins" active-class="active-router">沸点</router-link>
        </li>
        <li>
          <router-link to="/topics" active-class="active-router">话题</router-link>
        </li>
      </ul>
    </div>
    <!-- 展示页面 首页 沸点 话题 -->
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    clicklogo() {
      // 实现页面跳转
      //全局路由对象 $router 有一个push方法做路由的跳转
      // 还有go back forward历史记录的跳转

      console.log(this.$route);
      console.log(this.$router);
      this.$router.push("/");
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
a {
  color: #000;
  text-decoration: none;
}
/* a:visited {
  color: #000;
} */
ul {
  list-style: none;
}
* {
  box-sizing: border-box;
}
h1 {
  margin: 0 auto;
  width: 90%;
  color: #5a4b3c;
}
.header .nav {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #a3b4d5;
  font-size: 20px;
}
.active-router {
  color: #007fff;
}
.logo {
  cursor: pointer;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>

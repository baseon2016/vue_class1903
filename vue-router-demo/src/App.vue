<template>
  <div>
    <h1>vue路由</h1>
    <div class="header">
      <ul class="nav">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/pins">沸点</router-link>
        </li>
        <li>
          <router-link to="/topics">话题</router-link>
        </li>
      </ul>
    </div>
    <!-- 展示页面 首页 沸点 话题 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
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
</style>

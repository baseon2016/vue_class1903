<template>
  <div>
    <div class="home-top">
      <div class="container df">
        <h1 class="logo">
          <img src="./../assets/img/logo.png" />
        </h1>
        <img src="./../assets/img/shopping-bag.png" />
        <div>
          <span>登陆</span>
          <span>/</span>
          <span>注册</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="home-foot"></div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.home-top {
  background-image: url("./../assets/img/main-bg.png");
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.df {
  display: flex;
  align-items: center;
}
.logo {
  align-self: center;
}
</style>

<template>
  <div class="home-top">
    <div class="top-inner container df">
      <img src="./../assets/img/drop-down.png" />
      <h1 class="logo">
        <img src="./../assets/img/logo.png" />
      </h1>
      <div class="df">
        <img class="search" src="./../assets/img/search.png" />
        <img class="bag" src="./../assets/img/shopping-bag.png" />
        <div class="user">
          <span>登陆</span>
          <span>/</span>
          <span>注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-top"
};
</script>

<style>
.home-top {
  background-image: url("./../assets/img/main-bg.png");
}
.top-inner {
  justify-content: space-between;
}
.top-inner .search {
  margin-right: 68px;
}
.top-inner .bag {
  margin-right: 45px;
}
.top-inner .user {
  margin-right: 40px;
}
.logo {
  align-self: center;
}
.user span {
  font-family: serif;
  font-size: 16;
  color: #707479;
}
</style>

<template>
  <div class="home">
    <div class="banner">
      <img
        src="http://fuss10.elemecdn.com/4/08/a624d91136c8f9a40bb23ad9921a9png.png?imageMogr/format/webp/thumbnail/750x/"
      />
    </div>
    <div class="title">
      <div class="logo">
        <img
          src="https://fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/150x/"
        />
      </div>
      <h1>第嘉大食堂</h1>
    </div>
    <div class="shopTab">
      <router-link to="/" active-class="tabed" exact>
        <p>点餐</p>
      </router-link>
      <router-link to="/comment" active-class="tabed">
        <p>评价</p>
      </router-link>
      <router-link to="/store" active-class="tabed">
        <p>商家</p>
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.home .banner {
  flex-shrink: 0;
}
.banner img {
  width: 100%;
}
.home .title {
  width: 90vw;
  margin: 0 auto;
  position: relative;
  flex-shrink: 0;
}
.title .logo {
  width: 25vw;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  position: absolute;
  left: 50%;
  top: -75px;
  transform: translateX(-50%);
  z-index: 1;
}
.title .logo img {
  display: block;
  width: 90%;
  margin: 0 auto;
}
.title h1 {
  padding-top: 25px;
  text-align: center;
  font-size: 20px;
  margin: 0;
}
.home .shopTab {
  flex-shrink: 0;
  display: flex;
  line-height: 2;
}
.shopTab p {
  margin: 5px 0;
}
.tabed {
  color: teal;
  background-color: #aaa;
}
.shopTab a {
  flex-grow: 1;
  text-align: center;
}
</style>

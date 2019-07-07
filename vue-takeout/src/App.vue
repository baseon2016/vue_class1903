<template>
  <div class="main">
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
      <div class="shopTab-1">
        <router-link to="/" active-class="tabed" exact>
          <p>点餐</p>
        </router-link>
      </div>
      <div class="shopTab-2">
        <router-link to="/comment" active-class="tabed">
          <p>评价</p>
        </router-link>
      </div>
      <div class="shopTab-3">
        <router-link to="/store" active-class="tabed">
          <p>商家</p>
        </router-link>
      </div>
    </div>
    <!-- <cube-tab-bar v-model="selectedLabelSlots" show-slider inline>
      <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">
        <router-link :to="item.link">{{item.label}}</router-link>
      </cube-tab>
    </cube-tab-bar>
    -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style scoped>
.main .banner img {
  width: 100%;
}
.main .title {
  width: 90vw;
  margin: 0 auto;
  position: relative;
}
.main .title .logo {
  width: 25vw;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  position: absolute;
  left: 50%;
  top: -75px;
  transform: translateX(-50%);
  z-index: 9;
}
.main .title .logo img {
  display: block;
  width: 90%;
  margin: 0 auto;
}
.main .title h1 {
  padding-top: 25px;
  text-align: center;
  font-size: 20px;
}
.main .shopTab {
  display: flex;
  line-height: 2;
}
.tabed {
  color: teal;
}
.main .shopTab div {
  flex-grow: 1;
  text-align: center;
}
.main .container {
  width: 90%;
  margin: 0 auto;
  padding: 15px 0;
}
</style>
